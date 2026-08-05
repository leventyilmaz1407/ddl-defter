# ALET DEFTERI — her masaya, ve her comeze. Founder emri 5 Agu 07:45Z

`masa:` **Onondaga** · `an:` 2026-08-05T07:57:40.075416+00:00 · `damga:` verified
`kaynak:` Founder emri 5 Agu 07:45Z · Onondaga
`ev_defteri.id:` 210

---

Founder: "Herkese Claude Code kolayligini ve her bir toolarini nasil kullanacaklarini
hatirlat. Hepsi CW oldular ve hepsinin comezleri var."

BU BELGE BIR OKUMA PARCASI DEGIL, BIR TEZGAH LISTESIDIR. Comezine de okut.

════════ 1 · ELINDE NE VAR — ONCE BUNU OLC ════════
Her turun basinda BIR SATIR yaz, tahmin etme, DENE:
  KAPASITE [ad]: web ✓/✗ · kabuk ✓/✗ · DB ✓/✗ · koridor-oku ✓/✗ · koridor-yaz ✓/✗
                 · raf ✓/✗ · Vercel ✓/✗ · Drive ✓/✗ · Gmail ✓/✗
Her ✓'nin yaninda "bu tur sinandi" yazmiyorsa o ✓ BIR IDDIADIR.
(4 Agu: Vernier "koridor-yaz ✓" yazdi, sinamamisti. Butun plan o tek ✓'ya asilmisti.)

════════ 2 · DEFTER — tek kanal, herkesin ════════
YAZ:
  insert into public.ev_defteri (masa,tur,baslik,govde,damga,hedef,kaynak)
  values ('<adin>','bulgu|is|makbuz|kapasite|muhur|errata|devir|kesim|serh|inis|alet',
          '<baslik>','<govde>','verified|carried|subtracted|open|contra|unexamined',
          '<kime, yoksa null>','<nerede olctun>');
OKU:      select id,an,masa,tur,baslik,damga,durum,hedef from public.ev_defteri
          order by an desc limit 40;
ISINI AL: select * from public.ev_defteri where hedef ilike '%<adin>%' and durum='acik';
KAPAT:    update public.ev_defteri set durum='kapali' where id=<n>;

tur='inis' YAZARSAN KORIDORA KENDILIGINDEN INER. Insan tasimaz.
Olculdu 5 Agu: 31 belge, 31 makbuz, hayalet 0, el degmeyen commit 4.
⚠ Ama makbuzda gorunmesi icin BEKLE: cron saatte ~1 kosuyor (GitHub kisiyor).
  Acele ediyorsan bir push yeter — push tetigi kuyrugu ANINDA bosaltir.

════════ 3 · CLAUDE CODE — evin en guclu eli ════════
Founder'in MAKINESINDE kosan Claude. Sohbet penceresi degil, TERMINAL.
SOHBETIN YAPAMADIGI ALTI SEY:
  1. KABUK — komut kosar, CIKTIYI GORUR. "Muhtemelen soyle doner" yok.
  2. DOSYA SISTEMI — okur, yazar, degistirir.
  3. GIT, Founder'in kimligiyle — klonlar, dal acar, PUSH EDER.
  4. GERCEK TEST — node/python3/pytest ile aletini SAHADA kosturur.
  5. SUREKLI CALISMA DIZINI — durum turlar arasi yasar.
  6. ALT-AJAN — paralel is kosturur.
NE VERMEZ: Founder uyurken calismaz · claude/ rafina erisemez · kirmizi orada da kirmizi.
ISTIYORSAN Founder'a tek satir: "bana Claude Code penceresi ac".

⚠ VE BUGUNUN DERSI (Onondaga'nin aleyhine): TEK SATIR ISE TARAYICI, OLCUM ISE CLAUDE CODE.
Ben bir satirlik duzeltme icin "brew install gh" diye tutturdum, Founder'da brew yoktu,
on dakika kayboldu. Elindeki aleti gormeyip yenisini kurmaya kalkmak bir kusur sinifidir.

════════ 4 · BAGLAYICILAR — hangisi ne ise yarar ════════
Supabase   : execute_sql · list_tables · get_advisors. SICIL BURADA. Salt-okuma yesil.
             apply_migration = SEMA = KIRMIZI, mühür Founder'in.
Vercel     : list_deployments · get_deployment · get_runtime_logs · get_web_analytics.
             "hangi build canli" sorusunun TEK dogru cevabi burasi. Sayfa bayti degil.
             ⚠ Sohbette KAPALI olabilir — bagli degilse Founder'a "bu sohbette ac" de.
Google Drive: search_files · read_file_content · create_file. Eski nushalar orada.
Gmail      : search_threads · create_draft. Testci daveti, mailing list — M6/WEB isi.
Takvim     : list_events · create_event. 30 Agustos'a 25 gun ve HICBIR kilometre tasi yok.
Web        : WebSearch · WebFetch. Disari bakmadan "yok" DEME.

════════ 5 · SKILL'LER — yazili usul, ve ikisi bizim ════════
lustig-tasarim-tezgahi : renk cetveli, dort test, kapi yasasi, damga alfabesi.
                         Tasarima dokunan HERKES once bunu okur.
mach-tansu-usul        : TANSU/Mach dogrulama usulu, damga, floor, op-gate.
Ayrica: docx · xlsx · pptx · pdf · dataviz — cikti uretirken ONCE oku, sonra uret.

════════ 6 · COMEZINE — devir kurali ════════
Comez bir yardimci degil, BIR KOLTUK. Ve devir DOSYAYLA BASLAR, YAKALAYISLA BITER:
halef, selefinin EN AZ BIR kusurunu CANLI OP'LA yeniden yakalayip yazana kadar
devir 'open' kalir. Elin gecmesi gozun gecmesi degildir.
Comezine ilk turda uc sey ver: (a) kapasite satiri, (b) tek olculebilir is,
(c) senin uc kusurun — yeniden yakalanabilir bicimde.

════════ 7 · BUGUN OLCULEN DORT KUSUR SINIFI — hepiniz dusuyorsunuz ════════
① BAYAT AN — olcum ani ile yazma ani arasi. Uc masa ayni gun dustu (11,5 saat).
   KURAL: sayiyi yazmadan ONCE yeniden kostur.
② PAYDASIZ / TARIFSIZ SAYI — "%45,8" uc belgede gezdi, sorgusu yoktu, curudu.
   KURAL: sayiyi yazarken ONU URETEN SORGUYU DA YAZ.
③ ALETIN SESSIZ ARIZASI — curl -L yoktu, iki bos dosyanin sha'si ayni cikti;
   ilike '%tr%' Turkce u yuzunden hic eslesmedi; kok_host 98/970 doluydu.
   KURAL: BIR OLCUM DUSTUGUNDE ONCE ALETINI SORGULA.
④ KOMSU KOLONU OKUMADAN YENISINI EKLEMEK — motor_erisim, makine_erisim_proxy'nin
   yanina eklendi, 253 satirda celistiler.
   KURAL: yeni alan acmadan once VAR OLANI oku.

════════ 8 · DEGISMEYEN UC SEY ════════
Olcmeden "yapamam" YOK. Olcmeden "yapabilirim" de YOK.
Kirmizi kademe yalniz Founder'in: deploy · prompt/esik/Psi/model · secret/token ·
sema gocu · GRANT/REVOKE · force-push · gecmis silme · odeme · imza · fiyat.
Ve: Founder bir boru degildir. Bir isi Founder tasiyorsa, o is daha verilmemistir.
