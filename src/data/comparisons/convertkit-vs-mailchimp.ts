import { mailcheapHref } from "../../lib/site";
import type { CompareDoc } from "./types";

const mc = mailcheapHref("/pricing");

export const convertkitVsMailchimp: CompareDoc = {
  id: "convertkit-vs-mailchimp",
  a: "Kit (ConvertKit)",
  b: "Mailchimp",
  platformA: "Kit",
  platformB: "Mailchimp",
  cheaperToggle: true,
  chooseA: "You broadcast to fewer than 10,000 subscribers, or you need sequences and you can pay Creator at a tier Kit actually publishes.",
  chooseB: "The account is a store audience or a set of journeys, and you have priced the contact tier instead of the $20 starting line.",
  priceNoteA: "Free, for broadcasts. Creator above 3,000 subscribers: check current pricing. Pro at 1,000 is $79 a month.",
  priceNoteB: "Past 500 contacts. Essentials starts at $13 and Standard at $20 for up to 500 contacts only.",
  linkA: { href: "https://kit.com/pricing", label: "Kit pricing" },
  linkB: { href: "https://mailchimp.com/pricing/marketing/", label: "Mailchimp pricing" },
  differencesIntro: [
    `Kit, formerly ConvertKit, documents a free plan through 10,000 subscribers for broadcasts, forms, and landing pages. The help article dated 23 September 2026 says sequences and visual automations are not on Free. Creator is $39 a month up to 1,000 subscribers. Kit's billing help uses $59 a month as the Creator price at the 3,000-subscriber tier (the example is 1,200 subscribers paying $59). Pro is $79 a month at 1,000 subscribers on the pricing page. Above 3,000 subscribers on Creator, check kit.com/pricing. Annual plans are 12 months for the price of 10, so the $39 tier is $390 a year, about $32.50 a month, and the $59 tier is $590 a year.`,
    `Mailchimp Free stops at 250 contacts and 500 sends. <a href="https://mailchimp.com/landers/pricing/standard/">Standard</a> starts at $20 a month and <a href="https://mailchimp.com/landers/pricing/essentials/">Essentials</a> at $13, both for up to 500 contacts. Mailchimp's price above 500 contacts is check current pricing. See <a href="/pricing/convertkit/">Kit pricing</a> and <a href="/pricing/mailchimp/">Mailchimp pricing</a>.`,
  ],
  differences: [
    {
      topic: "Broadcasts under 10,000 subscribers",
      favors: "Kit",
      why: "Free is $0 with unlimited broadcasts. Mailchimp Free cannot hold the list past 250 contacts.",
    },
    {
      topic: "Sequences at 1,000 subscribers",
      favors: "Kit, on a known price",
      why: "Creator is $39 a month, or about $32.50 billed annually. Mailchimp's longer automations are on Standard, and at 1,000 contacts that price is check current pricing. Essentials flows stop at 4 steps.",
    },
    {
      topic: "Sequences at 4,000 subscribers",
      favors: "Check Kit before you assume",
      why: "Broadcasts are still $0. Creator's list price above 3,000 subscribers is not a fixed row in the billing article. Mailchimp is also check current pricing.",
    },
    {
      topic: "Sends",
      favors: "Kit, on the cap",
      why: "Kit's pricing FAQ says no plan has a sending limit. Mailchimp Free is 500 a month. Paid Mailchimp plans allow 10, 12, or 15 times the contact limit.",
    },
    {
      topic: "Who counts toward the bill",
      favors: "Kit, if you confirmed subscribers only",
      why: "Kit's billing help says the bill is confirmed subscribers. Mailchimp counts unsubscribed and non-subscribed contacts until you archive them.",
    },
  ],
  pricingIntro: [
    `Ignore the introductory Creator offer if you see one. On 25 November 2026 Kit's pricing page showed 50% off the first three months, through 1 December 2026. Comparisons use the $39 list price. A discount that ends is not the renewal.`,
    `Kit moves you up a tier automatically when you pass it. Moving down is a switch you make in billing, and it starts on the next bill, not today. The billing help's worked example: 1,200 subscribers at $59, cleaned to 800, can move to the $39 tier. Sales tax can apply based on your billing address. That tax is not in the $39.`,
    `Mailchimp's send math still matters if you stay. At a 10,000-contact Standard limit the allowance is 12 times 10,000, which is 120,000 sends. A weekly letter is about 43,334 emails. The allowance can fit while the price remains on Mailchimp's page. At 4,000 subscribers, five weekly sends are 4,000 × 5 = 20,000 emails, before welcome emails and tests.`,
  ],
  featuresIntro: [
    `Kit's free-plan article is the source for what is included at $0. Mailchimp's pricing help is the source for plan gates. Creator Network details are Kit's, not Mailchimp's.`,
  ],
  matrix: [
    {
      name: "Price",
      rows: [
        { feature: "Free broadcasts", a: "Up to 10,000 subscribers", b: "250 contacts, 500 sends" },
        { feature: "Creator or Essentials entry", a: "Creator $39 up to 1,000", b: "Essentials $13 up to 500" },
        { feature: "Next known paid tier", a: "Creator $59 up to 3,000", b: "Standard $20 up to 500, then check current pricing" },
        { feature: "Pro at 1,000", a: "$79 a month", b: "No equivalent published here" },
        { feature: "Annual", a: "12 months for the price of 10", b: "Check current pricing above 500" },
        { feature: "Above 10,000 subscribers", a: "Paid plan required to keep sending", b: "Check current pricing" },
      ],
    },
    {
      name: "Sequences, selling, and growth",
      rows: [
        { feature: "Visual automations and sequences", a: "Creator and Pro, not Free", b: "Essentials up to 4 steps. Standard expands them" },
        { feature: "Digital products and subscriptions", a: "On Free. Kit charges 3.5% + 30¢ per sale on Free, card processing included (kit.com/pricing, checked 25 November 2026).", b: "Store connections, not a published newsletter take rate" },
        { feature: "Recommendations", a: "Creator Network on Free. Paid plans get more distribution", b: "Not the same network. Mailchimp is the audience you already have" },
        { feature: "Forms and landing pages", a: "Unlimited on Free", b: "Available, including a trial of them on Free" },
        { feature: "A/B tests on broadcasts", a: "On Free", b: "Essentials and up" },
        { feature: "API", a: "On Free. AI connectors are paid", b: "Check Mailchimp's developer docs for the plan gate" },
      ],
    },
  ],
  sections: [
    {
      id: "sequences",
      title: "Sequences and automations",
      paragraphs: [
        `Kit's free plan lets you open the visual automation and sequence screens. Creating one asks you to upgrade. Rules and RSS campaigns are on the same paid list. Free still sends unlimited broadcasts, tags and segments the audience, and runs A/B tests on those broadcasts. A single welcome issue can be a broadcast you send by hand. A sequence that waits three days and branches on a click is Creator.`,
        `At 1,000 subscribers that upgrade is $39 a month, or $390 a year. At 3,000 it is $59 a month, or $590 a year, using the billing help's annual rule of 12 months for the price of 10. At 4,000 subscribers, broadcasts remain free and the Creator dollar is check current pricing. Pro at 1,000 subscribers is $79 a month and adds the reporting and referral items on Kit's pricing page, including deliverability reporting and a newsletter referral system. Do not buy Pro to get sequences. Sequences start on Creator.`,
        `Mailchimp Essentials is the wrong place to rebuild a long Kit sequence. The pricing help caps Essentials flows at 4 steps. Standard is the expanded automation plan, and above 500 contacts its price is on Mailchimp's site. If you are leaving Mailchimp because of the contact bill and you do not use journeys, Kit Free is the comparison. If you are leaving because you want sequences, price Creator at your confirmed-subscriber count, not at Mailchimp's contact total. Those counts differ when unsubscribed people are still in Mailchimp.`,
        `Kit support on Free is answered in the order received, within 24 hours, according to the free-plan article. That is a queue statement, not a review of how helpful the replies are.`,
      ],
    },
    {
      id: "paid",
      title: "Paid newsletters and products",
      paragraphs: [
        `Kit's free-plan article lists digital products and subscriptions on Free, so you can sell from the list without Creator. Kit charges 3.5% + 30¢ per sale on Free, card processing included (kit.com/pricing, checked 25 November 2026). Earning from Paid Recommendations is paid-plan only. Free and Smart Recommendations through the Creator Network are on Free, with five Smart Recommendation slots you can edit. Paid plans get priority and a larger share. You can turn recommendations off without changing the rest of the plan.`,
        `That is easy to misread as "Kit Free cannot make money." It can sell a product. It cannot run the sequence that pitches the product over a week unless you pay, and it cannot take Paid Recommendation revenue on Free. If the business is the recommendation network, compare <a href="/compare/beehiiv-vs-convertkit/">beehiiv vs Kit</a> before you compare Kit with Mailchimp.`,
        `Mailchimp does not publish a 10% or 0% newsletter fee. Commerce is a connected store, audiences, and journeys. A Kit subscription product does not become a Mailchimp journey. Export buyers as tagged subscribers if the file has the tag, and set up the new checkout before you turn the old one off. Kit's pricing FAQ says paid plans include a free migration service that handles lists and automations. Free does not get that service. Read the current offer on Kit's site if you are about to pay, because a migration perk can change.`,
      ],
    },
    {
      id: "deliverability",
      title: "Deliverability and sending rules",
      paragraphs: [
        `Kit says there is no sending limit on any plan. The limit that stops Free is 10,000 subscribers. Past that, you upgrade to keep sending, and the automations you could not run on Free unlock. Mailchimp stops Free at 250 contacts, with 500 sends a month and 250 a day. Paid Mailchimp send caps are multiples of the contact limit, and test emails count.`,
        `Kit bills confirmed subscribers. Cleaning the list can qualify you for a lower tier at the next bill if you switch. It does not refund the current period. Mailchimp keeps charging for unsubscribed contacts until they are archived. The same CSV can look like 8,000 people in Mailchimp and 5,000 confirmed subscribers in Kit. Price both counts.`,
        `Pro is where Kit lists deliverability reporting. That is a dashboard on a $79 plan at 1,000 subscribers, not a placement guarantee. Authenticate your domain on whichever tool you keep, and mail a test before the imported list.`,
      ],
    },
  ],
  prosA: {
    pros: [
      "Broadcasts, forms, landing pages, tagging, and product sales are $0 up to 10,000 subscribers.",
      "No send cap on the free plan, unlike Mailchimp's 500 emails.",
      "Creator is a published $39 up to 1,000 subscribers and $59 up to 3,000 when you need sequences.",
      "The bill follows confirmed subscribers, and annual billing is 12 months for the price of 10.",
    ],
    cons: [
      "Sequences, visual automations, rules, and RSS need a paid plan.",
      "Creator's price above 3,000 subscribers is check current pricing.",
      "Paid plans get more of the Creator Network. Free gets five editable slots and a smaller share.",
      "Past 10,000 subscribers, sending stops until you pay.",
    ],
  },
  prosB: {
    pros: [
      "One account can hold store audiences and the letter.",
      "Standard is the documented home for longer automations and custom HTML.",
      "Starting prices at 500 contacts are published: $13 Essentials, $20 Standard.",
      "Paid overages bill extra instead of freezing the account outright.",
    ],
    cons: [
      "Free is 250 contacts. A real newsletter list does not fit.",
      "Above 500 contacts, check current pricing. Do not reuse the $20 figure.",
      "Unsubscribed contacts count until archived.",
      "Essentials flows are capped at 4 steps.",
    ],
  },
  who: [
    `Choose Kit Free when the Mailchimp account is a weekly or irregular broadcast, the confirmed list is under 10,000, and you can send the welcome email as a broadcast for now. The price difference versus Mailchimp is the whole Mailchimp invoice, because Kit's side is $0. Choose Creator when you can name the sequence: a course, a trial of a product, a branch on a tag. At 1,000 subscribers that is $39 a month. At 4,000, check Kit's page for Creator and keep broadcasts at $0 until you need the sequence.`,
    `Choose Mailchimp when journeys are tied to purchases, you sync ad audiences, or several people already work in that account with the seats Standard includes (5, with author and viewer roles). Get the contact-tier price with unsubscribed people still counted, then decide. If that quote is high and you still need sequences, Creator may cost less. If you do not need sequences, Kit Free costs nothing.`,
    `Choose MailCheap only after Kit Free no longer fits, or when you are past 10,000 and you do not want Creator. Growth is $39 at 10,000 weekly subscribers (about 43,334 emails). That is a send. It is not the Creator Network and it is not a visual sequence product in the Kit sense. MailCheap does document automations. Read them on mailcheap.ai before you call the products the same.`,
  ],
  switching: [
    `From Kit to Mailchimp, export subscribers from Kit and import the people who should be mailed. Map tags into Mailchimp if you still want them. Sequences do not become customer journeys. On Mailchimp, Essentials will not hold a long sequence. Confirm Standard's price at your contact count, which will be higher than Kit's confirmed-subscriber count if unsubscribed addresses come along. Kit's billing help says a downgrade or cancellation keeps paid features until the period you already paid for ends. You do not need to rush the export on the morning you click cancel.`,
    `From Mailchimp to Kit, export the audience as CSV. Mailchimp's help says the ZIP can separate subscribed, unsubscribed, non-subscribed, and cleaned contacts, and that contact exports omit open and click reports. Import subscribed people into Kit and stay under 10,000 if you want Free. Kit's free-plan article says you can import an existing list and that passing 10,000 requires a paid plan to keep sending. Unsubscribed addresses should not be imported as active.`,
    `Paid products and Paid Recommendations do not move as billing. Recreate the offer. Automations you built on Kit stay in the Kit account if you later downgrade to Free, and they stop running until you upgrade again. Mailchimp journeys stay in Mailchimp. Screenshot both before you close an account.`,
    `Add the new platform's DNS records for the sending domain. Send a test. Kit has no send cap to trip on the first issue. Mailchimp will count every test toward the monthly allowance, and Free will also hit the daily cap of 250. Do not test a 4,000-person list from Mailchimp Free.`,
  ],
  cheaper: [
    `Under 10,000 subscribers, Kit Free is already $0 for broadcasts. MailCheap at $19 is not cheaper than $0. The MailCheap case starts when you pass 10,000, or when you refuse Creator's price for sequences and you only need to send. At 25,000 weekly subscribers the email estimate is about 108,334. MailCheap Pro is $79 a month for 200,000 emails. Creator at that size is check current pricing on Kit's page. Compare those two numbers on the vendors' pages. The affiliate link is <a href="${mc}" rel="sponsored nofollow noopener">MailCheap pricing</a>.`,
  ],
  faqs: [
    {
      q: "How does Mailchimp vs Kit (ConvertKit) compare?",
      a: "<p>Mailchimp vs Kit, and Mailchimp vs ConvertKit, are this pair read from the other side. Kit Free covers broadcasts to 10,000 subscribers. Mailchimp Free stops at 250 contacts. Sequences on Kit start at $39 a month. A store that already runs in Mailchimp is the reason to stay.</p>",
    },
    {
      q: "Is Kit the same product as ConvertKit?",
      a: "<p>Yes. Kit is the current name. Pricing pages and the help center use Kit.</p>",
    },
    {
      q: "Is Kit free compared with Mailchimp?",
      a: "<p>For broadcasts, Kit is $0 up to 10,000 subscribers. Mailchimp Free stops at 250 contacts and 500 sends. Sequences on Kit need Creator, from $39 a month up to 1,000 subscribers.</p>",
    },
    {
      q: "How much is Kit Creator?",
      a: "<p>$39 a month up to 1,000 subscribers, and $59 a month up to 3,000 in Kit's billing help. Annual billing is 12 months for the price of 10 ($390 and $590 a year). Above 3,000 subscribers, check Kit's pricing page. Pro is $79 a month at 1,000 subscribers.</p>",
    },
    {
      q: "Does Kit Free include sequences?",
      a: "<p>No. You can open the screens. Creating a sequence or a visual automation requires a paid plan. Broadcasts, forms, landing pages, tagging, and digital products are on Free.</p>",
    },
    {
      q: "Can I sell a newsletter on Kit Free?",
      a: "<p>The free-plan article says digital products and subscriptions are included, so you can sell from the list. Kit charges 3.5% + 30¢ per sale on Free, card processing included (kit.com/pricing, checked 25 November 2026). Earning from Paid Recommendations needs a paid plan. A multi-email pitch sequence also needs Creator.</p>",
    },
    {
      q: "Will Mailchimp automations import into Kit?",
      a: "<p>No. Export contacts. Rebuild the journey. Kit's paid plans advertise a migration service. Confirm it on Kit's site if you are paying for Creator partly for that help.</p>",
    },
    {
      q: "What happens at 10,000 subscribers on Kit?",
      a: "<p>You need a paid plan to keep sending. The account and anything you built remain. Automations and sequences become available when you upgrade.</p>",
    },
  ],
  related: [
    { href: "/guides/newsletter-platforms/", kicker: "Guide", title: "Newsletter platforms" },
    { href: "/pricing/convertkit/", kicker: "Pricing", title: "Kit pricing" },
    { href: "/pricing/mailchimp/", kicker: "Pricing", title: "Mailchimp pricing" },
    { href: "/alternatives/convertkit/", kicker: "Alternatives", title: "Kit alternatives" },
    { href: "/alternatives/mailchimp/", kicker: "Alternatives", title: "Mailchimp alternatives" },
    { href: "/compare/beehiiv-vs-convertkit/", kicker: "Comparison", title: "beehiiv vs Kit" },
    { href: "/compare/mailerlite-vs-mailchimp/", kicker: "Comparison", title: "MailerLite vs Mailchimp" },
  ],
};
