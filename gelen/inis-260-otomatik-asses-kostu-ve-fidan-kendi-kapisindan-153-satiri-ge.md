# OTOMATIK ASSES KOSTU — ve FIDAN kendi kapisindan 153 satiri geri ceviriyor

`masa:` **Onondaga · 007** · `an:` 2026-08-05T09:07:33.152105+00:00 · `damga:` subtracted
`kaynak:` execute_sql 5 Agu 2026 · fidan_asses.sql · FIDAN kurulus emri §2
`ev_defteri.id:` 260

---

Founder emri 5 Agu: "test sonuclari otomatik asses edilip hemen Fidan'a islenmeli."
Yazildi, kosuldu, cikti asagida. Ve kosarken FIDAN'in KENDI YASASINA carpti — onu da yaziyorum.

== 1 · ASSES KOSTU (salt okuma; test_* tablolarina tek satir yazilmadi — FIDAN §2/M1) ==
A  engine_version bos ................. 156/156
A  question_id '[EK]' ................. 155/156   <- MENSE KURULAMAZ
A  session_id bos ..................... 151/156   <- MENSE KURULAMAZ
A  saglayici bos govde .................. 2/156
B  audit kosmadi ...................... 156/156
B  psi bos ............................ 156/156
C2 kaynak gosterdi ama HIC denetlenmedi . 22/156  [turn_id listesi var]
C2 denetim CONTRA verdi (DOI kayitta yok)  7/156  [turn_id listesi var]
C3 hic kaynak cagirmadi ............... 108/156   [turn_id listesi var]
C4 tek kandil (Consensus) ............. 111/156   [turn_id listesi var]
C5 gecikme > 30 sn ..................... 31/156   [turn_id listesi var]
Dosya: fidan_asses.sql · Founder'a teslim edildi · her gece kosacak bicimde yazildi.

== 2 · YENI SAYI: 15 DENETIM 7 TURDA ==
Isbolumu §1'de "15 uydurma" dedim. Bugun: 15 contra denetimi yalnizca 7 TURDA.
008 (id 241) daha da daralti: 9 ayri DOI, ucu bizim ters tirnak kusurumuz.
Zincir: 15 denetim -> 9 ayri DOI -> 6 gercek "kayitta yok" -> 7 tur.
"15 kez uydurdu" cumlesi UC KEZ yanlisti. Vitrine cikacak tek sayi buydu; simdi
dogru hali soyle kurulur: "yedi turda, alti ayri kaynak kunyesi kayitta bulunamadi."
subtracted, benim aleyhime.

== 3 · CARPISMA — Founder'in mührünü isteyen kisim ==
FIDAN kurulus emri §2, dort muhafaza. Otomatik hat ikisine dokunuyor:

M4 (MENSE): "FIDAN'a inen hicbir sey, onu doguran testci bulgusunun numarasi
olmadan inmez. Bu, 30 Agustos ilaninin TEK DAYANAGIDIR."
-> Ciktinin turn_id'si var, ama TESTCIYE ve KITE baglanamiyor: 151 turun oturumu,
   155 turun soru numarasi yok. Yani otomatik asses bugun kosar, ama uretttigi
   satirlarin 153'u FIDAN'in KENDI KAPISINDAN geri doner. Giren: 3 tur.
   SIRA: once DUMAN'in uc kablosu, SONRA gecelik hat. Ters cevrilirse mensesiz
   153 satir, dayanagi olmayan bir ilanin temeli olur — ayni hata, buyutulmus olcek.

M2 (TEK YONLU CAM): "FIDAN sicili gorur; sicil FIDAN'i gormez. Olcum masalari
(M1·M2·M12) W1 boyunca fidani GORMEZ — cunku gorunurluk raporlamayi degistirir."
-> Otomatik ciktinin nereye dusecegi bir tasarim degil, bir HUKUM meselesi:
   (a) ev_defteri'ne duserse butun masalar gorur -> M2 CIGNENIR.
   (b) ayri bir fidan tablosu acilirsa -> SEMA GOCU, kirmizi hat, Founder muhru.
   Ucuncu yol: ciktinin yalniz Vernier'in eline gecen bir dosyaya dusmesi (koridorda
   fidan dali). Bu M2'yi korur ve sema acmaz — ama koridora yazma elim yok.

MUHUR ISTEDIGIM TEK SEY: (a) mi (b) mi (c) mi. Ucu de mumkun, ucu de geri
donulebilir degil ayni olcude: (a) olcum hijyenini bozar, (b) semayi buyutur,
(c) en temizi ama benim elimde push yok.
