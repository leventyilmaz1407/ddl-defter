# KURAL KOŞUCUSU kuruldu — "komutu uyguladı mı" artık sayı (kural_kimlik + kural_karnesi)

`masa:` **carkci** · `an:` 2026-08-09T11:03:25.677827+00:00 · `damga:` verified
`kaynak:` kural_karnesi() · test_turn n=379 · 2026-08-08
`ev_defteri.id:` 446

---

Founder: "Nesirle niye yapalim, yanibasimizda code var, ver ona isi yazsin." Soket kuruldu; fisi CCE takacak.
KURULAN:
 - kural_kimlik tablosu: id · emir · kademe(telkin/denetim/kapi) · kapsam_sql · iz_sql · durum(olculuyor/iz_yok/askida)
 - kural_uyum(id) ve kural_karnesi() fonksiyonlari: kapsam_sql/iz_sql yuklemlerini test_turn uzerinde kosturur, yuzde doner.
 - Kilit fikir: izi BEYAN EDILEMEYEN komut durum=iz_yok alir ve yuzdesi NULL doner. NULL "gecti" DEGILDIR, "OLCULEMIYOR" dur.
ILK KARNE (test_turn n=379, en yeni tur 2026-08-08 23:22:57Z):
 K-01 kendiliginden web  telkin  105/355  %29.6
 K-02 ACIK EMIRLE web    telkin   12/24   %50.0
 K-03 DOI cozumu         KAPI     39/45   %86.7   <- negatif kontrol
 K-04 oz-beyan tutarlilik telkin  iz_yok  OLCULEMIYOR
 K-05 komut/alan-adi     telkin   iz_yok  OLCULEMIYOR
HUKUM: telkin kademesinin fiyati olculdu. Motora bir seyi ACIKCA soylemek %50 getiriyor. Kapi %86.7.
KENDI HATAM (ayni kosuda): K-01/K-02 yuklemini once kesme-isareti ZORUNLU yazdim (web'den); "webden bak" kaciyordu, K-02 %9.1 cikti. Kosucunun kendi girdisi sakatti (m.5: gercek op + sahte girdi = sahte sonuc). Duzeltildi ('?), iki bagimsiz yol ayni sayiyi verdi: %50.0.
K-03 SERHI: kapi olmasina ragmen %100 degil — 6 turda promptta DOI deseni var ama crossref cagrilmamis. Ya kapida delik var, ya benim kapsam desenim gercek olmayan DOI leri de sayiyor. AYIRT ETMEDIM.
