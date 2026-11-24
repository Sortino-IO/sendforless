import { mailcheapHref } from "../../lib/site";
import type { CompareDoc } from "./types";

const mc = mailcheapHref("/pricing");

export const ghostVsSubstack: CompareDoc = {
  id: "ghost-vs-substack",
  a: "Ghost",
  b: "Substack",
  platformA: "Ghost(Pro)",
  platformB: "Substack",
  cheaperToggle: true,
  chooseA: "Members log in to a site you theme, paid subscriptions should sit in your Stripe account, and Publisher's monthly tier is less than 10% of membership revenue.",
  chooseB: "You want the Substack network and a $0 publishing bill, and 10% of revenue is still smaller than Publisher.",
  priceNoteA: "Publisher, up-to-5,000 members. Annual effective is $63 ($756 a year). Starter does not include paid members and stops at 1,000.",
  priceNoteB: "No monthly platform fee. 10% of subscription revenue, plus Stripe, if readers pay.",
  linkA: { href: "https://ghost.org/pricing/", label: "Ghost pricing" },
  linkB: { href: "https://support.substack.com/hc/en-us/articles/360037607131-How-much-does-Substack-cost", label: "Substack pricing help" },
  differencesIntro: [
    `Ghost(Pro) prices members, not a percent of revenue. The numbers below are from ghost.org/js/pricing.min.js, the file the pricing page loads, read 24 November 2026. Starter is $18 a month or $180 a year ($15 a month) and stops at 1,000 members. It does not include paid subscriptions. Publisher at 1,000 members is $35 a month or $348 a year ($29 a month). At the up-to-5,000 band, Publisher is $75 a month or $756 a year ($63). At 10,000 members it is $105 a month or $1,056 a year ($88). At 25,000 it is $169 a month or $1,692 a year ($141). Business is $239 a month through 10,000 members, or $2,388 a year ($199).`,
    `Substack charges $0 to publish at any list size and 10% when readers pay, plus Stripe. The help article updated 29 October 2026 quotes 2.9% + $0.30 for US cards and 0.7% for Stripe Billing. A custom domain is $50 once. Ghost's pricing page says paid plans take 0% from Ghost. You pay Stripe yourself, because the customer record is yours. See <a href="/pricing/ghost/">Ghost pricing</a> and <a href="/pricing/substack/">Substack pricing</a>.`,
  ],
  differences: [
    {
      topic: "Platform fee on $1,000 a month of membership revenue",
      favors: "Substack, if the list is small",
      why: "10% is $100 before Stripe. Ghost Publisher at 1,000 members is $35 a month and takes $0. If you only have 1,000 members and $1,000 of revenue, Publisher can already be the smaller Ghost bill, and Substack's $100 is higher than $35. At a tiny list with tiny revenue, do the division again.",
    },
    {
      topic: "Platform fee on $5,000 a month",
      favors: "Ghost Publisher, on the percent",
      why: "Substack's 10% is $500. Publisher at 10,000 members is $105. Publisher at 25,000 is $169. The member tier is the Ghost bill even in a weak month.",
    },
    {
      topic: "Price at 4,000 members, before any revenue",
      favors: "Substack",
      why: "Substack is $0. Ghost has no hosted free plan. Publisher for up to 5,000 members is $75 a month. Starter cannot hold 4,000 members.",
    },
    {
      topic: "Themes and ownership",
      favors: "Ghost, if the site is the product",
      why: "Publisher includes custom themes and marketplace themes. Starter does not. Ghost's member docs say you can export members and that billing lives in your Stripe account. Substack is $0 and the network stays in Substack.",
    },
    {
      topic: "Sends",
      favors: "Neither on a per-email price",
      why: "Ghost's pricing page lists unlimited email sends on every plan. A custom sending domain starts on Publisher. Substack's cost article does not meter issues.",
    },
  ],
  pricingIntro: [
    `Starter is the wrong row for a paid membership. It is $18 a month, one staff user, one newsletter, no paid subscriptions, no custom theme, and no custom sending domain. Use it only for a free letter under 1,000 members. Publisher is the plan this comparison uses once members pay or the list passes 1,000. The pricing page lists 3 staff users on Publisher, custom themes, and a 0% transaction fee. Business adds 15 staff users and a higher member floor: the data file prices Business at $239 a month from 1,000 through 10,000 members.`,
    `Annual Ghost prices in the table are the yearly charge divided by 12. Publisher at 5,000 members is $756 a year, which is $63 a month only when you pay the year. Monthly billing stays $75. Substack has no annual platform plan. The 10% applies to each payment.`,
    `Ghost's pricing page contrasts Ghost(Pro) with self-hosting and does not publish a hosting bill for running it yourself. The prices below are Ghost(Pro). At 4,000 subscribers, five weekly sends are 4,000 × 5 = 20,000 emails, before welcome emails and tests.`,
  ],
  featuresIntro: [
    `Ghost rows combine the pricing page's feature table with the price file. Substack rows are the cost article and the export article. Staff counts follow the public pricing page (Publisher 3, Business 15, Starter 1).`,
  ],
  matrix: [
    {
      name: "Price",
      rows: [
        { feature: "Hosted free plan", a: "No", b: "Publishing is $0 at any size" },
        { feature: "At 1,000 members", a: "Starter $18. Publisher $35", b: "$0 platform fee" },
        { feature: "At 5,000 members", a: "Publisher $75", b: "$0 platform fee" },
        { feature: "At 10,000 members", a: "Publisher $105. Business $239", b: "$0 platform fee" },
        { feature: "At 25,000 members", a: "Publisher $169", b: "$0 platform fee" },
        { feature: "Cut of payments", a: "0% on Publisher. Stripe is yours", b: "10% plus Stripe" },
      ],
    },
    {
      name: "Site, email, and ownership",
      rows: [
        { feature: "Custom themes", a: "Publisher and Business. Not Starter", b: "Not a theme marketplace in the cost article" },
        { feature: "Branding", a: "Pricing page lists whitelabel branding on every plan", b: "Publication is yours to export" },
        { feature: "Paid tiers", a: "Publisher: 3. Business: 10. Starter: no", b: "Prices you set. Substack keeps 10%" },
        { feature: "Newsletters", a: "Starter 1, Publisher 3, Business 10", b: "The publication you export" },
        { feature: "Custom sending domain", a: "Publisher and up", b: "Not itemized beyond the $50 site domain" },
        { feature: "Member export", a: "Yes, CSV from Members", b: "Yes, zip from Settings, Exports" },
        { feature: "Recommendations", a: "Yes, on the pricing page", b: "Inside Substack. Not part of the export" },
        { feature: "Email sends", a: "Unlimited on every plan", b: "No meter in the cost article" },
      ],
    },
  ],
  sections: [
    {
      id: "ownership",
      title: "Ownership, themes, and discovery",
      paragraphs: [
        `Ghost's member documentation says membership, customer, and business data is yours to control, and that subscriptions are billed in your Stripe account. The import format includes stripe_customer_id so an existing Stripe customer can be attached. That is the ownership claim that matters for a move: you can take the customer id if the subscription was already in Stripe you control. Substack's 10% model does not hand you that id in the cost article. The export is the list, the posts, and statistics.`,
        `Themes are a Publisher feature. The pricing page says Starter uses built-in design settings and that marketplace themes and custom themes start on the higher plans. If the publication is a blog you redesign, Publisher is the plan, at $35 a month at 1,000 members and $75 at the 5,000 band. Substack does not sell that theme layer as a monthly upgrade. You trade it for $0 and for discovery inside Substack.`,
        `Discovery inside Substack does not export. Ghost's pricing page lists a Ghost Explore network and recommendations on every plan, plus ActivityPub distribution. Writers who get a large share of new readers from Substack recommendations should assume that channel stops when they leave. Ghost Explore is a separate directory. Count the fee against the tier only after you have another way to be found.`,
        `The archive is yours in the sense that Ghost can export members and content, and Substack's export zip includes posts. Redirects and the domain still have to be pointed by you. A custom Ghost domain is included on Ghost(Pro), with a note on the pricing page about a one-year .link registration that renews at normal rates. Substack's custom domain is $50 once. Those are setup fees, not the monthly comparison.`,
      ],
    },
    {
      id: "paid",
      title: "Paid newsletters and the fee",
      fees: "ghost",
      paragraphs: [
        `Substack's 10% is $100 on $1,000 of subscription revenue, $500 on $5,000, and $1,000 on $10,000. Stripe is extra and is not in those three numbers. Ghost's platform fee on Publisher is $0. The Ghost bill is the member tier, every month, whether or not that revenue shows up.`,
        `At $5,000 a month, $500 is more than Publisher at 25,000 members ($169) and more than Business at 10,000 members ($239). At $1,000 a month, $100 is more than Publisher at 1,000 members ($35) and less than Business ($239). Pick the Ghost plan you would actually buy. Starter's $18 does not belong in this table, because Starter cannot charge members.`,
        `Ghost import can carry a Stripe customer id, or the word auto so Ghost looks up the email in the connected Stripe account. That is how paid members stay paid, and only when the Stripe account is yours. Substack's article on moving from Ghost says imported people show up as free subscribers. Plan on a new checkout for anyone whose payment lives inside Substack rather than in your Stripe.`,
        `Complimentary plans and labels are fields in Ghost's CSV template. They are not a Substack founding-member product. Recreate offers, then email the people who pay you before you turn the old paywall off.`,
      ],
    },
    {
      id: "deliverability",
      title: "Deliverability and sending rules",
      paragraphs: [
        `Ghost lists unlimited email sends, managed deliverability, and, from Publisher up, a custom sending domain with the authentication that implies. Starter sends from Ghost's setup and does not include the custom sending domain. Multiple newsletters start at 3 on Publisher and 10 on Business. None of that is a placement rate. We did not send a campaign.`,
        `Substack does not publish a monthly send cap in the cost article. Leaving Substack means the new Ghost domain needs the DNS records Ghost shows you, then a test issue, then the full list. Ghost's import does not, by itself, warm a new domain. Mail a confirmation to yourself and to a small group of members who expect the move.`,
        `Member tags and labels exist on Ghost, including on Starter according to the pricing table. Custom fields start on Publisher. If you segment by a field you collected on Substack, check that the export column has a Ghost field to land in. The import template's optional columns are name, note, subscribed_to_emails, stripe_customer_id, complimentary_plan, labels, and created_at. Email is required.`,
      ],
    },
  ],
  prosA: {
    pros: [
      "Publisher takes 0% of membership payments. Stripe fees are yours because the customer is yours.",
      "Custom themes, a custom sending domain, and paid tiers start on Publisher at a published member price.",
      "Members and content export. The CSV can carry a Stripe customer id.",
      "Sends are unlimited, so cadence does not pick the plan. Member count does.",
    ],
    cons: [
      "There is no hosted free plan. Publisher at the 5,000 band is $75 a month.",
      "Starter cannot charge members and stops at 1,000.",
      "You pay the tier in months when few people are billed.",
      "Ghost Explore is not a copy of discovery inside the Substack app.",
    ],
  },
  prosB: {
    pros: [
      "Publishing is $0 no matter how large the list is.",
      "You pay 10% only in months when readers pay.",
      "The export includes posts, subscribers, and statistics.",
      "A custom domain is $50 once.",
    ],
    cons: [
      "10% of a large membership is more than Publisher. At $10,000 a month the fee is $1,000.",
      "Paid status does not survive a move as an active charge.",
      "Recommendations inside Substack stay there.",
      "The cost article is not a theme or membership-site product sheet.",
    ],
  },
  who: [
    `Choose Ghost Publisher when members log in, you want your own theme, and 10% of revenue is already above the tier. At 4,000 members Publisher is $75 a month ($63 if you prepay the year). Substack costs more than that once subscription revenue passes about $750 a month, before Stripe. Also choose Ghost when you need the Stripe customer id in your account rather than inside Substack.`,
    `Choose Substack when revenue is below that line, or when recommendations in the app are how the list grows and you do not have a replacement. Choose Starter only for a free Ghost letter of at most 1,000 members, at $18 a month. It is not the paid-newsletter plan.`,
    `Choose something else when you do not need a member login. Substack remains $0 for a free letter of any size. Kit Free is $0 for broadcasts under 10,000 subscribers. MailCheap is the hosted send-only bill once you want a priced plan without a site. Ghost is the expensive option on purpose when the site is the product.`,
  ],
  switching: [
    `From Ghost to Substack, Ghost's member admin exports members to CSV, and the advanced settings export content to JSON. Substack's own Ghost migration article tells you to use those exports, then import the CSV under Settings, Import/Export. It also says those subscribers have a free status on Substack. Paid Ghost members need a new paid subscription. Because their Stripe customer already sits in your Stripe account, cancel or keep that billing deliberately so you do not charge twice.`,
    `From Substack to Ghost, create the export from Settings, then Exports, then Create new export. The zip includes posts, the subscriber list, and statistics. In Ghost, import members from the Members menu. Map email, and map stripe_customer_id only if you truly have one. Substack's cost article does not give you a Stripe customer id to paste. Expect free members, then a campaign that asks paying readers to subscribe on Ghost. Publisher has to be on before paid tiers exist.`,
    `Themes, comments, and recommendations do not move. Rebuild the theme on Publisher or accept Ghost's default on Starter if you are under 1,000 and not charging. Labels can be in the Ghost CSV. Substack recommendation relationships cannot. DNS for a custom sending domain is a Publisher step. Point the site domain only after the new homepage answers. Send a test issue to a staff user before the member list.`,
    `Self-hosting Ghost is a third path the pricing page acknowledges and does not price. Do not start a self-host migration in the same week you move paid members unless you already run that server. Ghost(Pro) is the priced option in this table.`,
  ],
  cheaper: [
    `MailCheap does not replace Ghost or Substack for a paid membership. It has no paid subscriptions. It is the lower bill when the job is the send. Starter is $19 a month for 20,000 emails and 10,000 subscribers. At 4,000 members and one issue a week the estimate is about 17,334 emails. Publisher at that size is $75 and takes 0% if you charge. Substack is $0 plus 10% if you charge. MailCheap at $19 is under Publisher and above Substack's $0, and it will not log members into a themed site.`,
    `The affiliate link is <a href="${mc}" rel="sponsored nofollow noopener">MailCheap pricing</a>. Read the <a href="/reviews/mailcheap/">MailCheap review</a> if the only feature you use today is the weekly send.`,
  ],
  faqs: [
    {
      q: "Is Ghost cheaper than Substack?",
      a: "<p>When 10% of membership revenue is more than the Ghost tier you need. Publisher at 1,000 members is $35 a month and takes 0%. Substack's 10% on $1,000 of revenue is $100, before Stripe. Substack is cheaper when revenue is low or zero, because publishing is $0.</p>",
    },
    {
      q: "How much is Ghost at 10,000 members?",
      a: "<p>Publisher is $105 a month, or $88 a month billed annually ($1,056 a year). Business is $239 a month, or $199 a month billed annually ($2,388 a year). Starter does not cover 10,000 members. Checked 24 November 2026 in Ghost's pricing file.</p>",
    },
    {
      q: "Does Ghost take a percentage?",
      a: "<p>The pricing page lists a 0% transaction fee on Publisher, Business, and the custom plan. Stripe still charges. Starter does not include paid subscriptions.</p>",
    },
    {
      q: "Can I keep paid subscribers if I leave Substack?",
      a: "<p>You can export the list. Substack's Ghost migration notes say people imported the other way arrive as free. Set up Ghost paid tiers and have readers subscribe there. A Stripe customer id import works when the subscription is already in your Stripe account.</p>",
    },
    {
      q: "Does Ghost Starter include themes?",
      a: "<p>Starter includes design settings. Marketplace themes and custom themes are on Publisher and above. Starter is $18 a month, or $15 billed annually, for up to 1,000 members.</p>",
    },
    {
      q: "Who owns the member list on Ghost?",
      a: "<p>Ghost's member docs say you can export members and that billing runs in your Stripe account. You still have to move the domain and rebuild anything that is not in the CSV.</p>",
    },
    {
      q: "Is there a free Ghost plan?",
      a: "<p>Not on Ghost(Pro). The cheapest hosted plan is Starter at $18 a month. Substack publishes for $0. Self-hosting Ghost is separate, and Ghost's pricing page does not list a hosting price for it.</p>",
    },
  ],
  related: [
    { href: "/pricing/ghost/", kicker: "Pricing", title: "Ghost pricing" },
    { href: "/pricing/substack/", kicker: "Pricing", title: "Substack pricing" },
    { href: "/compare/beehiiv-vs-substack/", kicker: "Comparison", title: "beehiiv vs Substack" },
    { href: "/alternatives/ghost/", kicker: "Alternatives", title: "Ghost alternatives" },
    { href: "/alternatives/substack/", kicker: "Alternatives", title: "Substack alternatives" },
  ],
};
