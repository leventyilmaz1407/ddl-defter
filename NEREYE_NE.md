# NEREYE NE — yerleşim haritası

*(6 Ağustos 2026 · CCE · Founder emriyle: "nereye ne çok önemli, herkes okusun")*

**Bu belge kural koymaz. Ne nereye konur, onu söyler.**
6 Ağustos'ta üç pencere altı saatte altı ayrı duvara çarptı. Hepsi *"bu iddia neye dayanıyor"* sorusu değildi — hepsi **"bu şey nereye konur"** sorusuydu. Bu sayfa o duvarların haritası.
**Her satır o gün ölçüldü.** Ölçülmeyen satır `open` yazıyor.

---

## 1 · DEPOLAR VE GÖRÜNÜRLÜK

```
ddl-defter            PUBLIC — BİLEREK. Founder doğruladı.
                      Sebep: GitHub bağlacı olmayan pencereler koridoru buradan
                      okur ve buraya yazar. Kaldırılırsa o pencereler kör kalır.
                      Ölçüm: raw.githubusercontent → 200, kimliksiz.

https-parrhesia.one   PRIVATE.  Ölçüm: raw → 404 (negatif kontrol).
```

> **Bu yüzden `KORIDOR_USULU` m.3 — sır ve para girmez — `ddl-defter` için nezaket değil, zorunluluk.**
> Bugün ölçüldü: 8 dosya / 45 satır para taşıyor. Bunların hepsi **şu an herkese açık.**

---

## 2 · KORİDOR — hangi dosya ne için

| dosya | kim yazar | kim okur | ne için |
|---|---|---|---|
| `cowork-to-mach.md` | Cowork/CCE | Mach/CEO | **CEO'ya giden mektup buraya.** `gelen/`e değil. |
| `mach-to-cowork.md` | Mach/CEO | Cowork | CEO'dan gelen |
| `gelen/` | herkes + **makine** | herkes | gelen kutusu · rapor, belge, iniş |
| `MAKBUZ_ACK.md` | okuyan | denetleyen | görmek = makbuz yazmak · append-only · mühür gerekmez |
| `handoff/cowork-el-devri.md` | devreden | uyanan | uyanış ritüelinin ilk okuması |
| `DURUM.md` | CEO | herkes | anayasa §4 istiyor — **HÂLÂ YOK, 22 gün** |

**Yanlış yere koymanın maliyeti ölçüldü:** 6 Ağustos'ta yedi rapor `gelen/`e atıldı; CEO hiçbirini görmedi, ve Founder yedi kez kurye oldu. `cowork-to-mach.md`'nin kendi son satırı bunu zaten yasaklıyormuş: *"Founder kurye değil mühürdar olsun."*

---

## 3 · "İNDİ" NE DEMEK

```
diske yazmak          ≠  inmek
git add + commit + push =  inmek
```

Diskte duran dosyayı **yalnız diske erişimi olan pencere** görür. Öbür Cowork penceresinin bağlı klasörü **yok**. CW ve Mach da göremez.

**Ölçüldü:** 6 Ağustos'ta 10 dosya diske indi, git'e inmedi — sekizi CCE'nin, ikisi Duman'ın 4 Ağustos makbuzları. Kural o sabah yazılmıştı (*"inmeyen artefakt yoktur"*), sonra aynı gün sekiz kez ihlal edildi.

---

## 4 · MOTOR — hangi metin DNA, hangisi raf

**Modele giden metin, TAMAMI:** `api/chat.js` içinde beş fonksiyon · **16.474 B**

```
SYSTEM_PROMPTS                145–203   7.737 B   ← beş lamba
buildP1Constitution           601–670   4.791 B
buildPlainSpeechProtocol      558–584   2.476 B
buildPlausibilityPacket       672–700   1.126 B
buildLanguageCultureProtocol  538–549     982 B
```

**Modele GİTMEYEN:** `constitution/` (17 dosya · 66.457 B) · `docs/` (20 dosya · 90.328 B)
**Ölçüm:** `api/` altındaki 11 dosyada `readFileSync·readFile·fs.·node:fs·.md import·process.cwd` → **0 eşleşme** (pozitif kontrollü).

> **Davranış değiştirecek her metin bu beş fonksiyondan birine girer.** `constitution/`e yazılan şey tefsirdir, DNA değil. Yazan üç masa da bunu bilmeden yazarsa üç raf belgesi üretir.

**Ve lambalar eşit değil — ölçüldü:**

| kural | Consensus | Seamus | Hannah | Marie | Altan |
|---|:-:|:-:|:-:|:-:|:-:|
| siga siga · beşer şaşar · AD-YASASI | 1 | 1 | 1 | 1 | 1 |
| **"Kaynakları uydurma"** | **2** | **0** | **0** | **0** | **0** |
| **ÖZ-BEYAN / KAPI-2** | **1** | **0** | **0** | **0** | **0** |

Elif Kahveci'nin uydurulmuş künye arızası **Seamus**'ta oldu — talimatın hiç bulunmadığı lambada.

---

## 5 · KORİDORU KİM BESLİYOR — elle değil

`.github/workflows/inis-eli.yml` · cron `7,27,47 * * * *` + `push:main` + elle tetik

```
Supabase ev_defteri  (tur ∈ {inis,alet} · durum='acik')
   → gelen/inis-<id>-<slug>.md
   → 13 kalıplı sır kapısı
   → gelen/_INEN.md'ye makbuz tablosu
   → main'e KENDİ push eder   (kimlik: inis-eli@users.noreply.github.com)
```

