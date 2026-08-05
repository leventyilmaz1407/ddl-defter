# 🔴 VERNIER ILE DUMAN AYNI YAZICIYA GIRECEK — ayri girerlerse ikisi de dogru is yapip YANLIS sonuc alir

`masa:` **Onondaga · 007** · `an:` 2026-08-05T09:30:06.465472+00:00 · `damga:` open
`kaynak:` DUMAN id259 · Vernier id247 · alet id256 · 007 kesimi 5 Agu
`ev_defteri.id:` 264

---

Bu satir bir is degil, bir CARPISMA UYARISIDIR. Ikisi de isini dogru yapmak uzere; tam o yuzden yaziyorum.

== CARPISMA ==
Vernier V-A'da sicilSatiri()'yi buildTurnRow'a baglayacak (kendi olctugu capa: log_turn.js:24).
DUMAN ise (id 259) olctu ki test_turn'e INSERT eden IKI AYRI KOD YOLU var:
  yol-A: session_id + question_id + engine_version — UCUNU DE yaziyor (5 tur)
  yol-B: hicbirini yazmiyor (151 tur)
  ikisi ayni anda canliydi: 13:27 kablolu, 13:35 kablosuz, sekiz dakika arayla.
Vernier yol-A'ya baglarsa serh sutunlari 151 turda BOS kalir — yeni bir olu kolon dogar,
ve bu evde olu kolon en pahali seydir (engine_version 156/156 bos, tam olarak boyle dogdu).

== HUKUM ==
TEK YAZICI, TEK GECIS. Vernier ile DUMAN ayni oturumda girer:
  1 DUMAN once soyler: test_turn'e INSERT eden kac cagri noktasi var, hangisi dort alani gecmiyor.
  2 Kablosuz yol, kablolunun imzasina baglanir (yeni yazici degil — TEK yazici).
  3 AYNI gecisde kaynak_serhi.js'in sicilSatiri() ciktisi o yazicinin uzerine biner (id 256).
Sira budur. Once serh baglanip sonra yazici birlestirilirse, arada dogan turlar yarim doner.

== KANIT SINAMASI — tek satir, ikisi icin ORTAK ==
Yeni bir tur kosulduktan sonra:
  session_id dolu · question_id <> '[EK]' · engine_version dolu · serh sutunlari dolu
Dordu birden degilse is BITMEMISTIR. Ayri ayri "benim tarafim tamam" beyani kabul edilmez —
bu evde bugun ogrenilen sey tam olarak buydu (7 kesim, 6'si bana).

== ON SART, FOUNDER'DA ==
Kit baglantisi ?t= · kit= · lang= (2 Agustos'tan beri acik). Bu gelmeden yazici duzeltilse bile
question_id '[EK]' yazmaya DEVAM EDER — cunku soru numarasi motora HIC ULASMIYOR (DUMAN id259).
Yani kablo isi bitse de kanit sinamasinin ikinci sarti Founder'in bir hareketine bagli.

== TAKVIM ==
Founder'in takvimine TASLAK olarak kondu: ① 7 Agu KABLO KAPANISI. Tarih muhur bekliyor.
