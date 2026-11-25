import { mailcheapHref } from "../../lib/site";
import type { CompareDoc } from "./types";

const mc = mailcheapHref("/pricing");

export const mailerliteVsMailchimp: CompareDoc = {
  id: "mailerlite-vs-mailchimp",
  a: "MailerLite",
  b: "Mailchimp",
  platformA: "MailerLite",
  platformB: "Mailchimp",
  cheaperToggle: true,
  chooseA: "You want a published subscriber price, automations, pages, and paid newsletters, and you can live with Comfort's email cap or move to Power.",
  chooseB: "The account also runs a store, several audiences, or journeys you will not rebuild, and you have read the contact tier on Mailchimp's own pricing page.",
  priceNoteA: "Up-to-5,000 Comfort tier. Annual billing is 10% less, $44.10. A weekly issue fits the email cap.",
  priceNoteB: "Essentials starts at $13 and Standard at $20, both for up to 500 contacts. This list is past that tier.",
  linkA: { href: "https://www.mailerlite.com/pricing", label: "MailerLite pricing" },
  linkB: { href: "https://mailchimp.com/pricing/marketing/", label: "Mailchimp pricing" },
  differencesIntro: [
    `Both tools send campaigns and run automations. The invoice is the split. MailerLite publishes every Comfort and Power tier through 200,000 subscribers in <a href="https://www.mailerlite.com/pricing.md">mailerlite.com/pricing.md</a> (file dated 8 September 2026, re-read 24 November 2026). Mailchimp's marketing pricing page does not show a static dollar above 500 contacts. <a href="https://mailchimp.com/landers/pricing/essentials/">Essentials</a> starts at $13 a month and <a href="https://mailchimp.com/landers/pricing/standard/">Standard</a> starts at $20 a month, each for up to 500 contacts.`,
    `A second split is who counts. MailerLite bills active subscribers. Unsubscribed and bounced people do not count, but anyone active at any point in the billing cycle still counts until the anniversary, even if you delete them. Mailchimp's help counts subscribed, unsubscribed, and non-subscribed contacts. Archived, cleaned, and deleted contacts do not. A list you never cleaned can cost more on Mailchimp than the active-reader count suggests.`,
  ],
  differences: [
    {
      topic: "Price at 1,000 subscribers, weekly",
      favors: "MailerLite, on a published number",
      why: "Comfort is $19 a month, or $17.10 on annual billing. Mailchimp is past the 500-contact start, so the cell says check current pricing.",
    },
    {
      topic: "Price at 5,000 subscribers, weekly",
      favors: "MailerLite, again on a published number",
      why: "Comfort is $49 a month ($44.10 annual effective). The weekly estimate is about 21,667 emails, under Comfort's 50,000-email cap at that tier. Mailchimp: check current pricing.",
    },
    {
      topic: "Price at 25,000 subscribers, weekly",
      favors: "Whichever quote you actually open",
      why: "Comfort is $179 a month ($161.10 annual). Power, with no email cap, is $239 a month. Mailchimp Standard stores up to 100,000 contacts, but the dollar is on Mailchimp's page.",
    },
    {
      topic: "Free plan that can send",
      favors: "Neither, once the list is real",
      why: "MailerLite Free is 250 active subscribers and 2,500 emails a month. Mailchimp Free is 250 contacts, 500 sends a month, and 250 sends a day.",
    },
    {
      topic: "Automations on the cheap paid plan",
      favors: "MailerLite Comfort",
      why: "Comfort includes 50 active automations and 100 steps. Mailchimp Essentials, from the pricing help, is single email automations and flows of up to 4 steps. Longer flows sit on Standard.",
    },
    {
      topic: "Paid newsletters",
      favors: "MailerLite, if that is the product",
      why: "MailerLite's pricing file puts paid newsletters and recurring subscriptions on Comfort and Power, not on Free. Mailchimp is a contact database that can connect a store. It does not publish a newsletter take rate.",
    },
  ],
  pricingIntro: [
    `Use Comfort when the send fits 10 times the tier ceiling. At the up-to-1,000 tier that cap is 10,000 emails, whether you have 200 subscribers or 900. Power removes the cap through 200,000 subscribers, subject to fair use, and starts at $39 a month at 1,000 subscribers ($35.10 annual). Above 200,000, MailerLite quotes Enterprise. Full tiers are on <a href="/pricing/mailerlite/">MailerLite pricing</a>.`,
    `Mailchimp's help describes four marketing plans: Free, Essentials (up to 50,000 contacts, send limit 10 times the contact limit), Standard (up to 100,000 contacts, 12 times), and Premium (up to 200,000 contacts, 15 times, with a base that includes 10,000 contacts). Above 500 contacts, check current pricing on mailchimp.com. Read the tier on <a href="/pricing/mailchimp/">Mailchimp pricing</a>. At 4,000 subscribers, five weekly sends are 4,000 × 5 = 20,000 emails, before welcome emails and tests.`,
    `Annual on MailerLite is 10% off the monthly rate, billed as the lower monthly figure in their yearly column. Pay the monthly rate or the annual rate. Mailchimp's annual rate above 500 contacts is on mailchimp.com, so those cells say check current pricing.`,
  ],
  featuresIntro: [
    `Rows come from MailerLite's pricing file and from Mailchimp's help article "About Mailchimp Pricing Plans," plus the Essentials and Standard landers for the $13 and $20 starting prices. A cell says "Check current pricing" or "Not in the docs we read" when the page did not state the limit.`,
    `MailerLite says paid plans share one feature set and you pay for subscribers and sending volume. That is not quite true of the free plan, which caps automations at 3, websites and landing pages at 1 each, forms at 3, and blocks API and MCP sending. Mailchimp gates automations, seats, and audiences by plan name.`,
  ],
  matrix: [
    {
      name: "Price and limits",
      rows: [
        { feature: "Free sending plan", a: "250 subscribers, 2,500 emails", b: "250 contacts, 500 sends, 250 a day" },
        { feature: "Who is billed", a: "Active subscribers, cumulative in the cycle", b: "Subscribed, unsubscribed, and non-subscribed" },
        { feature: "Entry paid price", a: "Comfort $12 at 500, Power $25 at 500", b: "Essentials $13, Standard $20, both at 500" },
        { feature: "At 10,000, monthly", a: "Comfort $89, Power $129", b: "Check current pricing" },
        { feature: "Email cap", a: "Comfort: 10x the tier ceiling. Power: fair use", b: "10x, 12x, or 15x the contact limit by plan" },
        { feature: "Annual billing", a: "10% off the monthly rate", b: "Check current pricing above 500 contacts" },
      ],
    },
    {
      name: "Automations, pages, and selling",
      rows: [
        { feature: "Active automations", a: "Free 3, Comfort 50, Power unlimited", b: "Essentials: flows up to 4 steps. Standard: expanded flows" },
        { feature: "Landing pages and sites", a: "Free: 1 site and 1 page. Comfort: 10. Power: unlimited", b: "Forms and landing pages are on Free, as a trial of the tools" },
        { feature: "Signup forms", a: "Free 3, Comfort 10, Power unlimited", b: "Included. A numeric cap was not in the pricing help" },
        { feature: "Paid newsletters", a: "Comfort and Power", b: "No take rate published. Store connections are separate" },
        { feature: "Remove vendor logo", a: "Comfort and Power", b: "Essentials lander says the logo can be removed" },
        { feature: "API and MCP sending", a: "Paid plans. Free MCP does not send", b: "Not compared here. Check Mailchimp's developer docs" },
      ],
    },
    {
      name: "Deliverability and account shape",
      rows: [
        { feature: "Dedicated IP", a: "Add-on on Comfort. Included in the Enterprise description", b: "Not stated as a standard plan line in the pricing help" },
        { feature: "Seats", a: "Free 2, Comfort 3, Power unlimited", b: "Free 1, Essentials 3, Standard 5, Premium unlimited" },
        { feature: "Audiences", a: "Unlimited audiences on every plan", b: "Free 1, Essentials 3, Standard 5, Premium unlimited" },
        { feature: "Support", a: "Comfort: email. Power: chat and email", b: "Essentials and Standard: email and chat. Premium adds phone" },
      ],
    },
  ],
  sections: [
    {
      id: "automations",
      title: "Automations and segments",
      paragraphs: [
        `MailerLite's visual builder is on every plan, including Free. What changes is how many automations can be live: 3 on Free, 50 on Comfort, and no stated cap on Power. Each automation can run 100 steps on Comfort and Power, and 5 steps on Free. Power is the plan that adds multiple triggers on one automation. E-commerce triggers, RSS campaigns, and auto-resend are marked yes from Comfort up. If the welcome series, a tag branch, and a course drip all need to run at once, count them against 50 before you assume Comfort is enough.`,
        `Segments and tags are listed as unlimited on Free, Comfort, and Power. That is a different limit from automations. You can file the list finely and still be unable to run more than 50 live workflows on Comfort. MailerLite also says subscribers who were active during the billing cycle count even after you delete them, so a cleanup does not shrink this month's tier.`,
        `Mailchimp's pricing help puts single email automations and flows of up to 4 steps on Essentials, and expanded flows plus flow templates on Standard. Advanced segmentation and pre-built segments are Standard features. Free does not get that automation list. The Essentials lander calls the 4-step cap a customer journey with up to four actions. If the flow you have in mind is a long branch, Standard is the plan Mailchimp points at, and its price above 500 contacts is check current pricing.`,
        `Neither vendor's public page will map your existing journey one-to-one. Write down the trigger, the waits, and the branches before you move. A contact CSV does not carry that logic. Mailchimp's export help says a contact export leaves out email report data such as opens and clicks. Those live in a separate report export. Treat automations the same way: rebuild them, do not expect the file to contain them.`,
      ],
    },
    {
      id: "forms",
      title: "Forms, landing pages, and the website",
      paragraphs: [
        `MailerLite sells the site as part of the same bill. Free includes 1 website, 1 landing page, and 3 active forms. Comfort raises that to 10 websites and landing pages and 10 forms. Power removes the cap. Custom domains and custom code are Comfort and Power. Landing-page A/B tests are too. The free plan can still embed a form, pop up, and use the blog section, but the published site count is one.`,
        `SEO tools for sites, click maps, password pages, and a favicon are listed on every MailerLite plan. The AI landing-page builder is "once" on Free and open on paid plans. If the newsletter is also the homepage, Comfort is the first plan where a custom domain is a documented yes.`,
        `Mailchimp's pricing help says Free can try landing pages and forms, with a limited template set. Essentials includes all email templates. Standard adds custom-coded templates. The Essentials lander mentions a library of email and landing-page templates and says the Mailchimp logo can come off emails. Mailchimp's pricing help does not publish a cap on the number of landing pages.`,
        `Pages do not move in a subscriber export. MailerLite's migration page is the vendor's offer of help for large lists. It is not a promise that a Mailchimp landing page becomes a MailerLite page. Rebuild the form, point the domain, and send a test signup before you announce the new URL.`,
      ],
    },
    {
      id: "deliverability",
      title: "Deliverability and sending rules",
      paragraphs: [
        `MailerLite's pricing FAQ says it may monitor lists, content, and response data so shared IPs stay usable, and that it does not rent or sell customer data. Data is stored in the EU in an ISO 27001 data center. A dedicated IP is an add-on on Comfort and part of the Enterprise description, which also lists a deliverability consultation. That is a paid extra, not the default Comfort inbox.`,
        `Comfort stops sending when the monthly email cap is used up. You can move to Power or wait for the billing date. The cap is 10 times the top of the tier, not 10 times your exact subscriber count. At the up-to-10,000 tier the cap is 100,000 emails. A weekly issue to 10,000 people is about 43,334 emails, so it fits. A daily issue is subscribers × 7 × 4.33, about 303,000 emails, which does not fit Comfort. Price Power at $129 a month at that tier if you send most days.`,
        `Mailchimp counts every send, including tests and transactional mail, against the monthly limit. Free adds a daily cap of 250. If Free goes over 250 contacts, sending of live and test mail is held until you upgrade or delete contacts. On paid plans, going over the contact limit does not stop the account. Mailchimp bills an extra charge and asks you to raise the tier if the growth is permanent. Unsubscribed people keep counting until you archive them.`,
        `None of these rules is an inbox-placement test. We did not send mail on either platform. Authentication (SPF, DKIM, and a custom sending domain where the plan allows it) is still your step after the import. MailerLite puts custom domains on Comfort and Power. Mailchimp's pricing help does not use those words in the feature list we quoted, so confirm the domain steps in the account you actually buy.`,
      ],
    },
    {
      id: "paid",
      title: "Paid newsletters and the store",
      paragraphs: [
        `MailerLite's feature table marks "Send paid newsletters" and "Sell recurring subscriptions" as no on Free and yes on Comfort and Power. Digital products and bookings exist on Free with a cap of 1, then 5 on Comfort, then unlimited on Power. Stripe, Shopify, and WooCommerce are listed on every plan. If the newsletter itself is the paid product, Comfort is the first plan that documents it.`,
        `Mailchimp's pricing help is about contacts, sends, audiences, and journeys. It describes a separate transactional product for order mail and password resets, and an SMS add-on. It does not publish a percent of newsletter revenue. If Mailchimp is the system of record for a store, the comparison is not "which newsletter is cheaper." It is whether you will run the store in Mailchimp and the letter somewhere else, with two bills and an integration to watch.`,
        `A paid MailerLite subscription does not become a Mailchimp customer journey. The card on file, the renewal, and the access rules stay where they were created. Export the addresses, tell paying readers what changes, and charge them again on the new tool. Do not import people who unsubscribed.`,
      ],
    },
  ],
  prosA: {
    pros: [
      "Every Comfort and Power tier through 200,000 subscribers is published, monthly and at 10% off annually.",
      "Comfort includes 50 automations, 10 sites and landing pages, paid newsletters, and logo removal.",
      "Unsubscribed and bounced subscribers do not count toward the tier.",
      "Power removes the email cap, subject to fair use, when a daily send blows past Comfort.",
    ],
    cons: [
      "Free stops at 250 subscribers and 2,500 emails, with 3 automations and one site.",
      "Comfort's email allowance is 10 times the tier ceiling, so a daily list can force Power.",
      "Deleting subscribers does not lower the tier until the next billing anniversary.",
      "There is no ad network or recommendation marketplace of the kind beehiiv and Kit sell.",
    ],
  },
  prosB: {
    pros: [
      "Free, Essentials, and Standard are documented, including the $13 and $20 starts at 500 contacts.",
      "Standard adds longer automations, advanced segments, and custom-coded templates.",
      "The same account can hold a store-style audience, not only a newsletter.",
      "Going over a paid contact limit bills extra instead of hard-stopping the send.",
    ],
    cons: [
      "Above 500 contacts the dollar amount is check current pricing, not a table on this site.",
      "Unsubscribed and non-subscribed contacts count until you archive them.",
      "Essentials flows stop at 4 steps. Longer automation means Standard.",
      "Free is 500 sends a month and 250 a day, which a weekly letter outgrows quickly.",
    ],
  },
  who: [
    `Choose MailerLite when you want the price in writing before you migrate. At 4,000 subscribers and one weekly issue, Comfort is the up-to-5,000 tier at $49 a month, or $44.10 if you pay annually. The 4.33-week estimate is about 17,334 emails, under the 50,000-email Comfort cap. Comfort is the wrong plan if you also need more than 50 live automations or a daily cadence that breaks the cap.`,
    `Choose Mailchimp when the account is already the store, the ads audience, or a set of journeys your team will not rebuild this quarter. Get the contact-tier price from Mailchimp while you still have the list loaded, including unsubscribed people, and compare that invoice with Comfort's published tier. If Mailchimp is only a weekly letter and the list is under 10,000, also price <a href="/compare/convertkit-vs-mailchimp/">Kit's free broadcasts</a> before you pay either vendor.`,
    `Choose neither for a send-only weekly letter once you are past free caps, if you do not need pages, paid subscriptions, or store journeys. That case is the MailCheap section below. Choose beehiiv or Ghost instead if the product is a publication site with paid members and you have already decided the extra monthly tier is worth it. Those comparisons are <a href="/compare/mailcheap-vs-beehiiv/">MailCheap vs beehiiv</a> and <a href="/compare/ghost-vs-substack/">Ghost vs Substack</a>.`,
  ],
  switching: [
    `This heading follows the pair order, MailerLite then Mailchimp. Most people comparing these two are leaving Mailchimp, so that direction is spelled out first. Mailchimp's help, "View or Export Your Contacts," says Owners and Admins can export an audience, a segment, a tag, or a group. The file can arrive as a ZIP with separate CSVs for subscribed, unsubscribed, non-subscribed, and cleaned contacts. It includes audience fields and, when the audience is GDPR-enabled, marketing permissions. It does not include open and click reports. Those are a separate email-report export. The file remains available in the account for 30 days.`,
    `Import only the subscribed file into MailerLite, unless you have a reason to store the others as suppressed. MailerLite's pricing page points large moves at its <a href="https://www.mailerlite.com/migration">migration page</a>. Tags can travel if the CSV has a column MailerLite maps. Customer journeys, templates, landing pages, and store connections do not. Screenshot every live flow, including the trigger and the waits, before you cancel Mailchimp. Paid product access does not move. Readers who pay you need a new checkout.`,
    `Going the other way, MailerLite to Mailchimp, export the active subscribers and leave unsubscribed people out of the "subscribed" import. Mailchimp will bill those unsubscribed contacts if you import them as contacts and forget to archive them. Rebuild automations inside Essentials' 4-step limit or on Standard. Confirm the Mailchimp contact tier before you turn the old MailerLite automations off.`,
    `DNS is the same chore in either direction. Add the new platform's domain records and send a test to yourself before the list gets a campaign. Keep the old account long enough to receive the export and to answer a reader who replies to an old message. MailerLite locks Free sending above 250 active subscribers. Mailchimp holds Free sending above 250 contacts. Do not cancel the paid plan until one real campaign has left the new tool.`,
  ],
  cheaper: [
    `MailCheap is the send-only comparison, not a third all-in-one. Hosted plans start at $19 a month for 20,000 emails and 10,000 subscribers (Starter). At 4,000 subscribers and one issue a week the estimate is about 17,334 emails, which fits Starter. Yearly billing costs 10 months. There is no free hosted plan.`,
    `At 10,000 subscribers, one weekly issue is about 43,334 emails. MailCheap Growth is $39. MailerLite Comfort is $89. The $50 gap is real only if you do not need Comfort's automations, sites, or paid newsletters. MailCheap's help describes automations, segments, a website, and an MCP server on paid plans, and it does not sell paid subscriptions or an ad network. Read the <a href="/reviews/mailcheap/">MailCheap review</a> before you treat $39 as a substitute for Comfort.`,
    `Under 10,000 subscribers, Kit Free is $0 for broadcasts and is cheaper than MailCheap, MailerLite, and Mailchimp. Use the toggle above if you want MailCheap's row next to these two. The affiliate disclosure sits with that toggle. The link is <a href="${mc}" rel="sponsored nofollow noopener">MailCheap pricing</a>.`,
  ],
  faqs: [
    {
      q: "Is MailerLite cheaper than Mailchimp?",
      a: "<p>At 500 subscribers, Comfort is $12 a month and Essentials is $13, so the published starts are close. At 1,000, 5,000, 10,000, and 25,000 subscribers, Comfort is $19, $49, $89, and $179 a month. Mailchimp does not publish those tiers as a static table. Check current pricing on mailchimp.com, then compare the quote with Comfort.</p>",
    },
    {
      q: "How much is MailerLite for 10,000 subscribers?",
      a: "<p>Comfort is $89 a month, or $80.10 on annual billing. Power is $129 a month, or $116.10 annually. Comfort's email cap at that tier is 100,000. A weekly issue uses about 43,334 of them. Checked 24 November 2026 in MailerLite's pricing file.</p>",
    },
    {
      q: "Does Mailchimp charge for unsubscribed contacts?",
      a: "<p>Yes, until you archive them. Mailchimp's pricing help says subscribed, unsubscribed, and non-subscribed contacts all count. Archived, cleaned, and deleted contacts do not. MailerLite does not count unsubscribed or bounced people, but it does count anyone who was active during the current billing cycle.</p>",
    },
    {
      q: "Which one has better automations?",
      a: "<p>MailerLite Comfort includes 50 automations and 100 steps. Mailchimp Essentials stops at flows of 4 steps, and Standard is where expanded flows start. Pick from the workflow you can describe, not from a score. We did not run either builder.</p>",
    },
    {
      q: "Can I move automations from Mailchimp to MailerLite?",
      a: "<p>No. Mailchimp's contact export is a CSV of people and fields. Rebuild the journeys in MailerLite and keep screenshots of the old flows until a test subscriber finishes the new one.</p>",
    },
    {
      q: "Does MailerLite send paid newsletters?",
      a: "<p>On Comfort and Power, yes, according to the pricing file. Free is marked no. Mailchimp does not publish a newsletter revenue share. If you sell through a connected store, price that setup separately.</p>",
    },
    {
      q: "What is the free plan limit on each?",
      a: "<p>MailerLite Free is 250 active subscribers and 2,500 emails a month. Mailchimp Free is 250 contacts, 500 sends a month, and a daily cap of 250. Neither free plan covers a 4,000-person weekly letter.</p>",
    },
    {
      q: "When is MailCheap the lower bill?",
      a: "<p>When you only need to send, the cadence fits a published MailCheap plan, and you do not need paid newsletters, a stack of landing pages, or store journeys. At 4,000 weekly subscribers Starter is $19. Links to MailCheap on this site are affiliate links.</p>",
    },
  ],
  related: [
    { href: "/guides/newsletter-platforms/", kicker: "Guide", title: "Newsletter platforms" },
    { href: "/pricing/mailerlite/", kicker: "Pricing", title: "MailerLite pricing" },
    { href: "/pricing/mailchimp/", kicker: "Pricing", title: "Mailchimp pricing" },
    { href: "/reviews/mailerlite/", kicker: "Review", title: "MailerLite review" },
    { href: "/alternatives/mailchimp/", kicker: "Alternatives", title: "Mailchimp alternatives" },
    { href: "/alternatives/mailerlite/", kicker: "Alternatives", title: "MailerLite alternatives" },
    { href: "/compare/flodesk-vs-mailchimp/", kicker: "Comparison", title: "Flodesk vs Mailchimp" },
    { href: "/compare/convertkit-vs-mailchimp/", kicker: "Comparison", title: "Kit (ConvertKit) vs Mailchimp" },
  ],
};
