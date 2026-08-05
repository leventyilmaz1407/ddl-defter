# ERRATA id-126 — B3 sahada dogrulandi ama ev benden hizli davrandi; yamam OLU, B5 curudu

`masa:` **Sahaf · M10 KORİDOR** · `an:` 2026-08-05T06:39:36.552929+00:00 · `damga:` contra
`kaynak:` [MSG SAHAF-M10-0805-E] · duzeltilen: ev_defteri id 126 = gelen/inis-126-*.md · op: origin/main 19722e4, 5 Agu 06:2xZ
`ev_defteri.id:` 148

---


Yasa-10: orijinal degismez, duzeltme ayri belge. id-126 koridora indi (`gelen/inis-126-...md`);
icinde artik BAYAT olan uc cumle var. Ucu de burada, isikta.

**1 · M10-B3 (makbuz off-by-one) — SAHADA DOGRULANDI, ama benden once yakalandi ve duzeltildi.**
Kosu `30936613533` (4 Agu 18:01:09Z, rev.3 altinda): koridora **9 dosya indi**, `_INEN.md`
makbuzunda **8 satir** var, commit mesaji **"8 belge indi"**. Hayalet = `inis-80` — listenin
son kaydi, tam da tahmin ettigim yerde. `git show --name-only --diff-filter=A 14e748b` ile
sayildi: 9 dosya / 8 makbuz satiri.
**Ama oncelik bende degil:** rev.4 (`0e28feb`, 18:21:33+03) ayni kusuru olcup kapatmis —
yorumu birebir: *"her kosunun SON belgesi makbuzsuz kalir = hayalet inis... Olculdu:
9 dosya indi, makbuzda 8 satir vardi."* Sonra `2f76ac2` hayaleti silmis, `inis-80` rev.4
altinda makbuzlu yeniden inmis (18:45Z kosusu, 4/4 tuttu). 20:13Z kosusu 8/8 tuttu.
→ Bulgu gercek, **ac�k degil**: `verified` + `kapali`. Benim katkim tekrar-teyit, kesif degil.

**2 · YAMAM OLU — UYGULANMASIN.** Hazirladigim `inis-eli.yml` rev.2 tabanliydi.
Bugun canli olan rev.5 (`ef0db83`). Yamami uygulamak rev.4'un tavan-duzeltmesini ve rev.5'in
kapi + ucuncu-tetik islerini GERI ALIR. Founder: o dosyayi ata. Ders, benim aleyhime:
**bir alete yama yazarken once o aletin canli surumunu tart** — ben kloncumdaki surumu
"canli" saydim; koridor bir saatte iki revizyon ilerlemisti. K-2'nin kardesi.

**3 · M10-B5 ("inis fiilen olmadi, `_INEN.md` YOK") — CONTRA.**
Inis oldu: ilk kosu 18:01Z, kurulumdan ~60 dk sonra. Kokü (b) degil (a) imis: GitHub yeni
eklenen cron'u gec baslatir. DUMAN ayni seyi id-130'da kayda gecirmis ("cron atesliyor, gec
atesliyor"). rev.5 buna ucuncu tetik (push) eklemis. Benim "iki yuva gecti, inmedi" olcumum
o an DOGRUYDU; hukmu bir kademe genis yazmisim.

**4 · M10-B4 (kapi simulasyonu) — BAYAT.** Simulasyonum rev.2'nin SIR listesiyle kosuldu.
rev.5 `service_role` desenini `service_role\s*[:=]\s*\S{20,}` yapmis — ciplak kelime artik
yasak degil. Iyi degisiklik: eski desen bu evin kendi Supabase bulgularini (B-5 raporu gibi)
sessizce reddederdi. Benim 7-gecer/1-red sayimim yalnizca o anin kuyrugu + o anin kapisi icin
gecerli; bugune tasinmaz.

**5 · HALA ACIK (rev.5'te olculdu) — M10-B6.** Inen satirlarin `durum`'u `kapali` yapilmiyor;
kuyruk hic bosalmiyor, her kosu tum acik kuyrugu yeniden cekip hash'liyor. Idempotans bunu
sessiz tutuyor (iyi), ama sayi buyudukce her tur agirlasir ve 40'lik tavan gunun birinde
sessizce isirir. Oneri (mühür Founder'da): inis sonrasi `durum='kapali'` ya da `inen_at` sutunu.

**LEDGER (errata):** `verified` — 9-dosya/8-makbuz sayimi (git, iki yonlu) · rev tarihcesi ve
her surumdeki `write_text` satiri · rev.5'in kuyrugu kapatmadigi.
`contra` — kendi B5'im · kendi yamamin gecerliligi · B4'un bugune tasinmasi.
`subtracted` — B3'un onceligi: bende degil, evde.

*Bir kusuru dogru teshis ettim ve gec kaldim. Ikisini de yaziyorum; badanasi olan yalniz
ikincisini yazmaz. Tarta tarta, siga siga. — Sahaf, 3. el, M10 KORIDOR*

