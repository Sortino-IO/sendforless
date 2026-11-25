import { mailcheapHref } from "../../lib/site";
import type { CompareDoc } from "./types";

const mc = mailcheapHref("/pricing");

export const beehiivVsConvertkit: CompareDoc = {
  id: "beehiiv-vs-convertkit",
  a: "beehiiv",
  b: "Kit (ConvertKit)",
  platformA: "beehiiv",
  platformB: "Kit",
  cheaperToggle: true,
  chooseA: "You want a publication site, recommendations, and, on Lite, ads and automations, and you accept a subscriber bucket once you pass 2,500.",
  chooseB: "You broadcast to under 10,000 subscribers at $0, or the business is sequences and a creator CRM at Creator's published tiers.",
  priceNoteA: "Lite, up-to-5,000 bucket, $109 a month. Annual effective is $95. Free ended at 2,500.",
  priceNoteB: "Free, for broadcasts. Creator's price above 3,000 subscribers: check current pricing.",
  linkA: { href: "https://www.beehiiv.com/pricing", label: "beehiiv pricing" },
  linkB: { href: "https://kit.com/pricing", label: "Kit pricing" },
  differencesIntro: [
    `The free caps do not match. beehiiv Free is $0 up to 2,500 subscribers, with unlimited sends and the recommendation network, and without automations or paid subscriptions. Kit Free is $0 up to 10,000 subscribers, with unlimited broadcasts, forms, landing pages, tagging, and digital products. Sequences and visual automations are paid. At 4,000 subscribers, beehiiv Lite is $109 a month ($95 annual effective, $1,140 a year) and Kit broadcasts are still $0.`,
    `Kit Creator is $39 a month up to 1,000 subscribers and $59 a month up to 3,000, from the billing help. Annual billing is 12 months for the price of 10. Pro is $79 a month at 1,000 subscribers. Above 3,000 on Creator, check the pricing page. beehiiv's full buckets are on <a href="/pricing/beehiiv/">beehiiv pricing</a>. Kit's notes are on <a href="/pricing/convertkit/">Kit pricing</a>.`,
  ],
  differences: [
    {
      topic: "Price at 1,000 subscribers if you only broadcast",
      favors: "Both, at $0",
      why: "beehiiv Free and Kit Free both cover this list. You pay only if you need a feature the free plan withholds.",
    },
    {
      topic: "Price at 4,000 subscribers if you only broadcast",
      favors: "Kit",
      why: "Kit Free is $0. beehiiv Free ended at 2,500, so Lite is $109 a month.",
    },
    {
      topic: "Sequences at 1,000 subscribers",
      favors: "Kit, on price",
      why: "Creator is $39 a month. beehiiv automations start on Lite at $59 a month in the 1,000 bucket, and Lite includes more than sequences.",
    },
    {
      topic: "Ads and a publication site",
      favors: "beehiiv",
      why: "The ad network is on Lite and Pro. Kit's pricing page does not sell that network. Kit's Creator Network is recommendations, with paid plans getting a larger share.",
    },
    {
      topic: "Sends",
      favors: "Neither on a meter",
      why: "beehiiv includes unlimited sends on every plan. Kit's pricing FAQ says no plan has a sending limit. Subscriber caps are what stop the free plans.",
    },
  ],
  pricingIntro: [
    `At 10,000 subscribers, Kit Free is still $0 for broadcasts and beehiiv Lite is $139 a month, or $119 billed annually ($1,428 a year). At 25,000, Kit Free has ended, so Creator is check current pricing, and beehiiv Lite is $199 a month, or $169 annual effective. Creator above 3,000 subscribers is on kit.com/pricing.`,
    `beehiiv annual is the yearly total divided by 12. Kit annual is 10 months' price for 12 months, which is a different discount. Compare monthly with monthly, or annual with annual. At 4,000 subscribers, five weekly sends are 4,000 × 5 = 20,000 emails, before welcome emails and tests.`,
  ],
  featuresIntro: [
    `beehiiv cells are from the pricing file. Kit cells are from the free-plan article (23 September 2026), the billing article, and the pricing page. Checked 24 November 2026.`,
  ],
  matrix: [
    {
      name: "Price and caps",
      rows: [
        { feature: "Free subscribers", a: "2,500", b: "10,000" },
        { feature: "At 2,500, broadcasts", a: "$0 Free. Lite is $79 if you need paid tools", b: "$0 Free" },
        { feature: "At 5,000", a: "Lite $109 a month", b: "$0 broadcasts. Creator: check current pricing" },
        { feature: "At 10,000", a: "Lite $139 a month", b: "$0, at the free cap" },
        { feature: "At 25,000", a: "Lite $199 a month", b: "Check current pricing" },
        { feature: "Send limit", a: "Unlimited", b: "None stated, on any plan" },
      ],
    },
    {
      name: "Growth, automations, and selling",
      rows: [
        { feature: "Recommendations", a: "On every plan, including Free", b: "Creator Network on Free. Paid plans get priority and a larger share" },
        { feature: "Paid recommendations", a: "Lite and Pro", b: "Earning requires a paid plan" },
        { feature: "Ad network", a: "Lite and Pro, not every region, not in trial", b: "Not in the Kit docs we read" },
        { feature: "Automations", a: "Lite: 10 live. Pro: unlimited. Free: no", b: "Creator and Pro. Free can view the screens only" },
        { feature: "Paid subscriptions", a: "Lite and Pro, 0% platform fee", b: "On Free. Kit charges 3.5% + 30¢ per sale on Free, card processing included (kit.com/pricing, checked 24 November 2026)." },
        { feature: "API and agents", a: "Read MCP on Free. Write on Lite. Send API on Pro", b: "API on Free. AI connectors on paid plans" },
      ],
    },
  ],
  sections: [
    {
      id: "growth",
      title: "Growth tools: recommendations and the Creator Network",
      paragraphs: [
        `beehiiv's recommendation network is on Free. Paid recommendations, the ad network, and referral rewards start on Lite. Lite allows 3 referral milestones. Pro makes that unlimited and adds a sponsorship storefront. The ad network is excluded from the trial and is not offered in every region. If you are under 2,500 subscribers and you only want to recommend other newsletters, Free is the plan. You do not need the $59 Lite bucket at 1,000 subscribers for the basic network.`,
        `Kit enrolls you in the Creator Network on signup. The free-plan article says you get five Smart Recommendation slots, filled with similar creators and editable by you, and that other creators can feature you. Paid plans get priority and a larger share of those recommendations. Earning money from Paid Recommendations needs a paid plan. You can turn the network off without changing the rest of the plan. Five slots on Free is a documented number. beehiiv's pricing file does not publish a slot count for recommendations.`,
        `These are different growth bets. beehiiv pairs recommendations with an ad network and a publication site. Kit pairs recommendations with a creator CRM: tags, products, and, once you pay, sequences. A writer who wants boost-style ads is reading the beehiiv column. A writer who wants other creators to recommend a newsletter and then run a sequence is reading the Kit column. Neither network's signup volume is measured here.`,
        `Past 2,500 subscribers, beehiiv's network is no longer free. You pay Lite to keep the account, even if you never turn on ads. Kit's network stays on the $0 plan until 10,000 subscribers, with the smaller share the help article describes. That is the practical gap at 4,000 subscribers: $109 a month versus $0, before you ask which network your topic actually uses.`,
      ],
    },
    {
      id: "sequences",
      title: "Sequences, automations, and segments",
      paragraphs: [
        `Kit Free does not run sequences. Creator does. At 1,000 subscribers Creator is $39 a month, against beehiiv Lite at $59 for the same bucket if you need beehiiv automations. Lite includes 10 live automations, with email, delay, tags, branches, and triggers for signups, tags, surveys, and purchases. Click-triggered automations and A/B splits inside automations are Pro. If you need 11 live workflows, Lite's cap is the reason to look at Pro or at Kit.`,
        `Kit segments and tags are on Free. beehiiv segments are capped: 3 on Free, 10 on Lite, unlimited on Pro. A free beehiiv account can outgrow segments before it outgrows the 2,500-subscriber cap. Kit's free plan does not have that segment count in the article we read. It says tagging and segmentation are included.`,
        `Above 3,000 subscribers, do not assume Creator stays at $59. The billing article's published example stops at the 3,000 tier. Check Kit's pricing page and write that number next to Lite. At 10,000 subscribers Lite is $139 a month. Kit broadcasts are $0 until you need the sequence.`,
      ],
    },
    {
      id: "paid",
      title: "Paid newsletters",
      paragraphs: [
        `beehiiv takes 0% of paid subscription revenue on Lite and Pro and charges the subscriber tier instead. Stripe is 2.9% + $0.30. Free cannot sell subscriptions. One paid tier is on Lite. Unlimited tiers are on Pro. Digital products exist on Free with a cap of 1 product.`,
        `Kit's free-plan article puts digital products and subscriptions on Free. You can sell without Creator. Kit charges 3.5% + 30¢ per sale on Free, card processing included (kit.com/pricing, checked 24 November 2026). You cannot earn from Paid Recommendations on Free, and you cannot run the email sequence that sells the product unless you upgrade. If the sale is a single checkout link inside a broadcast, Kit Free can be enough. If the sale is a week of emails, Creator is the bill.`,
        `Moving a paid subscriber between these two does not move the card on file. Export the address, recreate the offer, and charge again. beehiiv data exports are listed on every plan. Kit's paid plans mention a migration service. Confirm that service on Kit's site if you are paying for it.`,
      ],
    },
    {
      id: "website",
      title: "Website, archive, and the API",
      paragraphs: [
        `Both products include pages. beehiiv's website is on every plan, with a podcast and, on higher plans, more custom pages and a custom domain. Kit Free includes unlimited forms and landing pages. The Kit site is closer to landing pages and a newsletter home. beehiiv's stack adds the podcast download caps and a community product with its own limits. Pick the one that matches the site you will actually maintain.`,
        `API access on beehiiv Free excludes the Send API. MCP write access starts on Lite. Kit's free plan includes API access and excludes AI connectors. An agent that only reads the list may fit either free plan. An agent that sends mail is a paid beehiiv feature (Send API on Pro) or a Kit plan question you should confirm in the current API docs, because the free-plan article lists API access without spelling every endpoint.`,
      ],
    },
  ],
  prosA: {
    pros: [
      "Free includes the recommendation network, a site, and unlimited sends up to 2,500 subscribers.",
      "Lite is a published bucket price with 0% of subscription revenue, automations, and the ad network.",
      "Sends never pick the tier. A daily letter costs the same bucket as a weekly one.",
      "Pro removes branding and the 10-automation cap if you outgrow Lite.",
    ],
    cons: [
      "Past 2,500 subscribers the account is paid even for a plain broadcast.",
      "Lite allows 10 live automations and 10 segments.",
      "The ad network is not in every region and not in the trial.",
      "Branding stays on until Pro.",
    ],
  },
  prosB: {
    pros: [
      "Broadcasts are $0 through 10,000 subscribers, with unlimited forms and landing pages.",
      "Digital products and subscriptions are on the free plan.",
      "Creator is $39 up to 1,000 subscribers when you need sequences.",
      "There is no send cap on any plan, according to Kit's pricing FAQ.",
    ],
    cons: [
      "Sequences and visual automations do not run on Free.",
      "Creator's price above 3,000 subscribers is check current pricing.",
      "Paid plans get a larger share of Creator Network recommendations.",
      "Kit's pricing and free-plan articles do not list an ad network.",
    ],
  },
  who: [
    `Choose Kit when the list is under 10,000 and the work is broadcasts, a simple product link, or forms. At 4,000 subscribers that price is $0. Choose Creator when a sequence has a job and the tier is one Kit publishes: $39 up to 1,000, $59 up to 3,000. Above that, open Kit's pricing page before you call Creator cheaper than Lite.`,
    `Choose beehiiv when you want the publication stack: recommendations plus, on Lite, ads, automations, and paid subscriptions at 0% plus the monthly bucket. At 4,000 subscribers that bucket is $109 a month. Choose it over Kit Free only if those paid features are in use. Paying $109 to duplicate a broadcast Kit still sends for $0 is a choice you can decline.`,
    `Choose neither for a plain send once both free plans are too small or too limited. That is the MailCheap section. Choose Ghost if members need a site you theme and a Stripe account you own. That comparison is <a href="/compare/ghost-vs-substack/">Ghost vs Substack</a>, with beehiiv's fee math on <a href="/compare/beehiiv-vs-substack/">beehiiv vs Substack</a>.`,
  ],
  switching: [
    `From beehiiv to Kit, export subscribers. beehiiv lists data exports on every plan. MailCheap's import notes describe the full beehiiv export (Settings, Export data, Export all subscribers) as the file that includes tags and stats, and the quick export as email and status. Import into Kit and stay under 10,000 if you need Free. Paid subscriptions and automations do not become Kit sequences. Recreate the offer. If you used beehiiv ads or paid recommendations, that income stops when the beehiiv publication stops.`,
    `From Kit to beehiiv, export the Kit list and import it. If you are over 2,500 subscribers, budget Lite before the import, because Free will not hold the list. Sequences stop being sequences. Screenshot them and rebuild up to Lite's 10 live automations, or Pro if you need more. Creator Network recommendations do not become beehiiv recommendations. Turn the beehiiv network on and expect a different result.`,
    `Kit's pricing FAQ says paid plans include a migration service for lists and automations. If that is why you would pay Creator, confirm the current terms on Kit's site. Free-to-free moves are a CSV you handle. DNS for a custom domain is a Lite feature on beehiiv and a setup step on whichever Kit plan you use for a custom sending domain. Send a test broadcast before you delete the old account. Neither free plan meters the number of emails in that test the way Mailchimp does. The subscriber cap still applies.`,
  ],
  cheaper: [
    `Between these two, the cheaper broadcast under 10,000 subscribers is Kit Free at $0, and under 2,500 it is a tie at $0. MailCheap is not cheaper than $0. It becomes the lower paid bill when you are past those caps and you do not need recommendations, ads, or sequences. At 10,000 weekly subscribers, about 43,334 emails, MailCheap Growth is $39 a month and beehiiv Lite is $139. Kit is still $0 until you need Creator, whose price at 10,000 is check current pricing.`,
    `At 4,000 weekly subscribers, Starter is $19. Most people in this comparison should stay on Kit Free until a paid feature has a job. The affiliate link is <a href="${mc}" rel="sponsored nofollow noopener">MailCheap pricing</a>.`,
  ],
  faqs: [
    {
      q: "Is beehiiv or Kit cheaper for a newsletter?",
      a: "<p>For broadcasts under 2,500 subscribers, both free plans are $0. From 2,501 to 10,000, Kit Free is $0 and beehiiv Lite is a paid bucket ($109 a month at 5,000 subscribers, $139 at 10,000). Sequences on Kit need Creator, from $39 a month.</p>",
    },
    {
      q: "What is the difference between recommendations and the Creator Network?",
      a: "<p>beehiiv's recommendation network is on every plan, and paid recommendations plus the ad network start on Lite. Kit's Creator Network is on Free with five Smart Recommendation slots. Paid Kit plans get priority and a larger share. Earning from Kit's Paid Recommendations needs a paid plan.</p>",
    },
    {
      q: "Does Kit Free include automations?",
      a: "<p>No. Broadcasts, forms, landing pages, tagging, and digital products are included up to 10,000 subscribers. Visual automations and sequences need Creator or Pro.</p>",
    },
    {
      q: "How many automations does beehiiv Lite include?",
      a: "<p>10 live automations. Pro lists unlimited. Free lists none. Click-triggered automations are Pro.</p>",
    },
    {
      q: "Can I move a Kit sequence to beehiiv?",
      a: "<p>Not as a working automation. Export subscribers, screenshot the sequence, and rebuild it inside Lite's 10-automation cap or on Pro. Paid billing does not move with the CSV.</p>",
    },
    {
      q: "What happens at 10,000 subscribers on Kit?",
      a: "<p>You need a paid plan to keep sending. The Creator price at that size was not a fixed figure in the billing article, so check Kit's pricing page. beehiiv Lite at 10,000 subscribers is $139 a month.</p>",
    },
    {
      q: "Does beehiiv charge per email?",
      a: "<p>No. Every plan includes unlimited sends. You pay for the subscriber bucket, or $0 under 2,500 on Free.</p>",
    },
  ],
  related: [
    { href: "/guides/newsletter-platforms/", kicker: "Guide", title: "Newsletter platforms" },
    { href: "/pricing/beehiiv/", kicker: "Pricing", title: "beehiiv pricing" },
    { href: "/pricing/convertkit/", kicker: "Pricing", title: "Kit pricing" },
    { href: "/compare/beehiiv-vs-substack/", kicker: "Comparison", title: "beehiiv vs Substack" },
    { href: "/compare/convertkit-vs-mailchimp/", kicker: "Comparison", title: "Kit vs Mailchimp" },
    { href: "/alternatives/beehiiv/", kicker: "Alternatives", title: "beehiiv alternatives" },
    { href: "/alternatives/convertkit/", kicker: "Alternatives", title: "Kit alternatives" },
    { href: "/reviews/beehiiv/", kicker: "Review", title: "beehiiv review" },
  ],
};
