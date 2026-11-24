import type { CompareDoc } from "./types";
import { beehiivVsConvertkit } from "./beehiiv-vs-convertkit";
import { beehiivVsSubstack } from "./beehiiv-vs-substack";
import { convertkitVsMailchimp } from "./convertkit-vs-mailchimp";
import { flodeskVsMailchimp } from "./flodesk-vs-mailchimp";
import { ghostVsSubstack } from "./ghost-vs-substack";
import { mailcheapVsBeehiiv } from "./mailcheap-vs-beehiiv";
import { mailerliteVsMailchimp } from "./mailerlite-vs-mailchimp";

export const comparisons: Record<string, CompareDoc> = {
  [mailerliteVsMailchimp.id]: mailerliteVsMailchimp,
  [flodeskVsMailchimp.id]: flodeskVsMailchimp,
  [convertkitVsMailchimp.id]: convertkitVsMailchimp,
  [beehiivVsSubstack.id]: beehiivVsSubstack,
  [ghostVsSubstack.id]: ghostVsSubstack,
  [beehiivVsConvertkit.id]: beehiivVsConvertkit,
  [mailcheapVsBeehiiv.id]: mailcheapVsBeehiiv,
};
