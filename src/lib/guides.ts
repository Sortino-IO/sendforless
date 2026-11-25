export type Guide = {
  slug: string;
  href: string;
  kicker: string;
  title: string;
  blurb: string;
};

export type HubGroup = "start" | "costs" | "compare" | "switch";

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
    blurb: "The free plan to 10,000 subscribers, Creator from $39, Pro from $79, and where to check larger lists.",
  },
  {
    slug: "flodesk-pricing",
    href: "/pricing/flodesk/",
    kicker: "Pricing",
    title: "Flodesk pricing",
    blurb: "The flat Email and Everything rates, and how they compare with a weekly send on MailCheap.",
  },
  {
    slug: "mailerlite-pricing",
    href: "/pricing/mailerlite/",
    kicker: "Pricing",
    title: "MailerLite pricing",
    blurb: "Comfort and Power at each published subscriber tier, monthly and at 10% off annually.",
  },
  {
    slug: "mailchimp-pricing",
    href: "/pricing/mailchimp/",
    kicker: "Pricing",
    title: "Mailchimp pricing",
    blurb: "Free limits, the $13 and $20 starting prices at 500 contacts, and why you should check current pricing on larger tiers.",
  },
  {
    slug: "ghost-pricing",
    href: "/pricing/ghost/",
    kicker: "Pricing",
    title: "Ghost pricing",
    blurb: "Starter, Publisher, and Business by member count, monthly and annual, with a 0% platform fee.",
  },
  {
    slug: "substack-pricing",
    href: "/pricing/substack/",
    kicker: "Pricing",
    title: "Substack pricing",
    blurb: "The $0 publishing plan, the 10% fee at three revenue levels, and Stripe on top.",
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
    blurb: "Comfort’s published tiers against Mailchimp’s starting prices, and MailCheap when you send weekly.",
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
    blurb: "Who beehiiv's growth tools suit, what they cost to start, and when to use something else.",
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
    blurb: "Define the audience, pick a schedule you can keep, and match a platform to your list size and bill.",
  },
  {
    slug: "email-marketing-cost",
    href: "/guides/email-marketing-cost/",
    kicker: "Guide",
    title: "How much does email marketing cost?",
    blurb: "List price by list size and send frequency, for free plans, flat plans, and per-email plans.",
  },
  {
    slug: "newsletter-platforms",
    href: "/guides/newsletter-platforms/",
    kicker: "Guide",
    title: "Newsletter platforms compared",
    blurb: "Eight platforms compared by the newsletter they fit and the price at 1,000, 5,000, and 10,000 subscribers.",
  },
  {
    slug: "newsletter-monetization",
    href: "/guides/newsletter-monetization/",
    kicker: "Guide",
    title: "Newsletter monetization",
    blurb: "Platform fees on paid subscriptions, and which tools cannot charge readers at all.",
  },
  {
    slug: "how-we-test",
    href: "/how-we-compare/",
    kicker: "Method",
    title: "How we compare prices",
    blurb: "Which official pages the prices come from, how a month of sends is counted, and what stays off the comparison.",
  },
  {
    slug: "mailchimp-review",
    href: "/reviews/mailchimp/",
    kicker: "Review",
    title: "Mailchimp review",
    blurb: "Who Mailchimp still fits, why people leave, and which job belongs on another tool.",
  },
  {
    slug: "constant-contact-vs-mailchimp",
    href: "/compare/constant-contact-vs-mailchimp/",
    kicker: "Comparison",
    title: "Constant Contact vs Mailchimp",
    blurb: "Starting prices, send multiples, and which list size is still check current pricing.",
  },
  {
    slug: "beehiiv-vs-mailchimp",
    href: "/compare/beehiiv-vs-mailchimp/",
    kicker: "Comparison",
    title: "beehiiv vs Mailchimp",
    blurb: "A subscriber bucket against a contact tier, including the free caps.",
  },
  {
    slug: "substack-vs-mailchimp",
    href: "/compare/substack-vs-mailchimp/",
    kicker: "Comparison",
    title: "Substack vs Mailchimp",
    blurb: "A 10% fee and a $0 publishing plan against Mailchimp's contact bill.",
  },
  {
    slug: "mailcheap-vs-mailchimp",
    href: "/compare/mailcheap-vs-mailchimp/",
    kicker: "Comparison",
    title: "MailCheap vs Mailchimp",
    blurb: "A counted send against a contact tier, and the features MailCheap does not include.",
  },
];

export function guidesBySlug(slugs: string[]): Guide[] {
  return slugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is Guide => Boolean(guide));
}

/** Hub groups. Order inside a group is the order of `slugs`. */
export const hubGroups: { id: HubGroup; title: string; slugs: string[] }[] = [
  {
    id: "start",
    title: "Start",
    slugs: ["how-to-start-a-newsletter", "newsletter-monetization"],
  },
  {
    id: "costs",
    title: "Costs",
    slugs: [
      "email-marketing-cost",
      "beehiiv-pricing",
      "convertkit-pricing",
      "flodesk-pricing",
      "mailerlite-pricing",
      "mailchimp-pricing",
      "ghost-pricing",
      "substack-pricing",
    ],
  },
  {
    id: "compare",
    title: "Compare",
    slugs: [
      "newsletter-platforms",
      "mailcheap-vs-beehiiv",
      "beehiiv-vs-substack",
      "mailerlite-vs-mailchimp",
      "convertkit-vs-mailchimp",
      "ghost-vs-substack",
      "beehiiv-vs-convertkit",
      "flodesk-vs-mailchimp",
    ],
  },
  {
    id: "switch",
    title: "Switch",
    slugs: [
      "mailchimp-alternatives",
      "mailerlite-alternatives",
      "substack-alternatives",
      "convertkit-alternatives",
      "ghost-alternatives",
      "beehiiv-alternatives",
    ],
  },
];

export function guidesInHub(id: HubGroup): Guide[] {
  const group = hubGroups.find((item) => item.id === id);
  return group ? guidesBySlug(group.slugs) : [];
}

export function hubGuides(): Guide[] {
  return hubGroups.flatMap((group) => guidesInHub(group.id));
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
