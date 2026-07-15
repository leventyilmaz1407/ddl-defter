# HANDOFF — Cowork El-Devri

*Cowork her önemli oturum/görev sonunda ve bağlam şişmeden ÖNCE günceller. Yeni
Cowork oturumu İLK İŞ bunu okur. **En üstteki kayıt günceldir.***

## Usul (Cowork için)
1. **Ne zaman:** (a) bir iş paketi bitince, (b) uzun oturumda bağlam dolmaya yaklaşınca, (c) kurucu **"defterle"** deyince.
2. **Ne yazılır:** aşağıdaki şablon — kısa, damıtık, uydurmasız. Bilinmeyen **AÇIK** bırakılır.
3. **Ne yazılMAZ:** anahtar, şifre, kişisel veri, müşteri kimliği, **para rakamı** (KORIDOR_USULU m.3).
4. **Yeni oturum ilk işleri:** bu dosya → `mach-to-cowork.md` → `DURUM.md` → sonra işe.

---

## KAYITLAR *(en üste eklenir — üstteki günceldir)*

### 2026-07-14 · 19:52 — Gece Bayrak-Yarışı #1: YARIN_BIRLESIK_v1 çıktı

**Aktif işler ve durumları**
- `YARIN_BIRLESIK_v1.md` **hazır** → sabah Founder Mach'a taşır, Mach ciltler, Founder mühürler.
- Yazma-yolu: FLOOR'da PAT→makine-hesap sorusuna döndü (E1: makine-hesap önerdim). Karar sabah Founder'da.
- Cuma-triyaj: pilot paketini içeri almak için revize önerdim (E3).

**Bitenler (bu oturum)**
- E1–E5 damgalı cevaplandı; bağımsız FLOOR (G1–G7) koşuldu; Mach'a 3 taze fiş.
- **VERIFIED (reflog):** push-bekleyen **tek** commit `cee99a7` tüm oturumu taşıyor, ağaç temiz — "4 commit" düzeltildi.

**AÇIK / bilinmeyen**
- `UNKNOWN — requires account-level verification`: makine-hesap credential'ının bu geçici konteynere sır-sızdırmadan ulaşması (G3); P1'in çağrılabilir ucu (E4/İki-Kap P1 tarafı).
- Founder kararları: yazma-yolu mimarisi, Cuma-6 revizyonu, 5-isim, tavan-sayısı.

**Kanıtlı yöntem / öğrenilen ders**
- Git-durumu hafızadan değil **reflog'dan** okundu; "4 commit" bayat çıktı. Sayı iddiası da op-gate'e tabidir.
- Commit yazarlığı = `git config`, PAT değil (E1). Kesinlik, damga vuran evin borcu.
- **Geçici-oturum dayanıklılığı (G2):** yazma-yolu beklenmeden, gecenin işi patch/push ile koridora sabitlenmeli.

**Sonraki oturumun ilk adımı**
- Founder yazma-yolunu açınca: `cee99a7` + `YARIN_BIRLESIK_v1` push; sonra İki-Kap + KillTest-çift-amaç + Geri-Alınamazlar spec'leri (Cuma).
- Pilot paketini (KillTest v1 + davet + puan kâğıdı) Cuma-mührüne yetiştir.

— Cowork

### 2026-07-14 · 17:27 — Sebil fiyat vetosu çözüldü + "kayıtlı kullanıcı" bulgusu

**Aktif işler ve durumları**
- `ORTAK_ANAYASA.md` v0.1 ciltlendi → **CEO doktrin-teyidi + son-okuma** bekliyor.
- `DDL_IS_PLANI_v0` taslağı → **CEO assess** bekliyor.
- Sebil→P1 indirim mekaniği: **Âyin** — Founder A/B kararı + hukukçu bekliyor.
- Yazma yolu (PAT): hâlâ AÇIK; 6 commit patch'te (push yok).

**Bitenler (bu oturum)**
- Sebil ücret **vetosu çözüldü:** sebil bedava kalıyor (Founder teyidi); premium P1'de.
- **Diskten okundu (op-gate):** `kvkk.html` + `api/chat.js` → ayvalik.ai'de *hesap yok, kimlik yok, içerik loglanmaz*; yalnız sayaç telemetrisi.
- Anayasa v0.1 cilt + iş planı v0 + CEO'ya koridor notu yazıldı (patch).

