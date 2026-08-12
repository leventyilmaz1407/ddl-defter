# AYVALIK.AI — BİRİM EKONOMİ + MALİYET OPTİMUMU

`masa:` **CW · Çarkçı** · `an:` 2026-08-12 · `damga:` fiyat **ölçüm** · Anthropic maliyeti **ölçüm** · hacim/USD-TRY/TÜFE **MODEL·açık** · routing **tasarım**
`kaynak:` Founder chat (fiyat + hedef) · claude-api referansı (model fiyatları) · `AYVALIK_AI_KARAR.md` (kademe/guard kararı)
`kaide:` Bu dosyanın rakamlarının çoğu **MODEL** — `sebil_kapi` 0 satır, hacim ölçülmedi. Fiyat ve Anthropic $/1M ölçüm. Ölç, doldurma; gerçek sayı gelince formülle kilitlenir.

---

## §0 · Fiyat + kur mekanizması (Founder, 12 Ağu — kur mekanizması KAPANDI)

| plan | anchor | not |
|---|---|---|
| **Sebil** | 0 | bedava, sınırsız, kimliksiz |
| **Plan A** | **29 €** | bireysel · parrhesia.one endeksli |
| **Plan B** | **290 €** | kurumsal · parrhesia.one endeksli (10× A) |

**Mekanizma:** fiyat **parrhesia.one endeksli** (anchor EUR 29/290€); tahsilat **TL, sabit peg** (canlı çevrim yok — dönem başında EUR×kur ile ₺ sabitlenir); **6 ayda bir yeniden pegleme = kur + enflasyon.**

✅ **Çatal kapandı (Founder, 12 Ağu):** ayvalik.ai = **29€ / 290€** iki katman. **2900 parrhesia.one'ın katmanı** (2900€), ayvalık'ın değil. TL peg @ EUR/TRY ≈ 48 (*varsayım, açık*) ≈ **~1.400 ₺ / ~14.000 ₺.**

**Merdiven — ve 290€ bir PAKET:**
- **29€** = ayvalık (Haklarınız + Sağlığınız), tek ürün
- **290€** = ayvalık **+ p1 (parrhesia.one) dahil** — iki ürün, tek abonelik. *Değer önerisi burada güçlü: tek fiyat, iki motor.*
- **2900€** = parrhesia.one'ın kendi premium katmanı (ayrı ürün, standalone)

- **Ay-1 hedefi:** 100 × 290€ + 1000 × 29€ = **58.000 €/ay ≈ ~2,8M ₺/ay** (1100 paralı).
- **Yılbaşı hedefi:** 10k — *hangi 10k belirleyici* (§6).

---

## §1 · Maliyet optimumu — kademeli routing (min $ ⧸ eşik-altı guard)

Optimizasyon = **maliyeti en aza indir, ama her zorluk kademesinde guard-tetiklenme ≤ eşik.** 428'i model derinliği değil guard+kaynak kapatır → ucuz model + guard, alt kademelerde güvenli.

| kademe | soru profili | model · effort | çıktı $/1M | pay* |
|---|---|---|---|---|
| Router | etiketleme | Haiku 4.5 · low | 5 | hepsi |
| T0 | selam/yönlendirme/kapsam-dışı | Haiku 4.5 · low | 5 | ~20% |
| T1 | basit olgusal (raf/0-1 arama) | Haiku 4.5 + guard · low | 5 | ~35% |
| T2 | orta akıl + dayanak | **Sonnet 5 · high** | 15 | ~30% |
| T3 | zor/yüksek-riskli | **Opus 4.8 · xhigh** | 25 | ~15% |
| T4 | ücretli oda derin | Opus 4.8 · max | 25 | paralı |

