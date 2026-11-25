/**
 * Month-to-month USD list prices used by the calculator and articles.
 * Promotions are ignored. Checked 25 November 2026.
 *
 * A dollar amount is included only when it was read from the vendor’s own
 * pricing page, pricing file, or help article on that date. If a list size
 * is not in that material, the calculator says to check current pricing
 * and does not rank the tool.
 *
 * Sources:
 * - MailCheap plans: https://mailcheap.ai/help/plans?via=analyst and https://mailcheap.ai/pricing?via=analyst
 * - beehiiv tiers: https://www.beehiiv.com/pricing.md
 * - Ghost(Pro): https://ghost.org/js/pricing.min.js, loaded by https://ghost.org/pricing/
 * - MailerLite: https://www.mailerlite.com/pricing.md (file last updated 8 September 2026)
 * - Substack: https://support.substack.com/hc/en-us/articles/360037607131-How-much-does-Substack-cost (updated 29 October 2026)
 * - Kit free plan: https://help.kit.com/en/articles/16627071-the-kit-free-plan (23 September 2026)
 *   Creator $39 up to 1,000 and the $59 / 3,000 example: https://help.kit.com/en/articles/2502679-billing-at-kit
 *   Pro $79 at 1,000 subscribers, monthly: https://kit.com/pricing
 * - Flodesk Email and Everything: https://flodesk.com/pricing and https://help.flodesk.com/en/articles/14551297 (edited 19 November 2026)
 * - Mailchimp Free limits: https://mailchimp.com/help/about-mailchimp-pricing-plans/
 *   Essentials from $13 and Standard from $20 at 500 contacts: Mailchimp’s plan pages.
 *   Prices above 500 contacts are not published as a static table here.
 */
import { mailcheapHref } from "./site";

export const WEEKS_PER_MONTH = 52 / 12;

export type Band = {
  max: number;
  monthly: number;
  yearlyMo?: number;
};

export const MAILCHEAP = [
  { name: "Starter", emails: 20000, subs: 10000, monthly: 19 },
  { name: "Growth", emails: 75000, subs: 40000, monthly: 39 },
  { name: "Pro", emails: 200000, subs: 100000, monthly: 79 },
  { name: "Scale", emails: 500000, subs: 250000, monthly: 149 },
  { name: "Max", emails: 2000000, subs: 1000000, monthly: 349 },
  { name: "Ultra", emails: 5000000, subs: 2500000, monthly: 799 },
] as const;

export const BEEHIIV_LITE: Band[] = [
  { max: 1000, monthly: 59, yearlyMo: 49 },
  { max: 2500, monthly: 79, yearlyMo: 69 },
  { max: 5000, monthly: 109, yearlyMo: 95 },
  { max: 10000, monthly: 139, yearlyMo: 119 },
  { max: 25000, monthly: 199, yearlyMo: 169 },
  { max: 50000, monthly: 299, yearlyMo: 249 },
  { max: 75000, monthly: 389, yearlyMo: 329 },
  { max: 100000, monthly: 469, yearlyMo: 399 },
];

export const BEEHIIV_PRO: Band[] = [
  { max: 1000, monthly: 109, yearlyMo: 95 },
  { max: 2500, monthly: 149, yearlyMo: 129 },
  { max: 5000, monthly: 199, yearlyMo: 169 },
  { max: 10000, monthly: 239, yearlyMo: 199 },
  { max: 25000, monthly: 349, yearlyMo: 299 },
  { max: 50000, monthly: 469, yearlyMo: 399 },
  { max: 75000, monthly: 589, yearlyMo: 499 },
  { max: 100000, monthly: 699, yearlyMo: 599 },
  { max: 150000, monthly: 799, yearlyMo: 689 },
  { max: 200000, monthly: 899, yearlyMo: 779 },
  { max: 250000, monthly: 999, yearlyMo: 869 },
];

/** Prices read from Kit’s help and the pricing page at 1,000 subscribers. Not a full slider. */
export const KIT_CREATOR_KNOWN = [
  { max: 1000, monthly: 39 },
  { max: 3000, monthly: 59 },
] as const;

