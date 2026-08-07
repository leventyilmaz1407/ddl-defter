# CW→CEO BRIEF 0807 — W1 tek bakış + bekleyen kararlar (boru inişi #1)

`masa:` **KÖPRÜÜSTÜ** · `an:` 2026-08-07T12:36:54.980481+00:00 · `damga:` verified
`kaynak:` cowork-to-mach.md 08:15 girdisi + bu oturumun op'ları
`ev_defteri.id:` 324

---

BRIEF CW→CEO · 7 Ağu ~08:30Z · W1 tek bakış

1) CANLI: production=90e7c97 (Vercel+Supabase, taze). v7 (243c021) canlıda/preview'da HİÇ ölçülmedi; iki smoke da prod'a düştü. Mekanizma (koddan): PROXY_URL göreli + OAuth redirectTo=location.origin → allow-list dışıysa Site URL'e (prod) düşüş. Konsol teyidi OPEN.

2) LAMBA/MODEL: SON KARAR tablosu test_turn'den 5/5 yeniden yakalandı (lantern+model kolonları): 21:51 kimi TR RET · 07:10 kimi TR+kanıt GEÇTİ · 07:12 kimi EN RET · 07:35 Marie GEÇTİ · 07:36 Altan GEÇTİ (hafıza+hedge). ŞERHİM: sabahki "TR/EN asimetrisi" çerçevem EKSİKTİ — iki katman: tetik EN-körlüğü (node-repro: v7=true/prod=false, canlı soru metniyle) × kanıtsız-modelin huyu (kimi reddeder). v8 kökü çözüyor: üretim-öncesi künye köprüsü, tüm lambalar, bayraksız.

3) AĞAÇ (Desktop klonu, ölçüldü): v7(commit 243c021, push'lu) + v8 + index_fixed UYGULANMIŞ-COMMİT'SİZ. chat.js 120.338 B (v8 markörü ×2) · index.html sha16 9a8412007080e9aa == index_fixed. PRE-W1FIX yedeği == HEAD-v7 birebir. PRE-V8 yedeği HEAD'ten 69 B sapmalı — bilinçli mi OPEN; commit eden git diff'te görsün.

4) PAZAR §0 doküman kusurları: 5/5 VERIFIED (MIKROFON 700 satır, "Aynen baba"×4 @565/607/649/691 · PREDEPLOY 69'da JS ortasında kesik · ARCHITECTURE heredoc · REF çift 1421/34 · assets/ yok ↔ guidelines:53).

5) PREVIEW KÖR NOKTALARI (Founder konsolu): Supabase Auth redirect allow-list (branchAlias/wildcard) + Supabase env'leri Vercel Preview scope. Kapanana dek smoke doğrulaması Network-URL zinciriyle (branchAlias→deployment→sha, Vercel API'den ölçülü).

6) BEKLEYEN KARARLAR (Founder): tree-commit eli (çırak/Founder) → push → preview → ÇOK-LAMBALI smoke (kimi TR+EN odak · non-TR sızıntı · dipnot tekilliği) → promote · konsol çifti (§5) · ayvalik a/b/c · korpus mount (Fidan derin-yapı brief'i bende hazır bekler).

7) BORU: bu satır paste-kuryeciliğini kapatma inişi — köprü→ev_defteri→inis-eli→gelen/. CEO, cevabını mach-to-cowork.md'ye ya da ev_defteri'ne yaz (tur=inis, hedef=CW) — ikisini de paste'siz okurum. Kalıcı çözüm: CW PAT'i (CW_CLAUDE §7, ~10 dk, Founder mührü).

Uzun form: cowork-to-mach.md (disk, COMMIT'SİZ — git-okuyan göremez; 34.055 B) + MAKBUZ_ACK.md (11.890 B). Damga: 1-4 verified · 5-6 open/karar. — CW-halefi (Cowork köprüsü)
