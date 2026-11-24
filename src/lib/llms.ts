import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SITE_NAME, SITE_URL } from "./site";

export const LLMS_SECTIONS: { heading: string; slugs: string[] }[] = [
  {
    heading: "Alternatives",
    slugs: [
      "alternatives/index",
      "alternatives/mailchimp",
      "alternatives/mailerlite",
      "alternatives/substack",
      "alternatives/convertkit",
      "alternatives/beehiiv",
      "alternatives/ghost",
    ],
  },
  {
    heading: "Pricing",
    slugs: ["pricing/index", "pricing/beehiiv"],
  },
  {
    heading: "Comparisons",
    slugs: ["compare/index", "compare/mailcheap-vs-beehiiv", "compare/beehiiv-vs-substack"],
  },
  {
    heading: "Reviews",
    slugs: ["reviews/index", "reviews/mailcheap"],
  },
  {
    heading: "Guides",
    slugs: ["index", "guides/index", "guides/how-to-start-a-newsletter"],
  },
  {
    heading: "About",
    slugs: ["about", "how-we-test", "affiliate-disclosure", "privacy", "contact"],
  },
];

function quoted(source: string, pattern: RegExp, label: string): string {
  const match = source.match(pattern);
  if (!match?.[1]) throw new Error(`llms.txt: missing ${label}`);
  return match[1].replace(/\s+/g, " ").trim();
}

function pageMeta(pagesDir: string, slug: string): { title: string; description: string; href: string } {
  if (slug === "index") {
    const source = readFileSync(join(pagesDir, "index.astro"), "utf8");
    return {
      title: quoted(source, /<BaseLayout\s+title="([^"]+)"/, "home title"),
      description: quoted(source, /const description =\s*"([^"]+)"/, "home description"),
      href: `${SITE_URL}/`,
    };
  }
  const source = readFileSync(join(pagesDir, `${slug}.mdx`), "utf8");
  const hrefPath = slug.endsWith("/index") ? slug.slice(0, -"index".length) : `${slug}/`;
  return {
    title: quoted(source, new RegExp(`^title:\\s*"([^"]+)"`, "m"), `${slug} title`),
    description: quoted(source, new RegExp(`^description:\\s*"([^"]+)"`, "m"), `${slug} description`),
    href: `${SITE_URL}/${hrefPath}`,
  };
}

/** llmstxt.org document built from the current page titles and meta descriptions. */
export function buildLlmsTxt(pagesDir: string): string {
  const lines = [
    `# ${SITE_NAME}`,
    "",
    "> SendForLess publishes independent newsletter platform comparisons. Some links to MailCheap are affiliate links, and sendforless is not affiliated with MailCheap or any other vendor.",
    "",
  ];
  for (const section of LLMS_SECTIONS) {
    lines.push(`## ${section.heading}`, "");
    for (const slug of section.slugs) {
      const page = pageMeta(pagesDir, slug);
      lines.push(`- [${page.title}](${page.href}): ${page.description}`);
    }
    lines.push("");
  }
  return lines.join("\n").trimEnd() + "\n";
}