export const GHOST_PUBLISHER: Band[] = [
  { max: 1000, monthly: 35, yearlyMo: 29 },
  { max: 2500, monthly: 55, yearlyMo: 46 },
  { max: 5000, monthly: 75, yearlyMo: 63 },
  { max: 7500, monthly: 95, yearlyMo: 79 },
  { max: 10000, monthly: 105, yearlyMo: 88 },
  { max: 25000, monthly: 169, yearlyMo: 141 },
  { max: 50000, monthly: 249, yearlyMo: 208 },
  { max: 75000, monthly: 289, yearlyMo: 241 },
  { max: 100000, monthly: 329, yearlyMo: 274 },
];

/** MailerLite Comfort / Power, monthly billing, from the official pricing markdown. */
export const MAILERLITE = [
  { max: 500, comfort: 12, power: 25 },
  { max: 1000, comfort: 19, power: 39 },
  { max: 2500, comfort: 33, power: 49 },
  { max: 5000, comfort: 49, power: 69 },
  { max: 8000, comfort: 69, power: 99 },
  { max: 10000, comfort: 89, power: 129 },
  { max: 15000, comfort: 129, power: 179 },
  { max: 20000, comfort: 159, power: 219 },
  { max: 25000, comfort: 179, power: 239 },
  { max: 30000, comfort: 229, power: 279 },
  { max: 35000, comfort: 249, power: 309 },
  { max: 40000, comfort: 269, power: 329 },
  { max: 45000, comfort: 289, power: 359 },
  { max: 50000, comfort: 319, power: 389 },
  { max: 60000, comfort: 359, power: 419 },
  { max: 70000, comfort: 379, power: 439 },
  { max: 80000, comfort: 399, power: 459 },
  { max: 90000, comfort: 419, power: 469 },
  { max: 100000, comfort: 439, power: 489 },
  { max: 110000, comfort: 489, power: 599 },
  { max: 120000, comfort: 529, power: 649 },
  { max: 130000, comfort: 559, power: 689 },
  { max: 140000, comfort: 589, power: 719 },
  { max: 150000, comfort: 619, power: 759 },
  { max: 160000, comfort: 659, power: 829 },
  { max: 170000, comfort: 699, power: 899 },
  { max: 180000, comfort: 739, power: 959 },
  { max: 190000, comfort: 779, power: 1029 },
  { max: 200000, comfort: 819, power: 1119 },
] as const;

export const FLODESK_EMAIL_MONTHLY = 46;
export const FLODESK_EMAIL_ANNUAL_MO = 38;
export const FLODESK_EVERYTHING_MONTHLY = 99;
export const FLODESK_EVERYTHING_ANNUAL_MO = 79;

export type QuoteRow = {
  platform: string;
  plan: string;
  monthly: number | null;
  note: string;
  href: string;
  affiliate: boolean;
  available: boolean;
  initials: string;
  avatar: string;
  /** known = show the dollar. check = no verified dollar for this list. custom = the vendor quotes it. */
  priceKind: "known" | "check" | "custom";
};

export function money(n: number): string {
  if (n === 0) return "$0";
  if (Math.round(n) === n) return "$" + n.toLocaleString("en-US");
  return "$" + n.toFixed(2);
}

export function emailsPerMonth(subs: number, issuesPerWeek: number): number {
  return Math.ceil(subs * issuesPerWeek * WEEKS_PER_MONTH);
}

/** Emails in a month that contains five send weeks, before welcome mail and tests. */
export function peakEmails(subs: number, issuesPerWeek: number): number {
  return subs * issuesPerWeek * 5;
}

export function pickBand<T extends { max: number }>(bands: readonly T[], subs: number): T | null {
  for (const band of bands) {
    if (subs <= band.max) return band;
  }
  return null;
}

export function mailcheapPlan(subs: number, emails: number) {
  for (const plan of MAILCHEAP) {
    if (emails <= plan.emails && subs <= plan.subs) return plan;
  }
  return null;
}

