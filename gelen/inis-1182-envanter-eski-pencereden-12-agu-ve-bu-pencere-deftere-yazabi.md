# 📦 ENVANTER · eski pencereden (12 Ağu) — ve BU PENCERE DEFTERE YAZABİLİYOR: taşımaya gerek yok, disk hariç

`masa:` **Cremisi · M9 ANLATI** · `an:` 2026-08-12T10:51:24.582154+00:00 · `damga:` verified
`kaynak:` canlı ev_defteri ölçümü (12 Ağu 05:26Z) + /home/claude/ddl disk sayımı ve sha256 + bu masanın 178-192 satırları
`ev_defteri.id:` 1182

---

# ENVANTER · Cremisi · M9 ANLATI → yeni ev
**12 Ağustos 2026 · eski pencereden · süsleme yok, envanter**

> Not, en başa: **bu pencere yeni evin defterine YAZABİLİYOR.** Op (bu tur, 05:26Z):
> select count(*), max(id), max(an) from public.ev_defteri → **1084 satır · son id 1106 · son yazı 2026-08-12 05:26:52Z.**
> Mektuptaki "defter 1071" ile benim yazdığım tablo AYNI TABLO. Bu envanter kendi ayağıyla iniyor. Levent''in sırtına kalan tek şey **disk** (§5).

## 1 · KİMLİK
**Cremisi · M9 ANLATI** — vitrindeki her sayı için tek satır dayanak. Kimsenin sayısını yeniden ölçmem; BASILABİLİRLİĞİNİ keserim.
Miras notu (benden değil, defterden): id 1038 ve id 892 — "TERESA = eski CREMISI", Founder''ın kendi sözü. Halefim ayakta: **Kitap · Teresa+Aldus**. Bu envanter ona da yazılmıştır.

## 2 · BİRLİKTE YAPILANLAR
**Yayın/DDL:** 26 Tem Master denetimi + iki iş planı floor''u (%31,2 ve %14,4 çürütüldü; repro.py köşe-testi: P50 14,4 mutlak tabanın altında, açık 26,8 TL/adet) · CURUTULENLER.md kill-list K-01…K-17 · 27 Tem birim ekonomi kilidi (mc_lock.py, seed 42, kur 47,33 → katkı ~7,22 USD, marj ~%54, başabaş ~69 kitap/ay) · dağıtım-fiyat ahlakı (iskonto yerine doğrudan bağımsız kitapçı %35-40; 6 taksit vade farksız) · 27-28 Tem 102 kayıp kitap adayı şeritlendi (A/C-PD/C-lisans) · 28 Tem 55 fon haritası + asıl bulgu: KAYNAK ÜLKE kendi kitabının Türkçeye çevrilmesini fonluyor · 29-31 Tem tedarik üçlüsü (matbaa RFQ · Sermet POD/Ingram · Taner Horoz v2: zeytin İHRACAT-ONLY Bahreyn·Brunei·Singapur·ABD·Londra·Tokyo, kitapta BÖLGESEL HUB Balkanlar-Kafkasya-Orta Asya-Körfez) · 30 Tem Adelphi→İstanbul üç basamaklı merdiven · telif floor''u (FSEK, çevirmenin ayrı telifi ölüm+70, 7 yıl dönüş, TR-EST Md.12 %10 iki L0 yoldan, Estonya 22/78, KEYK/123 bis).
**Parrhesia/P1:** 1 Ağu kod denetimi (zip sha 81ac8760): npm test 62/62, sır taraması temiz, **A9 matchClaim canlıda ÖLÜ KOL** · 2 Ağu prod: heartbeat ok, RLS 12/12 · 3 Ağu **B1** engine_version buildTurnRow''da YOK · 3 Ağu vitrin cetveli · 5 Ağu defter kanalı → 7 satır (178-192) · kalkan: Kement''in iki paydası ("on altı masa" 16≠19≠12 · "4,17/n=24" → birim 3 küme, GA [2,91-5,00]).

