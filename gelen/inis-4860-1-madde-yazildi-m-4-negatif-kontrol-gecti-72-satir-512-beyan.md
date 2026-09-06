# 1 madde YAZILDI (M-4, negatif kontrol GECTI) · 72 satir / 512 beyan acik · Founder 7 dugmeye basacak · en eskisi 576.0 sa (depo izni) · BORC FRENI tur=is'i REDDETTI

`masa:` **kapatici** · `an:` 2026-09-06T07:27:24.684075+00:00 · `damga:` —
`kaynak:` denetim_defteri id 85 islendi · 72 acik satirin metasi + dd 13/76/77/78/83 durumu okundu · kural MUHUR 2026-08-09-rev5
`ev_defteri.id:` 4860

---

KAPATICI · zamanli kosu 2026-09-06 07:15-07:3xZ · kural MUHUR 2026-08-09-rev5 (ADIM 0, bu turda okundu) · proje rgnuvspudrwmfrdrefza (list_projects ile dogrulandi).

== ONCE KOTU HABER: BORC FRENI BU KOSUDA ATESLENDI (kendi opumla olculdu) ==
ADIM 5 tur='is' ile denendi ve REDDEDILDI:
  "BORC FRENI - kapatici masasinin 21 adet 3 gunden eski kapanmamis taahhudu var (en eskisi 28 gun).
   YENI IS YAZILAMAZ. Once kapat: kapatir_id tasiyan bir satir yaz."
  (fren: ev_defteri_borc_t · ev_defteri_borc_freni() satir 12)
Bu satir bu yuzden tur='inis' olarak dustu. FREN DOGRU CALISTI - kapatici masasi 21 taahhut borclu.
Bu, dugme 1'in (depo izni) bedelinin sayisal olcusudur: yama yazilamayinca taahhut birikiyor.

== YAZILAN YAMA (1 madde) ==
M-4 · NOBETCININ PENCERESI VE SUSKUNLUGU
  madde: bir nobetci gorunumunun penceresi, denetledigi yuzeyin YAZMA KADANSINDAN kisa olamaz.
         Kisa pencere bos donduğunde hukum "temiz" degil "KAYNAK BOS"tur. Ve bos donen nobetci
         SUSAMAZ: sifir satir sifir hukum demektir; gorunum kendi penceresini ve kaynak-boslugunu
         BIR SATIR OLARAK beyan eder, ki okuyan el "kimse anilmamis" ile "hic bakilmamis"i ayirsin.
  sinif: yalniz VAR OLAN satirlar uzerinden hukum veren ve satir bulamayinca hic konusmayan HER
         nobetci. Tek vaka (okuma_izi) degil; dd85 b#5 ve b#1 ayni siniftadir.
  dosya: outputs/yama_kapatici_2026-09-06.sql · sha16 76ec32d93457a5dd · 6855 B
  nesne: public.okuma_izi (VIEW) · pg_get_viewdef ile BU TURDA kesildi · 706 kr · md5_16 91db5a860d50d072
         sokulu pencere: now() - 03:00:00 (UC SAAT)
  olcum: ev_defteri son yazi 2026-09-06 05:57:52.944662+00 (yas 1.4 sa) · son 3s=2 · 24s=37 · 48s=71
         nobet 03:04Z kosuyor; o saatte defterin son yazisi 15 saat geride -> 3 saatlik pencere
         YAPISAL olarak 0 satir doner. Dorduncu gundur "kor" yaziliyor.
  negatif kontrol: A sokulu+bos pencere = 0 satir SESSIZ · B takili+bos pencere = 1 sentinel satir
         kaynak_bos=true KONUSTU · C takili+24 saat = 37 satir, sentinel 0, ANILMAMIS 6, anilmis 31.
  kirilma: gorunum 8 kolonluydu (pg_attribute, bu tur). Yeni iki kolon (kaynak_bos, pencere_beyani)
         SONA ekleniyor; CREATE OR REPLACE VIEW yalniz sona eklemeye izin verir -> adla okuyan eller
         kirilmaz. select * ile okuyup satir sayisini hukum sanan el bos pencerede artik 1 satir gorur;
         hukum kaynak_bos kolonundan okunur.
  izleme: 3 gun. 2026-09-09 03:0xZ nobetinde kaynak_bos=false ve veri satiri >0 donmuyorsa madde
         tutmamistir, geri alinir (yol dosyanin sonunda).
  DEPLOY YOK · PROMOTE YOK · COMMIT YOK. Yazildi, basilmadi.

== FOUNDER'IN BASACAGI 7 DUGME ==
1) Zamanli gorevi leventyilmaz1407/https-parrhesia.one deposuna bagla (ya da add_repo aletini bu goreve ac).
   Neden: ADIM 2-3 motora yazmak zorunda; oturum o depoya bagli degil. 15 kosudur ayni duvar. YAS 576.0 sa (24.0 gun).
   Nerede: Claude masaustu uygulamasi; gorev O BILGISAYARDA yeniden kurulur (bulut oturumu depo baglayamaz).
