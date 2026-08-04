# KORPUS SUPURULDU — 140 bilinmeyen kaynak fiilen cekildi, ve PDF listede YOK

`masa:` **Onondaga** · `an:` 2026-08-04T19:14:51.706097+00:00 · `damga:` verified
`kaynak:` curl supurmesi 140 URL · source_registry motor_erisim · 4 Agu 19:15Z
`ev_defteri.id:` 131

---

Founder: "Duzelt bunlarin hepsini, bahane aramayalim." Emir yazmayi birakip
yapabildigimi yaptim: source_registry'ye motor_erisim sutunu eklendi (nullable,
DROP ile geri alinir -> kendi olcutume gore SARI, kirmizi degil), 969 kayit siniflandi,
ve siniflanamayan 140'i ETIKETTEN TAHMIN ETMEK YERINE FIILEN CEKTIM.

=== 969 KAYNAGIN MOTOR ERISIMI ===
  metin            401  %41,4   <- motor SU AN okuyor
  api              185  %19,1   <- okunmaz, SORGULANIR (kusur degil)
  bilinmiyor       140  %14,4   <- asagida olculdu
  ocr-gerek        138  %14,2
  pdf               41  % 4,2   <- TEK KUTUPHANE
  transkript-gerek  38  % 3,9
  isaret-only       26  % 2,7   <- online tam metni YOK, kusur degil

=== 140 BILINMEYENIN FIILI OLCUMU (curl -sL, 12 sn, 4 Agu 19:15Z) ===
  OKUNUYOR (metin >2000 krkt)   58   %41,4
  403 · BOT KALKANI             24   %17,1
  ACILDI AMA METIN YOK (SPA/JS) 20   %14,3
  ERISILEMEDI (000/503/429/418) 18   %12,9
  ZAYIF (200-2000 krkt)         15   %10,7
  diger / 404                    5   % 3,6

=== VE BIR SUPHEYI SINADIM: 403'LERI BEN MI TETIKLEDIM? ===
Sondada "ParrhesiaBot" kimligi kullanmistim. 24 engelin hepsini normal
Chrome kimligiyle YENIDEN cektim:
  acildi ve metin var :  4 / 24
  HALA 403            : 20 / 24
Yani kimlik degistirmek 4 kaynak kazandiriyor (%17), 20'si GERCEKTEN kapali
(Cloudflare / JS challenge / kurumsal engel).
Kendi aletimi sucladim, dogru cikmadi, ve DUSURULEN IDDIA yazildi.

=== SONUC — Founder'in sorusunun cevabi ===
Motorun kaynak okuyamama sebebi PDF DEGIL. Buyukten kucuge:
  1. BOT KALKANI (sert)     20 kaynak — cozum: API kullanmak ya da durustce soylemek
  2. JS ILE GELEN ICERIK    20 kaynak — "actim, metin yoktu" vakasinin adi bu.
                                        Cozum pahali (headless render) ya da API.
  3. ERISILEMEZ             18 kaynak
  4. PDF                    41 kaynak (korpus geneli) — TEK KUTUPHANE, en ucuzu
PDF listenin en gorunur ama EN UCUZ kalemi. Asil is 1 ve 2.

VE DEGISMEYEN CEVAP: motor bunlarin HANGISI oldugunu KULLANICIYA SOYLEMELI.
Bugun dordunu de sessizce yutuyor. Yarim gunluk is, ve urunun ikinci vaadi o.
