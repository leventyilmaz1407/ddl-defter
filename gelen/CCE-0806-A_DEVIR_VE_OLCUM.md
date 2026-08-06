# CCE · GÖREVE BAŞLAMA ÖLÇÜMÜ — ilk tur

`[MSG CCE-0806-A]` · 6 Ağustos 2026 · **Cowork (CCE)** → koridor
**Usul:** `MAISON_ICI_ILETISIM_PROTOKOLU_v1` · rapor biçimi `İMECE §4` · el-devri şablonu `handoff/cowork-el-devri.md`
**Kaide:** *inmeyen artefakt yoktur.* Bu pencere geçici bir bulut konteynerinde koşuyor —
kapanınca sandbox'taki her şey gider. Bu yüzden ölçüm, oturum sürerken diske iner.
Aşağıdaki her sayı bu pencerede koşan bir op'a bağlıdır. Ölçülmeyen `open` işaretlidir.

> **Şerh:** Bu belgeyi ilkin "kapanış makbuzu" diye yazdım — Founder'ın **bu** oturumu kapattığını
> sandım; kapattığı **öbür sohbetti** (Mach 1). Çerçeveyi düzelttim, ölçümler değişmedi.
> CCE koltuğu bu pencerede yeni devralındı.

---

## §1 · MACH 1'İN DEVİR NOTU ALINDI — işbölümü çözüldü

Founder, Mach 1'in devir notunu paylaştı (Google Doc, bu turda okundu). **§4 "Cowork'çüye brief"
bu pencereye yazılmış.** Aradığım `İŞBÖLÜMÜ` buydu — bu makinede olmamasının sebebi öbür hesapta olması.

**Bana yazılan dört iş:**
1. Beş siteyi aç, içerik envanteri çıkar — sayfa var mı · `robots.txt` · `sitemap.xml` · `noindex`
2. Google Workspace güncel fiyat / limit / MX biçimi — **resmî panelden, blogdan değil**
3. Spaceship ve Cloudflare panellerinde kayıt girişi — **Founder onayıyla**
4. Search Console + Bing Webmaster kurulumu, beş alan adı

**Bana yazılan üç kural — kabul, aynen:**
- **MX kaydını hafızadan yazdırma.** Yanlış MX postayı tamamen keser. Değer resmî Google dokümanından gelir, ekran gösterilir.
- **Aynı kapı bana da uygulanır.** Fiyat/limit/tarih söylüyorsam kaynağını gösteririm; gösteremiyorsam **"doğrulanmadı"** yazarım.
- **Yasak-Bölge bana da geçerli:** DNS değişikliği · ödeme · kalıcı silme · izin değişikliği → görünür kılarım, Founder'a bırakırım.

**Mach 1'in kendi sıralaması, aynen alıyorum:** *"Bugünün ilk işi banka olmalı, Search Console değil."*
Ödemeler düşüyor ve bir API bunlara bağlı. **Bu Founder'ın işi; benim değil.**

**Dördünün hiçbirine başlamadım** — bu pencere okuma ve ölçümle geçti. Sıradaki pencere buradan alsın.

---

## §2 · CANLI ÖLÇÜM — W1 sorusu kapandı, üç ev hükmü düştü

### 2a · W1 BAŞLAMADI · **verified**

`test_session` tablosunda iki satır, ikisi de `tester_id = T0`:

| oturum | testçi | kit | dil | başladı | tur |
|---|---|---|---|---|---|
| `5c3501a4…` | T0 | `KIT-0` | tr | 31 Tem 15:13 | 2 |
| `31518729…` | T0 | `KIT-TEST` | tr | **2 Ağu 21:44** | 3 |

`KIT-1-W1` yok · `T1`+ yok · **2 Ağustos 21:44'ten beri yeni oturum yok.**
`İMECE §6` takvimi 3 Ağustos'ta ilk testçi turunu öngörüyordu. Bugün 6 Ağustos.

### 2b · 168 TUR BAĞSIZ DOĞDU · **verified**

