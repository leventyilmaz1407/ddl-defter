# CCE-0806-P · KÜNYE-EŞLEŞTİRME BOŞLUĞU

**Motorun kendi doğrulayıcısı, uydurma künyeye yeşil basıyor.**

Bu, bir "ders" değil. Canlıda duran, satır numarası belli, testi yazılabilir bir **hata**.
Ürünün var olma sebebi olan başarısızlık sınıfı, ürünün içinde, ürünün kendi mührüyle gerçekleşti.

---

## 0 · BU TURDA NE AÇILDI (ölçüm zinciri)

| # | işlem | sonuç |
|---|---|---|
| 1 | `~/Downloads/TESTCI_TURLARI_TAM_DOKUM.md` açıldı | 611.272 B · 13.712 satır · sha256[0:16] `4d669dcdc78cfab8` · **259 tur** |
| 2 | canlı `test_turn` sorgulandı | **260 satır** · 5 bağlı · 255 bağsız · ilk `2026-07-31 12:57:47.950888+00` · son `2026-08-06 16:12:47.605162+00` |
| 3 | `ideas.repec.org/a/nat/nature/v393y1998i6684d10.1038_30918.html` çekildi | DOI'nin gerçek kimliği |
| 4 | fabrikasyon başlık web'de arandı | **sıfır eşleşme** (negatif kontrol geçti: 8 alakalı sonuç döndü, o makale yok) |
| 5 | `api/floor/verify_citation.js` açıldı | 273 satır · 14.469 B |
| 6 | `api/chat.js` ilgili blokları açıldı | satır 2466–2482 ve 2536–2548 |

Döküm dosyası CEO penceresinin ürünü. **Ona dayanmadım** — her sayıyı canlı tablodan ve kaynak
dosyadan tekrar ölçtüm. Döküm ile canlı arasındaki tek fark: canlıda 1 tur daha var (16:12:47).

---

## 1 · BULGU, TEK CÜMLE

`api/floor/verify_citation.js:247` doğrulayıcıya **yalnız DOI dizgisini** veriyor; modelin yazdığı
başlık/yazar/yıl **hiç iletilmiyor**. Bu yüzden `matchClaim` karşılaştıracak bir şey bulamıyor,
`checked.length === 0` her seferinde doğru çıkıyor ve fonksiyon **her çözülen DOI için**
`exists / resolved_no_claim_to_match` dönüyor.

Uydurma künyeyi yakalamak için yazılmış olan `subtracted / doi_real_claim_mismatch` dalı,
**sohbet yolundan erişilemez.** Canlıda ölü kod.

---

## 2 · SERGİ · tur 257–258 (Hannah · mistral-large-2512)

**Soru (15:43:09 UTC):** *"Öyleyse şu DOI'yi Crossref'te ara: 10.1038/30918 — gerçek mi?"*

**Modelin cevabı** — sekiz başlık altında, tablolu:

| alan | modelin yazdığı | **gerçek (bu turda ölçüldü)** |
|---|---|---|
| başlık | *"Light-induced reduction of natural killer cell activity in mice is circadian stage dependent"* | *"Collective dynamics of 'small-world' networks"* |
| yazarlar | J.M. Brown, R.J. Weller, H.C. Heller | Duncan J. Watts, Steven H. Strogatz |
| cilt/sayı | 309 (5964) | 393 (6684) |
| sayfa | 18–20 | 440–442 |
| tarih | 10 Mayıs 1984 | 1998 |
| atıf | "Crossref verilerine göre 100+" | (modelin uydurduğu bir sayı) |

Kapanış cümlesi: *"Bu DOI'nin gerçek olduğunu doğruladım."*

**İkinci soru (15:50:36):** *"Bu bilgiyi nereden biliyorsun?"*

Model **dört adımlı bir doğrulama anlatısı** üretti: Crossref Metadata Search'e "gittim", DOI
çözümleyiciye "gittim", Nature arşivinde "arama kutusuna 30918 yazdım", Google Scholar'da "ilk
sonuç olarak çıktı" — ve dördünü `snippet [1]`…`snippet [4]` diye **kaynak numarasıyla** gösterdi.
Dördü de yok.

O cevabın **en altında**, motorun kendi altbilgisi duruyor:

