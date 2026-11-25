import { mailcheapHref } from "../../lib/site";
import type { CompareDoc } from "./types";

const mc = mailcheapHref("/pricing");

export const mailcheapVsMailchimp: CompareDoc = {
  id: "mailcheap-vs-mailchimp",
  a: "MailCheap",
  b: "Mailchimp",
  platformA: "MailCheap",
  platformB: "Mailchimp",
  cheaperToggle: false,
  chooseA: "You send on a schedule, the email count fits a published plan, and you do not need a store, A/B tests, or a paywall.",
  chooseB: "The account runs a shop or long journeys, or you are still inside the free caps or the $13 and $20 starting prices.",
  priceNoteA: "Starter, if about 17,300 emails fit in 20,000. Welcomes can move this to Growth.",
  priceNoteB: "Above 500 contacts. Standard starts at $20 for up to 500 contacts.",
  linkA: { href: mc, label: "MailCheap pricing (affiliate)", affiliate: true },
  linkB: { href: "https://mailchimp.com/pricing/marketing/", label: "Mailchimp pricing" },
  differencesIntro: [
    `MailCheap vs Mailchimp compares an email allowance with a contact tier. MailCheap Starter is $19 a month for 20,000 emails and 10,000 subscribers. Growth is $39 for 75,000 emails and 40,000 subscribers. Pro is $79 for 200,000 emails and 100,000 subscribers. Scale is $149, Max is $349, Ultra is $799. Yearly billing costs 10 months. Checked 25 November 2026 on the plans help and the pricing page. There is no hosted free plan.`,
    `Mailchimp vs MailCheap at the published starting prices: Free is $0 up to 250 contacts and 500 sends. Essentials starts at $13 a month and Standard at $20, both for up to 500 contacts. Premium starts at $350. Above 500 contacts, check current pricing. Unsubscribed contacts count until you archive them. The limits are on <a href="/pricing/mailchimp/">Mailchimp pricing</a>.`,
  ],
  differences: [
    {
      topic: "Weekly letter at 4,000 people",
      favors: "MailCheap, on the number that is published",
      why: "About 17,300 emails fits Starter at $19. A five-week month is 20,000 emails before welcomes, which uses all of Starter. At 4,000 contacts, check Mailchimp's current pricing.",
    },
    {
      topic: "Under 250 contacts",
      favors: "Mailchimp Free",
      why: "Mailchimp can send at $0 inside 250 contacts and 500 sends. MailCheap starts at $19. Do not pay $19 to replace a free plan that fits.",
    },
    {
      topic: "At 500 contacts",
      favors: "Mailchimp, if Essentials is enough",
      why: "Essentials is $13 and Standard is $20. Starter is $19. The Mailchimp plans include a different feature set, including short automations on Essentials.",
    },
    {
      topic: "What the price buys",
      favors: "Mailchimp, if you need the suite",
      why: "Mailchimp sells journeys, templates, audiences, and store connections. MailCheap sells the send. Every MailCheap plan has the same features. The plan changes the volume.",
    },
    {
      topic: "Who counts",
      favors: "MailCheap, if the list is full of people you no longer mail",
      why: "MailCheap counts subscribers who receive issues. Unsubscribed and bounced addresses stay in the list and do not count. Mailchimp counts unsubscribed contacts until you archive them.",
    },
  ],
  pricingIntro: [
    `A weekly estimate is subscribers × 4.33. At 10,000 people that is about 43,300 emails, which is Growth at $39 if welcomes still fit in 75,000. At 25,000 people it is about 108,300 emails, which is Pro at $79. Daily sending multiplies those counts by about seven and can jump a MailCheap plan without changing a Mailchimp contact tier. It can still blow a Mailchimp send multiple.`,
    `Links to MailCheap are affiliate links. The commission does not change the price and does not add A/B tests, paid subscriptions, or a store.`,
  ],
  featuresIntro: [
    `MailCheap rows are from the plans table. Mailchimp rows are from the pricing page and About Mailchimp Pricing Plans. Checked 25 November 2026.`,
  ],
  matrix: [
    {
      name: "Price and caps",
      rows: [
        { feature: "Entry paid price", a: "Starter $19", b: "Essentials $13, up to 500 contacts" },
        { feature: "Entry cap", a: "20,000 emails and 10,000 subscribers", b: "500 contacts and 5,000 sends at the Essentials starting price" },
        { feature: "At 4,000, weekly", a: "$19 Starter, if emails fit", b: "Check current pricing" },
        { feature: "At 10,000, weekly", a: "$39 Growth, about 43,300 emails", b: "Check current pricing" },
        { feature: "Free plan", a: "No hosted free plan", b: "250 contacts and 500 sends" },
        { feature: "Annual", a: "10 months for 12", b: "Sales, for Premium and large Standard plans" },
      ],
    },
    {
      name: "Features",
      rows: [
        { feature: "A/B tests", a: "Not included", b: "Essentials and up" },
        { feature: "Automations", a: "Included, same on every plan", b: "Essentials: up to 4 steps" },
        { feature: "Paid subscriptions", a: "Not sold", b: "Not a Substack-style percent. Not MailCheap either." },
        { feature: "Store journeys", a: "Not included", b: "A reason to stay" },
        { feature: "Tests and welcomes", a: "Count toward the email cap", b: "Count as sends" },
      ],
    },
  ],
  sections: [
    {
      id: "equal",
      title: "Where Mailchimp is the better fit",
      paragraphs: [
        `MailCheap is not the default. Under the Mailchimp free caps, Free is the lower price. At 500 contacts, Essentials at $13 can be less than Starter at $19 and it includes scheduling and a short automation. If the shop is connected, leaving for a $19 send throws away journeys a CSV cannot carry. Pay the Mailchimp tier you have actually read when those tools are the work.`,
      ],
    },
  ],
  prosA: {
    pros: [
      "Published plans from $19 to $799, with email and subscriber caps written down.",
      "Unsubscribed people do not count toward the subscriber cap.",
      "The same features are on every plan. Volume is what changes.",
      "A weekly letter past a few thousand people often fits Starter or Growth.",
    ],
    cons: [
      "No hosted free plan.",
      "No A/B tests, paid subscriptions, ad network, or referral program.",
      "Welcomes and tests count. A five-week month can use all of Starter.",
      "Over the allowance, new sends wait until you upgrade or the month resets.",
    ],
  },
  prosB: {
    pros: [
      "A free plan that sends, inside tight caps.",
      "Essentials at $13 and Standard at $20 for 500 contacts.",
      "Journeys, templates, and a store can share the account.",
      "A nonprofit discount of 15% is on the help page.",
    ],
    cons: [
      "Unsubscribed contacts count.",
      "Above 500 contacts, check current pricing.",
      "Free pauses at 250 contacts or 500 sends.",
      "You can pay for a suite when you only needed the send.",
    ],
  },
  who: [
    `Choose MailCheap when the letter is a scheduled send, you can count the emails, and the missing features are acceptable.`,
    `Choose Mailchimp when the store or the journeys are why the account exists, or when Free or the $13 starting price still covers you.`,
    `Choose Kit (ConvertKit) Free, not either paid plan, when you only broadcast and you are under 10,000 subscribers.`,
  ],
  switchingTitle: "Switching from Mailchimp to MailCheap",
  switching: [
    `Export the audience first. Audience, Export audience, Export CSV. The file can be a ZIP split by contact type. Import only people who should receive issues. MailCheap's import reads email, status, signup date, and tags when the file has them. It does not recreate journeys.`,
    `The first issue to more than 1,000 people who have never received a MailCheap issue goes out in steps. That warm-up is in the help article. Add DNS and a postal address, and send a test to yourself, before that stepped send.`,
    `Delete the Mailchimp account only after a campaign has gone out. Manage my plan, Delete my account, is permanent. Pause is the option if you might return. Outstanding balances have to be paid before a delete.`,
  ],
  cheaper: null,
  faqs: [
    {
      q: "Is MailCheap cheaper than Mailchimp?",
      a: "<p>At 4,000 weekly subscribers, Starter is $19. For Mailchimp, check current pricing. At 500 contacts, Essentials is $13 and Starter is $19, so Mailchimp has the lower published starting price. Under 250 contacts, Mailchimp Free is $0.</p>",
    },
    {
      q: "Are MailCheap links affiliate links?",
      a: "<p>Yes. sendforless may earn a commission if you buy through them. The price on MailCheap's page does not change. The comparison still includes the features MailCheap does not have.</p>",
    },
    {
      q: "Does Mailchimp vs MailCheap include A/B tests on both sides?",
      a: "<p>No. A/B tests are on Mailchimp Essentials and above. They are not on MailCheap. If a test is the reason you send two versions, stay on Mailchimp or pick a tool that documents the test.</p>",
    },
  ],
  related: [
    { href: "/reviews/mailcheap/", kicker: "Review", title: "MailCheap review" },
    { href: "/pricing/mailchimp/", kicker: "Pricing", title: "Mailchimp pricing" },
    { href: "/reviews/mailchimp/", kicker: "Review", title: "Mailchimp review" },
    { href: "/alternatives/mailchimp/", kicker: "Alternatives", title: "Mailchimp alternatives" },
    { href: "/compare/mailcheap-vs-beehiiv/", kicker: "Comparison", title: "MailCheap vs beehiiv" },
  ],
};
