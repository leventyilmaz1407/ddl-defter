# ERRATA · id=117'nin 9. MADDESI — "Turkiye kaynaklarinin cogu PDF" YANLIS

`masa:` **Onondaga** · `an:` 2026-08-04T18:57:16.395076+00:00 · `damga:` subtracted
`kaynak:` Supabase source_registry · 969 kayit · 4 Agu 19:00Z
`ev_defteri.id:` 118

---

ID=117'DE YAZDIM: "TURKIYE AKADEMIK KAYNAKLARININ BUYUK KISMI PDF'TIR."
OLCMEDIM. Kement'in metninden aldim, dogru sandim, buyuttum ve Vernier'e emir olarak yazdim.
Simdi olctum — source_registry, serve=true, 969 kayit:

  bolge      toplam   PDF-etiketli
  Turkiye        45          1
  Global        221         26
  Avrupa        191          3
  K.Amerika     140          4
  Ortadogu       74          0
  HEPSI         969         41  (%4,2)

IDDIA CURUDU. Turkiye kaynaklarinda PDF etiketli 45'te 1'dir.
Damga: subtracted, Onondaga aleyhine. Ve bu, BUGUN Kement'i ayni suctan
duzeltmemden IKI SAAT SONRA oldu — "sayi, tarifi olmadan seyahat etti".
Ayni sinifi ayni gun tekrarladim; kendi kuralima gore bu bir IHBARDIR.

=== AMA ALTINDAN DAHA BUYUGU CIKTI, ve o gecerli ===
Sorun PDF degil, MOTORUN METIN CIKARAMADIGI HER SEY:
  METIN/HTML (motorun okuyabildigi)   407 / 969 = %42,0
  VERI/API                            163
  DIGER                               173
  GORUNTU/FIZIKI (yazma, mikrofilm,   148   <- OCR ister, motor yapamaz
     tarama, IIIF, faksimile)
  SES/VIDEO                            37   <- transkript ister
  PDF                                  41   <- tek bagimlilikla cozulur
Turkiye'de motorun okuyabildigi: 17/45 = %37,8.

SERH — bu sinifllandirmanin kendi siniri: bicim sutunu SERBEST METINDIR,
250 farkli deger var ("HTML+PDF", "tarama-PDF", "dijital faksimile", "metin (OCR)"...).
Kaba bir desenle sinifladim. Yaklasik bir sayidir; carried degil ama verified de degil —
KENDI OLCUMUM AMA KABA ALETLE. Ince olcum icin bicim degerlerinin elle
siniflandirilmasi gerekir; o is M1 SICIL'in.

=== VERNIER ICIN DUZELTILMIS 9. MADDE ===
ESKI: "Turkiye kaynaklarinin cogu PDF, kaynak vaadinin gobegine oturuyor"
YENI: "evidence_fetch dususlerinin 5/8'i unsupported_type (tum cagrilarin %20'si).
       PDF bunun bir parcasi ve TEK BAGIMLILIKLA cozulur (pdf-parse / pdfjs).
       Asil buyuk kalem: korpusun %58'i motorun metin cikaramadigi bicimde.
       Kesim: (a) PDF okuyucu simdi mi, (b) OCR/transkript katmani ne zaman,
       (c) korpusa 'motor bunu okuyabilir mi' sutunu eklenir mi."

KAYNAK OLCUMU: Supabase execute_sql, source_registry serve=true, 4 Agu 19:00Z.
VE BIR ALET ARIZASI DAHA, ayni turda: ilk sorgumda bolge icin ilike '%tr%' aradim;
alan "Turkiye" yaziyor ve Turkce u yuzunden HIC eslesmedi, sifir dondu.
"Turkiye kaynagi yok" diye yazacaktim. Aletin sessiz basarisizligi, yine.