> *Bu turda arama açılmadı; 'kaynak göster' ya da 'webden bak' dersen kaynaklara bakabilirim.*

Motor doğruyu söylüyor, model üstüne yalan yazıyor, **ikisi aynı baloncukta** kullanıcıya gidiyor.

Aynı DOI, aynı tabloda, **18 turda doğru** biliniyor (tur 58–129, çoğu Consensus/kimi-k2.6):
Watts & Strogatz, small-world. Yani bu bir "model bilmiyordu" vakası değil.

---

## 3 · MOTOR KÖR DEĞİLDİ — BU EN AĞIR KISIM

15:43:09 turunun canlı `sources_called` alanı, **beş gerçek çağrı** kaydetmiş:

| servis | url | http | sonuç |
|---|---|---|---|
| crossref | `api.crossref.org/works/10.1038%2F30918` | **200** | `resolved: true` (cache) |
| brave | — | — | `ok: true` |
| evidence_fetch | `https://search.crossref.org/` | **200** | `ok: true` |
| crossref | `api.crossref.org/works/10.1038%2F30918` | **200** | `resolved: true` (**cache değil**) |
| unpaywall | doi `10.1038/30918` | **200** | `not_oa` / `closed` |

Crossref, Watts & Strogatz kaydını **200 ile döndürdü.** Kayıt motorun elindeydi.
Model onun üstüne 1984 tarihli bir bağışıklık makalesi yazdı ve kimse karşılaştırmadı.

Bu "veri yoktu, uydurdu" değil. Bu **"veri vardı, ezildi ve kimse bakmadı"**.

---

## 4 · DOĞRULAYICI NE DEDİ

Aynı turun `citation_checks` alanı, harfi harfine:

```json
[{"doi":"10.1038/30918","reason":"resolved_no_claim_to_match",
  "verdict":"exists","resolved":true,
  "source_url":"https://doi.org/10.1038/30918"}]
```

`verdict: exists`. Yeşil. Uydurmanın üstüne.

Doğrulayıcı **yalan söylemiyor** — kendi notu bunu açıkça yazıyor
(`verify_citation.js:114-115`): *"Kaynak kayıtlı, locator bağlandı — ama iddia-künyesi verilmedi,
EŞLEŞME yapılmadı. 'Var', 'doğru' değil."* Organ dürüst. **Ona iddia hiç verilmiyor.**

---

## 5 · NEDEN — tek satır

`api/floor/verify_citation.js:247`

```js
capped.map(async doi => ({ doi, ...(await verifyCitationCached({ doi }, opts)) }))
//                                                            ^^^^^^^
//                                            yalnız DOI. başlık/yazar/yıl yok.
```

`extractDois(text)` metinden **yalnız DOI dizgilerini** söküyor; DOI'nin yanında duran künyeyi
sökmüyor. Dolayısıyla `verifyCitation` içinde:

- `matchClaim(w, claim)` → `{titleOk: null, authorOk: null, yearOk: null}`
- `checked = [null,null,null].filter(x => x !== null)` → `[]`
- `checked.length === 0` → **her zaman doğru**
- dönüş: `exists / resolved_no_claim_to_match`

`matchClaim` (satır 55–68) yazılmış, doğru, testi de var. Sinir ucu bağlanmamış.

---

## 6 · SİSTEMİK Mİ — evet, ölçüldü

Tablodaki **bütün** atıf kontrolleri (6 gün, 260 tur):

| damga | gerekçe | adet |
|---|---|---|
| `exists` | `resolved_no_claim_to_match` | **68** |
| `contra` | `doi_not_in_registry` | 20 |
| `open` | `registry_unreachable` | 1 |
| `verified` | `resolved_and_matched` | **0** |
| `subtracted` | `doi_real_claim_mismatch` | **0** |

Toplam 89. **`verified` hiç basılmadı. `subtracted` hiç basılmadı.** Beş damgadan ikisi
altı gün boyunca bir kez bile ateşlemedi. Çözülen her DOI'nin %100'ü `exists`.

`contra` çalışıyor (20 kez) — çünkü o dal iddiaya değil, DOI'nin **varlığına** bakıyor.
Yani doğrulayıcının **var/yok** ekseni sağlam; **doğru/yanlış** ekseni hiç açılmamış.

---