*pay = MODEL. Fiyat (girdi/çıktı $/1M, ölçüm): Opus4.8 5/25 · Sonnet5 3/15 (intro 2/10, 31 Ağu'ya) · Haiku 1/5.

**Üç verimlilik kaldıracı:** (1) ucuz router pahalı modeli boşa çağırmaz · (2) **prompt cache** — ANAYASA+guard öneki (~5K) her soruda aynı → cache-read 0.1×, en büyük tasarruf · (3) kaskad emniyet — guard tetiklerse bir kademe yukarı eskale.

**1000 sebil sorusu (MODEL):** ara toplam ≈ **$32,7**, prompt-cache ile ≈ **$20-22**. Naif "hepsi Opus-max" ≈ **$160** → **5-8× ucuz**, T3 yine Opus olduğu için zor vakada kalite düşmüyor. *Routing = marjın kendisi.*

---

## §2 · Başabaş soru sayısı (abone başına, optimize routing)

Maliyet abone sayısına değil **abone başına soruya** bağlı. *EUR/USD ≈ 1,08 varsayıldı.*

| plan | gelir | ~$/soru | **başabaş soru/ay** |
|---|---|---|---|
| Plan A 29€ (~$31) | | ~$0,03 | **~1.030 derin soru** |
| Plan A ucuz yönlendirilirse | | ~$0,01 | ~3.100 |
| Plan B 290€ (~$313) | | ~$0,10 | **~3.130 derin soru** |

**EUR-anchor marjı şişiriyor:** model maliyeti gelirin ~%10'u → başabaş çok yüksek (Plan A ~1.000+ derin soru), **adil-kullanım tavanı endişesi büyük ölçüde düştü.** (Naif Opus-max olsaydı Plan A ~200 soruya inerdi — routing yine kritik ama artık geniş pay var.)

---

## §3 · Bedava sebil = saf yanma (marjın swing değişkeni)

Başabaşı yok; saf gider = *bedava kullanıcı × soru × maliyet.* 10.000 bedava × 10 soru × ~$0,02 ≈ **$2.000 ≈ 90.000 ₺/ay**, sıfır gelirle. PAC: sebil lead değil (CAC'a yazılmaz) → **Founder-tavanı şart** (açık kalem). Optimize routing bunu ~5× kısar; naif olsaydı ~450K ₺/ay.

---

## §4 · Ay-1 kaba P&L (MODEL hacimler)

```
Gelir (58.000€ ≈ ×48)                     +2.800.000 ₺
− Model (paralı, ~$4K optimize · ×45)       −180.000 ₺   (gelirin ~%6-10'u)
− Ödeme komisyonu (~%4 iyzico / bank az)    −112.000 ₺
− Bedava sebil yanması (tavana bağlı)        −90.000 ₺   ← swing
= Sabit/pazarlama öncesi net             ≈ +2.418.000 ₺
```
EUR-anchor'la marj **kalın** — model maliyeti gelirin küçük kesri. Risk artık marjda değil: **(1) dönüşüm** (§6) ve **(2) bedava-yanma tavanı** (§3).

---

## §5 · İki sert uyarı

**① FX makası — mekanizmayla büyük ölçüde KAPANDI.** Maliyet USD, fiyat **EUR-peg** → EUR ile USD TL'ye karşı birlikte hareket eder, 6-aylık kur güncellemesi kalanı toplar. Kalan risk: iki güncelleme arası EUR/TRY kayması (dönemsel, sınırlı). ⚠️ **Kur ≠ enflasyon çifte sayma:** EUR-peg zaten model maliyetini (USD/EUR) taşıyor → **kur güncellemesi = EUR-peg tazeleme; enflasyon güncellemesi = yalnız TL-yerel giderler** (personel/ofis/yerel). İki gerekçe ayrı, üst üste binmesin.

**② 290 ₺ ≠ 29 €.** 2026'da 29 € ≈ 1200-1500 ₺ → 290 ₺ bilinçli derin yerel indirim. Ayvalıklı için doğru; **turist/AB kartı çok fazlasını öderdi** → ayrı EUR fiyatı (MoR/telefon-kapısı) tabloyu bozmadan ek gelir.

---

## §6 · Fiyat sağlaması + yılbaşı 10k

- **Marj sağlam** (§4) — EUR-anchor'la model maliyeti gelirin küçük kesri.
- 🔴 **Asıl risk DÖNÜŞÜM — ve iki katmanda farklı:**
  - **29€ (~1.400 ₺):** tek ürün, kasabada satması zor (önceki 290 ₺'nin 5 katı) → geniş bedava tepe + değer kanıtı + giriş kampanyası şart.
  - **290€ (~14.000 ₺):** **p1 dahil paket** → değer önerisi güçlü; ama fiyat noktası kurumsal, hedef kitle avukat/klinik/emlakçı. B2B satışı, bireysel değil.
- 🟠 **29€→290€ arası 10× boşluk** (~1.400 → ~14.000 ₺): arada bir **"Plus"** kademesi (örn. 79-99€) 290€ paketini çok, 29€'yu az bulan orta segmenti yakalar. *(Ama Plus'a p1 katılırsa 290€ paketini yer — dikkatli konumla.)*
- **Yılbaşı 10k:** 10k paralı → çok kârlı; 10k bedava → yanma büyür, tavan+dönüşüm şart. *Sayı değil kompozisyon.*

---

## §7 · Kilitlemek için dört ölçüm (ölç, doldurma)

1. **soru/abone** (Plan A/B ayrı) → başabaş ve tavan.
2. **bedava:paralı oranı** + bedava soru/kullanıcı → yanma tavanı.
3. **USD/TRY** (kur kararı) + **count_tokens** (gerçek önek) → $ → ₺.
4. **KillTest** → kademe başına guard-tetik → routing tablosu kesinleşir.

```
Aylık net = Σ_plan (abone × ₺fiyat) − Σ_kademe (soru × $/soru) × USD_TRY − bedava_yanma − komisyon − sabit
Plan başabaş(soru) = ₺fiyat ⧸ (USD_TRY × $/soru)
```

*— CW, 12 Ağustos 2026. Rakamlar MODEL, fiyat ölçüm; gerçek sayı gelince formül kilitler.*
