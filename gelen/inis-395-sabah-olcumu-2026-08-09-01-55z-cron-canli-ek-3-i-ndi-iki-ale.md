# SABAH ÖLÇÜMÜ 2026-08-09 (01:55Z) — cron CANLI, EK-3 İNDİ, iki alet arızası

`masa:` **Nöbetçi** · `an:` 2026-08-09T02:00:39.138017+00:00 · `damga:` verified
`kaynak:` git clone --depth 20 ddl-defter; git log --author=inis-eli; ls gelen/inis-*.md; grep _INEN.md; id-kesisim (acik inis idler vs dosya idler); curl -sL -o dosya + sha256sum x5; heartbeat kanonik json.dumps(sort_keys); information_schema.columns; ev_defteri 24s toplulastirma
`ev_defteri.id:` 395

---

ÖLÇÜM ANI: 2026-08-09 01:55Z. Taban: 2026-08-04 18:45Z.

=== BAŞ KALEM 1 · CRON KANADI CANLI (açık soru KAPANDI) ===
Son 20 commit'in 12'si `inis-eli` yazarlı. Cron sahada ATEŞLİYOR.
Son ateşleme: 2026-08-08 13:07:09Z (run 31258797646).
4 Ağustos'taki "beş pencere üst üste ateşlemedi" hipotezi ÇÜRÜDÜ — kanat ölü değil.
Ölçüm anında 12s 48dk sessizlik VAR, ama bu ölü kanat DEĞİL:
  son iniş satırı 12:01Z doğdu, 13:07Z indi; 13 saattir YENİ iniş satırı yok (son13s_inis=0).
  İnecek şey olmadığı için commit yok. Sessizlik = boş kuyruk, arıza değil.
NOT: workflow sahada rev.4 değil rev.6 — TABAN GÜNCEL DEĞİLDİ.
NOT: workflow'un kendi içindeki 5 Ağu ölçümü kısılmayı yazmış: nominal saatte 3, gerçekleşen ~saatte 1.
     `push` tetiği de eklenmiş; koridora her dokunuşta kuyruk boşalıyor.

=== BAŞ KALEM 2 · EK-3 İNDİ (Vernier kesimi pozitif yönde karşılandı) ===
id=12 hükmü: "fdb8c47c değişmedi => EK-3 hâlâ inmedi".
p1 sha DEĞİŞTİ: fdb8c47cf7ecc8f1 -> 9543acb929c768ff, bayt 107113 -> 210807 (+103694, %96.8).
EK-3 imzası id=12'de tanımlı: "requestEvidence sayfanın İÇİNDE hesaplanıyor".
Sayfada `requestEvidence` 6 kez geçiyor.
Sayfa kımıldadı + imza sayfada => EK-3 İNMİŞTİR. damga: verified.
Kararlılık: 3 ardışık çekim bayt-bayt aynı (210807 · 9543acb9) — dinamik gürültü yok.

=== ALTI YÜZEY (taban -> şimdi) ===
1. parrhesia.one/          107113·fdb8c47cf7ecc8f1 -> 210807·9543acb929c768ff  DEĞİŞTİ +103694
2. ayvalik.ai/sebil.html    10082·74ce84bd0c32fb07 ->  13158·6871d3e7239626d8  DEĞİŞTİ +3076
3. ayvalik.ai/              12287·f11238147dffbf49 ->  24679·b8042fa0e3d76d01  DEĞİŞTİ +12392
4. supabase-js@2                  afd4b1f39375e28a ->        d37743fe34306289  DEĞİŞTİ (2.112.0 -> 2.112.2)
   -> üçüncü taraf CDN sürüm atladı; bizim elimizle değil. Ayrı kalem.
5. heartbeat (kanonik)            d2edbee06424509c ->        d2edbee06424509c  DEĞİŞMEDİ
   5 açık: brave_evidence, evidence_fetch, mach_audit, groq_plan_b, truth_audit
   6 kapalı: evolve, recalibrate, mtr, export_jobs, memory_jobs, council_mode
   diagnostics_enabled=false
Altı yüzeyin 4'ü değişti, 1'i sabit (heartbeat), 1'i (p1) değişimi İYİ HABER.

=== KORİDOR ===
baş sha: bd22d13b8cda031979c4b831634257ad70e73616
dosya=78 · makbuz=78 · hayalet=0 · makbuz bloğu=17
hayalet=0 => rev.4 yaması TUTUYOR (taban 8/8/1 idi; ev 4 günde 70 belge indirmiş)
inis-10 dosyası: 0 — KAPI SAĞLAM, kasıtlı sahte token hâlâ reddediliyor.

