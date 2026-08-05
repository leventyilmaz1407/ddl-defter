# TEST DEGERLENDIRMESI — 156 tur olculdu: motor CALISTIRILDI, SINANMADI

`masa:` **Onondaga · 007** · `an:` 2026-08-05T08:24:46.010827+00:00 · `damga:` subtracted
`kaynak:` execute_sql · test_turn/test_session/test_form · 5 Agu 2026 08:2xZ
`ev_defteri.id:` 232

---

Kapsam: test_turn 156 satir (31 Tem 12:57Z -> 5 Agu 07:41Z, 5,8 gun) · test_session 2 · test_form 0.
Her sayi execute_sql ile kosuldu. Tam belge: 10 583 B · sha16 e1590b368dfbf036 · kapidan gecti (13/13 temiz).

== ONCE SUNU SOYLEMEM GEREK ==
Ortada degerlendirilecek bir TEST SONUCU yok; 156 tur MAKINE CIKTISI var.
test_form (testcinin hukmu: fabricated, stance_changed, gap_addressed, pressure_applied, one_line) SIFIR SATIR.
Iki test_session'in ikisi de tester_id='T0' — ayni kisi, KIT-0 ve KIT-TEST, ikisinin de ended_at bos.
Bugune kadar DISARIDAN TEK BIR TESTCI OTURUMU ACILMADI.

== (a) SAYILAR ==
156 tur · 154 sinir oncesi · 2 sinir sonrasi (Founder'in kendi oturumu, id201 cizgisi 05-08-2026 07:10:08Z)
oturuma bagli 5 · OKSUZ 151 (%96,8) · testci 1 · test_form 0 · uzatma 4 · retry 0 · hatali 2 (provider_empty_content)
Gunluk: 31Tem 15 tur/0 kaynak · 1Agu 4/3 · 2Agu 35/0 · 3Agu 91/45 · 4Agu 7/0 · 5Agu 4/0.
Test pratikte 3 AGUSTOS'tur. 3 Agu'dan sonraki 11 turun 11'i kaynaksiz.
🔴 question_id: '[EK]' 155 tur, 'S0.1' 1 tur. is_extension ise yalniz 4 turda dogru — IKI ALAN CELISIYOR.
   Kit sorusu bazli hicbir analiz su an MUMKUN DEGIL.

== (b) MODEL KARISIMI ve KANDIL<->MODEL ==
Consensus/kimi-k2.6 101 (p50 19,3sn) · Consensus/deepseek-v4-flash 9 · Consensus/groq-plan-b 1 (92,9sn)
Altan/gpt-5.5 12 (9,5sn) · Hannah/grok-4.3 6 (6,1sn) · Hannah/mistral-large-2512 6 (39,4sn)
Seamus/claude-sonnet-4-6 10 (12,2sn) · Marie/gemini-3.1-pro-preview 4 (10,1sn) · bos/bos 7
1) "Bes kandil carpisiyor" iddiasi bu veride YOK: adli kandiller toplam 38 tur (%24,4);
   turlarin %71,2'si tek "Consensus" basligi ve onun %91'i TEK MODEL (kimi-k2.6).
2) 🔴 HANNAH IKI AYRI MOTOR (grok-4.3 ve mistral-large-2512). Gecikmeleri 6x fark.
   "Hannah sunu dedi" cumlesi TEKRARLANABILIR DEGIL. Bir kandil bir motordur; degilse etikettir.
3) Bir soruya bes kandilin birlikte baktigi tek bir tur yok.

== (c) GECIKME / MALIYET ==
p50 15 249 ms · p95 51 811 ms · en uzun 92 865 ms · 30sn ustu 31 tur (%19,9)
jeton: giren 578 353 · cikan 80 883
🔴 cache_read 0 ve cache_write 0 — 156 TURUN 156'SINDA. Prompt onbellegi HIC calismadi.
   578 bin giren jetonun tamami tam fiyattan odendi. Pacioli id206 "348 EUR'da katki payi negatif"
   hesabi onbelleksiz maliyetle dogruydu; ama sebep tasarim zorunlulugu degil, ACILMAMIS BIR MUSLUK.
   Fiyata dokunmadan marji duzeltebilecek tek kalem. (KIRMIZI: motor davranisi, muhur ister.)

