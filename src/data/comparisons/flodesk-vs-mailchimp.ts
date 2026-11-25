import { mailcheapHref } from "../../lib/site";
import type { CompareDoc } from "./types";

const mc = mailcheapHref("/pricing");

export const flodeskVsMailchimp: CompareDoc = {
  id: "flodesk-vs-mailchimp",
  a: "Flodesk",
  b: "Mailchimp",
  platformA: "Flodesk",
  platformB: "Mailchimp",
  cheaperToggle: true,
  chooseA: "You want one sending price that does not move when the list grows, and you will use the templates and workflows more than a store database.",
  chooseB: "You already run audiences, ads, or journeys in Mailchimp, or the list is still at the 500-contact starting price, where Standard is $20.",
  priceNoteA: "Email plan, any list size. Annual billing is $38 a month ($456 a year).",
  priceNoteB: "Above 500 contacts. Essentials starts at $13 and Standard at $20, both only for up to 500 contacts.",
  linkA: { href: "https://flodesk.com/pricing", label: "Flodesk pricing" },
  linkB: { href: "https://mailchimp.com/pricing/marketing/", label: "Mailchimp pricing" },
  differencesIntro: [
    `Flodesk Email is $46 a month on monthly billing, or $38 a month billed annually ($456 a year), at any list size. Everything, which adds checkout, is $99 a month or $79 a month annually ($948 a year). Flodesk's pricing FAQ, and the help article edited November 19, 2026, say the Free plan does not include email sending. New paid plans from November 10, 2026 are the unlimited ones. Older tiered plans stay only with people who already have them.`,
    `Mailchimp's price depends on how many contacts you store. <a href="https://mailchimp.com/landers/pricing/essentials/">Essentials</a> starts at $13 a month and <a href="https://mailchimp.com/landers/pricing/standard/">Standard</a> starts at $20 a month, both for up to 500 contacts. Above that, check current pricing on Mailchimp's page. Unsubscribed contacts count until you archive them. The full notes are on <a href="/pricing/flodesk/">Flodesk pricing</a> and <a href="/pricing/mailchimp/">Mailchimp pricing</a>.`,
  ],
  differences: [
    {
      topic: "Price at 500 contacts",
      favors: "Mailchimp, if Standard's $20 is enough",
      why: "Standard starts at $20 and Essentials at $13, for up to 500 contacts. Flodesk Email is $46 a month even at a small list, because the price does not step down.",
    },
    {
      topic: "Price at 4,000 subscribers",
      favors: "Unknown until you open Mailchimp",
      why: "Flodesk Email stays $46 a month ($38 annual). Mailchimp is past 500 contacts, so check current pricing rather than guessing a tier.",
    },
    {
      topic: "Price at 25,000 subscribers",
      favors: "Flodesk, on the number we can verify",
      why: "Email is still $46 a month and sends are unlimited. Mailchimp Standard can store up to 100,000 contacts, but Mailchimp's price at 25,000 contacts is on its pricing page.",
    },
    {
      topic: "Free plan",
      favors: "Mailchimp, if you need to send now",
      why: "Mailchimp Free sends, up to 250 contacts and 500 emails a month. Flodesk Free is forms, landing pages, and a link in bio. It does not send.",
    },
    {
      topic: "Design and templates",
      favors: "Flodesk, if the layout is the point",
      why: "Flodesk's pricing page describes designer templates, custom fonts, and a layout builder. Mailchimp Free has a limited template set. Essentials includes all of Mailchimp's email templates. Standard adds custom-coded templates.",
    },
  ],
  pricingIntro: [
    `Flodesk's annual price is two months free against monthly, which is how $46 becomes $38 and $99 becomes $79. Pay the yearly total up front. Legacy Lite, Pro, and older unlimited plans are not for sale to new members. If you already have one, Flodesk's help says it keeps its price until you switch, and you cannot return to it after you leave. At 4,000 subscribers, five weekly sends are 4,000 × 5 = 20,000 emails, before welcome emails and tests.`,
    `Mailchimp Essentials stores up to 50,000 contacts and allows 10 times that limit in sends. Standard stores up to 100,000 and allows 12 times. Premium stores up to 200,000 and allows 15 times, with a base tier that includes 10,000 contacts. Premium's dollar amount is on mailchimp.com. A contact is subscribed, unsubscribed, or non-subscribed. Archive people you no longer mail before you accept a tier.`,
    `The calculator above is these two plans only, at whatever list size you type. The table under it is locked to one issue a week so it still makes sense with JavaScript off. Flodesk does not meter that issue. Mailchimp does, at 10 or 12 times the contact limit depending on the plan.`,
  ],
  featuresIntro: [
    `Flodesk rows come from flodesk.com/pricing and the unlimited-plans help article edited November 19, 2026. Mailchimp rows come from the pricing-plans help and the Essentials and Standard landers. Checked November 25, 2026.`,
  ],
  matrix: [
    {
      name: "Price and sending",
      rows: [
        { feature: "Monthly sending plan", a: "Email $46, any list size", b: "Check current pricing above 500 contacts" },
        { feature: "Annual effective", a: "Email $38 ($456/year)", b: "Check current pricing above 500 contacts" },
        { feature: "Checkout plan", a: "Everything $99, or $79 annual", b: "Not a Flodesk-style checkout tier in the pricing help" },
        { feature: "Subscribers", a: "Unlimited on Email and Everything", b: "The contact tier you buy" },
        { feature: "Emails", a: "Unlimited on paid plans", b: "10x Essentials, 12x Standard, 15x Premium" },
        { feature: "Free plan sends", a: "No", b: "Yes, 250 contacts and 500 sends" },
      ],
    },
    {
      name: "Design, forms, and automations",
      rows: [
        { feature: "Templates", a: "Designer templates and custom fonts", b: "Limited on Free. All templates on Essentials" },
        { feature: "Workflows", a: "On Email and Everything. Not on Free", b: "Essentials: up to 4 steps. Standard: expanded" },
        { feature: "A/B test", a: "Subject lines, on paid plans", b: "Essentials and up" },
        { feature: "Landing pages", a: "On Free and paid", b: "On Free, as a trial of the tools" },
        { feature: "Remove branding", a: "Email plan removes Flodesk branding", b: "Essentials lander says the logo can be removed" },
        { feature: "Seats", a: "Email: 1. Everything: 3", b: "Free 1, Essentials 3, Standard 5" },
      ],
    },
    {
      name: "Data and selling",
      rows: [
        { feature: "CSV export", a: "Yes, listed on the pricing page", b: "Yes. Audience export. Reports are separate" },
        { feature: "Custom sending domain", a: "Listed, to authenticate the sender", b: "Confirm in the account. Not in the short pricing help list" },
        { feature: "Subscriptions and checkout", a: "Everything plan", b: "Store and transactional products are separate from the newsletter tier" },
        { feature: "Deliverability tools", a: "Deliverability Center on the pricing page", b: "Not a named center in the pricing help" },
      ],
    },
  ],
  sections: [
    {
      id: "design",
      title: "Design and templates",
      paragraphs: [
        `Flodesk's pricing page leads with designer templates, custom fonts you upload, and a builder for emails, forms, pages, and checkouts. Personalized links and a link-in-bio page are on the same list. The Email plan is the one that adds sending, workflow automations, subject-line A/B tests, resend to people who did not open, and removal of Flodesk branding. Free keeps the forms and the templates' design tools in the sense that you can build pages, and it stops before a campaign goes out.`,
        `That is a different bet from Mailchimp. Mailchimp Free includes a limited set of basic, featured, and themed templates. Essentials opens the full template library, A/B testing, and scheduled sends. Standard adds custom-coded templates and multivariate tests. If the message has to be code you control, Standard is the Mailchimp plan that says so, and above 500 contacts, check current pricing. If you want to start from a designed layout and not track a contact tier, Flodesk Email is the published $46.`,
        `Templates do not export. A Flodesk layout stays in Flodesk. A Mailchimp template stays in Mailchimp. Budget time to rebuild the two or three emails you actually send, not the whole gallery. Custom fonts on Flodesk are part of that rebuild if you leave.`,
        `Everything is the plan when the page also checks out. It adds sales pages, payment plans, upsells, subscription payments, sales tax processing, and two extra seats (three total). It is $99 a month, or $948 a year. Do not buy Everything to get a nicer template. Email already has the designer templates. Buy Everything when you sell through Flodesk and you have read what happens to checkout if you later move down: Flodesk's help says sales pages unpublish and active checkout subscriptions end.`,
      ],
    },
    {
      id: "automations",
      title: "Automations and segments",
      paragraphs: [
        `Flodesk lists workflow automations on the paid plans: welcome series and nurture sequences. The Free plan's FAQ says workflows are not included. Audience segmentation is listed, including on the feature grid, so you can group subscribers by interest or behavior. Flodesk's pricing FAQ does not publish a cap on the number of workflows.`,
        `Mailchimp is more explicit and more limited on the cheap plan. Essentials is single email automations and flows of up to 4 steps. Standard is where expanded flows, templates for flows, and advanced segmentation start. If the Mailchimp account's value is a 12-step commerce journey, Flodesk is a redesign, not a discount, until you have rebuilt that journey and confirmed the workflow list is long enough.`,
        `Segments are also how you avoid mailing people who should not be imported. Flodesk says you can download the subscriber list. Mailchimp's export can split subscribed from unsubscribed. Bring the subscribed file only.`,
      ],
    },
    {
      id: "deliverability",
      title: "Deliverability and sending rules",
      paragraphs: [
        `Flodesk's pricing page lists a Deliverability Center and a custom domain "to improve email deliverability." That is their description of the feature. Paid plans send unlimited email to unlimited subscribers. There is no contact tier to outgrow and no 10× send cap to do the math on. The trade is the flat $46, which is expensive at 300 people and easier to justify when the list is large and Mailchimp's unpublished tier is higher.`,
        `Mailchimp meters sends. Tests count. Free adds a 250-a-day cap. Paid overages bill rather than hard-stop, according to the pricing help. Unsubscribed contacts inflate the tier. Archive them before you compare a Mailchimp quote with $46. A weekly letter to 25,000 people is about 108,334 emails. Standard's send allowance is 12 times the contact limit, so a 25,000-contact limit allows 300,000 sends, which covers that weekly issue. The price of the 25,000 tier is still check current pricing.`,
        `After a move, authenticate the domain on the new platform and send a test.`,
      ],
    },
  ],
  prosA: {
    pros: [
      "Email is $46 a month, or $38 billed annually, with unlimited subscribers and sends.",
      "Designer templates, custom fonts, and a layout builder are part of the product story.",
      "Workflows, subject-line tests, and branding removal start on the Email plan.",
      "The price does not step up at 10,000 or 25,000 subscribers.",
    ],
    cons: [
      "Free does not send email or run workflows.",
      "$46 is more than Mailchimp's $20 Standard starting price at 500 contacts.",
      "Checkout is a second plan at $99 a month, and downgrading unpublishes sales pages.",
      "Email includes one seat. A team of three means Everything.",
    ],
  },
  prosB: {
    pros: [
      "Free can send, within 250 contacts and 500 emails a month.",
      "Essentials at $13 and Standard at $20 are real starting prices at 500 contacts.",
      "Standard is the plan for longer automations and custom-coded templates.",
      "The account can be the store audience, not only the letter.",
    ],
    cons: [
      "Above 500 contacts, check current pricing.",
      "Unsubscribed contacts count until archived.",
      "Essentials automation flows stop at 4 steps.",
      "Send limits scale with the contact tier, and tests count toward them.",
    ],
  },
  who: [
    `Choose Flodesk Email when the list is already past a few thousand, you want the layout tools, and you have confirmed Mailchimp's quote for that contact count is higher than $46. At 4,000 subscribers the Flodesk side of the card is $46 a month regardless. The Mailchimp side stays "check current pricing" until you read your tier. Annual Flodesk is $456 a year, which is $38 a month only if you pay the year up front.`,
    `Choose Mailchimp when 500 contacts at $20 Standard (or $13 Essentials) still covers you, or when the account's automations and store data are the thing you would miss. Choose Mailchimp Standard rather than Essentials if the journey is longer than 4 steps, and get that price from Mailchimp before you cancel Flodesk.`,
    `Choose a send-only tool instead of either when you will not use Flodesk's templates or Mailchimp's audiences. MailCheap Starter is $19 at 4,000 weekly subscribers, with the five-week caveat in the next section. Kit Free is $0 under 10,000 if you only send the newsletter. Those are different products. The design work is why someone pays Flodesk's flat rate.`,
  ],
  switching: [
    `From Flodesk to Mailchimp, export the CSV Flodesk's pricing page says you can download. Import subscribed addresses only. Rebuild the designed emails in Mailchimp templates or custom-coded templates. Workflows do not come across as customer journeys. If you sell on Flodesk Everything, finish or cancel checkout subscriptions before you downgrade or leave. Flodesk's help says a move from Everything to Email unpublishes sales pages and ends active checkout subscriptions. Leaving the platform entirely needs the same care.`,
    `From Mailchimp to Flodesk, export the audience. Mailchimp may give you a ZIP split by status. Import the subscribed file. Archive is the Mailchimp-side cleanup. On Flodesk, the Free plan will not send the first campaign. You need Email at $46, or a trial if one is still offered. The pricing FAQ says a trial of paid features does not require a card, and that the account falls back to Free, which keeps the list and stops sending, when the trial ends.`,
    `In either direction, point the sending domain at the new tool and mail yourself before the list. Forms embedded on your site need the new snippet. Old landing-page URLs do not redirect themselves. Paid subscribers, if any, are checkout records, not rows in the CSV.`,
  ],
  cheaper: [
    `If you do not need Flodesk's templates or Mailchimp's contact database, MailCheap prices the emails. Starter is $19 a month for 20,000 emails and 10,000 subscribers. At 4,000 people and one issue a week the estimate is about 17,334 emails. At 25,000 weekly subscribers the estimate is about 108,334 emails, which is MailCheap Pro at $79, next to Flodesk's $46. At that size Flodesk's $46 can be under Pro, because $46 does not climb. Run your cadence in the calculator.`,
    `MailCheap does not include Flodesk's checkout or Mailchimp's store journeys. It does include a website, forms, automations, and segments on the paid plan, documented on mailcheap.ai. The toggle above adds the row. The link is <a href="${mc}" rel="sponsored nofollow noopener">MailCheap pricing</a>, and it is an affiliate link.`,
  ],
  faqs: [
    {
      q: "How does Mailchimp vs Flodesk compare?",
      a: "<p>At 500 contacts, Essentials is $13 and Standard is $20, and Flodesk Email is $46. At 4,000 subscribers Flodesk stays $46. For Mailchimp, check current pricing.</p>",
    },
    {
      q: "Is Flodesk cheaper than Mailchimp?",
      a: "<p>At 500 contacts, no. Mailchimp Standard starts at $20 and Essentials at $13. Flodesk Email is $46 a month. Above 500 contacts, compare $46 with the quote on Mailchimp's pricing page.</p>",
    },
    {
      q: "Does Flodesk's free plan send email?",
      a: "<p>No. The pricing FAQ says Free covers forms, landing pages, and link-in-bio pages, and does not include email sending or workflow automations. Mailchimp Free does send, up to 250 contacts and 500 emails a month.</p>",
    },
    {
      q: "What is Flodesk's annual price?",
      a: "<p>Email is $456 a year, shown as $38 a month. Everything is $948 a year, shown as $79 a month. Monthly billing stays $46 and $99. Checked November 25, 2026.</p>",
    },
    {
      q: "Do Flodesk templates work in Mailchimp?",
      a: "<p>No. Rebuild the emails you send. The subscriber CSV is the part that moves. Layouts, workflows, and checkout do not.</p>",
    },
    {
      q: "How many emails can I send with Flodesk?",
      a: "<p>Unlimited, on Email and Everything, to unlimited subscribers. That is the pricing page's claim. Free does not send.</p>",
    },
    {
      q: "Does Mailchimp charge for people who unsubscribed?",
      a: "<p>Yes, until you archive them. Subscribed, unsubscribed, and non-subscribed contacts all count toward the tier.</p>",
    },
    {
      q: "Can I sell on the Flodesk Email plan?",
      a: "<p>Checkout, payment plans, and subscription payments are on Everything, at $99 a month or $79 billed annually. Email is the sending plan.</p>",
    },
  ],
  related: [
    { href: "/guides/newsletter-platforms/", kicker: "Guide", title: "Newsletter platforms" },
    { href: "/pricing/flodesk/", kicker: "Pricing", title: "Flodesk pricing" },
    { href: "/pricing/mailchimp/", kicker: "Pricing", title: "Mailchimp pricing" },
    { href: "/compare/mailerlite-vs-mailchimp/", kicker: "Comparison", title: "MailerLite vs Mailchimp" },
    { href: "/alternatives/mailchimp/", kicker: "Alternatives", title: "Mailchimp alternatives" },
    { href: "/reviews/mailcheap/", kicker: "Review", title: "MailCheap review" },
  ],
};
