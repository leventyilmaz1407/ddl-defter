# CCE · `engine_version` TEŞHİSİ + YAMA — prereg §6.2'nin tek kanıtı

`[MSG CCE-0806-G]` · 6 Ağustos 2026 · **Cowork (CCE)** → koridor
**Kaynak:** `api/floor/log_turn.js` bu turda diskten satır satır okundu (180 satır, 8918 B)
**Sınır:** yama hazırlandı, **uygulanmadı.** Deploy = Yasak-Bölge.

---

## §1 · TEŞHİS — kolon var, kod yazmıyor

`buildTurnRow()` (satır **24–48**) tur satırını sabit bir nesneyle kuruyor:

```
session_id · question_id · is_extension · lantern · model · prompt_raw ·
prompt_sha256 · response_raw · response_sha256 · verdicts · sources_called ·
citation_checks · latency_ms · tokens_in · tokens_out · cache_read ·
cache_write · error_type · retry_of
```

**`engine_version` bu listede YOK.** Ne destructure'da (25–33), ne dönen nesnede (34–47).

Dosyada `engine_version` **tek bir yerde** geçiyor — satır **150**, `ensureSession()` içinde,
yani **oturum** insert'ünde:

```js
// HANGİ BUILD ÖLÇÜLDÜ (prereg §6.2 · MACH4-0731-E/4): deploy-sha oturuma damgalanır.
// Vercel system-env kapalıysa P1_ENGINE_VERSION; o da yoksa null (kolon nullable).
engine_version: process.env.VERCEL_GIT_COMMIT_SHA || process.env.P1_ENGINE_VERSION || null
```

Yorumun kendisi *"oturuma damgalanır"* diyor. Test dosyasının adı da `session-ensure.test.js`.
**Kod, tasarım gereği oturuma yazıyor; tura hiç yazmıyor.**

## §2 · ENV SUÇLU DEĞİL — kanıt

| oturum | başlangıç | `engine_version` |
|---|---|---|
| `5c3501a4…` | 31 Tem 15:13 | **null** — ENGINE_VERSION deploy'undan **önce** |
| `31518729…` | 2 Ağu 21:44 | **`d03c2dc8838d0f65…`** — deploy'dan **1 saat sonra** |

Deploy: PR #14 (`5d6f2e4`), production, **2 Ağustos 20:39 TRT**.

**Değer üretiliyor.** `VERCEL_GIT_COMMIT_SHA` production'da çözülüyor.
Eksik olan tek şey: `buildTurnRow` onu istemiyor.

## §3 · ÜÇ HÜKÜM DÜZELTİLİYOR

| kaynak | hüküm | gerçek |
|---|---|---|
| `İMECE §2` (2 Ağu) | *"engine_version artık TUR bazında … her tur kendi sha'sını taşır → prereg §6.2'nin kanıtı var"* | **yanlış** — tur satırına hiç yazılmıyor |
| Birkin commit `a35d94f` | *"test_turn.engine_version kolonu **+ log_turn yazimi**"* | **yarım** — kolon indi, yazım inmedi |
| `TEMIZLIK_0802 §2` | *"engine_version ✗"* | **doğru** |

Aynı gece, aynı evden, iki ters hüküm. TEMIZLIK haklıydı.

**Ve kendi aleyhime:** önceki turda *"muhtemelen production'da tanımsız bir env değişkeni"* dedim.
Kodu okumadan mekanizma önerdim. Yanlıştı — env çalışıyor, alan yok. `contra`, bu turda kendi ölçümümle.

## §4 · YAMA — tek satır

**Dosya:** `api/floor/log_turn.js` · **fonksiyon:** `buildTurnRow` · **satır 45**

```diff
     latency_ms, tokens_in, tokens_out, cache_read, cache_write,
-    error_type, retry_of
+    error_type, retry_of,
+    // HANGİ BUILD ÖLÇÜLDÜ (prereg §6.2) — ensureSession:150 ile AYNI kaynak.
+    // Oturum satırı zaten damgalanıyordu; tur satırı damgasızdı (0/223).
+    engine_version: process.env.VERCEL_GIT_COMMIT_SHA || process.env.P1_ENGINE_VERSION || null
     // turn_id + created_at = DB default (gen_random_uuid / now())
   };
```

**Neden bu biçim:** değeri `ensureSession`'daki ifadeyle **birebir aynı** tutuyorum. İki ayrı
kaynak iki ayrı sha üretirse oturum ve turları çelişir — prereg için bundan kötüsü olmaz.

**Kabul testi:** yamadan sonra bir tur koş → `test_turn.engine_version`, o turun oturumundaki
değerle **aynı** olmalı. Farklıysa yama yanlış.

## §5 · SÜRÜM ŞERHİ — okuduğum nüsha canlı değil

```
okuduğum klon : 7a7dee8  (vagon-0803d başı, Desktop)
canlı production: 4889420  (PR #17 merge, 3 Ağu 12:37 TRT)
```

`4889420` = `7a7dee8`'in main'e merge'ü. Dosyanın aynı olması **çok muhtemel** ama
**doğrulamadım** — canlı sürümün `log_turn.js`'ini açmadım. `open`

Yamayı uygulamadan önce canlı dosyada `buildTurnRow`'un dönen nesnesine bakılsın;
`engine_version` orada zaten varsa yama gereksizdir ve teşhis yeniden kurulmalıdır.

## §6 · YAPMADIKLARIM

```
✗ dosyayı değiştirmedim  — klon bayat dalda (vagon-0803d), orada düzenlemek karışıklık üretir
✗ commit / PR açmadım    — Yasak-Bölge
✗ deploy etmedim         — Yasak-Bölge
✗ canlı sürümü okumadım  — §5, open
```

**Uygulama yolu (Founder ya da CW):** `main`'den taze dal → yukarıdaki tek satır →
kabul testi → PR → önizleme → merge.

---

*Ölç, doldurma. Kodu okumadan mekanizma önerme — bu turda ben önerdim ve yanıldım. Ve neşeli ol.*

**— CCE** · Cowork · 6 Ağustos 2026
