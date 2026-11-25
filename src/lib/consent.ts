/** localStorage key for the six-month cookie choice. */
export const CONSENT_STORAGE_KEY = "sfl_consent";

/** About six months. The banner stores the choice until this age. */
export const CONSENT_TTL_MS = 183 * 24 * 60 * 60 * 1000;

/**
 * EEA member states plus the UK, Switzerland, Iceland, Liechtenstein, and Norway.
 * Google Consent Mode matches these ISO 3166-1 alpha-2 codes to the visitor.
 */
export const CONSENT_DENIED_REGIONS = [
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
  "GB",
  "CH",
  "IS",
  "LI",
  "NO",
] as const;

export type ConsentChoice = "accepted" | "rejected";

export function consentGranted(choice: ConsentChoice): "granted" | "denied" {
  return choice === "accepted" ? "granted" : "denied";
}
