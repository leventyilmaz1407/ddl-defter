# CCE · BEŞ ALAN ADI — ZEMİN ÖLÇÜMÜ

`[MSG CCE-0806-D]` · 6 Ağustos 2026 · **Cowork (CCE)** → koridor
**Emir:** Mach 1 devir notu §4, iş 1 *(içerik envanteri)* + ACİL 3.3 *(DMARC)*
**Usul:** sıfır dereceden. Liste varsayılmadı, kanıttan çıkarıldı; her satır bu turda koşan bir op'a bağlı.
**Alet şerhi:** konteynerde `dig`/`host` yok, kurulamadı. DNS **DNS-over-HTTPS** (dns.google) ile çözüldü.
Site ölçümü WebFetch ile. Ölçülmeyen `open` — *bakılmadı ≠ yok.*

---

## §1 · LİSTE — kanıttan, varsayımdan değil

Koridor + arşiv (`ddl-defter` + `parrhesia-defter-arsiv/claude`) tarandı, alan adları frekansa göre:

```
parrhesia.one 108 · ayvalik.ai 43 · ddl-limited.com 19 · parrhesia1.com 13 ·
elvanalpay.com 10 · leventyilmaz.org 6
```

**Altı aday çıktı, beş değil.** `parrhesia1.com`'u **Founder bayat ilan etti** — ölçümle değil,
sözüyle düştü; öyle işaretliyorum. **Yürürlükteki liste beş**, Mach 1'in sayısı doğru.

---

## §2 · DNS ZEMİNİ — ölçülen

| alan adı | DMARC | SPF | MX | NS / not |
|---|---|---|---|---|
| **parrhesia.one** | 🔴 **YOK** *(Status 3)* | 🔴 YOK | 🔴 YOK | Cloudflare · `anthropic-domain-verification` + `google-site-verification` TXT var |
| **ayvalik.ai** | 🔴 **YOK** *(Status 3)* | 🔴 YOK | 🔴 YOK | **Spaceship** (`launch1.spaceship.net`) |
| **ddl-limited.com** | 🔴 **YOK** *(Status 3)* | 🔴 YOK | 🔴 YOK | SOA var → alan adı kayıtlı |
| **elvanalpay.com** | 🔴 **YOK** *(Status 3)* | 🟢 **VAR** | 🟢 **VAR** | `v=spf1 include:spf.efwd.spaceship.net ~all` · MX: `mx1/mx2.efwd.spaceship.net` (öncelik 0) |
| **leventyilmaz.org** | 🔴 **YOK** *(Status 3)* | 🟢 **VAR** | 🟢 **VAR** | aynı Spaceship yönlendirmesi |

**`parrhesia1.com` (bayat):** DMARC yok — ölçüldü, kayda geçiyor.

### 2a · ACİL 3.3 kapandı: **beş alan adının beşinde de DMARC yok** · `verified`
Beşi de `Status: 3` (NXDOMAIN), hiçbirinde Answer yok. Mach 1'in bulgusu **doğrulandı** — artık
başkasının damgası değil, bu turun ölçümü.

### 2b · Devir notunun kendi içinde çelişkisi — çözüldü · `subtracted`
§5: *"beş alan adı, **hiçbirinde e-posta yok**"* · §3.4: *"leventyilmaz.org ve elvanalpay.com'da
**zaten Spaceship yönlendirmesi kurulu**"*.
**Ölçüm ikinciyi doğruluyor:** ikisinde **tam posta yönlendirmesi çalışıyor** (MX + SPF birlikte),
üçünde hiç yok. §5'in "hiçbirinde" ifadesi **fazla** — kırpıldı.

### 2c · Yeni bulgu
`parrhesia.one` TXT'sinde **`anthropic-domain-verification-vh66bn=…`** duruyor. Ne zaman, kimin
koyduğu **ölçülmedi** · `open`.

---

## §3 · İÇERİK ENVANTERİ — Mach 1'in "belirleyici bilinmeyen"i kapandı

Devir notu 3.5: *"Belirleyici bilinmeyen: **sitelerde içerik var mı?** Bunu göremedim.
Boş siteyi hiçbir gönderim indeksletmez."*

**Beşinin de içeriği var. Hiçbiri boş değil.** · `verified`

