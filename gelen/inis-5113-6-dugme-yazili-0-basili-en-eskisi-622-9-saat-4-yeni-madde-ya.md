# 6 DUGME YAZILI · 0 BASILI · en eskisi 622,9 saat · 4 yeni madde yazildi, sayac 76 da kaldi

`masa:` **kapatici** · `an:` 2026-09-09T07:32:00.343271+00:00 · `damga:` —
`kaynak:` denetim_defteri id 6,67,71,72,73,81,83,85,86,90,91 · kural MUHUR 2026-08-09-rev5 · yama outputs/yama_kapatici_2026-09-09.sql sha256_16 cea9395492502351
`ev_defteri.id:` 5113

---

KAPATICI 2026-09-09 07:17-07:4xZ · kural MUHUR 2026-08-09-rev5 (ADIM 0 bu turda okundu).

KOTU HABER ONCE (m.26):
 · Sayac DUSMEDI. denetim_defteri durum=acik count(*)=76 satir / 551 beyan. En eski satir
   2026-08-08 12:54:40Z = 762,4 saat. Bu kosuda HICBIR satir kapanmadi.
 · Alti yama dugmesi yazili, SIFIRI basili. En eskisi 622,9 saat.
 · list_migrations: nobetci sinifindan son uygulanan goc 20260901121529. O tarihten beri
   KAPATICI nin yazdigi hicbir yama basilmamis.
 · KENDI HATAM: YAMA-1 in ilk halinde H-1 yoklamasi YANLIS YUZEYE bakiyordu (nesne_var /
   denetim_defteri -> tablo zaten var -> BASILDI diyordu). Kuru kosumda yakalandi, yoklama
   turu kisit_var eklendi, yeniden kosuldu: YAZILDI-BASILMADI. Yanlis yesil dosyaya girmedi.

BU TURDA YAZILAN DORT MADDE (hepsi outputs/yama_kapatici_2026-09-09.sql · sha256_16
cea9395492502351 · 14437 B · 262 satir · TAM METIN bu govdenin altinda degil, dosyada;
dosya oturumla birlikte gider, bu yuzden her maddenin OZU asagida ozetli):

 YAMA-1 · KAPATICI-3 "YAZILMIS YAMA, KURULMUS NOBETCI DEGILDIR"
   SINIF: dogrulugu YAZARIN KENDI CIKTISININ varligina dayanan her kapanis hukmu (m.16).
   NESNE: table yama_yoklama (CHECK yoklama_yuklemi_zorunlu = agsiz katman) +
          view yama_basildi_mi (canli katman) + 6 kalemlik seed.
   YOKLAMA TURLERI: nesne_var · tanim_icerir · kural_izi_icerir · kisit_var.
   NEGATIF KONTROL: maddesiz 5/5 "BASILDI" (yanlis yesil) / maddeli 5/5 "YAZILDI-BASILMADI".
   POZITIF KONTROL: 5/5 TRUE. KURU KOSUM: 10 kol, OLCULEMIYOR kollari dahil.
   GERI ALMA: drop view yama_basildi_mi; drop table yama_yoklama;

 YAMA-2 · okuma_izi penceresi 3 SAAT -> 24 SAAT
   SINIF: penceresi kendi emrinden dar olan nobetci, gordugu sessizligi gunun sessizligi sanir.
   OLCUM: pg_get_viewdef(okuma_izi) 706 kr · md5 91db5a860d50d072d91af863b00baafe ·
          03:00:00 TRUE / 24:00:00 FALSE. Gorunum govdesi CANLI tanimdan birebir kesildi (m.5).
   GERI ALMA: ayni govde, WHERE an > now() - interval '03:00:00'.

 YAMA-3 · K-01/K-02 igne iki ayakli olur (M-5, dorduncu gun)
   SINIF: dogrulugu ureticinin tek tarafli yeniden adlandirabildigi bir ALAN ADINA ya da
          DEGER ALFABESINE bagli olan her nobetci; uretici alani degistirdigi gun nobetci
          kor kalir ve korlugunu %0.0 diye rapor eder.
   OLCUM (kendi opum, test_turn son 48 saat, SALT OKUMA): 65 tur / 40 sources dolu ·
          ESKI igne 0 isabet · YENI igne 11 isabet · route_kind tasiyan tur 27.
          Eleman metni: NULL 134 · web_locator 66 · user_allowed_document 26 ·
          brave_discovery 19 · doaj 2 · closed_record 1 · gallica 1.
   ESKI METIN (birebir, md5 bcfe1904a14a3154d7b689cc2e8825eb):
     exists (select 1 from jsonb_array_elements(t.sources_called) s where s->>'service' in ('brave','evidence_fetch'))
   GERI ALMA: yukaridaki eski metin geri yazilir.

 YAMA-4 · H-1 kisiti: check (bulgu_sayisi = jsonb_array_length(bulgular))
   SINIF: elle yazilan sayac kumeyi damgalayamaz (m.10).
   OLCUM: 86 satir · dizi-degil 0 · ihlal 0 · kisit yok -> BUGUN HICBIR SATIRI KIRMADAN basilir.
   GERI ALMA: alter table denetim_defteri drop constraint bulgu_sayisi_kume_ile_esit;

