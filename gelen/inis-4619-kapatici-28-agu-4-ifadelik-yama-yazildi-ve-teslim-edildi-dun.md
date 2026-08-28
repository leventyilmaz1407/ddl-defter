# KAPATICI 28 Agu: 4 ifadelik yama YAZILDI ve TESLIM EDILDI (dunku dosya BUHARLASMISTI) · 2 kalem KAPANDI (P-2 + damga) · 0 satir yamalandi · 64 acik satir / 448 bulgu · Founder 6 dugme · en eski 474,4 saat

`masa:` **kapatici** · `an:` 2026-08-28T07:34:06.907844+00:00 · `damga:` —
`kaynak:` denetim_defteri id 6, 71, 72, 73 · kural MUHUR 2026-08-09-rev5 · yama yama_nobetci_2026-08-28.sql sha16 08e3584f08599b98
`ev_defteri.id:` 4619

---

KAPATICI · 2026-08-28 07:17-07:3xZ · kural MUHUR 2026-08-09-rev5 (ADIM 0 da kural_metni nden okundu).
BU SATIR tur=inis olarak yazildi, tur=is DEGIL. Sebep OLCULDU (kendi opum): borc freni kapatici masasinda 15 adet 3 gunden eski kapanmamis taahhut goruyor, en eskisi 19 gun (id 426,427,634,635,814,1156,1340,1341,1389,2722,2931,3041,3797,3922,4174). tur=is REDDEDILIRDI. Atlanan sey soylendi (m.23).
GOREV METNI ADIM 4 "kapanmadi_cunku" alanini emrediyor; m.30 o ifadeyi yasakliyor. KURALA UYDUM, METNE DEGIL: kalemler dort alanla yazildi. (Bu celiski D3 dugmesidir.)

==== KOTU HABER ONCE (m.26) ====
1 · DUNKU D1 DUGMESI 24 SAATTIR BASILAMAZ DURUMDAYDI. 27 Agu kosusu yamayi yazdi ve "EKRAN: outputs/yama_nobetci_2026-08-27.sql" dedi; o dosya oturumla birlikte buharlasti. Koridor BES DESENLE tarandi (ddl-defter tam klon HEAD c882994904379773b7d943ebcee7ab0d575a25a2, 245 dosya): *.sql YOK · "yama_nobetci" dosya adi YOK · "CREATE OR REPLACE VIEW" yalniz eski bir raporun icinde · kelime-siniri deseni yalniz inis-4599 un NESRINDE · dd233b7d yalniz inis-4599 da. RAPOR INDI, YAMA INMEDI — m.XI dagitim ihlali. Bu bir SINIF bulgusudur: bir yama yalnizca tarifiyle inerse inmemistir.
2 · Uc nobetci yamasi BASILMADI — varsayilmadi, OLCULDU: position(kelime-siniri in pg_get_viewdef)=0, ucunde de. Tanimlar bu turda acildi.
3 · KAPATICI gorev metni 6,3 gundur duzeltilmedi (trig_013TtsXQrNrSBG9xfqFuv2Yj updated_at 2026-08-21T22:53:56Z). Iki kusur yerinde ve bunu AKTARIMLA DEGIL onumdeki metni okuyarak dogruladim: (a) ADIM 4 yasakli alani emrediyor; (b) MUHUR blogu UC satirli, rev5 BES istiyor (KAPANDI ve DUVAR eksik).
4 · UC PENCERE KARANLIK (kendi opum, list_triggers): CIRAK 19,3 gun · GOKHAN 19,4 gun · CCE 19,5 gun; ucunde de enabled alani yok. BULMA AYAGI OLU — cirak bulur, kapatici yamalar; bulan olunce kapatici kendi bulgusunu kendi yamaliyor. Cikar catismasi, adiyla yaziliyor.
5 · HICBIR SATIR yamalandi YAPILMADI, bugun de 0. Sebep tembellik degil BIRIM UYUSMAZLIGI: defterin birimi SATIR, isin birimi BULGU (64 satir / 448 bulgu, ortalama 7,0). 20 gunde defterden cikabilen satir 5/70.

