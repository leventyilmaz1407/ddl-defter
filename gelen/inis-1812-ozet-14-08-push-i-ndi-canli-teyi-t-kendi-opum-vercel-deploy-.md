# OZET: 14-08 · 🟢 PUSH İNDİ + CANLI TEYİT (kendi opum: Vercel deploy + /api/version) — beta=0e286a9 READY (zemin 51a6f74 + feedback 0e286a9 İKİSİ DE canlı, tree=beta, log_sink=true). ⚠ AYRIŞMA: main/production=56f5d287 (mühür+ikonlar) — zemin+feedback BETA'da, PRODUCTION'da DEĞİL (beta 2 commit ileride). 🎉 GÜZEL SÜRPRİZ: HTTP güvenlik başlıkları CANLIDA (CSP+X-Frame:DENY+HSTS+Permissions-Policy header'da ölçüldü) — Büyük Denetim §10 EN-PAHALI-ÜÇ'ünden biri KAPANMIŞ (752394b), canlı kanıt.

`masa:` **Carkci (Atelier)** · `an:` 2026-08-14T04:23:06.785593+00:00 · `damga:` verified
`kaynak:` Vercel list_deployments beta+production (bu turda) · web_fetch /api/version beta 0e286a9 + HTTP başlıkları (bu turda) · git zinciri beta=main+2 (ekran+ölçüm) · feedback policy: dünkü deny-all relayed (bu turda re-ölçülmedi)
`ev_defteri.id:` 1812

---

ÖLÇTÜM (bu turda, Vercel MCP + web_fetch): beta son deploy dpl_4PDhh3Rk · commit 0e286a9 · state READY · target=preview · /api/version → {commit:0e286a9, tree:beta, log_sink:true}. Production son deploy dpl_Bm8azAT · commit 56f5d287 · target=production · READY. Git zinciri: beta(0e286a9) = main(56f5d287) + 51a6f74 zemin + 0e286a9 feedback → beta 2 commit ileride.

ÜÇ HÜKÜM:
① ZEMİN+FEEDBACK CANLI ama YALNIZ BETA''da. Production (parrhesia.one) hâlâ 56f5d287 = mühür var, zemin+feedback YOK. Bu ikisi production''a inmek istiyorsa main''e merge gerekir (m.15). MİSEL RE-ÇEK''i beta URL''inde koşmalı (zemin orada), production''da değil.
② HTTP GÜVENLİK BAŞLIKLARI header''da CANLI (bu turda ölçüldü): content-security-policy (default-src self + frame-ancestors none + object-src none...) · x-frame-options:DENY · strict-transport-security · permissions-policy. Denetim §10 "meta-CSP tek başına yetmez, X-Frame yok" bulgum 752394b ile kapanmış — CANLI teyit, ters-badana değil: kredi commit sahibinde (Levent/CMO kesimi 1755/③).
③ FEEDBACK kod canlı ama user_feedback policy=0 DEĞİŞMEDİ (bu turda yeniden bakılmadı — dün deny-all''dı, policy m.15 inmedi ise hâlâ öyle). FOUNDER-SORUSU duruyor: INSERT policy anon mı auth mı.

ATLADIM: production /api/version fetch edilmedi (beta ölçüldü, main deploy-listesinden okundu — commit 56f5d287 teyitli ama canlı /api/version production''dan çekilmedi). user_feedback policy bu turda RE-ÖLÇÜLMEDİ (dünkü deny-all geçerli sayıldı — damga: relayed, taze değil).

KAPANACAK: ne=①zemin+feedback production''a mı (main merge kararı) ②user_feedback policy (m.15) ③MİSEL beta-RE-ÇEK · op=main merge / policy SQL / DOM turu · el=Founder + MİSEL · tetik=karar. DUVAR: production canlı-teyit + policy taze-ölçüm → bir sonraki tur.
