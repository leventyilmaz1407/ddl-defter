# POST-FLIGHT c07423d: RAF INDI — ve bir P1: docs/ HERKESE ACIK

`masa:` **MISEL AYVALIK** · `an:` 2026-08-15T13:34:55.642095+00:00 · `damga:` verified
`kaynak:` vercel get_deployment + list_deployments + curl x13 + shasum
`ev_defteri.id:` 2396

---

OLCTUM (kendi op'um, 15 Agu 16:27-16:35 TRT):

1) TETIK CALISIYOR. Bos commit c07423d24621164df6104a5ce05dbe2f993c4884 ->
   dpl_DMfzsbKWdVUGpGFVMeLDyYT8zoMt, state READY, target production,
   created 16:27:17, ready 16:27:24 TRT. alias listesinde ayvalik.ai VAR.
   => 58926c6 ve 6e8239e icin ayri deploy kaydi hala YOK, ama c07423d main'in
   ucu oldugu icin ONLARIN ICERIGI BU BUILD ILE INDI. Tetigin dun-bugun neden
   ateslenmedigini BILMIYORUM, tahmin etmiyorum. Simdi calisiyor.

2) ANAYASA.md canli sha16 = 6a372a53f21b9c6d
   yerel paket sha16      = 6a372a53f21b9c6d  -> BAYT BAYT AYNI. v1.2 canlida.
   Govdede olctum: "Yerelligi odunc almazsin" VAR, "Yasar Kemal" VAR,
   "Siirsel olmak yasaktir" VAR, "Aramam yok" (§3.5 regresyon ceki) VAR.

3) Olu dosya gitti: GET /api/ayvalik_chatjs_ESKI_0808 -> 404.
4) sebil.html -> 200, 13420 bayt (F1 duzeltmesi yerinde).

--- P1, VE BENIM GOZDEN KACIRDIGIM ---
docs/ altindaki DOKUZ dosyanin HEPSI internete acik, kimlik dogrulamasiz:
  docs/kartlar/haklariniz-01-sinir.md      200  5025 B
  docs/kartlar/README.md                   200   923 B
  docs/KESIM_PAKETI_WIZARDLAR.md           200  6312 B
  docs/KAZIMA_ILKESI.md                    200  4182 B
  docs/wizardlar/ucuncu-wizard.md          200  5400 B
  docs/wizardlar/haklariniz-sahneler.md    200  7934 B
  docs/wizardlar/neyiniz-var-akis.md       200  6059 B
  docs/wizardlar/haklariniz-kalip.md       200  7667 B
  docs/wizardlar/sahne1-kunyeli-ornek.md   200  6251 B

HATAM: push betigine "docs/ altinda — MOTOR BUNLARI OKUMAZ" yazdim ve riski
kapali saydim. Yalniz TEK YONE baktim (motor okur mu). OKUYUCU kim sorusunu
hic sormadim. Yanlis soruyu dogru cevaplamak, cevapsiz birakmaktan beter.

UC DOSYA OZELLIKLE:
- KESIM_PAKETI_WIZARDLAR.md: ic is emri. Rol adlari, vadeler, ve "Haklariniz
  eylul basi — kartlari var ama Istar gormeden cikmaz" satiri. ISTAR GOZAYDIN
  ADIYLA GECIYOR ve kendisi bu ise onay VERMEDI. Bir kisinin adini, onaylamadigi
  bir isin denetcisi olarak kamuya asmak — bu bizim yapmayacagimiz sey.
- KAZIMA_ILKESI.md 2. satir: Founder'in "resmi kurumlarin datasi kazinmali her
  seferinde" cumlesi, sirketin kendi alan adinda, Turkce, yayinda. Belgenin 24-30.
  satirlari dort siniri koyuyor ama ekran goruntusu 2. satirdan alinir.
- UCUNCU_WIZARD.md: Plan B para modeli + evin kendi is sirlari (POS valoru,
  SASU-Ltd kiyasi, 17 kalemlik hibe katalogu, teknokent tuzagi).

KART ACIK OLMASI IYI: 3402 metni zaten kamunun, FSEK m.31. Kaynagimizin
gorulebiliyor olmasi bizim lehimize.

P2 — AYRI BIR KUSUR, YINE BENIM:
ANAYASA.md'nin BASLIK satiri hala "(v1.0 ...)" diyor. Cilt notunu iki kez
guncelledim, basligi hic. Evin en yetkili belgesi kendi surumunu yanlis
soyluyor — kendi §1'imdeki "kunye uydurulmaz" bu satirin uzerine dusuyor.

SIRADAKI OP — KARAR FOUNDER'IN (m.15: yayin/izin degisikligi tek elle olmaz):
  A) docs/ oldugu gibi kalsin (radikal seffaflik)
  B) docs/kartlar/ ACIK kalsin, is emirleri repodan cikip yerel kalsin  <- ONERIM
  C) vercel.json ile docs/ tumden kapansin
Ve her halukarda: ANAYASA.md baslik satiri v1.2'ye cekilecek (tek satir).
