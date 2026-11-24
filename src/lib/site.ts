/**
 * Site-wide constants.
 * Every MailCheap affiliate link is built from AFFILIATE_CODE.
 * Change this one value to swap the partner code.
 */
export const AFFILIATE_CODE = "analyst";

export const SITE_URL = "https://sendforless.com";
export const SITE_NAME = "sendforless";
export const CONTACT_EMAIL = "hello@sendforless.com";

export const PRICE_CHECKED_ISO = "2026-11-24";
export const PRICE_CHECKED_LABEL = "24 November 2026";

/**
 * Google Tag Manager container ID.
 * Leave empty until the real container exists. While this is empty, pages
 * load GA4 directly. Set it to `GTM-XXXX` to switch every page to Tag Manager.
 */
export const GTM_ID = "";

/** Direct GA4 measurement ID. Used only while GTM_ID is empty. */
export const GA_MEASUREMENT_ID = "G-G7X8CD2S9Y";

const MAILCHEAP_ORIGIN = "https://mailcheap.ai";

/** Affiliate URL. `"/"` → https://mailcheap.ai/?via=analyst. `"/pricing"` → pricing page. */
export function mailcheapHref(path: "/" | "/pricing" = "/pricing"): string {
  const url = new URL(path, MAILCHEAP_ORIGIN);
  url.searchParams.set("via", AFFILIATE_CODE);
  return url.toString();
}

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE_URL).href;
}
