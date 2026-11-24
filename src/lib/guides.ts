export type Guide = {
  slug: string;
  href: string;
  kicker: string;
  title: string;
  blurb: string;
};

export const guides: Guide[] = [
  {
    slug: "mailchimp-alternatives",
    href: "/alternatives/mailchimp/",
    kicker: "Roundup",
    title: "Mailchimp alternatives",
    blurb: "When a newsletter has outgrown Mailchimp’s contact bill, and when the account should stay because it runs a store.",
  },
  {
    slug: "mailerlite-alternatives",
    href: "/alternatives/mailerlite/",
    kicker: "Roundup",
    title: "MailerLite alternatives",
    blurb: "Comfort and Power prices after the 2026 rename, and which neighboring tools change the monthly bill.",
  },
  {
    slug: "beehiiv-pricing",
    href: "/pricing/beehiiv/",
    kicker: "Pricing",
    title: "beehiiv pricing",
    blurb: "Free, Lite, and Pro at each published subscriber bucket, monthly and annual.",
  },
  {
    slug: "convertkit-pricing",
    href: "/pricing/convertkit/",
    kicker: "Pricing",
    title: "Kit (formerly ConvertKit) pricing",
    blurb: "The free plan to 10,000 subscribers, Creator at $39, and the list sizes we could not read as a fixed price.",
  },
  {
    slug: "flodesk-pricing",
    href: "/pricing/flodesk/",
    kicker: "Pricing",
    title: "Flodesk pricing",
    blurb: "The flat Email and Everything rates, and how they compare with a weekly send on MailCheap.",
  },
  {
    slug: "substack-alternatives",
    href: "/alternatives/substack/",
    kicker: "Roundup",
    title: "Substack alternatives",
    blurb: "When the 10% fee is still the smaller bill, and when a flat plan is worth the move.",
  },
  {
    slug: "convertkit-alternatives",
    href: "/alternatives/convertkit/",
    kicker: "Roundup",
    title: "Kit (ConvertKit) alternatives",
    blurb: "Stay on the free plan while broadcasts fit. Compare paid tools after 10,000 subscribers.",
  },
  {
    slug: "ghost-alternatives",
    href: "/alternatives/ghost/",
    kicker: "Roundup",
    title: "Ghost alternatives",
    blurb: "Keep Ghost when members log into a site. Move when you were paying only to send the letter.",
  },
  {
    slug: "beehiiv-alternatives",
    href: "/alternatives/beehiiv/",
    kicker: "Roundup",
    title: "beehiiv alternatives",
    blurb: "What you give up if you leave recommendations, ads, and paid subscriptions to lower a Lite bill.",
  },
  {
    slug: "mailcheap-vs-beehiiv",
    href: "/compare/mailcheap-vs-beehiiv/",
    kicker: "Comparison",
    title: "MailCheap vs beehiiv",
    blurb: "Weekly and daily bills side by side, and the features MailCheap does not include.",
  },
  {
    slug: "beehiiv-vs-substack",
    href: "/compare/beehiiv-vs-substack/",
    kicker: "Comparison",
    title: "beehiiv vs Substack",
    blurb: "A subscriber tier against 10% of paid revenue, with the list sizes where each one costs less.",
  },
  {
    slug: "mailerlite-vs-mailchimp",
    href: "/compare/mailerlite-vs-mailchimp/",
    kicker: "Comparison",
    title: "MailerLite vs Mailchimp",
    blurb: "Comfort’s published tiers against Mailchimp’s starting prices, and MailCheap when the job is a weekly send.",
  },
  {
    slug: "convertkit-vs-mailchimp",
    href: "/compare/convertkit-vs-mailchimp/",
    kicker: "Comparison",
    title: "Kit (ConvertKit) vs Mailchimp",
    blurb: "Kit’s free broadcasts to 10,000 subscribers, next to Mailchimp’s 250-contact free plan.",
  },
  {
    slug: "ghost-vs-substack",
    href: "/compare/ghost-vs-substack/",
    kicker: "Comparison",
    title: "Ghost vs Substack",
    blurb: "A membership site with a 0% platform fee, or Substack’s 10% when readers pay.",
  },
  {
    slug: "beehiiv-vs-convertkit",
    href: "/compare/beehiiv-vs-convertkit/",
    kicker: "Comparison",
    title: "beehiiv vs Kit (ConvertKit)",
    blurb: "A growth network against a creator CRM, priced at the list sizes both publish.",
  },
  {
    slug: "flodesk-vs-mailchimp",
    href: "/compare/flodesk-vs-mailchimp/",
    kicker: "Comparison",
    title: "Flodesk vs Mailchimp",
    blurb: "One flat sending price against a contact tier that starts at $20 for 500 people.",
  },
  {
    slug: "mailcheap-review",
    href: "/reviews/mailcheap/",
    kicker: "Review",
    title: "MailCheap review",
    blurb: "Who the pay-per-email plans fit, and who should pick a tool that sells subscriptions or stays free.",
  },
  {
    slug: "beehiiv-review",
    href: "/reviews/beehiiv/",
    kicker: "Review",
    title: "beehiiv review",
    blurb: "Who the growth tools are for, with links to the pricing and comparison pages instead of a second price table.",
  },
  {
    slug: "mailerlite-review",
    href: "/reviews/mailerlite/",
    kicker: "Review",
    title: "MailerLite review",
    blurb: "Comfort, Power, and the smaller free plan, for people deciding whether to stay.",
  },
  {
    slug: "how-to-start-a-newsletter",
    href: "/guides/how-to-start-a-newsletter/",
    kicker: "Guide",
    title: "How to start a newsletter",
    blurb: "Write the promise, pick a cadence you can keep, then match a platform to that list and that bill.",
  },
  {
    slug: "how-we-test",
    href: "/how-we-test/",
    kicker: "Method",
    title: "How we test",
    blurb: "Which official pages the prices come from, how a month of sends is counted, and what we do not measure.",
  },
];

export function guidesBySlug(slugs: string[]): Guide[] {
  return slugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is Guide => Boolean(guide));
}

export const footerGuideSlugs = [
  "mailchimp-alternatives",
  "mailerlite-alternatives",
  "beehiiv-pricing",
  "flodesk-pricing",
  "convertkit-pricing",
  "beehiiv-review",
  "mailcheap-review",
  "how-to-start-a-newsletter",
];