FOUNDER IN BASACAGI ALTI DUGME (yasa gore, en eski once):
 1. H-1 kisiti (622,9 sa) — YAMA-4 · el: Founder · vade 2026-09-10
 2. okuma_izi 24 saat (340,2 sa) — YAMA-2 · el: Founder · vade 2026-09-10
 3. bicim_denetimi kelime siniri (192,2 sa) — tam metin ev_defteri 4759 / 4782 · el: Founder
 4. susan_masa gorunumu (192,2 sa) — tam metin ev_defteri kapatici govdesi · el: Founder
 5. K-01/K-02 igne (72,2 sa) — YAMA-3 · el: Founder · vade 2026-09-10
 6. kayip_kosu + kayip_kosu_olculemiyor (24,0 sa) — tam metin ev_defteri 5016 · el: Founder
 EKRAN: Supabase SQL editoru (proje rgnuvspudrwmfrdrefza). Once YAMA-1, sonra otekiler;
 YAMA-1 kurulunca "select * from yama_basildi_mi order by bekleme_saat desc" tek ekranda
 hangi dugmenin kac saattir bekledigini gosterir.

DUVAR · MOTOR DEPOSU (izin duvari, bu turda kontrol gruplu olculdu):
 git ls-remote octocat/Hello-World -> KABUL 7fd1a60b [kontrol] · ddl-defter -> KABUL f1de564c
 [koridor] · leventyilmaz1407/https-parrhesia.one -> RED "could not read Username" ·
 api.github.com/user 200 · contents/api/chat.js 403 · yerel disk 2 desen -> proje nushasi YOK
 (isabetler yalniz playwright vendor dosyalari, adlariyla ayiklandi) · cihaz koprusu YOK.
 Ag/alet duvari DEGIL: kontrol grubu ayni aletle gecti. Adres: oturumun bagli oldugu depolar
 listesi. Yikacak el: Founder.

DEFTER (ADIM 4): on satirin notu ve yama_yolu tazelendi (dd 6·67·71·72·73·81·83·85·86·90);
 HICBIRI kapanmadi cunku her birinde dokunulmamis bulgu var (m.25). dd6 acildi ve HAKLI
 OLARAK acik cikti (iki celiski kalemi, sahibi MISEL). Bu kosunun kendi satiri: dd91,
 durum=yamalandi (icinde incelenmemis bulgu yok), bulgu_sayisi 6 = kume 6.

ATLANANLAR, YUKSEK SESLE (m.23):
 · ADIM 5 gorev metni tur='is' istiyor; BORC FRENI reddediyor: masa=kapatici de 23 adet
   3 gunden eski kapanmamis KAPANACAK taahhudu var (en eskisi 31 gun; satirlar 426, 427,
   634, 635, 814, 1156, 1340, 1341, 1389, 2722, 2931, 3041, 3797, 3922, 4174, 4320, 4476,
   4599, 4619, 4650, 4711, 4759, 4782). Frenin kendi izin verdigi turlerden 'inis' secildi.
   Bu satir onlari kapatmiyor, ADLANDIRIYOR.
 · Gorev metni ADIM 4 odenmemis semasi {is, denedim, kapanmadi_cunku, kapanir} istiyor;
   yururlukteki MUHUR rev5 m.30 "KAPANMADI" yi yasakliyor. Kalemler rev5 semasiyla yazildi
   (is · kapatacak_op · kimin_eli · ne_zaman). Karar Founder in: ya gorev metni hizalanir
   ya kural degisir. el: Founder · vade 2026-09-10.
 · 76 acik satirin 66 sina bu turda DOKUNULMADI. Sebep tembellik degil sira: yama basma eli
   tikaliyken yeni madde yazmak kuyrugu uzatir. Once alti dugme.
