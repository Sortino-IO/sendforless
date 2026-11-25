import assert from "node:assert/strict";
import test from "node:test";
import vm from "node:vm";
import { CONSENT_DENIED_REGIONS } from "../src/lib/consent.ts";
import { consentBootSource, gtmBootSource } from "../src/lib/head-scripts.ts";

function runConsent(raw) {
  const removed = [];
  const sandbox = {
    Date,
    JSON,
    localStorage: {
      getItem() {
        return raw;
      },
      removeItem(key) {
        removed.push(key);
      },
    },
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(consentBootSource(), sandbox);
  return { sandbox, removed };
}

function consentCalls(dataLayer) {
  return dataLayer.filter((entry) => entry && entry[0] === "consent").map((entry) => ({
    command: entry[1],
    value: entry[2],
  }));
}

test("denied regions are the EEA plus GB, CH, IS, LI, and NO", () => {
  assert.equal(CONSENT_DENIED_REGIONS.length, 32);
  for (const code of ["DE", "FR", "GB", "CH", "IS", "LI", "NO", "GR", "IE"]) {
    assert.equal(CONSENT_DENIED_REGIONS.includes(code), true);
  }
  assert.equal(CONSENT_DENIED_REGIONS.includes("US"), false);
  assert.equal(CONSENT_DENIED_REGIONS.includes("UK"), false);
  const source = consentBootSource();
  assert.match(source, /wait_for_update:500/);
  assert.match(source, /event:"consent_update"/);
  for (const code of CONSENT_DENIED_REGIONS) assert.match(source, new RegExp(`"${code}"`));
});

test("defaults deny the listed regions and grant everywhere else", () => {
  const { sandbox, removed } = runConsent(null);
  const calls = consentCalls(sandbox.dataLayer);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].command, "default");
  assert.equal(calls[0].value.ad_storage, "denied");
  assert.equal(calls[0].value.ad_user_data, "denied");
  assert.equal(calls[0].value.ad_personalization, "denied");
  assert.equal(calls[0].value.analytics_storage, "denied");
  assert.equal(calls[0].value.wait_for_update, 500);
  assert.equal(calls[0].value.region.length, 32);
  assert.equal(calls[1].command, "default");
  assert.equal(calls[1].value.analytics_storage, "granted");
  assert.equal(calls[1].value.region, undefined);
  assert.equal(removed.length, 0);
  assert.equal(
    sandbox.dataLayer.some((entry) => entry && entry.event === "consent_update"),
    false,
  );
});

test("a stored choice updates consent and pushes consent_update", () => {
  const raw = JSON.stringify({ choice: "rejected", exp: Date.now() + 60_000 });
  const { sandbox } = runConsent(raw);
  const update = consentCalls(sandbox.dataLayer).find((entry) => entry.command === "update");
  assert.ok(update);
  assert.equal(update.value.analytics_storage, "denied");
  assert.equal(update.value.ad_storage, "denied");
  const event = sandbox.dataLayer.find((entry) => entry && entry.event === "consent_update");
  assert.equal(event.consent_choice, "rejected");
});

test("an expired choice is deleted and does not update consent", () => {
  const raw = JSON.stringify({ choice: "accepted", exp: Date.now() - 1000 });
  const { sandbox, removed } = runConsent(raw);
  assert.deepEqual(removed, ["sfl_consent"]);
  assert.equal(consentCalls(sandbox.dataLayer).some((entry) => entry.command === "update"), false);
});

test("the tag manager snippet loads the configured container", () => {
  const inserted = [];
  const first = {
    parentNode: {
      insertBefore(node) {
        inserted.push(node);
        return node;
      },
    },
  };
  const document = {
    getElementsByTagName() {
      return [first];
    },
    createElement() {
      return { async: false, src: "" };
    },
  };
  const sandbox = { document, Date };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  vm.runInContext(gtmBootSource(), sandbox);
  assert.equal(inserted.length, 1);
  assert.equal(inserted[0].src, "https://www.googletagmanager.com/gtm.js?id=GTM-TFBLV8WQ");
  assert.equal(sandbox.dataLayer[0].event, "gtm.js");
});
