# AYVALIK.AI — tek karar dosyası (dağınık kararların toplandığı yer)

`masa:` **CW · Çarkçı (koridorun kendi eli)** · `an:` 2026-08-12T14:10Z · `damga:` bkz. §6 (satır satır)
`kaynak:` `ddl-defter` çalışma ağacı (bu turda diskten) · `gelen/inis-328` · `gelen/inis-1079` · iki Cowork penceresinin aktardığı Founder kararları (chat, koridorda dosya değil)
`neden bu dosya:` Ayvalık kararı **dağınık değildi — dağıtılmıştı.** On dört ayrı dosya, beş kez dönen hüküm, ve bir "hazır" denip **diske hiç inmemiş** karar belgesi. Tek yere, tek kez, dürüst atıfla koyuyorum.

---

## ERRATA — 12 Ağu, kanon bağından sonra (bu dosya = B2)

Bu belge artık tek başına değil: `AYVALIK_KANON_BAGI.md` (Onondaga·007, defter id 1197) üç karar belgesini bağladı — **B1** `TELEFON_KAPISI_0807` (Çarkçı, 7 Ağu, sha16 `fb6a617d`) · **B2 = bu dosya** · **B3** `AYVALIK_KARAR_DOSYASI` (defter id 1186). Üçü çelişmiyor; **birbirini bilmiyordu.** Kanon, bu dosyanın (B2) üç boşluğunu ölçümle kapattı — aşağıdaki üç kalemi bu ışıkta oku:

- **§6·8 (giriş açık/kapalı) ve §7 (logTurn) DÜŞTÜ — birleştiren tez: İKİ KAPI.** *Sebil kimliksiz (bedava) · Ücretli oda kimlikli (telefon kapısı).* Founder buldu. Sebil girişi kimliksiz kalır; kimlik yalnız Plan A/B'nin kapısında. KVKK'nın dört metni böyle korunur.
- **"İçeriksiz sayaç lazım" (§7 logTurn) — ZATEN KURULMUŞ** (`carried`, Onondaga ölçtü): `sebil_turn` tablosu 9 Ağu'da **ayrı projede** (`ayvalik-sebil` · `ykatpdkrmiaeldgjbcqc`) kuruldu — 12 kolon, **içerik/metin kolonu 0** (`in_chars`/`out_chars` yalnız uzunluk). Akar Su şartı yapısal olarak sağlanmış. B2 bunu bilmiyordu çünkü ayrı projeden habersizdi.
- **§6·8'in "giriş" endişesi — telefon kapısı şeması İNMİŞ** (`carried`): `sebil_kapi` canlıda hazır (HMAC parmak izi, kod 5 dk TTL, 5 yanlış = 30 dk kilit). **Karar değil, kod işi.**
- **428 = guard'ın işi** (§4 ile tutarlı): B3'ün "428 kapanmadan para yok"u ile B2 guard adım 3–5'i **aynı çivi, iki ad.**

Bu turda kendi elimle ölçemediğim (kapsam dışı: Supabase/ayrı proje) her şey yukarıda `carried`. Kanon dosyası koridora `inis-eli` ile (id 1197) inecek.

**B4 eklendi — `gelen/PAC-0812-A_AYVALIK_AI_DOSYASI.md`** (Pacioli·M7·KASA, 14 M7 dosyasından; CW eliyle verbatim indi, 10.255 B · sha256 `191b8046b967de9a`). B4 üç kalemi keskinleştiriyor: **VakıfBank'ta "Tekrarlı Tahsilat" VAR** (recurring — §5'te "sen kurarsın" endişemi hafifletir; oran ilan edilmiyor, asıl istek *valör*), **Stripe TR yok teyitli** (44 ülke listesinde değil), **iyzico %4,29 + 0,25 TL · 3 hafta valör**. B4'ün bir kısmı **bayat**: kaynak dosyaları ≤5 Ağu olduğu için "mimari unexamined" ve "One Plus 29€ (Plan B yok)" diyor — **ikisini de 1186 (12 Ağu) devirdi**: tek provider + Mach-1 kararlaştı, fiyat Free/29/290'a çıktı. Yani B4 envanterdir, en taze hüküm değil; taze hüküm 1186 + bu dosya.

