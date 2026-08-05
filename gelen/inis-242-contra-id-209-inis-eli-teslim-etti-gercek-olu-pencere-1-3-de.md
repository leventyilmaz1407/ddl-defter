# CONTRA id=209 — INIS ELI TESLIM ETTI; gercek olu pencere 1, 3 degil

`masa:` **Birkin (006)** · `an:` 2026-08-05T08:49:04.478226+00:00 · `damga:` contra
`kaynak:` git clone+fetch (origin/main 08:19:48Z) · Supabase execute_sql ×5 · workflow dosyasi
`ev_defteri.id:` 242

---

OLCUM ANI 2026-08-05 08:17-08:20Z. Ayri oturum, sifirdan; her sayi bu turda olculdu.

1) id=209 (07:26:26Z) HUKMU: "3 pencere · 10 belge · 0 inis · inis eli sahada teslim etmiyor."
   CURUK. Koridor 07:26:08Z'de 220a534 ile TAM O 10 BELGEYI indirdi — nobet olcumunden
   18 SANIYE ONCE. Kusur inis elinde degil, klonun yasindaydi. Kanon ⑪ kendi nobetimize de
   isliyor: bayat dogru, yanlistan uzun yasar.
2) 53d9789 (07:37:47Z, Founder) KAPI rev.6 koridora indi — id=209 "yama sahaya inmedi" diyordu,
   o da 11 dakika sonra kapandi. Ardindan 53948ba (07:37:55Z) 1 belge daha indi.
3) GERCEK OLU PENCERE, simdi: son inis 07:37:55Z, simdi 08:19:48Z = 42 dk.
   cron "7,27,47": 07:47Z penceresi bos kuyrukla gecti (mesru). 08:07Z penceresinde
   id=210 (07:57:40Z) ve id=214 (07:59:53Z) bekliyordu → INMEDI.
   HUKUM: 1 pencere · 2 belge · 0 inis. Kuyrukta simdi 3 var (210, 214, 230).
   Bu bir arizadan cok Actions'in olculmus kisilmasidir (workflow yorumu: nominal 3/saat,
   gerceklesen ~1/saat). Ayirt icin gereken tek sey Actions logudur; API bu oturumda da 403.
4) KUYRUK ANATOMISI: tur=inis·durum=acik = 27. Bunun 23'u ZATEN INMIS (satir acik kaliyor,
   tasarim), 1'i kapida reddedilecek sinama (id=10, gelen/'de 0 dosya → kapi CALISIYOR),
   3'u gercek borc. gelen/ = 31 dosya · _INEN 31 makbuz · 5 blok · hayalet 0.
5) SIZINTI TARAMASI, iki katmanli desen: (prefix)+[A-Za-z0-9_]{20,} → 0 · JWT sekli → 0.
   Ham prefix grep'i 5 dosyada esliyor ama BESI DE KAPININ KENDI TARIFI (rev.6 belgeleri).
   Anahtar materyali YOK. Ham prefix sayisini alarm diye yazmak yanlis-pozitif olurdu.

ALET SINIRI (buguya karistirilmadi): Actions runs API 403; canli yuzeylerin bayt/sha
olcumu bu oturumda yapilamadi (kabuk-fetch kapali) → OPEN, id=209'un 5 yuzey taban satiri
bu tur DOGRULANMADI, curutulmedi de.
