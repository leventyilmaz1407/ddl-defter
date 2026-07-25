// CCE floor-probe harness — MACH4-0725-B step 2 (davranışsal koşum)
// Runs the REAL api/chat.js handler with stubbed I/O to fire the parts the
// repo's own 18 tests do NOT cover: Ψ/verdict production (Mach audit path),
// citation_status on a surviving L0 row, and the user-source warning path.
//
// HONESTY (op-gate): provider/auth/audit/brave are STUBBED. What is proven is
// chat.js ORCHESTRATION: audit-gating (evidence+len>=150), psi/verdict assembly,
// suppression when evidence not requested, psi->confidence banding, L0 citation_status,
// candidateOnlyGuard non-fire when a user source exists. The psi VALUE is stub-injected;
// its COMPUTATION is the external Mach service's job, not chat.js.

import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";

const HANDLER_PATH = "/home/claude/p1-head/api/chat.js";
const { default: handler } = await import(pathToFileURL(HANDLER_PATH).href);

const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };
let reqN = 0;

function resetEnv() {
  for (const k of Object.keys(process.env)) if (!(k in originalEnv)) delete process.env[k];
  Object.assign(process.env, originalEnv);
  globalThis.fetch = originalFetch;
}

function request(body) {
  reqN += 1;
  return {
    method: "POST",
    headers: {
      host: "localhost:3000",
      "x-forwarded-for": `10.0.0.${reqN}`,
      authorization: "Bearer test-user-token"
    },
    body
  };
}

function response() {
  return {
    headers: {}, statusCode: 200, payload: undefined,
    setHeader(n, v) { this.headers[n] = v; },
    status(c) { this.statusCode = c; return this; },
    json(p) { this.payload = p; return this; },
    end() { return this; }
  };
}

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json" } });
}

// Stub router: auth ok, Mach gate->completed(psi/verdict), provider content, (brave off by env)
function makeFetch({ psi = 0.44, verdict = "Evidence is thin; two independent paths not established.", providerContent } = {}) {
  return async (url, options) => {
    const u = String(url);
    if (u.includes(".supabase.co/auth/v1/user")) return jsonResponse({ id: "test-user-id" });
    if (u.startsWith("https://api.parrhesia.one/gate")) return jsonResponse({ task_id: "mach-task-1" });
    if (u.startsWith("https://api.parrhesia.one/status/")) {
      return jsonResponse({
        status: "completed",
        ledger: { psi, verdict, evidence: [{ title: "advisory lead A", layer: "L4", provider: "advisory", url: "https://example.org/a" }] }
      });
    }
    if (u.startsWith("https://api.search.brave.com/")) return jsonResponse({ web: { results: [] } });
    // provider (deepseek openai-compatible)
    return jsonResponse({ choices: [{ message: { content: providerContent } }] });
  };
}

const CONFIDENT_ANSWER =
  "Kesinlikle doğru: bu iddia birden fazla bağımsız kaynak tarafından defalarca doğrulanmıştır ve literatürde tartışmasızdır. " +
  "Rakamlar nettir, hiçbir belirsizlik yoktur ve mesele tamamen kapanmıştır."; // deliberately over-confident (badana) — ~200 chars

const results = [];
function record(name, obj) { results.push({ name, ...obj }); }

// ---------------------------------------------------------------------------
// SCENARIO A — evidence + user L0 source: expect psi/verdict produced,
// citation_status=pending on L0 row, candidate_only_guard FALSE, L0 warning.
// ---------------------------------------------------------------------------
{
  resetEnv();
  process.env.DEEPSEEK_API_KEY = "test-key";
  process.env.ENABLE_MACH_AUDIT = "1";
  process.env.ENABLE_BRAVE_EVIDENCE = "0"; // isolate: no search candidates
  globalThis.fetch = makeFetch({ psi: 0.44, providerContent: CONFIDENT_ANSWER });

  const res = response();
  await handler(request({
    lantern: "Consensus",
    request_evidence: true,
    source: "Kullanicinin yükledigi not: 1847 hasadi pas hastaligi nedeniyle basarisiz oldu.",
    messages: [{ role: "user", content: "Yükledigim notu degerlendir." }]
  }), res);

  const p = res.payload;
  const l0row = (p.source_state?.rows || []).find(r => r.source_layer === "L0");
  record("A: evidence + user L0 source", {
    statusCode: res.statusCode,
    psi: p.psi,
    verdict_present: Boolean(p.verdict),
    confidence: p.confidence,
    audit_status: p.audit_state?.status,
    candidate_only_guard: p.diagnostics?.candidate_only_guard,
    has_user_source: p.source_state?.has_user_source,
    l0_citation_status: l0row?.citation_status,
    l0_independently_verified: l0row?.independently_verified,
    warnings: p.warnings,
    content_snip: String(p.answer || "").slice(0, 90)
  });
  // Assertions
  assert.equal(res.statusCode, 200, "A statusCode");
  assert.equal(p.psi, 0.44, "A psi produced");
  assert.equal(p.confidence, "low", "A psi->confidence band (0.44 -> low)");
  assert.ok(p.verdict && p.verdict.length > 0, "A verdict produced");
  assert.equal(p.diagnostics.candidate_only_guard, false, "A guard must NOT fire (user source present)");
  assert.equal(p.source_state.has_user_source, true, "A has_user_source");
  assert.equal(l0row?.citation_status, "pending", "A L0 citation_status pending (never auto-verified)");
  assert.equal(l0row?.independently_verified, false, "A L0 not independently_verified");
  assert.ok(p.warnings.some(w => /not independently checked/i.test(w)), "A L0 warning surfaced");
}