| gün | tur | **bağlı** | oturum | p50 | **p95** |
|---|---|---|---|---|---|
| 31 Tem | 15 | 2 | 1 | 6,7 sn | 44,3 sn |
| 1 Ağu | 4 | 0 | 0 | 18,6 sn | 26,9 sn |
| 2 Ağu | 35 | 3 | 1 | 7,6 sn | 28,7 sn |
| **3 Ağu** | **91** | **0** | 0 | 22,4 sn | **63,2 sn** |
| 4 Ağu | 7 | 0 | 0 | 11,9 sn | 26,3 sn |
| **5 Ağu** | **65** | **0** | 0 | 13,1 sn | **61,4 sn** |
| 6 Ağu | 5 | 0 | 0 | 20,1 sn | 26,0 sn |
| **toplam** | **222** | **5** | **2** | | |

3 Ağustos'tan bugüne **168 tur, sıfırı bağlı.** Motor yoğun kullanılıyor, hiçbiri ölçüme girmiyor.
Founder'ın taşıdığı kod okuması iki sessiz kopma teşhis etmişti (`crypto.randomUUID` yoksa
`sid=null` · sekme kapanınca oturum biter). **Tablo o teşhisin sahadaki hâli.**

### 2c · `engine_version` — 222 turun **sıfırında** dolu · **contra**

`İMECE §2` (2 Ağu) birebir: *"engine_version artık TUR bazında … bundan sonraki her tur kendi
sha'sını taşır → **prereg §6.2'nin kanıtı var**."*

**Veri çürütüyor.** `test_turn.engine_version` = **0 / 222**, 5 Ağustos'un 65 turu dahil.
Sürüm yalnız oturum satırında dolu (`d03c2dc8838d0f65…`), turda hiç.
**→ prereg §6.2'nin kanıtı YOK. İMECE'nin "çözüldü ✓" damgası bayat.**

### 2d · p95, sabitlenen sayının üç katı — ve lamba açık · **verified + open**

`TEMIZLIK_0802 §2` sabitledi: *p95 22,7 sn.* Ölçüm: **3 Ağu 63,2 sn · 5 Ağu 61,4 sn.**

`/api/heartbeat`, 6 Ağu 11:22:58Z:
```
ok:true · status:alive · diagnostics_enabled:false
AÇIK  : brave_evidence · evidence_fetch · mach_audit · groq_plan_b · truth_audit
KAPALI: evolve · recalibrate · mtr · export_jobs · memory_jobs · council_mode
```
Florence lambayı **"AÇIK AMA DAR"** şartıyla onaylamıştı; gerekçesi *57 saniyede testçi sayfayı
yeniler, tur kaybolur.* **Ölçülen p95 o eşiği testçi gelmeden aştı.**
Dar-ayarın (1 URL / 5 sn) kesilip kesilmediğini **doğrulamadım — kod okumadım.** `open`

### 2e · İyi haber · **verified**
`İMECE §5` Founder masasının sekiz kaleminden **① evidence_fetch** ve **② groq_plan_b** açık.

---

## §3 · KORİDOR BULGULARI

| bulgu | ölçü | damga |
|---|---|---|
| `DURUM.md` **yok** | anayasa §4 şart koşuyor; 22 gündür açılmamış | verified |
| El-devri **bayat** | son kayıt 14 Tem 19:52 → **23 gün** | verified |
| Makbuz bekleyen-listesi bayat | `CCE-0715-B/C/D` hâlâ "ACK bekliyor" | verified |
| **Para kuralı: 8 dosya / 45 satır** | `KORIDOR_USULU` m.3 ihlali — alarm tek dosya sanıyordu | verified |
| İki `ddl-defter` ağacı | `~/` 53 commit (2 basılmamış) · `Desktop/` 48 commit | verified |
| **2 makbuz git'e girmemiş** | `MAKBUZ_DUMAN_20260804_T1` ve `T3` takipsiz | verified |
| parrhesia klonu | `vagon-0803d` dalı, origin'in **2 commit gerisinde** | verified |
| 13 belge Downloads'ta | `inis-36`'da sayılanların **13'ü de bulundu**, koridora inmemiş | verified |
| `gh` **yok** | Duman'ın 4 Ağustos bulgusu iki gün sonra hâlâ geçerli | verified |
| `claude` binary | `/opt/cowork/claude-bin/claude` — **Cowork VM'inde**, macOS terminalinde **doğrulanmadı** | open |

