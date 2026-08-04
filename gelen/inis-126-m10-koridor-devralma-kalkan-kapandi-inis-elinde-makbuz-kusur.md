# M10 KORIDOR devralma — kalkan kapandi, inis-elinde makbuz kusuru, 151 kapandi

`masa:` **Sahaf · M10 KORİDOR** · `an:` 2026-08-04T19:07:03.305263+00:00 · `damga:` verified
`kaynak:` [MSG SAHAF-M10-0804] · Sahaf 3. el (adsiz) · kaynak dosya sha256 6b5c2befd224a33ca7ce6c6f2ab8a94d5ac3ca253aec772e0eafd3be837d9657 · 15556 B
`ev_defteri.id:` 126

---


`[MSG SAHAF-M10-0804]` · 4 Ağu 2026 · Sahaf (3. el, adsız) → Founder + Jill Kement (M1) + halefim
Bağlam: `DEVIR_M10_NEDRET` Founder-eliyle (chat-paste, patch-serisi) ulaştı — doğuşta `carried`.
Emir: aynı belgenin §7'si + kalkan-yasası ("halefim bir kusurumu canlı op'la yakalayana dek bu devir `open`").

## §0 · KALKAN — selefin devri KAPANDI (op'lu)

**M10-B1 (AĞIR · makbuz-hijyeni) — MAKBUZ_ACK satır 91-93: yanlış commit-SHA.**
Üç `ACK MACH6-0802-A/B/C` satırı, indiren commit olarak **`432ebe5`** yazıyor.
`432ebe5` = 25 Tem 15:01, yalnız MAKBUZ_ACK.md'ye 7 satır ekleyen commit. O dosyalar o ağaçta YOK:

```
432ebe5:gelen/IMECE_MEKTUBU_0802_CRESCENDO.md  -> YOK (agacta degil)
432ebe5:gelen/TEMIZLIK_0802_BAYAT_HUKUMLER.md  -> YOK
432ebe5:gelen/KURTARMA_CW_0801_EFG.md          -> YOK
ebe63eb:gelen/IMECE_MEKTUBU_0802_CRESCENDO.md  -> VAR   (dogrusu bu)
```

Nedret 3 Ağu'da bu üç satırı tarttı ve "3/3 TUTTU · CW-basımı verified" yazdı. Satırda üç alan
var — dosya-adı · bayt+sha · **commit**. İkisini ölçtü, üçüncüsünü ölçmedi, hükmü üçünün üstüne
bastı. Oysa MAKBUZ_ACK'in kendi kaidesi (satır 8): *"Makbuz, okunan commit SHA'sını taşır —
okumanın op-gate'i."* Ölçülmeyen alan, satırın op-gate'iydi. K-1'in kardeşi: alet düzeldi,
**kapsam** dar kaldı. Karşı-kontrol: aynı alan CCE-0725 satırlarında doğru (4/4, `9273685`).
→ **Nedret'in devri `open`'dan çıktı: KAPANDI.** Düzeltme: MAKBUZ_ACK'e üç errata satırı,
`432ebe5` → `ebe63eb`; eski satırlar silinmez (yasa-10).

**M10-B2 (HAFİF · ACK-hijyeni):** CCE-0725-D satırı ikinci dosyayı `ORGAN1.1-CENTIK.md` diye
kısaltmış; fiili ad `gelen-cce-ceo-0725-ORGAN1.1-CENTIK.md`. Bayt+sha tutuyor, ad tutmuyor.

## §1 · GÜNÜN M10 ÇIKTISI

**a · İNEN BELGE.** origin/main = `50933c8` (4 Ağu 20:01 TRT). Önceki `ebe63eb` (2 Ağu 22:50),
ondan önce `432ebe5` (25 Tem 15:01) — Nedret'in "8 gün boşluk" ölçümü birebir doğrulandı.
**Sahaf-hattı hâlâ inmedi:** 49 commit, tüm dallar, tüm ağaçlar tarandı — `sahaf|halefe|nedret|
devir_m10|denetim_p1` adlı tek dosya yok. 6 belge, 5 gün, sıfır iniş. Selefin `contra`'sı
devralınmadı; **yeniden ölçüldü, hâlâ ayakta.**

**b · SHA SPOT-CHECK (tam kapsam — 8 iddia).** Alet düzeltildi (ad↔sha256 arasına "landed · N B ·"
girmesine izin + commit alanı da sınanıyor):
**8/8 bayt+sha TUTTU. 3/8 commit-alanı KIRDI** (MACH6-0802 üçlüsü).
Alet çift yönlü sınandı: bilinen-tutan = CCE-0725 dörtlüsü (geçti) · bilinen-kıran = yapay
bozulmuş satır (15006→15007) → KIRDI dedi.

**c · SESSİZLİK SAYACI.** Nedret'in "12/12 tek author" bulgusu doğru; 49 commit'in tamamında
4 ayrı kimlik dizisi var ama hepsi aynı insan; committer'ların 30'u `GitHub <noreply@github.com>`.
Hüküm güçlendi: hangi elin sustuğu git'ten çıkmaz. **Kaynak artık var: `ev_defteri(an, masa)`.**
Sayaç oraya kurulacak — kurulmadı, `open`.

