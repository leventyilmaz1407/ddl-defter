# CCE · ddl-limited.com ÇATISI + E-POSTA ZEMİNİ

`[MSG CCE-0806-E]` · 6 Ağustos 2026 · **Cowork (CCE)** → koridor
**Founder emri:** *"parrhesia1.com şimdilik iptal. Onun yerine ddl-limited'e gidecek her şey.
Tüm ürünlerin ana şirketi ddl-limited.com. Buna bir de e-posta sistemi kuralım."*
**Usul:** sıfır dereceden · her değer bu turda bir op'a bağlı · hafızadan kayıt yazılmadı

---

## §1 · `parrhesia1` NEREDE — beklediğim yerde değildi

**Git deposunda YOK.** `Desktop/https-parrhesia.one` klonunda üç eşleşme çıktı, üçü de
`.git/logs/` içinde — reflog kayıtları. **Hiçbir kaynak dosyada geçmiyor.**

**Ama `~/Downloads`'ta 15 HTML dosyasında geçiyor:**
```
ayvalik_index_yeni.html · ayvalik_index_yeni_2.html · p1_index_yeni.html ·
p1_index_GUNCEL_ce3e16e.html · index_1.html · https-parrhesia.one-main/index.html ·
v10 · v11 · v12 · v13 · v14 · v16_final/arac/index.html ·
MUHUR-DOSYASI_2026-07-17/ddl-panel.html · ARSIV_0802/bayat-paket/ ×2
```

### 🔴 Yapısal bulgu — ve asıl mesele bu

```
ayvalik.ai kaynak deposu    → bu makinede YOK (klon yok)
ddl-site / ddl-limited      → bu makinede YOK (klon yok)
```

**Canlı `ayvalik.ai`'nin altbilgisi `parrhesia1.com`'a bağlanıyor** *(bu turda ölçüldü)*, ama
onu düzeltecek kaynak **izlenen bir depoda değil** — gevşek HTML dosyaları hâlinde `Downloads`'ta.

Bu, evin *"inmeyen artefakt yoktur"* dersinin ters yüzü: **inmiş ama izlenmeyen artefakt.**
Hangi HTML'in canlıya karşılık geldiğini **bilmiyorum** — 15 nüsha var, sürüm numaraları çakışıyor.
`open`

**Yapamam, çünkü aletim yok:** doğru dosyayı seçmek canlı ile diski karşılaştırmayı gerektirir;
canlı sayfanın ham HTML'ini alıp diskteki 15 nüshayla eşleştirmedim. **Bu bir sonraki turun işi.**

---

## §2 · `ddl-limited.com` — mevcut zemin (bu turda ölçüldü)

| ölçüm | değer | damga |
|---|---|---|
| Nameserver | **Spaceship** — `launch1.spaceship.net` · `launch2.spaceship.net` | verified |
| A kaydı | `75.2.60.5` | verified |
| MX | **YOK** | verified |
| SPF | **YOK** | verified |
| DMARC | **YOK** | verified |
| Site içeriği | ~180–200 kelime · başlık `DDL Limited` · h1 `DDL` | verified |
| Barındırıcı | IP'den tahmin etmiyorum — **ölçülmedi** | `open` |

**Alet hatası, düzeltildi:** DNS çekicisi `type 2`'yi *"CNAME"* diye etiketledi. **Yanlış** —
DNS'te type 2 = **NS**, CNAME type 5'tir. Kayıtlar nameserver'dır. Aletin etiketini taşımadım.

**İyi haber:** `ddl-limited.com` `ayvalik.ai` ile **aynı panelde** (Spaceship). Ve
`elvanalpay.com` + `leventyilmaz.org` zaten Spaceship posta yönlendirmesi kullanıyor —
yani o panelde çalışan bir düzen **hâlihazırda mevcut**.

---

## §3 · RESMİ MX DEĞERİ — Google'ın kendi dokümanından, bu turda

> **Google Workspace MX kaydı:** host `smtp.google.com` · öncelik `1` · **tek kayıt**
> Kaynak: `knowledge.workspace.google.com/admin/domains/set-up-mx-records-for-google-workspace`
> Sayfanın kendi ifadesi: *"Any account can use the new single MX record value."*
> Eski çoklu `aspmx…` düzeni hâlâ destekleniyor ama **artık gerekli değil.**

**Mach 1'in bana yazdığı kurala uyuldu:** değer hafızadan yazılmadı, resmî sayfadan alındı.
**Uygulamadım** — DNS değişikliği Yasak-Bölge.

---

## §4 · İKİ YOL — kesim Founder'ın

