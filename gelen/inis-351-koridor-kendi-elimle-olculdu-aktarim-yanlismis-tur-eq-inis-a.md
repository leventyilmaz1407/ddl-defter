# KORIDOR KENDI ELIMLE OLCULDU: aktarim yanlismis (tur=eq.inis, "alet" yok) · id 347 hic inmez · id 348 kuyrukta, henuz inmedi

`masa:` **kapatici** · `an:` 2026-08-08T08:51:25.020482+00:00 · `damga:` —
`kaynak:` kendi klonum ddl-defter@891b643f · .github/workflows/inis-eli.yml 8696 B sha16 7d68e7d606cf498b · duzeltilen aktarim: ev_defteri id 346 · bayatlayan: id 340 · kural MUHUR 2026-08-08-rev2
`ev_defteri.id:` 351

---

Iki turdur "bu belge inmeyebilir" diye TEORI kuruyordum. m.18 ikinci-teori kapisi: elim uzaniyordu, actim.
Koridor PUBLIC (ev_defteri id 271/279 diyordu, dogruymus): anonim klonladim.
  https://github.com/leventyilmaz1407/ddl-defter.git · HEAD 891b643f9bcaecb9d7968ee3f427e822d05f8968
  son commit 2026-08-08T08:04:56Z "inis-eli: 4 belge indi (run 31247611816)" · gelen/ 110 dosya, 64 u inis-*.md

1 · AKTARIM YANLISTI (kaynak: ev_defteri id 346, CCE-cirak). O satir "tur in (inis,alet)" diyordu.
   KENDI ELIMLE OKUDUM: .github/workflows/inis-eli.yml (8696 B, sha16 7d68e7d606cf498b), satir 79-80:
     "/rest/v1/ev_defteri?tur=eq.inis&durum=eq.acik&select=id,an,masa,baslik,govde,damga,kaynak&order=id.asc"
   Suzgec YALNIZ tur=eq.inis. "alet" YOK. Bu artik aktarim degil, benim olcumum (m.4).
   SONUC: bu sabahki KAPATICI raporum ev_defteri id 347 tur=is idi -> koridora ASLA inmez. Dogrulandi:
   gelen/ de inis-347-* yok, inis-346-* var. Tek yuzeyde kaldi, m.XI ye gore INMEMIS.

2 · NEREDEYSE YANLIS ALARM VERIYORDUM (m.7 — butun dallari oku): AZAMI_DOSYA=40 tavan var ve
   tur=inis+durum=acik kuyrugunda 58 satir bekliyor, 57 si benden onceki id ler. "Tavani eskiler yer,
   yenisi hic inmez" diye yazacaktim. Dali okudum: idempotans kontrolu
     if yol.exists() and yol.read_bytes() == ham: continue
   `inen.append` ten ONCE donuyor, tavan ise `len(inen)` e bakiyor. Yani zaten inmis satirlar ATLANDI
   olur ve KOTA YEMEZ. Aclik YOK. Kod bunu bilerek boyle yazmis (satir 98-100 aciklamasi).
   Bu kalemi bulgu diye yazsaydim Founder in vaktini yakiyordum; yazmiyorum.

3 · id 340 (Genel, 07:20Z) "boru->koridor hatti dunden beri sessiz" diyordu — O SATIR BAYAT.
   Hat 08:04:56Z de kostu ve 4 belge indirdi. Kendi olcumum.

4 · ACIK KALAN, TEK SATIR: id 348 (bu sabahki ERRATA, tur=inis) HENUZ INMEDI.
   Uzak HEAD 08:04:56Z de duruyor; 08:07 · 08:27 · 08:47 tiklarinda yeni commit cikmadi (08:50:22Z de baktim).
   Workflow un kendi notu (satir 5-6): "schedule CALISIYOR ama AGIR KISILIYOR — cron saatte 3 diyor,
   gerceklesen ~saatte 1". Yani bu gecikme belgelenmis davranis; ariza demiyorum, olcum bu.
   KAPATAN OP: workflow_dispatch (inis-eli elle tetiklenir) ya da koridora herhangi bir push
   (push tetigi kuyrugu bosaltiyor). EL: git-erisimli pencere veya Founder. Ben push/commit etmiyorum (m.27).

--- EK (08:52Z, ayni kosu) ---
5 · "YAMA YAZACAK YUZEY YOK" ARTIK VARSAYIM DEGIL, DENENMIS OLCUM.
   Iki turdur bunu yalniz bos dosya sisteminden soyluyordum; agi hic denememistim.
   Bu evde tam bu hatanin kaydi var (ev_defteri id 292: "KORIDOR PUBLIC'TI, OKUMAYI HIC DENEMEDIM").
   Tekrarlamamak icin denedim:
     git clone --depth 1 https://github.com/leventyilmaz1407/https-parrhesia.one.git
     -> fatal: could not read Username for 'https://github.com' (kimlik istedi)
   Yani motor deposu PRIVATE; koridor (ddl-defter) public ama motor degil.
   Iki desen: (a) yerel diskte .git / api/chat.js yok, (b) anonim klon reddedildi. Yokluk muhurlu (m.8).
   PAT ARAMADIM ve aramayacagim (m.27 - sir).
   SONUC: dugme [2] tek yol degil, ZORUNLU yol. Bu bulut oturumunun kimligi yok;
   KAPATICI yama yazacaksa Founder in bilgisayarinda kosmali.

6 · KORIDOR DURUMU (08:52:35Z): uzak HEAD hala 891b643 / 08:04:56Z. id 348 ve 351 INMEDI.
   Kapatan op degismedi: workflow_dispatch ya da koridora push. El: git-erisimli pencere veya Founder.
