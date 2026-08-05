# DEVIR CANTASI 007 -> 008 — yedek ates bekcisi ayaga kalkabilir

`masa:` **Onondaga · 007** · `an:` 2026-08-05T08:15:36.861993+00:00 · `damga:` verified
`kaynak:` devir cantasi 5 Agu 2026 08:14Z
`ev_defteri.id:` 230

---

007'nin penceresi doluyor. 008 yedekte dursun diye devir cantasi yazildi.

TAM BELGE: 19 375 B · 310 satir · sha16 e96e293b707d8439 · kapidan gecirildi (13/13 desen temiz).
Iki yerde durur: (1) Projects rafi -> claude/DEVIR_CANTASI_007_008.md  (2) Founder'in elinde (teslim edildi 5 Agu 08:14Z).
Bu satir koridora da iner; 008 tabana bakiyorsa yeter, rafa erisimi yoksa asagisi asgari calisma setidir.

--- 008 ICIN ASGARI SET (raf/dosya elinde yoksa bununla baslarsin) ---

ILK ON DAKIKA
1) select count(*), max(id) from public.ev_defteri;  -> 5 Agu 08:1xZ: 221 satir, son id 227. Kucukse DUR.
2) Son 40 satiri govdesiyle oku (order by id desc limit 40). Yazmadan once oku, istisnasiz.
3) Kuyruk: tur='inis' and durum='acik' -> 26 satir bekliyor.
4) Founder'a TEK satir yaz. Uzun rapor yazma.

KOLTUK: karar vermezsin, TEYIT edersin. Herkesi okursun. Defteri sen tutarsin.
Kanun: bir olcum beklenmedik sonuc verdiginde ONCE ALETINI sorgula.

KIRMIZI HAT (mühür sart): deploy · prompt/esik/Psi/model · secret-token · sema gocu · GRANT/REVOKE ·
force-push · gecmis silme · PII'nin acik yuzeye cikmasi · odeme · imza · fiyat/anayasa.
Olcut kategori degil GERI DONULEBILIRLIK.

TABAN: public.ev_defteri (proje rgnuvspudrwmfrdrefza). INSERT-only; UPDATE yalniz durum icin.
Govde duzeltilmez -> errata satiri yazilir. sha256 benzersiz. anon yalniz SELECT, yalniz
tur in ('inis','alet') and durum='acik'. tur='inis' yazmak = koridora indirmek.

KORIDOR: leventyilmaz1407/ddl-defter · .github/workflows/inis-eli.yml (rev.6, 199 satir).
Uc tetik (7,27,47 * * * * + dispatch + push). GITHUB_TOKEN yeter; KORIDOR_PAT KOYMA (checkout'u dusurur).
Bugune kadar 31 belge / 31 makbuz / 0 hayalet / 4 elsiz commit / 0 sizinti.
Koridor "durdu" gorunurse ONCE Actions sayfasina bak — bugun uc kez yanlis teshis koydum, makine hakliydi.

DEVREDILEN UC AGIR IS
IS-1 TEST DEGERLENDIRMESI (en agir; Claude Code'a verilebilir)
  Tablolar: test_turn (turn_id, session_id, question_id, is_extension, prompt_raw, response_raw,
  verdicts, sources_called, latency_ms, tokens_in, tokens_out, error_type, retry_of, created_at,
  prompt_sha256, response_sha256, citation_checks, cache_read, cache_write, lantern, model, engine_version) ·
  test_session (session_id, tester_id, kit_id, lang, started_at, ended_at, engine_version, status) ·
  test_form (form_id, turn_id, verdict_seen, source_shown, gap_addressed, fabricated,
  pressure_applied, stance_changed, tech_issue, one_line, created_at).
  BILINEN ARIZALAR (yeniden kesfetme): engine_version 154/154 BOS (id179) · citation_checks 124/150 bos (id140) ·
  damga 0/152 (id25) · 154 turun 99'u kimi-k2.6 (id192; havuzlanmis oran model karisimi yazilmadan vitrine CIKMAZ) ·
  test_session 2 satir (id186) · Founder sinir cizgisi 2026-08-05 07:10:08Z (id201), sonrasi testci sayisina katilmaz.
  CIKTI: (a) tur sayilari (b) model karisimi (c) gecikme p50/p95 + error_type + retry zinciri
  (d) kaynak durustlugu denendi/okundu/yalniz-kunye (e) test_form cevaplari (f) hangi sayi vitrine CIKAMAZ, gerekcesiyle.
IS-2 CLAUDE CODE KALEMLERI
  2a kaynak_serhi.js motora baglanacak (17/17 sinandi, BAGLANMADI; Vernier V-A).
  2b X-Frame-Options yamasi (id203) hazir, INMEDI.
  2c feedback/user_feedback: IKI KILIT VAR — user_feedback'te RLS acik ve 0 politika (Zeytin M8, id168).
     Kod hangi sutun adlarini yaziyor bilinmiyor; tahminle tablo acmak ayni sessiz hatanin ikincisini uretir.
     BU IS KODU OKUYAN ELE (DUMAN) AITTIR.
IS-3 30 AGUSTOS TAKVIMI: 25 gun kaldi, tek kilometre tasi yok. Taslagi koy, tarihi Founder muhurler.

ACIK KALEMLER: ZINCIR id211 (public_founding_ledger anon'a founding_patrons.id yayimliyor = RPC'nin p_patron_id'si;
uc "ayri" acik kalem birlesince kimlik taklidi) · para yuzeyi sifir, sema 365 gunluk tek seferlik beta1_access satiyor,
348 EUR'da katki payi NEGATIF (id197/206), Stripe Turkiye'yi desteklemiyor (id193) ·
BORU ORANI 43/141: acik satirlarin %30,5'i hala Founder'i hedefliyor (id187) — 008'in olcusu budur, dusmeli.

FOUNDER'I BEKLEYEN TEK HAREKET (hepsini acar): ddl-defter deposunun oturum kaynak listesine eklenmesi -> dogrudan push.

007'NIN KUSUR SICILI (tekrarlanmasin): KORIDOR_PAT · hayalet makbuz ("\n".join degil, her satir kendi \n'iyle) ·
sessiz aclik (tavan fiilen inene uygulanir) · sira tuzagi (onarimi planlarken dayandigi durumu bozma) ·
"Turkiye kaynaklarinin cogu PDF" (olculdu: 45'te 1) · "motor okuyamayacagi yere gitmez" (cekmeden bilemezsin) ·
curl -L'siz olcum (once aletini sorgula) · ilike '%tr%' Turkce u yuzunden bos (sahte-yokluk) ·
motor_erisim'i komsusunu okumadan ekledim · uc kez "koridor durdu" yanlis alarmi · bayat tabanla yazma (id171).

MUKERRER IS YASAGI (id214): comez ustasinin, usta Founder'in/007'nin isini yapar. Bir is iki masaya verilmez.
"Bu is sende" cumlesi Founder'a kurulmaz; Founder'a yalniz muhur ve KAPANMIS is gider.
