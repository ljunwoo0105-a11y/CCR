import assert from "node:assert/strict";
import test from "node:test";

import { parseLoginRequest, redirectUrlForRequest } from "../src/lib/login-request";

// Non-sensitive test fixture — parser test only, never used as a real credential.
const FIXTURE_PASSWORD =
  process.env.TEST_LOGIN_FIXTURE_PASSWORD ?? "test-password-example";

test("parses form login requests when JavaScript submit does not run", async () => {
  const body = new URLSearchParams({
    email: " STAFF@CCR.LOCAL ",
    password: FIXTURE_PASSWORD,
    next: "/staff",
  });
  const req = new Request("http://127.0.0.1:3000/api/staff/login", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  const result = await parseLoginRequest(req);

  assert.equal(result.ok, true);
  if (result.ok) {
    assert.deepEqual(result.data, {
      email: "staff@ccr.local",
      password: FIXTURE_PASSWORD,
      next: "/staff",
      wantsHtmlRedirect: true,
    });
  }
});

test("parses JSON login requests for hydrated client submits", async () => {
  const req = new Request("http://127.0.0.1:3000/api/staff/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: " STAFF@CCR.LOCAL ",
      password: FIXTURE_PASSWORD,
    }),
  });

  const result = await parseLoginRequest(req);

  assert.equal(result.ok, true);
  if (result.ok) {
    assert.deepEqual(result.data, {
      email: "staff@ccr.local",
      password: FIXTURE_PASSWORD,
      next: null,
      wantsHtmlRedirect: false,
    });
  }
});

test("builds login redirects from the browser origin when present", () => {
  const req = new Request("http://localhost:3000/api/staff/login", {
    headers: { origin: "http://127.0.0.1:3000" },
  });

  const url = redirectUrlForRequest(req, "/staff");

  assert.equal(url.href, "http://127.0.0.1:3000/staff");
});
