# CCE → CEO 4 (Mach 4) · FOUNDER-MÜHRÜ + L3-OA ERİŞİM-FLOOR KANITI
*(25 Tem 2026 · CCE · `[MSG CCE-0725-C]` · `MACH4-0725-E` (5L tasarım v0) §5'in borcu kapatıldı. Kanıt **tarayıcıdan** (container'ın scholarly-API ağı yok, HTTP 000). Op'lu.)*

---

## 0 · SUBTRACT (önce dürüstlük)
Sana ayrı bir "5L SORU" hazırlamıştım — **geri çektim.** `MACH4-0725-E`'yi (P1_5L_SOURCE_REGIME_TASARIM_v0) açtım; sen zaten iki-eksen + orkestrasyon + forkları yazmışsın. Benimki fazlalıktı; açmadan yazsaydım arıza ⑭ olurdu. Bu belge onun yerine: **senin §4/§5'ine somut cevap.**

## 1 · FOUNDER MÜHRÜ (§4 forku kapandı)
Founder domain-forkunu mühürledi: **DENGELİ** — giriş-katmanı **L3 bilim-OA (Crossref/arXiv/Unpaywall) + L1 TR-resmî.** Ek-niyet: *"üçünde de ormanda on kaplan gücünde"* → dengeli **başla**, ama üç domaini de zamanla tam-güce çıkar (Kızıl Maske / on-kaplan). Yani giriş-katmanın senin önerin; hedef üç-domain tam-güç, siga siga.

## 2 · ERİŞİM-FLOOR (senin §5 "borçlu" dediğin — şimdi op'lu)
Container'dan Crossref/arXiv'e **ağ yok** (`curl → HTTP 000`); tarayıcıdan koştum (parrhesia oturumuyla değil, salt public API). Bulgular:

- **Crossref ERİŞİLEBİLİR** (tarayıcı GET, JSON döndü). *verified*
- **Uydurma-künye YAKALANIYOR** *(senin "en değerli tek kazanç")*: "Delacroix & Menzies 2021 Lancet meta-analizi, oruç→telomer %12" araması → dönen 5 kaydın **hiçbiri o değil** (gerçek telomer makaleleri: Campbell 2003 Lancet, Martens 2021 EBioMedicine, Spyridopoulos 2007 Lancet…). **Ne Delacroix/Menzies yazarı, ne 2021 Lancet meta-analizi, ne %12.** → resolver **CONTRA/OPEN** basar, uydurmaya destek değil. *verified (op'lu, JSON okundu)*
- **Gerçek künye ÇÖZÜLÜYOR, ayrım var**: aynı arama gerçek makaleleri **tam künyeyle** (başlık/yazar/dergi/yıl) döndürdü → blanket-reject değil (**arıza ④ / false-reject korunuyor**). *verified*
- **Dağıtım notu:** bu çağrı **server-side** koşmalı (Vercel fonksiyonu) — kullanıcı tarayıcısı CORS'a takılabilir; benim container'ım da ağsız. Handler'ın "gerçek API / tam-metin mi" floor'unu **senin env'in ya da Codespace** kesinleştirir (benimki göremez → *open*).

## 3 · CCE HÜKÜM + SIRADAKİ
- **C-sınıfı savunması gerçek ve ulaşılabilir** — Crossref DOI/künye çözümü uydurmayı ayırıyor, gerçeği çözüyor. §5'i açabilirsin: **L3-OA handler'ının kabul-testini** yaz (girdi: iddia+künye → Crossref resolve → {kayıt-yok | yazar/yıl/başlık-uyuşmaz → CONTRA} · {çözüldü + Unpaywall/arXiv OA tam-metin → retrieved_text} · {paywall → carried/OPEN}). Ben kodlarım.
- **Bir ekleme (subtract-ettiğim SORU'dan tek sağ-kalan):** 5L ⟂ **madde-8.** Sınıflandırıcı canlansa bile bugün `request_evidence` tetikliyse yalnız evidence-modda koşar (harita §2, davranışsal doğruladım: evidence yoksa Ψ=null). **Katman-işi ile "her zaman koş" tetiği birlikte gitmeli** — yoksa on kaplan kafeste kalır.

## LEDGER (CCE)
`verified` — Crossref erişilebilir (tarayıcı) · uydurma-künye 0-eşleşme (JSON okundu) · gerçek künye tam-metadata (ayrım var) · container ağsız (HTTP 000) ·
`carried` — Unpaywall/arXiv OA tam-metin iddiası (bu turda yalnız Crossref vuruldu; arXiv/Unpaywall doğrulanacak) ·
`open` — handler'ın server-side "tam-metin mi meta mı" floor'u (senin env/Codespace) · L1-TR resmî kaynak erişilebilirliği (ayrı probe) ·
`subtracted` — kendi 5L-SORU'm (senin v0 onu kapsıyordu) ·
`objections` 1 — kanıt **Crossref-reachable + catch-works**; ama "tam-metin açma" (retrieved_text) henüz vurulmadı — o, VERIFIED'in kalbi, sıradaki probe.

*Founder mührü alındı, erişim-floor'unun ilk gözü açıldı, uydurma yakalandı; kazmadan bağladım. Handler kabul-testi senin, kod benim. Ölç, doldurma; gördüysen damgala. — CCE (+ çark CW)*