2) M-4'u bas: outputs/yama_kapatici_2026-09-06.sql (dogrulama sorgusu + geri alma yolu dosyanin icinde). YAS 0.
3) 2026-09-01 yamalarini bas (M-3 susan_masa + M-1 bicim_denetimi). dd76/dd77 hala 'yamalandi'.
   Dosya yok (kap omru bitti); TAM METIN ev_defteri id=4711 govdesinde (9093 B, bu turda dogrulandi). YAS 143.8/124.1 sa.
4) 2026-09-03 yamalarini bas (M-1a + P-4). dd78 'yamalandi'. TAM METIN ev_defteri id=4759 (11598 B). YAS 119.8 sa.
5) 2026-09-04 yamasini bas (K-1 bicim_denetimi). dd83 hala 'acik'. TAM METIN ev_defteri id=4782 (11379 B). YAS 47.8 sa.
6) ev_defteri 194'u kapat: update ev_defteri set durum='kapali', kapatir_id=4816 where id=194;
   (unvan 4816'da yazili; is bitmis, defter kapanmamis - dd85 b#6)
7) OC/Osman erisim celiskisini tek cumleyle kes (4827 vs 4842/4845); ev_defteri'ne tur=karar satiri, biri dusuruldu.

KAYNAK NOTU: dd73'un andigi yama_nobetci_2026-08-27.sql icin ev_defteri 4599 govdesinde
CREATE OR REPLACE BULUNAMADI (8184 B) -> o yamanin metni bu olcumle KAYIP gorunuyor; dugme listesine konmadi.

== DUVAR: IZIN - GitHub oturum-depo baglamasi ==
8 op, kontrol gruplu, hepsi 2026-09-06 07:17-07:19Z bu kosuda:
  curl /user 200 login=leventyilmaz1407 X-Oauth-Scopes BOS ·
  git ls-remote octocat/Hello-World KABUL 7fd1a60b (KONTROL GRUBU) ·
  git ls-remote ddl-defter KABUL 50abb4d (koridor) ·
  git ls-remote HEDEF https-parrhesia.one RED "could not read Username" ·
  GET contents/api/chat.js 403 "GitHub access to this repository is not enabled for this session. Use add_repo" ·
  GET /user/repos 403 "sessions are bound to their configured repositories" ·
  ddl-defter TAM KLON HEAD 50abb4d 250 dosya (247 md/1 yml/1 mjs/1 gitignore) 4 desen -> chat.js YOK,
    araclar/ YOK, buildKapanmadiKapisi yalniz gelen/*.md NESRINDE ·
  ToolSearch "add_repo" -> alet YOK.
Kontrol grubu geciyor, hedef gecmiyor -> duvar ag ya da kimlik degil, KAPSAM. Adres yazildi ki
biri o kapiyi actiginda yikildigi gorulsun. Bu kosu bulutta calisti; Founder'in bilgisayarina erisim yoktu.

== DEFTERIN HALI (bu turda sayildi) ==
durum=acik 72 satir / 512 beyan · en eski acik satir 2026-08-08 12:54:40Z = 690.4 saat (28.8 gun) ·
kural_surumu NULL olan acik satir = 0 (ADIM 0 ihlali YOK) · yamalandi 4/24 · basildi 4/13 · dusuruldu 1 ·
KAPATICI kosusu 18, hala acik 15 · depo duvarina toslamis KAPATICI kosusu 15 ·
kapatici masasi 3 gunden eski kapanmamis taahhut: 21 (borc freninin kendi sayimi).
SIKICI SATIR: 81 defter satirindan yalniz 8'i 'acik' disina cikabilmis (~%10). Sebep tembellik degil,
YAZMA YUZEYI YOK: yamalar yaziliyor, olculuyor, basilmayi bekliyor. Dugme 1 basilmadikca oran duzelmez.

== KAPANMAYANLAR (dd85 odenmemis 8 -> 14 kalem) ==
1 ADIM 2-3 motor maddesi yazilamadi - DUVAR IZIN (dugme 1, Founder)
2 M-4 basilmadi, m.27 (dugme 2, Founder)
3 dd85 b#1 KARNE KOR: sinif adlandi, karne yuzeyine uygulanmadi; kural_uyum_pencere/kapsam_sql BU TURDA
  KESILMEDI, kesmeden yama yazmak m.5 ihlali olurdu (KAPATICI, 2026-09-07 07:15Z)
4 dd85 b#2 ERRATA ev_defteri 4818 actor=codex - bu turda DOGRULANMADI, aktarim (4818'i yazan masa)
5 dd85 b#6 ev_defteri 194 acik (dugme 6, Founder)
6 dd85 b#4 iki Founder sozu celisiyor (dugme 7, Founder)

DOSYA: outputs/KAPATICI_2026-09-06.md + outputs/yama_kapatici_2026-09-06.sql (sha16 76ec32d93457a5dd, 6855 B).
Ikisi de Founder'a SendUserFile ile indirildi.
