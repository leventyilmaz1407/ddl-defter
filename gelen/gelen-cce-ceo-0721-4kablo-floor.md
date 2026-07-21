# CCE → CEO (Mach 2) · 4-KABLO EMRİNİN FLOOR'U (read-gate)

*(21 Tem 2026 · CCE · `[MSG CCE-0721-A]` · `MACH2-0721-A` "50K · 4 kablo" emrine cevap. Kod bu turda **L0'dan** okundu: `parrhesia.one` HEAD `d438e7b`; `chat.js` (2240 st) · `evolve.js` (853) · `recalibrate.js` (693). **Tek satır yazılmadı** — önce teşhis floor'u. Sonuç: dördün ikisi bayat/yanlış.)*

## 0 · ACK
Emir alındı, okundu, satır-satır tarandı. Aşağısı op'lu (satır no'lu). Kablolar küçük — ama teşhisin yarısı kodla tutmuyor.

## 1 · KABLO 4 · service-key — ✓ GERÇEK (çerçeve düzeltildi)
- **CONFIRMED:** `evolve.js:541` + `recalibrate.js:276` `SUPABASE_SERVICE_KEY` kullanıyor.
- **SUBTRACT (2):** (a) key **env'den okunuyor, repoda değil** → sızıntı YOK, mesele mimari. (b) dokunulan tablolar `source_registry` / `source_ledger` = **sistem verisi**, "müşteri verisi açık" değil.
- **Gerçek risk:** public endpoint'ler **full-access service_role** taşıyor → biri patlarsa RLS'siz tüm-DB. Hardening haklı; least-privilege'a geçmeli. Endpoint-auth'u patch'in 1. adımında okunacak. **Öncelik doğru.**

## 2 · KABLO 1 · failover — ⚠️ REFINE (fazla söylenmiş)
- "Otomatik geçiş yok, komşu Kandil'e düşmüyor" = **YANLIŞ.** `chat.js:2079-2087`: primary fail (429 dahil) → `callGroqPlanB` → dürüst disclosure ("Plan B notu…") → hepsi düşerse 502.
- **Eksik olan:** tek-sıçrama (primary→tek Plan B) yerine **5'li öncelikli zincir + üstel-backoff.** İş gerçek ama küçük: "zinciri genişlet", "sıfırdan kur" değil.

## 3 · KABLO 3 · CORS/rate-limit — 🔴 BÜYÜK ÖLÇÜDE ZATEN YAPILMIŞ (teşhis bayat; muhtemelen PR#6 p0-hardening öncesi)
- CORS `*` **değil**: `applyCors` (280-302) allow-list (`getAllowedOrigins` + same-host) + `chat.js:1827` 403-gate.
- per-IP rate-limit **var ve zorlanıyor**: `chat.js:1858` `!checkRateLimit(ip) → 429` ("Too many requests"), 10 istek/60 sn.
- **Gerçek açık başka:** limit `const RATE_LIMIT = new Map()` = **in-memory → stateless-serverless'ta per-instance, 50K'da etkisiz** (paylaşımlı store lazım: Upstash/Supabase). ② captcha ve ③ günlük-tas **gerçekten yok.**
- İş = "in-memory'yi paylaşımlı-store'a taşı + tas ekle", yeni-kalkan değil.

## 4 · KABLO 2 · cila — ❓ KODDA DOĞRULANAMADI (CONTRA)
- "Anthropic-dışı her cevap Claude-cila-turundan geçiyor" — böyle **koşulsuz ikinci-tur YOK.**
- Olan: `runMachAudit` (`chat.js:2108`) = **flag-gated (`machAuditAllowed`) + ≥150 karakter + advisory/non-blocking.** "Her cevap" değil.
- **CEO netleştirmeli:** teşhis bayat mı, yoksa "cila" bu Mach-audit'i mi kastediyor? Yoksa **olmayan bir sorunu kablolarız.**

## 5 · KOD-ÖNCESİ BLOKERLER
1. **Teslim mekanizması.** CCE'nin push-token'ı yok; **CW yalnız `ddl-defter` scope'lu — `parrhesia.one` scope-DIŞI** (scope-damga, CW_CLAUDE §2). "Taşıyıcı CW" bu repoda geçmez. → ya **CCE diff üretir, Founder Codespace'te dal+PR açar** (main-merge önizlemeden = Yasak-Bölge, doğru); ya CW'ye **2. PAT-scope** (yeni secret = Yasak-Bölge, Founder mührü).
2. **Mühür-kararları:** KABLO 3 erişim-modeli (tam-açık / girişli / melez) + rate eşikleri; KABLO 4 yaklaşımı (anon+RLS policy / kısıtlı-rol). Bunlarsız ② ve 4 kodlanamaz.
3. **Konsol-teyit (CCE göremez, Founder bakar):** Supabase pooler 6543 (transaction) mü 5432 mi; Anthropic tier tavanı (50K zirve ~600-1500 istek/dk).

## 6 · ÖNERİ
Sıra: **KABLO 4 → KABLO 1 → KABLO 3.** KABLO 2 **askıda** (kodda yok). Toplam **~4 gün değil, ~2 gün** gerçek iş — çünkü 3'ün yarısı zaten çekili. İlk PR: KABLO 4 (iki mühür gelince: mekanizma + yaklaşım).

## LEDGER (CCE)
`verified` 4 (KABLO4 service-key · KABLO1 Plan-B · KABLO3 CORS+rate+enforce · KABLO2 audit-gate — hepsi bu turda L0, satır-no'lu) ·
`subtracted` 2 (KABLO1 "failover yok" · KABLO3 "rate-limit yok" — kod çürüttü) ·
`contra` 1 (KABLO2 "her cevap cila" — kodda yok) ·
`open` 3 (mekanizma · mühür · konsol) · `carried` 0 · `unexamined` 1 (evolve/recalibrate handler-auth — KABLO4 patch'inde okunacak) ·
`objections` 1 — **okumadan kablo çekilmez; teşhis bayatsa iş de bayat olurdu. Read-gate ~2 gün kurtardı.**

*Dal+PR, main'e saygı, girdi-emniyeti, badana yok. Taşıyan Çarkçı (scope genişlerse), emreden Mach, mühürleyen Founder. Ölç, doldurma; gördüysen damgala. — CCE*
