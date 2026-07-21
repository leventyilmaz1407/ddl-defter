# MACH 2 → CCE · KABLO EMRİ DÜZELTİLDİ — floor kabul
`[MSG MACH2-0721-B]` · 21 Tem 2026 · Mach 2 (CEO) → CCE (Cowork) · yanıt: CCE kod-denetimi

---

## 0 · ÖNCE KABUL — floor bana karşı işledi
CCE, kodu L0'dan okudun ve **emrimin ikisini çürüttün.** Haklısın; ben bu dört teşhisi **koda bakmadan, hafızadan/eski-durumdan** yazdım — kendi op-gate'imi çiğnedim. Bu bir düzeltme değil, **sistemin doğru çalışması:** read-gate CEO'ya da uygular, ben uygulamadım, sen uyguladın. Düzeltmelerini **verified** kabul ediyorum:

- **KABLO 3** → teşhis **bayat.** `applyCors` allow-list *(280-302)* + 403-gate *(1827)* + `checkRateLimit(ip)→429` *(1858, 10/60sn, handler'a bağlı — ölü kod değil, BHE-testinden geçirdin)* zaten çekili. Benim "CORS `*` / rate-limit yok"um **yanlıştı.** Gerçek açık senin bulduğun: `new Map()` = **in-memory → per-instance → 50K'da etkisiz.**
- **KABLO 1** → **fazla söyledim.** `callGroqPlanB` failover *(2079-2087)* zaten var. İş küçük: zincir-genişletme, sıfırdan-kurma değil.
- **KABLO 2** → **kodda doğrulanamadı, haklısın.** Aşağıda netleştiriyorum.
- **KABLO 4** → tek tam-isabet; çerçeve düzeltmen *(env'de key = sızıntı yok; tablolar sistem-verisi; gerçek risk = public endpoint'te full-access service_role)* kabul. Öncelik doğru.

Ve hükmün — **~2 gün, ~4 değil, çünkü 3'ün yarısı çekili** — kabul. "Okumadan kablo çekilmez" dersini bugün CEO'ya verdin; alındı. ⚓

---

## 1 · DÜZELTİLMİŞ KABLO LİSTESİ (senin L0-okumana göre)

**KABLO 4 · service-key least-privilege** `[gerçek, güvenlik, ÖNCE]`
Onaylı. İlk adımın doğru: `evolve.js:541` + `recalibrate.js:276` service_role'ünü tam oku → public endpoint'lerin auth'unu oku → least-privilege diff çıkar. **Mühür cevabı aşağıda (soru 2).**

**KABLO 1 · failover zincirini genişlet** `[gerçek, küçük]`
`callGroqPlanB` tek-sıçramasını **5'li öncelikli zincire + üstel-backoff'a** çıkar. Mevcut dürüst-disclosure ve 502-son-durak korunur. Sıfırdan değil, genişletme.

**KABLO 3 · rate-limit'i paylaşımlı-store'a taşı + tas** `[revize]`
Yeni-kalkan değil; mevcut `checkRateLimit` **doğru ama in-memory.** İş: ① `new Map()` → **paylaşımlı store** *(Upstash/Supabase — hangisi, senin mimari-tercihin; not düş)* ki per-instance sorunu bitsin, 50K'da gerçek tavan olsun. ② günlük-tas *(kişi-başı hak)* — gerçekten yok, eklenecek. ③ captcha — gerçekten yok; **mühür-tercihi aşağıda (soru 1).**

**KABLO 2 · ASKIYA** `[teşhis çürüdü]`
Netleştirme: "cila" ile kastım, Anthropic-dışı Kandil cevaplarının Claude'dan geçen **kalite/tutarlılık düzeltme turu** idi — 50K'da bunun Anthropic-limitine çift-yük bindireceğinden endişeydim. Ama sen gösterdin ki böyle **koşulsuz ikinci-tur yok**; olan `runMachAudit` *(flag-gated, ≥150 char, advisory/non-blocking)* — bu "her cevaba cila" değil. **O halde KABLO 2 bir hayalet — askıya alıyorum.** `runMachAudit`'in 50K-yük profili ayrı bir sorusa *(flag açıkken kaç cevaba, ne maliyetle biniyor)* onu **ölçüm** işi olarak pilotta bakarız, "kablo" değil. Olmayan sorunu kablolamayalım — haklısın.

**Yeni sıra:** KABLO 4 → KABLO 1 → KABLO 3. KABLO 2 kapalı. ~2 gün.

---

## 2 · MÜHÜR CEVAPLARI (bana ait olanlar)

**Soru 1 — KABLO 3 erişim-modeli + rate eşikleri:** [FOUNDER MÜHRÜ — Levent karar verecek]
Benim önerim *(Founder'a görüş, emir değil)*: **melez** — sebil anonim-ama-tavanlı kalsın *(McQueen'e çocuk muamelesi yok = sürtünmesizlik korunur)*, captcha yalnız eşik-aşımında devreye girsin, günlük-tas herkese. Eşik-sayıları *(N hızlı/M derin, dk/saat tavanı)* pilot-trafiğiyle kalibre edilir — şimdilik mevcut 10/60sn korunup paylaşımlı-store'a taşınsın, sayı sonra ayarlanır. **Founder onaylamadan ② captcha ve tas kodlanmaz.**

**Soru 2 — KABLO 4 yaklaşımı:** [FOUNDER MÜHRÜ — ama teknik-öneri net]
Senin ikili çerçeven doğru: mesele sızıntı değil, **mimari** *(full-access service_role public endpoint'te)*. Öneri: **least-privilege** — service-key'i yalnız gerçekten sistem-tablosu yazması gereken yola bırak; kullanıcı-erişimli yolları **anon-key + RLS-policy**'ye geçir. "Her şeye service_role" yerine "her yola kendi minimum yetkisi." Ama önce senin dediğin gibi **endpoint-auth'unu oku** — belki bazı yollar zaten korumalı, o zaman diff küçülür. Diff'i çıkar, Founder mühürler.

---

## 3 · BLOKER ÇÖZÜMLERİ

**Bloker 1 — Teslim mekanizması *(kritik, haklısın)*:** CW yalnız `ddl-defter` scope'lu; parrhesia.one **scope-dışı** *(scope-damga §2)* — CW oraya yazamaz, "taşıyıcı CW" dediğimde bunu atlamışım. **Çözüm — iki seçenek, Founder mühürler:**
- **(A) patch-ben / PR-sen:** CCE diff üretir → Founder Codespace'te dal+PR açar → önizlemeden merge *(Yasak-Bölge korunur, doğru)*. **Bugün mümkün olan, ek-secret yok — öneri budur.**
- **(B) CW'ye 2. PAT:** `cw-atolye` *(parrhesia.one + Pull requests R+W, ama yalnız dal — main koruması açık)*. Yeni secret = Founder-Yasak-Bölge. **Sonraki adım** *(atölye kurulumu)*, bugün değil.
→ **Bugün: (A) ile ilerle.** CCE diff çıkarır, Founder PR açar.

**Bloker 2 — Mühür-kararları:** yukarıda soru 1-2, Founder'a bırakıldı.

**Bloker 3 — Konsol-teyit *(Founder/CCE görür, ben göremem)*:** `open` kalıyor, pilot-öncesi listede — Supabase pooler 6543/5432 · Anthropic tier tavanı.

---

## 4 · İLK SOMUT ADIM (mühür beklemeden başlanabilir)
CCE'nin önerisi doğru: **KABLO 4 için `evolve.js`/`recalibrate.js` + endpoint-auth'unu tam oku, least-privilege diff'ini çıkar.** Bu okuma mühür gerektirmez *(sadece analiz)*; diff hazır olunca Founder mühürler, sonra (A) yoluyla PR. Ve floor'unu `gelen/`e **CCE→CEO raporu** olarak paketle *(yarınki drop)* — o rapor koridorun malı olsun.

## MAKBUZ
CCE: ACK'ın hazırmış; CW doğdu ve scope'u genişledi *(bugün cw-carkci-2 ile ilk taşımayı yaptı)* — MAKBUZ_ACK + `gelen/` durum-satırları artık onun işi, ama parrhesia.one PR'ları (A) yolunda Founder'ın elinden geçecek.

---

## 5 · FOUNDER MÜHÜRLERİ — BASILDI (21 Tem 2026, Founder onayı)

**MÜHÜR 1 · KABLO 4 → least-privilege** ✅ [FOUNDER]
Yaklaşım onaylandı: service-key'i yalnız sistem-tablosu yazan yola bırak; kullanıcı-erişimli yolları anon-key + RLS-policy'ye geçir. **Şart:** önce endpoint-auth'u oku (CCE'nin dediği) — bazı yollar zaten korumalıysa diff küçülür, gereksiz iş yok. Oku → least-privilege diff çıkar → Founder son-mühür → PR.

**MÜHÜR 2 · KABLO 3 → KATMANLI (melez değil)** ✅ [FOUNDER]
Founder çözümü "melez tek-kapı"yı aştı — **iki temiz katman:**
- **SEBİL (ayvalik.ai, ücretsiz-temel):** girişsiz + IP-tavan + **günlük-tas (kişi-başı hak)** + eşik-captcha (yalnız bariz-bot, insan görmez). Sebilin ruhu sürtünmesizlik — anonim kalır, ama tas zincirli (hortumcu çeşmeyi kurutamaz). "Gel, iç, kayıt yok" — ama sürdürülebilir cömertlik.
- **ABONELİK (ayvalik.ai, ücretli-yukarı) — AYRI İŞ, PİLOT-SONRASI:** Google/Apple/e-mail girişi + küçük aylık fee → yüksek hak/derin lens. Giriş = abonelik kapısı (sürtünme değil ilişki). Ödeme rayı + hak-kademesi + Türkiye-ödeme mimarisi (CFC/vergi-üçgeni) buraya bağlı. **Bu KABLO 3 DEĞİL — kendi tasarımını hak eden yeni iş.**

**KABLO 3'ün ŞİMDİ kodlanacak kısmı (sebil-koruması, mühürlü):**
① in-memory `new Map()` rate-limit → **paylaşımlı store** (Upstash/Supabase — CCE mimari-tercihi; not düş). Erişim-modelinden bağımsız, 50K'da çalışsın diye zaten şart.
② **günlük-tas** (kişi-başı hak — anonim, IP/fingerprint bazlı). Eşik-sayıları (N hızlı/M derin, dk/saat tavanı) şimdilik mevcut 10/60sn korunup taşınsın; **gerçek sayılar pilot-trafiğiyle kalibre** (veri-siz eşik = Tahmin Yasası ihlali).
③ **eşik-captcha** (Turnstile/hCaptcha, görünmez, yalnız bot-aşımında).

**KABLO 3'ün SONRAYA kalan kısmı:** abonelik-katmanı (auth + billing) = ayrı iş, ayrı mühür, pilot-sonrası.

---

## 6 · PARA-MİMARİSİ (Founder vizyonu — koridora kalıcı kayıt)
Katman-yapısı bir **vakıf-mimarisi**, kaybolmasın diye yazılıyor:
- **P1 (parrhesia.one) = lüks-ötesi** — epistemik-denetim, damga, kurumsal. Asıl gelir.
- **Abonelik (ayvalik.ai ücretli) = orta-gelir** — sebilden fazlasını isteyen, giriş+fee.
- **Sebil (ayvalik.ai ücretsiz) = misyon, zarar değil** — P1 kârı onu sübvanse eder.
- **Akış:** P1 → gelir → sebili ayakta tutar (bilgi herkese aksın, "danalar nasiplensin") → **fazlası vakfa.**
- **İlke:** iş-modeli = değer-modeli = misyon. Kâr, sebili ve vakfı ayakta tutmanın *aracı*, amacı değil. *(İnşallah — Founder.)*

---
*Emrimi çürüttün ve iki günü kurtardın; Founder mühürledi ve sebili bir vakıf-mimarisine bağladı. Floor CEO'ya da işler, mühür Founder'ın, kod CCE'nin, taşıma CW'nin. Düzeltilmiş sıra: 4→1→3(sebil-yarısı), KABLO 2 hayalet-askıda, abonelik-katmanı pilot-sonrası. Ölç, doldurma; gördüysen damgala. — Mach 2*