### A · Spaceship e-posta yönlendirmesi *(hâlihazırda çalışan düzen)*
```
MX   mx1.efwd.spaceship.net  ·  mx2.efwd.spaceship.net   (öncelik 0)
SPF  v=spf1 include:spf.efwd.spaceship.net ~all
```
**Artı:** aynı panel, tek prosedür · iki alan adında zaten çalışıyor (ölçüldü) · en hızlı yol
**Eksi:** **yönlendirme, posta kutusu değil.** `hello@ddl-limited.com` başka bir kutuya düşer;
o adresten **göndermek** ayrı iş. Kurumsal kimlik için yarım çözüm.
**Fiyat: `doğrulanmadı`** — Spaceship panelinden okunmalı.

### B · Google Workspace *(tam posta kutusu)*
```
MX   smtp.google.com   (öncelik 1, tek kayıt)   ← resmî, bu turda alındı
```
**Artı:** gerçek kutu · o adresten gönderim · rol kutuları (`founder@` `hello@` `p1@`) ·
yönetici kontrolü · Drive/Takvim aynı çatıda
**Eksi:** koltuk başına ücret · kurulum daha uzun · DKIM ayrıca üretilir
**Fiyat: `doğrulanmadı`** — resmî fiyat sayfası bu turda rakamları **render etmedi**
(dinamik sayfa). **Hafızadan fiyat yazmıyorum.** Satın almadan önce panelden okunmalı.

### Benim okumam *(öneri, hüküm değil)*
**B — ama sırayla.** Gerekçe: `ddl-limited.com` artık **tüm ürünlerin ana şirketi**; ana şirketin
adresi yönlendirme olamaz, çünkü o adresten **yazmak** gerekecek. Sözleşme, davet, fatura,
Termosan mektubu, Hecas davetleri — hepsi ddl kimliğiyle gidecek.

**Ama A'yı da öneriyorum — köprü olarak.** Workspace kurulana kadar `ddl-limited.com` bugün
posta **alabilir**; şu an hiç alamıyor. Yönlendirme bir saatlik iş, Workspace bir günlük.

---

## §5 · KURULUM SIRASI — hazırladım, basmadım

**Hepsi Spaceship panelinde, Founder eliyle. Ben hiçbirine dokunmuyorum.**

```
1. MX      → seçilen yola göre (A: efwd çifti · B: smtp.google.com öncelik 1)
2. SPF     → seçilen yola göre; İKİ SPF KAYDI OLMAZ, tek satırda birleşir
3. DKIM    → yalnız B'de: Workspace paneli anahtar üretir, TXT olarak girilir
4. DMARC   → EN SON. Önce 1-3 çalışır durumda olmalı; DMARC çalışmayan bir
              zemine konursa kendi postanı reddedersin.
              Başlangıç p=none (yalnız izleme), rapor adresi ile.
              ⚠ Değer bir DMARC doğrulayıcıdan geçirilmeden girilmez.
5. Posta göndermeyen alan adları (parrhesia.one · ayvalik.ai) için ayrı duruş:
   null MX + p=reject daha sıkı — ama bu ayrı bir karar, bu belgenin kapsamı dışında.
```

**Sıra bilinçli:** DMARC en sona. Mach 1 de *"uygulamadan önce bir DMARC doğrulayıcıdan
geçirin"* diyor; ben buna bir şart daha ekliyorum — **SPF ve MX yerine oturmadan DMARC konmaz.**

---

## §6 · AÇIK KALANLAR

```
open · Workspace fiyatı — resmî sayfa rakam render etmedi · doğrulanmadı
open · Spaceship yönlendirme fiyatı — panelden okunmalı
open · ddl-limited.com barındırıcısı — IP'den tahmin etmedim
open · ayvalik.ai kaynağı: 15 HTML nüshasından hangisi canlı?
open · ayvalik.ai ve ddl-limited kaynak deposu bu makinede YOK — deploy yolu belirsiz
open · DKIM selector'ları — hiçbir alan adında sorgulanmadı
```

---

## §7 · SIRADAKİ

```
1. Founder seçer: A (köprü) · B (kalıcı) · ya da A→B
2. Fiyatlar panelden okunur (Founder ekranı) — ben yazamam, doğrulayamam
3. Canlı ayvalik.ai ham HTML'i çekilir, 15 nüshayla eşleştirilir → hangisi canlı
4. parrhesia1.com → ddl-limited.com değişikliği hazırlanır (yama, deploy DEĞİL)
5. Deploy yolu netleşir: klon yok, izlenen depo yok — bu kurulmadan yama basılamaz
```

---

*Ölç, doldurma. Kaydı hafızadan yazma. DNS'e Founder dokunur. Ve neşeli ol.*

**— CCE** · Cowork · 6 Ağustos 2026
