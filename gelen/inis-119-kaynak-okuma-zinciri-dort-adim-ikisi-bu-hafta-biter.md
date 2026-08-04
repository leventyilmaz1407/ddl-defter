# KAYNAK OKUMA ZINCIRI — dort adim, ikisi bu hafta biter

`masa:` **Founder → Vernier (M4) + Lustig (M5)** · `an:` 2026-08-04T19:02:21.995145+00:00 · `damga:` unexamined
`kaynak:` Founder kesimi 4 Agu 19:05Z · source_registry 969 kayit · Kement sicil olcumu 152 tur
`ev_defteri.id:` 119

---

FOUNDER'IN KESIMI, 4 Agu aksami: "Bu aksam bitiyor ne bitiyorsa."
Ve Founder'in yakaladigi mantik hatasi — Onondaga'nin cumlesi kesildi:
"motor okuyamayacagi yere GITMEZ" YANLISTI. Bir URL'nin ne dondurdugu ancak
CEKILINCE bilinir. Dogru zincir asagida; onceki cumle ERRATA'ya dustu.

═══ DOGRU ZINCIR ═══
1. GIT. Baska yolu yok.
2. NE GELDIGINE BAK — Content-Type basligi ya da ilk baytlar.
3. TURE GORE YONLENDIR:
     text/html        -> HTML ayristirici     VAR
     application/pdf  -> PDF metin cikarici   YOK  <- IS 2
     image/*          -> OCR                  yok  (30 Agustos'a GIRMEZ)
     audio, video     -> transkript           yok  (30 Agustos'a GIRMEZ)
     application/json -> yapisal okuma        yok  (sirada)
4. ISLEYICI YOKSA SUSMA — KULLANICIYA SOYLE.   <- IS 1, ve ASIL KUSUR BU

Bugun motor 4. adimda susuyor: PDF'i aciyor, unsupported_type diye bir LOG
alanina yaziyor, kullaniciya HICBIR SEY DEMIYOR. Kaynagi gosteriyor ama
OKUMADIGINI soylemiyor. Yalan degil ama EKSIK — ve bu urunde eksik, yalanla
ayni kapiya cikar. Urunun ikinci vaadi tam olarak burada kiriliyor.

═══ IS 1 · SUSMAYI BIRAK  (yarim gun · Vernier keser, Lustig yazar) ═══
KAPI 4.2 artik IKIYE degil DORDE bolunur. Kullaniciya cikacak cumleler:
  a) hic aranmadi        -> "Bu turda kaynak aranmadi."
  b) acilamadi (403/500/ -> "Baktim, sayfalari acamadim." + kac host
     baglanti/sure asimi)
  c) ACILDI, TURU OKUNAMADI -> "Actim — bu bir PDF/goruntu/ses. Metnini cikaramadim.
                              Kunyeyi veriyorum, ICERIGINI DOGRULAMADIM."
  d) acildi ve okundu    -> normal atif
(c) BUGUN HIC YOK ve en pahalisi o. Olculen: 5/8 dususs unsupported_type,
tum cagrilarin %20'si. Bu turlar su an (d) gibi gorunuyor.
LUSTIG: dort cumlenin son hali ve ekranda nerede duracagi senin. Damga gorunurlugu
kalemiyle (L2, 0/152) ayni yerde cozulur — ikisi tek tasarimdir.

═══ IS 2 · PDF METIN CIKARICI  (bir gun · Vernier/CCE) ═══
pdf-parse ya da pdfjs. Tek bagimlilik, yeniden tasarim degil.
Kapsam: 34 PDF-etiketli kaynak + HTML+PDF melezleri (12) + dizin/arama+PDF (7).
BEKLENEN KAZANC: fetch dususlerinin %62,5'i (5/8). SINAMA SART:
  bilinen-tutan: dergipark.org.tr/.../journal-file/19674 (bugun http 200 + unsupported_type)
  bilinen-kiran: sifreli/bozuk bir PDF -> duzgun hata, sessiz dusme YOK
Ikisini de kos ve YAZ. Sinanmamis alet sahaya cikmaz.

═══ IS 3 · KORPUS KENDI MENZILINI BEYAN ETSIN  (defter isi) ═══
source_registry'ye tek yeni sutun: motor_erisim
  'metin' · 'api' · 'pdf' · 'ocr-gerek' · 'transkript-gerek' · 'isaret-only'
BU BIR "GITME" ISARETI DEGILDIR — Onondaga once oyle yazdi, yanlisti. Iki ise yarar:
  (1) SIRALAMA: elde bes kaynak varsa okunabileni once dene. Engel degil, tercih.
  (2) DOGUSTAN ISARET OLANLAR (24 kaynak, %2,5): mikrofilm arsivi, fiziki koleksiyon,
      kapali OPAC. Bunlarin ONLINE TAM METNI YOK; hicbir motor okuyamaz.
      Dogru davranis "gitme" degil, kunyeyi verip (c) cumlesini kurmak.
Sema degisikligi = geri alinabilir (nullable sutun), ama KOSULMADAN once kesim yazilir.

═══ IS 4 · 183 SINIFLANAMAYAN  (bir oturum · M1 SICIL) ═══
bicim sutunu serbest metin, ~250 farkli deger. 183 kayit hicbir sinifa oturmadi (%18,9).
Bilinmeyeni bilinene cevirmeden hicbir plan durust degildir. Elle sinifla, motor_erisim'e yaz.

═══ OLCU — bu isin karnesi ═══
Her turda uc sayi, paydasiyla: DENENDI / OKUNDU / ISARET-OLARAK-VERILDI.
Bu uclu motorun DURUSTLUK KARNESIDIR ve testciye gosterilecek sey de odur.
Bugunku taban: denendi 25 · okundu 17 · isaret 0 (cunku (c) cumlesi yok).

═══ 30 AGUSTOS'A GIRMEYENLER — soz verilmez, siraya alinir ═══
OCR (111 kaynak) · transkript (37 kaynak). Cogu yazma, mikrofilm, faksimile,
tarihsel ses. Bir hakikat motorunun ilk gununde bunlara ihtiyaci yok.
FOUNDER'IN MUHRU BEKLIYOR: bu ayrima itirazin var mi?

═══ OLCUMUN KENDI SINIRI ═══
Siniflandirma Onondaga'nin KABA deseniyle yapildi. F 364 · B 216 · G 183 · D 111 ·
C 37 · E 34 · A 24 = 969. Yaklasik sayidir. IS 4 bitince gercek sayi cikar,
ve bu satir o zaman duzeltilir.
