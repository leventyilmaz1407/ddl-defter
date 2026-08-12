# AYVALIK.AI — BİRİM EKONOMİ + MALİYET OPTİMUMU

`masa:` **CW · Çarkçı** · `an:` 2026-08-12 · `damga:` fiyat **ölçüm** · Anthropic maliyeti **ölçüm** · hacim/USD-TRY/TÜFE **MODEL·açık** · routing **tasarım**
`kaynak:` Founder chat (fiyat + hedef) · claude-api referansı (model fiyatları) · `AYVALIK_AI_KARAR.md` (kademe/guard kararı)
`kaide:` Bu dosyanın rakamlarının çoğu **MODEL** — `sebil_kapi` 0 satır, hacim ölçülmedi. Fiyat ve Anthropic $/1M ölçüm. Ölç, doldurma; gerçek sayı gelince formülle kilitlenir.

---

## §0 · Fiyat + kur mekanizması (Founder, 12 Ağu — kur mekanizması KAPANDI)

| plan | anchor | not |
|---|---|---|
| **Sebil** | 0 | bedava, sınırsız, kimliksiz |
| **Plan A** | **29 €** | bireysel · ayvalık |
| **Plan B** | **145 € (29×5)** | ayvalık premium · **p1 DAHİL DEĞİL** |

**Mekanizma:** fiyat **EUR-anchor** (29 / 145€); tahsilat **TL, sabit peg** (canlı çevrim yok — dönem başında EUR×kur ile ₺ sabitlenir); **6 ayda bir yeniden pegleme = kur + enflasyon.**

✅ **Karar (Founder, 12 Ağu — revize):** ayvalik.ai = **29€ / 145€** (29×5), **p1 dahil değil** — ayvalık standalone. TL peg @ EUR/TRY ≈ 48 (*varsayım, açık*) ≈ **~1.400 ₺ / ~7.000 ₺.**

**Merdiven (ayvalık standalone):**
- **29€** = ayvalık (Haklarınız + Sağlığınız)
- **145€** = ayvalık **premium** (5× A) — sınırsız/öncelik/geçmiş vb. *İçerik tanımı açık: 145'in 29'a kattığı ne? (`One Plus içeriği` açık kalemi buraya bağlı.)*
- **p1 (parrhesia.one)** = **ayrı ürün, ayrı satın alım** (2900€ standalone) — ayvalık paketine girmez.

- **Ay-1 hedefi:** 100 × 145€ + 1000 × 29€ = **43.500 €/ay ≈ ~2,09M ₺/ay** (1100 paralı; hedef-mix Founder'ın).
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
| Plan B 145€ (~$157) | | ~$0,10 | **~1.570 derin soru** |

**EUR-anchor marjı şişiriyor:** model maliyeti gelirin ~%10'u → başabaş çok yüksek (Plan A ~1.000+ derin soru), **adil-kullanım tavanı endişesi büyük ölçüde düştü.** (Naif Opus-max olsaydı Plan A ~200 soruya inerdi — routing yine kritik ama artık geniş pay var.)

---

## §3 · Bedava sebil = saf yanma (marjın swing değişkeni)

Başabaşı yok; saf gider = *bedava kullanıcı × soru × maliyet.* 10.000 bedava × 10 soru × ~$0,02 ≈ **$2.000 ≈ 90.000 ₺/ay**, sıfır gelirle. PAC: sebil lead değil (CAC'a yazılmaz) → **Founder-tavanı şart** (açık kalem). Optimize routing bunu ~5× kısar; naif olsaydı ~450K ₺/ay.

---

## §4 · Ay-1 kaba P&L (MODEL hacimler)

```
Gelir (43.500€ ≈ ×48)                     +2.090.000 ₺
− Model (paralı, ~$4K optimize · ×45)       −180.000 ₺   (gelirin ~%9)
− Ödeme komisyonu (~%4 iyzico / bank az)     −84.000 ₺
− Bedava sebil yanması (tavana bağlı)        −90.000 ₺   ← swing
= Sabit/pazarlama öncesi net             ≈ +1.736.000 ₺
```
EUR-anchor'la marj **kalın** — model maliyeti gelirin küçük kesri. Risk artık marjda değil: **(1) dönüşüm** (§6) ve **(2) bedava-yanma tavanı** (§3).

---

## §5 · İki sert uyarı

**① FX makası — mekanizmayla büyük ölçüde KAPANDI.** Maliyet USD, fiyat **EUR-peg** → EUR ile USD TL'ye karşı birlikte hareket eder, 6-aylık kur güncellemesi kalanı toplar. Kalan risk: iki güncelleme arası EUR/TRY kayması (dönemsel, sınırlı). ⚠️ **Kur ≠ enflasyon çifte sayma:** EUR-peg zaten model maliyetini (USD/EUR) taşıyor → **kur güncellemesi = EUR-peg tazeleme; enflasyon güncellemesi = yalnız TL-yerel giderler** (personel/ofis/yerel). İki gerekçe ayrı, üst üste binmesin.

**② 290 ₺ ≠ 29 €.** 2026'da 29 € ≈ 1200-1500 ₺ → 290 ₺ bilinçli derin yerel indirim. Ayvalıklı için doğru; **turist/AB kartı çok fazlasını öderdi** → ayrı EUR fiyatı (MoR/telefon-kapısı) tabloyu bozmadan ek gelir.

---

## §6 · Fiyat sağlaması + yılbaşı 10k

- **Marj sağlam** (§4) — EUR-anchor'la model maliyeti gelirin küçük kesri.
- 🔴 **Asıl risk DÖNÜŞÜM:**
  - **29€ (~1.400 ₺):** bireysel; kasabada satması zor → geniş bedava tepe + değer kanıtı + giriş kampanyası şart.
  - **145€ (~7.000 ₺):** ayvalık premium (p1 yok); 290€'ya göre daha ulaşılabilir prosumer/küçük-işletme noktası. Ama **145'in 29'a kattığı içerik tanımlı olmalı** — yoksa 5× fiyatı kimse ödemez (açık: One Plus içeriği).
- 🟢 **Boşluk 10×'ten 5×'e indi** (29→145): orta kademe artık daha az gerekli; merdiven sıkılaştı.
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
