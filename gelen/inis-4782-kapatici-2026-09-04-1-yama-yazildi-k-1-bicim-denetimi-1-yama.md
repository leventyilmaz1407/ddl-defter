# KAPATICI 2026-09-04: 1 yama yazildi (K-1 bicim_denetimi) · 1 yama OLCULEREK IPTAL (K-2 ACIK) · dd81 ACIK-ayagi vadesi TUTULDU · 68 satir acik kaldi · Founder 5 dugmeye basacak, en eskisi 637,2 saat · YENI: evin yazi hacmi 27 Agu da %90 dustu

`masa:` **kapatici** · `an:` 2026-09-04T07:29:13.191482+00:00 · `damga:` —
`kaynak:` denetim_defteri id 81 (ACIK ayagi vadesi) · dd73 · dd71 · kural MUHUR 2026-08-09-rev5 · yama sha256 b3e3faa87d617f21
`ev_defteri.id:` 4782

---

KAPATICI · 2026-09-04 07:18-07:35Z · kural MUHUR 2026-08-09-rev5 (ADIM 0 opu ile okundu)

KOTU HABER ONCE (m.26)
1) EVIN YAZI HACMI 27 AGUSTOS TA COKTU ve toparlanmadi. Bu turda olculdu
   (ev_defteri gunluk sayim, 20 gun): 15 Agu 236 · 19 Agu 258 · 26 Agu 150
   -> 27 Agu 15 · 28 Agu 27 · 29 Agu 7 · 30 Agu SATIR YOK (tam karanlik gun)
   · 31 Agu 52 · 1 Eyl 39 · 2 Eyl 8 · 3 Eyl 18 · 4 Eyl 5.
   17-20h bandi: 26 Agu 57 -> 27 Agu 0. Dusus ~%90 ve 8,3 gundur surekli.
   NEDENINI OLCEMEDIM ve mekanizma uydurmuyorum (m.19).
   ELENEN ADAY: 18:00Z cronlu trig_015irqytuPkSwJSkG3JSu (parrhesia saha
   okuma). TARIH TUTMUYOR - o gorev 9 Agu dan beri kapali (637,2 saat) ama
   17-20h bandi 26 Agu a kadar 35-66 satir yaziyordu. Yani gece yazicisinin
   eli bu gorev DEGIL. dd81 in "gece toplu-yazicisi" kalemi bu turda
   daralttildi: sorun tek bir gorev degil, EVIN TAMAMI.
2) 68 satir / 492 beyan-bulgu acik; en eski satir 642,5 saat (26,8 gun).
   Founder kuyrugu (ev_defteri hedef=Founder, durum=acik): 118 satir,
   en eskisi 734,2 saat.
3) 3 pencere 637,2 / 634,8 / 630,7 saattir KARANLIK (enabled=False):
   trig_015irqytuPkSwJSkG3JSu (parrhesia saha okuma, 0 18 * * *)
   trig_018gEf7VzyC9z5tGGEV9F (Gokhan raporu, 30 20 * * *)
   trig_01GVFm6PGjNsUkEjdBJQg (CIRAK saha okuma, 44 */6 * * *)
   BULMA ayagi olu; kapatici kendi bulgusunu kendi taramasiyla uretiyor.
   NOT (dd81 e duzeltme): dd81 "enabled alani YOK" yazmisti. Bu turda alan
   GORUNUYOR ve degeri False. Alan yok degildi.

MOTOR DEPOSU DUVARI - ADRESI BU TURDA DARALTILDI (yeni olcum)
  Kontrol gruplu 4 git ls-remote (bu turda):
    octocat/Hello-World            KABUL  7fd1a60b01f91b31
    leventyilmaz1407/ddl-defter    KABUL  a2bc860760668b61   <-- AYNI SAHIP
    leventyilmaz1407/https-parrhesia.one  RED  "could not read Username"
    token gomulu ayni adres        RED  "Invalid username or token"
  ALET SAGLAM, AG SAGLAM, SAHIP FARKI DEGIL: ayni sahibin baska deposu
  ACILIYOR. Blok DEPO BASINA.
  SIRADAN ACIKLAMA ELENDI (m. taban-oran): "depo adi yanlis / depo yok"
  ihtimali olculdu. git ls-remote OLMAYAN bir depoya da BIREBIR AYNI hatayi
  veriyor (kesinlikle-yok-boyle-bir-depo-98765 + 5 ad varyanti = 6 deneme,
  6 ayni mesaj). Yani git ls-remote bu ayrimi YAPAMAZ - dd81 in duvara
  "IZIN" adini koymasi bu aletle KANITLANAMAZDI.
  BAGIMSIZ IKINCI KAYNAK BULUNDU (bu turda, Vercel MCP):
    team_adzgWS4rU4mXil7SWMiUwv3y · prj_2EvicpcvfqFjFygyDiNZdKhv0lHt
    link: github / leventyilmaz1407 / https-parrhesia.one
  DEPO VAR. Adi dogru. O halde duvarin adi IZIN, adresi oturumun
  yapilandirilmis depo kumesi - ve bu artik iki bagimsiz kaynakla mühürlü.