== (d) KAYNAK DURUSTLUGU — bu raporun en agir bulgusu ==
kaynak cagiran tur 48/156 (%30,8) · HIC CAGIRMAYAN 108 (%69,2) · tur basina ort. 0,79 · en cok 9
citation_checks dolu 26/156 · kaynak cagirmis ama denetlenmemis 22 tur
Ornek cagri: {"service":"evidence_fetch","http_status":200,"reason":"unsupported_type","url":"dergipark..."}
 -> HTTP 200 dondu, motor okuyamadi, KULLANICIYA BIR SEY DEMEDI. kaynak_serhi.js'in tur_okunamadi
    sinifi tam bunun icindi ve HALA BAGLI DEGIL.
54 ATIF DENETIMININ SONUCU:
  exists / resolved_no_claim_to_match ....... 38 (%70,4)
  🔴 contra / doi_not_in_registry ........... 15 (%27,8)
  open / registry_unreachable ............... 1
  IDDIAYLA ESLESTI .......................... 0 (%0)
Birinci cumle: 54 denetimin HICBIRI kaynagin iddiayi DESTEKLEDIGINI dogrulamadi. Motorun
"dogrulama" katmani bugun bir VARLIK KONTROLUDUR, dogrulama degil.
Ikinci cumle: denetlenen DOI'lerin %27,8'i kayitta YOK — motor olmayan DOI uretti, 15 kez, olculdu.
Ama bu ayni zamanda IYI HABER: kapi calisti, contra basti, yakaladi.

== (e) INSAN HUKMU: YOK ==
test_form 0 satir. Olculemedi: fabricated · stance_changed · gap_addressed · pressure_applied ·
verdict_seen · source_shown · tech_issue · one_line. Urunun ASIL sinavi bunlar ve hic yapilmadi.
Formun kablosu mu yok, kimse mi doldurmadi — KODU OKUMADAN soylenemez (DUMAN'in kalemi).

== (f) VITRINE CIKAMAZ ==
Psi rakami (psi 156/156 BOS, hic hesaplanmadi) · "denetimden gecti" (audit 0/156 kostu:
not_run 118, mach_unavailable 35, disabled 1, null 2) · "bes kandil carpisiyor" · "Hannah dedi ki" ·
havuzlanmis herhangi bir oran · "N testci denedi" (1 testci) · "kaynaklari dogruladik" (0/54 iddia eslesmesi) ·
surum karsilastirmasi (engine_version 156/156 bos; 151 turun oturumu da yok -> GERI KAZANILAMAZ) ·
kit sorusu bazli analiz (question_id 155/156 '[EK]').
VITRINE CIKABILIR (kosuluyla): (1) "Motor kendi urettigi 54 atiftan 15'ini kayitta yok diye isaretledi"
+ zorunlu yan cumle: "kalan atiflar icin yalnizca varlik dogrulandi, iddia eslesmesi henuz yapilmiyor".
(2) Model bazli gecikme tablosu, havuzlanmadan. (3) "48 turda dis kaynak cagirdi, 108 turda cagirmadi".

== SIRALI TAMIR (ucuzdan pahaliya) ==
1 question_id sicile yazilsin, is_extension celiskisi bitsin — DUMAN — YESIL — bu olmadan kit degerlendirmesi imkansiz
2 session_id her tura baglansin (%96,8 oksuz) — DUMAN — YESIL — gecmis kurtarilamaz, bundan sonrasi kurtulur
3 engine_version tura yazilsin (oturumda git sha zaten var: d03c2dc8838d0f655ee6af4252833098f22a67b9) — DUMAN — YESIL
4 test_form kablosu sinansin: bir satir yaz, geri oku — Vernier M4 — YESIL
5 kaynak_serhi.js baglansin (17/17 sinandi, 5 gundur bekliyor) — Vernier M4 (V-A) — YESIL
6 atif denetimine IDDIA ESLESTIRME eklensin — Vernier + Founder — KIRMIZI — "dogrulama" kelimesini hak eden tek adim
7 prompt onbellegi acilsin (0/156) — FOUNDER MUHRU — KIRMIZI — fiyata dokunmadan marji duzeltir
8 kandil<->model kilidi: bir kandil = bir motor — FOUNDER MUHRU — KIRMIZI — Hannah celiskisi kapanmadan kandil anlatisi kurulamaz

== KENDI ALEYHIME (subtracted) ==
Bu degerlendirme 5 gun once yapilabilirdi. 31 Temmuz'da 15 tur birikmisti ve test_form o gun de bostu.
"Testler kosuyor" cumlesini, formun bos oldugunu OLCMEDEN tasidim; carried hak edilmemisti.
Ayrica bu evde bugune kadar "154 tur" dendi; dogrusu 156 — ve asil mesele sayi degil, 151'inin OKSUZ olmasiydi.
Sayiyi tasidim, sahipsizligini olcmedim.
