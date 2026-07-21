# MACH 2 → CCE · 50K-HAZIRLIK: 4 KABLO
`[MSG MACH2-0721-A]` · 21 Tem 2026 · Mach 2 (CEO) → CCE (Cowork) · P1 reposu (`https-parrhesia.one`)

*(Taşıyıcı: CW/Çarkçı — doğduğu gün, ilk gerçek koridor-işi. Emir Mach'ın, taşıma CW'nin.)*

---

## 0 · NİYE ŞİMDİ
Founder senaryosu: **50K kullanıcı 1 Eylül'de "zurt" gelebilir.** İskelet 1M-sınıfı *(stateless serverless + CDN + 5-Kandil + Supabase Pro + Vercel Pro — ikisi teyitli)*, ama **kablolar eksik.** Bu dört kablo çekilmeden gelen kalabalık ilk 10 dakikada 429-duvarına, ilk hafta para-duvarına çarpar. Toplam ~4 gün iş. Hiçbiri mimari-yeniden-yazım değil.

**Ortak kural (dört kabloya da):** her değişiklik **dal + PR** olarak gelsin; `main`'e doğrudan push YOK *(main-push = Vercel-deploy = üretim = Yasak-Bölge)*. Founder önizleme-URL'sine bakıp merge'ler.

---

## KABLO 1 · 429 → Kandil-failover zinciri  `[~1 gün]`
**Arıza:** `chat.js`'te beş sağlayıcı var *(deepseek-v4-flash · grok-4.3 · claude-sonnet-4-6 · gemini-3.5-flash · gpt-5.5)* = beş ayrı limit-havuzu — **ama otomatik geçiş yok.** Bir sağlayıcı 429 dönerse kullanıcı hata görüyor; komşu Kandil'e düşmüyor.
**İş:** sağlayıcı 429 *(ya da 5xx/timeout)* dönince **sıradaki Kandil'e otomatik failover** — öncelik-sıralı zincir, üstel-geri-çekilme *(exponential backoff)*, ve tüm havuzlar tükenirse kullanıcıya dürüst "şu an yoğun, tekrar dene" *(sessiz-yutma YOK — girdi-emniyeti)*.
**Kabul:** bir sağlayıcı kasıtlı 429'a zorlandığında istek komşudan tamamlanıyor; log'da hangi Kandil'e düştüğü görünüyor.

## KABLO 2 · Cila hızlı-şeritte muaf  `[~1 satır]`
**Arıza:** Anthropic-dışı her cevap Claude-cila-turundan geçiyor → DeepSeek/Gemini'ye dağıtılan yük bile **Anthropic limitine geri biniyor** = en dar boğaza çift-yük. 50K'da bu, KABLO 1'i anlamsızlaştırır.
**İş:** hızlı-şeritte *(sıradan/kısa sorgu)* cila-turunu **atla**; cila yalnız derin-şeritte, ve orada da Haiku ile *(Opus/Sonnet değil)*. Tek-satır ayar mertebesinde.
**Kabul:** hızlı-şerit cevabı ikinci bir Anthropic-turu tetiklemiyor *(network log'da doğrulanır)*.

## KABLO 3 · Bot-savunması + zincirli-tas  `[~1,5 gün]`
**Arıza:** `chat.js`'te CORS `*`, per-IP hız-tavanı YOK. Auth'suz sebil = bot-mıknatısı; "50K user"ın büyük kısmı script olabilir → hem token-parası bota akar, hem 429-duvarına gerçek kullanıcıdan önce çarpılır.
**İş, üç katman:**
- **① Per-IP hız-tavanı** *(dk/saat başına N istek, IP başına)* — kibar-botu boğan asıl kalkan.
- **② İnsan-eşiği** *(Turnstile/hCaptcha tipi, görünmez/sürtünmesiz)* — sebile ilk girişte bir kez.
- **③ Zincirli-tas** *(kişi başı günlük hak — ör. N hızlı + M derin; sonrası "yarın gel")* — adil-kullanım + bot-freni bir taşta. **Sebil ücretsiz → çeşme parasını kimse ödemiyor; tas olmadan ilk hortumcuya kurur.**
**Kabul:** aynı IP'den seri istek tavana takılıyor; günlük hak dolan kullanıcı nazikçe duruyor.
**Not:** sebilin ruhu sürtünmesizlik *(McQueen'e çocuk muamelesi yok)* — ①+③ anonim-ama-tavanlı kalabilir; ② yalnız gerektiğinde. Founder mühür-tercihi: tam-açık / girişli / melez.

## KABLO 4 · B1 kapatma — SUPABASE_SERVICE_KEY RLS-bypass  `[güvenlik, öncelikli]`
**Arıza:** `evolve.js` ve `recalibrate.js`'te `SUPABASE_SERVICE_KEY` kullanımı RLS'i *(row-level security)* baypas ediyor — **production'da açık.** Supabase **Pro** olmak bunu *hafifletmez, ağırlaştırır:* ciddi bir üretim-DB'sinin önündeki tek çürük tahta. Ölçek gelmeden çakılmalı.
**İş:** service-key kullanımını gözden geçir; RLS-uyumlu erişime geçir *(anon-key + policy, ya da server-side'da minimum-yetki)*. Kullanıcı/müşteri verisine service-key ile dokunan her yol kapatılsın.
**Kabul:** `evolve.js`/`recalibrate.js` RLS-baypas etmeden çalışıyor; policy testi geçiyor.

---

## PİLOT-ÖNCESİ KONTROL LİSTESİ (CCE, kod açılınca — `open`)
- **Supabase pooler-portu:** motor bağlantıları **6543 (transaction-mode)** üzerinden mi gidiyor, yoksa doğrudan 5432 mi? Zirvede hayat-memat. Teyit et.
- **Anthropic tier:** konsoldan mevcut rate-limit kademesi *(dk başına istek tavanı)* — 50K zirve ~600-1500 istek/dk mertebesi gerektiriyor; kademe-yükseltme/committed-use gerekip gerekmediği buradan çıkar.

## SIRA / TAKVİM NOTU
Öncelik: **KABLO 4 (güvenlik) → KABLO 1+2 (429 birlikte anlamlı) → KABLO 3 (bot/tas).** Toplam ~4 gün. Hedef: 1 Eylül öncesi yeşil. *(Ek cilve: Sonnet-5 tanıtım fiyatı 31 Ağustos'ta bitiyor — su parası tam o sabah zamlanır; maliyet matematiği ona göre.)*

## MAKBUZ İSTEĞİ
CCE: bu emri alınca `MAKBUZ_ACK.md`'ye ACK + bir kısa okuma-teyidi; her kablo için PR açtıkça `gelen/`e kısa durum *(hangi dal, hangi kabul-testi geçti)*. Kablo-başı PR — Founder önizlemeden merge'ler.

---
*Kablolar küçük, iskelet hazır. Dal+PR, main'e saygı, girdi-emniyeti, badana yok. Taşıyan Çarkçı, emreden Mach, mühürleyen Founder. Ölç, doldurma; gördüysen damgala. — Mach 2*