YAMA K-1 · YAZILDI, BASILMADI (m.27)
  Nesne: public.bicim_denetimi · viewdef 1298 kr · md5_16 2ff94c96be24f325
  Dosya: outputs/yama_K1_bicim_denetimi_2026-09-04.sql
         9045 B · 153 satir · sha256: b3e3faa87d617f21
  MADDE (sinif): "Bir nobetci, yasakli dizgeyi HUKUM olarak kullanan satiri,
    o dizgeyi bir TANIMLAYICI icinde tasiyan satirdan ayirmalidir.
    Tanimlayici: fonksiyon adi (buildKapanmadiKapisi), alan adi
    (kapanmadi_cunku), nobetcinin KENDI kolon adi (y_kapanmadi), dilin cekim
    eki (kapanmadiysa). Kelime siniri olmayan desen evin DAVRANISINI degil
    evin SOZLUGUNU denetler."
  DEGISEN: 'KAPANMADI' -> '\mKAPANMADI\M' (y_kapanmadi + hukum CASE).
  OLCUM (salt-okuma, rev5 penceresi 3831 satir):
    sokulu 74 · takili 56 · ayiklanan 18 · YENI KACAK 0 (20 masanin 20 sinde)
    kapatici 24->11 · okuma-nobeti 14->10 · Sanat Yonetmeni 1->0
  NEGATIF KONTROL: 18/18 ayiklanan satirin METNI tek tek acildi (m.11), hepsi
    yanlis pozitif. buildKapanmadiKapisi: 814 2237 2722 2931 3041 3479 3922
    4174 4320 4476 4599 · kapanmadi_cunku: 1389 2237 2545 3041 3479 4174 4320
    4476 4599 · y_kapanmadi (GORUNUMUN KENDI KOLONU): 2501 4029 4599 4645 4776
    · Turkce cekim: 2237 2631 4599.
  POZITIF KONTROL: tutulan 56 satirdan 14 unun metni acildi, gercek isabet
    (773 "TASINIYOR, KAPANMADI (badana yok):" · 1099 "HICBIRI kapanmadi" ·
    1340 "kapi: KAPANMADI/CELISKI"). ORNEKTIR - 14/56, tamami degil.
  SOZDIZIMI: yamanin govdesi salt-okuma kosturuldu, 8 satir dondu, hata yok.
  KAPSAM SINIRI (yuksek sesle): bu yama YALNIZ tanimlayici-carpismasi eksenini
    duzeltir. "Dizgeyi ADLANDIRAN" ile "KULLANAN" ayrimini duzeltMEZ; tutulan
    56 nin bir kismi (634 635 636 650 672 820 828 1156) kurali TARTISIYOR.
    O eksen icin negatif kontrolden gecmis formulasyon ELIMDE YOK, yazilmadi.
  CIKAR CATISMASI (adiyla): en buyuk faydalanici KENDI masam (24->11;
    18 ayiklanandan 13 u benim satirlarim). Yamayi ben yazdim, ben basmiyorum.

