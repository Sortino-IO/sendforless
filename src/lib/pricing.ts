/**
 * Month-to-month USD list prices used by the calculator and articles.
 * Promotions are ignored. Checked 24 November 2026.
 *
 * Sources:
 * - MailCheap plans: https://mailcheap.ai/help/plans
 * - beehiiv tiers: https://www.beehiiv.com/pricing.md (same data as the pricing page)
 * - Ghost(Pro): prices embedded in https://ghost.org/js/pricing.min.js, loaded by https://ghost.org/pricing/
 * - MailerLite: https://www.mailerlite.com/pricing.md (page last updated 8 September 2026)
 * - Substack: https://support.substack.com/hc/en-us/articles/360037607131-How-much-does-Substack-cost
 * - Kit free plan: https://help.kit.com/en/articles/16627071-the-kit-free-plan
 *   Creator ladder: Kit publishes prices on a slider, not a static table. The bands
 *   below are the capture shipped with the approved calculator (24 November 2026).
 *   The $39 Creator start at 1,000 subscribers matches Kit’s pricing page. Confirm
 *   every other Creator band on https://kit.com/pricing before you buy.
 * - Mailchimp: Free limits and the Standard/Essentials *starting* prices are official.
 *   Mid-tier Standard amounts are placeholders and are flagged. Confirm on
 *   https://mailchimp.com/pricing/marketing/
 */
import { mailcheapHref } from "./site";

export const WEEKS_PER_MONTH = 52 / 12;

