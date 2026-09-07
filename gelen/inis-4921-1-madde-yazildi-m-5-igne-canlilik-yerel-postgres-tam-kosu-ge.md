# 1 madde YAZILDI (M-5 IGNE CANLILIK, yerel Postgres tam kosu GECTI) · karnenin 13 ignesinden ORAN yayimlayan 3, IKISI KOR · 73 acik satir/521 beyan · Founder 8 dugmeye basacak, en eskisi 600 sa · BORC FRENI tur=is'i yine reddetti (23, dun 21)

`masa:` **kapatici** · `an:` 2026-09-07T07:39:49.161741+00:00 · `damga:` —
`kaynak:` denetim_defteri id 85,86 · kural MUHUR 2026-08-09-rev5
`ev_defteri.id:` 4921

---

KAPATICI · zamanli kosu 2026-09-07 07:15-08:1xZ · kural MUHUR 2026-08-09-rev5 (ADIM 0, bu turda kural_metni'nden okundu) · proje rgnuvspudrwmfrdrefza (list_projects ile dogrulandi).

== ONCE KOTU HABER ==
(1) KARNENIN CANLI YUZEYI 13'TE 1. karne_penceresi(24s) bu turda kosuldu: 13 nobetciden yalniz UCU oran yayimliyor
    (K-01 %0.0 · G14-audit %0.0 · G14-audit-bos %11.9) ve ILK IKISININ SIFIRI DAVRANIS DEGIL ALET ARIZASI.
    Yani karnenin tek gercek olcumu G14-audit-bos'tur. Geri kalan 10 nobetci kapsam BOS.
(2) BORC FRENI tur='is'i BU TURDA yine reddetti (kendi opum): 23 adet 3 gunden eski kapanmamis taahhut,
    en eskisi 29 gun. DUN 21'DI. Bir gunde +2. Bu, dugme 1'in bedelinin sayisal olcusudur.
(3) BENIM HATAM: ilk yama taslagimda pozitif kontrolu "alan dolu mu" diye kurdum; negatif kontrol K-01'de
    ATESLEMEDI (alan 5 turda dolu oldugu icin koruma gecti, gunun bulgusu yine %0.0 yayimlanacakti).
    Yanlis yuzeye bakan bir yesildi (m.12); cope atildi, alfabe kesisimi eklendi.
    Ikinci hata: sentinel_vaka'yi canlilik kaniti sanip 11/11 "IGNE KOR" olctum. Sentinel metni "bu nobetciyi
    KIRMIZIYA DUSUREN gercek tur" diyor — bilinen bir IHLAL vakasi; ignenin orada ateslememesi DOGRU sonuc.
    11/11 alarm YANLIS POZITIFTI ve YAYIMLANMADI.

== YAZILAN YAMA (1 madde) ==
M-5 · IGNE CANLILIK KONTROLU (ALAN YOK / ALFABE AYRIK)
  madde: Bir uyum ORANI, olcen ignenin O PENCEREDE canli oldugu AYNI sorguda gosterilmeden yayimlanamaz.
         Her iz, yargiladigi ALANI ve o alanin DEGER ALFABESINI beyan eder. Alan hic dolmuyorsa hukum
         IGNE KOR - ALAN YOK; alan dolu ama beyan edilen alfabe gozlenen alfabeyle kesismiyorsa
         IGNE KOR - ALFABE AYRIK. Iki halde de yuzde NULL basilir, 0.0 BASILMAZ. Sifir, "ozne yapmadi" ile
         "alet olcmedi"yi ayirt edemedigi surece bir olcum degildir. Alanini beyan etmemis iz 'olculuyor'
         durumuna GECEMEZ (CHECK freni).
  sinif: Yalniz VAR OLAN satirlar uzerinden hukum veren ve dogrulugu, ureticinin tek tarafli yeniden
         adlandirabildigi bir ALAN ADINA ya da DEGER ALFABESINE bagli olan HER nobetci. Tek vaka (K-01) degil:
         bugun iki kapisi birden acikti (G14-audit=ALAN YOK, K-01=ALFABE AYRIK) ve ucu gizli duruyor
         (K-02, K-03, G14-registry — kapsam=0 oldugu icin gorunmuyor, alfabeleri ayni sekilde bayat).
  dosya: outputs/yama_kapatici_2026-09-07.sql · sha256_16 2109f9269519da19 · 22033 B · 408 satir · 24 ifade
  nesne: public.kural_uyum_pencere(text,timestamptz) md5 48bf84a5a1f74b0198e7dddc9353d0e7 / 1652 B ·
         kural_uyum 999 B · kural_karnesi 771 B · karne_kaydet 1070 B · karne_penceresi 678 B ·
         kural_kimlik 13 satir/13 kolon · karne_gunlugu.yuzde is_nullable=YES. Hepsi BU TURDA kesildi.
  olcum: K-01 iz_sql = s->>'service' in ('brave','evidence_fetch'). Son 24s, K-01 kapsami 38-39 tur:
         'service' alani yalniz 5 turda dolu ve TEK degeri 'brave_discovery'; 19 turda alan
         'route_kind' (closed_record | named_arxiv_html | web_locator). Yani hem ALAN tasinmis hem DEGER
         yeniden adlandirilmis. G14-audit: verdicts 42/42 dolu ama 'audit' anahtari 0; gozlenen anahtarlar
         deployment_identity, execution_telemetry, mach1, request_id, schema_version, transport, yapmayacak.
         Gun kirilimi (14 gun, kendi opum): service_dolu 08-24..09-04 var, 09-05 sc_dizi=0, 09-06 service=0
         route_kind=16, 09-07 service=5 route_kind=6 -> KORPUS BUGUN KARISIK, iki surum bir arada.
  yerel tam kosu: pglast/libpg_query v8.4 ayristirma OK (24 ifade). Postgres 16.13 yerel kap (port 55432,
         CANLI DB'YE DOKUNULMADI): fixture kural_kimlik 3 satir + test_turn 42 tur (5 service=brave_discovery,
         36 route_kind, 1 kapsam disi). A kolu (canli tanim, yamasiz) K-01 41/0 -> 0.0 'olculdu',
         G14-audit 5/0 -> 0.0 'olculdu', G14-audit-bos 41/5 -> 12.2 = CANLI DAVRANISIN AYNISI.
         Yama uygulandi ON_ERROR_STOP=1 exit 0 (plpgsql govdeleri derlendi).
  negatif kontrol: B kolu K-01 -> yuzde NULL 'IGNE KOR - ALFABE AYRIK (beyan=brave|evidence_fetch ·
         gozlenen=brave_discovery)' · G14-audit -> NULL 'IGNE KOR - ALAN YOK'.
         KONTROL GRUBU G14-audit-bos 41/5 -> 12.2 'olculdu' DEGISMEDI (koruma her seyi kirmiziya boyamiyor).
         C kolu: beyan tazelenince oran yeniden yayimlandi (koruma BEYANA bagli, gomulu kirmizi degil).
         FREN: update kural_kimlik set iz_alan_sql=null where id='K-01' -> ERROR 23514 check constraint
         ihlali = ENGELLEDI, gozlemedi (kanon: bu evde yalniz frenler tuttu).
         KUMULATIF IKIZ: bayat alfabeyle kural_uyum('K-01') -> yuzde NULL; karne_kaydet() -> 6, imza kirilmadi.
  kirilma: uc fonksiyonun da IMZASI AYNI kaldi -> karne_penceresi/karne_kaydet/kural_karnesi adla okuyor,
         kirilmaz. karne_gunlugu.yuzde nullable oldugu icin NULL yuzde guvenli. Yeni bes kolon SONA eklenir.
  izleme: 3 gun. 2026-09-10 07:1xZ kosusunda K-01 hala 'IGNE KOR - ALFABE AYRIK' ise madde TUTMUSTUR ama
         IGNE ONARILMAMISTIR (alfabe tazeleme ayri dugme). 'olculdu 0.0'a dondu ise yama tutmamistir, geri alinir.
  DEPLOY YOK · PROMOTE YOK · COMMIT YOK. Yazildi, basilmadi.

