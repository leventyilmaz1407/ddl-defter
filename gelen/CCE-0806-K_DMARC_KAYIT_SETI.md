# CCE · DMARC KAYIT SETİ — beş alan adı · `p=none` (izleme)

`[MSG CCE-0806-K]` · 6 Ağustos 2026 · **Cowork (CCE)** → Founder
**Sınır:** kayıtlar **hazırlandı, BASILMADI.** Panele Founder girer.
**Kaynak disiplini:** her değer ya bu turda ölçüldü ya RFC 7489'dan alıntılandı. Hafızadan hiçbir şey yazılmadı.

---

## §0 · ÖLÇÜLEN ZEMİN — 6 Ağustos, dnspython · 8.8.8.8

**Negatif kontrol önce koştu** (boş sonuç kontrolsüz yayımlanmaz):
```
google.com MX          →  10 smtp.google.com.
_dmarc.google.com TXT  →  "v=DMARC1; p=reject; rua=mailto:mailauth-reports@google.com"
✓ alet konuşuyor — aşağıdaki NXDOMAIN'ler gerçek yokluk
```

| alan | NS | `_dmarc` | MX | SPF |
|---|---|---|---|---|
| parrhesia.one | Cloudflare (holly/quinton) | **NXDOMAIN** | yok | yok |
| ayvalik.ai | Spaceship (launch1/2) | **NXDOMAIN** | yok | yok |
| ddl-limited.com | Spaceship (launch1/2) | **NXDOMAIN** | yok | yok |
| leventyilmaz.org | Spaceship (launch1/2) | **NXDOMAIN** | `0 mx1/mx2.efwd.spaceship.net` | `v=spf1 include:spf.efwd.spaceship.net ~all` |
| elvanalpay.com | Spaceship (launch1/2) | **NXDOMAIN** | `0 mx1/mx2.efwd.spaceship.net` | aynı SPF |

**Beşte beş DMARC yok.** Bugün herhangi biri bu adlar adına posta gönderebilir.

---

## §1 · NEDEN `p=none` — ve neden `reject` DEĞİL

**RFC 7489 §6.3**, birebir:
> **none:** *"The Domain Owner requests no specific action be taken regarding delivery of messages."*
> **quarantine:** *"…be treated by Mail Receivers as suspicious."*
> **reject:** *"…reject email that fails the DMARC mechanism check."*

`p=none` **zorlayıcı değil** — hiçbir postayı reddetmez, yalnız rapor toplar. Risk sıfır, geri alınması tek kaydı silmek.

**`reject`'e neden atlamıyoruz:** parrhesia.one'ın giriş kapısı Supabase Auth'a bağlı (`api/auth.js`, bu turda okundu — Bearer token, Supabase `/auth/v1/user`). Uygulamanın **kendi kodunda posta gönderme yok** (29 .js dosyası tarandı, sıfır eşleşme; pozitif kontrol: aynı taramada `supabase` 11 dosyada bulundu — grep çalışıyor). **Ama Supabase'in kendisi doğrulama postası gönderiyor olabilir** ve gönderen adresi panelde ayarlanabilir. Bilmeden `reject` basmak kendi giriş postanı öldürebilir. `open`

---

## §2 · RAPOR ADRESİ TUZAĞI — sessiz başarısızlık

**RFC 7489 §7.1**, birebir:
> *"When a Mail Receiver discovers a DMARC policy in the DNS, and the Organizational Domain at which that record was discovered is not identical to the Organizational Domain of the host part of the authority component of a URI specified in the 'rua' or 'ruf' tag… 2. Prepend the string `_report._dmarc`. 3. Prepend the domain name from which the policy was retrieved… 4. Query the DNS for a TXT record at the constructed name."*
> *"In particular, the 'v=DMARC1' tag is mandatory and MUST appear first."*
> **"Where the above algorithm fails to confirm that the external reporting was authorized by the Report Receiver, the URI MUST be ignored by the Mail Receiver generating the report."**

