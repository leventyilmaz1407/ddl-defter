# AYVALIK.AI — BİRİM EKONOMİ + MALİYET OPTİMUMU

`masa:` **CW · Çarkçı** · `an:` 2026-08-12 · `damga:` fiyat **ölçüm** · Anthropic maliyeti **ölçüm** · hacim/USD-TRY/TÜFE **MODEL·açık** · routing **tasarım**
`kaynak:` Founder chat (fiyat + hedef) · claude-api referansı (model fiyatları) · `AYVALIK_AI_KARAR.md` (kademe/guard kararı)
`kaide:` Bu dosyanın rakamlarının çoğu **MODEL** — `sebil_kapi` 0 satır, hacim ölçülmedi. Fiyat ve Anthropic $/1M ölçüm. Ölç, doldurma; gerçek sayı gelince formülle kilitlenir.

---

## §0 · Fiyat ve hedef (Founder, 12 Ağu)

| plan | ₺/ay | not |
|---|---|---|
| **Sebil** | 0 | bedava, sınırsız, kimliksiz |
| **Plan A** | **290** | bireysel |
| **Plan B** | **2900** | kurumsal/profesyonel (10× A) |

- **6 ayda bir güncelleme** — TÜFE değil, **USD/TRY + Anthropic fiyatını** izlemeli (§5).
- **Ay-1 hedefi:** 100 × 2900 + 1000 × 290 = **580.000 ₺/ay** (1100 paralı).
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

Maliyet abone sayısına değil **abone başına soruya** bağlı. *USD/TRY ≈ 45 varsayıldı — açık "kur mekanizması" kararı.*

| plan | gelir | ~$/soru | **başabaş soru/ay** |
|---|---|---|---|
| Plan A 290₺ (~$6,4) | | ~$0,03 | **~215 derin soru** |
| Plan A ucuz yönlendirilirse | | ~$0,01 | ~640 |
| Plan B 2900₺ (~$64) | | ~$0,10 | **~640 derin soru** |

**Naif Opus-max olsaydı** Plan A başabaşı **~40 soruya** düşerdi → çoğu kullanıcı zarar. → **Aksiyon:** Plan A'ya adil-kullanım tavanı (~150 derin soru/ay, üstü ucuz kademeye throttle). Plan B cömert kalabilir.

---

## §3 · Bedava sebil = saf yanma (marjın swing değişkeni)

Başabaşı yok; saf gider = *bedava kullanıcı × soru × maliyet.* 10.000 bedava × 10 soru × ~$0,02 ≈ **$2.000 ≈ 90.000 ₺/ay**, sıfır gelirle. PAC: sebil lead değil (CAC'a yazılmaz) → **Founder-tavanı şart** (açık kalem). Optimize routing bunu ~5× kısar; naif olsaydı ~450K ₺/ay.

---

## §4 · Ay-1 kaba P&L (MODEL hacimler)

```
Gelir                                       +580.000 ₺
− Model (paralı, ~$4K optimize · ×45)       −180.000 ₺
− Ödeme komisyonu (~%4 iyzico / bank az)     −24.000 ₺
− Bedava sebil yanması (tavana bağlı)        −90.000 ₺   ← swing
= Sabit/pazarlama öncesi net               ≈ +286.000 ₺
```
Headroom var; net'i belirleyen **bedava-yanma + soru/abone**, ikisi de ölçülmedi.

---

## §5 · İki sert uyarı

**① FX makası — maliyet USD, gelir ₺.** Anthropic USD faturalıyor, tahsil ₺. TL düşerse ₺-maliyet artar, gelir sabit → marj erir. **6 aylık güncelleme USD/TRY + Anthropic fiyatını izlemeli, TÜFE'yi değil.** (= açık kur mekanizması kararı.)

**② 290 ₺ ≠ 29 €.** 2026'da 29 € ≈ 1200-1500 ₺ → 290 ₺ bilinçli derin yerel indirim. Ayvalıklı için doğru; **turist/AB kartı çok fazlasını öderdi** → ayrı EUR fiyatı (MoR/telefon-kapısı) tabloyu bozmadan ek gelir.

---

## §6 · Fiyat sağlaması + yılbaşı 10k

- **Seviye abartı değil:** Plan A değere göre düşük-adil (avukat/muayene binlerce ₺), başabaş rahat. Plan B net kurumsal kademe.
- 🔴 **Abartı riski hedefte:** ay-1'de 1100 paralı bir kasabada agresif — geniş bedava tepe + değer kanıtı şart.
- 🟠 **290→2900 arası 10× boşluk:** arada bir kademe (**690-990 ₺ "Plus"**) orta segmenti yakalar, dönüşümü artırır.
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
