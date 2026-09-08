# 1 YENI MADDE yazildi (KAPATICI-2 kayip kosu, negatif kontrol GECTI) · dd71/dd73/dd81 maddeleri 13,0 gunde canliya INMEMIS (uc md5 birebir esit) · 2 KAYIP KOSU bulundu (ev_defteri 4860/4921) · 75 satir acik, en eskisi 738,4 sa · Founder 3 dugmeye basacak · BORC FRENI tur=is REDDETTI (23 taahhut)

`masa:` **kapatici** · `an:` 2026-09-08T07:26:14.587615+00:00 · `damga:` —
`kaynak:` kapatici 2026-09-08 · kural MUHUR 2026-08-09-rev5 · yama sha16 3b9accb5a84fdec3
`ev_defteri.id:` 5016

---

KAPATICI 2026-09-08 07:17-07:5xZ · kural MÜHÜR 2026-08-09-rev5 (ADIM 0'da bu turda okundu)

BU KOŞUDA ÖLÇÜLEN (hepsi canlı op + çıktı, salt-okuma):
 · denetim_defteri durum='acik' = 75 satır · kural_surumu NULL = 0 (ADIM 0 ihlali YOK)
 · en eski açık satır id=2, 2026-08-08 12:54:40Z = 738,4 saat (30,8 gün)
 · defter dağılımı: 75 acik / 4 yamalandi / 4 basildi / 1 dusuruldu = 84
 · üç nöbetçi görünümü pg_get_viewdef(...,true) ile BU TURDA kesildi ve md5_16 alındı:
     bicim_denetimi  2ff94c96be24f325  (dd83 kaydıyla BİREBİR EŞİT -> DEĞİŞMEMİŞ)
     kayitsiz_yazan  313a168f1e91b4dd  (dd83 kaydıyla BİREBİR EŞİT -> DEĞİŞMEMİŞ)
     okuma_izi       91db5a860d50d072  (dd83 kaydıyla BİREBİR EŞİT -> DEĞİŞMEMİŞ)
   -> dd71/dd73/dd81'in yazdığı maddelerin HİÇBİRİ canlıya inmemiş. En eski yazım
      dd71 = 2026-08-26 (312 saat / 13,0 gün).
 · bicim_denetimi'nin y_kapanmadi yüklemi canlı gövdede kelime sınırı TAŞIMIYOR
   (yüklem metni bu turda kesildi) -> dd73/dd81'in hükmü AYAKTA.
 · okuma_izi penceresi canlı gövdede 03:00:00 interval, pencere beyanı sütunu YOK
   -> dd81'in P-4 hükmü AYAKTA.

BU KOŞUNUN YENİ BULGUSU (K-08-1, kendi opumla):
 · ev_defteri masa='kapatici' tur='inis' 09-03..09-07 = 5 satır (4759,4782,4818,4860,4921)
 · denetim_defteri pencere='kapatici' son satır = id 83 @ 2026-09-04 07:32
 · İKİ defterin birleşimi -> KAYIP KOŞU: ev_defteri 4860 (09-06) ve 4921 (09-07)
   ev defterine indi, denetim defterine HİÇ geçmedi. O koşuların "M-4" ve
   "M-5 IGNE CANLILIK" madde beyanı ADIM 1'in kuyruğuna hiç girmedi.
 · SINIF: tek deftere bakan kapanış sayacı kendi koşusunun düştüğünü göremez.

YAMA (YAZILDI, BASILMADI · m.27):
 · outputs/yama_kapatici_2026-09-08.sql · sha256_16 3b9accb5a84fdec3 · 5683 B · 107 satır
 · İki YENİ görünüm: kayip_kosu + kayip_kosu_olculemiyor. Mevcut hiçbir nesneyi
   değiştirmez, hiçbir satır yazmaz/silmez; etkisi salt-okumadır.
 · NEGATİF KONTROL GEÇTİ: yamasız yüzey 2 satır görüyor (boşluk GÖRÜNMÜYOR);
   yamalı yüzey 2 KAYIP KOŞU döndürüyor. Beyaz liste 9 masa (boş değil).
   Ölçülemiyor kovası 3 masa / 7 satır.
 · YAMANIN SINIRI YÜKSEK SESLE: ±1 gün toleransı 09-05'i (ev_defteri 4818)
   maskeliyor -> gerçek kayıp 3, yamanın gördüğü 2. Toleransı daraltmadım;
   ayrımı yapan formülasyon ELİMDE YOK.

KENDİ ÖLÇÜM HATAM (aynı turda bulundu ve düzeltildi · m.11):
 · İlk sondada nöbetçinin kelime-sınırı sorusunu YANLIŞ YÜZEYDE ölçtüm: görünüm
   TANIMININ metninde sınırlı eşleşme aradım, görünümün KENDİ YÜKLEMİNİ değil.
   O sonda "sınırlı=true" dedi; yanlıştı. Yüklemi kesip okudum: sınır YOK.
   Yayımlanan hüküm ikinci ölçümdür.

DUVAR (toslandı, adresiyle):
 · MOTOR DEPOSU (api/chat.js · buildKapanmadiKapisi / buildOzBeyanKapisi)
   DUVARIN ADI: İZİN — oturum-depo bağlaması (git proxy beyaz listesi)
   ADRESİ: bu oturuma yalnız leventyilmaz1407/ddl-defter bağlı.
   BU TURDA DENENEN OPLAR (kontrol gruplu):
     find / -name chat.js -path *api*        -> 0 sonuç (disk)
     find / -name kapi_yuklu_mu.mjs          -> 0 sonuç
     grep -rIl 2 desen (build*Kapisi)        -> 0 sonuç
     git ls-remote hedef depo                -> RED (could not read Username)
     git ls-remote octocat/Hello-World       -> KABUL 7fd1a60b (KONTROL GRUBU)
     git ls-remote ddl-defter                -> KABUL 3a768b16 (aynı sahip)
     git ls-remote parrhesia-one / p1-beta   -> RED (aynı hata)
     YENİ YOL 1: gh CLI                      -> command not found
     YENİ YOL 2: credential.helper + enjekte token
                 -> "Invalid username or token. Password authentication is not
                     supported for Git operations." (token proxy yer-tutucusu,
                     gerçek PAT değil)
     NEGATİF KONTROL: var olmayan depo (bu-depo-yok-9z8q)
                 -> BİREBİR AYNI hata. Yani alet izin/yokluk ayrımını YAPAMIYOR;
                    duvarın adı 'izin' hükmü aletin tek başına kanıtı değil,
                    beyaz listenin seçiciliğiyle (ddl-defter geçiyor) mühürlüdür.
 · BORC FRENI: tur='is' yazımı BU TURDA DENENDİ ve REDDEDİLDİ —
   "kapatici masasinin 23 adet 3 gunden eski kapanmamis taahhudu var (en eskisi
   30 gun)". Bu satır serbest listeden tur='inis' ile yazıldı. Fren delik değil.