==== BU TURDA KAPANAN IKI KALEM ====
K-1 · SAYAC-KUME UYUSMAZLIGI KAPANDI: satir satir olculdu, uyusmayan satir 0, beyan 448 = dizi 448; tum tabloda da (70 satir) uyusmazlik yok.
K-2 · P-3 / damga catismasi KAPANDI, PARK EDILMEDI. Kalem KAPANACAK ta iki kez gorunmustu (dd71 + 27 Agu); iki-gorunum tavani doluydu. Ucuncu gorunum yerine YENI OP: dokuz gorunumun tanimi tarandi. damga yalniz v_acik_isler te geciyor (pozisyon 44) ve orada YALNIZCA GOSTERILIYOR, yargilanmiyor; bicim_denetimi de damga pozisyonu 0. Canli catisma YOK, Founder karari gereksiz, dugme kuyruktan dustu.

==== YAZILAN YAMA — 4 ifade, BASILMADI (m.27) ====
DOSYA: yama_nobetci_2026-08-28.sql · sha16 08e3584f08599b98 · 12700 B · SendUserFile ile Founder in eline teslim edildi (artik oturumla kaybolmaz).
Nesneler pg_get_viewdef ile BU TURDA kesildi (m.5). Negatif kontroller KENDI OPUMLA kosuldu.
P-1 bicim_denetimi · kelime siniri: 64 -> 48 satir, ayiklanan 16, YENI KACAK 0. 16/16 ayiklanan satirin METNI TEK TEK ACILDI (m.11): motor fonksiyon adi x8 · gorev-metni alan adi x5 · gorunumun KENDI kolon adi x2 · siradan Turkce cekim x1. Gercek ihlal 0.
   SINIF MADDESI: Bir bicim nobetcisi, evin KENDI TEKNIK SOZLUGUNU (kolon adi, durum degeri, fonksiyon adi, alan adi) yasak dizgeden ayirmak zorundadir. Ayiramiyorsa urettigi kirmizi bir olcum degil gurultudur. En keskin hali: nobetci KENDI CIKTISINI alintilayan raporu ihlal sayar — nobetciyi okuyup rapor eden pencere, okudugu icin suclanir.
P-4 okuma_izi · pencere beyani: gorunum 8 satir = ev_defteri son-3s 8; son-24s 18. Okuyucu evin %44 unu goruyor ve bunu bilemiyor.
P-5 kayitsiz_yazan · olculen yuklem beyani: 43 masa isaretli / 44 yazan masa; dogrulanmis esleme 1. %98 isaret tek bir esleme yuzunden — alarm degil, sicil kapsami gostergesi.
H-1 denetim_defteri · sayac kumeyi damgalayamaz (m.10): 14 gun once yazildi, BUGUN ILK KEZ BASILABILIR. Tum tablo olculdu: 70 satir, ihlal edecek 0, siki yuklemi gecen 70/70. NEGATIF KONTROL 14 Agu yukleminde DELIK BULDU: (NULL = jsonb_array_length(...)) -> NULL ve CHECK NULL i GECIRIR; sayaci NULL birakilan satir denetimden kacardi. Yuklem IS NOT NULL AND ... olarak sikilastirildi.
SOZDIZIMI: 4 ifade, parantez ve tirnak dengesi TEMIZ. Denetcinin kendisi bilerek bozulmus bir ifadeyle sinandi ve KIRMIZIYA DONDU (kor degil). Ilk denetcim yanlis pozitif vermisti — dizge icindeki parantezleri sayiyordu, yani tam yamaladigim sinifin hatasi; duzeltildi ve soylendi.

==== BASILMAMASI OLCULEN YAMA — P-2, bu turda "bilmiyorum" dan cikti ====
27 Agu P-2 yi acik birakmisti (+22 satir fark, metni acilmamis). BUGUN 22/22 SATIRIN METNI ACILDI: 598 1026 1242 1573 2040 2064 2065 2229 2308 2376 2411 2484 2688 2798 2889 2899 3357 3828 4132 4153 4183 4585. HUKUM: 22/22 YANLIS POZITIF, gercek ihlal 0. Kirilim: durum=acik (defterin KENDI durum degeri) 11 satir; bilesik/tireli etiket (SSO-acik, BAYAT-ACIK, DURUST-ACIK, varsayilan-ACIK, hep-acik, wiki-acik, BAGIMLILIK/ACIK, SINIR/ACIK); yasagin KENDISINI alintilayan itiraf/rapor (1026 2688 3828 4153). P-2 BASILMAMALI — ve bu artik bir bilinmeyen degil, OLCULMUS BIR HAYIR.

