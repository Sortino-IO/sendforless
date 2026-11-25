/**
 * Subscriber-tier quotes for comparison tables.
 * One issue a week. Monthly and annual-effective stay in separate cells.
 * A missing published dollar is "Check current pricing".
 */
import {
  BEEHIIV_LITE,
  FLODESK_EMAIL_ANNUAL_MO,
  FLODESK_EMAIL_MONTHLY,
  GHOST_PUBLISHER,
  KIT_CREATOR_KNOWN,
  emailsPerMonth,
  mailcheapPlan,
  mailerlitePlan,
  money,
  pickBand,
} from "./pricing";

export const SCENARIO_SUBS = [1000, 2500, 5000, 10000, 25000] as const;

export type ScenarioCell = { monthly: string; annual: string };

function tenMonths(monthly: number): number {
  return Math.round(((monthly * 10) / 12) * 100) / 100;
}

export function scenarioCell(platform: string, subs: number): ScenarioCell {
  const emails = emailsPerMonth(subs, 1);
  if (platform === "MailerLite") {
    const plan = mailerlitePlan(subs, emails);
    if (!plan) return { monthly: "Check current pricing", annual: "Check current pricing" };
    if (plan.monthly === 0) return { monthly: "$0 Free", annual: "$0 Free" };
    const annual = Math.round(plan.monthly * 0.9 * 100) / 100;
    return { monthly: `${money(plan.monthly)} ${plan.plan}`, annual: `${money(annual)} ${plan.plan}` };
  }
  if (platform === "Mailchimp") {
    if (subs <= 250) return { monthly: "$0 Free", annual: "$0 Free" };
    if (subs <= 500) return { monthly: "$13 Essentials", annual: "Check current pricing" };
    return { monthly: "Check current pricing", annual: "Check current pricing" };
  }
  if (platform === "beehiiv") {
    const lite = pickBand(BEEHIIV_LITE, subs);
    if (!lite) return { monthly: "Check current pricing", annual: "Check current pricing" };
    if (subs <= 2500) {
      return {
        monthly: `$0 Free. Lite ${money(lite.monthly)}`,
        annual: `$0 Free. Lite ${money(lite.yearlyMo ?? 0)}`,
      };
    }
    return { monthly: `${money(lite.monthly)} Lite`, annual: `${money(lite.yearlyMo ?? 0)} Lite` };
  }
  if (platform === "Ghost(Pro)") {
    if (subs <= 1000) return { monthly: "$18 Starter. Publisher $35", annual: "$15 Starter. Publisher $29" };
    const publisher = pickBand(GHOST_PUBLISHER, subs);
    if (!publisher) return { monthly: "Check current pricing", annual: "Check current pricing" };
    return {
      monthly: `${money(publisher.monthly)} Publisher`,
      annual: `${money(publisher.yearlyMo ?? 0)} Publisher`,
    };
  }
  if (platform === "Kit") {
    if (subs > 10000) return { monthly: "Check current pricing", annual: "Check current pricing" };
    const creator = KIT_CREATOR_KNOWN.find((band) => subs <= band.max);
    if (!creator) {
      return {
        monthly: "$0 Free for broadcasts. Creator: Check current pricing",
        annual: "$0 Free. Creator annual: Check current pricing",
      };
    }
    return {
      monthly: `$0 Free. Creator ${money(creator.monthly)}`,
      annual: `$0 Free. Creator ${money(tenMonths(creator.monthly))}`,
    };
  }
  if (platform === "Flodesk") {
    return {
      monthly: `${money(FLODESK_EMAIL_MONTHLY)} Email`,
      annual: `${money(FLODESK_EMAIL_ANNUAL_MO)} Email`,
    };
  }
  if (platform === "Substack") return { monthly: "$0 platform fee", annual: "$0 platform fee" };
  if (platform === "Constant Contact") {
    return { monthly: "Check current pricing", annual: "Check current pricing" };
  }
  if (platform === "MailCheap") {
    const plan = mailcheapPlan(subs, emails);
    if (!plan) return { monthly: "Custom", annual: "Custom" };
    return { monthly: `${money(plan.monthly)} ${plan.name}`, annual: `${money(tenMonths(plan.monthly))} ${plan.name}` };
  }
  return { monthly: "Check current pricing", annual: "Check current pricing" };
}

export const FEE_MRR = [1000, 5000, 10000] as const;