## §2 · İNİŞ-ELİ — kök-açık kapandı, alet iki yerden aksıyor

**M10-B3 (AĞIR · kanıtlı) — iniş-eli her turda SON dosyayı makbuza yazmıyor.**
Python `"\n".join(inen)` → dosya sonunda newline YOK. Bash `while read < /tmp/inen` → son satırda
EOF'ta non-zero döner, gövde çalışmaz. Ayrıca commit mesajı `$(wc -l)` newline sayar. Birebir koştu:

```
gercekte inen=1  ->  makbuz tablosu satiri=0  ·  commit mesaji "0 belge indi"
gercekte inen=2  ->  makbuz satiri=1
gercekte inen=3  ->  makbuz satiri=2
--- duzeltmeyle ("\n".join(inen) + "\n") ---  inen=1 -> 1 · inen=3 -> 3
```

Dosya iner, `_INEN.md` onu saymaz. Bu evin kanunu "iniş = makbuz"; makbuz eksik sayarsa iniş
*var* ama *görünmez*. Yön kötümser: kimse yalan iddia etmez, ama inen belge kaybolmuş görünür.
**Düzeltme tek karakter:** `write_text("\n".join(inen) + "\n")`.

**M10-B4 (verified) — kapı sağlam.** Kuyruk Founder'ın kapı kurallarıyla birebir simüle edildi
(`tur=inis · durum=acik` → 8 satır): **7 GEÇER · 1 RED.** Reddedilen tek satır id=10, başlığı zaten
"SIR SINAMASI — bu satir REDDEDILMELI". Boyutlar 363–1680 B, tavanın çok altında.

**M10-B5 (`open` · dikkat) — kuyrukta 8 satır bekliyor, koridorda `gelen/_INEN.md` YOK.**
Workflow 17:01Z'de indi, cron `7,27,47`; en az iki yuva geçti, HEAD hâlâ `50933c8`. İki olası kök:
(a) GitHub yeni cron'u gecikmeli/ilk turda atlar, (b) `KORIDOR_PAT` yok/yetkisiz → 403.
Ayıramadım (Actions kaydına erişimim yok). **Founder'a tek iş: `inis-eli`'yi Actions'tan
`workflow_dispatch` ile elle bir kez çalıştır** — koşu ya iner ya hatayı adıyla söyler.
Bu ayrım yapılmadan "iniş yolu var" demek, K-3'ü tekrarlamaktır: *kurulmuş ≠ inmiş.*

**M10-B6 (öneri).** İniş-eli indirdikten sonra `durum`'u `kapali` yapmıyor; kuyruk hiç boşalmıyor.
Sonsuz-commit'i idempotans kapatmış (iyi), ama 40'lık tavan dolunca yeni satırlar sessizce
sonraki tura kayar. Öneri: iniş sonrası `durum='kapali'` ya da `inen_at` sütunu. Mühür Founder'da.

## §3 · SELEFİN AÇIK KALEMİ KAPANDI

**`154↔151` — 151 BULUNDU (verified).** Alan dosyada değil, **DB'de**:
`source_registry.solo_verify_yasak = true` → **tam 151**. Nedret 2 Ağu'da "katalog Supabase'de
DEĞİL" ölçmüştü — o an doğruydu; tablo 3 Ağu 00:08'de yüklendi. Hükmü yanlış değildi, **bayatladı**.
**154 hâlâ `open`.**
Katalog sayıları DB'de bağımsız ikinci yoldan birebir tekrarlandı → FLOOR sağlandı:
toplam 970 · benzersiz url 960 · Güney Asya 43 (%4,4 — **denge-borcu ödenmedi**) ·
damga: verified 843 · kısmi 83 · uncertain 42 · contra 1 · open 1 · serve=false 1.

## §4 · KENDİ ALEYHİME (subtracted)

`damga='kismi'` diye saydım, **0** çıktı — "kısmi damgası yüklemede düşmüş" diye yazacaktım.
Yazmadan dağılımı çektim: **83 tane var**, yazımı `kısmi` (Türkçe ı). Kendi sorgum, evin 8.
yasasının tam örneğiydi. Bir grep, bir SQL — aynı çukur. Bu turda bir sahte-bulgu üretecektim,
ölçüm engelledi.

## §5 · DEVİR — M10 KORİDOR · Sahaf 3. el

**KOLTUK.** M10 KORİDOR: koridorun sağlık-gözü; haftalık dördü (inen belge · ACK · sha · sessizlik).
Ölçer, üretmez. **Adım yok** — el-adı Founder mührüne bağlı (`open`); kendime ad vermem.

**ALET (sınama vakalarıyla).** MAKBUZ satır denetçisi: üç alanı birden ölçer (ad · bayt+sha ·
commit); bilinen-tutan VE bilinen-kıran ile sınandı. **Halefim yine de sınasın:** format
`ACK <id> · <ad> landed · <N> B · sha256 <16hex> · <commit> ·` dışına çıkan satırı desen
**sessizce atlar** — kusurum burada olabilir. SQL kapı-simülatörü: iniş-eli SIR desenlerini
Postgres'te koşar; Postgres↔Python regex farkı (`\y` vs `\b`) kenar vakada ayrışabilir — `open`.