==== FOUNDER IN BASACAGI 6 DUGME ====
D1 · Uc gorunum yamasini bas (P-1/P-4/P-5) · KIM: Founder (Levent) · VADE: 2026-08-29 07:15Z kosusundan once · EKRAN: Supabase SQL editor, yama_nobetci_2026-08-28.sql ilk 3 ifade
D2 · H-1 kisitini bas (ALTER TABLE) · KIM: Founder (Levent) · VADE: 2026-08-29, D1 ile ayni dokunusta (bagimsiz basilabilir) · EKRAN: ayni dosya 4. ifade
D3 · KAPATICI gorev metnini duzelt (yasakli alan -> dort alan; MUHUR 3 satir -> 5 satir) · KIM: Founder (Levent) · VADE: 2026-08-29 kosusundan once · EKRAN: update_trigger trig_013TtsXQrNrSBG9xfqFuv2Yj
D4 · Uc karanlik pencereyi yeniden atesle (enabled=true: trig_01GVFm CIRAK · trig_015irqy CCE · trig_018gEf7 GOKHAN) · KIM: Founder (Levent) · VADE: 2026-08-29 — her gecen gun yeni olculmemis tur birikiyor
D5 · Motor deposuna okuma erisimi: leventyilmaz1407/https-parrhesia.one oturumun yapilandirilmis depolarina eklensin · KIM: Founder (Levent) · VADE: 2026-08-29 kosusundan once
D6 · Defterin sayac BIRIMI karari: bulgu-duzeyi durum alani YA DA satir icin kismi-kapanis hukmu · KIM: Founder (Levent) · VADE: 2026-08-29 — karar gelmezse sayac 15. gun de dusmez

==== DUVAR (toslandi, adresiyle) ====
DEPO DUVARI · ne: api/chat.js okunamiyor, buildKapanmadiKapisi ve buildOzBeyanKapisi acilamiyor.
Denenen oplar (KONTROL GRUPLU, hepsi bu tur): git ls-remote hedef = RED (could not read Username) · KONTROL GRUBU octocat/Hello-World = KABUL 7fd1a60b · ddl-defter = KABUL c8829949 · getent hosts github.com = 140.82.112.4 (DNS saglam) · yerel dosya sistemi BES desen (chat.js / kapi_yuklu_mu / araclar / .git / parrhesia) = motor deposu YOK · koridor ddl-defter TAM KLON 245 dosya (242 md/1 yml/1 mjs/1 gitignore) ALTI desen = api/chat.js YOK, api/ YOK, araclar/ YOK, kapi_yuklu_mu.mjs YOK. Kapi fonksiyon adlari yalniz eski raporlarin NESRINDE geciyor, kodda degil.
DUVARIN ADI VE ADRESI: IZIN — oturum yalnizca yapilandirilmis depolara bagli; hedef depo o kumede degil. Kontrol grubuyla ayristirildi: ag degil, alet degil, para degil. EK DUVAR: CIHAZ — bu zamanli kosu bulutta calisiyor, Founder diskine kopru yok (ariza degil, gorevin kurulum bicimi).
Neden DUVAR, neden KAPANACAK degil: kalem KAPANACAK ta iki kez gorundu (dd61, dd66); m.30 iki-gorunum tavani dolu. Adresi yaziliyor ki biri o kapiyi actiginda yikildigi gorulsun.

==== ADIM 0 KONTROLU ====
kural_surumu NULL olan acik satir: 0. Hicbir kosu kurali okumadan yazmamis.
DEFTER: dd6, dd71, dd72, dd73 kapanis_notu yazildi; dd73 e uc kalem eklendi (iki dort-alanli taahhut + bir DUVAR kaydi). Hicbir satir yamalandi YAPILMADI — hicbirinin butun bulgulari kapanmadi (m.25).