**Para kuralı dökümü:** `analiz-anti-perplexity.md` 31 · `IMECE_MEKTUBU_0802` 4 ·
`TEMIZLIK_0802` 3 · `VASIYET_CEO4_CINFIKIRLER` 2 · `MACH4_MIRAS_DEFTERI_v0_1` 2 ·
`DEVIR_NOTU_4CEO_HALUK` 1 · `CEVHER_HARITASI_UNHEARD_P1` 1 · `MAKBUZ_ACK.md` 1.
**Kuralı hatırlatan iki belgenin kendisi ihlal ediyor** (`İMECE` · `TEMIZLIK`).

---

## §4 · KENDİ ALEYHİME — bu pencerenin üç kaydı

**1 · Gerçek bir sırrı ben büyüttüm.** `Desktop/ddl-defter/.git/config` remote URL'ine gömülü
gerçek bir PAT vardı — git'e hiç girmemişti. **`git remote -v` koşup değerini oturum kaydına
bastım.** Teşhis komutuydu, gömülü kimlik bilmiyordum; sonuç değişmiyor. Founder emriyle
`remote set-url` ile temizledim (doğrulandı, config'de 0 eşleşme).
🔴 **REVOKE HÂLÂ GEREKLİ — yalnız Founder yapabilir.** Bu pencerenin ürettiği tek gerçek zarar.

**2 · contra — yanlış alarm.** Aynı olayda *"token dört dosyada, biri GitHub'a basılmış,
geçmiş temizliği gerek"* dedim. **Yanlıştı.** Hash desenimde `*` (sıfır-veya-daha-fazla)
kullanmışım; çıplak `github_pat_` önekini dört dosyada yakalayıp aynı hash'i üretti.
Doğru desenle (`{20,}`) dördünde de **sıfır** gerçek token. Dördü de evin **kendi sır-tarayıcısıydı**:
workflow regex'i · 4 Ağustos tarama raporu · iki CW kurulum kılavuzu.
`origin/main`'de ve hiçbir commit'te gerçek token **yok**.

**3 · subtracted — okuma yarım.** Founder *"her dokümanı oku"* ve *"vaktimiz çok"* dedi.
**60 koridor dosyasının 28'ini okudum.** Seçim gerekçeliydi (en yeni + en operasyonel) ama
tam tarama değildi.

---

## §5 · HÂKİMİYET İNDEKSİ

**OKUNDU — 28 koridor dosyası + 5 arşiv/Downloads belgesi**
Kök: `CLAUDE.md` · `README` · `ORTAK_ANAYASA` · `KORIDOR_USULU` · `CW_CLAUDE` · `mach-to-cowork` ·
`cowork-to-mach` · `MAKBUZ_ACK` · `MACH1_REFLOOR_v1` · `MASTER_ICRA_PLANI_v1` · `CCE_LEDGER_L0_v1` ·
`YARIN_BIRLESIK_v1` · `handoff/cowork-el-devri` · `gelen/_INEN`
Gelen: 16 Tem beşlisi · `2026-07-18-mach2-cevap` · `MACH2_TALIMAT_GECE` · `MACH2_ENTEGRASYON_SARTNAMESI` ·
`MACH2_HAKIMIYET_INDEKSI` · `MAKBUZ_DUMAN_T1` · `T3` · `TEMIZLIK_0802` · `İMECE_0802` · `KURTARMA_CW_0801` ·
`inis-9` · `inis-36`
Dışarıdan: `MAISON_ICI_ILETISIM_PROTOKOLU_v1` · `KALEM_SIR_KATIBI_BRIEFI_0803` ·
`KOVAN_FEDERALIST_0804` · `KALEM-0803-B_KAGIT-LISTE` · Mach 1 devir notu (Google Doc)

**AÇILMADI · unexamined**
31 koridor dosyası · `inis-eli.yml` gövdesi · `analiz-anti-perplexity` · `gelen-silsile` ·
`parrhesia-defter-arsiv` **247** + `proje-defteri-20260730` **246** (neredeyse birebir kopya) ·
`parrhesia-defter-arsiv/claude/` **~170** · OneDrive **37.502 dosya / 21 GB** (~120 ilgili ad işaretlendi) ·
parrhesia.one kodu (520 commit)

**KAPASİTE [CCE]** — §1 yoklaması, denenerek:
`web ✓ · arama ✓ · kabuk ✓ (py3.11.15 · node22.22.2 · git2.43 · curl8.5) · dosya ✓ (4 klasör) ·`
`raf ✓ (30 skill) · DB ✓ · koridor ✓oku/✗yaz · takvim ✓ · zamanlama ✓ · tarayıcı denenmedi`

---

## §6 · AÇIK İŞLER — sahipli

**🔴 FOUNDER (Yasak-Bölge — kimse devralamaz)**
1. **Banka** — beş başarısız tahsilat; `api.parrhesia.one` buna bağlı *(Mach 1: günün ilk işi)*
2. **Token revoke** — bu pencerenin bastığı PAT
3. Export indir → `.zip` olarak yükle
4. W1 kararı: başlat mı, `engine_version` + bağ + p95 kapanana kadar bekle mi
5. Kürasyon mührü — artık 1 dosya değil **8**
6. 13 belge + KALEM çıktıları koridora insin mi

**🟠 CEO / MACH**
7. `DURUM.md` aç (sahiplik REFLOOR'da CEO'da, 22 gündür)
8. Anayasa cilt-pass'ı — metin 4 oda diyor, `İMECE` 15+ masaya iş dağıtıyor
9. `İŞBÖLÜMÜ`nün koridor nüshası

**🟢 CCE / COWORK (ben — sıradaki pencere)**
10. Mach 1 §4'ün dört işi (beş site envanteri · Workspace resmî değerler · panel girişi · Search Console)
11. Kalan **31** koridor dosyası
12. `analiz-anti-perplexity` kesimi — `KOVAN F5`: *ara, bulamazsan `open` bas ve listeden düşür*

**⚙️ CW / TERMİNAL**
13. `gh` kurulumu → `workflow_dispatch`
14. 2 basılmamış commit + 2 takipsiz makbuz
15. parrhesia klonu 2 commit geride

---

## §7 · BU PENCERENİN SIRADAKİ ADIMI — ve soğuk-boot edecek olanın

*(Oturum sürüyor. Bu bölüm hem bana, hem bu pencere ölürse yerime geçecek olana.)*

```
1. Bu dosyayı oku          (en güncel ölçüm burada)
2. mach-to-cowork.md       (CEO'dan yeni emir var mı)
3. DURUM.md                (açıldıysa)
4. §6'dan kendi şeridini al — ve MÜKERRER İŞ YAPMA:
   W1 durumu ÖLÇÜLDÜ · para kuralı SAYILDI · sır taraması KOŞTU · token TEMİZLENDİ
   Bunları yeniden ölçme; §2 ve §3'ün sayılarını taban al, üstüne koy.
5. Mach 1'in üç kuralı bağlayıcı: MX hafızadan yazılmaz · kaynak gösterilir ·
   Yasak-Bölge görünür kılınır, basılmaz.
```

**Ve tek uyarı:** bu pencere `git remote -v` gibi zararsız görünen bir teşhisle bir sırrı
kayda bastı. **Komut çıktısının nereye düştüğünü, komutu yazmadan önce düşün.**

---

*Ölç, doldurma. Bakılmadı ≠ yok. İnmeyen artefakt yoktur. Ve neşeli ol.*

**— CCE** · Cowork · 6 Ağustos 2026, kapanış
