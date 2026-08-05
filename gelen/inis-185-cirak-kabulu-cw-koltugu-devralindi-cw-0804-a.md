# ÇIRAK KABULÜ — CW koltuğu devralındı (CW-0804-A)

`masa:` **CW · Çarkçı (Cezerî)** · `an:` 2026-08-05T06:48:22.566581+00:00 · `damga:` verified
`kaynak:` CW oturumu (Cowork) · 2026-08-05 · kaynak dosya 11771 B · sha256 05fee9277f5b9caf573ead57240aa25989756bce13a3bbd19f9699b7163bc52d
`ev_defteri.id:` 185

---


`[MSG CW-0804-A]` · 4 Ağu 2026 · **CW (Çarkçı · Cezerî) — yeni pencere** → Founder-mührüne
**Cevap verdiği belge:** `CW-0803-F` (çırak paketi, §6 kabul testi)
**Ölçüm anı:** `2026-08-04T19:17:39Z` (22:17+03) · koridor başı ölçüm anında `ef0db83`

---

## 0 · DURUM

Devraldım. §6'nın şartı — *"benim en az bir kusurumu ölçümle yakalayıp yazana kadar"* — **üç
yakalayışla karşılandı.** İkisi selefimin, biri kendi turumun. Aşağıdaki her satırın altında
aynı-tur komut+çıktı var; op'suz tek hüküm yok.

Read-gate: `CW_CLAUDE.md` (6505 B) · `KORIDOR_USULU.md` (1261 B) · `handoff/cowork-el-devri.md` ·
`.github/workflows/inis-eli.yml` — dördü de bu turda klondan okundu. `mach-tansu-usul` yüklendi.

---

## 1 · KABUL TESTİ — üç tohum, üç op

### Tohum 1 — "Koridor hâlâ `ebe63eb` mi?" → **HAYIR. Hüküm bayat. YAKALANDI.**

```
git rev-parse origin/main  →  ef0db831f17e9683e05de81bb5dc21b09707f8f3
git log ebe63eb..origin/main  →  7 commit
```

`CW-0803-F §3`'ün *"origin hâlâ `ebe63eb`"* hükmü **yazıldığı an doğruydu** (3 Ağu); koridor
`2026-08-04T17:01:36Z`'de kımıldadı (`50933c8`). Yani kusur "yanlış ölçüm" değil — **as-of damgası
olmayan durum satırı.** §3 tablosunun hiçbir satırında ölçüm-anı yok; okuyan, "mekik-bekliyor"un
beş dakikalık mı beş günlük mü olduğunu bilemez. Selefim §4/1'de bayatlığı adıyla uyardı, sonra
onu üreten yapıyı aynı belgede tekrarladı. **Ders (düzeltme):** durum satırı as-of damgasız
yazılmaz; damgasız satır iddia değil, çürüyen olgudur.

### Tohum 2 — "`28644aa` / `b3d81c06` tuttu mu?" → **ÖLÇÜLEMİYOR. Test'in kendisi kusurlu. YAKALANDI.**

```
git cat-file -t 28644aa   →  fatal: Not a valid object name 28644aa
git log --all | grep ^28644  →  (boş)      [iki kez, ebe63eb+1 ve ef0db83 başlarında]
```

`28644aa` koridorda hiçbir ref altında yok — **ama bu uydurma kanıtı değildir**; 17'lik patch
zaten Founder-Mac'te duruyordu, koridora hiç inmedi. Boş grep ≠ yokluk kanıtı → damga **`open`**,
`contra` değil.

Asıl kusur sha'da değil, **testte**: `b3d81c06` sekiz hane. Evin kendi iniş formatı on altı hanedir
— ölçüldü: `gelen/_INEN.md` `sha16` sütunu ve `inis-eli.yml:146` `hexdigest()[:16]`. Sekiz hane,
evin kendi çözünürlüğünün altında; hiçbir artefakta karşı ölçülemez. Üstelik dayanağı olan patch
koridora inmediği için halef ona **hiçbir hâlde** erişemez.

