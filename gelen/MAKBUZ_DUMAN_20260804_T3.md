# MAKBUZ · DUMAN · tur 3 — hayalet kapandı, üç kanat sınandı

`masa:` claude-code / Duman · `an:` 2026-08-04T18:28Z–18:50Z · `kaynak:` yerel git + GitHub REST + Supabase REST

---

## ÖLÇ · taban ve son

| | 18:28:57Z | 18:49:33Z | sorgu |
|---|---|---|---|
| koridor başı | `2f76ac2` | **`ef0db83`** | `git rev-parse --short origin/main` |
| `gelen/inis-*.md` | 8 | **12** | `git ls-tree -r --name-only origin/main -- gelen/ \| grep -c '/inis-'` |
| makbuz satırı | 8 | **12** | `git show origin/main:gelen/_INEN.md \| grep -c '^\| [0-9]'` |
| makbuz bloğu | 1 | **2** | `grep -c '^## inis-eli'` |

## 3 · ÜÇ SAYI — beklenti önce yazıldı, sonra ölçüldü

18:35:37Z'de kuyruğu okudum (`?tur=eq.inis&durum=eq.acik`): **5 açık satır** — 10, 80, 95, 97, 103.
Buradan beklentiyi **koşudan önce** yazdım: id=10 RED → 4 iner → **12 dosya / 12 satır / 2 blok**.

| | değer | damga |
|---|---|---|
| 3a silme sonrası | **8** | verified |
| 3b koşu sonrası | **12** | verified |
| 3c makbuz satırı | **12** | verified |
| blok | **2** | verified |
| **b == c** | **EVET — hayalet 0** | verified |

**id=80 geri indi ve bu kez makbuzda:**
```
| 80 | `inis-80-final-brief-indi-vekaleten-m4-id79-kapandi-founder-testlere-.md` | 893 | `d0a289ab3bd32d67` | Vernier · M4 |
```
893 B — silinen dosyayla aynı bayt. **rev.4'ün newline yaması sahada TUTTU.** damga: verified
Yüzey notu: tur 1'de bunu yalnız yerelde ölçebilmiştim (unexamined-in-saha). Artık **sahada** verified.

## 4 · BOŞTA SINAMASI — sahada tuttu, ama beklentisi yanlış kurulmuştu

run **30940315587** (push tetikli, 18:48:06Z, head `ef0db83`), kuyruktakilerin hepsi zaten inmişken:
```
JOB: indir | success   →  4 adımın dördü de success
bu koşudan sonra commit: 0        koridor başı hâlâ ef0db83
```
Boşta dönerken **koridora dokunmadı**. damga: verified

**subtracted — talimattaki beklentiyi kırpıyorum:** "kuyrukta 0 satir" beklentisi **hiç gerçekleşemez**.
Workflow anon anahtarla yalnız *okuyor*; satırların `durum`unu kapatamıyor, kuyruk hep dolu döner.
Boşta sınamasının gerçek imzası "0 satır" değil, **"N satır → hepsi ATLANDI → /tmp/inen 0 bayt → commit yok"**.
Ölçülen bu oldu. Sınama geçti, ama geçme ölçütü yeniden yazılmalı.

## 5 · SIR SINAMASI — atlanmadı

```
inis-10-*.md                   → YOK ✅
taranan dosya                  → 44
ghp_[A-Za-z0-9]{16,}           → 0 dosya
github_pat_ / sk- / PRIVATE KEY→ 0 dosya
```
damga: verified · 18:49:33Z

Ara bulgu (18:30Z): `service_role` **2/40** dosyada eşleşmişti. Baktım — **sızıntı değil**: mimari
tartışmada kelime olarak geçiyor, ikisi de `b1566e9` ile elle taşınmış, kapıdan geçmemiş.
Ama kapıdan geçselerdi RED alırlardı → kapı **yanlış-pozitif** üretiyordu. rev.5 bunu kapattı:
desen artık `service_role\s*[:=]\s*\S{20,}` — kelime değil **değer** arıyor. damga: verified

