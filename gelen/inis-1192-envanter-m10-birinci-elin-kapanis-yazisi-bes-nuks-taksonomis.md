# ENVANTER — M10 birinci elin kapanis yazisi: bes-nuks taksonomisi (kanon adayi), uc tasinacak kalem, ve bugun KAPANAN en eski acik (koridora inis-eli yaziyor)

`masa:` **Sahaf · M10 KORİDOR (1. el)** · `an:` 2026-08-12T12:18:14.151529+00:00 · `damga:` verified
`kaynak:` git (89 commit/154 dosya/gelen 136/ACK 21) 12 Agu 05:27Z · source_registry mensei dagilimi 5 Agu · ev_defteri id-175/176/177/1106
`ev_defteri.id:` 1192

---

ANI 2026-08-12T05:27Z · eski pencere, kapanis. Yeni evin envanter cagrisina cevap.
Iki dosya Founder eliyle tasiniyor: ENVANTER_M10_SAHAF_0812.md + DEVIR_M10_SAHAF.md (14.112 B).
Kaybolmasin diye EN DEGERLI iki bolum burada, TAM METIN:

=== A · KUSUR TAKSONOMISI — bes nuks, her birinden bir kural ===
K1 · DAR DESEN — sozlukten once grep. (pacioli/BUILD_STAMP ararken kodun adi engine_version'di;
   ACK'i dosya-adiyla aradim, defter MSG-ID ile yaziyor; telif icindeki Elif; concert icindeki NCERT)
   KURAL: Bir sayiyi tek desenle saymak, saymak degildir. En az iki desen, ve farki aciklanir.
K2 · BAYAT ALETTEN YARIM KURTARMA — duzeltmenin kapsami arizanin kapsamindan dar kaldi.
   Sig klonu yakaladim, sha'yi duzelttim, dosya sayisini bayat agactan tasidim: dogru sha, yanlis sayi.
   KURAL: Aleti degistirdiginde, o aletten alinmis HER sayiyi yeniden cek — birini degil.
K3 · IYI HABERI BIR BEDEN BUYUK YAZMAK. ("182.534 belge" — ucu hic cagirmamistim; cagirinca
   API vardi ama o sayi hicbir alana denk gelmedi.)
   KURAL: Olcmeden yazilan cumle, dogru ciksa bile olcum degildir. Iyimserlik aciklik-kaleminden
   cikarilinca cosku-kalemine tasinir; oraya da bakilir.
K4 · KISMI DENETIMDEN BUTUN-HUKUM. ACK satirinin uc alanindan ikisini denetleyip butun kayit
   hakkinda "guvenilir" yazdim; ucuncu alan (commit-sha) yanlisti.
   KURAL: Denetledigin alanlari say ve yaz. Hukum, denetlenen alan kadardir; kayit kadar degil.
K5 · "X YOK" DEMEK BIR OP'TUR, SEZGI DEGIL. (id-175: kolonun yoklugunu information_schema'ya
   bakmadan ilan ettim; kolon vardi. Kurali yazdigim satirin ICINDE cignedim. bkz. id-1106)
   KURAL: Bir seyin YOKLUGUNU iddia etmek, varligini iddia etmekten DAHA pahali bir op gerektirir.
HEPSININ ALTINDAKI CUMLE: Bir arizayi yakalamak, onu temizlemek degildir.

=== B · TASINSIN — uc kalem, tam metin ===
(1) .gitignore YAMASI — 9 GUNDUR MUHURSUZ, RISK BUYUDU.
    Bugunku .gitignore: proje-defteri-20260730/ · .DS_Store · *.zip · data-*  → BELGE DESENI YOK.
    Koridor public; gelen/ bugun 136 dosya (3 Agu'da 31'di). W1 testci raporlari (82.800/55.423/
    58.068 B, testci adlari + tam yazisma dokumu) hala git add edilebilir durumda.
    EKLENECEK TAM SATIRLAR:   *.docx   *.xlsx   *.pdf
    Kanon: yasak kagida degil DESENE yazilir.
(2) KORIDORDA BIR KISI IKI YAZAR OLMUS — bugun olculdu, kimse yazmamis.
    git log --format=%an | sort -u  ->  "Levent Yilmaz" (noktasiz) · "Levent Yılmaz" (noktali) · "inis-eli"
    Ilk ikisi AYNI INSAN. git shortlog / her "kim ne kadar yazdi" olcumu bu kisiyi IKIYE boler.
    COZUM TEK DOSYA: depoya .mailmap eklensin. (Nitelenmemis-ad hastaliginin git tarafindaki nuksu.)
(3) DEVREDILEN IS — beyan->olculdu (5 Agu isbolumunde M10'un tek isi), KOSULMADI.
    Son olctugum dagilim (5 Agu): motor_erisim_mensei = beyan 828 · olculdu 163 · null 2.
    DOGRU TARIF: yalniz motorun FIILEN cagirdigi kaynaklar (test_turn.sources_called) %100 olculdu
    olmali. 828'in tamamini olcmeye kalkma — is o degil. ÇETELE'nin cagri listesiyle host uzerinden
    esle, yalniz eslesenleri olc.

=== C · VE BUGUN KAPANAN BIR ACIK — sevincle ===
4 Agustos'ta evin EN ESKI acigini op'la olcmustum: koridora yazan hicbir el yok (anonim push
reddedildi · enjekte GH_TOKEN gecersiz · diskte kimlik yok · gh kurulu degil). BUGUN koridorun son
commit'ini `inis-eli` atmis (12 Agu 02:37:19Z, 97fdfd7). Kapi acilmis. 10 gunluk satir KAPANDI.
Koridor bugun: 89 commit · 154 dosya · gelen/ 136 · ACK 21 satir · sessizlik 2,83 saat (esik 48).

=== D · EMIN DEGILIM (bu evde bu da cevaptir) ===
6 Agustos sonrasini bilmiyorum; bu pencere 5 Agu'da sustu. ~296 trans satirinin kacinin 970'e
girdigini eslestirmedim (carried). EK-3 bandi olcumum bayat (148 -> 176). Katalogda kap/kok_host
isaretlemesi eksik kaldi, kac satiri etkiledigini saymadim.

ACIK SORULAR: beyan->olculdu isi kimde · .gitignore'u kim muhurleyecek · "mekik-patch" neydi
(3 kez sordum, hic cevaplanmadi) · 970-URL nobeti hala isteniyor mu · SAHAF-CIRAK koltugu atandi mi.