`gelen/`deki dosyaların çoğu **elle konmadı.** Ve `ev_defteri`'nin `anon` police'i var: `tur ∈ {inis,alet} AND durum='acik'` — yani **açık iniş satırları publishable anahtarla da okunabilir**, ve o anahtar `index.html`'de yayınlanıyor.

---

## 6 · TEST OTURUMU — bağlantı zinciri

**Testçi bağlantısı:** `parrhesia.one/?t=<T#>&kit=<KIT-ID>&lang=<tr|en>`

```
index.html:1632–1649   ?t= varsa __P1_TEST kurar · sid = crypto.randomUUID
index.html:3008–3012   YALNIZ sid doluysa 4 alanı gövdeye koyar
chat.js:2270–2275      session_id && tester_id && kit_id && lang_kit → dördü birden
                       biri eksikse: session_id = null, tur YİNE yazılır, {logged:true}
```

**Dört sessiz düşme yolu:** ?t= yok · ?kit= boş · randomUUID yok · tester_id 8 karakterden uzun.
**Hiçbiri ekranda görünmüyor.** `sessionStorage` — sekme kapanınca biter, **bağlantı her oturumda kullanılmalı.**

**Sonuç, 6 Ağustos ölçümü:** `test_turn` 254 satır, **5'i bağlı**; `test_session` 2 satır, ikisi de `T0`. Buna karşılık 5 Ağustos'ta 24 testçi turu koşulmuş ve üç dolu rapor teslim edilmiş. **W1 koştu, cihaz kaydetmedi.**

---

## 7 · EĞİTİM KARTI ↔ KOD BAĞI

Kartın *"aramayı AÇMAZ"* listesi şu fonksiyona bağlı: `index.html:1894–2001` `shouldRequestEvidence`.

**6 Ağustos'ta koşturuldu:**
```
webden bak · internetten bak · veritabanına bak   →  AÇIYOR   (kart "açmaz" diyor)
Crossref'e bak                                     →  açmıyor  (kart doğru)
negatif kontrol: 4 masum ifade                     →  dördü de açmıyor
```
Desen `7a7dee8` ile **3 Ağustos 12:31**'de girdi; kitler **2 Ağustos 18:44** tarihli. Kod değişti, kart bayatladı, kimse tekrar bakmadı. `open` — CW'nin okuduğu kartın tarihi ölçülmedi.

> **Kural: karta yazılan her tetik ifadesi, fonksiyona verilen bir testle bağlanır.** Yoksa bir hafta kaybedilir — kaybedildi.

---

## 8 · KİM NEYİ BASAR

```
YASAK-BÖLGE (yalnız Founder):
  imza · ödeme · deploy · kalıcı silme · secret üretimi
  fiyat / görünürlük / yetki değişikliği · force-push · onun adına posta ve form
```

**Ve bunu bilerek yazıyorum:** `main`'e merge = **Vercel production deploy**. Yani merge düğmesi bir deploy düğmesidir. PR açmak CCE'nin, basmak Founder'ın.

---

## 9 · DİSKTE NE NEREDE — 6 Ağustos ölçümü

```
~/ddl-defter                     285 dosya ·  1,8 MB   canlı koridor
~/Desktop/ddl-defter                                    ikinci nüsha (ayrışabilir)
~/Desktop/https-parrhesia.one    529 commit · 33 dal    ürün kaynağı
~/Desktop/parrhesia-defter-arsiv                        arşiv (~170 dosya claude/ altında)
~/Desktop/PARRHESIA_KASA           2 dosya              veri export'u
~/Downloads                   10.039 dosya · 6,6 GB     ← koridora inmemiş belgeler burada birikiyor
~/OneDrive-Kişisel            37.502 dosya ·  21 GB     (klasör adı Unicode-normalize; kabukta glob kullan)
```

**Sır taraması (9 kalıp, pozitif kontrollü):** gerçek anahtar **yok**. `.env` · `.pem` · `.key` · `id_rsa` · `.npmrc` **yok**.

---

## 10 · HANGİ PENCERE NEYE ULAŞIR

| | disk | git | macOS terminali | Supabase | DNS | HTTPS | Vercel | Gmail |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| **CCE** (bu pencere) | oku+yaz, **silemez** | **salt-okuma** | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **öbür Cowork** | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Terminaldeki Claude Code** | tam | tam | ✓ | — | — | — | — | — |
| **bulut konteyner** | kendi diski | tam | ✗ | ✓ | ✓ | ✓ | — | — |

**İki ölçülmüş sınır:**
- Köprüden `index`'e yazan git komutu (`status` · `add` · `commit`) **asla** — kilit yaratır, köprü silemez, repo herkese kilitlenir. `log` · `show` · `rev-list` · `rev-parse` · `fetch` serbest.
- Köprü **hiçbir dosyayı silemez** (`Operation not permitted`). Silinecek şey `_to_delete/`ye taşınır ve Founder'a söylenir.

---

## 11 · AÇIK BIRAKTIKLARIM

```
open · CW'nin okuduğu Eğitim Kartı'nın tarihi — kart bayat mı, baştan mı yanlış
open · testçilere fiilen verilen bağlantının tam metni (dört düşme yolundan hangisi)
open · PR #18'de "5 of 7 checks passed" — hangi ikisi, Actions okunamıyor
open · git GEÇMİŞİ hiç taranmadı; sır taraması yalnız çalışma ağacında koştu
```

---

*Bu sayfa kural değil, harita. Kural yanlışsa tartışılır; harita yanlışsa kaybolunur.*
*Ölç, doldurma. Ve neşeli ol.*

**— CCE** · 6 Ağustos 2026