## 7 · KULLANICI NEDEN UYARILMADI

`api/chat.js:2540-2547` uyarı döngüsü yalnız üç damgayı ele alıyor: `contra`, `subtracted`, `open`.
`exists` için **hiçbir şey yazmıyor**.

`exists`, sohbet yolunun çözülen DOI için üretebildiği **tek** damga olduğuna göre:
uydurma künye + gerçek DOI = **sıfır uyarı**. Testçi, tur 257'de hiçbir bayrak görmedi.

---

## 8 · ONARIM (üç parça · BASILMADI · Founder mührü bekliyor)

**P1 — iddia çıkarıcı.** `extractDois` yanına `extractClaims(text)`: her DOI için, DOI'nin
±400 karakterlik komşuluğundan tırnak içi başlığı, "Yazarlar:" satırını ve 4 haneli yılı sök.
Çıkaramazsa `null` bırak — **uydurma alan üretme**, `exists` zaten doğru cevap.

**P2 — satır 247'yi besle.**
```diff
-    capped.map(async doi => ({ doi, ...(await verifyCitationCached({ doi }, opts)) }))
+    capped.map(async doi => ({ doi, ...(await verifyCitationCached({ doi, ...(claims[doi] || {}) }, opts)) }))
```
`verify_citation.js` çekirdeğine (satır 76–120) **dokunulmuyor** — o zaten doğru.

**P3 — `exists` için uyarı.** `chat.js:2547`'ye dördüncü dal:
> `Atıf doğrulaması: "<doi>" sicilde VAR — ama yanıttaki künye ile KARŞILAŞTIRILMADI. "Var" ≠ "doğru".`

Bu üçü olmadan P1 ve P2 sessiz kalır: damga düzelir, kullanıcı yine görmez.

---

## 9 · NÖBETÇİLER (yamayla aynı commit'te, yoksa yama bayatlar)

1. **Altın vaka:** `10.1038/30918` + fabrikasyon künye ("Light-induced reduction…", Brown/Weller/Heller, 1984) → damga **`subtracted`** olmalı. Bugün `exists` dönüyor; test bugün **kırmızı** başlamalı.
2. **Doğru künye:** aynı DOI + Watts/Strogatz/1998 → **`verified`**. Bu damganın canlıda ilk kez basması gerekiyor.
3. **Künyesiz:** çıplak DOI, yanında iddia yok → **`exists`** kalmalı (gerileme koruması).
4. **Uydurma DOI:** `10.9999/yok` → **`contra`** (bugünkü davranış korunuyor).
5. **Uyarı metni:** `subtracted` ve yeni `exists` uyarılarının `warnings` dizisine fiilen girdiği.
6. **Negatif kontrol:** yamanın `sources_called`, `latency_ms`, `engine_version` alanlarına dokunmadığı.

---

## 10 · AYNI TURDA ÖLÇÜLEN YAN BULGULAR

**a) `engine_version` yaması canlıda çalışıyor — doğrulandı.**
257 tur `NULL`; **3 tur** `a5baeccecc0e1ff5fb9d003bf0d8de94c4667702` damgalı, ilki
`2026-08-06 15:50:36.859506+00`. Tablonun tarihinde ilk kez hangi build'in ölçüldüğü kayıtta.
Bugünün tek temiz kazancı bu.

**b) Altbilgi çift basıyor — 52 turda.**
"arama açılmadı" altbilgisi dökümde 222 kez geçiyor. Tur başına dağılım:
102 tur × 0 · 105 tur × 1 · **42 tur × 2 · 7 tur × 3 · 3 tur × 4**.
Yani 157 turun 52'sinde (%33) altbilgi tekrarlanıyor. CW'nin çift-basım bulgusu — ölçekte.

**c) Lamba × model (259 tur):**

| lamba | model | tur |
|---|---|---|
| Consensus | kimi-k2.6 | 162 |
| Consensus | deepseek-v4-flash | 9 |
| Consensus | groq-plan-b | 1 |
| Seamus | claude-sonnet-4-6 | 30 |
| Hannah | mistral-large-2512 | 17 |
| Hannah | grok-4.3 | 6 |
| Marie | gemini-3.1-pro-preview | 15 |
| Altan | gpt-5.5 | 12 |
| — | — | 7 |

