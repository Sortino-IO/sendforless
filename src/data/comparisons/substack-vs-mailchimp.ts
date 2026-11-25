import { mailcheapHref } from "../../lib/site";
import type { CompareDoc } from "./types";

const mc = mailcheapHref("/pricing");

export const substackVsMailchimp: CompareDoc = {
  id: "substack-vs-mailchimp",
  a: "Substack",
  b: "Mailchimp",
  platformA: "Substack",
  platformB: "Mailchimp",
  cheaperToggle: true,
  switchingTitle: "Moving between Substack and Mailchimp",
  chooseA: "You publish a newsletter, readers may pay, and 10% of that revenue is still less than a monthly contact tier.",
  chooseB: "You need automations, several audiences, or a store, and the list is not only a publication.",
  priceNoteA: "$0 platform fee until readers pay. Then 10% plus Stripe.",
  priceNoteB: "Above 500 contacts. Free stops at 250 contacts and 500 sends.",
  linkA: { href: "https://support.substack.com/hc/en-us/articles/360037607131-How-much-does-Substack-cost", label: "Substack pricing help" },
  linkB: { href: "https://mailchimp.com/pricing/marketing/", label: "Mailchimp pricing" },
  differencesIntro: [
    `Substack vs Mailchimp is a fee against a contact tier. Substack's help article, updated October 29, 2026 and checked November 25, 2026, says publishing is free at any list size. Paid subscriptions cost 10% of subscription revenue. Stripe adds its own processing. The article quotes 2.9% + $0.30 for US cards and 0.7% for Stripe Billing. A custom domain is $50 once.`,
    `Mailchimp vs Substack comes down to what you pay for stored contacts. Free is 250 contacts and 500 sends a month, with a daily cap of 250. Essentials starts at $13 a month and Standard at $20, both for up to 500 contacts. Above that, check current pricing. There is no 10% publication fee, because Mailchimp is not priced as a share of reader revenue.`,
  ],
  differences: [
    {
      topic: "Cost to publish a free letter",
      favors: "Substack at any size. Mailchimp only under the free caps.",
      why: "Substack is $0 to publish. Mailchimp Free stops at 250 contacts and 500 sends. A weekly letter to 200 people is about 870 sends and does not fit Mailchimp Free.",
    },
    {
      topic: "When readers pay",
      favors: "Whichever number is smaller at your revenue",
      why: "Substack keeps 10% plus Stripe. Mailchimp's monthly tier does not take a percent, and above 500 contacts, check current pricing for that tier.",
    },
    {
      topic: "Automations",
      favors: "Mailchimp, if the journey is the product",
      why: "Essentials includes flows of up to 4 steps. Standard expands them. Substack is a publication editor, not that automation builder.",
    },
    {
      topic: "Ownership of the list",
      favors: "You can export from either, and the product around the list differs",
      why: "Mailchimp's audience export is a CSV and leaves journeys behind. Substack is the network and the editor as well as the list. Moving either way is a rebuild of the writing surface.",
    },
  ],
  pricingIntro: [
    `Three revenue examples use Substack's 10% and ignore Stripe, so the card fee is extra. At $2,000 a month in paid subscriptions, 10% is $200. At $5,000, 10% is $500. At $10,000, 10% is $1,000. Mailchimp Essentials at the 500-contact starting price is $13, which is less than those cuts. A larger Mailchimp tier might still be less than $500, or it might not. Check current pricing before you treat 10% as the expensive one.`,
  ],
  featuresIntro: [
    `Substack rows are from the help article How much does Substack cost? Mailchimp rows are from the pricing page and the pricing-plans help. Checked November 25, 2026.`,
  ],
  matrix: [
    {
      name: "Price",
      rows: [
        { feature: "Monthly platform fee", a: "$0 to publish", b: "$0 only on Free, within the caps" },
        { feature: "When readers pay", a: "10% plus Stripe", b: "The contact tier. No 10% line." },
        { feature: "Custom domain", a: "$50 once", b: "On paid plans, per Mailchimp's feature table" },
        { feature: "Price at 4,000 free readers", a: "$0", b: "Check current pricing" },
        { feature: "Annual prepay", a: "Not a platform subscription", b: "Sales, for Premium and large Standard plans" },
      ],
    },
    {
      name: "What you are buying",
      rows: [
        { feature: "Editor and network", a: "The publication is the product", b: "Campaigns, audiences, and journeys" },
        { feature: "Automations", a: "Not Mailchimp-style flows", b: "From Essentials, up to 4 steps" },
        { feature: "Store", a: "Not a shop suite", b: "A reason to stay if it is already connected" },
        { feature: "Send cap", a: "No monthly send meter in the help article", b: "500 on Free, then a multiple of the contact limit" },
      ],
    },
  ],
  sections: [
    {
      id: "fee",
      title: "When 10% is the smaller bill",
      paragraphs: [
        `If paid revenue is small, 10% can be less than Essentials. $13 is 10% of $130. Below that revenue, Mailchimp's paid starting price costs more than Substack's cut, and Mailchimp Free may already be too small. Above a few thousand dollars a month, 10% grows with revenue and a flat tool can cost less. Ghost Publisher and beehiiv Lite are the other flat comparisons, on their own pages.`,
      ],
    },
  ],
  prosA: {
    pros: [
      "Publishing is $0 at any list size.",
      "Paid subscriptions are built in.",
      "The fee is a published 10%.",
      "A custom domain is a one-time $50.",
    ],
    cons: [
      "10% plus Stripe grows with revenue.",
      "You do not get Mailchimp's automation builder or store.",
      "The network is part of the product. Leaving it is a writing-surface change, not only a CSV.",
      "In-app purchases can cost more when Apple fees apply. The help article says you choose whether prices rise to cover them.",
    ],
  },
  prosB: {
    pros: [
      "Free sends, inside a small cap.",
      "Paid plans start at $13 and $20 for 500 contacts.",
      "Journeys and a store can live in the same account.",
      "There is no 10% of reader revenue.",
    ],
    cons: [
      "Free is easy to outgrow on sends alone.",
      "Unsubscribed contacts count.",
      "Above 500 contacts, check current pricing.",
      "A publication that only needs the editor is paying for a suite.",
    ],
  },
  who: [
    `Choose Substack when the newsletter is what you sell and 10% of paid revenue is acceptable. Choose it at $0 if nobody pays.`,
    `Choose Mailchimp when you need the audiences and the journeys, or when a priced Mailchimp tier is already lower than 10%.`,
    `Choose a flat sender when 10% has passed the monthly tool you would actually use. MailCheap, Kit, and MailerLite are priced on their own pages.`,
  ],
  switching: [
    `From Mailchimp, export the audience to CSV before you delete the account. Substack will not import journeys. From Substack, use the publication's export for the list and rebuild anything that was only a Mailchimp flow. Keep the old login until a paid reader has been billed on the new tool, if anyone pays.`,
  ],
  cheaper: [
    `MailCheap is $19 a month on Starter when the weekly send fits 20,000 emails, and it takes 0% of subscriptions because it does not sell them. If readers pay you, Substack or another tool that can charge them is the comparison, not MailCheap. The affiliate link is <a href="${mc}" rel="sponsored nofollow noopener">MailCheap pricing</a>.`,
  ],
  faqs: [
    {
      q: "Is Substack cheaper than Mailchimp?",
      a: "<p>To publish a free letter, Substack is $0 at any size and Mailchimp Free stops at 250 contacts and 500 sends. Once readers pay, Substack is 10% plus Stripe. Mailchimp is a monthly tier. Above 500 contacts, check Mailchimp's current price before you decide.</p>",
    },
    {
      q: "What is Mailchimp vs Substack if I only have a free list?",
      a: "<p>Mailchimp vs Substack favors Substack as soon as you pass 250 contacts or 500 sends, because the platform fee stays $0 until someone pays. It favors Mailchimp if you need automations or a store and the tier is one you have priced.</p>",
    },
    {
      q: "Does Substack charge a monthly plan?",
      a: "<p>No monthly platform tier. Publishing is free. Paid subscriptions cost 10%. A custom domain is $50 once. Stripe's processing is additional.</p>",
    },
  ],
  related: [
    { href: "/pricing/substack/", kicker: "Pricing", title: "Substack pricing" },
    { href: "/pricing/mailchimp/", kicker: "Pricing", title: "Mailchimp pricing" },
    { href: "/alternatives/substack/", kicker: "Alternatives", title: "Substack alternatives" },
    { href: "/alternatives/mailchimp/", kicker: "Alternatives", title: "Mailchimp alternatives" },
    { href: "/compare/beehiiv-vs-substack/", kicker: "Comparison", title: "beehiiv vs Substack" },
  ],
};
