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
    blurb:
      "What to use instead of Mailchimp when the contact-tier bill starts to climb — and when staying put still makes sense.",
  },
  {
    slug: "mailerlite-alternatives",
    href: "/alternatives/mailerlite/",
    kicker: "Roundup",
    title: "MailerLite alternatives",
    blurb:
      "A cost-first look at newsletter platforms people consider after MailerLite, including where the cheaper options fall short.",
  },
  {
    slug: "beehiiv-pricing",
    href: "/pricing/beehiiv/",
    kicker: "Pricing",
    title: "Beehiiv pricing, explained",
    blurb:
      "Lite vs Pro, yearly vs monthly, and what you actually pay at 1,000, 5,000, and 25,000 subscribers.",
  },
  {
    slug: "substack-alternatives",
    href: "/alternatives/substack/",
    kicker: "Roundup",
    title: "Substack alternatives",
    blurb:
      "For writers who want to own their list, keep more of paid revenue, or leave Substack’s 10% fee.",
  },
  {
    slug: "convertkit-alternatives",
    href: "/alternatives/convertkit/",
    kicker: "Roundup",
    title: "Kit (ConvertKit) alternatives",
    blurb:
      "When Kit’s free plan is enough, when Creator is worth it, and which newsletter software is cheaper after 10,000 subscribers.",
  },
  {
    slug: "ghost-alternatives",
    href: "/alternatives/ghost/",
    kicker: "Roundup",
    title: "Ghost alternatives",
    blurb:
      "If you want a newsletter without running a full publication website — or a cheaper host as the membership list grows.",
  },
  {
    slug: "beehiiv-alternatives",
    href: "/alternatives/beehiiv/",
    kicker: "Roundup",
    title: "Beehiiv alternatives",
    blurb:
      "Platforms to consider if you like beehiiv’s growth tools but not the subscriber-tier pricing.",
  },
  {
    slug: "mailcheap-vs-beehiiv",
    href: "/compare/mailcheap-vs-beehiiv/",
    kicker: "Comparison",
    title: "MailCheap vs beehiiv",
    blurb:
      "A side-by-side of list prices, missing features, and who should pay more for beehiiv anyway.",
  },
  {
    slug: "beehiiv-vs-substack",
    href: "/compare/beehiiv-vs-substack/",
    kicker: "Comparison",
    title: "beehiiv vs Substack",
    blurb:
      "Platform fee versus a monthly plan: which bill you actually pay when the newsletter starts earning.",
  },
  {
    slug: "mailcheap-review",
    href: "/reviews/mailcheap/",
    kicker: "Review",
    title: "MailCheap review",
    blurb:
      "An honest look at pay-per-email pricing, the missing growth tools, and who should skip the hosted product.",
  },
  {
    slug: "how-to-start-a-newsletter",
    href: "/guides/how-to-start-a-newsletter/",
    kicker: "Guide",
    title: "How to start a newsletter",
    blurb:
      "Pick a cadence, a list you can send to, and a platform whose bill matches the way you actually write.",
  },
  {
    slug: "how-we-test",
    href: "/how-we-test/",
    kicker: "Method",
    title: "How we test",
    blurb: "How list prices are read, what the calculator counts, and what this site does not measure.",
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
  "substack-alternatives",
  "convertkit-alternatives",
  "beehiiv-alternatives",
  "ghost-alternatives",
  "mailcheap-vs-beehiiv",
];