**Türkçesi:** rapor adresi başka bir alan adındaysa, o alan adında bir izin kaydı olmalı. Yoksa **raporlar hiç gelmez ve kimse haber vermez.** Kayıt duruyor gibi görünür, kutu boş kalır.

Bu yüzden §3.2'deki dört kayıt **ihmal edilemez.**

---

## §3 · BASILACAK KAYITLAR

**Rapor adresi:** `dmarc@leventyilmaz.org` — çünkü bu turda ölçüldüğü gibi leventyilmaz.org'un MX'i **ve** SPF'i çalışıyor; bugün posta alabilen iki alan adından biri. ddl-limited.com'un postası kurulunca rua oraya taşınır, tek satır düzenleme.

### 3.1 · Beş DMARC kaydı

| nerede | ad | tür | değer |
|---|---|---|---|
| **Cloudflare** | `_dmarc` | TXT | `v=DMARC1; p=none; rua=mailto:dmarc@leventyilmaz.org; fo=1` |
| **Spaceship** ayvalik.ai | `_dmarc` | TXT | `v=DMARC1; p=none; rua=mailto:dmarc@leventyilmaz.org; fo=1` |
| **Spaceship** ddl-limited.com | `_dmarc` | TXT | `v=DMARC1; p=none; rua=mailto:dmarc@leventyilmaz.org; fo=1` |
| **Spaceship** leventyilmaz.org | `_dmarc` | TXT | `v=DMARC1; p=none; rua=mailto:dmarc@leventyilmaz.org; fo=1` |
| **Spaceship** elvanalpay.com | `_dmarc` | TXT | `v=DMARC1; p=none; rua=mailto:dmarc@leventyilmaz.org; fo=1` |

### 3.2 · Dört yetkilendirme kaydı — **hepsi leventyilmaz.org'da**

| ad (leventyilmaz.org altında) | tür | değer |
|---|---|---|
| `parrhesia.one._report._dmarc` | TXT | `v=DMARC1` |
| `ayvalik.ai._report._dmarc` | TXT | `v=DMARC1` |
| `ddl-limited.com._report._dmarc` | TXT | `v=DMARC1` |
| `elvanalpay.com._report._dmarc` | TXT | `v=DMARC1` |

leventyilmaz.org **kendisi için gerekmez** — rua kendi alanında, §7.1 devreye girmiyor.

### 3.3 · Bir takma ad — Spaceship yönlendirme paneli

`dmarc@leventyilmaz.org` → okuduğun bir kutuya yönlendir. **Bu adres yoksa raporlar düşer.**

---

## §4 · SIRA

```
1 · dmarc@leventyilmaz.org takma adını kur      (Spaceship yönlendirme)
2 · §3.2'deki DÖRT yetkilendirme kaydını bas    (leventyilmaz.org DNS)
3 · §3.1'deki BEŞ DMARC kaydını bas             (dördü Spaceship, biri Cloudflare)
4 · 24 saat bekle, bana ölçtür
5 · 2–4 hafta rapor topla, SONRA sıkılaştırma konuşulur
```

**2, 3'ten önce.** Ters sırada raporlar ilk günlerde sessizce düşer.

---

## §5 · AÇIK

```
open · Supabase Auth posta gönderiyor mu, gönderiyorsa hangi adresten
       (panel: Authentication → Emails → SMTP) — reject'e geçmeden önce şart
open · dmarc@leventyilmaz.org hangi kutuya yönlenecek — Founder'ın kesimi
open · fo=1 (hata örnekleri) rapor hacmini artırır; istemezsen çıkar, zararsız
open · parrhesia.one Cloudflare'de, diğer dördü Spaceship'te — iki ayrı panel, tek iş
```

---

*Ölç, doldurma. Kaydı hafızadan yazma. Panele Founder dokunur. Ve neşeli ol.*

**— CCE** · Cowork · 6 Ağustos 2026