export function mailerlitePlan(subs: number, emails: number) {
  if (subs <= 250 && emails <= 2500) return { plan: "Free", monthly: 0, max: 250 };
  let best: { plan: "Comfort" | "Power"; monthly: number; max: number } | null = null;
  for (const tier of MAILERLITE) {
    if (subs <= tier.max && emails <= tier.max * 10) {
      const option = { plan: "Comfort" as const, monthly: tier.comfort, max: tier.max };
      if (!best || option.monthly < best.monthly) best = option;
    }
    if (subs <= tier.max && subs <= 200000) {
      const option = { plan: "Power" as const, monthly: tier.power, max: tier.max };
      if (!best || option.monthly < best.monthly) best = option;
    }
  }
  return best;
}

export function quote(subs: number, issuesPerWeek: number): { emails: number; peak: number; rows: QuoteRow[] } {
  const emails = emailsPerMonth(subs, issuesPerWeek);
  const peak = peakEmails(subs, issuesPerWeek);
  const rows: QuoteRow[] = [];

  const kitFree = subs <= 10000;
  rows.push({
    platform: "Kit",
    plan: kitFree ? "Free" : "Creator",
    monthly: kitFree ? 0 : null,
    note: kitFree
      ? `Free includes unlimited broadcasts up to 10,000 subscribers. Creator is $39/mo up to 1,000 subscribers, and Creator is $59/mo up to 3,000 (per Kit’s billing help), if you need sequences or visual automations. Pro is $79/mo at 1,000 subscribers. Above 3,000 subscribers on Creator, or above 1,000 on Pro, check Kit’s pricing page.`
      : "Free stops at 10,000 subscribers. Creator is $39/mo up to 1,000 and Creator is $59/mo up to 3,000 (per Kit’s billing help). The price for this list size is on Kit’s pricing page.",
    href: "https://kit.com/pricing",
    affiliate: false,
    available: kitFree,
    initials: "Kt",
    avatar: "av-green",
    priceKind: kitFree ? "known" : "check",
  });

  rows.push({
    platform: "Substack",
    plan: "Free publishing",
    monthly: 0,
    note: "No monthly platform fee at any list size. Paid subscriptions cost 10% of subscription revenue, plus Stripe. Substack’s help article quotes 2.9% + $0.30 for US cards and 0.7% for Stripe Billing. A custom domain is $50 once.",
    href: "https://support.substack.com/hc/en-us/articles/360037607131-How-much-does-Substack-cost",
    affiliate: false,
    available: true,
    initials: "Sb",
    avatar: "av-orange",
    priceKind: "known",
  });

  const mc = mailcheapPlan(subs, emails);
  const mcTight = mc ? peak >= mc.emails : false;
  rows.push({
    platform: "MailCheap",
    plan: mc ? mc.name : "Above Ultra",
    monthly: mc ? mc.monthly : null,
    note: mc
      ? `${mc.name} includes ${mc.emails.toLocaleString("en-US")} emails a month for up to ${mc.subs.toLocaleString("en-US")} subscribers. The estimate for this cadence is ${emails.toLocaleString("en-US")} emails.${mcTight ? " That uses this plan's full email allowance, so price the next plan if you also send welcomes or tests." : ""} Yearly billing costs the price of 10 months. No free hosted plan.`
      : "Over 5 million emails a month. MailCheap asks you to contact them.",
    href: mailcheapHref("/pricing"),
    affiliate: true,
    available: Boolean(mc),
    initials: "MC",
    avatar: "av-violet",
    priceKind: mc ? "known" : "custom",
  });

  const beeFree = subs <= 2500;
  const beeLite = pickBand(BEEHIIV_LITE, subs);
  const beePro = pickBand(BEEHIIV_PRO, subs);
  const beePlan = beeFree ? "Free" : beeLite ? "Lite" : beePro ? "Pro" : "Enterprise";
  const beePrice = beeFree ? 0 : beeLite ? beeLite.monthly : beePro ? beePro.monthly : null;
  const beeYear = beeFree ? 0 : beeLite ? beeLite.yearlyMo : beePro ? beePro.yearlyMo : null;
  rows.push({
    platform: "beehiiv",
    plan: beePlan,
    monthly: beePrice,
    note: beeFree
      ? `Free covers up to 2,500 subscribers and unlimited sends. It does not include automations, the ad network, or paid subscriptions. Lite at this list size is ${money(beeLite?.monthly ?? 0)}/mo, or about ${money(beeLite?.yearlyMo ?? 0)}/mo billed annually.`
      : beeLite
        ? `Lite, monthly billing. Annual is about ${money(beeYear ?? 0)}/mo, paid up front. Unlimited sends. Lite stops at 100,000 subscribers.`
        : beePro
          ? `Lite stops at 100,000 subscribers. This is Pro, monthly billing. Annual is about ${money(beeYear ?? 0)}/mo.`
          : "Custom Enterprise pricing above 250,000 subscribers.",
    href: "https://www.beehiiv.com/pricing",
    affiliate: false,
    available: beePrice !== null,
    initials: "bh",
    avatar: "av-gold",
    priceKind: beePrice !== null ? "known" : "custom",
  });

  let ghostPlan: string;
  let ghostMonthly: number | null;
  let ghostNote: string;
  let ghostKind: QuoteRow["priceKind"] = "known";
  if (subs <= 1000) {
    ghostPlan = "Starter";
    ghostMonthly = 18;
    ghostNote =
      "Starter, monthly billing, up to 1,000 members. Annual is $15/mo ($180/year). Starter does not include paid subscriptions. Publisher at this size is $35/mo, or about $29/mo billed annually.";
  } else {
    const gp = pickBand(GHOST_PUBLISHER, subs);
    ghostPlan = gp ? "Publisher" : "Custom";
    ghostMonthly = gp ? gp.monthly : null;
    ghostKind = gp ? "known" : "custom";
    ghostNote = gp
      ? `Publisher, monthly billing. Annual is about ${money(gp.yearlyMo ?? 0)}/mo. Unlimited sends. Paid subscriptions have a 0% platform fee. Stripe still applies.`
      : "Above the published Publisher bands. Ghost quotes custom pricing.";
  }
  rows.push({
    platform: "Ghost(Pro)",
    plan: ghostPlan,
    monthly: ghostMonthly,
    note: ghostNote,
    href: "https://ghost.org/pricing/",
    affiliate: false,
    available: ghostMonthly !== null,
    initials: "Gh",
    avatar: "av-slate",
    priceKind: ghostKind,
  });

  const ml = mailerlitePlan(subs, emails);
  rows.push({
    platform: "MailerLite",
    plan: ml ? ml.plan : "Enterprise",
    monthly: ml ? ml.monthly : null,
    note: ml
      ? ml.plan === "Free"
        ? "Free is 250 active subscribers and 2,500 emails a month."
        : `${ml.plan} at the up-to-${ml.max.toLocaleString("en-US")} tier, monthly billing. Comfort’s email allowance is 10 times the tier ceiling. Power removes that email cap, subject to fair use. Annual billing is 10% less.`
      : "Above 200,000 subscribers. MailerLite quotes Enterprise.",
    href: "https://www.mailerlite.com/pricing",
    affiliate: false,
    available: Boolean(ml),
    initials: "ML",
    avatar: "av-mint",
    priceKind: ml ? "known" : "custom",
  });

  rows.push({
    platform: "Flodesk",
    plan: "Email",
    monthly: FLODESK_EMAIL_MONTHLY,
    note: `Email is $${FLODESK_EMAIL_MONTHLY}/mo on monthly billing, or $${FLODESK_EMAIL_ANNUAL_MO}/mo billed annually ($${FLODESK_EMAIL_ANNUAL_MO * 12}/year), at any list size. Unlimited subscribers and sends. The Free plan does not include email sending. Everything, which adds checkout, is $${FLODESK_EVERYTHING_MONTHLY}/mo or $${FLODESK_EVERYTHING_ANNUAL_MO}/mo annually.`,
    href: "https://flodesk.com/pricing",
    affiliate: false,
    available: true,
    initials: "Fd",
    avatar: "av-teal",
    priceKind: "known",
  });

  if (subs <= 250) {
    rows.push({
      platform: "Mailchimp",
      plan: "Free",
      monthly: 0,
      note: "Free includes up to 250 contacts and 500 sends a month, with a daily cap of 250. Subscribed, unsubscribed, and non-subscribed contacts all count.",
      href: "https://mailchimp.com/pricing/marketing/",
      affiliate: false,
      available: true,
      initials: "Mc",
      avatar: "av-yellow",
      priceKind: "known",
    });
  } else if (subs <= 500) {
    rows.push({
      platform: "Mailchimp",
      plan: "Essentials",
      monthly: 13,
      note: "Essentials is $13/mo for up to 500 contacts. Standard is $20/mo for the same 500 contacts and includes longer automations. Essentials allows 10 times the contact limit in sends. Standard allows 12 times.",
      href: "https://mailchimp.com/pricing/marketing/",
      affiliate: false,
      available: true,
      initials: "Mc",
      avatar: "av-yellow",
      priceKind: "known",
    });
  } else {
    rows.push({
      platform: "Mailchimp",
      plan: "Standard",
      monthly: null,
      note: "Check current pricing. Essentials is $13/mo and Standard is $20/mo, both for up to 500 contacts. Above 500 contacts Mailchimp prices each tier on its pricing page. Unsubscribed contacts count until you archive them.",
      href: "https://mailchimp.com/pricing/marketing/",
      affiliate: false,
      available: false,
      initials: "Mc",
      avatar: "av-yellow",
      priceKind: "check",
    });
  }

  rows.push({
    platform: "Constant Contact",
    plan: "Lite",
    monthly: null,
    note: "Lite starts at $12/mo, Standard at $35/mo, and Premium at $80/mo. The bill then depends on contacts and sends, so a specific list size is check current pricing. Prepay for 12 months is up to 15% off those starting prices ($10.20, $29.75, and $68). A 50% offer for three months is a promotion, not the list price. Checked 25 November 2026.",
    href: "https://www.constantcontact.com/pricing",
    affiliate: false,
    available: false,
    initials: "CC",
    avatar: "av-slate",
    priceKind: "check",
  });

  return { emails, peak, rows };
}

