# TEST HAZIRLIK KAPISI — Founder emri, ve arayuzun son hali

`masa:` **Founder → Vernier (M4)** · `an:` 2026-08-04T18:53:32.15268+00:00 · `damga:` unexamined
`kaynak:` Founder emri 4 Agu 18:55Z · sayilar: Kement M1 sicil olcumu 16:34Z + Lustig M5 + Onondaga list_tables
`ev_defteri.id:` 117

---

FOUNDER'IN EMRI, birebir:
"Bir daha webi calismayan, test yaptiramayan duruma dusmeyelim. Lustig ve ciragi ile
arayuzun son halini verecegiz, yapmamiz gereken ne varsa yazsin bize."

=== NE ISTIYORUZ — bir belge degil, BIR KOSU ===
"Dikkat edelim" bir mekanizma degildir. Istenen sey TEK KOMUTLA KOSAN bir kapi:
cikti YESIL ya da KIRMIZI, ve kirmizysa TEST OTURUMU BASLAMAZ.
Her maddesi dort alan tasir:
  NE · NASIL OLCULUR (birebir komut/sorgu) · YESIL NEDIR (sayi, PAYDASIYLA) · KIM DUZELTIR

=== KAPIYA GIRMESI GEREKEN DOKUZ KALEM — hepsi BUGUN olculdu, tekrar olcme, KES ===

1. KIT BAGLANTISI  🔴 Founder'da
   question_id = '[EK]' -> 151/152 (%99,3) · session_id dolu -> 5/152 (%3,3)
   Yani testcinin hangi kitle, hangi dilde, hangi soruyu sordugu KAYITSIZ.
   Bu acikken yapilan test, veri uretmez. 3 Agustos'un dersi: 91/91 [EK], bir gun kor pencere.
   KAPININ BIRINCI MADDESI BU OLMALI ve digerlerinin hepsinden once gelir.

2. consents TABLOSU YOK  🔴 sema
   Kod sb.from("consents").insert(...) deyip .then(()=>{}) ile hatayi yutuyor.
   Olculdu (Lustig buldu, Onondaga ikinci elden dogruladi): public'te 15 tablo var,
   consents aralarinda DEGIL. Yani riza "verilmedi" degil, KAYDEDILEMIYOR.
   Test oturumu riza kaydi olmadan baslamamali.

3. feedback / user_feedback AD UYUSMAZLIGI
   Kod feedback'e yaziyor; tablonun adi user_feedback ve 0 satir.
   Gecen haftaki "testci geri bildirimi gelmiyor" sessizliginin sebebi bu olabilir.
   Ayni sinif: yazma basarisiz, hata yutulmus. UCUNCUSU VAR MI — ara.

4. DAMGALAR EKRANDA GORUNMUYOR  (Lustig L2)
   response_raw icinde ● ◐ − × ○ ◌ gecen tur: 0 / 152.
   Testci motorun kendi hakkindaki hukmunu goremiyor -> ITIRAZ EDEMIYOR.
   Urunun ikinci vaadi tam olarak bu. Arayuz isi: Lustig + cirak.

5. MARKDOWN TABLO HAM DUSUYOR  — turlarin %37,5'i (57/152, Lustig)
   Cevabin ucte birinden fazlasi ciplak | a | b | cizgileriyle cikiyor. Arayuz isi.

6. /api/capabilities 500 DONUYOR
   Uc nokta degil kutuphane; ama testci konsolda hata goruyor. Ya kaldirilir ya duzeltilir.

7. SICIL SUTUNLARI BOS: engine_version 0/152 · cache_read/write 0/152
   Test sirasinda hangi build'in cevap verdigi SICILDEN okunamiyor; deploy saatinden
   geriye cikarim gerekiyor. Kesim uc gundur yazili, INMEDI (§V-A).

8. _kunye_ HIC GORULMUYOR · [R1] IC ISARETI SIZIYOR  (10 tur, Sen ile mutabik)

9. KAYNAK HATTI — dort hizmet, ayri ayri (Kement, 152 tur):
   brave 33/25 (%75,8) · evidence_fetch 25/17 (%68,0) · crossref 60/0 (%0) · unpaywall 6/0 (%0)
   crossref 60 cagri SIFIR basari: 44'u http 200 ama reason alani YOK (etiketsiz),
   15'i 404, 1'i 429 (hiz siniri — kimliksiz cagri yapiyor olabiliriz).
   unpaywall 0/6'nin sebebi durust: not_oa 6/6, korpus gercegi, ariza degil.
   evidence_fetch dususleri: unsupported_type 5 · http_500 2 · http_403 1
   -> SURE ASIMI BUGUNKU DUSUSLERIN SIFIRINDA. En buyuk tek sebep unsupported_type: PDF.
   TURKIYE AKADEMIK KAYNAKLARININ BUYUK KISMI PDF'TIR. Turkce hakikat urununun
   kaynak vaadinin gobegine oturan tek satir bu.

=== LUSTIG VE CIRAGI ICIN AYIR ===
Yukaridakileri IKIYE bol ve ayrimi YAZ:
  ODA (arayuz) tarafi  -> 4, 5, 8 · ve muhtemelen 6
  MOTOR tarafi         -> 2, 3, 7, 9
  FOUNDER muhru        -> 1
Arayuzun son halini Lustig ve ciragi verecek; senin isin ONLARA NE GEREKTIGINI
yazmak, tasarimi yapmak degil. Kesim senin, oda Lustig'in.

=== TESLIM ===
Tek sayfa, ev_defteri'ne tur='inis' ile yaz (koridora kendiliginden iner).
Icinde: kapi maddeleri (dort alanla) · ODA/MOTOR/MUHUR ayrimi ·
ve her madde icin "30 Agustos'a yetisir mi" cevabi — evet/hayir, sebebiyle.

=== VE BIR KURAL, kalici ===
Bir test oturumu bu kapi YESIL olmadan baslamaz. Kirmizi bir madde varken
"nasil olsa calisiyor" denmez — bugun tam olarak o yuzden 152 turun 147'si bagsiz dogdu.
Kapi bir gecikme degil, tekrar olcum yapmak zorunda kalmamanin bedelidir.
