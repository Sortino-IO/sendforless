/**
 * Site-wide constants.
 * Every MailCheap affiliate link is built from AFFILIATE_CODE.
 * Change this one value to swap the partner code.
 */
export const AFFILIATE_CODE = "analyst";

export const SITE_URL = "https://sendforless.com";
export const SITE_NAME = "sendforless";

export const PRICE_CHECKED_ISO = "2026-11-24";
export const PRICE_CHECKED_LABEL = "24 November 2026";

const ISO_MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/** Format YYYY-MM-DD as "25 November 2026". Falls back to the price-check label. */
export function formatIsoDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!match) return PRICE_CHECKED_LABEL;
  const month = ISO_MONTHS[Number(match[2]) - 1];
  const day = Number(match[3]);
  if (!month || day < 1 || day > 31) return PRICE_CHECKED_LABEL;
  return `${day} ${month} ${match[1]}`;
}

/**
 * Google Tag Manager container ID.
 * While this is set, pages load this container and do not load gtag.js directly.
 * The container GTM-TFBLV8WQ already includes the GA4 tag G-G7X8CD2S9Y and an
 * affiliate_click event tag. Leave this empty only to fall back to direct GA4.
 */
export const GTM_ID = "GTM-TFBLV8WQ";

/** Direct GA4 measurement ID. Used only while GTM_ID is empty. */
export const GA_MEASUREMENT_ID = "G-G7X8CD2S9Y";

const MAILCHEAP_ORIGIN = "https://mailcheap.ai";

/** Affiliate URL. Adds `?via=analyst` to any MailCheap path. */
export function mailcheapHref(path: string = "/pricing"): string {
  const url = new URL(path, MAILCHEAP_ORIGIN);
  url.searchParams.set("via", AFFILIATE_CODE);
  return url.toString();
}

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE_URL).href;
}