// ---------------------------------------------------------------------------
// SCENARIO B — NO evidence requested: expect psi/verdict SUPPRESSED (null/empty)
// even though provider answered, and no source rows.
// ---------------------------------------------------------------------------
{
  resetEnv();
  process.env.DEEPSEEK_API_KEY = "test-key";
  process.env.ENABLE_MACH_AUDIT = "1"; // enabled, but must stay suppressed w/o evidence
  process.env.ENABLE_BRAVE_EVIDENCE = "0";
  globalThis.fetch = makeFetch({ psi: 0.9, providerContent: CONFIDENT_ANSWER });

  const res = response();
  await handler(request({
    lantern: "Consensus",
    messages: [{ role: "user", content: "Kisaca acikla." }]
  }), res);

  const p = res.payload;
  record("B: no evidence requested (suppression)", {
    statusCode: res.statusCode,
    psi: p.psi,
    verdict: p.verdict,
    confidence: p.confidence,
    evidence_requested: p.diagnostics?.evidence_requested,
    source_rows: p.source_state?.rows?.length,
    warnings: p.warnings
  });
  assert.equal(res.statusCode, 200, "B statusCode");
  assert.equal(p.psi, null, "B psi suppressed when evidence not requested");
  assert.equal(p.verdict, "", "B verdict suppressed");
  assert.equal(p.confidence, "", "B confidence suppressed");
  assert.equal(p.source_state.rows.length, 0, "B no source rows");
}

// ---------------------------------------------------------------------------
// SCENARIO C — evidence, no source, no search: audit still runs on the answer;
// open_questions surfaces the "no inspected source" waypoint.
// ---------------------------------------------------------------------------
{
  resetEnv();
  process.env.DEEPSEEK_API_KEY = "test-key";
  process.env.ENABLE_MACH_AUDIT = "1";
  process.env.ENABLE_BRAVE_EVIDENCE = "0";
  globalThis.fetch = makeFetch({ psi: 0.7, providerContent: CONFIDENT_ANSWER });

  const res = response();
  await handler(request({
    lantern: "Consensus",
    request_evidence: true,
    messages: [{ role: "user", content: "Bu iddiayi degerlendir." }]
  }), res);

  const p = res.payload;
  record("C: evidence, no source/no search", {
    statusCode: res.statusCode,
    psi: p.psi,
    confidence: p.confidence,
    candidate_only_guard: p.diagnostics?.candidate_only_guard,
    open_questions: p.open_questions
  });
  assert.equal(p.psi, 0.7, "C psi produced");
  assert.equal(p.confidence, "medium", "C psi->confidence band (0.7 -> medium)");
  assert.equal(p.diagnostics.candidate_only_guard, false, "C guard not fired (no search candidates)");
  assert.ok(p.open_questions.some(q => /No inspected source text/i.test(q)), "C open_question waypoint surfaced");
}

// ---------------------------------------------------------------------------
// SCENARIO D — closed lantern (Seamus) by default capabilities:
// expect closed_lantern_room, no provider call.
// ---------------------------------------------------------------------------
{
  resetEnv();
  process.env.DEEPSEEK_API_KEY = "test-key";
  process.env.ENABLE_BRAVE_EVIDENCE = "0";
  let providerCalls = 0;
  globalThis.fetch = async (url) => {
    const u = String(url);
    if (u.includes(".supabase.co/auth/v1/user")) return jsonResponse({ id: "test-user-id" });
    providerCalls += 1;
    return jsonResponse({ choices: [{ message: { content: "should not be used" } }] });
  };

  const res = response();
  await handler(request({
    lantern: "Seamus",
    messages: [{ role: "user", content: "Seamus ne derdi?" }]
  }), res);

  const p = res.payload;
  record("D: closed lantern (Seamus) default", {
    statusCode: res.statusCode,
    response_mode: p.response_mode,
    canonical_lantern: p.canonical_lantern,
    provider_calls: providerCalls,
    answer_snip: String(p.answer || "").slice(0, 70)
  });
  assert.equal(p.response_mode, "closed_lantern_room", "D closed lantern room");
  assert.equal(providerCalls, 0, "D no provider call for closed lantern");
}

resetEnv();

// ---------------------------------------------------------------------------
console.log("\n===== CCE FLOOR-PROBE — behavioral results (real handler, stubbed I/O) =====\n");
for (const r of results) {
  console.log("• " + r.name);
  for (const [k, v] of Object.entries(r)) {
    if (k === "name") continue;
    console.log("    " + k + ": " + (typeof v === "object" ? JSON.stringify(v) : v));
  }
  console.log("");
}
console.log("ALL ASSERTIONS PASSED ✓  (if this line prints, every assert above held)");
