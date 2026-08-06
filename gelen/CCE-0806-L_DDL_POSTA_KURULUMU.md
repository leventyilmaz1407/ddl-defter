# CCE · ddl-limited.com E-POSTA KURULUMU — Yol A, Spaceship yönlendirme

`[MSG CCE-0806-L]` · 6 Ağustos 2026 · **Cowork (CCE)** → Founder
**Sınır:** panele **Founder** girer. Ben hazırlarım ve sonradan ölçerim; **basmam.**
**Kaynak disiplini:** adımlar Spaceship'in resmî bilgi tabanından **bu turda** çekildi; DNS değerleri
senin çalışan iki alan adından **bu turda** ölçüldü. Hafızadan hiçbir şey yazılmadı.

---

## §0 · ZEMİN — bu turda ölçüldü, temiz sayfa

```
ddl-limited.com   NS      launch1.spaceship.net · launch2.spaceship.net   → DNS zaten Spaceship'te
                  MX      YOK
                  SPF     YOK
                  _dmarc  NXDOMAIN
```

**Çakışma riski sıfır.** Hiç posta kaydı yok; ne SPF çatallanması ne MX kalıntısı.
Ayrı bir DNS devretme işi de yok — nameserver'lar zaten doğru panelde.

---

## §1 · PANEL ADIMLARI — Spaceship resmî sayfasından, birebir

```
1. Domain Manager → ddl-limited.com → yan panelden  Email Forwarding
```

**Tek adres için** (resmî metin):
> *"For all messages to a single address, find **To a single address** and insert the email
> in the **Forwarding to** section. Once done, select **Set rule**"*

**Çok adres için** (resmî metin):
> *"To set individual forwarding rules for individual email addresses, find **To multiple
> addresses** and select **Set rule**. Then complete the **Forwarded from** and **Forwarded to**
> sections, and select **Set rule** again"*

**Sınır** (resmî metin): *"You can create up to 100 different aliases with Spaceship."*
Yüz takma ad — ihtiyacımızın çok üstünde.

**Fiyat: `doğrulanmadı`.** Resmî sayfa fiyat yazmıyor. Panelde görürsün.

---

## §2 · HANGİ ADRESLER — öneri, kesim senin

ddl-limited.com artık **tüm ürünlerin ana şirketi.** Buna göre:

| adres | ne için | öncelik |
|---|---|---|
| `hello@` | genel giriş — sitede yazacak adres | 🔴 |
| `founder@` | sen | 🔴 |
| `privacy@` | KVKK / rıza | 🔴 |
| `dmarc@` | **DMARC raporları** — CCE-0806-K bunu bekliyor | 🔴 |
| `parrhesia@` | P1 | 🟡 |
| `ayvalik@` | ayvalik.ai | 🟡 |
| `hukuk@` | sözleşme / Federalist masası | 🟢 |
| `zeytin@` · `kitap@` | dd-olive · ddl-kitap | 🟢 gelecek |

**Bir kalem hatırlatması:** `İMECE §5` md.④ rıza metni için **`privacy@parrhesia.one`** diyor.
Ana şirket artık ddl olduğuna göre bu adres taşınmalı mı — **kesim senin**, ama
rıza metninde hangisi yazılıysa **o kurulmalı**, yoksa metin çalışmayan bir adrese işaret eder.

---

## §3 · KAYITLAR OTOMATİK Mİ GELİYOR — `open`, ama düşme planı hazır

Spaceship'in sayfası panelin MX/SPF kayıtlarını kendi yazıp yazmadığını **söylemiyor**
(bu turda arandı, **yok**). Yani bu bir `open`.

**Kuvvetli işaret:** senin çalışan iki alan adında kayıtlar duruyor — bu turda ölçüldü:
```
leventyilmaz.org   MX   0 mx1.efwd.spaceship.net · 0 mx2.efwd.spaceship.net
                   TXT  v=spf1 include:spf.efwd.spaceship.net ~all
elvanalpay.com     MX   0 mx1.efwd.spaceship.net · 0 mx2.efwd.spaceship.net
                   TXT  v=spf1 include:spf.efwd.spaceship.net ~all
```
İkisinin panel tarafından mı yoksa elle mi yazıldığını **bilmiyorum.**

**Bu yüzden: önce kuralı kur, kayıt girme.** 15–30 dakika bekle, bana ölçtür.
Kayıtlar gelmediyse yukarıdaki değerler elle girilir — ve o değerler **ölçümden**, hafızadan değil.

**İKİ SPF KAYDI OLMAZ.** Şu an hiç SPF yok, çakışma riski yok — ama ileride Workspace eklenirse
**tek satırda birleştirilir**, ikinci kayıt eklenmez. İki SPF kaydı SPF'i tamamen geçersiz kılar.

---

## §4 · SONRASI — doğrulama bende

Kuralı kurduğunda söyle:
```
1 · MX + SPF ölçerim (negatif kontrollü)
2 · sen bir test postası at, geldi mi söyle
3 · ANCAK O ZAMAN DMARC (CCE-0806-K)
```

**DMARC çalışmayan bir zemine konmaz.** Sıra bozulursa raporlar sessizce düşer.

---

## §5 · SIRA ÖNERİSİ — CCE-0806-K'yı ETKİLİYOR

CCE-0806-K raporları `dmarc@leventyilmaz.org`'a yolluyor, çünkü yazıldığı anda posta alabilen
tek yer orasıydı. **Burası kurulursa rua doğrudan `dmarc@ddl-limited.com` olur** ve
yetkilendirme kayıtları da ana şirkette toplanır — tek panel, taşıma yok.

**Öneri: bu iş (L) K'dan ÖNCE yapılsın.** Hiçbir şey basılmadığı için maliyeti sıfır;
sonradan taşımanın maliyeti dört kaydın yeniden yazılması.

Founder K'yı olduğu gibi basmayı seçerse de çalışır — yalnız ileride bir taşıma işi doğar.

---

## §6 · AÇIK

```
open · Spaceship yönlendirme fiyatı — resmî sayfada yok, panelde
open · panel MX/SPF'i otomatik mi yazıyor — sayfa SUSUYOR (bu turda arandı)
open · rıza metninde hangi privacy@ yazılı (parrhesia mı, ddl mi)
open · ddl-limited.com barındırıcısı — apex A kaydı var, IP'den satıcı tahmin ETMEDİM
```

---

**Kaynak:**
- [How to Set Up Domain Email Forwarding — Spaceship](https://www.spaceship.com/knowledgebase/domain-email-forwarding/) *(bu turda çekildi)*

*Ölç, doldurma. Kaydı hafızadan yazma. Panele Founder dokunur. Ve neşeli ol.*

**— CCE** · Cowork · 6 Ağustos 2026