YAMA K-2 · OLCULEREK IPTAL EDILDI - BU BIR URUNDUR
  dd81 bu isi KAPATICI nin kendi eline, 2026-09-04 ADIM 3 e vadelemisti.
  VADE TUTULDU. Sonuc: YAMA YAZILMAMALI.
    mevcut canli ACIK deseni ......................... 225 satir
    aday genis desen (tirnak/paren serbest) .......... 237 (+12)
    aday kelime siniri \mACIK\s*[:(] ................. 249 (+24)
  +24 un 24 UNUN DE metni acildi (m.11):
    durum=acik / DURUM=ACIK (DEFTERIN KENDI KOLON DEGERI): 1242 2064 2065
      2308 2411 4153 4183 4585 4619 = 9
    yapilandirma degeri (varsayilan-ACIK, hep-acik, SSO-acik, wiki-acik,
      oyu-ACIK, GERCEK-ACIK): 598 1573 2484 2798 3357 4132 4698 = 7
    tireli/egik baslik (BAYAT-ACIK, DURUST-ACIK, BAGIMLILIK/ACIK, SINIR/ACIK):
      2040 2229 2376 2889 = 4
    dizgeyi ADLANDIRAN satir: 1026 2688 3828 = 3
  HUKUM: mevcut desendeki '\s' zorunlulugu KUSUR DEGIL, FREN. 'durum=acik' ta
    ACIK tan once '=' gelir, mevcut desen onu tutmaz. Kelime sinirina
    genisletmek evin EN SIK MESRU DIZGESINI ihlal sayar; yanlis-pozitifi
    azaltmaz, 9 kat artirir.
  SINIF: "Bir nobetcinin deseni kendi defterinin KOLON DEGERLERINI ihlal
    sayamaz. Bir dizge hem hukum hem durum degeri ise ayrimi yapan sey
    dizgenin kendisi degil ONUNDEKI karakterdir; o karakteri serbest birakan
    genisletme fren sokmektir."
  BU KALEM KAPANDI. ACIK ayagi icin devredilen is YOKTUR.

ONCEKI YAMALAR HALA CANLIYA INMEMIS - 8,0 GUN
  Bu turda pg_get_viewdef ile olculdu:
    kayitsiz_yazan  md5_16 313a168f1e91b4dd  = dd81 kaydiyla BIREBIR ESIT
    bicim_denetimi  md5_16 2ff94c96be24f325  (KAPANMADI hala kelime sinirsiz)
    okuma_izi       md5_16 91db5a860d50d072  (pencere beyani yok, 3h sabit)
  dd73 ve dd81 in yazdigi hicbir madde canlida DEGIL.

YAPISAL BULGU (sayac neden dusmuyor)
  denetim_defteri nin birimi SATIR, isin birimi BULGU. 68 acik satir 492 beyan
  bulgu tasiyor. Bir satir ancak BUTUN bulgulari kapaninca 'yamalandi'
  olabilir; satirlarin cogunda 3-6 bulgudan bir kismi Founder elinde. Bu yuzden
  durum alani 22 gunde 4 kez 'yamalandi' oldu ve sayac hic dusmedi.
  ONERI (basilmadi): denetim_defteri ye bulgu bazli kapanis - ya bir
  bulgu_kapanis(defter_id, bulgu_no, durum, yama_yolu) tablosu, ya durum a
  'kismen_yamalandi' degeri. Karar Founder in (m.27: sema degisikligi).

BASILACAK DUGMELER (5)
  D1 · 637,2 sa · 3 karanlik pencereyi ac ya da dusur.
       op: update_trigger enabled=true (trig_015irqytuPkSwJSkG3JSu,
       trig_018gEf7VzyC9z5tGGEV9F, trig_01GVFm6PGjNsUkEjdBJQg) — ya da
       delete_trigger. EL: Founder. NE ZAMAN: 2026-09-05 07:15Z kosusundan once.
       SIRA ZORUNLU: gorev metinleri rev5 e cekilmeden acilirsa bayat kuralla
       atesler.
  D2 · 199 sa · evin yazi hacmi cokusu (27 Agu). op: 27 Agu civari degisen seyi
       Founder in Cowork masaustundeki YEREL gorev listesinden bak (bu hesabin
       6 bulut gorevi olculdu, el onlardan biri degil). EL: Founder.
       NE ZAMAN: 2026-09-05 kosusundan once.
  D3 · 0 sa · K-1 yamasini bas. op: Supabase SQL editorunde
       outputs/yama_K1_bicim_denetimi_2026-09-04.sql BLOK-1 (tam metni ASAGIDA,
       oturumdan bagimsiz). ONCE md5_16 2ff94c96be24f325 teyit. Geri alma:
       ayni dosyada BLOK-2. EL: Founder.
  D4 · 194 sa · KAPATICI gorev metni rev5 ile catisiyor (BESINCI kez bildiriliyor:
       dd8/dd42/dd66/dd73/bugun). Metin ADIM 4 te "kapanmadi_cunku" alanini
       emrediyor (m.30 KAPANMADI yi YASAKLIYOR) ve UC satirli muhur tasiyor
       (rev5 BES ister). Bu turda kurala uyuldu, metne uyulmadi.
       op: update_trigger trig_013TtsXQrNrSBG9xfqFuv2Yj. EL: Founder.
  D5 · 642,5 sa · motor deposunu oturumun depo kumesine ekle (adres yukarida iki
       kaynakla mühürlü) ya da gorevi Founder in bilgisayarinda kosacak sekilde
       yeniden kur. EL: Founder.

GOREV METNINDEN SAPMA (m.23, yuksek sesle soyluyorum)
  a) ADIM 5 tur='is' diyor; tur='inis' yazdim. Sebep: bu satir bir INIS
     (m.XI dagitim) ve 'inis' evde 208 satirla canli bir deger. dd71
     "borc freni tur=is i reddediyor" demisti - BUNU YENIDEN OLCMEDIM,
     aktarımdır. Founder bir cumleyle kessin.
  b) ADIM 4 'kapanmadi_cunku' alanini emrediyor; m.30 o dizgeyi yasakliyor.
     Dort alanli sema (is/kapatacak_op/kimin_eli/ne_zaman) yazildi. Kural
     gorev metnini ezer (m.0 + gorev metninin kendi ifadesi).
  c) MUHUR: gorev metnindeki 3 satir yerine rev5 in 5 satiri basildi.

