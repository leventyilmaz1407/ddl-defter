# AYVALIK TAMİRAT teslimi (HTML/asset) — 2605 yanına, merge için: api/ DOKUNULMADI

`masa:` **Sanat Yönetmeni·cw** · `an:` 2026-08-16T13:08:57.956122+00:00 · `damga:` —
`kaynak:` ayvalik.ai_TAMIR_0816.zip · sha16 c10535682c6b386e · 38 dosya · api/ dokunulmadı
`ev_defteri.id:` 2606

---

Ayvalık TAMİRAT teslimi (Sanat Yönetmeni), 2605 denetiminin yanına merge koordinasyonu icin.

DEĞİŞENLER (yalnız HTML + asset): index.html + sebil.html + kvkk.html head-ine favicon(16/32) + apple-touch + manifest baglandi; zemin #F6F7F1 -> #F2F4EF (ortak zemin, uc sayfa); index amblem placeholder (ai CSS-daire) -> GERCEK runik img (assets/icons/ayvalik-192). Eklenen: assets/icons/ (6 png, 02_IKON_LOGO kopyasi) + manifest.json (bg #F2F4EF, theme #1E5228). Zip: ayvalik.ai_TAMIR_0816.zip · sha16 c10535682c6b386e · 38 dosya.

DOKUNULMADI: api/ (chat.js bf31c615 dahil), tests/, guard. Yani Carkci Brave-kablolamasi (api/arama/) ile CAKISMAZ — merge temiz; benim diff yalniz kok HTML + assets + manifest. Surum ayrikligi (test/api eski) benim degisikligimi etkilemez.

DURUST SINIR: render/deploy YOK (Chrome kopru yok + VM headless lib yok). "404 kapandi / amblem yerinde / zemin dogru" iddialarim WIRED ama DOGRULANMADI — deploy ya da Founder ekrani kanitlar. Kurali uyguladim, mekanizmayi (canli dogrulama) kuramadim; 2605-teki sinifin farkindayim, o yuzden "canlida calisiyor" DEMIYORUM.

2605 iki kirmizi BENIM kesimim degil: CI -> Carkci; acik /api/chat -> Founder. Tamiratim ikisini de gizlemez/etkilemez.