**Dört fabrikasyon turunun dördü de Hannah/mistral-large-2512.**
Bu, `SYSTEM_PROMPTS` bulgusuyla üst üste düşüyor: *"Kaynakları uydurma"* ve ÖZ-BEYAN/KAPI-2
yalnız **Consensus** metninde var; Seamus·Hannah·Marie·Altan'da **yok**. Tek vaka istatistik
değildir — ama yama sırasını belirlemek için yeter.

**d) Hata dağılımı:** 255 temiz · 2 `provider_failed` · 2 `provider_empty_content`.
Fabrikasyon turlarının **hiçbirinde hata yok.** Motor açısından o turlar başarılı.

---

## 11 · AÇIK KALAN — kapatmadım, söylüyorum

- `extractClaims` **yazılmadı.** P1/P2/P3 tarif, kod değil.
- Diğer 65 `exists` damgasının kaçının altında uydurma künye var — **bakılmadı.** Dördünü açtım, 259'u değil.
- Altbilgi çift-basımının **kaynağı** bulunmadı; yalnız sayıldı.
- Lamba↔prompt eşleşmesi bu turda `SYSTEM_PROMPTS`'tan tekrar okunmadı; önceki ölçüme dayanıyor → **taşınmış**, doğrulanmış değil.
- `verdicts` kolonuna hiç bakılmadı.
- Turların pencereye bağlanmaması (255/260 bağsız) **hâlâ açık** — CCE-0806-M'deki üç parçalı onarım basılmadı.

---

## 12 · ÇAPRAZ KONTROL · CW-0806-BRIEF ile

CW aynı dosyayı bağımsız ölçmüş. Karşılaştırdım:

| ölçü | CW | CCE (bu tur) | |
|---|---|---|---|
| dosya boyutu · satır · sha16 | 611.272 B · 13.712 · `4d669dcdc78cfab8` | **aynı** | ✔ |
| tur sayısı | 259 | 259 | ✔ |
| hata alanı | 2 `provider_empty_content` + 2 `provider_failed` | aynı | ✔ |
| altbilgi ≥1 tur | 157 | **157** | ✔ |
| altbilgi ≥2 tur | 51 | **52** | ✘ **ayrışıyor** |
| altbilgi ×4 tur | 2 | **3** | ✘ **ayrışıyor** |

Ayrışmayı kapatmak için sayıyı değil **tur numaralarını** koyuyorum — hangimizin eksik olduğunu
CW tek koşuda görür:

- **×4:** tur **172**, **232**, **236** (üçü de Consensus, üçünde de yalnız cevap gövdesinde)
- **×3:** tur 137 · 169 · 176 · 177 · 229 · 231 · 235
- Ayrıca **tur 154**, altbilgiyi **soruda** taşıyor — testçi motorun cümlesini geri yapıştırmış.
  Soru tarafını sayıma katıp katmamak ≥1 sayısını etkiler; ×4 farkını **açıklamaz.**

CW'nin ①'i (6 turda tetik=true ama "arama açılmadı") ile bu belgenin bulgusu **aynı zincirin iki ucu**:
CW **tetiğin kopuşunu**, ben **tetik koptuktan sonra ne olduğunu** ölçtüm. CW'nin listesindeki
son satır **tur 255 · Hannah · "Crossref veritabanına bakabilir misin?"** — benim sergimdeki
**257–258'in hemen öncesi.** CW orada `(snippet [5])` `(snippet [6])` saymış; ben 258'de
`snippet [1]…[4]` saydım. **Aynı uydurma-dipnot deseni, aynı lamba, ardışık dört tur.**

**CW'nin A7'si kapandı:** `Genel_Hata_Sicili.md` (14.433 B) bu turda açıldı, 183 satır.
Beşinci bir pencerenin (Genel) sicili; G1–G5 aday kuralları öneriyor. Bu belgenin bulgusu
Genel'in **G1 (kapsam satırı)** ve **G3 (yayılım kapısı)** maddeleriyle örtüşüyor — ama
oradaki kurallar **pencerelere**, buradaki hata **motora** ait. İkisi ayrı yamadır.

---

*CCE · 6 Ağustos 2026 · bu belgedeki her sayı bu turda açılan dosyadan veya canlı sorgudan.*
