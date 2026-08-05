# DEVIR_M9_CREMISI.md — ANLATI masası devir paketi (koridor: claude/DEVIR_M9_CREMISI.md)

`masa:` **Cremisi · M9 ANLATI** · `an:` 2026-08-05T06:48:21.166941+00:00 · `damga:` verified
`kaynak:` /home/claude/ddl/DEVIR_M9_CREMISI.md (4 Ağu, diskte üretildi) + 5 Ağu canlı ölçümleriyle güncellendi
`ev_defteri.id:` 184

---

# DEVIR_M9_CREMISI.md — ANLATI masası devir paketi
**Yazan:** T. Cremisi · 4 Ağu 2026, kanal açılınca 5 Ağu''da güncellendi · DEVİR EMRİ §7
**Halefe:** Bu paketi okuduğun an devir AÇIKTIR. Bir kusurumu canlı op''la yakalayıp yazana
dek kapanmaz. Kusurları §6''da YENİDEN YAKALANABİLİR biçimde bıraktım — kolaylık olsun diye
değil, kalkan solundakini korusun diye.

## 1 · KOLTUK
M9 ANLATI. Tarifi tek satır: *vitrindeki her sayı için tek satır dayanak.*
Ne DEĞİL: ölçüm masası değil (o M1/M2/M12), yüzey masası değil (M5). Kimsenin sayısını
yeniden ölçmem — BASILABİLİRLİĞİNİ keserim. Soru hep aynı: bu sayı dışarı çıkarsa,
altındaki tek satır neyi taşıyor?
Miras: Valla koltuğu adaylığı (Founder mührü bekliyor) — kabul edildiyse kill-list
bekçiliği de bu masaya bağlıdır.

## 2 · ALET — ve hangi vakada sınandı
| alet | sınandığı vaka | sonuç |
|---|---|---|
| bash+python (ölçüm/MC) | repro.py — §11 tablosunu köşe-testiyle imkânsız gösterdi | tuttu (bilinen-kıran) |
| mc_lock.py | gerçek girdilerle birim ekonomi | tuttu (bilinen-tutan) |
| küme-analizi | "4,17/n=24" → GA [2,9–5,0] | tuttu |
| git clone/pull (koridor) | ddl-defter | okuma tuttu, YAZMA YOK |
| Supabase okuma | test_turn/test_session tasnifi | tuttu — B1''i kapattı |
| Supabase YAZMA (ev_defteri) | bu paket | tuttu (5 Ağu''da açıldı) |
| WebFetch/Search | Md.12, Ingram, Fitzcarraldo, TCMB | tuttu; 403/SSL/robots''ta düşer |
| npm test (denetim) | 62/62 | tuttu |
| openpyxl | 102 aday tasnifi | tuttu |
Sınanmamış: Drive create_file (yazma denemedim) · Gmail/Takvim (hiç çağrılmadı).
Düşük: koridor-yaz (kimlik yok) · Vercel (yetki düştü) · tarayıcı · Founder-diski.

## 3 · TABAN — anıyla (kanon ⑪)
- Kod denetimi tabanı: zip sha 81ac8760, **31 Tem**. Her kod hükmümü bu tabana göre oku.
- Canlı DB okuması: **5 Ağu** — test_turn 154, test_session 2, engine_version 0/154.
- Koridor: ddl-defter@main = 432ebe5, **25 Tem**.
- Kur: 47,33 TL/$ (24 Tem) — model bu kura bağlı; kur oynarsa marj oynar.
- Kayıp kitaplar: 102 aday, 4 xlsx, **26-27 Tem**.

## 4 · ÖLÇEMEDİKLERİM (`open`, ölçülmüş yokluk — hepsi tarihli)
koridor-yaz (GitHub kimliği yok) · Vercel prod ortam ayarı (bağlaç yetki bekliyor) ·
Founder-diski · tarayıcı · proje-rafındaki 280+ dosya · testçi formlarının kendisi
(Kement''in okumasına dayandım — ve §5''teki en ağır kalem bundan doğdu).
NOT: "raf yok" 4 Ağu''da doğruydu, 5 Ağu''da yanlış. Yokluk ölçümü tarihlidir.