export type Band = {
  max: number;
  monthly: number;
  yearlyMo?: number;
  /** False when the dollar amount is not from a static official table. */
  official?: boolean;
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

/** Slider capture. See file header. Not a static official table. */
export const KIT_CREATOR: Band[] = [
  { max: 1000, monthly: 39, official: true },
  { max: 3000, monthly: 59, official: false },
  { max: 5000, monthly: 89, official: false },
  { max: 8000, monthly: 119, official: false },
  { max: 10000, monthly: 139, official: false },
  { max: 15000, monthly: 169, official: false },
  { max: 20000, monthly: 189, official: false },
  { max: 25000, monthly: 199, official: false },
  { max: 35000, monthly: 259, official: false },
  { max: 45000, monthly: 319, official: false },
  { max: 55000, monthly: 379, official: false },
  { max: 65000, monthly: 439, official: false },
  { max: 75000, monthly: 499, official: false },
  { max: 85000, monthly: 559, official: false },
  { max: 95000, monthly: 619, official: false },
  { max: 105000, monthly: 679, official: false },
  { max: 115000, monthly: 739, official: false },
  { max: 125000, monthly: 799, official: false },
  { max: 135000, monthly: 859, official: false },
  { max: 145000, monthly: 919, official: false },
  { max: 155000, monthly: 979, official: false },
  { max: 165000, monthly: 1039, official: false },
  { max: 175000, monthly: 1099, official: false },
  { max: 185000, monthly: 1159, official: false },
  { max: 195000, monthly: 1219, official: false },
  { max: 205000, monthly: 1279, official: false },
  { max: 215000, monthly: 1339, official: false },
  { max: 225000, monthly: 1399, official: false },
  { max: 235000, monthly: 1459, official: false },
  { max: 245000, monthly: 1519, official: false },
  { max: 255000, monthly: 1579, official: false },
  { max: 265000, monthly: 1639, official: false },
  { max: 275000, monthly: 1699, official: false },
  { max: 285000, monthly: 1759, official: false },
  { max: 295000, monthly: 1819, official: false },
  { max: 305000, monthly: 1879, official: false },
  { max: 315000, monthly: 1939, official: false },
  { max: 325000, monthly: 1999, official: false },
  { max: 335000, monthly: 2059, official: false },
  { max: 345000, monthly: 2119, official: false },
  { max: 355000, monthly: 2179, official: false },
  { max: 365000, monthly: 2239, official: false },
  { max: 400000, monthly: 2299, official: false },
  { max: 500000, monthly: 2499, official: false },
];

/** Monthly list prices from ghost.org pricing data, 24 November 2026. */
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

/**
 * Mailchimp Standard. Only the 500-contact start is an official published price.
 * Higher bands are placeholders from the approved calculator and must stay labeled.
 */
export const MAILCHIMP_STANDARD: Band[] = [
  { max: 500, monthly: 20, official: true },
  { max: 1500, monthly: 45, official: false },
  { max: 2500, monthly: 60, official: false },
  { max: 5000, monthly: 100, official: false },
  { max: 10000, monthly: 135, official: false },
  { max: 15000, monthly: 230, official: false },
  { max: 20000, monthly: 285, official: false },
  { max: 25000, monthly: 310, official: false },
  { max: 30000, monthly: 340, official: false },
  { max: 40000, monthly: 410, official: false },
  { max: 50000, monthly: 450, official: false },
  { max: 75000, monthly: 630, official: false },
  { max: 100000, monthly: 800, official: false },
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
  { max: 50000, comfort: 319, power: 389 },
  { max: 100000, comfort: 439, power: 489 },
] as const;

export type QuoteRow = {
  platform: string;
  plan: string;
  monthly: number | null;
  note: string;
  href: string;
  affiliate: boolean;
  placeholder: boolean;
  available: boolean;
  initials: string;
  avatar: string;
};

export function money(n: number): string {
  if (n === 0) return "$0";
  if (Math.round(n) === n) return "$" + n.toLocaleString("en-US");
  return "$" + n.toFixed(2);
}

export function emailsPerMonth(subs: number, issuesPerWeek: number): number {
  return Math.ceil(subs * issuesPerWeek * WEEKS_PER_MONTH);
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

export function mailerliteComfort(subs: number) {
  return pickBand(MAILERLITE, subs);
}

export function quote(subs: number, issuesPerWeek: number): { emails: number; rows: QuoteRow[] } {
  const emails = emailsPerMonth(subs, issuesPerWeek);
  const rows: QuoteRow[] = [];

  const kitBand = pickBand(KIT_CREATOR, subs);
  const kitFree = subs <= 10000;
  const kitMonthly = kitFree ? 0 : kitBand?.monthly;
  rows.push({
    platform: "Kit",
    plan: kitFree ? "Free" : "Creator",
    monthly: kitMonthly === undefined ? null : kitMonthly,
    note: kitFree
      ? `Free covers broadcasts up to 10,000 subscribers. Creator is ${money(kitBand?.monthly ?? 0)}/mo at this list size if you need visual automations or sequences. That Creator figure is a slider capture — confirm it on Kit’s pricing page.`
      : kitBand
        ? `Creator list price from Kit’s subscriber slider as captured 24 November 2026, monthly billing. ${kitBand.official ? "The $39 start at 1,000 subscribers is the published entry price." : "This band is not a static official table — confirm it on kit.com/pricing."} Free ends at 10,000 subscribers. A first-three-months promotion ending 1 December 2026 is ignored.`
        : "Above the captured Creator bands. Kit asks you to talk to them past 500,000 subscribers.",
    href: "https://kit.com/pricing",
    affiliate: false,
    placeholder: !kitFree && !kitBand?.official,
    available: kitFree || Boolean(kitBand),
    initials: "Kt",
    avatar: "av-green",
  });

  rows.push({
    platform: "Substack",
    plan: "Free publishing",
    monthly: 0,
    note: "No monthly platform fee. If you turn on paid subscriptions, Substack keeps 10% of subscription revenue, plus Stripe processing. A custom domain is a separate one-time $50.",
    href: "https://support.substack.com/hc/en-us/articles/360037607131-How-much-does-Substack-cost",
    affiliate: false,
    placeholder: false,
    available: true,
    initials: "Sb",
    avatar: "av-orange",
  });

  const mc = mailcheapPlan(subs, emails);
  rows.push({
    platform: "MailCheap",
    plan: mc ? mc.name : "Above Ultra",
    monthly: mc ? mc.monthly : null,
    note: mc
      ? `${mc.name} includes ${mc.emails.toLocaleString("en-US")} emails and ${mc.subs.toLocaleString("en-US")} subscribers. No free hosted plan. Every email counts, including welcomes and tests. Yearly billing costs 10 months’ price.`
      : "Over 5 million emails a month — MailCheap asks you to contact them.",
    href: mailcheapHref("/pricing"),
    affiliate: true,
    placeholder: false,
    available: Boolean(mc),
    initials: "MC",
    avatar: "av-violet",
  });

  const beeFree = subs <= 2500;
  const beeLite = pickBand(BEEHIIV_LITE, subs);
  const beePro = pickBand(BEEHIIV_PRO, subs);
  const beePlan = beeFree ? "Free" : beeLite ? "Lite" : beePro ? "Pro" : null;
  const beePrice = beeFree ? 0 : beeLite ? beeLite.monthly : beePro ? beePro.monthly : null;
  const beeYear = beeFree ? 0 : beeLite ? beeLite.yearlyMo : beePro ? beePro.yearlyMo : null;
  rows.push({
    platform: "beehiiv",
    plan: beePlan ?? "Enterprise",
    monthly: beePrice,
    note: beeFree
      ? `Free covers sending up to 2,500 subscribers. Lite is ${money(beeLite?.monthly ?? 0)}/mo at this list size if you need ads, automations, or paid subscriptions.`
      : beeLite
        ? `Lite, monthly billing. Annual is about ${money(beeYear ?? 0)}/mo. Unlimited sends. Lite stops at 100,000 subscribers.`
        : beePro
          ? `Lite stops at 100,000 subscribers. This is Pro, monthly billing. Annual is about ${money(beeYear ?? 0)}/mo.`
          : "Custom Enterprise pricing above 250,000 subscribers.",
    href: "https://www.beehiiv.com/pricing",
    affiliate: false,
    placeholder: false,
    available: beePrice !== null,
    initials: "bh",
    avatar: "av-gold",
  });

  let ghostPlan: string;
  let ghostMonthly: number | null;
  let ghostNote: string;
  if (subs <= 1000) {
    ghostPlan = "Starter";
    ghostMonthly = 18;
    ghostNote =
      "Starter, monthly billing. Annual is $15/mo ($180/year). Starter stops at 1,000 members and has no paid subscriptions.";
  } else {
    const gp = pickBand(GHOST_PUBLISHER, subs);
    ghostPlan = gp ? "Publisher" : "Custom";
    ghostMonthly = gp ? gp.monthly : null;
    ghostNote = gp
      ? `Publisher, monthly billing. Annual is about ${money(gp.yearlyMo ?? 0)}/mo. Unlimited sends. Paid subscriptions are 0% platform fee.`
      : "Above Ghost(Pro) published Publisher bands — custom pricing.";
  }
  rows.push({
    platform: "Ghost(Pro)",
    plan: ghostPlan,
    monthly: ghostMonthly,
    note: ghostNote,
    href: "https://ghost.org/pricing/",
    affiliate: false,
    placeholder: false,
    available: ghostMonthly !== null,
    initials: "Gh",
    avatar: "av-slate",
  });

  const mchFree = subs <= 250;
  const mch = pickBand(MAILCHIMP_STANDARD, subs);
  rows.push({
    platform: "Mailchimp",
    plan: mchFree ? "Free" : mch ? "Standard" : "Custom",
    monthly: mchFree ? 0 : mch ? mch.monthly : null,
    note: mchFree
      ? "Free is limited to 250 contacts and 500 sends a month, with a daily cap of 250."
      : mch?.official
        ? "Standard starting price at 500 contacts, monthly billing, from Mailchimp’s pricing page. Essentials starts at $13/mo for the same 500 contacts."
        : mch
          ? "Standard mid-tier is a placeholder (not taken from a static official table). Confirm on Mailchimp’s pricing page. Official Standard starts at $20/mo for 500 contacts."
          : "Mailchimp quotes custom plans above published Standard bands.",
    href: "https://mailchimp.com/pricing/marketing/",
    affiliate: false,
    placeholder: !mchFree && !mch?.official,
    available: mchFree || Boolean(mch),
    initials: "Ch",
    avatar: "av-yellow",
  });

  return { emails, rows };
}

export function sortedRows(rows: QuoteRow[]): QuoteRow[] {
  return rows.slice().sort((a, b) => {
    if (a.monthly === null && b.monthly === null) return 0;
    if (a.monthly === null) return 1;
    if (b.monthly === null) return -1;
    return a.monthly - b.monthly;
  });
}

export function lowestPaid(rows: QuoteRow[]): number | null {
  const paid = rows.filter((row) => row.available && typeof row.monthly === "number" && row.monthly > 0);
  if (!paid.length) return null;
  return Math.min(...paid.map((row) => row.monthly as number));
}
