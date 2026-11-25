import { mailcheapHref } from "../../lib/site";
import type { CompareDoc } from "./types";

const mc = mailcheapHref("/pricing");

export const mailcheapVsBeehiiv: CompareDoc = {
  id: "mailcheap-vs-beehiiv",
  a: "MailCheap",
  b: "beehiiv",
  platformA: "MailCheap",
  platformB: "beehiiv",
  cheaperToggle: false,
  chooseA: "You send on a schedule, the email count fits a published plan, and you do not need paid subscriptions, an ad network, or referral rewards inside the tool.",
  chooseB: "You want recommendations, and on Lite or Pro you want ads, paid subscriptions at a 0% platform fee, or automations beehiiv caps by plan.",
  priceNoteA: "Starter. A weekly estimate is about 17,334 emails.",
  priceNoteB: "Lite, up-to-5,000 bucket. Annual effective is $95 ($1,140 a year). Sends are not metered.",
  linkA: { href: mc, label: "MailCheap pricing (affiliate)", affiliate: true },
  linkB: { href: "https://www.beehiiv.com/pricing", label: "beehiiv pricing" },
  differencesIntro: [
    `At 4,000 subscribers and one issue a week, MailCheap Starter is $19 a month and beehiiv Lite is $109 a month. Those are month-to-month list prices checked 24 November 2026. MailCheap's plans help and pricing page list Starter at 20,000 emails and 10,000 subscribers. The 4.33-week estimate is about 17,334 emails, which fits. If you also send welcome emails or tests, price Growth at $39.`,
    `beehiiv does not meter sends. Lite at the up-to-5,000 bucket is $109 a month or $1,140 a year ($95 a month). Free is $0 only through 2,500 subscribers, and it omits automations, paid subscriptions, and the ad network. Full beehiiv buckets are on <a href="/pricing/beehiiv/">beehiiv pricing</a>. The MailCheap write-up is the <a href="/reviews/mailcheap/">review</a>.`,
  ],
  differences: [
    {
      topic: "Weekly price at 4,000 subscribers",
      favors: "MailCheap, if the send fits Starter",
      why: "Starter is $19. Lite is $109. Welcome emails and tests can move the send to Growth at $39.",
    },
    {
      topic: "Weekly price at 10,000 subscribers",
      favors: "MailCheap, on the published plans",
      why: "About 43,334 emails fits Growth at $39 (75,000 emails, 40,000 subscribers). Lite is $139 a month, or $119 annual effective.",
    },
    {
      topic: "Weekly price at 25,000 subscribers",
      favors: "MailCheap, on the published plans",
      why: "About 108,334 emails fits Pro at $79 (200,000 emails). Lite is $199 a month. A daily send is a different email count and can jump a MailCheap plan. It does not change Lite.",
    },
    {
      topic: "Paid subscriptions",
      favors: "beehiiv",
      why: "Lite and Pro take 0% and charge the bucket. Stripe is 2.9% + $0.30. MailCheap does not sell paid subscriptions.",
    },
    {
      topic: "Free start",
      favors: "beehiiv, under 2,500 subscribers",
      why: "beehiiv Free is $0 with unlimited sends. MailCheap has no free hosted plan. Self-hosting is a separate setup, priced by your email provider, not by a $0 cloud tier.",
    },
  ],
  pricingIntro: [
    `MailCheap yearly billing costs 10 months and keeps the same monthly email allowance. Starter is $190 a year, which is $15.83 a month if you spread it. Growth is $390 a year ($32.50). Pro is $790 a year ($65.83). You still get a monthly allowance, not a yearly pool. beehiiv annual prices are the totals in the pricing file divided by 12, paid up front. At 5,000 subscribers Lite annual is $1,140, paid up front.`,
    `MailCheap picks the cheapest plan where both the email allowance and the subscriber cap fit. Welcome mail, tests, and automation mail count. beehiiv ignores send count and rounds the list up to the next bucket. 4,000 subscribers is the 5,000 price. At 4,000 subscribers, five weekly sends are 4,000 × 5 = 20,000 emails, before welcome emails and tests. That uses the whole Starter allowance, so price Growth at $39 if you also send those.`,
    `Plans above the published tables: MailCheap asks you to talk to them past 5 million emails a month. beehiiv Enterprise is custom, and Lite stops at 100,000 subscribers. Pro continues through 250,000.`,
  ],
  featuresIntro: [
    `MailCheap says every hosted plan includes the same features and the plan picks the volume. The rows below use the plans help, the sending and deliverability help, the MCP docs, the self-hosted page, and the November 2026 changelog notes for automations, segments, and themes. beehiiv rows use the pricing file. Checked 24 November 2026.`,
  ],
  matrix: [
    {
      name: "Price and caps",
      rows: [
        { feature: "At 1,000, weekly", a: "Starter $19", b: "Free $0. Lite $59 if you need paid tools" },
        { feature: "At 5,000, weekly", a: "Growth $39", b: "Lite $109" },
        { feature: "At 25,000, weekly", a: "Pro $79", b: "Lite $199" },
        { feature: "What you pay for", a: "Emails sent, plus a subscriber ceiling", b: "Subscriber bucket. Sends are unlimited" },
        { feature: "Annual", a: "10 months' price", b: "Published yearly total divided by 12" },
      ],
    },
    {
      name: "Automations, segments, and branding",
      rows: [
        { feature: "Automations", a: "On every paid plan. You can draft them before you pay. Turning them on needs the plan", b: "Free: none. Lite: 10 live. Pro: unlimited" },
        { feature: "Segments", a: "Yes. Contacts join and leave as they match. A send can target a segment", b: "Free: 3. Lite: 10. Pro: unlimited" },
        { feature: "Branding", a: "Your theme, logo, and colors. The footer uses your postal address. Until you set one, it prints MailCheap's business address", b: "Removed on Pro. Stays on Free and Lite" },
        { feature: "Paid subscriptions", a: "No", b: "Lite and Pro, 0% platform fee" },
        { feature: "Ad network and referrals", a: "No", b: "Lite and Pro. The ad network is not in every region" },
      ],
    },
    {
      name: "Sending rules, API, and hosting",
      rows: [
        { feature: "Pace and first sends", a: "New contacts over 1,000 go in steps. Gmail volume per domain ramps by day", b: "No equivalent ramp in the pricing file. Sends are unlimited" },
        { feature: "Pause rules", a: "A campaign pauses above documented bounce, complaint, or refusal rates", b: "Not a numeric pause rule in the pricing file" },
        { feature: "MCP and API", a: "Paid plans. MCP at mailcheap.ai/mcp, including segments and automations. Sending tools are marked destructive", b: "Read MCP on Free. Write on Lite. Send API on Pro" },
        { feature: "Self-hosting", a: "AGPL-3.0 app on your server, your SES or PostShiba account, no plan caps, no MailCheap support", b: "Not offered as a self-host price in the pricing file" },
        { feature: "Website", a: "One site per newsletter, on when the plan is on", b: "Website on every plan. Custom domain on Lite and Pro" },
      ],
    },
  ],
  sections: [
    {
      id: "automations",
      title: "Automations and segments",
      paragraphs: [
        `MailCheap's changelog describes automations as a canvas: an email, a wait, or a condition, started when someone joins, gets a tag, clicks a link, or is added from their page. Welcome series, a lead magnet, and an email course are the examples. A condition splits on a prior open or click, a tag, or a segment. Automation emails count toward the plan and go through the same content check as issues. The API and MCP can create, update, and turn on an automation. You can build automations with no plan. Sending them, like any other mail, needs a paid plan.`,
        `Segments have their own page. A segment can select people by recent opens or clicks, issues missed in a row, signup source, or address. People enter and leave as the conditions change. A scheduled issue goes to whoever is in the segment when it sends. The API methods named on the changelog are create_segment, count_segment, and a segment field on send and schedule. Filters on the contacts page cover status, tag, signup date, and source. Bulk tagging is described as an API and assistant action.`,
        `beehiiv's automation table is stricter about counts. Free has no live custom automations. Lite has 10. Pro is unlimited. Lite includes delays, tags, true/false branches, and triggers for signup, tags, surveys, purchases, and cancellations. Click-triggered automations are Pro. Segments are 3, 10, and unlimited across Free, Lite, and Pro. If you have 11 workflows, MailCheap's "every plan has the features" line and beehiiv's 10-cap are not the same limit. MailCheap's limit is the email allowance those automation messages consume. beehiiv's limit is the count of live automations, and the sends are free of a meter.`,
        `Neither product imports the other's canvas. A beehiiv tag can arrive in a CSV. The workflow that applied the tag does not. Rebuild it, then watch the first month's email count on MailCheap, because the automation mail is not free on top of the issue.`,
      ],
    },
    {
      id: "deliverability",
      title: "Deliverability, sending pace, and pause rules",
      paragraphs: [
        `MailCheap's sending-pace help says most issues go out at once, and two cases go slower. The first send to contacts who have never received an issue, such as a fresh import, goes in steps once the group is over 1,000 people: 1,000 first, then about 30% more, then the rest. Each step waits at least 30 minutes, and it continues only if bounces, complaints, and refusals stay low. A list of 5,000 new contacts is described as 1,000, then 1,500, then 2,500. Automations count toward the same new-contact steps. With 1,000 or fewer new contacts, they go at once.`,
        `Gmail traffic is paced per sending domain. The help's table starts at 2,000 Gmail readers on day one, then 4,000, 8,000, 16,000, and 24,000 as the ceiling grows. Other inboxes are not on that ramp. A domain that already sends its volume does not start over. If Gmail asks the sender to slow down, MailCheap pauses that domain's sends for 6 hours and then resumes from a lower ceiling. You cannot skip the hours by switching domains.`,
        `The deliverability help states the pause thresholds. A campaign pauses when more than 2.5% hard bounce (at least 5), more than 0.08% are marked spam (at least 2), or more than 2% are refused (at least 10). You can resume from the campaign page after you know why. Above 5% refused (at least 25), a person at MailCheap reviews the rest. An automation turns off on the same kind of rule, and people wait in place. These are the documented gates. They are not an inbox-placement score, and this site did not send a test campaign.`,
        `At the email cap, signups still work. A campaign that needs more emails than you have left waits. Welcome emails pause once the allowance is gone, and people who join in the meantime do not get one later. Automation emails wait and go out when you upgrade or the next month starts. beehiiv does not have this meter. Its deliverability line in the pricing file is "optimized deliverability" on every plan, and deliverability reports are an Enterprise item marked as coming later. That is a feature label, not a rate we measured.`,
        `Signup velocity is capped too, so a script cannot flood the list. Starter allows 100 signup emails every 10 minutes, 1,000 confirmation emails a day, 600 API signups an hour, and 300 form signups every 10 minutes. Higher plans raise those numbers. Past the limit, new people may join without a confirmation until the window clears. If you import a bought list, MailCheap's import help says bounces and complaints can pause sending and block the account. Import people who asked for the letter.`,
      ],
    },
    {
      id: "agents",
      title: "API, MCP, and AI agents",
      paragraphs: [
        `MailCheap's MCP page puts the server at mailcheap.ai/mcp. Chat tools sign in. Coding tools use an access key. Each API endpoint is a tool. schedule_campaign, send_campaign, and turn_on_automation are marked destructive, and the descriptions tell the assistant to confirm with you. A signups-only key sees add_contact and nothing else. The same server can list, create, and delete segments. Without a plan, API keys and AI assistants stay off. Drafting in the dashboard is allowed. Sending is not.`,
        `beehiiv publishes a different split. Free includes API access except the Send API, plus MCP read access and a read-only agent. Lite adds MCP write access and a write-capable agent. Pro adds the Send API, and not during the trial. If the assistant must send the issue, MailCheap requires any paid plan and beehiiv requires Pro. If the assistant only reads subscribers, beehiiv Free is enough and MailCheap still wants a plan for API keys.`,
        `An agent does not change the email allowance. A MailCheap send the agent fires still counts every recipient. A beehiiv send does not move the subscriber bucket. Confirm the destructive tools before you connect an assistant to a live list.`,
      ],
    },
    {
      id: "website",
      title: "Website, branding, and self-hosting",
      paragraphs: [
        `Each MailCheap newsletter has a public site: a home page, a page per issue, and an author page. It is on for new newsletters and goes live after the first issue, at a mailcheap.ai host or on a subdomain you verify. Search engines get a sitemap. Themes cover fonts, colors, corners, and light or dark appearance. The changelog describes eight themes and separate light and dark colors. Buttons follow the theme. There is no beehiiv logo to remove, because branding removal is not the product. The footer does print a postal address. Until you save yours, the help says emails print MailCheap's business address. Set the address before the first real send.`,
        `beehiiv includes a website on every plan. Removing beehiiv branding is Pro. Custom domains start on Lite. Free is one custom page. Lite is 10. Podcast downloads are capped. If the site is a publication with a paywall and ads, that is the beehiiv column. If the site is an archive of issues plus a signup form, MailCheap documents that on the paid plan.`,
        `Self-hosting is mailcheap.ai/self-hosted. The page says the app is AGPL-3.0, you run it with your own Amazon SES or PostShiba account, and there is no plan cap and no MailCheap support. Their illustration is 10,000 readers and 4 issues a month at about $4 to $6 of SES, plus free tiers of the database, queue, and host, against Growth at $39 on the hosted product. That illustration is theirs, for that volume. It is not a quote for your server, and it does not include the time to keep the app updated. beehiiv's pricing file does not offer a matching self-host price. Hosted MailCheap and hosted beehiiv are the bills in the table above.`,
      ],
    },
  ],
  prosA: {
    pros: [
      "Starter is $19 a month for 20,000 emails. Growth is $39. The feature set does not shrink on the cheaper plan.",
      "Automations, segments, a website, the API, and MCP are on every paid plan.",
      "Unsubscribed, bounced, and unconfirmed contacts do not count toward the subscriber cap.",
      "Self-hosting is a documented option if you want to run the same app on your own email account.",
    ],
    cons: [
      "There is no free hosted plan. Welcome emails and tests count toward the email allowance.",
      "Automation mail, tests, and welcomes count toward the allowance.",
      "There are no paid subscriptions, no ad network, and no referral program.",
      "First sends to a new list, and Gmail volume, are paced. A bad bounce rate pauses the campaign.",
    ],
  },
  prosB: {
    pros: [
      "Free covers 2,500 subscribers and unlimited sends, including the recommendation network.",
      "Lite and Pro take 0% of paid subscriptions and do not meter issues.",
      "The ad network, automations, and a custom domain are published Lite features.",
      "Every subscriber bucket through 100,000 on Lite and 250,000 on Pro has a public price.",
    ],
    cons: [
      "Past 2,500 subscribers, Lite at 4,000 people is $109 a month for a weekly letter.",
      "Branding stays on until Pro. Pro at the 5,000 bucket is $199 a month.",
      "Lite stops at 10 live automations and 10 segments.",
      "The ad network is not in every region and not in the trial.",
    ],
  },
  who: [
    `Choose MailCheap when the letter is a scheduled send, you can count the emails, and the missing pieces are acceptable. At 4,000 weekly subscribers, Starter is $19 and Lite is $109. At 10,000 weekly subscribers, Growth at $39 against Lite at $139 is the same kind of gap, and a daily send to 10,000 people is about 303,000 emails, which is Scale at $149, not Growth. Cadence picks the MailCheap plan. It does not pick the beehiiv tier.`,
    `Choose beehiiv when you use recommendations, and especially when you use ads or paid subscriptions. Lite's $109 is the price of those tools at 4,000 subscribers, not a fee for pressing send. Choose Pro when you need branding off, more than 10 automations, or more than 100,000 subscribers. Choose Free and stop comparing invoices if you are under 2,500 and the free feature list is enough.`,
    `Choose a third tool when neither frame fits. Substack is $0 until readers pay, then 10%. Kit Free is $0 for broadcasts under 10,000. Ghost Publisher is the themed membership site. Those are <a href="/compare/beehiiv-vs-substack/">beehiiv vs Substack</a>, <a href="/compare/beehiiv-vs-convertkit/">beehiiv vs Kit</a>, and <a href="/compare/ghost-vs-substack/">Ghost vs Substack</a>.`,
  ],
  switching: [
    `The move people make in this pair is beehiiv to MailCheap, so that direction is the long one. beehiiv's pricing file lists data exports on every plan. MailCheap's import help tells you to use the full export: Settings, Export data, Export all subscribers, so custom fields, tags, and stats come with the file. The quick export is email and status. In MailCheap, import needs a paid plan. The importer reads email, status, signup date, open and click stats when the file has them, and tags. It leaves out platform ids, plans, revenue, counters, and devices. Paid subscription state does not become a MailCheap charge, because MailCheap cannot bill it. If readers pay you, keep them on beehiiv or move them to a tool that sells subscriptions. Do not point a paid list at MailCheap and hope the column maps.`,
    `Import only people who agreed to the mail. The import box asks you to confirm that. Role addresses and throwaway domains are left out and can be brought back one by one if you know they signed up. The first issue to more than 1,000 people who have never received a MailCheap issue goes out in steps. That is the warm-up. It is not optional in the help article. Add your domain's DNS, set a postal address so the footer is yours, and send a test to yourself before the stepped send starts.`,
    `Going from MailCheap to beehiiv is the other CSV. Export contacts before a plan ends. MailCheap's plans help says that when the plan ends, sending stops, the site and forms go offline, and API keys stop, while the newsletter data is kept if you resubscribe. beehiiv will not recreate MailCheap automations. If the list is over 2,500, you are on Lite immediately. Recommendations and ads start only if you turn those Lite features on, and the ad network may be unavailable in your region.`,
    `Tags can travel in the file. Automations, the website theme, and any beehiiv ad setup do not. DNS for a custom domain is a Lite feature on beehiiv and a domain you verify on MailCheap. Keep the old account until one campaign has left the new tool and a reader who replies to the old from-address still reaches you.`,
  ],
  cheaper: null,
  faqs: [
    {
      q: "Is MailCheap cheaper than beehiiv?",
      a: "<p>For a weekly letter at 4,000 subscribers, Starter is $19 and Lite is $109, if the send fits 20,000 emails. beehiiv Free is $0 under 2,500 subscribers, which is less than either paid plan.</p>",
    },
    {
      q: "Does MailCheap include automations and segments?",
      a: "<p>Yes, on every paid plan. You can draft automations before you pay. Sending them requires the plan. Segments can receive a campaign, and the API can create them. beehiiv includes automations on Lite (10 live) and Pro, not on Free.</p>",
    },
    {
      q: "Can an AI agent send on MailCheap?",
      a: "<p>On a paid plan, the MCP server exposes the send and automation tools. Those tools are marked destructive and the docs tell the assistant to confirm first. beehiiv's Send API is a Pro feature. Free beehiiv MCP access is read-only.</p>",
    },
    {
      q: "What does not move from beehiiv?",
      a: "<p>Paid subscriptions, automations, the ad network, and recommendations. The full subscriber export can include tags and stats. Revenue and plan columns are the kind of field MailCheap's importer leaves out. Readers who pay you need a new checkout somewhere that sells subscriptions.</p>",
    },
    {
      q: "How does MailCheap pace a new list?",
      a: "<p>Above 1,000 new contacts, the first issue goes to 1,000 people, then a larger step, then the rest, with a wait between steps if bounces stay low. Gmail volume on a new domain starts at a 2,000-reader day cap and rises from there. Other inboxes are not on that Gmail cap.</p>",
    },
    {
      q: "Is there a free MailCheap plan?",
      a: "<p>No hosted free plan. Self-hosting runs the app on your server and your email provider's bill. beehiiv Free is $0 up to 2,500 subscribers if that feature list is enough.</p>",
    },
    {
      q: "Does beehiiv charge per email?",
      a: "<p>No. Unlimited sends are on every plan. You pay the subscriber bucket. A second issue in the week does not raise Lite. On MailCheap it doubles the emails and can raise the plan.</p>",
    },
    {
      q: "Are MailCheap links on this page affiliate links?",
      a: "<p>Yes. sendforless may earn a commission. The price you pay does not change. The comparison still uses MailCheap's published plan table, including the features it does not have.</p>",
    },
  ],
  related: [
    { href: "/guides/newsletter-platforms/", kicker: "Guide", title: "Newsletter platforms" },
    { href: "/guides/newsletter-cost/", kicker: "Guide", title: "How much does email marketing cost?" },
    { href: "/reviews/mailcheap/", kicker: "Review", title: "MailCheap review" },
    { href: "/pricing/beehiiv/", kicker: "Pricing", title: "beehiiv pricing" },
    { href: "/reviews/beehiiv/", kicker: "Review", title: "beehiiv review" },
    { href: "/alternatives/beehiiv/", kicker: "Alternatives", title: "beehiiv alternatives" },
    { href: "/compare/beehiiv-vs-substack/", kicker: "Comparison", title: "beehiiv vs Substack" },
    { href: "/how-we-test/", kicker: "Method", title: "How we compare prices" },
  ],
};