== FOUNDER'IN BASACAGI 8 DUGME ==
1) Zamanli gorevi leventyilmaz1407/https-parrhesia.one deposuna bagla (ya da add_repo aletini bu goreve ac).
   Neden: ADIM 2-3 motora yazmak zorunda; oturum o depoya bagli degil. 16. kosudur ayni duvar. YAS ~600 sa (25 gun).
   Nerede: Claude masaustu uygulamasi; gorev O BILGISAYARDA yeniden kurulur (bulut oturumu depo baglayamaz).
2) M-5'i bas: outputs/yama_kapatici_2026-09-07.sql (5 adimli dogrulama + tam geri alma yolu dosyanin icinde). YAS 0.
3) M-4'u bas (okuma_izi kor pencere): outputs/yama_kapatici_2026-09-06.sql sha16 76ec32d93457a5dd. YAS 24 sa.
   dd86 b#5: okuma_izi BESINCI gun kor; yamasi dun yazildi, basilmadi.
4) 2026-09-01 yamalarini bas (M-3 susan_masa + M-1 bicim_denetimi). TAM METIN ev_defteri id=4711. YAS ~168/148 sa.
5) 2026-09-03 yamalarini bas (M-1a + P-4). TAM METIN ev_defteri id=4759. YAS ~144 sa.
6) 2026-09-04 yamasini bas (K-1 bicim_denetimi). TAM METIN ev_defteri id=4782. YAS ~72 sa.
7) ev_defteri 194'u kapat: update ev_defteri set durum='kapali', kapatir_id=4816 where id=194; (dd85 b#6)
8) OC/Osman erisim celiskisini tek cumleyle kes (4827 vs 4842/4845) — ev_defteri'ne tur=karar satiri. (dd85 b#4)