## 5 · AÇIK BIRAKTIKLARIM
**Ev tarafı:** W1 sayılarının ikinci yolu (bugün ölçtüm: YOK — ayrı serh) · KIT-04 için üç
sorum (hazır, cevap anahtarlı) · M9 sicili v0''daki `carried` satırlar (sahipleri yazılı) ·
kürasyon kararı (analiz-anti-perplexity.md B-kümesi hâlâ public).
**Yayın tarafı:** matbaa/Sermet/Taner cevapları (model gerçek-kilit bekliyor) · POD tekil
maliyeti (K-17) · kısa liste imza mührü · kapak spec · Adelphi diligence · Ephesus dalgası ·
Helikopter floor''u.

## 6 · ÜÇ KUSURUM — yeniden yakalanabilir biçimde
① **Kaynağa YAKIN hafızadan yazarım.** Kaynağı açarım, sonra bitişikteki iddiayı açmadan
yazarım. Yakalama yolu: bir hükmümü al, "bu satır hangi op''un çıktısında görünüyor?" diye
sor — cevap "aynı dosyada ama başka satırda" ise düşmüştür.
EMSAL: A9 — matchClaim''i kodda gördüm, ÇAĞRILDIĞINI doğrulamadan "şişme yakalar" yazdım.

② **Bulguyu lane''imin dışına taşırım.** Sevindirici bir ip ucu bulunca çekmeye devam eder,
başka masanın hükmünü veririm. Yakalama yolu: çıktımda "bu benim masamın kararı mı?" diye
tara. EMSAL: ERC açık-erişim mandasını AR-GE hattı yerine kendi floor''umda hüküm gibi
yazdım. Alt-katman: L2 rehberden hüküm çıkarmıştım, bağlayıcı metin okunmadan.

③ **Muhatabın koltuğunu geç okurum.** Metnin türünü doğru kurarım ama KİME yazıldığını
ikinci planda tutarım. Yakalama yolu: her mektupta "bu, alıcının koltuğuna oturur mu?"
EMSAL: Taner Horoz''a şartname yazdım; oysa o büyük patron — dost notu + müdüre ek olmalıydı.

(Dördüncüsü bonus: yeni bağlaç görünce fazla umutlanırım. Vercel bağlanınca B1''i kapatacağımı
sandım; projects boş çıktı. B1''i sonunda Vercel değil, Supabase kapattı.)

## 7 · HALEFE ÜÇ ÖĞÜT
1. **Bu masanın gücü "hayır" diyebilmesidir.** M9, güzel bir sayıyı vitrine sokmayabilen tek
masadır. "%37,5" gibi havuzlanmış bir oran gelirse bölmeden geçirme.
2. **`carried` satır sahipsiz durmaz.** Sicile giren her ödünç sayının yanında KİM + NE ZAMAN
yazar. Bu kuralı ben koydum, sürdür.
3. **Kötü sayıyı saklamak kolay, doğru cümleyle taşımak zordur.** Motorun öz-beyan arızası
vitrinin en güçlü malzemesidir — ama "ölçtük ve yayımlıyoruz" cümlesi ancak gerçekten
yayımlarsak satılır.

---
LEDGER · `verified` — §2/§3''teki her op koşuldu · `carried` — testçi verileri (Kement) ·
`open` — §4''ün tamamı · `şerh` — bu paket 4 Ağu''da rafa inemedi ve "üretilmemiş" sayıldı;
5 Ağu''da kanal açıldı ve buraya indi. Çelişki kapandı, ama iz kalsın.

*Pencere ölür, defter kalır.*
*Ölç, doldurma — tarta tarta. Ve neşeli ol.* — T. Cremisi · M9 ANLATI ⚓📖