export function sortedRows(rows: QuoteRow[]): QuoteRow[] {
  const rank = { known: 0, check: 1, custom: 2 };
  return rows.slice().sort((a, b) => {
    if (a.priceKind !== b.priceKind) return rank[a.priceKind] - rank[b.priceKind];
    if (a.monthly === null && b.monthly === null) return 0;
    if (a.monthly === null) return 1;
    if (b.monthly === null) return -1;
    return a.monthly - b.monthly;
  });
}

export function lowestPaid(rows: QuoteRow[]): number | null {
  const paid = rows.filter((row) => row.priceKind === "known" && row.available && typeof row.monthly === "number" && row.monthly > 0);
  if (!paid.length) return null;
  return Math.min(...paid.map((row) => row.monthly as number));
}

/** List size and cadence the static calculator cards use before any input. */
export const DEFAULT_SUBS = 4000;
export const DEFAULT_ISSUES = 1;

/**
 * Keep the platforms named in `data-platforms`. An empty list keeps every row.
 * `includeCheaper` adds MailCheap for the send-only toggle.
 */
export function selectRows(rows: QuoteRow[], platforms: readonly string[] | null, includeCheaper: boolean): QuoteRow[] {
  if (!platforms || platforms.length === 0) return rows;
  const allow = new Set(platforms);
  if (includeCheaper) allow.add("MailCheap");
  return rows.filter((row) => allow.has(row.platform));
}

/** Badge only when at least two known paid prices can be compared, and none say to check. */
export function showLowestBadge(rows: QuoteRow[]): boolean {
  return (
    rows.length > 0 &&
    !rows.some((row) => row.priceKind === "check") &&
    rows.filter((row) => row.priceKind === "known" && typeof row.monthly === "number" && row.monthly > 0).length >= 2
  );
}