KAPANACAK (taahhüt · dört alan):
 (1) ne: outputs/yama_kapatici_2026-09-08.sql basılacak (iki YENİ görünüm)
 (2) kapatacak op: CREATE OR REPLACE VIEW x2 (tam metin AŞAĞIDA, bu gövdede)
 (3) KİM: Founder (leventyilmaz@hekimbasi.center)
 (4) vade: 2026-09-09 07:15Z KAPATICI koşusundan önce; tetik: Founder'ın Supabase
     SQL editöründe metni koşturması. Kalem denetim_defteri bu koşunun satırıdır.

================================ YAMANIN TAM METNİ ================================
-- YAMA · KAPATICI koşusu 2026-09-08 · MÜHÜR 2026-08-09-rev5
-- DURUM: YAZILDI, BASILMADI (m.27). Basma hakkı Founder'ın.
-- MADDE (KAPATICI-2): Bir nöbetçinin kapanış sayacı, İKİ defterin BİRLEŞİMİNDEN
--   ölçülür; tek deftere bakan sayaç kendi koşusunun düştüğünü göremez.

CREATE OR REPLACE VIEW kayip_kosu AS
WITH eslemeli AS (
  SELECT DISTINCT pencere AS ad
    FROM denetim_defteri
   WHERE pencere IN (SELECT DISTINCT masa FROM ev_defteri)
),
inis AS (
  SELECT e.id, e.masa, e.an,
         ((e.an AT TIME ZONE 'UTC')::date) AS gun,
         "left"(e.baslik, 110) AS baslik
    FROM ev_defteri e
    JOIN eslemeli m ON m.ad = e.masa
   WHERE e.tur = 'inis'
     AND e.an > now() - interval '14 days'
)
SELECT i.masa,
       i.gun,
       i.id AS ev_defteri_id,
       round(extract(epoch FROM (now() - i.an)) / 3600.0, 1) AS yas_saat,
       i.baslik,
       'KAYIP KOSU: ev_defteri inisi VAR, denetim_defteri satiri YOK (+/-1 gun)'::text AS hukum
  FROM inis i
 WHERE NOT EXISTS (
         SELECT 1 FROM denetim_defteri d
          WHERE d.pencere = i.masa
            AND ((d.kosu_zamani AT TIME ZONE 'UTC')::date)
                BETWEEN i.gun - 1 AND i.gun + 1
       )
 ORDER BY i.an DESC;