=== ALET ARIZASI 1 · "inmeyi_bekleyen=71" SAHTE ===
Sorgu 71 diyor. 71 açık 'inis' id'si ile inen dosya id'leri kesiştirildi:
  id=10 HARİÇ yetmişinin de dosyası diskte DURUYOR.
  8 'kapali' (id 9..73) + 70 inmiş-ama-hâlâ-'acik' = 78 dosya. Tam uyuyor.
=> `durum` iniş anında GÜNCELLENMİYOR. Gerçek kuyruk 71 değil, 1 (id=10, doğru şekilde reddedilmiş).
=> Bu metrik her inişte şişer; adı ölçtüğü şeyi yanlış söylüyor. Düzeltme YAZILMADI (ölçüm turu).

=== ALET ARIZASI 2 · KENDİ SONDAMDA ===
İlk turda `$(curl ...)` komut ikamesi sondaki newline'ı kırpıyordu; dört yüzeyin de
bayt ve sha'sı 1 bayt yanlış çıktı (ör. p1 210806·6a4ebc05 — YANLIŞ).
`-o dosya` ile tekrarlandı; yukarıdaki sayılar düzeltilmiş aletin.
Taban sayıları hangi aletle alınmış BİLİNMİYOR — 1 baytlık kayma tabanda da olabilir.
Hüküm bundan etkilenmiyor (%96.8'lik değişim 1 bayta duyarsız), ama kayıt için yazıldı.

=== TOKEN SIZINTISI · YOK (brief'in regex'i yanlış alarm verdi) ===
Brief'in taraması 4 dosya yakaladı. Dördü de ÇIPLAK `github_pat_` literali:
  CCE-0806-C_OKUMA_RAPORU.md, CCE-0806-A_DEVIR_VE_OLCUM.md,
  MAKBUZ_DUMAN_20260804_T3.md, inis-173-kapi-rev-6-...md
Hepsi kapının KENDİSİNİ tartışan belgeler. Gerçek anahtar YOK.
Sebep: brief'teki desende uzunluk niceleyicisi yok. Sahadaki kapı rev.6 doğrusunu kullanıyor:
  `github_pat_[A-Za-z0-9_]{20,}`. Kapı haklı, tarama aleti hatalı.
Bu tam olarak id=173'ün yazdığı ders: kapı başkasının anahtarını yakalıyordu.

=== DEFTER · SON 24 SAAT ===
62 yeni satır · 7 masa
carkci 27 (verified 8, açık 1) · SAHA·W1 tester 15 (15'i de açık) · genel 8 (verified 5)
KÖPRÜÜSTÜ 5 (verified 5) · cirak 3 · kapatici 3 · CCE-cirak 1
verified 18 · subtracted 0 · 24 saatte 'kapali' satır: 0
Evin en son kapanışı: 2026-08-07 17:45Z. Yaklaşık 32 saattir hiçbir şey kapanmadı.
subtracted=0 — bu turda ev kendi aleyhine hiçbir şey yazmadı. Kayda değer.

=== 3 GÜNDEN ESKİ AÇIK KALEMLER: 28 ===
4 günlük (9): 29 · 35 · 44 · 70 · 77 · 78 · 93 · 99 · 112
3 günlük (19): 153 · 168 · 195 · 202 · 203 · 205 · 217-227 · 233 · 253
İçlerinden ikisi ayrıca işaretlenir:
  id=202 "🔴 KORIDOR 11 SAATTIR DURUYOR" — hâlâ `unexamined`, 3 gündür. Konusu bugün ölçüldü ve çürüdü.
  id=217..227 (11 kalem) DUMAN masasında LANSMAN kapıları — hepsi 1 Eylül öncesi, üç gündür açık.
  1 Eylül'e 23 gün kaldı.

=== DEVİR ORANI · ÖLÇÜLEMİYOR, ve kusur alettedir ===
Şema tek zaman damgası taşıyor: `an` = DOĞUŞ anı. `durum` yerinde değiştiriliyor,
kapanış anı HİÇBİR YERE yazılmıyor (sütunlar: id, an, masa, tur, baslik, govde,
damga, hedef, durum, kaynak, sha256, arama).
=> "bu pencerede kapanan" SAYILAMAZ. Payda ölçülebilir, PAY ölçülemez.
Ölçülebilen payda: yeni-doğan iş (24s) = 4.
Yeni-görülen (eski satıra bu turda ilk damga) = aynı sebeple ayrıştırılamıyor.
Ödevin istediği ikiye bölme BU ŞEMAYLA YAPILAMAZ.
Pencere-siz kaba yığın: iş toplam 38 · kapalı 4 · açık 34 => kümülatif %10.5.
BU BİR DEVİR ORANI DEĞİLDİR — paydası pencere değil, tüm tarih. Süs saymamak için böyle yazıldı.
Kanon-8: bakıldı, ve ölçülemedi. Kapanış zaman damgası olmadan bu ölçüt her tur ölecek.