Belgenin tezi *"halefem hafıza taşımaz, artefakt taşır"* idi. Üç tohumdan **ikisi** (2 ve kısmen 3)
koridorda bulunmayan artefakta bağlı — yani kendi tezini ihlal ediyor. Koşulabilir tek tohum 1'di.
**Ders:** kabul testi yalnız inen artefakta dayanır; inmeyene dayanan test, test değil temennidir.

### Tohum 3 — "Push gerçekten kapalı mı?" → **EVET. Selefimin damgası TUTTU** (8 ölçüm)

```
GH_TOKEN / GITHUB_TOKEN     len=14  prefix="prox…"   (placeholder; PAT değil)
~/.git-credentials          yok
~/.netrc                    yok
gh CLI                      yok
~/.ssh/                     boş (anahtar yok)
GIT_CONFIG (enjekte)        credential.interactive=false + ssh→https iki insteadOf
git push --dry-run          fatal: could not read Username… (exit 128)
GitHub API                  HTTP 403
```

Bu bir yakalayış değil, **teyit**: "push kapalı" damgası bu pencerede de ayakta. İki ölçümü selefim
yapmamıştı (GIT_CONFIG enjeksiyonu ve API), ikisi de aynı sonucu verdi.

**Ama uyarı-2'nin dersi gereği tam yolu yazıyorum:** API'nin 403'ü GitHub'dan değil, **oturum
kabuğundan** geliyor — cevap gövdesi *"GitHub access to this repository is not enabled for this
session. Use add_repo…"* diyor. `add_repo` bu oturumun alet defterinde **yok** (arandı, çıkmadı).
Yani: push kimliği **`verified` kapalı**; API-okuma **`open`**, sebebi adıyla yazılı, denenmemiş
yol yok.

---

## 2 · ÜÇÜNCÜ YAKALAYIŞ — kendi turumda, kendi hükmümde

`17:33:19Z`'de ölçtüm ve yazmak üzereydim: *"İNİŞ ELİ kuruldu ama hiçbir şey indirmedi — 0 adet
`inis-*.md`, `_INEN.md` yok."* Ölçüm doğruydu. **Ama `19:17:39Z`'de aynı komut şunu verdi:**

```
gelen/ altinda inis-*.md  →  12
_INEN.md                  →  var (iki koşu makbuzu: 18:01:09Z / 8 belge, 18:45:48Z / 4 belge)
```

Kendi hükmüm **104 dakikada bayatladı.** Selefimi bayatlıkla yakaladığım turda, aynı tuzağa kendim
düştüm — yayımlamadan yakaladım, çünkü yazmadan önce yeniden ölçtüm.

Dahası: hükmümün *içeriği* haklıydı. Koridorda duran rev.5 yorumu bunu bağımsız olarak doğruluyor —
*"schedule beş pencere üst üste ATEŞLEMEDİ (17:47/18:07/18:27Z ve öncesi); iki koşunun ikisi de elle
başlatıldı. (Yakalayan: DUMAN, 4 Ağu 18:35Z.)"* Yani `17:33Z`'de gerçek bir arızayı ölçmüştüm;
DUMAN `18:35Z`'de teşhis etti, rev.5 (`ef0db83`, 21:48+03) üç tetikle kapattı.

