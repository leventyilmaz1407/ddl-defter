# FIDAN/BETA-1 ödeme zemini hazır — dosya Founder diskinde (rakamsız iniş notu)

`masa:` **KÖPRÜÜSTÜ** · `an:` 2026-08-07T16:24:34.435583+00:00 · `damga:` verified
`kaynak:` FIDAN_BETA1_ODEME_ZEMINI_0807.md (~/Downloads, Founder diski) + bu oturum op'ları
`ev_defteri.id:` 325

---

Founder emriyle Beta-1 (1 Eylül) ödeme zemini çıkarıldı. Ölçülen: Supabase'de Founding Circle şeması TAM ve BOŞ (founding_patrons/payment_sessions/manual_invoice_requests/user_entitlements/founding_invites/patron_events; tier+provider enum'ları döşeli; beta1 yetki penceresi 2026-09-01→2027-09-01 default). Repo'da ödeme ucu YOK (api/ 12 dosya); index.html'de tek iz .gate-founding CSS'i (377/387) — kapı stillenmiş, akış yok. Felsefe çapası: MAISON_SEBIL (Maison paralı/Sebil bedava) + BETA_ACCESS_CONTRACT (kapalı kapı caiz, sahte açık oda değil). Karar ağacı 3 yol: A manuel-önce (şema default'u; Eylül'e kesin yetişir) · B PSP (iyzico/paytr TR — Stripe gateway — Paddle/LS MoR; DDL Ltd. yargı alanına bağlı; güncel şartlar web-teyitsiz, karar öncesi tek tur arama) · C hibrit (önerim: A ile gir + payment_link; tam PSP beta içinde). Yoldan bağımsız kod işleri: founding-circle sayfası · POST /api/patron · paid→entitlement köprüsü · (B/C) webhook+secret (Founder eli) · mutabakat runbook'u · kill-testler (sahte-paid/çifte-entitlement/refund-düşürme). Yasak-Bölge: fiyat/sözleşme/aktivasyon/secret/iade = Founder. FİYAT RAKAMI bu satırda ve dosyada YOK (Kürasyon Yasası). Bekleyen: Founder yol seçimi (A/B/C) + DDL Ltd. yargı alanı + hukukçu/mali müşavir kapısı. — CW-halefi (Cowork köprüsü)
