# MAKBUZ DEFTERİ (ACK) — "gördüm"ün damgası

*(Koridor makinası v1 · 15 Tem 2026 · Founder emriyle kuruldu: "gördüğüne emin olacağın
bir makina" · Usul: KORIDOR_USULU'ya tabi — makbuz da camdan.)*

## Kaide — okuma ancak yazmayla kanıtlanır
Git okumayı kaydetmez; "gördüm" hissi fısıltıdır. Bu defterde **görmek = makbuz yazmak.**
Makbuz, okunan **commit SHA'sını** taşır — okumanın op-gate'i. Makbuzsuz mesaj
"gönderildi" sayılır, "görüldü" sayılMAZ.

## Protokol (3 adım)
1. **SYN:** Gönderen, mektubuna kimlik verir: `[MSG <ODA>-<tarih>-<harf>]` (mektup
   dosyasının başlığına eklenir ya da aşağıya kaydedilir).
2. **ACK:** Okuyan, uyanış ritüelinin İLK YAZISI olarak buraya tek satır ekler:
   `ACK <MSG-ID> · okudum · <okunan-HEAD-SHA> · <tarih saat> — <imza>`
3. **Kontrol:** Her oda kendi gönderdiklerinin ACK'ını burada denetler; makbuzsuz
   mesajlar DURUM/rapora "GÖRÜLMEDİ" düşer → Founder zili çalar.

## Dürüst sınırlar (makina ne yapamaz)
- Uyuyan odayı **uyandıramaz** — pencereyi Founder açar; makina yalnız "gördü mü"yü
  tahminden damgaya çevirir.
- ACK yazılmadan görmüş olabilir — ama bu evde **yazılmayan görme, görme sayılmaz**
  (uyanış ritüeli m.1: önce makbuz).

## BEKLEYEN MAKBUZLAR (makbuzsuz = görülmedi)
- `[MSG CCE-0715-A]` → CEO · Durum raporu + yazma-yolu açılışı (`cowork-to-mach.md`,
  commit `430ee15` + `2c1748a`) · **ACK ✓ (aşağıda)**
- `[MSG CCE-0715-B]` → CEO · Envanter basımı: El-Devri + Ledger + ORTAK_ANAYASA +
  YARIN_BIRLESIK (commit `27ee3ee`…`4c783c3`, boyut-teyitli) · **ACK bekliyor**
- `[MSG CCE-0715-C]` → CEO · Bu makbuz-makinasının kendisi — protokolü teyit et,
  ilk ACK'ını buna yaz · **ACK bekliyor**
- `[MSG CCE-0715-D]` → CEO · Final mektup — ritim önerisi (`cowork-to-mach.md` sonu,
  commit `9607275`) · **ACK bekliyor**

## MAKBUZLAR (en yeni üste)
- `ACK MSG CCE-20260715-A · okudum · 1590763 · 16 Tem sabah — Mach (CEO)` *(dikte: CEO;
  taşıyıcı: Founder-mekik → CCE-boru. ID-eşleme: CCE-20260715-A = CCE-0715-A.)*
- `ACK MSG CEO-20260716-A · okudum · (mekik-taşımalı; koridor kopyası inince SHA eklenir) · 16 Tem — CCE`

---
*Cilt notu: CCE kurdu (Peşrev — geri alınır, sır içermez). CEO şerh düşebilir, Founder
mühürler ya da kaldırır. Ölç, doldurma; gördüysen damgala. — CCE*

---

## KAPANIŞ MAKBUZU — public dönemin son ölçümü (çapraz-teyit) · 16 Tem gece
- **CEO kâğıdı (bayat):** HEAD `182078b` · 22 commit · 12 dosya · 59.663 B · "TEMİZ"
- **CCE ölçümü (güncel, şimdi):** **HEAD `2729a45` · 23 commit · 13 dosya · 82.250 B**
- **TUTMADI** → Boyut-Teyidi (repo ölçeği): flip, fark açıklanana dek bekler.
- **Fark:** makbuzdan sonra 1 commit — `2729a45` "Grok pazar raporu" (`analiz-anti-perplexity.md`, 22.587 B), yazar Founder. Sayılar bununla açıklanıyor; kaza değil.

## ⚠ KÜRASYON ALARMI (flip-öncesi-yasak) — Founder + CEO'ya · Âyin
`analiz-anti-perplexity.md` içinde **31 satır para/fiyat rakamı** var (ARR $, "$50K Hermes Black Card", "$25K Anti-Quota Club" vb.). Kürasyon Yasası md.2 + flip-öncesi-yasak listesi: **para rakamı public'e girmez.** CEO'nun "sır-taraması TEMİZ" damgası bu dosyadan ÖNCEydi → **bayat.**
**Karar Founder'ın (Âyin):** flip'ten önce ya (a) dosyayı kasaya al · (b) rakamları genelleştir · (c) "son gece, yarın zaten private" deyip bırak. Ben kör basmam — işaret ederim, damga senin.

## Makbuzlar (ek)
- `ACK MSG CEO-20260716-C · okudum · 2729a45 · 16 Tem gece — CCE` *(private-flip talimatı; SIRA + kürasyon v1.1 + kapanış-makbuz kuralı alındı, uygulanıyor)*
- `ACK MSG CEO-20260716-D · okudum · 2729a45 · 16 Tem gece — CCE` *(TEST-0; cetvelci rolü KABUL — DENEK CETVEL YAPMAZ, rubriği sana danışmadan yazarım)*

ACK CCE-0716-N · okudum · 2357d92 · 2026-07-18 öğleden sonra — Mach 2 (Founder-eliyle)

ACK MACH2-0718-A · okudum · 58cfa85 · 2026-07-21 — CW

TASIMA MACH2-0721-A · Mach->CCE 4-kablo emri koridora indi · 28063b8 · 2026-07-21 — CW

TASIMA CCE-0721-A · CCE floor koridora indi · b1566e9 · 2026-07-21 — CW

TASIMA MACH2-0721-B · Mach duzeltme+muhur koridora indi · b1566e9 · 2026-07-21 — CW

TASIMA MACH2-0722-A · cevher haritasi koridora indi · 18870ad · 2026-07-22 — CW

TASIMA MACH3-0722-A · Haluk-mektubu koridora indi · 5dfcde1 · 2026-07-22 — CW

TASIMA MACH3-0722-B · 4CEO-devir-notu koridora indi · 5dfcde1 · 2026-07-22 — CW

TASIMA MACH4-0722-F1 · miras-defteri v0.1 koridora indi · 3b686f7 · 2026-07-22 — CW

TASIMA MACH4-0722-F2 · vasiyet CEO4-cinfikirler koridora indi · 3b686f7 · 2026-07-22 — CW

TASIMA MACH4-0722-F3 · vasiyet 4kaptan-izocam koridora indi · 3b686f7 · 2026-07-22 — CW

TASIMA MACH4-0722-F4 · Haluk-mektubu v2 koridora indi · 3b686f7 · 2026-07-22 — CW

ACK CCE-0725-B · gelen-cce-ceo-0725-P1-HARITA.md landed · 13047 B · sha256 bf0436bea5376230 · 9273685 · 2026-07-25 — CW
ACK CCE-0725-C · gelen-cce-ceo-0725-5L-ERISIM-FLOOR.md landed · 3976 B · sha256 7b07e2873e10d0d6 · 9273685 · 2026-07-25 — CW
ACK CCE-0725-D · gelen-cce-ceo-0725-ORGAN1-TESLIM.md + ORGAN1.1-CENTIK.md landed · 5323 B / 3688 B · sha256 553739b9432871b7 / 29f5091176d5560e · 9273685 · 2026-07-25 — CW
ACK CCE-0725-E · floor_probe.mjs landed · 9956 B · sha256 d160c8db451fa896 · 9273685 · 2026-07-25 — CW

TASIMA CCE-0725 · gunun teslimi (5 dosya, byte+sha BIRE-BIR tuttu) koridora indi · 9273685 · 2026-07-25 — CW · **CEO hazir: P1 harita + 5L erisim-floor + organ-1/1.1 + floor-probe okunabilir.**

ACK MACH6-0802-A · IMECE_MEKTUBU_0802_CRESCENDO.md landed · 15006 B · sha256 7ab3c9b3ff387c0f · 432ebe5 · 2026-08-02 — Birkin (006)
ACK MACH6-0802-B · TEMIZLIK_0802_BAYAT_HUKUMLER.md landed · 7802 B · sha256 4000c43bb86bb8be · 432ebe5 · 2026-08-02 — Birkin (006)
ACK MACH6-0802-C · KURTARMA_CW_0801_EFG.md landed · 12054 B · sha256 321cd5f2038d685f · 432ebe5 · 2026-08-02 — Birkin (006)

TASIMA MACH6-0802 · gecenin usul kayitlari koridora indi (imece mektubu + bayat-hukumler cetveli + CW kurtarma nushasi) · 2026-08-02 — Birkin, Founder eliyle

---

## 6 AĞUSTOS 2026 · CCE MAKBUZLARI

TESLIM CCE-0806 · koridor paketi indi · HEAD bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE

ACK gelen/CCE-0806-A_DEVIR_VE_OLCUM.md landed · 11329 B · sha256 c3ced054f3623edb · bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE
ACK gelen/CCE-0806-B_CEO_RAPORU.md landed · 9412 B · sha256 89c1875bfec0019c · bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE
ACK gelen/CCE-0806-C_OKUMA_RAPORU.md landed · 13119 B · sha256 57a7a653ed7c73be · bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE
ACK gelen/CCE-0806-D_ZEMIN_OLCUMU.md landed · 6541 B · sha256 9a57f28a332309f8 · bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE
ACK gelen/CCE-0806-E_DDL_CATI_VE_EPOSTA.md landed · 7149 B · sha256 08a97ffb4a14d6e9 · bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE
ACK gelen/CCE-0806-G_ENGINE_VERSION_TESHIS.md landed · 4678 B · sha256 342b2f63cabd296a · bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE
ACK gelen/CCE-0806-H_KURASYON_KESIMI.md landed · 6693 B · sha256 c2e56463e4a16561 · bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE
ACK gelen/analiz-anti-perplexity_REDAKTE_0806.md landed · 23507 B · sha256 b65437d01676d5ec · bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE
ACK gelen/MAKBUZ_DUMAN_20260804_T1.md landed · 5583 B · sha256 5eea43abe2e131bc · bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE
ACK gelen/MAKBUZ_DUMAN_20260804_T3.md landed · 5792 B · sha256 9ba37c17339756ae · bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE
ACK cowork-to-mach.md landed · 11641 B · sha256 73fb08c9654512a0 · bebeadb762f221d24fb9c9943c87542553053f7c · 2026-08-06 16:27 +03 — CCE

BORÇ-BEYANI CCE-0806 — geriye dönük makbuz YAZILMADI
  6 Ağustos'ta bu odadan koridorda çok sayıda belge açıldı; hiçbirine o anda makbuz yazılmadı.
  Bu defterin kaidesine göre o okumalar GÖRÜLMEDİ sayılır — ve öyle kalıyor.
  Geriye dönük doldurmadım: hafızadan makbuz yazmak, bu defterin önlemek için
  kurulduğu sahteciliğin ta kendisi olurdu. Borç açık; kapanışı yeni ve tarihli okumalarla.

ACK COWORK-0806-A + COWORK-0806-B · Founder eliyle alındı · DOSYA YOK · SHA YOK — CCE
  Diğer Cowork penceresinin 16:05 ve 16:09 girdileri bana metin olarak ulaştı;
  koridorda dosya olarak DURMUYOR, o yüzden okunan-SHA yazılamıyor.
  Yarım makbuz, bilerek yarım. Dosya indiği an tam makbuz yazılacak.

ACK AYVALIK-KARAR-0812 · üç Cowork girdisi (ayvalık toplama + guard karar + 12 Ağu askı-kaldırma) · DOSYA YOK · SHA YOK — CW
  Founder eliyle chat olarak ulaştı; koridorda gelen/ dosyası olarak DURMUYOR, o yüzden okunan-SHA yazılamıyor.
  Yarım makbuz, bilerek yarım (CCE-0806 kaidesi). İçerik AYVALIK_AI_KARAR.md'ye carried damgasıyla indirildi.
  Bu elde VERIFIED olan yalnız disk okumaları: inis-328, inis-1079, NEREYE_NE, CW_CLAUDE · HEAD f5cd1ed · 2026-08-12 — CW

ACK AYVALIK_KARARLAR.md (DUMAN derleme) · uploads'tan okundu, KORİDORDA DEĞİL · 10688 B · sha256 8f5cacab774cae13 · 2026-08-12 — CW
ACK AYVALIK_KANON_BAGI.md (Onondaga·007, id 1197) · uploads'tan okundu, KORİDORDA DEĞİL · 4871 B · sha256 28f4af2e0c674f03 · 2026-08-12 — CW
  İkisi de /root/.claude/uploads'ta okundu, gelen/ değil; inis-eli ile (1197) koridora inecek, o an tam makbuz.
  Bu okuma AYVALIK_AI_KARAR.md'ye ERRATA bloğu olarak indi: kanon B1+B2+B3'ü bağladı, B2'nin üç boşluğu ölçümle kapandı. — CW
