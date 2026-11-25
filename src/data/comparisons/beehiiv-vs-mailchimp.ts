import { mailcheapHref } from "../../lib/site";
import type { CompareDoc } from "./types";

const mc = mailcheapHref("/pricing");

export const beehiivVsMailchimp: CompareDoc = {
  id: "beehiiv-vs-mailchimp",
  a: "beehiiv",
  b: "Mailchimp",
  platformA: "beehiiv",
  platformB: "Mailchimp",
  cheaperToggle: true,
  switchingTitle: "Switching from Mailchimp to beehiiv",
  chooseA: "You want a publication site, recommendations, and, on Lite, paid subscriptions at a 0% platform fee.",
  chooseB: "You need store journeys, several audiences, or you are still inside Mailchimp's 250-contact free plan.",
  priceNoteA: "Lite, up-to-5,000 bucket, $109 a month. Free is $0 through 2,500.",
  priceNoteB: "Above 500 contacts. Essentials starts at $13 and Standard at $20 for up to 500.",
  linkA: { href: "https://www.beehiiv.com/pricing", label: "beehiiv pricing" },
  linkB: { href: "https://mailchimp.com/pricing/marketing/", label: "Mailchimp pricing" },
  differencesIntro: [
    `beehiiv vs Mailchimp splits a publication from a contact database. beehiiv Free is $0 up to 2,500 subscribers and includes unlimited sends. It does not include automations, the ad network, or paid subscriptions. Lite at 4,000 subscribers is the up-to-5,000 bucket, $109 a month, or $95 a month billed annually ($1,140 a year). Checked 25 November 2026 on beehiiv.com/pricing.md.`,
    `Mailchimp vs beehiiv on price stops being a number above 500 contacts. Free is 250 contacts and 500 sends. Essentials starts at $13 a month and Standard at $20, both for up to 500 contacts. Premium starts at $350. Unsubscribed contacts count. The feature limits are on <a href="/pricing/mailchimp/">Mailchimp pricing</a>.`,
  ],
  differences: [
    {
      topic: "Under 2,500 subscribers",
      favors: "beehiiv Free, if you do not need automations",
      why: "beehiiv Free is $0 with unlimited sends. Mailchimp Free stops at 250 contacts and 500 sends. Essentials at 500 contacts is $13.",
    },
    {
      topic: "At 4,000 subscribers",
      favors: "Open Mailchimp before you decide",
      why: "Lite is $109 a month. Mailchimp is check current pricing. A store that lives in Mailchimp can still be worth the unpublished tier.",
    },
    {
      topic: "Sends",
      favors: "beehiiv, if you send often",
      why: "beehiiv does not meter sends on any plan. Mailchimp allows 10, 12, or 15 times the contact limit, depending on the plan. Free is 500 sends a month.",
    },
    {
      topic: "Paid subscriptions",
      favors: "beehiiv Lite, if readers pay",
      why: "Lite takes 0% of subscription revenue. Stripe still applies. Paid subscriptions are not on beehiiv Free. Mailchimp is not a 0% publication plan.",
    },
    {
      topic: "Recommendations and ads",
      favors: "beehiiv, when that is the growth plan",
      why: "The recommendation network is on Free. The ad network is on Lite and Pro, not in every region, and not in the trial. Mailchimp's growth tools are audiences, ads, and journeys, not that network.",
    },
  ],
  pricingIntro: [
    `beehiiv's published buckets are the price. Do not interpolate. 4,000 subscribers pays the up-to-5,000 Lite price of $109 a month. Lite runs through 100,000 subscribers. Pro starts at $109 a month at the up-to-1,000 bucket and is the plan that removes branding.`,
    `Mailchimp's send multiple is why a daily letter and a weekly letter are different products there, and the same product on beehiiv. A weekly letter to 4,000 people is about 17,300 emails. That does not change Lite. It may or may not fit the Mailchimp tier you have not been shown yet.`,
  ],
  featuresIntro: [
    `beehiiv rows are from pricing.md. Mailchimp rows are from the marketing pricing page and About Mailchimp Pricing Plans. Checked 25 November 2026.`,
  ],
  matrix: [
    {
      name: "Price and sending",
      rows: [
        { feature: "Free cap", a: "2,500 subscribers, unlimited sends", b: "250 contacts, 500 sends a month" },
        { feature: "Paid start", a: "Lite $59/mo up to 1,000", b: "Essentials $13/mo up to 500 contacts" },
        { feature: "At 4,000, monthly", a: "Lite $109", b: "Check current pricing" },
        { feature: "At 4,000, annual effective", a: "Lite $95", b: "Check current pricing" },
        { feature: "Platform fee on paid subs", a: "0% on Lite and Pro", b: "Not the same product" },
      ],
    },
    {
      name: "Product shape",
      rows: [
        { feature: "Automations", a: "Lite: 10 live automations. Free: none", b: "Essentials: up to 4 steps. Standard: expanded" },
        { feature: "Website", a: "Included, including on Free", b: "Landing pages can be tried on Free" },
        { feature: "Recommendations", a: "On Free", b: "Not beehiiv's network" },
        { feature: "Ad network", a: "Lite and Pro, not every region", b: "Mailchimp ads, separate from a newsletter network" },
        { feature: "Who counts", a: "Subscribers", b: "Contacts, including unsubscribed, until archived" },
      ],
    },
  ],
  sections: [
    {
      id: "leave",
      title: "When the publication is the product",
      paragraphs: [
        `Move toward beehiiv when recommendations or a paid subscription at 0% are the business, and you can accept Lite once you pass 2,500 subscribers. Stay on Mailchimp when the journeys and the shop are the business. Price is the wrong only reason to move a store.`,
      ],
    },
  ],
  prosA: {
    pros: [
      "Free covers 2,500 subscribers and unlimited sends.",
      "Every Lite and Pro bucket has a public price.",
      "Lite takes 0% of paid subscriptions.",
      "Sends are not metered.",
    ],
    cons: [
      "Lite at 4,000 subscribers is $109 a month.",
      "Automations and paid subscriptions are not on Free.",
      "The ad network is not in every region and not in the trial.",
      "Branding stays until Pro.",
    ],
  },
  prosB: {
    pros: [
      "Free sends, up to a small cap.",
      "Essentials and Standard have published starts at 500 contacts.",
      "Store connections and journeys can stay.",
      "Short automations start at $13.",
    ],
    cons: [
      "Free stops at 250 contacts and 500 sends.",
      "Unsubscribed contacts count.",
      "Above 500 contacts, check current pricing.",
      "A daily send can exhaust the multiple.",
    ],
  },
  who: [
    `Choose beehiiv Free under 2,500 subscribers if unlimited sends and recommendations are enough. Choose Lite when you need automations or paid subscriptions and you have priced the bucket.`,
    `Choose Mailchimp Free under 250 contacts. Choose Essentials or Standard when 500 contacts at $13 or $20 is the real stored list. Choose to stay, and check current pricing, when the store cannot move.`,
    `Choose Kit (ConvertKit) Free for broadcasts under 10,000 subscribers. Choose MailCheap when you are past beehiiv Free, you do not need ads or a paywall, and the email count fits a published plan.`,
  ],
  switching: [
    `Export Mailchimp contacts before you delete the account. The CSV does not include journeys or purchase history. beehiiv will not recreate them. Import only people who agreed to the newsletter.`,
    `If the list is over 2,500, you are on a paid beehiiv bucket immediately. Recommendations on Free do not require Lite. Ads and paid subscriptions do.`,
  ],
  cheaper: [
    `MailCheap Starter is $19 a month for a weekly letter at 4,000 subscribers if the emails fit 20,000. Lite is $109. Mailchimp is check current pricing. MailCheap does not include recommendations, ads, or paid subscriptions. The affiliate link is <a href="${mc}" rel="sponsored nofollow noopener">MailCheap pricing</a>.`,
  ],
  faqs: [
    {
      q: "Is beehiiv cheaper than Mailchimp?",
      a: "<p>Under 2,500 subscribers, beehiiv Free is $0 and Mailchimp Free stops at 250 contacts. At 4,000 subscribers Lite is $109 and Mailchimp is check current pricing. Compare your Mailchimp tier on Mailchimp's page before you call Lite cheaper.</p>",
    },
    {
      q: "Does beehiiv charge per email the way Mailchimp limits sends?",
      a: "<p>No. beehiiv includes unlimited sends on every plan. Mailchimp's allowance is a multiple of the contact limit, or 500 sends on Free.</p>",
    },
    {
      q: "Is Mailchimp vs beehiiv a store comparison?",
      a: "<p>Only in one direction. Mailchimp vs beehiiv favors Mailchimp when the shop and the journeys stay. It favors beehiiv when the publication, the recommendations, or a 0% subscription fee are the job.</p>",
    },
  ],
  related: [
    { href: "/pricing/beehiiv/", kicker: "Pricing", title: "beehiiv pricing" },
    { href: "/pricing/mailchimp/", kicker: "Pricing", title: "Mailchimp pricing" },
    { href: "/reviews/beehiiv/", kicker: "Review", title: "beehiiv review" },
    { href: "/alternatives/mailchimp/", kicker: "Alternatives", title: "Mailchimp alternatives" },
    { href: "/compare/mailcheap-vs-beehiiv/", kicker: "Comparison", title: "MailCheap vs beehiiv" },
  ],
};