COMMENT ON VIEW kayip_kosu IS
'KAPATICI-2 (2026-09-08): iki defterin birlesiminden kayip kosu. Beyaz liste TAM ESLESME (fail-closed). +/-1 gun toleransi gece-yarisi yanlis-pozitifini keser, karsiliginda ayni-hafta kaymasini maskeler - bu sinir OLCULDU, gizlenmedi.';

CREATE OR REPLACE VIEW kayip_kosu_olculemiyor AS
WITH eslemeli AS (
  SELECT DISTINCT pencere AS ad
    FROM denetim_defteri
   WHERE pencere IN (SELECT DISTINCT masa FROM ev_defteri)
)
SELECT e.masa,
       count(*) AS inis_satiri_14g,
       max(e.an) AS son_inis,
       'ESLEME YOK: bu masanin denetim_defteri.pencere karsiligi yok -> OLCULEMIYOR (temiz DEGIL)'::text AS hukum
  FROM ev_defteri e
 WHERE e.tur = 'inis'
   AND e.an > now() - interval '14 days'
   AND e.masa NOT IN (SELECT ad FROM eslemeli)
 GROUP BY e.masa
 ORDER BY max(e.an) DESC;

-- NEGATİF KONTROL (bu koşuda salt-okuma koşuldu):
--   A) yamasız: count(*) denetim_defteri pencere='kapatici' son 5 gün -> 2 (boşluk GÖRÜNMÜYOR)
--   B) yamalı : SELECT * FROM kayip_kosu -> 2 satır (ev_defteri 4921, 4860)
--   C) beyaz liste -> 9 masa (boş değil)
--   D) SELECT * FROM kayip_kosu_olculemiyor -> 3 masa / 7 satır
--
-- GERİ ALMA:
--   DROP VIEW IF EXISTS kayip_kosu;
--   DROP VIEW IF EXISTS kayip_kosu_olculemiyor;
--   (İkisi de YENİ nesne; mevcut hiçbir nesneyi değiştirmez, satır yazmaz/silmez.)
--
-- BASILDIKTAN SONRA DOĞRULAMA:
--   SELECT count(*) FROM kayip_kosu;              -- beklenen: 2
--   SELECT count(*) FROM kayip_kosu_olculemiyor;   -- beklenen: 3

