import { mailcheapHref } from "../../lib/site";
import type { CompareDoc } from "./types";

const mc = mailcheapHref("/pricing");

export const beehiivVsSubstack: CompareDoc = {
  id: "beehiiv-vs-substack",
  a: "beehiiv",
  b: "Substack",
  platformA: "beehiiv",
  platformB: "Substack",
  cheaperToggle: true,
  chooseA: "Paid revenue is large enough that 10% costs more than Lite, or you want automations, ads, or a site beehiiv documents and Substack does not price as a monthly plan.",
  chooseB: "You want $0 to publish, the Substack network, and the 10% fee is still smaller than the Lite tier at your list size.",
  priceNoteA: "Lite, up-to-5,000 bucket. Annual effective is $95 ($1,140 a year). Free ended at 2,500.",
  priceNoteB: "No monthly platform fee. Paid subscriptions add 10% of revenue, plus Stripe.",
  linkA: { href: "https://www.beehiiv.com/pricing", label: "beehiiv pricing" },
  linkB: { href: "https://support.substack.com/hc/en-us/articles/360037607131-How-much-does-Substack-cost", label: "Substack pricing help" },
  differencesIntro: [
    `Substack's help article, updated 29 October 2026, says publishing is free at any list size. If you turn on paid subscriptions, Substack keeps 10% of subscription revenue. Stripe adds its own fees. For US cards the article quotes 2.9% + $0.30, plus 0.7% for Stripe Billing on recurring payments. A custom domain is $50 once. Readers pay the price you set. iOS in-app purchases can cost more if you choose to cover Apple's fee.`,
    `beehiiv charges for the subscriber bucket and, on paid plans, takes 0% of subscription revenue. Stripe is still 2.9% + $0.30 per transaction, in beehiiv's pricing FAQ. Free is $0 up to 2,500 subscribers and does not include paid subscriptions, automations, or the ad network. At 4,000 subscribers you are in the up-to-5,000 Lite bucket: $109 a month, or $95 a month billed annually ($1,140 a year). The tier table is on <a href="/pricing/beehiiv/">beehiiv pricing</a>. Substack has no matching monthly tier. The fee table is further down.`,
  ],
  differences: [
    {
      topic: "Monthly platform fee at 4,000 subscribers",
      favors: "Substack, until readers pay",
      why: "Substack is $0. beehiiv Lite is $109 a month, or $95 annual effective. Free stopped at 2,500.",
    },
    {
      topic: "Fee at $1,000 a month of subscription revenue",
      favors: "Depends on the list size",
      why: "Substack's 10% is $100, before Stripe. beehiiv's platform fee on a paid plan is $0, and Lite at 4,000 subscribers is still $109. At that pair of numbers, Substack's percent is smaller than Lite.",
    },
    {
      topic: "Fee at $5,000 a month of revenue",
      favors: "beehiiv, on the percent alone",
      why: "10% is $500. Lite at 5,000 subscribers is $109 a month. Lite at 25,000 is $199. The subscriber tier, not the revenue, sets beehiiv's bill. Stripe sits on top of both.",
    },
    {
      topic: "Sends",
      favors: "Neither on a per-email meter",
      why: "beehiiv includes unlimited sends on every plan, including Free. Substack does not publish a monthly send cap in the cost article. A second weekly issue does not move a beehiiv tier.",
    },
    {
      topic: "Automations",
      favors: "beehiiv Lite or Pro",
      why: "Lite includes 10 live automations. Free includes none. Substack's cost article does not sell a monthly automation plan. If you need a tagged welcome series, beehiiv is the tool in this pair that prices it.",
    },
  ],
  pricingIntro: [
    `Do not interpolate beehiiv tiers. 4,000 subscribers pays the up-to-5,000 price, not a point between 2,500 and 5,000. Lite runs through 100,000 subscribers ($469 a month at that bucket, or $399 annual effective). Pro starts at $109 a month at 1,000 subscribers and is the plan that removes beehiiv branding. Enterprise is custom.`,
    `Substack's $0 is the platform subscription, not the cost of a paid list. Add 10% of what readers actually pay, then Stripe. A writer with $0 of subscription revenue pays Substack $0. A writer with $10,000 a month of subscription revenue pays $1,000 plus Stripe, and still pays beehiiv the tier if they move, even in a slow sales month.`,
    `Annual beehiiv is prepaid. At the 5,000 bucket, Lite annual is $1,140 instead of $109 × 12 = $1,308. The $95 figure is $1,140 divided by 12. It is the yearly charge divided by 12, paid up front. At 4,000 subscribers, five weekly sends are 4,000 × 5 = 20,000 emails, before welcome emails and tests.`,
  ],
  featuresIntro: [
    `beehiiv's feature rows are from beehiiv.com/pricing.md, which beehiiv says is generated from the same data as the pricing page. Substack's rows are from the cost article and the export article. Where Substack does not publish a comparable limit, the cell says so.`,
  ],
  matrix: [
    {
      name: "Money",
      rows: [
        { feature: "Monthly platform fee", a: "Free $0 to 2,500. Then a subscriber bucket", b: "$0 at any list size" },
        { feature: "Cut of paid subscriptions", a: "0% on Lite and Pro, plus Stripe", b: "10%, plus Stripe" },
        { feature: "At 1,000 subscribers", a: "Free $0. Lite $59, or $49 annual", b: "$0 platform fee" },
        { feature: "At 10,000 subscribers", a: "Lite $139, or $119 annual", b: "$0 platform fee" },
        { feature: "At 25,000 subscribers", a: "Lite $199, or $169 annual", b: "$0 platform fee" },
        { feature: "Custom domain", a: "Lite and Pro", b: "$50 once" },
      ],
    },
    {
      name: "Product",
      rows: [
        { feature: "Unlimited sends", a: "Every plan", b: "No send meter in the cost article" },
        { feature: "Automations", a: "Lite: 10 live. Pro: unlimited. Free: no", b: "Not a priced automation tier in the cost article" },
        { feature: "Ad network", a: "Lite and Pro, not in every region, not in trial", b: "Not the product in the cost article" },
        { feature: "Recommendations", a: "Network on every plan, including Free", b: "Discovery inside Substack. It does not export" },
        { feature: "Website and posts", a: "Website on every plan. Custom domain on paid", b: "Publication site included. Posts export as a zip" },
        { feature: "Remove branding", a: "Pro and Enterprise", b: "Not a Lite-style branding add-on in the cost article" },
        { feature: "API and MCP", a: "Read API and MCP on Free. Write, and the Send API, on higher plans", b: "Not compared. Use Substack's own docs if you need an API" },
      ],
    },
  ],
  sections: [
    {
      id: "paid",
      title: "Paid newsletters and the fee",
      fees: "beehiiv",
      paragraphs: [
        `Read the fee column before the plan column. Substack's 10% is $100 on $1,000 of subscription revenue, $500 on $5,000, and $1,000 on $10,000. That is the platform fee only. Stripe's 2.9% + $0.30 and the 0.7% Billing fee are extra, and they depend on how many payments make up the month.`,
        `beehiiv's paid plans take 0% and still charge Lite or Pro every month, including months when sales dip. At 4,000 subscribers, Lite is $109 whether readers pay you $0 or $5,000. Break-even against a pure 10% fee, ignoring Stripe on both sides, is when 10% of revenue equals the tier. At $109, that is $1,090 a month of subscription revenue. At the 10,000-subscriber Lite price of $139, it is $1,390. Your list size moves the line. Your revenue moves the 10%.`,
        `Free beehiiv cannot take paid subscriptions. If you are under 2,500 subscribers and you want to charge, the choice is Substack's 10% or Lite at the 1,000 bucket ($59) or the 2,500 bucket ($79). Under about $590 a month of revenue, 10% is less than $59. The network and the editor are the rest of the decision, not a second copy of the same math.`,
        `In-app purchases on Substack can be priced higher to cover Apple, or left the same so you absorb it. Substack's 10% on those purchases is based on your web price, according to the help article. beehiiv's 0% does not remove Stripe. Quote both payment processors from the vendor pages if the list pays mostly by card.`,
      ],
    },
    {
      id: "growth",
      title: "Recommendations, ads, and discovery",
      paragraphs: [
        `beehiiv's recommendation network is on Free. The ad network, paid recommendations, and the referral program with rewards are paid-plan features. The ad network is not in every region and is not in the trial. Lite caps referral milestones at 3. Pro removes that cap and adds a sponsorship storefront. If you moved to beehiiv to replace Substack's discovery, the free network is the part that exists before Lite. The ads are why Lite costs money.`,
        `Substack's discovery is the app and the recommendations other writers make there. The export help (the article that covers posts and the subscriber list) gives you a zip of your publication's data. It does not give you the people who found you because you were recommended inside Substack. Budget a drop in new signups if that is how the list grew. The cost article does not put a price on recommendations because they are part of the $0 publishing product.`,
        `Neither network is something this site measured. We did not count referrals. If recommendations are the business, stay until the 10% is painful or until beehiiv's network is the one your topic actually uses. Price is the wrong only reason to move a list that still grows inside the app.`,
      ],
    },
    {
      id: "website",
      title: "Website, archive, and SEO",
      paragraphs: [
        `beehiiv includes a website on every plan, with unlimited posts and a sitemap-style web presence described in the feature table. Custom domains, more than one custom page on the low end (Free is 1 custom page, Lite is 10, Pro is unlimited), and surveys start on Lite. Pro adds custom robots.txt and AI bot control. Podcast downloads are capped by plan: 5,000 a month on Free, 15,000 on Lite, 50,000 on Pro. A podcast-heavy publication can outgrow Free before the subscriber cap does.`,
        `Substack includes the publication site and the archive in the $0 product. The custom domain is a $50 one-time charge, not a monthly tier. Posts can be exported. beehiiv lists data exports on every plan, including Free. The archive readers already have bookmarked will break if you change domains without redirects. Set the new domain, export, and keep the old site up until links you care about point at the new host.`,
        `Both products render public posts. If search traffic matters, look at your own analytics before you move, and do not assume a new domain inherits the old one.`,
      ],
    },
    {
      id: "agents",
      title: "API, MCP, and AI agents",
      paragraphs: [
        `beehiiv's pricing file lists API access on Free, excluding the Send API. MCP read access and a read-only agent are on Free. Write access for MCP and the agent starts on Lite. The Send API is Pro, and it is not in the trial. If an assistant posts drafts, Free may be enough. If an assistant sends the campaign, read the Pro line before you assume Lite includes it.`,
        `Substack's cost article does not describe an MCP server or a send API. If an agent workflow is a requirement, beehiiv is the product in this pair that publishes the gate. MailCheap publishes a different MCP, with sending on paid hosted plans, and that is a send tool rather than a paid-newsletter host. It is linked below for the case where you do not need the 0% fee or the 10% fee because you do not charge inside the tool.`,
      ],
    },
  ],
  prosA: {
    pros: [
      "Paid plans take 0% of subscription revenue. You still pay Stripe and the monthly tier.",
      "Sends are unlimited, so a second weekly issue does not raise the tier.",
      "Lite adds automations, ads, paid subscriptions, and a custom domain at a published bucket price.",
      "The recommendation network exists on Free, up to 2,500 subscribers.",
    ],
    cons: [
      "Past 2,500 subscribers there is no $0 plan. Lite at 5,000 subscribers is $109 a month.",
      "Branding comes off on Pro, not on Lite. Pro at the 5,000 bucket is $199 a month.",
      "The ad network is not in every region and not during the trial.",
      "You pay the tier in months when subscription revenue is low.",
    ],
  },
  prosB: {
    pros: [
      "Publishing is $0 at any list size.",
      "You pay 10% only when readers pay, plus Stripe.",
      "A custom domain is $50 once, not a higher monthly plan.",
      "The export zip includes posts, the subscriber list, and statistics.",
    ],
    cons: [
      "10% of a large paid list is more than a flat Lite tier. At $5,000 a month it is $500.",
      "Imported subscribers do not arrive as active paid subscriptions on another platform.",
      "Discovery inside the Substack app does not come with you.",
      "The cost article does not offer a priced automation or ad product to compare with Lite.",
    ],
  },
  who: [
    `Choose Substack when subscription revenue is still small relative to Lite. At 4,000 subscribers, Lite is $109 a month. Substack's 10% is less than that until revenue passes about $1,090 a month, before you add Stripe to both. Also choose Substack when the app's recommendations are how new readers show up and you have not found a replacement.`,
    `Choose beehiiv Lite when the 10% is already larger than the tier, or when you want automations, the ad network, or paid subscriptions with a 0% platform fee and you accept the monthly bill in quiet months. Choose Pro when you need branding removed, more than 10 automations, more than 100,000 subscribers, or the Send API. Pro at 4,000 subscribers is $199 a month, or $169 annual effective. That gap is not required by the 10% math.`,
    `Choose a different tool when you do not charge readers and you do not use the network. Under 10,000 subscribers, Kit Free broadcasts are $0. A send-only weekly letter past the free caps is the MailCheap case in the next section. A membership site you theme yourself is <a href="/compare/ghost-vs-substack/">Ghost vs Substack</a>.`,
  ],
  switching: [
    `From beehiiv to Substack, use beehiiv's export. MailCheap's import help, which documents several vendor files, describes beehiiv's full subscriber export as Settings, then Export data, then Export all subscribers, so custom fields, tags, and stats are in the file. The quick export is email and status only. beehiiv's pricing file lists data exports on every plan. Substack's import path in its Ghost migration article accepts a CSV and sets those people to a free status. Paid beehiiv subscriptions do not become paid Substack subscriptions. Ask paying readers to subscribe again. Turn off beehiiv recommendations only after the new publication has a way to be found.`,
    `From Substack to beehiiv, Substack's export help says to open the publication Settings, click Exports, and create a new export. The zip includes posts, the subscriber list, and statistics. You get an email when it is ready. Import subscribers into beehiiv and do not treat the file as an active paid subscription. Recreate tiers on Lite or Pro. beehiiv Free cannot charge readers. If you are over 2,500 subscribers you will be on Lite immediately, at the bucket price, even before the first paid sale.`,
    `Automations on beehiiv do not exist as a Substack workflow you can import, and Substack does not give you beehiiv's 10-automation canvas. Tags in the beehiiv full export are described by MailCheap's importer as something a CSV can carry. Confirm the columns on your own file. Revenue, plan names, and platform ids are the kind of column MailCheap says it leaves out of an import. Assume billing fields are not portable.`,
    `DNS: Substack's custom domain is a $50 one-time setup. Point it at beehiiv only after Lite is ready to serve the domain, because custom domains are not on beehiiv Free. Send a test post to yourself. Keep the old publication online until the export is downloaded and a paying reader has a new checkout. There is no warm-up number in Substack's cost article. beehiiv does not meter the first send. Still mail a small group if the list was dormant.`,
  ],
  cheaper: [
    `MailCheap is the lower bill when you only send and you do not need paid subscriptions, recommendations, or ads. At 4,000 subscribers and one issue a week, Starter is $19 a month for 20,000 emails. The 4.33-week estimate is about 17,334 emails. beehiiv Lite at the same list is $109 and does not meter sends. Substack is $0 until readers pay. MailCheap is more than Substack's $0.`,
    `Use MailCheap when both the percent and the Lite tier are for features you will not use. The toggle adds the row. <a href="${mc}" rel="sponsored nofollow noopener">MailCheap pricing</a> is an affiliate link. The <a href="/reviews/mailcheap/">review</a> lists what the $19 plan does not include.`,
  ],
  faqs: [
    {
      q: "Is beehiiv cheaper than Substack?",
      a: "<p>Only when 10% of subscription revenue is more than the beehiiv tier, or when you are comparing a paid beehiiv feature Substack does not include. At 4,000 subscribers Lite is $109 a month. Substack's platform fee is $0 until readers pay, then 10% plus Stripe.</p>",
    },
    {
      q: "How much does Substack take?",
      a: "<p>10% of subscription revenue, plus Stripe. The help article quotes 2.9% + $0.30 for US cards and 0.7% for Stripe Billing. A custom domain is $50 once. Publishing is free at any list size.</p>",
    },
    {
      q: "Does beehiiv take a cut of subscriptions?",
      a: "<p>beehiiv's pricing FAQ says 0% on paid plans. Stripe's 2.9% + $0.30 still applies. Free does not include paid subscriptions. You also pay the Lite or Pro bucket.</p>",
    },
    {
      q: "What is beehiiv at 10,000 subscribers?",
      a: "<p>Lite is $139 a month, or $119 a month billed annually ($1,428 a year). Pro is $239 a month, or $199 annual effective. Sends are unlimited. Checked 24 November 2026.</p>",
    },
    {
      q: "Can I move paid subscribers from Substack to beehiiv?",
      a: "<p>You can export the subscriber list. The paid charge does not move with the CSV. Set up beehiiv paid tiers on Lite or Pro and ask readers to subscribe again. People imported to Substack from another tool are set to free, which is the same kind of gap.</p>",
    },
    {
      q: "Does beehiiv Free include the recommendation network?",
      a: "<p>Yes. Automations, the ad network, and paid subscriptions do not. Free stops at 2,500 subscribers.</p>",
    },
    {
      q: "Do I pay beehiiv if nobody buys a subscription?",
      a: "<p>Yes, once you are past 2,500 subscribers or you need a paid-plan feature. The tier is based on subscribers, not on revenue. Substack's 10% is $0 in a month with no subscription payments.</p>",
    },
  ],
  related: [
    { href: "/guides/newsletter-platforms/", kicker: "Guide", title: "Newsletter platforms" },
    { href: "/guides/newsletter-monetization/", kicker: "Guide", title: "Newsletter monetization" },
    { href: "/pricing/beehiiv/", kicker: "Pricing", title: "beehiiv pricing" },
    { href: "/pricing/substack/", kicker: "Pricing", title: "Substack pricing" },
    { href: "/compare/ghost-vs-substack/", kicker: "Comparison", title: "Ghost vs Substack" },
    { href: "/compare/mailcheap-vs-beehiiv/", kicker: "Comparison", title: "MailCheap vs beehiiv" },
    { href: "/alternatives/substack/", kicker: "Alternatives", title: "Substack alternatives" },
    { href: "/alternatives/beehiiv/", kicker: "Alternatives", title: "beehiiv alternatives" },
    { href: "/reviews/beehiiv/", kicker: "Review", title: "beehiiv review" },
  ],
};