**TABAN (anıyla).** koridor `50933c8` (4 Ağu 20:01 TRT) · `ev_defteri` 58 satır, kanal 16:54'te açık ·
`source_registry` 970 satır, **anon SELECT policesi YOK** (Kement şerhi ölçüldü, geçerli) ·
`ev_defteri` anon policesi VAR ve dar: `tur IN ('inis','alet') AND durum='acik'` — iyi tasarım.

**ÖLÇEMEDİKLERİM (`open`).** iniş-eli Actions koşu-kaydı · `154` · Ψ-null kökü · `claude/` rafı,
KOVAN, 00_BOOT · P1 kod-reposu (bu pencerede açmadım) · tarayıcı/takvim (denemedim).

**AÇIK BIRAKTIKLARIM (halefe kuyruk).**
1. **İniş fiilen oldu mu?** `_INEN.md` belirdiği ilk turda üçünü tart: dosya sayısı ↔ makbuz
   satırı ↔ commit mesajındaki sayı. Üçü tutmuyorsa M10-B3 düzeltilmemiştir.
2. MAKBUZ_ACK errataları (M10-B1 ×3, M10-B2 ×1) düşüldü mü.
3. Sessizlik sayacını `ev_defteri(an, masa)` üstüne kur — git'e değil.
4. 3 bayat ACK (`CCE-0715-B/C/D`, 15 Tem) — moot mu, damgalansın.
5. Denge-borcu: Güney Asya %4,4.
6. `source_registry` SELECT policesi — W2 vagonu bunsuz kopuk ibre doğurur.

**ÜÇ KUSURUM (yeniden yakalanabilir).**
**K-1 · Kapsamı beyan ettim, tamamlamadım.** 8 "landed" satırını tarttım; `TASIMA` satırlarını,
bekleyen-makbuz bloğunu ve `ACK ... okudum ... <sha>` satırlarındaki sha'ları ÖLÇMEDİM.
Yakala: o commit'lerin varlığını `git cat-file` ile sına — biri yoksa "makbuz denetlendi"
cümlem bir kademe geniştir.
**K-2 · İniş-elini koşarken görmedim, yeniden-üretimle kanıtladım.** Sağlam ama L0 değil.
Yakala: gerçek koşuda tek dosya indiğinde makbuz 0 mu yazdı — hayırsa laboratuvarım koridoru
temsil etmiyordu.
**K-3 (sistemik) · Kalkan beni tek kusura ayarladı.** Bulunca kapanıyor; ilk kusurdan sonra
durmadım (B2…B6 geldi) ama **niyetim tek kusura ayarlıydı** — itiraf ediyorum, çünkü sonraki
el aynı teşvikle oturacak. Yakala: benim bulduğum kusur sayısı, benden sonrakinin bende
bulduğundan azsa, kalkanı ben kullanmışım demektir.

## LEDGER (SAHAF-M10-0804)

`verified` — MAKBUZ 8 satırın bayt+sha'sı (8/8) · commit-alanı kırığı (3/8, `git cat-file` iki
yönlü) · koridor HEAD `50933c8` + iniş tarihçesi · Sahaf-izi yokluğu (49 commit, tüm dallar) ·
author/committer dağılımı · iniş-eli makbuz off-by-one (birebir koşturuldu + düzeltmesi) ·
kapı simülasyonu 7 geçer/1 red · `ev_defteri` anon policesi · `source_registry` 970 + dağılımlar +
`solo_verify_yasak=151` · aletin çift yönlü sınanması
`carried` — devir-paketinin kendisi (Founder-paste; koridorda kopyası YOK) · Nedret'in zip/JSON
ölçümleri · `ev_defteri`'deki diğer masaların bulguları
`open` — iniş-eli'nin fiilen koşup koşmadığı · `154` · Ψ-null kökü · `claude/` rafı + KOVAN +
00_BOOT · el-adı · M10 koltuğunun mührü
`contra` — "MACH6-0802 ACK'leri `432ebe5`'te indi" (git çürüttü; doğrusu `ebe63eb`) ·
"Sahaf-hattı koridorda" (devralındı, yeniden ölçüldü, hâlâ ayakta) · "katalog Supabase'de değil"
(2 Ağu'da doğruydu, 3 Ağu 00:08'de bayatladı)
`subtracted` — 1, kendi aleyhime: `damga='kismi'`→0 sahte-bulgusu, yazılmadan kendi ölçümümle düşürüldü

*Selef "ben ölçtüm, sen indir" diye bıraktı. İniş kuruldu — ama kurulmuş ≠ inmiş; onun K-3'ü
bu turda da geçerli, bu kez benim üstümde. Rafa koyduğum ilk şey bu kâğıt, ikincisi kendi
kusurlarımın listesi. Tarta tarta, siga siga.*
*— Sahaf, üçüncü elinden (adsız), M10 KORİDOR*

