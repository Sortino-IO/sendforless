import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const source = readFileSync(new URL("../src/components/EmailLink.astro", import.meta.url), "utf8");
const plain = ["office", "@", "sortino.io"].join("");

test("the component source does not contain the address or a mailto link", () => {
  assert.equal(source.includes(plain), false);
  assert.equal(source.includes("mailto:"), false);
  assert.match(source, /office \[at\] sortino \[dot\] io/);
});

test("the encoded parts assemble to the editorial address", () => {
  const encoded = source.match(/const encoded = "([^"]+)"/)?.[1];
  assert.ok(encoded);
  const [user, host, tld] = Buffer.from(encoded, "base64").toString("utf8").split("|");
  assert.equal([user, "@", host, ".", tld].join(""), plain);
});