== KAPANMAYANLAR (dd86 odenmemis 5 kalem, dordu Founder elinde) ==
1 ADIM 2-3 motor maddesi yazilamadi — DUVAR IZIN/KAPSAM (dugme 1, Founder)
2 M-5 basilmadi, m.27 (dugme 2, Founder)
3 dd86 b#3 response_raw 05 Eyl'de kesildi, bes nobetcinin kapsamini sifirliyor — koku motor tarafinda (dugme 1 sonra KAPATICI)
4 dd86 b#4 MACH denetim organi hic takilmiyor (verdicts?audit 0/42) — koku motor tarafinda (dugme 1 sonra KAPATICI)
5 dd86 b#5..b#9 bes bulgu bu turda DOKUNULMADI, atlandigi soylenir (m.23) — KAPATICI, 2026-09-08 07:15Z

== DEFTERIN HALI (bu turda sayildi) ==
durum=acik 73 satir / 521 beyan · en eski acik satir 2026-08-08 12:54:40Z = 714 sa (29,8 gun) ·
kural_surumu NULL olan acik satir = 0 (ADIM 0 ihlali YOK) ·
dd86 ve dd85 ACIK BIRAKILDI: yama dd86'nin 2/9, dd85'in 1/6 bulgusunu kapsiyor; 'yamalandi' yazmak m.25 ihlali olurdu.
BORC FRENI: kapatici masasi 23 taahhut borclu (dun 21). Bu satir bu yuzden tur='is' degil tur='inis'.
SIKICI SATIR: yama yaziliyor, olculuyor, negatif kontrolden geciyor ve BEKLIYOR. Yazma yuzeyi degil BASMA
yuzeyi tikanmis; dugme 1 ve 2 basilmadikca 17. kosu da bu satiri yazacak.

DOSYA: outputs/KAPATICI_2026-09-07.md + outputs/yama_kapatici_2026-09-07.sql (sha256_16 2109f9269519da19).
Ikisi de Founder'a SendUserFile ile indirildi.
