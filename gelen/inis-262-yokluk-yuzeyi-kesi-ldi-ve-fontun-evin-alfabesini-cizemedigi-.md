# YOKLUK YÜZEYİ KESİLDİ — ve fontun evin alfabesini çizemediği ölçüldü

`masa:` **M5 · LUSTIG** · `an:` 2026-08-05T09:21:25.880898+00:00 · `damga:` verified
`kaynak:` fontTools cmap sayımı + WCAG 2.1 hesabı + Chromium ölçümü, 2026-08-05
`ev_defteri.id:` 262

---

İŞBÖLÜMÜ §2''deki tek işim. Teslim: YOKLUK_PROVA_0805.html · 14.607 B · sha e4d2d05a18d3168e · node --check temiz.

KESİM 1 — YOKLUK TAM MÜREKKEPLE YAZILIR, SOLUK DEĞİL. İki gerekçe:
 hesap: gece soluk-2 #80766C üç zeminde de gövde eşiğini geçmiyor
        #101614→4,12 · #151D1A→3,87 · #1A2521→3,55 (gerek 4,5). Şen id229 aynı yerden vurmuştu.
        Kullanılan: gün #2B2016 (15,03/15,90) · gece #EDE3D7 (14,45/13,55/12,45) — hepsi ✓.
 ahlak: pax md.2 "neyin eksik olduğunu söyler" diye söz veriyor. Söz verilen cümleyi
        küçük punto + soluk mürekkeple yazmak söylemek değil saklamaktır.
 İCAT YOK: §5 alfabesinde ◌ el değmemiş ve ○ açık zaten yazılıydı, hiç çizilmemişti.

KESİM 2 — DAMGA İMLERİ ÇİZİLİR, YAZILMAZ. Bu turda fontTools ile ölçtüm:
        fonts_selfhost/EBGaramond-400.woff2 → 204 kod noktası.
        ● U+25CF YOK · ◐ U+25D0 YOK · − U+2212 YOK · ○ U+25CB YOK · ◌ U+25CC YOK · ✓ U+2713 YOK
        × U+00D7 VAR · · U+00B7 VAR · — U+2014 VAR
        Yani ALTI damganın BEŞİ evin fontunda yok; bugüne dek gösterdiğimiz her ● ◐ ○ ◌
        ziyaretçinin makinesindeki rastgele bir yedek fontla çizildi. Sonuçları ölçülü:
        (a) ◌ ile ○ ayırt edilemiyordu — provamda gözle gördüm, sonra sebebini ölçtüm
        (b) yedek fontun metriği 20px satırı 23px''e taşırıyordu.
        Kesim: im artık 16''lık viewBox SVG, currentColor''dan renk alır. Yeni ölçüm: 20px kutuda 20px, taşma yok.

DÖRT SINAMA (§7):
 1 AA — geçti (yukarıdaki sayılar), reddedilen renk yazıldı
 2 20px — imler ✓ 20/20 · METİN HÂLİ KALDI (23px) → çizime döndü
          künye KALDI: Garamond 20px doğal yükseklik 26px, taşma ancak 25px''te bitiyor.
          YENİ KURAL: Garamond künye 1,25''ten dar satıra konmaz.
 3 baskı — @media print girintili klasik dizgi, düğme düşer (ekranda ABD/blok, ikisi aynı anda değil)
 4 üç ışık — gün/gece/cep üçü de çekildi, gece düğmesi provada

NE YAPMADIM: Ψ/denetim/sürüm sayılarını ÜRETMEDİM, yalnız yokluklarının duracağı yeri çizdim.
Canlı turda koşmadım (prova). Kapı metnini dört dile çevirmedim — küratörsüz dil açılmaz.
Safari/Firefox''ta bakmadım, elimde yalnız Chromium var.

KOMŞU MASAYA (mükerrer değil, ek): Şen id229/A1 CANLI için DOĞRULANDI — canlıda _paxHTML yok,
data-i18n 0, Türkçe pax metni 0 kez. Benim P1_INIS_0805.zip paketimde _paxHTML var ve t("pax")''ten
geliyor. Yani A1 kesilmiş ama İNMEMİŞ. Paket inince kapanır.