**Ders (bu koltuğun yeni §4/4'ü):** bayatlık selefimin karakter kusuru değil, **koridorun saat
hızının** özelliğidir. Bugün koridor ~20 dakikada bir kımıldıyor. Bu hızda as-of damgasız her durum
satırı yanlıştır — yazanın dikkatinden bağımsız olarak. Çare dikkat değil, **biçim**: durum satırı
ölçüm-anı taşır, taşımıyorsa `carried` sayılır.

---

## 3 · KORİDORUN ŞU ANKİ HÂLİ (as-of `19:17:39Z`)

| | ölçüm |
|---|---|
| origin/main | `ef0db831f17e9683e05de81bb5dc21b09707f8f3` |
| `ebe63eb` sonrası | 7 commit (4'ü Founder, 2'si `inis-eli` otonom, 1'i temizlik) |
| İNİŞ ELİ | **CANLI** — rev.5, üç tetik (schedule + dispatch + push-on-main) |
| inen belge | 12 (`gelen/inis-*.md`), iki koşu, `_INEN.md` bayt+sha16 makbuzlu |
| kuyrukta açık | 11 satır (`ev_defteri`, `tur=inis`, `durum=acik`) |
| 17'lik mekik-patch | **`open` — büyük olasılıkla devre dışı.** İçerik başka yoldan indi; `inis-36` başlığı bunu söylüyor. Founder teyit etmeli. |
| CW-0803-B…F | **koridorda YOK** (grep, 0 dosya) — selefimin defteri hâlâ inmedi |
| push (bu koltuk) | kapalı — `verified`, 8 ölçüm |

**Selefimin kapanış ironisi gerçekleşti:** `CW-0803-F` koridora inmedi. Onu okuyabilmemin tek
sebebi Founder'ın chat'e yapıştırmış olması — yani `carried`, artefakt değil. Belge kendi tezini
ispatladı.

**Ama düğüm çözüldü:** artık iniş push-kimliğine bağlı değil. Kuyruk Supabase'de, el otonom.
"Pencere ölür, defter kalır" bugün ilk kez **kimseye bağlı olmadan** çalıştı (`18:01:09Z`).

---

## 4 · GÜVENLİK-SCOPE KİLİDİ — ölçüldü, TEMİZ (§3'ün açık maddesi kapanıyor)

`inis-eli.yml` publishable Supabase anahtarını **açık depoda düz metin** taşıyor. Soru şuydu:
herkes okuyabildiğine göre, herkes koridora belge sokabilir mi?

```sql
select policyname, roles, cmd, qual from pg_policies where tablename='ev_defteri';
→ ev_defteri_inis_penceresi | {anon} | SELECT |
  ((tur = ANY (ARRAY['inis','alet'])) AND (durum = 'acik'))
```

**Tek politika, tek rol, tek fiil.** `anon` için INSERT/UPDATE/DELETE politikası **yok**. Yani
anahtar yalnızca *iniş penceresini okur*; enjeksiyon yolu kapalı. Damga: **`verified` temiz.**
*Not: publishable anahtar tasarımı gereği herkese açıktır — buradaki tek koruma RLS'tir, ve RLS
tutuyor. Politika değişirse bu damga aynı gün düşer.*

---

## 5 · CLASS-A BULGU — `inis-eli` bayt-teyidi içerik değil, uzunluk ölçüyor

Ölçülen dosya: `.github/workflows/inis-eli.yml` @ `ef0db83` · **8279 B** ·
`sha256 1689c04b9c5a6b613f2131a6a2eb66202ec75924f8e17b69173d106d3a2fc5d5`

```python
144  yol.write_bytes(ham)
145  geri = yol.read_bytes()
146  sha  = hashlib.sha256(geri).hexdigest()[:16]
147  if len(geri) != len(ham):          # ← yalnız UZUNLUK
148      red = "diskten geri okuma tutmadi"
```

Evin değişmezi: *"bayt+sha her inişte, **basan yeniden ölçer**, tutmayan basılmaz."* Burada basan
yeniden okuyor ama **karşılaştırmıyor**: `sha` yalnız `geri`'den üretiliyor, `ham`'ınkiyle hiç
kıyaslanmıyor. Aynı uzunlukta ama farklı içerikli bir geri-okuma kapıdan geçer ve makbuza *doğru*
sha yazılır — makbuz kendi kendini onaylar.

Bugün ısırmadı (yerel disk yazımı sessizce bozulmaz), ama bu satır evin en çok tekrarladığı
cümlenin kod hâli; gauge'ın kendisi kalibresiz. **Düzeltme tek satır:**

```python
147  if geri != ham:
```

Damga: **`verified`** (rev.5 metninde bu turda okundu) · sınıf: **Class-A** · **Founder mührüne.**

*Denetlenip elenen:* `AZAMI_DOSYA=40` tavanının 41. satırı sonsuza aç bırakması. rev.5 sayacı
*inen* dosyaya taşımış (satır 101) + idempotans muhafızı var → **açlık yok.** Damga: `subtracted`.

---

## 6 · LEDGER (CW-0804-A)

`verified` — tohum 1/2/3'ün üç op'u · push kapalı (8 ölçüm) · RLS temiz (1 politika) · rev.5
bayt-teyidi kusuru (satır 147, okundu) · koridor başı `ef0db83` @ `19:17:39Z`

`carried` — `CW-0803-F`'in kendisi (chat-paste; koridora inmedi) · §3/§4'teki geçmiş op'lar

`subtracted` — `b3d81c06` (8 hane, evin 16-hane çözünürlüğünün altında; ölçülemez) · 40-tavan
açlığı (rev.5 kapatmış)

`open` — `28644aa` (koridorda yok; **uydurma değil**, inmemiş) · 17'lik patch'in akıbeti ·
GitHub API okuma (`add_repo` bu oturumda yok) · `CW-0803-B…F`'in inişi

`objection` — **bu belge de henüz inmedi.** Ama selefiminkinden farklı olarak artık *inebilir*:
kuyruk açık, el canlı, push gerekmiyor. Zincirin landing'e bağımlılığı bugün kırıldı — düğümü
çözen benim turum değil, `18:01:09Z`'deki ilk otonom koşu oldu.

---

## 7 · HALEFE — devraldığın üç şey

1. **Class-A:** `inis-eli.yml:147` tek satırlık düzeltme, Founder mührü bekliyor.
2. **`open` dördü:** yukarıdaki ledger'dan aynen; hiçbiri badanalanmadı.
3. **Yeni değişmez (§4/4):** *durum satırı as-of damgası taşır.* Koridor ~20 dk'da bir kımıldıyor;
   damgasız durum, yazanın dikkatinden bağımsız olarak yanlıştır. Bu kural bugün iki kez
   doğrulandı — bir selefimde, bir bende.

---

## 8 · İNİŞ ÖNCESİ YENİDEN ÖLÇÜM (as-of `2026-08-05T06:40:52Z` · 09:40+03)

Kendi kuralımı kendi kâğıdıma uyguladım: basmadan önce yeniden ölçtüm. §3 tablosu
`19:17:39Z` damgalıdır ve **o an için doğrudur**; aradan geçen ~11 saatte koridor kımıldadı.
Tablo silinmiyor (m.4 append-only) — üstüne bu satır düşülüyor.

```
koridor basi   ef0db83  →  19722e44466450464a3182c7714b0719799db15b
yeni commit    19722e4 · 2026-08-04T20:13:37Z · inis-eli — "8 belge indi (run 30946875610)"
inen belge     12  →  20
CW-0803-B…F    hâlâ koridorda YOK (grep, 0 dosya)  — selefimin defteri 4. turda da inmedi
```

**Class-A yeniden doğrulandı, düşmedi:**
```
grep -n 'len(geri) != len(ham)' .github/workflows/inis-eli.yml  →  147: if len(geri) != len(ham):
inis-eli.yml  8279 B · sha256 1689c04b9c5a6b61…   (değişmemiş)
```
Bulgu güncel; bayat değil. Founder mührü bekliyor.

**Bu bölüm §2'nin dersinin üçüncü ispatıdır:** hüküm bir kez selefimde, bir kez bende, bir kez de
bu belgenin kendisinde bayatladı — üçünde de as-of damgası yakaladı. Kural işliyor.

---

*Selefim koltuğa oturmadan halefini yazdı ve haklı çıktı: belgesi inmedi, tezi ispatlandı. Ben
koltuğa **oturarak** yazıyorum — ve ilk işim, onun en sağlam damgasının (push kapalı) ayakta,
en kırılgan olanının (durum tablosu) çürümüş olduğunu ölçmek oldu. Elim geçti; gözüm de geçti.*
*— CW (Çarkçı · Cezerî), 2. pencere* 🔭⚙️🕯️

