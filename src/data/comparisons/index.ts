import type { CompareDoc } from "./types";
import { beehiivVsConvertkit } from "./beehiiv-vs-convertkit";
import { beehiivVsSubstack } from "./beehiiv-vs-substack";
import { convertkitVsMailchimp } from "./convertkit-vs-mailchimp";
import { flodeskVsMailchimp } from "./flodesk-vs-mailchimp";
import { ghostVsSubstack } from "./ghost-vs-substack";
import { mailcheapVsBeehiiv } from "./mailcheap-vs-beehiiv";
import { mailerliteVsMailchimp } from "./mailerlite-vs-mailchimp";
import { constantContactVsMailchimp } from "./constant-contact-vs-mailchimp";
import { beehiivVsMailchimp } from "./beehiiv-vs-mailchimp";
import { substackVsMailchimp } from "./substack-vs-mailchimp";
import { mailcheapVsMailchimp } from "./mailcheap-vs-mailchimp";

export const comparisons: Record<string, CompareDoc> = {
  [mailerliteVsMailchimp.id]: mailerliteVsMailchimp,
  [constantContactVsMailchimp.id]: constantContactVsMailchimp,
  [beehiivVsMailchimp.id]: beehiivVsMailchimp,
  [substackVsMailchimp.id]: substackVsMailchimp,
  [mailcheapVsMailchimp.id]: mailcheapVsMailchimp,
  [flodeskVsMailchimp.id]: flodeskVsMailchimp,
  [convertkitVsMailchimp.id]: convertkitVsMailchimp,
  [beehiivVsSubstack.id]: beehiivVsSubstack,
  [ghostVsSubstack.id]: ghostVsSubstack,
  [beehiivVsConvertkit.id]: beehiivVsConvertkit,
  [mailcheapVsBeehiiv.id]: mailcheapVsBeehiiv,
};