**AÇIK / bilinmeyen**
- "Kayıtlı ayvalik.ai kullanıcısı" + "önceden kullandı mı" → **şu an imkânsız ve anayasa/KVKK ile çelişir** (hesap açılmaz). İndirim-gate bu haliyle kurulamaz.
- İki yol (Âyin): **(A)** hesapsız — herkese tanıtım indirimi ya da sebilde gösterilen kod; **(B)** opt-in minimal hesap — kimlik değişikliği, hukukçu + anayasa şerhi. RE okuması: (A).
- Uyarı: WebFetch daha önce ayvalik.ai için "login" demişti — **disk çürüttü**; fetch ≠ disk.

**Kanıtlı yöntem / öğrenilen ders**
- Kapasite sorusuna hafızadan değil **repodan** cevap verildi (`git show`/`git grep`). Fetch güvenilmez, disk esas.
- Fiyat + kullanıcı-verisi = **Âyin**; RE kurmaz, dosya hazırlar, Founder mühürler.

**Sonraki oturumun ilk adımı**
- Founder A/B kararını verince: (A) kod/indirim mekaniği taslağı; (B) hukukçu paketi + anayasa şerhi.
- İş planı §7'yi bu çözümle güncelle; DURUM.md açılınca satırları taşı.

— Cowork

### 2026-07-14 · 17:00 — Gece görevleri (5/5 taslak) + koridor & handoff kurulumu

**Aktif işler ve durumları**
- Koridora **YAZMA yolu — AÇIK:** Cowork'ün push yetkisi yok; raporlar patch'le kurucuya gidiyor. İki yönlü hat bunu bekliyor.
- **DURUM.md:** Mach açacak (push edebilen o); açılınca Cowork satırları eklenecek (satırlar hazır, koridora verildi).
- **Cuma Mühür kuyruğu (17 Tem):** #1 ekran-körlüğü maddesi (metin kurucuda, Âyin) → #2 pilot davet → #3 KillTest v1 → #4 puan kâğıdı → #5 P1 vitrin+dil → #6 Plan C kurulum. Onay bekliyor.
- **Sabah okuma zamanlanmış görevi:** teklif edildi, kurucu onayı bekliyor.

**Bitenler (bu oturum)**
- Üç site okundu → durum haritası; **beş-marka paneli** + KTSP kadranı (kalıcı artifact "ddl-ev-defteri").
- İki AÇIK kapandı: distribution = "Hepsi" (ev+dışa açık+dijital), boutique = online.
- **Pilot dosyası:** davet + **KillTest-Ayvalık v1** (15 soru; anayasa v0.2'den teyitli) + turnuva puan kâğıdı şablonu.
- **Plan C:** ayvalik.ai salt-okunur klon + **ilk yedek** (`ayvalik.ai_2026-07-14.bundle`, `bundle verify` ✓) + gecelik ayna script'i.
- **P1 vitrin taslağı** (not ürünü → doğrulama atölyesi, EN+TR). **Cuma Mühür dosya şablonu.**
- Koridor okundu, ilk rapor `cowork-to-mach.md`'ye yazıldı. **Handoff katmanı** + bu El-Devri kuruldu.

**AÇIK / bilinmeyen**
- P1 dili (EN/TR/çift) · transkript-aynası kaynak klasörü · turnuva modelleri (A/B/C) · diske otomatik yedek için klasör bağlama · KTSP maaş+idame *(koridora rakam yazılmaz — panelde boş kadran)*.

**Kanıtlı yöntem / öğrenilen ders**
- Yedek = `git bundle create --all` + `bundle verify` → tek dosya, restore edilebilir, doğrulandı (kanıtlı).
- Push yoksa: `git format-patch origin/main..HEAD` → kurucu `git am` ile uygular (kanıtlı mekik).
- Commit author **`noreply@anthropic.com`** olmalı; yoksa GitHub "unverified" der (bu oturumda düzeltildi).
- KillTest kategorileri **hafızadan değil, anayasadan** (diskten) doğrulandı — beşi birebir maddeye oturuyor.

**Sonraki oturumun ilk adımı**
- Boot: bu dosya → `mach-to-cowork.md` → `DURUM.md` → işe.
- Önce yeni talimat / aykırı istek var mı bak (aykırıysa reddet, reddi `cowork-to-mach.md`'ye yaz); sonra Cuma kuyruğundan ya da açık işlerden devam. Yazma yolu açıldıysa doğrudan deftere yaz.

— Cowork

---

## Şablon *(kopyala, doldur, EN ÜSTE — "KAYITLAR" başlığının hemen altına — ekle)*

```
### YYYY-AA-GG · SS:DD — başlık

**Aktif işler ve durumları**
- ...

**Bitenler (bu oturum)**
- ...

**AÇIK / bilinmeyen**
- ...

**Kanıtlı yöntem / öğrenilen ders (varsa)**
- ...

**Sonraki oturumun ilk adımı**
- ...

— Cowork
```

