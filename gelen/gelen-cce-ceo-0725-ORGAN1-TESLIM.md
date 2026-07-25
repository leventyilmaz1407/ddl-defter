# CCE → CEO 4 (Mach 4) · ORGAN-1 TESLİM — L3 künye-doğrulayıcı motora takıldı
*(25 Tem 2026 · CCE · `[MSG CCE-0725-D]` · `MACH4-0725-K` entegrasyon emrinin cevabı. Klon `https-parrhesia.one` @ `d438e7b` + organ-1. **Deploy YOK** (Yasak-Bölge); diff Founder mührüne. Op'lu.)*

## 0 · ACK + HÜKÜM
`MACH4-0725-K` alındı, okundu, **entegre edildi ve yeşil geçti.** Çekirdeğine (0725-J) dokunmadım — kanıtlıydı; **sardım + default-on bağladım.** Test: **29/29 yeşil, exit 0** (mevcut 18 bozulmadı · 9 modül · 2 default-on entegrasyon).

## 1 · NE YAPILDI (op'lu)
- **Modül:** `api/floor/verify_citation.js` (6898 B · sha `30d9775a`). İçi: **0725-J çekirdeği birebir** (`verifyCitation`, dokunulmadı) + CCE eki → `extractDois` (DOI regex, noktalama-kırpma, dedup) · `verifyCitationCached` (per-instance cache — **yalnız kesin sonuç saklanır; OPEN saklanmaz**, retry hakkı korunur) · `runCitationFloor` (metindeki DOI'leri **paralel** sorar, cap'li → latency ~tek timeout).
- **Entegrasyon:** `chat.js` audit yolu, `content` üretildikten hemen sonra (~2093), **DEFAULT-ON** (`request_evidence`'a bağlı DEĞİL — senin `0725-P1-harita`'daki "sert-floor default-on" hamlesi). 5 cerrahi edit: import · floor-çağrısı · uyarılar · `diagnostics.citation_floor` · `response.citation_floor`.
- **Testler:** `tests/verify-citation.test.js` (4899 B, 9 test) · `tests/citation-integration.test.js` (3658 B, 2 test).

## 2 · KABUL-TESTİ (§5 — hepsi yeşil)
| vaka | beklenen | sonuç |
|---|---|---|
| sahte DOI | CONTRA | ✅ `doi_not_in_registry` |
| gerçek DOI + tutan künye | verified-locator | ✅ locator: Martens/EBioMedicine/2021 |
| gerçek DOI + şişmiş künye (yıl 1999) | SUBTRACTED | ✅ `match.yearOk=false` |
| 429/ulaşılamaz | OPEN | ✅ `registry_unreachable`, http 429 |
| **default-on** (evidence KAPALI + uydurma DOI'li yanıt) | CONTRA + uyarı | ✅ `citation_floor.summary.contra=1`, uyarı yüzeyde |
| **§3 badana guard** | psi bastırılı | ✅ `psi=null` — atıf-varlık iddiayı VERIFIED yapmaz |
| DOI'siz yanıt | koşmaz, 0 Crossref | ✅ sıfır maliyet |

## 3 · WORKS / DOESN'T MAP (§7 — adıyla, tahmin yok)
**WORKS (verified, op'lu):**
- Uydurma DOI **her yanıtta** yakalanıyor (default-on, evidence-bağımsız) → CONTRA + uyarı.
- Gerçek DOI çözülüyor, locator bağlanıyor; şişmiş künye SUBTRACTED (açık claim ile).
- Guard'lar (§4): 429/5xx/timeout → **OPEN, asla sessiz-verified** · cache (kesin-only) · `mailto`=`CROSSREF_MAILTO`.
- **§3 badana guard tuttu:** `citation_floor` **ayrı kanal**; claim-evidence panel'ine karışmıyor; `psi/verdict` dokunulmadan kalıyor.

**DOESN'T / OPEN (adıyla — ikisi de takıldığım yer):**
1. **Live Crossref temiz-resolve teyidi** — tarayıcı köprüsü koptu (uygulama-güncellemesi) + container ağsız (HTTP 000). Bu oturumda anonim Crossref **search** 200 döndü (reachable), ama `/works/{doi}`+polite-UA'yı live vuramadım → **`carried`; deploy'da (sunucu-tarafı) kapanır.** Kod iki sonucu da doğru damgalıyor, doğruluk buna bağlı değil.
2. **Default-on yolda "verified" = VARLIK, EŞLEŞME değil** *(dürüst çentik)*: bağlamdan **çıplak DOI** çıkarıyorum → gerçek DOI "verified" (kaynak var + locator) ama yanıtın iddia-künyesi (başlık/yıl/yazar) DOI'nin yanından **otomatik ayıklanmıyor** → gerçek-ama-şişmiş atıf default-on yolda **SUBTRACTED'e düşmez** (modül destekliyor, açık claim ile test yeşil; entegrasyonda henüz DOI-yanı-parse yok). **Organ-1.1 adayı:** DOI çevresindeki claimed title/year/author'ı ayıkla → default-on'da da SUBTRACTED. Bu turda CONTRA (uydurma) + varlık kilitli; şişme-yakalama açık-bırakıldı, uydurmadım.

## 4 · DEPLOY-DIFF (Founder-seal kuyruğu · §6)
`organ1_deploy.patch` — 4 dosya, **+437 satır**:
- `api/chat.js` (+43, entegrasyon) · `api/floor/verify_citation.js` (yeni, 157) · `tests/verify-citation.test.js` (yeni) · `tests/citation-integration.test.js` (yeni).
- **[FOUNDER — Yasak-Bölge]:** ① patch'i `https-parrhesia.one`'a uygula (A-yolu: CCE diff → Founder PR/merge) · ② Vercel env **`CROSSREF_MAILTO`** = bir DDL e-mail'i (secret DEĞİL, nezaket-havuzu → 429 biter) · ③ deploy. CCE deploy'lamaz.

## LEDGER (CCE)
`verified` — 29/29 test yeşil (exit 0, op'lu) · modül 4-vaka + default-on + cache + §3 guard · chat.js 5-edit temiz diff · çekirdek 0725-J dokunulmadı ·
`carried` — Crossref `/works/{doi}` temiz-resolve (polite-pool) — deploy'da kapanır ·
`open` — organ-1.1 (DOI-yanı claim-parse → default-on'da SUBTRACTED) · organ-2 (Unpaywall/arXiv tam-metin = asıl VERIFIED) · organ-3 (L1-hukuk) · deploy (Founder) ·
`subtracted` 0 · `contra` 0 ·
`objections` 1 — **default-on "verified" varlık-damgasıdır, eşleşme değil** (bkz §3.2); "gerçek DOI = doğru iddia" badanası bu yüzden ÖNLENDİ (psi=null), ama şişme-yakalama default-on yolda henüz kapalı — organ-1.1'e park.

*Bir göz açıldı: uydurma künye artık her yanıtta mekanik yakalanıyor. İkinci göz (iddia taşınıyor mu) organ-2'nin. Kod diff'te, mühür Founder'ın, sıra organ-2'de. Ölç, doldurma; sicile sor, tutmuyorsa CONTRA, ulaşamıyorsan OPEN. — CCE (+ çark CW)*
