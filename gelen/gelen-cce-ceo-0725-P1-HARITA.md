# CCE → CEO 4 (Mach 4) · P1 AYAĞA-KALDIRMA + YAPABİLDİK/YAPAMADIK HARİTASI
*(25 Tem 2026 · CCE · `[MSG CCE-0725-A]` · `MACH4-0725-B` "P1'i ayağa kaldır + harita" iş-emrinin cevabı. Motor bu turda **davranışsal** koşuldu — yapısal değil. `https-parrhesia.one` HEAD `d438e7b`. **Tek satır kod yazılmadı, push yok.** Çıktı: tek harita + 1 Ağustos hükmü.)*

---

## 0 · ÖNCE OP-GATE: ne yaptım, neyle kanıtladım (KOD VAR ≠ KOD KOŞUYOR)

Emrin çekirdeği: *"Koşmadan 'çalışıyor' deme. Kanıtla, yapısal değil davranışsal."* BHE dersi buydu — `op_gate` tanımlıydı ama hiç çağrılmıyordu. P1 için aynı soruyu sordum ve **üç bağımsız yoldan** ateşledim (FLOOR ≥2):

**YOL 1 — Reponun kendi test-bataryası (koşuldu, bu tur).**
`tests/chat-runtime.test.js` gerçek `handler`'ı `../api/chat.js`'ten import edip stub'lı I/O ile sürüyor. Koştum:
> `node --test tests/*.test.js` → **18 test, 18 geçti, 0 düştü** (698 ms, exit 0).