═══════ K-1 YAMASININ TAM METNI (BLOK-1) - OTURUMDAN BAGIMSIZ ═══════
ERRATA (kendi hatam, ayni turda bulundu ve duzeltildi): bu blogun ILK
yazilisinda "WHERE e.an > rev5.yururluk" satiri DUSMUSTU ve yanina yanlis
bir not ("kasitli olarak yok degil") yazmistim. O hali BASILAMAZDI - rev5
penceresi kalkar, gorunum butun tarihi sayardi. Asagidaki metin TAMDIR ve
dosyayla birebir ayni. Hatanin sinifi: dd81 in KAPATICI-1 maddesi
("dugmenin nesnesi oturumdan uzun yasar") yalniz nesnenin VAR olmasini
degil, KOPYASININ TAM olmasini da ister. Kopyalarken kisaltma yapmak
dugmeyi yine basilamaz kilar.

CREATE OR REPLACE VIEW public.bicim_denetimi AS
 WITH rev5 AS (
         SELECT kural_metni.olusturuldu AS yururluk
           FROM kural_metni
          WHERE kural_metni.ad = 'MUHUR'::text AND kural_metni.surum = '2026-08-09-rev5'::text
        )
 SELECT e.masa,
    count(*) AS satir,
    count(*) FILTER (WHERE e.govde ~* '(^|\n|\s)(◇\s*)?(AÇIK|ACIK)\s*[:（(]'::text) AS y_acik,
    count(*) FILTER (WHERE e.govde ~* '\mKAPANMADI\M'::text) AS y_kapanmadi,
    count(*) FILTER (WHERE e.govde ~* 'HER ŞEYİ DENEDİM|HER SEYI DENEDIM'::text) AS y_hersey,
    count(*) FILTER (WHERE e.govde ~* '(^|\n)\s*(◇\s*)?ATLADIM'::text) AS y_atladim,
    count(*) FILTER (WHERE e.govde ~* 'KAPANACAK'::text) AS d_kapanacak,
    count(*) FILTER (WHERE e.govde ~* '(^|\n|\s)DUVAR'::text) AS d_duvar,
    max(e.an) AS son_yazi,
        CASE
            WHEN count(*) FILTER (WHERE e.govde ~* '(^|\n|\s)(◇\s*)?(AÇIK|ACIK)\s*[:（(]|\mKAPANMADI\M|HER ŞEYİ DENEDİM|HER SEYI DENEDIM|(^|\n)\s*(◇\s*)?ATLADIM'::text) = 0 THEN 'temiz'::text
            WHEN count(*) FILTER (WHERE e.govde ~* 'KAPANACAK|(^|\n|\s)DUVAR'::text) = 0 THEN 'YASAKLI BICIM - rev5 hic kullanilmamis'::text
            ELSE 'KARISIK - gecis halinde'::text
        END AS hukum
   FROM ev_defteri e,
    rev5
  WHERE e.an > rev5.yururluk
  GROUP BY e.masa
  ORDER BY (3 + 4 + 5 + 6) DESC, (count(*)) DESC;

GERI ALMA (BLOK-2): ayni tanim, tek fark '\mKAPANMADI\M' yerine 'KAPANMADI'
(iki yerde: y_kapanmadi FILTER ve hukum CASE in ilk WHEN i). Tam metin
dosyada yorum blogu icinde: outputs/yama_K1_bicim_denetimi_2026-09-04.sql
sha256: b3e3faa87d617f21 · 9045 B · 153 satir

BASMADAN ONCE: select substr(md5(pg_get_viewdef('public.bicim_denetimi'::regclass,true)),1,16);
beklenen 2ff94c96be24f325 · farkliysa BASMA, yeniden olc.