## 6 · Yerel dal
`main` → `2f76ac2`'ye getirildi (`git reset --keep`), çalışma ağacı temiz.
`2d11e69` reflog'da duruyor, `git cat-file -e` ile doğrulandı — tek komutla geri gelir. damga: verified

---

## KENDİ ALEYHİME

**1 · contra — kendi bulgumu saha çürüttü.**
18:28Z'de ölçtüm: 2 koşunun 2'si de `workflow_dispatch`, `17:47/18:07/18:27Z` pencereleri boş →
"cron hiç ateşlememiş" dedim. **18:45:41Z'de `schedule` tetikli run 30940128810 geldi ve başarıyla koştu.**
Doğru hüküm: cron **ateşlemiyor değil, GEÇ ateşliyor** (yeni eklenen zamanlayıcı ısınıyor).
Şu an **1/4 koşu** schedule kaynaklı.
→ **rev.5'in başındaki yorum bu yüzden bayat:** "schedule bes pencere ust uste ATESLEMEDI" yazıyor ve
kaynağı benim ölçümüm. O cümle 18:35Z'de doğruydu, 18:45Z'de çürüdü. Düzeltilmezse üçüncü belgede
"GitHub cron çalışmıyor" efsanesi olur. **Üç tetik kararı yine de doğru** — gerekçesi "hiç ateşlemiyor"
değil, "geç ve best-effort ateşliyor" olmalı.

**2 · subtracted** — boşta sınamasının geçme ölçütü yanlış kuruluydu (yukarıda, adım 4).

**3 · open** — run kütükleri hâlâ okunamıyor: `HTTP 403 · Must have admin rights to Repository`.
Adım durumlarını REST `/jobs`'tan okuyorum; satır satır çıktı (kaç INDI / kaç RED / kaç ATLANDI)
bana kapalı. Bu turda tüm hükümler dosya+makbuz+commit üzerinden kuruldu, kütükten değil.

**4 · alet eksiği** — `gh` bu makinede kurulu değil, `workflow_dispatch` tetikleyemedim (adım 2 **open**).
Cron'u bekleyerek ölçtüm. Aletimi sorguladım: tetikleyememem workflow'un değil **benim** eksiğim.

---

**DEFTERE ŞUNU YAZ:**
```
inis-eli rev.4 yamasi SAHADA dogrulandi: id=80 geri indi (893 B, d0a289ab3bd32d67) ve makbuzda
gorunuyor. 12 dosya / 12 makbuz satiri / 2 blok — hayalet 0. (an 18:49:33Z, DUMAN, verified)

Bosta sinamasi sahada gecti: run 30940315587 dort adim success, 0 commit, koridora dokunulmadi.
ANCAK gecme olcutu duzeltilmeli: kuyruk anon-okur oldugu icin "0 satir" hic gerceklesemez;
dogru imza "N satir -> hepsi ATLANDI -> commit yok". (DUMAN, subtracted)

CONTRA — kendi bulgumu geri aliyorum: "GitHub cron hic atesledi" degil. 18:45:41Z'de schedule
tetikli run 30940128810 kostu. Cron GEC atesliyor (best-effort, yeni zamanlayici isiniyor),
su an 1/4 kosu schedule kaynakli. rev.5 basindaki "bes pencere ust uste ATESLEMEDI" yorumu
BAYAT — duzeltilmezse "cron calismiyor" efsanesi olur. Uc tetik karari dogru, gerekcesi yanlis.
(DUMAN, 18:49Z, contra)

Kapi yanlis-pozitifi kapandi: service_role artik kelime degil deger ariyor. Sir sinamasi temiz —
44 dosya, ghp_ 0, inis-10 yok. (DUMAN, verified)

ACIK: run kutukleri 403 (admin gerek) · gh kurulu degil, Duman workflow_dispatch tetikleyemiyor.
```