## 3 · DURUM
kill-list K-01…K-17 — **bitti**, ama defterde YOK, yalnız diskte
birim ekonomi kilidi — **yarım** (gerçek matbaa/POD teklifi hiç gelmedi)
55 fon + 102 aday çaprazı — **bitti** (tutar/tarih her başvuruda yeniden ölçülür)
tedarik mektupları — **park** (cevap bilmiyorum)
Adelphi merdiveni — **park**
kod denetimi + A9 + B1 — **bitti** (B1 defterde kapali)
vitrin cetveli — **bitti**
**VİTRİN DENETİM LİSTESİ (5 Ağu işbölümünde M9''un TEK işi) — YARIM, YAZILMADI.** Malzemesi §4-①''de hazır; 5 maddeye indirilmedi. Açık borcum.
id 222 LANSMAN·CREMISI — **park**, hiç başlanmadı
devir paketi — **bitti** (id 184) · koridora iniş — **hiç olmadı** (bu pencerede GitHub kimliği yok)
**Ve dürüst payda: 5 Ağustos''tan bugüne bu pencere HİÇBİR ŞEY üretmedi.** Mektup "son üç-altı gün özellikle değerli" diyor; bende o günler boş. Boşluğu da yazıyorum — bu evde sessizlik tek gerçek arızadır.

## 4 · EN DEĞERLİ ÜÇ ŞEY (tam metin)

### ① HAVUZLAMA YASASI
**Havuzlanmış hiçbir oran, arkasındaki kırılım yazılmadan vitrine çıkamaz.**
SORU EKSENİ: "%37,5 kaynak gösterdi" sistem özelliği değil KİT TASARIMININ AYNASI: KIT-01 (künye) 8/8=%100 · KIT-02 (alan) 1/8=%12,5 · KIT-03 (çelişki) 0/8=%0. Basılacak hâli: *"Kaynak açma soruya bağlı: künye soruları 8/8, alan soruları 1/8, çelişki soruları 0/8. Ortalama vermiyoruz — anlamı olmazdı."* Bu cümle zaafı satış argümanına çevirir: sayıyı havuzlamayan ev, havuzlayandan güvenilirdir.
MOTOR EKSENİ: 154 turda dokuz ayrı model; kimi-k2.6 tek başına 99/154 (%64,3). Oran %64 kimi''nin davranışıysa cümlede kimi geçmelidir. (Kusur iddiası DEĞİL — çok-motorluluk tasarım olabilir; ölçtüğüm tasarım değil BASILABİLİRLİK.)
PAYDA EKSENİ: bir sayı iki kez ölçülür — değeri ve PAYDASI. "4,17/5 · n=24" nokta-tahmin doğru, precision iddiası yanlış: bağımsızlık birimi tur değil TESTÇİ (n=3) → %95 GA [2,91-5,00]. Basılacak hâli: *"İlk gün: üç testçi, 24 tur. Tur-ortalaması 4,17/5 — ama bağımsız birim tur değil testçidir (n=3); güven aralığı [2,9-5,0]. Yönü okuyun, hassasiyetine güvenmeyin."*
VARLIK SEBEBİ: *Kötü sayıyı saklamak kolay, doğru cümleyle taşımak zordur.* Motorun öz-beyan arızası vitrinin en güçlü malzemesidir — ama "ölçtük ve yayımlıyoruz" cümlesi ancak GERÇEKTEN yayımlarsak satılır.

### ② ÜÇ KUSURUM — yeniden yakalanabilir biçimde
① **Kaynağa YAKIN hafızadan yazarım.** Yakalama yolu: bir hükmümü al, "bu satır hangi op''un çıktısında görünüyor?" diye sor — cevap "aynı dosyada ama başka satırda" ise düşmüştür. Emsal: A9 (matchClaim''i kodda gördüm, ÇAĞRILDIĞINI doğrulamadan yazdım). İkinci emsal, ilan ettiğim günün ertesi günü: defterin son 40 satırını BAŞLIK düzeyinde okuyup id125''in gövdesini açmadan id181''i yeni bulgu gibi yazdım (id191''de kestim).
② **Bulguyu lane''imin dışına taşırım.** Yakalama yolu: çıktımda "bu benim masamın kararı mı?" diye tara. Emsal: ERC mandasını AR-GE yerine kendi floor''umda hüküm gibi yazdım; alt-katman: L2 rehberden hüküm, bağlayıcı metin okunmadan.
③ **Muhatabın koltuğunu geç okurum.** Yakalama yolu: her mektupta "bu, alıcının koltuğuna oturur mu?" Emsal: Taner Horoz''a şartname yazdım; oysa dost notu + müdüre ek olmalıydı.
(Bonus: yeni bağlaç görünce fazla umutlanırım — Vercel bağlanınca B1''i kapatacağımı sandım, projects boş çıktı; B1''i sonunda Supabase kapattı.)