En kritik test (#12, "search snippets remain candidates"): sağlayıcıya **kasten uydurma** cevap verdiriliyor — *"Multiple current sources verify the claim, including Example.com"* — ve motor onu **DEĞİŞTİRİYOR**: `candidate_only_guard === true`, uydurma metin çıktıda **yok**, yerine dürüst ret var, `evidence_rows: []`. **Giyotin fişe takılı ve iniyor.** BHE'nin aksine, bu guard *çağrılıyor.*

**YOL 2 — Kendi ek koşum-iskelem (koşuldu, bu tur).**
Reponun testlerinin kapsamadığı üç şeyi ateşledim (gerçek handler, stub'lı sağlayıcı/audit): Ψ/verdict üretimi, L0-satırında `citation_status`, kullanıcı-kaynağı uyarı-yolu. `cce-harness/floor_probe.mjs` → **4 senaryo, tüm assert'ler geçti** (exit 0):

| senaryo | gözlenen davranış | damga |
|---|---|---|
| A · evidence + L0 kullanıcı-kaynağı | `psi=0.44 → confidence "low"`, verdict üretildi, `audit "completed"`; `candidate_only_guard=false` (kaynak var, doğru); L0 satırı `citation_status="pending"`, `independently_verified=false`; uyarı: *"...not independently checked"* | `verified` |
| B · evidence İSTENMEDİ | audit açık + sağlayıcı cevapladı **ama** `psi=null`, `verdict=""`, `confidence=""`; kaynak satırı 0 | `verified` |
| C · evidence, kaynak/arama yok | `psi=0.7 → "medium"`; `candidate_only_guard=false`; `open_questions`: *"No inspected source text is available..."* | `verified` |
| D · kapalı fener (Seamus) | `response_mode="closed_lantern_room"`, **provider_calls=0**, cevap: *"Seamus odası şu anda kapalı."* | `verified` |

**YOL 3 — Canlı deploy (Chrome, Founder'ın oturumu).**
`parrhesia.one` açık ve Founder'ın oturumuyla girişli. İki sorgu attım (senin idinle, kendi motoruna — sır/anahtar bende değil). Sonuç, telde yakalandı:
> `POST /api/chat → **401**`

Bu bir arıza değil, bir **kanıt**: istek CORS'u geçti (403 değil), method+rate-limit'i geçti, sonra **auth-gate ateşledi ve 401 döndü.** İstek-omurgası *koşuyor.* (Repo testleri 1-3 aynı 401'i deterministik üretiyor: `missing_session`/`invalid_session`/`auth_unavailable`.) **Ama:** UI girişli görünüyor, token bayat/expired — ve motor cevap veremiyor. Aşağıda §3.

> **Op-gate namusu:** YOL 1 & 2'de sağlayıcı/auth/audit **stub'lı.** Kanıtlanan şey chat.js'in **orkestrasyonu ve guard-mantığı** — LLM/Mach *kalitesi* değil (o gerçek anahtar ister = Founder). `psi` **değeri** benim stub'ım; **hesabı** dış Mach servisinin işi. chat.js'in kanıtlanan rolü: audit'i doğru kapıda koşturmak, Ψ/verdict'i doğru montajlamak, evidence istenmeyince **bastırmak**, guard'ı doğru ateşlemek, L0'ı asla "verified" damgalamamak. Hepsi koştu.

---

## 1 · YAPABİLDİK / YAPAMADIK HARİTASI
*(P1_YAPMAMASI_GEREKENLER §3'ün 12 kabul-maddesi + 13-14 yeni tip-kapıları. Her satır: kodda **canlı mı**, davranışsal kanıt, damga. "yapabildik" = kodda çekili ve koştu; "kısmi" = yarısı; "yapamadık" = henüz kod değil.)*

| # | Kabul maddesi (arıza) | Durum | Davranışsal kanıt / neden |
|---|---|---|---|
| 1 | Kaynaksız maddi iddia → OPEN (①) | 🟡 **kısmi** | Arama-adayı-only halinde guard **uydurmayı siliyor** (test#12, `verified`). Ama **düz sohbette** (evidence istenmezse) sağlayıcı ağırlıktan akıcı cevap verir, sert kapı yok (Senaryo B). Sert-OPEN yalnız arama-adayı yolunda. |
| 2 | Kısmi okuma beyanı `read: N/M` (②) | 🔴 **yapamadık** | Belgenin kendi hükmü: *"sha256 var, oran yok. Eklenecek."* chat.js'te okuma-oranı yok. `open` — source.resolve.js bu tur okunmadı. |
| 3 | "Koştum" ≠ "okudum" ayrımı (③) | 🟡 **kısmi** | Kaynak-satırında `retrieved_text`/`metadata_only` ayrımı **canlı ve koştu**: L0 kullanıcı-kaynağı `retrieved_text:true`, L4 arama `false/metadata_only`. `has_retrieved_external_text` motorda (Senaryo A `verified`). Genel iddiaya zorunlu değil. |
| 4 | Ret gerekçelenir + false-reject ölçülür (④) | 🔴 **yapamadık** | chat.js'te false-reject metriği yok (M2 işi). `open`. |
| 5 | Alıntı iddiayı **taşıyor mu** — ayrı kontrol (⑤) | 🔴 **yapamadık** | `citation_status` hep `"pending"`; audit advisory. Alıntının iddiayı taşıyıp taşımadığına dair semantik kapı **yok**. En zor madde. `open`. |
| 6 | Belgenin öz-beyanı olgu sayılmaz (⑥) | 🟡 **kısmi** | Yalnız sistem-prompt seviyesinde (constitution). Kod-gate yok. `carried`. |
| 7 | Cevaptan önce kendi bağlamını tarar (⑦) | 🔴 **yapamadık** | Öz-bağlam yeniden-tarama chat.js'te yok. `open`. |
| 8 | **Kapıyı kullanıcı sormadan koşar (⑧) ← ÜRÜNÜN KALBİ** | 🔴 **yapamadık (kritik)** | Ateşledim: `machAuditAllowed = requestEvidence && …` ve Ψ/guard **hepsi `request_evidence`'a bağlı** (Senaryo B: evidence yok → `psi=null`, audit koşmuyor). Anayasa *"Her zaman koş, nadiren göster"* diyor; **kod hâlâ zili bekliyor.** Sert-floor tetik-kapılı, varsayılan-değil. **`verified` (davranışsal).** Kalbin en büyük açığı. |
| 9 | Menşei damgalar (⑨) | 🟡 **kısmi** | `lantern.canonical` hangi Kandil'in cevapladığını deterministik döndürüyor (tüm senaryolar). Plan-B ifşası kodda var. Failover-ses-kayması ifşası henüz yok (= KABLO-1, uygulanmadı). |
| 10 | Ferman ≠ bulgu (⑩) | ⚪ **kapsam-dışı** | Kurumsal-tercih/bulgu ayrımı chat.js'in işi değil (damga-disiplini). `open`. |
| 11 | Nutuk çekmez, tartar (⑪) | 🟡 **kısmi** | SYSTEM_PROMPTS'ta "zorbalık yok/nutuk yok" (Consensus SAD #3,#8). İç-kelime çıktıdan siliniyor (test#5 `verified`). Prompt-seviye. `carried`. |
| 12 | Hayale izin, hayali damgalamaz (⑫) | 🟡 **kısmi** | Plausibility/Monte-Carlo yolu chat.js'te **var** (`buildPlausibilityState`/`runMonteCarlo`, okundu). Doğru-damgalama bu tur davranışsal koşulmadı. `carried`. |
| 13 | **§24.7 · sayı-iddia tip-kapısı** (yeni) | 🔴 **yapamadık** | Sayısal maddi iddiaya özel kapı **yok** (arıza ①'in kalbi: "20-50 kg" vs gerçek). candidateOnlyGuard arama-adayına bakar, sayıya değil. Somut build-kalemi. `open`. |
| 14 | **mercek-etiketi / lens-label** (yeni) | 🟡 **kısmi** | Lens (Kandil) `canonical_lantern` ile etiketli (tüm senaryolar `verified`). Ortak kaynak-disiplini beş prompt'ta paylaşık ("lens sesi vurguyu değiştirir, hakikat-politikasını değil"). Ama **5 fenerin 4'ü varsayılan KAPALI** (yalnız Zhuangzi açık — Senaryo D + `capabilities.js:18`). |

**Tek-bakış:** 14 maddenin **3'ü tam yapabildik** (arama-adayı-guard · L0 citation_status · lens-etiketi/menşe — hepsi `verified`), **7'si kısmi** (yarısı prompt-seviye, yarısı kod ama tetik-kapılı), **4'ü henüz kod değil** (read-oranı · false-reject · alıntı-taşıma · sayı-kapısı). **En kritik açık madde 8 — "her zaman koş" hâlâ koda inmedi.**

---

## 2 · ÇEKİRDEK BULGU — floor gerçek ama YARISI tetik-kapılı

P1'in iki katmanlı bir floor'u var, ve bu tur ikisini de gördüm:
- **YUMUŞAK floor (her zaman açık):** anayasa/sistem-prompt + iç-kelime çevirisi + persona-disiplini. Düz sohbette bile koşuyor.
- **SERT floor (tetik-kapılı):** candidateOnlyGuard + Mach-audit (Ψ/verdict) + evidence-satırları. **Yalnız `request_evidence:true` iken koşuyor.**

Ürünün vaadi ("yanılmama hakkı, her cevapta") sert-floor'un **her zaman** koşmasını gerektirir. Bugün sert-floor **kullanıcı isteyince** koşuyor — tam da arıza ⑧'in kod-karşılığı. Bu bir hata değil, bir **tasarım-eşiği**: "her zaman koş, nadiren göster" (gizlemek ≠ söndürmek) henüz uygulanmadı. **1 Ağustos'tan önce en yüksek-kaldıraçlı tek kalem budur** (yeni motor değil — mevcut guard'ın tetiğini `request_evidence`'tan çıkarıp varsayılan-açık yapmak; "göster/gizle" ayrı bayrak).

---

## 3 · CANLI DURUM (Chrome, telde doğrulandı)
- **`/api/chat → 401`** — UI girişli görünüyor (Levent, sol-alt) ama oturum-token'ı bayat/expired; motor cevap vermiyor. **İki sorgu da boş döndü.**
- **Sessiz-yutma (UX arızası, badana):** 401'de UI ne hata mesajı ne konsol-logu gösteriyor — sorguyu gösterip **susuyor.** Bu evin tüm varlık sebebi boşluğu göstermek; oysa UI auth-arızasını **örtüyor.** *(Küçük, gerçek, pilot-öncesi kapatılmalı: expired-session → "tekrar giriş yap".)*
- **Uçtan-uca sorgu bende koşamaz:** 401'i geçmek Founder'ın taze girişini ister = **Yasak-Bölge** (kimlik/oturum bana ait değil, token replay etmem). `open` → Founder'a waypoint.
- **5 Kandil'in 4'ü varsayılan kapalı** (`enabledLanterns:["zhuangzi"]`). Consortium canlı-değil; env-override (`PARRHESIA_CAPABILITIES_JSON`) ya da Founder-konsol gerektirir.

---

## 4 · TEST-0 KOŞUM-İSKELETİ — zaten var, tohum atıldı
**Büyük bulgu:** repo Test-0 iskeletini **zaten taşıyor.** `tests/` dizini: `chat-runtime.test.js` (9 test, gerçek handler + stub I/O), `auth.test.js`, `frontend-contract.test.js`, `EVIDENCE_FIXTURES.md` (10 davranış-fikstürü). Desen hazır: **iddia → stub-sağlayıcı → handler → assert.**
- **Test-0 = bu deseni "iddia→damga→anahtar-eşleşme" rubriğine genişletmek.** Ek koşum-iskelem (`floor_probe.mjs`) tam bunu yapıyor: Ψ/citation_status/guard'ı davranışsal assert'liyor.
- **Baseline vs protokol:** aynı iddia-setini (a) çıplak model, (b) P1-anayasalı motordan geçir; damga-eşleşmesini say. Harness ikisini de sürebilir.
- **36-iddialık mühürlü set + tuzak-vakalar (saman/iğne) = Founder-gözü** — koridora/Mach'a girmez (denek = Mach). Anahtar Founder'da.

---

## 5 · 1 AĞUSTOS HÜKMÜ — test edilebilir mi, neyi eksik

**EVET — içeri-test (Test-0) 1 Ağustos'ta koşulabilir.** Gerekçe: motor koşuyor (18+4 test geçti), deterministik floor-mantığı ateşliyor, test-iskeleti mevcut. Test-0 kontrollü/harness-tabanlı bir deney; canlı-anahtar gerektirmez.

**HAYIR — dışarı-pilot (gerçek kullanıcı, 5-Kandil) hazır değil.** Eksikler, öncelik sırasıyla:
1. **Oturum/401** — Founder taze giriş + expired-session UX'i (küçük, pilot-blokeri).
2. **Madde 8 · "her zaman koş"** — sert-floor'u `request_evidence` tetiğinden çıkar (kalbin açığı; orta iş).
3. **5-Kandil** — 4 kapalı fener; consortium'u aç (konsol/env, Founder).
4. **KABLO 4** (güvenlik, mühür bekliyor) + **KABLO 1** (failover, pilot için iyi-olur).
5. **Kod-olmayan 4 madde** (read-oranı · false-reject · alıntı-taşıma · sayı-kapısı) — Test-0'ın *ölçeceği* açıklar; pilot-blokeri değil ama vitrin-vaadi.

**Kısa hüküm:** *1 Ağustos'ta P1 içeriden test edilebilir; dışarıya açılamaz. Motor koşuyor, sert-floor'un yarısı tetik-kapılı, kapı Founder'ın taze-girişinde kilitli.*

---

## LEDGER (CCE)
`verified` — 18 repo-testi geçti (exit 0, bu tur) · 4 harness-senaryosu geçti (Ψ/verdict/citation_status/suppression/closed-lantern) · guard uydurmayı siliyor (test#12) · canlı `/api/chat→401` (telde) · 5/4 fener kapalı (`capabilities.js:18` + Senaryo D) ·
`carried` — madde 6/11/12 (prompt-seviye disiplin, davranışsal koşulmadı) ·
`subtracted` — Ψ-değeri stub (hesap dış-Mach'ın; chat.js yalnız orkestrasyon) · "motor çalışıyor" → "deterministik floor-mantığı çalışıyor, LLM-kalitesi değil" ·
`open` — madde 2/4/5/7/10/13 (kod değil) · uçtan-uca canlı sorgu (401/oturum = Founder) · source.resolve.js okuma-oranı (bu tur okunmadı) · Ψ-hesabının gerçek kalitesi ·
`objections` 1 — **en kritik bulgu "kod yok" değil, "kod var ama tetik-kapılı" (madde 8):** sert-floor mevcut ve doğru koşuyor, ama yalnız `request_evidence` iken. Ürünün kalbi = o tetiği kaldırmak. Yeni motor değil, bir bayrak-kararı.

*Motor koşuldu, yapısal değil davranışsal; üç bağımsız yol, sıfır badana. Diff yok, push yok; taze-giriş + mühür + konsol Founder'ın. Ölç, doldurma; gördüysen damgala; koşmadıysan "koşmadım" de. — CCE (+ çark CW)*
