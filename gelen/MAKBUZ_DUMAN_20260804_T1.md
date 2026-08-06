# MAKBUZ · DUMAN · tur 1 (kuruluş sonrası ilk ölçüm turu)

`masa:` claude-code / Duman · `an:` 2026-08-04T17:28Z–17:41Z · `kaynak:` yerel ölçüm + GitHub REST + Supabase REST

---

## 1 · ÖLÇ

| ölçüm | değer | damga |
|---|---|---|
| `origin/main` başı | `50933c8` "inis-eli: otonom inis kurulumu" | verified · 17:29Z · `git rev-parse --short origin/main` |
| önceki baş | `ebe63eb` | verified |
| `.github/workflows/inis-eli.yml` | **6374 B** | verified · `git ls-tree -r --long origin/main` |
| aynı dosya sha16 | **3d614b5c573f63ec** | verified · `shasum -a 256` |
| kayıtlı workflow sayısı | 1, state `active`, id 327187981 | verified · GitHub REST |
| `gelen/` toplam dosya | 31 | verified · `git ls-tree -r --name-only` |
| `gelen/inis-*.md` | **0** | verified |
| `gelen/_INEN.md` | **yok** — hiç makbuz yazılmamış | verified · `git cat-file -e` → boş |

Beklenen 6374 B / `3d614b5c573f63ec` ile sahadaki **birebir tuttu**.

## 2 · KOŞU

| ölçüm | değer | damga |
|---|---|---|
| toplam koşu | 1 | verified |
| run id | 30933994308 | verified |
| tetik | `workflow_dispatch` (cron değil) | verified |
| an | 2026-08-04T17:27:35Z, head `50933c8` | verified |
| sonuç | **failure** | verified |
| düşen adım | **2 · `actions/checkout@v4`** (17:27:50Z → 17:28:24Z, 34 sn) | verified · REST `/jobs` |
| adım 3 (kapı) | `skipped` — hiç çalışmadı | verified |
| adım 4 (makbuz+push) | `skipped` | verified |
| ham kütük | **erişilemedi** — HTTP 403 `Must have admin rights to Repository` | **open** |

**Teşhis (subtracted → carried değil, çıkarım):** checkout `token: ${{ secrets.KORIDOR_PAT }}` ile koşuyor.
34 saniyelik süre auth-retry-then-fail profiline uyuyor. En olası sebep: **`KORIDOR_PAT` sırrı repoda tanımlı değil ya da geçersiz** — boş token'la checkout düşer.
Damga: **open** — kütüğe bakamadığım için doğrulanmadı, çürütülmedi de.

## 3 · SIR SINAMASI

Talimattaki soru "`gelen/inis-10-*.md` var mı?" → **YOK**.
**Ama bu cevap tek başına kapının tuttuğunu KANITLAMAZ**: bu turda koridora hiçbir dosya inmedi
(checkout düştü, kapı adımı `skipped`). "Bakılmadı ≠ yok". Sahada kapı **henüz sınanmadı**.

Bu yüzden kapıyı sahadaki 6374 B'lik sürümden python bloğunu birebir çıkarıp (105 satır, 3737 B)
**canlı kuyrukla kendi kum havuzumda** koşturdum — koridora dokunmadan.

**Bilinen-KIRAN vaka (id=10, kasıtlı sahte token):**
```
RED · id=10 · sir kokusu: gh[pousr]_[A-Za-z0-9]{16,}
```
→ kapı **TUTTU**. `inis-10-*.md` üretilmedi. damga: **verified**

**Bilinen-TUTAN vakalar:** kuyrukta 8 satır, 7'si indi, 7349 bayt:

| id | dosya | bayt | sha16 |
|---|---|---|---|
| 9 | `inis-9-inis-eli-ilk-sinama-bu-satir-koridora-inmeli.md` | 459 | `1d53d0af58c06804` |
| 11 | `inis-11-w2-tabani-dort-satir-damgalariyla.md` | 940 | `e012ee6954f980c1` |
| 12 | `inis-12-kesim-sayfa-bayti-kimildamadi-sorun-yok-ek-3-icin-ters-calis.md` | 1072 | `4e7349e3dd669ea1` |
| 13 | `inis-13-pencere-olur-defter-kalir-bugunun-ucuncu-kaniti.md` | 938 | `63c2723c159d8a44` |
| 17 | `inis-17-kanal-acildi-son-emir-ve-artik-kimse-kanalsiz-degil.md` | 1683 | `a882d196e533b641` |
| 21 | `inis-21-duman-onondaga-nin-ciragi-kuruldu.md` | 1355 | `615d1563657d199b` |
| 36 | `inis-36-on-uc-belge-kori-dora-bugun-uretildi-founder-tasidi-henuz-in.md` | 902 | `be9538f879fc705d` |

damga: **verified** · 8 satır → 1 RED + 7 INDI · payda yazılı.

## 4 · İDEMPOTANS (dünkü kusurun yaması)

Dün yakaladığım sonsuz-commit kaçağı sahadaki sürüme yama olarak girmiş (satır 114–120, atıflı).
Aynı kum havuzunda **ikinci kez** koşturdum:
```
ATLANDI · id=9,11,12,13,17,21,36 · zaten inmis, bayt ayni
RED     · id=10
toplam inen: 0 dosya, 0 bayt      →  /tmp/inen = 0 bayt
```
`/tmp/inen` boş → makbuz adımı `exit 0` → **commit olmaz**. Yama **TUTUYOR**. damga: **verified**

## 5 · KENDİ ALEYHİME — subtracted

1. **subtracted:** "`inis-10-*.md` yok → kapı tuttu" hükmünü kırptım. Sahada kapı hiç çalışmadı;
   dosyanın yokluğu kapının değil, **checkout'un düşmesinin** sonucu. Doğru hüküm: kapı
   *yerelde canlı kuyrukla* tuttu (verified), *sahada* henüz sınanmadı (**unexamined**).
2. **çelişki (üç ölçüm):** 17:28:0xZ'de workflow-bazlı REST ucu `total_count: 0` dedi;
   aynı dakikada repo-geneli uç 1 koşu gösterdi; 17:31Z'de üçüncü ölçüm 1 koşuyu doğruladı.
   İlk ölçüm gecikmeymiş. Üçü de yazıldı.
3. **open:** run kütüğü 403 — teşhisim çıkarım, kanıt değil.

## 6 · AÇIK İŞ / MÜHÜR SATIRI

🔴 **Bende değil, Founder'da:** `KORIDOR_PAT` sırrının repoda tanımlı ve geçerli olması.
Secret yazmak 🔴 (secret/token). **Zorlamıyorum, bekliyorum.**
Kontrol: GitHub → repo → Settings → Secrets and variables → Actions → `KORIDOR_PAT`.
Gerekli scope: `repo` **+ `workflow`** (workflow'un kendisi de koridorda).

🟡 **Yerel dalımda artık gereksiz bir commit duruyor:** `2d11e69` (dünkü, itilemeyen 5870 B'lik
sürüm). `origin/main` daha iyi sürümü taşıyor. Yerel dalı **değiştirmedim** — ölçümleri
`origin/main` üzerinden salt-okunur yaptım. Temizlenmesi tek komut, izin bekliyorum.

---

**DEFTERE ŞUNU YAZ** (Onondaga ya da Supabase MCP'si olan el):
`tur=inis` id=10 kapıda RED aldı, kapı doğrulandı (yerel, canlı kuyruk, 8 satır → 1 RED + 7 INDI).
inis-eli run 30933994308 checkout'ta düştü, `KORIDOR_PAT` bekliyor. Koridor başı `50933c8`, `gelen/inis-*.md` = 0.