| alan adı | içerik | başlık | robots meta | robots.txt | sitemap |
|---|---|---|---|---|---|
| **parrhesia.one** | ~200–250 kelime · giriş kapısı + *pax parrhesiana* | `parrhesia · agora` | yok | 🟢 **VAR** — `Allow: /` + Sitemap satırı | ⚠ `open` |
| **ayvalik.ai** | ~500–600 kelime TR · *Ayvalık Vesikası* (11 + 4 madde) | `ayvalik.ai · sebil` | yok | 🔴 404 | — |
| **ddl-limited.com** | ~180–200 kelime · evin vitrini: Parrhesia · Ayvalık.ai · Elvan Alpay · **zeytinyağı** · **kitap** *("soon")* | `DDL Limited` | yok | 🔴 404 | — |
| **elvanalpay.com** | ~2.500–3.000 kelime, ama baştan sona *"eklenecek"* — iskelet | ⚠ `open` | ⚠ `open` | 🔴 404 | — |
| **leventyilmaz.org** | ~3.500+ kelime · tam portföy, TR/EN/FR · meta-description var | `Levent Yılmaz` | yok | 🔴 404 | — |

**→ 3.5'in blokörü kalktı.** İçerik var; indeksleme işi başlayabilir. Sıradaki kalem
Search Console + Bing Webmaster kurulumu (Mach 1 §4, iş 4).

---

## §4 · CANLI BULGU — ölü adrese bağlı canlı site 🔴

**`ayvalik.ai`'nin altbilgisi `parrhesia1.com`'a gidiyor** — Founder'ın bu turda **bayat** ilan
ettiği alan adına. Canlı bir sayfa, yürürlükten kalkmış bir adrese işaret ediyor.

Bağlantının nereye düştüğü (park sayfası mı, ölü mü, üçüncü şahısta mı) **ölçülmedi** · `open`.
Bayat bir alan adı elden çıkarsa o bağlantı **başkasının sayfasına** gider. Kesim Founder'ın.

---

## §5 · AÇIK KALANLAR — adıyla

```
open · parrhesia.one/sitemap.xml — alet binary döndü, ÇÖZEMEDİ.
       "sitemap yok" DEMİYORUM: probe kırık, hedef hakkında sıfır bilgi.
       robots.txt onu ilan ediyor, yani büyük ihtimalle var — ama ölçülmedi.
open · elvanalpay.com — HTTP durumu, başlık ve robots meta okunamadı (head görülmedi)
open · ayvalik.ai → parrhesia1.com bağlantısının hedefi
open · anthropic-domain-verification kaydının menşei
open · DKIM — hiçbir alan adında sorgulanmadı (selector bilinmiyor)
open · barındırma dağılımı — devir notu "Vercel 2 / Netlify 3" diyor, BEN ÖLÇMEDİM
```

---

## §6 · YAPMADIKLARIM — sınır

**DNS'e dokunmadım.** DMARC kaydı yazmadım, önermedim, uygulamadım — **Yasak-Bölge.**

Devir notu bir DMARC satırı içeriyor. **Onu buraya kopyalamıyorum**, çünkü Mach 1'in bana yazdığı
kural aynen şu: *"MX kaydını hafızadan yazdırmayın… Değer resmî dokümandan gelsin."* Aynı disiplin
DMARC için de geçerli. Kayıt uygulanacaksa: değeri resmî kaynaktan alınmalı, **bir DMARC
doğrulayıcıdan geçirilmeli**, ve panele **Founder** girmeli.

**Ölçtüm, göründürdüm, basmadım.**

---

## §7 · SIRADAKİ — sıfır dereceden, açık kapatarak

```
1. sitemap.xml açığını kapat — başka bir aletle (probe_gate: önce aleti sına)
2. elvanalpay.com head'ini oku — HTTP + robots meta
3. ayvalik.ai → parrhesia1.com bağlantısının hedefini ölç
4. barındırma dağılımını ÖLÇ (devir notunun sayısını taşımadan)
5. Search Console + Bing Webmaster — Mach 1 §4 iş 4 (içerik blokörü kalktı)
6. Google Workspace resmî değerleri — §4 iş 2 (fiyat/limit/MX, resmî panelden)
```

**Ve Mach 1'in sıralaması bozulmadı: günün ilk işi banka.** Ödemeler düşüyor ve bir API
buna bağlı. O Founder'da; ben zemini hazır tutuyorum.

---

*Ölç, doldurma. Bakılmadı ≠ yok. Probe kırıksa hedef hakkında sıfır bilgi. Ve neşeli ol.*

**— CCE** · Cowork · 6 Ağustos 2026
