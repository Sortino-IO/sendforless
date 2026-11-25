import { createHash } from "node:crypto";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const vercel = JSON.parse(readFileSync(join(root, "vercel.json"), "utf8"));
const errors = [];

function fail(message) {
  errors.push(message);
}

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

function decode(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function sha256(source) {
  return `sha256-${createHash("sha256").update(source, "utf8").digest("base64")}`;
}

function inlineScripts(html) {
  const found = [];
  const re = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = re.exec(html))) {
    const attrs = match[1];
    if (/\bsrc\s*=/i.test(attrs)) continue;
    if (/type\s*=\s*["']application\/ld\+json["']/i.test(attrs)) continue;
    const body = decode(match[2]);
    if (!body.trim()) continue;
    found.push(body);
  }
  return found;
}

const files = walk(dist);
const textFiles = files.filter((file) => /\.(html|txt|xml|js|css|json)$/i.test(file));

const plainAddress = ["office", "@", "sortino.io"].join("");
const forbidden = [plainAddress, "mailto:", "TURNSTILE", "RESEND_API", "cf-turnstile", "/api/contact", "challenges.cloudflare.com"];
for (const file of textFiles) {
  const text = readFileSync(file, "utf8");
  for (const needle of forbidden) {
    if (text.includes(needle)) fail(`${file} contains ${needle}`);
  }
}

const contactHtml = readFileSync(join(dist, "contact", "index.html"), "utf8");
if (!contactHtml.includes("office [at] sortino [dot] io")) fail("contact page is missing the noscript address");
if (!contactHtml.includes("data-mail=")) fail("contact page is missing the encoded address");
if (contactHtml.includes("contact-form")) fail("contact form is still in the build");

const accessibility = readFileSync(join(dist, "accessibility", "index.html"), "utf8");
for (const phrase of ["WCAG", "IS 5568", "25 November 2026", "office [at] sortino [dot] io"]) {
  if (!accessibility.includes(phrase)) fail(`accessibility page is missing ${phrase}`);
}

const home = readFileSync(join(dist, "index.html"), "utf8");
if (!home.includes('href="/accessibility/"')) fail("footer is missing the accessibility link");
if (!home.includes("Cookie settings")) fail("footer is missing Cookie settings");
if (!home.includes("wait_for_update:500")) fail("home page is missing consent wait_for_update");
if (!home.includes('event:"consent_update"') && !home.includes("consent_update")) {
  fail("home page is missing the consent_update event");
}

const privacy = readFileSync(join(dist, "privacy", "index.html"), "utf8");
for (const phrase of ["_ga", "_ga_*", "European Economic Area", "Switzerland", "Iceland", "Liechtenstein", "Norway"]) {
  if (!privacy.includes(phrase)) fail(`privacy page is missing ${phrase}`);
}

const llms = readFileSync(join(dist, "llms.txt"), "utf8");
if (!llms.includes("/accessibility/")) fail("llms.txt is missing /accessibility/");
if (llms.includes(plainAddress) || llms.includes("mailto:")) fail("llms.txt exposes the editorial address");

const sitemap = files.filter((file) => file.endsWith(".xml")).map((file) => readFileSync(file, "utf8")).join("\n");
if (!sitemap.includes("/accessibility/")) fail("sitemap is missing /accessibility/");

const headers = vercel.headers.find((rule) => rule.source === "/(.*)")?.headers ?? [];
const header = (name) => headers.find((item) => item.key.toLowerCase() === name.toLowerCase())?.value ?? "";
const csp = header("Content-Security-Policy");
if (header("X-Frame-Options") !== "DENY") fail("X-Frame-Options is not DENY");
if (!csp.includes("frame-ancestors 'none'")) fail("CSP is missing frame-ancestors 'none'");
if (header("X-Content-Type-Options") !== "nosniff") fail("nosniff header is missing");
if (header("Referrer-Policy") !== "strict-origin-when-cross-origin") fail("Referrer-Policy is wrong");
if (header("Permissions-Policy") !== "camera=(), microphone=(), geolocation=()") fail("Permissions-Policy is wrong");
if (!header("Strict-Transport-Security").includes("max-age=")) fail("HSTS is missing");
if (header("Cross-Origin-Opener-Policy") !== "same-origin") fail("Cross-Origin-Opener-Policy is not same-origin");
for (const domain of ["googletagmanager.com", "google-analytics.com", "analytics.google.com"]) {
  if (!csp.includes(domain)) fail(`CSP is missing ${domain}`);
}
if (csp.includes("challenges.cloudflare.com") || csp.includes("turnstile")) fail("CSP still names Turnstile");

const scriptSrc = csp.match(/script-src\s+([^;]+)/)?.[1] ?? "";
const usesHash = /sha256-|sha384-|sha512-/.test(scriptSrc);
const allowsUnsafeInline = scriptSrc.includes("'unsafe-inline'");
if (usesHash && allowsUnsafeInline) {
  fail("script-src lists both a hash and 'unsafe-inline'; browsers ignore unsafe-inline");
}

const hashes = new Set();
for (const file of files.filter((item) => item.endsWith(".html"))) {
  for (const source of inlineScripts(readFileSync(file, "utf8"))) {
    const hash = sha256(source);
    hashes.add(hash);
    if (!allowsUnsafeInline && !scriptSrc.includes(`'${hash}'`)) {
      fail(`CSP is missing ${hash} for inline script: ${source.slice(0, 80)}`);
    }
  }
}
if (!allowsUnsafeInline && hashes.size === 0) fail("no inline scripts were hashed");

// Every table-of-contents link must point to an id that exists on the same page.
let tocLinks = 0;
for (const file of files.filter((f) => f.endsWith(".html"))) {
  const html = readFileSync(file, "utf8");
  const tocStart = html.indexOf('class="toc"');
  if (tocStart === -1) continue;
  const tocEnd = html.indexOf("</nav>", tocStart);
  const toc = html.slice(tocStart, tocEnd === -1 ? undefined : tocEnd);
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  for (const [, target] of toc.matchAll(/href="#([^"]+)"/g)) {
    tocLinks += 1;
    if (!ids.has(decode(target))) fail(`${file} TOC links to #${target}, but no element has that id`);
  }
}
if (tocLinks === 0) fail("no table-of-contents links were found to check");

const unique = [...new Set(errors)];
if (unique.length) {
  console.error(unique.join("\n"));
  process.exit(1);
}
console.log(`dist checks passed (${hashes.size} inline script hash${hashes.size === 1 ? "" : "es"}, ${tocLinks} TOC links)`);
