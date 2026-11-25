import { mailcheapHref } from "../../lib/site";
import type { CompareDoc } from "./types";

const mc = mailcheapHref("/pricing");

export const constantContactVsMailchimp: CompareDoc = {
  id: "constant-contact-vs-mailchimp",
  a: "Constant Contact",
  b: "Mailchimp",
  platformA: "Constant Contact",
  platformB: "Mailchimp",
  cheaperToggle: true,
  showScenarioTable: false,
  switchingTitle: "Switching from Mailchimp to Constant Contact",
  chooseA: "You want phone and chat support on the entry plan, and you will read the contact tier on Constant Contact's page before you pay.",
  chooseB: "The account already runs a store or journeys in Mailchimp, or the list is still inside the $13 or $20 start for 500 contacts.",
  priceNoteA: "Lite starts at $12. The price at 4,000 contacts is check current pricing.",
  priceNoteB: "Above 500 contacts. Essentials starts at $13 and Standard at $20, both for up to 500 contacts.",
  linkA: { href: "https://www.constantcontact.com/pricing", label: "Constant Contact pricing" },
  linkB: { href: "https://mailchimp.com/pricing/marketing/", label: "Mailchimp pricing" },
  differencesIntro: [
    `A Mailchimp Constant Contact search is two contact bills. Constant Contact is the contact-priced competitor in this pair. Constant Contact's pricing page, checked 25 November 2026, says Lite starts at $12 a month, Standard at $35, and Premium at $80. The same page shows 50% off for three months. That offer is a promotion, not the list price used here. Prepay for 12 months is up to 15% off the starting prices: $10.20, $29.75, and $68. The exact tier still depends on contacts and sends.`,
    `Mailchimp vs Constant Contact uses the same rule on the other side. Essentials starts at $13 a month and Standard at $20, both for up to 500 contacts. Premium starts at $350. Above 500 contacts on Essentials and Standard, check current pricing. Unsubscribed contacts count on Mailchimp until you archive them. Full notes are on <a href="/pricing/mailchimp/">Mailchimp pricing</a>.`,
  ],
  differences: [
    {
      topic: "Published start",
      favors: "Close, before the tier",
      why: "Lite starts at $12. Essentials starts at $13. Standard on Constant Contact starts at $35. Standard on Mailchimp starts at $20. Those are starts, not the price at a few thousand contacts.",
    },
    {
      topic: "Price at 4,000 contacts",
      favors: "Unknown until both pages are open",
      why: "Neither vendor publishes a static dollar for 4,000 contacts on either pricing page (checked 25 November 2026). Both say the tier follows the contact count.",
    },
    {
      topic: "Free sending",
      favors: "Mailchimp, if 250 contacts is enough",
      why: "Mailchimp Free sends, up to 250 contacts and 500 emails a month. Constant Contact's FAQ says the product is paid, with a free trial and a 30-day refund, and plans start at $12.",
    },
    {
      topic: "Send allowance",
      favors: "Depends on the plan you buy",
      why: "Constant Contact Lite allows 10 times contacts, Standard 12 times, Premium 24 times. Mailchimp Essentials is 10 times, Standard 12 times, Premium 15 times. Overages on Constant Contact are $0.002 a send.",
    },
    {
      topic: "Support on the entry plan",
      favors: "Constant Contact, if phone support is the point",
      why: "The pricing page lists live phone and chat on Lite. Mailchimp Free includes email support for 30 days. Essentials and Standard include 24/7 email and chat. Phone support is a Premium feature on Mailchimp.",
    },
  ],
  pricingIntro: [
    `Constant Contact also lists users as 2 on Lite in the comparison table and "one user" in the FAQ answer for Lite. Both lines are on the pricing page. Check the account before you rely on a second seat. Standard lists 3 users. Premium lists unlimited users. Inbox preview is a $10 a month add-on on Lite and Standard. SMS on Lite and Standard starts at $10 a month for up to 500 messages, US only. Premium includes 500 SMS messages.`,
    `Nonprofit pricing is not the same offer. Constant Contact gives 20% off when you prepay for six months, or 30% off when you prepay for 12 months, and no discount on monthly billing. A US nonprofit sends a 501(c)(3) or 501(c)(6) letter, and the page says not to buy prepay until the rate is confirmed. Mailchimp's nonprofit discount is 15% after approval, and it is not retroactive. See <a href="/pricing/mailchimp/">Mailchimp pricing</a> for that help article.`,
    `At 4,000 contacts both of these rows say check current pricing.`,
  ],
  featuresIntro: [
    `Rows come from constantcontact.com/pricing and from Mailchimp's pricing page and the help article About Mailchimp Pricing Plans. Checked 25 November 2026.`,
  ],
  matrix: [
    {
      name: "Price and sending",
      rows: [
        { feature: "Entry list price", a: "Lite from $12/mo", b: "Essentials from $13/mo, up to 500 contacts" },
        { feature: "Next plan start", a: "Standard from $35/mo", b: "Standard from $20/mo, up to 500 contacts" },
        { feature: "Top published start", a: "Premium from $80/mo", b: "Premium from $350/mo" },
        { feature: "Price at 4,000 contacts", a: "Check current pricing", b: "Check current pricing" },
        { feature: "Send multiple", a: "10×, 12×, or 24× contacts", b: "10×, 12×, or 15× the contact limit" },
        { feature: "Overage", a: "$0.002 per extra send", b: "Paid plans bill the overage. Free pauses." },
        { feature: "12-month prepay", a: "Up to 15% off the start ($10.20, $29.75, $68)", b: "Annual for Premium and Standard at 10,000+ contacts. Contact sales." },
      ],
    },
    {
      name: "Features on the entry paid plan",
      rows: [
        { feature: "Automations", a: "1 template on Lite", b: "Up to 4 steps on Essentials" },
        { feature: "Segments", a: "1 custom segment on Lite", b: "Predictive segments on Standard and Premium" },
        { feature: "A/B subject lines", a: "Standard and up", b: "Essentials and up" },
        { feature: "Live phone support", a: "Listed on every plan", b: "Premium" },
        { feature: "Free plan that sends", a: "No. Trial, then paid.", b: "Yes, 250 contacts and 500 sends" },
      ],
    },
  ],
  sections: [
    {
      id: "contacts",
      title: "How each one counts people",
      paragraphs: [
        `Mailchimp's help article counts subscribed, unsubscribed, and non-subscribed contacts. Archived, cleaned, and deleted contacts do not count. Constant Contact's pricing FAQ says you pay for the contacts on the list and that every plan's send limit is a multiple of that count. It does not, on the page checked 25 November 2026, spell out unsubscribed people the way Mailchimp's help article does. Archive in Mailchimp before you compare the two tiers, or you will price people you no longer mail.`,
      ],
    },
    {
      id: "fit",
      title: "Where a counted send fits instead",
      paragraphs: [
        `MailCheap is the third price when the job is the newsletter and not a marketing suite. Starter is $19 a month for 20,000 emails and 10,000 subscribers. A weekly letter to 4,000 people is about 17,300 emails. Constant Contact and Mailchimp at that size are both check current pricing. MailCheap does not include Constant Contact's events and social tools, or Mailchimp's store journeys. The affiliate link is <a href="${mc}" rel="sponsored nofollow noopener">MailCheap pricing</a>. The commission does not change the $19.`,
      ],
    },
  ],
  prosA: {
    pros: [
      "Lite starts at $12 a month, with live phone and chat listed on that plan.",
      "Premium's send multiple is 24 times contacts, higher than Mailchimp Premium's 15 times.",
      "Prepay discounts and the nonprofit prepay rates are written on the pricing page.",
      "Overages are a published $0.002 a send, not a surprise tier.",
    ],
    cons: [
      "There is no free plan that sends. The trial ends.",
      "The price at a specific list size is not a static table. Check current pricing.",
      "Lite and Standard SMS starts at $10 a month. It is not included the way Premium's 500 messages are.",
      "The page disagrees with itself on whether Lite includes one user or two.",
    ],
  },
  prosB: {
    pros: [
      "Free sends up to 250 contacts and 500 emails a month.",
      "Essentials starts at $13 and Standard at $20 for up to 500 contacts.",
      "Store journeys and audiences can stay put if the shop is already connected.",
      "The nonprofit discount is 15% on the help page, after approval.",
    ],
    cons: [
      "Unsubscribed contacts count until you archive them.",
      "Above 500 contacts, Essentials and Standard are check current pricing.",
      "Phone support is Premium, which starts at $350 a month.",
      "A free weekly letter to 200 people can miss the 500-send cap.",
    ],
  },
  who: [
    `Choose Constant Contact when phone support on the cheap plan matters, and when you have opened the tier for your contact count. Lite at $12 is the start, not a quote for 4,000 people.`,
    `Choose Mailchimp when the store is already there, or when 500 contacts at $13 or $20 still covers the account. Choose Free and stop if you are under 250 contacts and 500 sends.`,
    `Choose MailCheap when you only send, the email count fits a published plan, and you do not need events, social posts, or store journeys. Choose Kit (ConvertKit) Free if you only broadcast and you are under 10,000 subscribers.`,
  ],
  switching: [
    `Export the Mailchimp audience before you cancel. Audience, Export audience, Export CSV. Owners and Admins can run it. The file may be a ZIP split by subscribed, unsubscribed, non-subscribed, and cleaned. Do not import cleaned or unsubscribed people as active. Journeys do not transfer.`,
    `Constant Contact's pricing page does not publish a Mailchimp importer walkthrough. Confirm the import on their help center when you move. Keep Mailchimp until the first campaign has gone out from Constant Contact.`,
    `Deleting a Mailchimp account is permanent. Pause or Cancel Your Account is the help article: Manage my plan, Delete my account, type DELETE. Export first.`,
  ],
  cheaper: [
    `At 4,000 weekly subscribers MailCheap Starter is $19 if the month fits 20,000 emails. Both Constant Contact and Mailchimp are check current pricing at that size. Kit Free is $0 for broadcasts under 10,000 subscribers. The affiliate link is <a href="${mc}" rel="sponsored nofollow noopener">MailCheap pricing</a>.`,
  ],
  faqs: [
    {
      q: "How much does Constant Contact cost compared with Mailchimp?",
      a: "<p>Lite starts at $12 a month, Standard at $35, and Premium at $80. Mailchimp Essentials starts at $13 and Standard at $20, both for up to 500 contacts. Premium starts at $350. At a larger list, check current pricing on both sites. Checked 25 November 2026.</p>",
    },
    {
      q: "Is Constant Contact better than Mailchimp?",
      a: "<p>It depends on the job. Constant Contact fits when you want phone support on the entry plan and you have checked the contact tier. Mailchimp fits when a store or a set of journeys already lives in the account, or when 500 contacts at $13 or $20 still covers you. Mailchimp vs Constant Contact pricing above those starts is check current pricing on both sites. The difference between Mailchimp and Constant Contact is the suite around the send, not a single winner.</p>",
    },
    {
      q: "Is Constant Contact free?",
      a: "<p>No. The pricing FAQ says you can start a trial without a credit card, and new plans have a 30-day refund. Sending after the trial requires a paid plan from $12 a month.</p>",
    },
    {
      q: "How do the nonprofit rates compare?",
      a: "<p>Mailchimp and Constant Contact publish different nonprofit offers. Constant Contact's is 20% on a six-month prepay or 30% on a 12-month prepay, with no monthly discount. Mailchimp's help article offers 15% to verified nonprofits, and it is not retroactive.</p>",
    },
  ],
  related: [
    { href: "/pricing/mailchimp/", kicker: "Pricing", title: "Mailchimp pricing" },
    { href: "/alternatives/mailchimp/", kicker: "Alternatives", title: "Mailchimp alternatives" },
    { href: "/compare/mailerlite-vs-mailchimp/", kicker: "Comparison", title: "MailerLite vs Mailchimp" },
    { href: "/compare/flodesk-vs-mailchimp/", kicker: "Comparison", title: "Flodesk vs Mailchimp" },
    { href: "/reviews/mailchimp/", kicker: "Review", title: "Mailchimp review" },
  ],
};