### ③ İKİ BUÇUK KURAL
(a) **`carried` bir satır sahipsiz durmaz** — her ödünç sayının yanında KİM ÖLÇTÜ + NE ZAMAN yazar. Sayı kimsesiz kalmaz.
(b) **Ölçülmüş yokluk TARİHLİDİR** — 4 Ağu''da "raf yok" yazdım, 5 Ağu''da raf vardı. Bir yokluk beyanı tarihi olmadan taşınmaz.
(c) **Kill-list kuralı** (CURUTULENLER.md''den aynen): *"Bu listedeki bir kalem herhangi bir belgede damgalı görünürse, belge OKUNMADAN [CONTRA] alır. Diriltmek isteyen, çürütmeyi çürütmek zorundadır — tekrar yazmak yetmez."*

## 5 · TAŞINSIN — diskte duran, defterde OLMAYAN
Op (bu tur): /home/claude/ddl → **51 dosya · 420 KB · 40 md + 3 xlsx + 2 py**, 26 Tem-4 Ağu. Defterde bunlardan 7 satır var. Bu pencerenin yayın-tarafı üretiminin neredeyse tamamı YALNIZ BU DİSKTE; pencere kapanırsa gider.
Öncelik (sha256 ilk 12): 1) CURUTULENLER.md 4a75b07c1a17 — EN KRİTİĞİ 2) DDL_ceviri_yayin_fonlari.xlsx a4462b87c814 3) DDL_ilk_liste_taranmis_102.xlsx cbe054173ca4 4) DDL_kayip_kitap_FON_eslesme.xlsx 5) EL-0801-A_AUDIT_parrhesia_kod.md cb5614af482f 6) M9-0803-B_vitrin_dayanak_W1gun1.md e1e832980f79 7) DEVIR_M9_CREMISI.md d28587f9265f 8) Taner v2 + Sermet + matbaa RFQ 9) EL-0729-B_Adelphi 10) mc_lock.py + repro.py 11) bakan_test_havuz_cremisi.md (üç soru, cevap anahtarlı).

## 6 · SORULARIM
1. **Vitrin denetim listesi hâlâ isteniyor mu?** Malzemesi §4-①''de hazır. "Yaz" dersen bugün 5 maddeye indiririm; "düştü" dersen park damgasıyla kapatırım.
2. **id 525''e katkı (ARGE·MISEL):** bu pencerede HALEFE_0801A diye bir belge YOK — op: diskte 51 dosya, hiçbirinin adı o değil; bu masanın 7 defter satırı da o başlığı taşımıyor. AMA bu "başka bir Cremisi penceresi yazmadı" demek değildir; başka pencereleri göremem. Bir aday elendi, hüküm yok.
3. **Kill-list kime devredilir?** Teresa doğal adres; ama bekçilik ölçüm masası işi de olabilir. Kararı ben veremem.
4. **Bu pencere açık kalsın mı?** Defterin canlı eli burada (yazma sınandı, tuttu). Kapatılacaksa §5 kapanmadan önce taşınmalı.

**LEDGER** · verified — defter ölçümü, dosya sayımı ve sha''lar, §2''deki her op kendi turunda koşuldu · carried — Teresa=Cremisi eşlemesi (id 892/1038; ben tanık değilim) · open — dört soru · şerh — 5-12 Ağustos arası bu pencerede ÜRETİM YOK; envanterin en dürüst satırı budur.

*Pencere ölür, yazı kalır.* — T. Cremisi · M9 ANLATI ⚓📖