**KARAR 12 Ağu (Founder, chat):** *"iyi bir Claude modeli en iyisi olur, zaten API var p1 için."* → **Sağlayıcı = Anthropic Claude, tek** — Nemotron 3.5 Lightning (yerel/tesisat hipotezi, ayrı asses) ve DeepSeek-V3 **beyin adayı olmaktan düştü**. p1'in mevcut Anthropic API'si yeniden kullanılacak. **HÂLÂ AÇIK — ve marj tam burada:** *hangi Claude kademesi* (haiku vs sonnet vs opus). KillTest yeni haliyle: 20 TR sağlık/hukuk sorusu × kademe, *guard-tetiklenme × token maliyeti*; `sebil_kapi` hacmiyle birlikte "kaç model/marj"ı bitirir. Üç teknik şart: (1) API anahtarı repoya girmez, env; (2) ayvalik yakımı p1'den **ayrı metrelenir** (`sebil_turn` token kolonları); (3) guard/API kullanım izni yazılı olsun (§6·3 devam ediyor).

**KADEME 12 Ağu (Founder eğilimi + CW hükmü):** Founder *"opus 4.8 ya da Sonnet, en üst max effort"* dedi. Fiyat (referanstan ölçüldü, çıktı $/1M): **Opus 4.8 = 25** · **Sonnet 5 = 15** (intro 10, 31 Ağu'ya) · Haiku = 5. **Uyarı, badana yok:** *max effort = maksimum düşünme tokenı, çıktı olarak faturalanır* → opus × max × bedava-sınırsız = **en yüksek yanma**, ve max effort **428'i (uydurma atıf) azaltmaz** — onu guard + gerçek kaynak kapatır, yani yanlış kaldıraç. **CW hükmü (iki-kapı kademesi):** Sebil (bedava) = **Sonnet 5 · high** (max değil); Ücretli oda (Plan A/B) = **Opus 4.8 · xhigh/max**. Premium gelirin olduğu yere. **Karar KillTest'e:** opus-max vs sonnet-high × 20 TR sağlık/hukuk sorusu → guard-tetiklenme farkı **VE** token maliyeti; en iyi *lira-başına-428* kazanır. Operasyonel: max effort'ta `max_tokens ≥ 64K`; effort `output_config.effort`'ta (`budget_tokens` 400 verir).

---

## 0 · Önce ışıkta bırakılan boşluk (op-gate)

Öbür pencerelerde iki kez *"karar belgesi hazır: `AYVALIK_AI_KARAR.md`"* dendi. Bu turda `find` ile ölçtüm: **o dosya diskte yoktu.** Diske yazmak ≠ inmek (NEREYE_NE §3), ve diske bile yazılmamıştı. Bu satırla o boşluk kapanıyor — ama içeriğin çoğu **başka pencerelerde ölçüldü, bu elde değil.** Onları `carried` damgalıyorum; kendi opumla karıştırmıyorum. Ev kaidesi: *"var ≠ doğru", "hatırladım ≠ okudum".*

**Kapsam sınırı, açıkça:** CW'nin token'ı yalnız `ddl-defter`'e Read+Write (CW_CLAUDE §2). `parrhesia.one` deposu, Supabase `ev_defteri`/`sebil_kapi` tabloları ve canlı `ayvalik.ai` sitesi **bu turda benim erişimimde değil.** O kaynaklara dayanan her sayı aşağıda `carried` ya da `open`; hiçbiri `verified` değil.

---

## 1 · YÜRÜRLÜKTEKİ HÜKÜM — ve neden eski satırlara bakma

Karar **beş kez döndü.** Defterin eski satırını okuyan yanlış hükmü canlı sanır. Zaman çizgisi (aktarılan):

```
v0.4                         zemin
8 Ağu   → "p1 motorunu kullanır"
11 Ağu  → askıya/excluded (iki kez)
12 Ağu  → Founder devirdi: "hemen açılabilir, assess et"   ← YÜRÜRLÜKTE
```

`carried` — Founder'ın 12 Ağustos hükmü (Supabase `ev_defteri` id 1186, öbür pencereden aktarıldı; id 881 = düşen askı kararı). **Bu elde Supabase okunmadı**; doğrulaması o erişimi olan pencerede.

> **Kural:** Bu dosyadan sonra "ayvalık askıda mı" diye soran, önce buraya baksın. Askı **düştü.** Eski "excluded" satırları `subtracted` — geçmişte doğruydu, bugün değil.

---

## 2 · ÜRÜN — ne olduğu (aktarılan, sabit görünen kısım)

| kalem | hüküm | damga |
|---|---|---|
| Ne | Kasabanın kendi yapay zekâsı; iki ücretsiz kapı: **HUKUK** *(İştar Gözaydın izi)* + **SAĞLIK** *(Müftüoğlu izi)* | carried |
| Ses | *"Ayvalıklı ses ister, yazmaz"* — sesli oturum yazılıdan pahalı; free kotası ses için ayrı | carried |
| İki wizard | Haklarınız (Hukuk) · Sağlığınız (Sağlık) — içerik henüz yazılmadı | carried/open |
| Kapı | `ayvalik.ai/sebil.html` canlı, TR/EN/EL · vesika + KVKK var | carried (inis-1079 `verified`, 12 Ağu 04:56Z, başka masa) |

**İsim — pazarlık dışı:** *"İştar'ın başında olduğu"* ile *"İştar tarzında"* iki ayrı satır. İlham bedava, bugün başlar; **gerçek kişi imzalı sözleşme + ücret + editoryal sorumluluk + çekilme maddesi ister.** İsim, imzadan önce **hiçbir duyuruya girmez.** (İmza = Yasak-Bölge, CW_CLAUDE §4.)

**Klon — pazarlık dışı:** yaşayan ünlü sesi izinsiz **asla**; vefat etmişte tek kapı aile rızası. En temiz yol üçüncüsü: **yaşayan, razı, sözleşmeli gerçek bir Ayvalıklı ses.**

---

## 3 · YÜRÜRLÜKTEKİ MİMARİ — ve motorun asıl değeri

**Mimari (aktarılan, 12 Ağu):** parrhesia-benzeri ama **tek sağlayıcı + Mach-1 muhafız katmanı** — beş fener DEĞİL. Sebep: maliyet düşük, marj korunur.

**Motorun asıl değeri model seçimi değil — üretim-sonrası guard katmanı.** `carried` (parrhesia.one `api/chat.js`, bu elde okunmadı; kapsam dışı depo). Diziden belirleyici adım: cevap *"kontrol ettim / doğruladım / siteye gittim"* diyor **ve** o turda hiçbir op koşmadıysa, guard cevabı **süslemez — siler, dürüst karşılığını koyar.** Sistem promptu "yapma" der; guard yaptıysa yakalar.

Atıf zemini dört damgayı ayırır — evin ayırt edici çentiği: `verified` (var **ve** künye eşleşti) ≠ `exists` (var, künye karşılaştırılmadı) · `subtracted` (alan tutmadı) · `contra` (yok). Çoğu sistem `exists`i `verified` sayar; bu ev saymaz.

**Karar: seçenek C (aktarılan).** Motoru tümüyle çatallama (7.5K satır iki yerde bakım) → hayır. Ortak paket → doğru ama şimdi değil (parrhesia.one canlı, yük taşıyor). **Yalnız guard katmanını al (~400 satır kaba tahmin), ince kendi kapını yaz.** İki repo da kararlıyken sonra `@ddl/kapi` paketine çıkar.

---

## 4 · 🔴 TEK DEMİR ÇİVİ — 428 kapanmadan para alınmaz

Canlı ayvalık'ta **8 Ağustos Founder testinde uydurma atıf** çıktı — evin en ağır suçu (`carried`). Paralı bir üründe, üstelik **sağlık ve hukuk** alanında, uydurma atıf = gerçek zarar.

→ **Açılış = POS onayı + 428 muhafız portu kapanışı.** İkisi de ~21 Ağustos'a denk (aktarılan takvim). Para, 428 yeşil olmadan **akmaz.** Bu bir tercih değil; kapının varlık sebebi.

---

## 5 · KALAN İŞ — beş kalem (aktarılan iş bölümü)

Hazır olanlar: kapı canlı (TR/EN/EL) · vesika + KVKK · telemetri tablosu · POS başvurusu (bugün gitti).

| # | iş | el |
|---|---|---|
| ① | **428 muhafız portu** (tek demir çivi, §4) | Çarkçı |
| ② | iki wizard içeriği (Haklarınız · Sağlığınız) | Zeytin |
| ③ | hukuk rafı | SAHA |
| ④ | TL fiyat sayfası | NEVPAÇO |
| ⑤ | vesika–para hizası TR | Zeytin |

**Ödeme entegrasyonu 1 Eylül'de gerekmiyor** (`carried`): şema `provider='manual'`. Gereken üç şey — **bir fiyat, bir sayfa, bir IBAN.**

---

## 6 · FOUNDER'A BIRAKILAN — Yasak-Bölge, CW karar VERMEZ, görünür KILAR

Aşağıdakiler para belirler ve/veya imza/fiyat/anayasa alanına girer → CW_CLAUDE §4 gereği **yalnız Founder mührü.** Ben yalnız ışıkta bırakıyorum:

| # | ne | neyi kilitliyor | el |
|---|---|---|---|
| 1 | **Sebil aylık yakım tavanı** | free kota + marj | **SEN** |
| 2 | **Kur mekanizması** — sabit mi, canlı mı | 29€/290€ ↔ TL | **SEN** |
| 3 | **Devirme mührü** (guard kullanım izni — aynı ev ama yazılı olsun) | §3 aktarımının hukuki zemini | **SEN** |
| 4 | **Mimari sayısı** — tek model mi, çok mu | free kotası, One Plus içeriği, **marjın tamamı** | **SEN** (12 Ağu "tek sağlayıcı" dedi; **fiyat yazılmadan teyit**) |
| 5 | **Model** — KillTest'siz seçilmez | zayıf model ANAYASA'yı çok ihlal eder → guard çok tetikler → kullanıcı sürekli "kaynak açmadım" görür. **Ucuz olan değil, guard'ı en az tetikleyen kazanır.** 20 soru × 2 model, tetiklenme sayımı | ikiniz |
| 6 | **Tam ticaret unvanı** | üye işyeri başvurusu + fatura + şema `merchant_entity` varsayılanı — tek cümle üç kapı | **SEN** |
| 7 | **Ses maliyeti** — STT + TTS sağlayıcı + dakika fiyatı | sesli free kotası (yazılıdan ayrı) | **SEN** |
| 8 | **Giriş açık mı kapalı mı** — `index.html` Google/Apple düğmeleri şu an hiçbir şey yapmıyor | ANAYASA "ücretsiz, sınırsız" → bence kimliksiz, rate limit + vesika eşiği yeter; ama karar senin | **SEN** |

---

## 7 · İKİ AÇIK ÖLÇÜM — badana değil, ışıkta

- **⚠ logTurn ANAYASA'yı ihlal eder** (`carried`): parrhesia.one her turu `prompt_raw` + `response_raw` ile Supabase'e yazıyor. ayvalık ANAYASA §2: *"saklamazsın, hatırlamazsın."* → `logTurn` **olduğu gibi alınamaz.** Yalnız **içeriksiz sayaç** kalabilir: gecikme, token, hata tipi, guard tetiklendi mi. Metin **asla.** Motoru körü körüne kopyalamanın kırmızı çizgisi.
- **⚠ Nöbetçi ↔ anayasa uçuşması** (`carried`, öbür pencerenin 9 Ağu ölçümü): `ANAYASA v0.4` *"araman var"* derken `NOBETCI_ANAYASA v0.3` *"aramam yok"* diye test ediyor → nöbetçiler v0.4'e çekilmeli, yoksa **doğru davranışı hata sayarlar.**
- **⚠ ESM ⇄ CommonJS** (`carried`): parrhesia.one ESM, ayvalik.ai CommonJS. Guard paylaşmak için ayvalik.ai ESM'e geçmeli — küçük iş, sessiz geçilirse dağıtımda patlar.

---

## 8 · TAKVİM NOTU

Ağustos, Ayvalık'ta açıkhavanın **en pahalı** ayı; **Eylül ortası aynı panolar belirgin ucuzlar.** Kampanya 15 Eylül lansmanına bağlanırsa hem doğru zaman hem daha az para (`carried`). Billboard markaya değil **ürüne** işaret etmeli — *"Ayvalıklının iki büyük belası: legal ve health."*

---

## 9 · DAMGA — bu dosyada ne neyle basıldı

◇ **VERIFIED (bu turda op ile, `ddl-defter` çalışma ağacı):**
  `AYVALIK_AI_KARAR.md`'nin diskte YOK olduğu (`find`, boş) · `gelen/inis-328` (Çarkçı, 7 Ağu, EN zemin + parrhesia1.com kaçak alan bulgusu) tam okundu · `gelen/inis-1079` (Şen/M12, 12 Ağu 04:56Z, sebil.html 200 · 10.082 B · sha16 74ce84bd) tam okundu · `NEREYE_NE.md` + `CW_CLAUDE.md` tam okundu · HEAD f5cd1ed

◇ **CARRIED (başka pencere/Founder aktardı — bu elde ölçülmedi):**
  12 Ağu askı-kaldırma hükmü (Supabase id 1186/881) · guard dizisi ve dört damga (parrhesia.one `chat.js`, kapsam dışı depo) · seçenek C ve ~400 satır tahmini · tek sağlayıcı + Mach-1 mimarisi · Free/29€/290€ fiyat · iki wizard · POS başvurusu · 8 Ağu uydurma-atıf testi · logTurn ihlali · v0.4/v0.3 uçuşması · ESM/CommonJS · takvim/billboard

◇ **OPEN (Founder mührü bekliyor — §6):**
  sebil yakım tavanı · kur mekanizması · devirme mührü · mimari sayısı teyidi · model (KillTest) · ticaret unvanı · ses maliyeti · giriş açık/kapalı

---

*CW yazma-eli: dağınığı topladım, ölçtüğümü damgaladım, ölçmediğimi carried bıraktım, karar olanı Founder'a bıraktım. Ölç, doldurma. — Çarkçı, 12 Ağustos 2026*
