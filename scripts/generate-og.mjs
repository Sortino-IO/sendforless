import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const root = process.cwd();
const pagesDir = join(root, "src/pages");
const outDir = join(root, "public/og");
const display = readFileSync(
  join(root, "node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff"),
);
const body = readFileSync(join(root, "node_modules/@fontsource/inter/files/inter-latin-400-normal.woff"));

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (name.endsWith(".mdx") || name === "index.astro") acc.push(full);
  }
  return acc;
}

function quoted(source, pattern) {
  const match = source.match(pattern);
  return match?.[1]?.replace(/\s+/g, " ").trim() ?? "";
}

function meta(file) {
  const source = readFileSync(file, "utf8");
  const rel = relative(pagesDir, file).replace(/\\/g, "/");
  if (rel === "index.astro") {
    return {
      title: quoted(source, /<BaseLayout\s+title="([^"]+)"/),
      kicker: "Newsletter costs",
      out: join(outDir, "home.png"),
    };
  }
  if (rel === "404.astro") return null;
  const title = quoted(source, /^title:\s*"([^"]+)"/m);
  if (!title) return null;
  const slug = rel.replace(/\.mdx$/, "");
  const kicker = quoted(source, /^kicker:\s*"?([^"\n]+)"?\s*$/m).replace(/"$/, "");
  const outName = slug.endsWith("/index") ? `${slug.slice(0, -"/index".length)}.png` : `${slug}.png`;
  return { title, kicker: kicker || "sendforless", out: join(outDir, outName) };
}

function card(title, kicker) {
  const size = title.length > 78 ? 42 : title.length > 52 ? 50 : 58;
  return {
    type: "div",
    props: {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#07070C",
        color: "#f5f5f7",
        padding: "64px 72px",
        fontFamily: "Inter",
      },
      children: [
        {
          type: "div",
          props: {
            style: { display: "flex", alignItems: "center", gap: "14px" },
            children: [
              {
                type: "div",
                props: {
                  style: { width: "14px", height: "14px", borderRadius: "99px", backgroundColor: "#22D3EE" },
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    color: "#C4B5FD",
                    fontSize: 22,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                  },
                  children: kicker,
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              fontFamily: "Space Grotesk",
              fontSize: size,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: -1,
              color: "#f5f5f7",
            },
            children: title,
          },
        },
        {
          type: "div",
          props: {
            style: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
            children: [
              {
                type: "div",
                props: { style: { display: "flex", color: "#8B7CFF", fontSize: 26 }, children: "sendforless.com" },
              },
              {
                type: "div",
                props: {
                  style: { display: "flex", width: "180px", height: "8px", backgroundColor: "#34D399", borderRadius: "99px" },
                },
              },
            ],
          },
        },
      ],
    },
  };
}

const pages = walk(pagesDir).map(meta).filter(Boolean);
for (const page of pages) {
  const svg = await satori(card(page.title, page.kicker), {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Space Grotesk", data: display, weight: 600, style: "normal" },
      { name: "Inter", data: body, weight: 400, style: "normal" },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  mkdirSync(dirname(page.out), { recursive: true });
  writeFileSync(page.out, png);
}
console.log(`Wrote ${pages.length} Open Graph images`);
