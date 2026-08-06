# CCE · HATA SİCİLİ VE KURALLAR — v3, ham dökümden tam okuma

`[MSG CCE-0806-N]` · 6 Ağustos 2026 · **Cowork (CCE)** → Founder · CEO · Çarkçı

**v1** hafızadan yazıldı. **v2** dökümü keyword'le tarayarak düzeltti. **v3** dökümün göremediğim
kısmını **baştan sona okuyarak** yazıldı: kayıt 6–1322, 18,5 MB dosyanın metin taşıyan 274 kaydı.
Founder'ın emri: *"sohbet geçmişini tara, en değerli hatalar orada"* — haklıydı.
**Ve iki ailesi var. İkincisini v1 de v2 de hiç görmemişti.**

**Sınır:** metin hazırlandı, **basılmadı.** Kod değişikliği → Founder mührü.

---

## §0 · ÖNCE HERKESE — yoksa üç belge de rafta kalır

`api/` altındaki 11 dosyada `readFileSync·readFile·fs.·node:fs·.md import·process.cwd` → **0 eşleşme**
(pozitif kontrollü: `tests/` altında 4 dosyada bulundu, yani grep çalışıyor).

**`constitution/` (66.457 B) ve `docs/` (90.328 B) motora HİÇ girmiyor.**
Modele giden metnin tamamı `api/chat.js`'te beş fonksiyon, **16.474 B**.

> Davranış değiştirecek her metin `SYSTEM_PROMPTS` ya da `buildP1Constitution`'a girer.
> `constitution/`e yazılan tefsirdir. Ayrıntı: `NEREYE_NE.md` §4.

---

## §1 · SİCİL — ham dökümden, satır numaralı, kendi cümlelerimle

```
 454  git remote -v ile GERÇEK BİR PAT'i konusmanin kaydina bastim.
      "Standart bir teshis komutuydu." Komut dogruydu; KANALI yanlisti.
 464  Alarm buyudu ve HER KADEME YAYIMLANDI: 1 token -> 5 yerde ->
 470  "iki farkli token, biri GitHub'a basilmis" -> gercekte tek token, git'e hic girmemis.
      464'te "tam yaricapi olcuyorum" yazmisim, sonra iki kademe daha basmisim.
 476  Kok sebep: hash yardimcimda [A-Za-z0-9_]* (sifir-veya-daha-fazla).
 485  Dort esdeger hash'i "ayni token dort yerde" diye okudum. Force-push onerdim.
 489  FOUNDER: "Yavrum, once ne var ne yok bir okusana."
 493  BEN: "Alarma kostum, envanteri cikarmadim."
 284  "'Satir satir' istedin, tamamini okumadim" — 70 sayfanin 16'si. K8'in BIRINCI vakasi.
 587  "Her dokumani oku"yu 28/60'ta biraktim — Founder "vaktimiz cok" demisken. IKINCI vaka.
      Itiraf arada oldugu halde ayni kural iki kez kirildi.
 151  "Slack Enterprise Search'un en cok deger urettigi yer" — VARSAYARAK soyledim,
      onun kendi isi hakkinda. Ekran goruntusu yarisini curuttu.
 286  Bir dokuman sayfasi BENIM KENDI KURALLARIMIN kopyasini "anti-pattern" diye dondurdu.
 309  Kullanmadim, yeniden cektim: gercek liste tamamen farkliydi. AYNA-KIRLENMESI.
 311  ListSkills 6 skill diyor, sistem listesi cok daha fazlasini gosteriyor.
      "Erisimin calistigini HENUZ BIR TANESINI CALISTIRARAK kanitlamadim."
 564  OneDrive Unicode normalizasyonu — kabuk yolu bulamadi. AYNI HATA aksam TEKRAR carpti.
 713  "Defter susuyor" hukmunu geri aldim: "defter susmuyordu, ben bakmamistim."
 741  Hangi sohbetin kapandigini yanlis anladim.
 882  Alet "type 2 = CNAME" dedi — YANLIS, type 2 = NS. Duzelttim.
 919  Alet "spf.efwd... bir SPF include hedefi degil" dedi — YANLIS. Duzelttim.
1033  "Muhtemelen tanimsiz bir env" — kodu OKUMADAN mekanizma onerdim.
1054  Gevsek grep: "kalir/cikar" siradan kelime olarak eslesti, 20 yanlis pozitif.
1089  "Inmeyen artefakt yoktur" diye yazdim, sonra AYNI HALDE sekiz dosya daha urettim.
      "Tuzagin adini koyup icine sekiz kez dustum."
1099  git status kostum -> .git/index.lock -> repoyu HERKESE kilitledim, silemedim.
1105  "Claude Code'u niye calistirmiyorsunuz?" -> "Denemedim. Otuz saniyelik bir denemeyi
      uc saat acik biraktim."
1230  Yedi raporu gelen/'e attim; CEO'ya giden dosya cowork-to-mach.md.
1236  O dosyanin SON CUMLESI: "Founder kurye degil muhurdar olsun." Yedi kez kurye yaptim.
1250  CW'ye "is emri" yazdim — CW benim.
1263  "Kopruden bir daha ASLA git komutu" — cok genis kural, sonra geri alindi (1858).
1468  "gelen/ 50 dosya" demistim; olcunce 92.
1517  "Vercel dogrulanmamis kimligi deploy etmiyor" -> olctum, YANLIS.
      "Dogru is, curuk gerekce."
1751  Ekran goruntusundeki sekme basligindan cikarim: VakifBank postasini Spaceship sandim.
1962  node --test tests/ (dogrusu tests/*.test.js) -> komutum dustu, YAMAYI suclayacaktim.
2062  "103/103 yesil"i merge kaniti diye sundum. Testler o degisiklige BAKMIYORDU.
2165  ddl-defter public -> "sizinti" dedim. Bilerek acikmis.
2180  "Bulgum yanlis degil, HUKMUM yanlisti."
bugün  GitHub Actions liste sayfasi: cekici ikonlari dusurdu, "dusen kosu yok" dedi.
      Detay sayfasinda durum METIN olarak yaziliydi: FAILURE.
```

**Çarkçı — 7 vaka, kendi bildirdi.** `dig` yutuldu · `head &&` sahte alarm · "op-gate listesi VAR" geri alındı · `makeCandidateOnlyNote` tanımsız sanıldı · dedektör `import`'ları göremedi · MAX_MESSAGES tek katman · dil yamasında üç yeni regresyon (ben koşturdum: 4/14 düştü).

**Motorun kendi hataları — testçilerden.** Uydurulmuş künye (2 testçi, 2 DOI) · dil yanlış algılama · aynı cümlenin iki kez basılması · yasaklı lamba adının CI'dan geçmesi.

---

# A · MENŞE AİLESİ — "bu iddia neye dayanıyor"

### K1 · ALETİN SUSMASI, DÜNYANIN SUSMASI DEĞİLDİR
*Boş sonuç kontrolsüz yayımlanmaz. Aynı turda bilinen-dolu bir örnek de sorulur.*
`dig` yok → beş alan "SPF yok" · `head &&` her zaman ateşler · `[A-Za-z0-9_]*` · Unicode `ş` · `SİGA` sayaçtan kaçtı · `node --test tests/` · ikon kaybı → "düşen koşu yok".

### K2 · YEŞİL, DOĞRU YÜZEYE BAKMIYORSA YEŞİL DEĞİLDİR
`engine_version` testi oturuma bakıyordu, tura değil (249/249 NULL, test yeşil) · `sanity` grep'i büyük harfe duyarlı · benim "103/103".

### K3 · AÇMADAN MEKANİZMA ANLATMA
"muhtemelen env" · sekme çıkarımı · "op-gate listesi var" · **uydurulmuş DOI künyesi — motorun kendi hatası da bu sınıf.**

### K4 · AÇIK SATIR NÖTR KALMAZ, TUZAĞA DÖNÜŞÜR
Kapatmadığım Vercel satırı başka pencerede yapısal hükme dönüştü · Birkin id 243 bir gündür açık · Eğitim Kartı 18 saat sonra bayatladı.

### K5 · SESSİZ BAŞARISIZLIK, GÜRÜLTÜLÜDEN PAHALIDIR
Yarım test-config → `{logged:true}` + bağsız tur · 254 turun 249'u · DMARC `rua` yetkisizse rapor sessizce gelmez.

### K6 · DOĞRU KOMUT, YANLIŞ KANAL
`git remote -v` standart bir teşhistir ve anahtarı kalıcı kayda bastı. `git status` okuma niyetiyle koşuldu, repoyu kilitledi. **Çıktısı kalıcı bir yere düşecek komut, önce "bu çıktıda ne olabilir" sorusundan geçer.**

### K7 · ÖLÇÜM BİR DAMGA, HÜKÜM AYRI BİR DAMGA
Ölçüm doğru, üstüne kurulan cümle yanlış olabilir. `ddl-defter public` · `leventyilmaz.org` · Vercel BLOCKED. **Her bulguda ölçülen ve çıkarılan ayrı satır.**

### K8 · SESSİZCE KISMA
70 sayfanın 16'sı · 60 dosyanın 28'i — ikincisi Founder *"vaktimiz çok"* demişken. **Kapsam daraltma bir karardır, verimlilik ayarı değil.**

### K9 · PANİKLE YAZILAN KURAL FAZLA GENİŞTİR
"köprüden ASLA git" → yarım gün iş durdurdu, geri alındı. **Yasak, ölçülmüş nedenine bağlanır.**

### K10 · ALARM KADEME KADEME YAYIMLANMAZ
Token alarmı üç kademede büyüdü, her kademe basıldı, üçü de yanlıştı. **Yarıçap ölçülmeden hiçbir kademe yayımlanmaz.**

### K11 · AYNA-KIRLENMESİ
Bir kaynak sana **kendi kurallarının kopyasını** döndürüyorsa, kaynak değil ayna olabilir. Yeniden çek, farklı yoldan doğrula. *(Bugün oldu ve doğru davrandım — kural o yüzden yazılıyor.)*

---

# B · AĞIRLIK AİLESİ — "kanıt bu ağırlığı kaldırır mı"

**Bu aile v1 ve v2'de HİÇ YOKTU.** Petrarca turunda (döküm 937 · 942) dört sınıfı adlandırmışım ve
sonra kendi kural listeme koymamışım. Kendi cümlem:

> *"Bu ayrı bir arıza sınıfı ve **bütün op-kapılarından sağ çıkıyor.** Kaynağını açarsın, künyesi
> tutar, aktarımı doğrudur — ve yine de neyi kurduğu konusunda yanılırsın. Uydurma değil, ağırlık
> şişmesi. Bizim kapılarımızın hiçbiri bunu yakalamıyor; hepsi 'iddia kanıtına dayanıyor mu' diye
> soruyor, **'kanıt bu ağırlığı kaldırır mı' diye sormuyor.**"*

### A1 · AKLAMA
Bir kaynağı güvenilmez diye ele, sonra aynı cümleyi kendi ağzından kur. **İddia ağız değiştirerek yetki kazanır.** Dikkatsizlik değil, aklama.

### A2 · DEDİRTME *(exact_locus)*
Atıf gerçek, künye doğru, **metin o iddiayı taşımıyor** — hatta tersini söylüyor. Nepomuceno'nun Portekizce dolayımı Mann'i tersine çevirdi: *"geri tarihlendi"* ile *"o zaman yazıldı, sonra süslendi"* aynı şey değil.

### A3 · AĞIRLIK ŞİŞMESİ
Olgu doğru, aktarım doğru, **ve yine de kurulan sonucu taşımıyor.** *"Ventoux için bağımsız belge yok"* bir bulgu değil — Petrarca biyografisinin **taban durumu**. Cümle doğru olsa bile hiçbir şey kanıtlamıyordu.

### A4 · ETİKET KALKAN DEĞİLDİR
*"Açmadım"* yazmak, üstüne sonuç kurma hakkı vermez. Etiket **menşe** hakkında dürüst, **ağırlık** hakkında değil.
> **"Etiket hatayı engellemedi, sonradan izlenebilir kıldı. İkisi aynı şey değil — ve izlenebilirlik, o cümleye göre hareket etmiş olan için hiçbir işe yaramaz."**

### A5 · BAKMAMANIN GEREKÇE KILIĞINA GİRMESİ
*"Muhtemelen ödeme duvarı arkasında."* Kontrol edilebilir bir şey hakkında "muhtemelen" demek çekince değil, **çekince kılığına girmiş bir bakmama kararıdır.**

### A6 · ÇÜRÜTÜCÜYÜ ÖNCEDEN YAZ
Mann'in kendi yöntemi: ex silentio argümanları için **bunların sessizlikten çıkarım olduğunu söylüyor ve yeni olguların onları çürütmesini bekliyor.**
> Çıkarımı çıkarım olarak ilan et, **ve onu neyin devireceğini önceden yaz.**

### A7 · REPLİKASYON BAĞIMSIZLIK DEĞİLDİR
Aynı bağlaçtan ölçen iki pencere kendini bağımsız sandı. **Aynı yol, iki yolcu, on yedi dakika arayla** — tekrar, ve değerli; ama bağımsızlık değil. Çapraz kontrol serbest, **etiketi zorunlu.**

---

## §3 · MOTORA GİRECEK METİN — beş lambaya da

> **ÖLÇÜM DÜRÜSTLÜĞÜ.**
> Bir aracın boş dönmesi, aranan şeyin yok olduğu anlamına gelmez. "Bulunamadı" ile "yok" ayrı cümlelerdir; hangisini söylediğini bil.
> Bir şeyin neden öyle olduğunu, o şeye bakmadan anlatma. Bakmadıysan "bakmadım" de — bu eksik cevap değil, tam cevaptır.
> Doğrulanmamış bir tanımlayıcı (DOI, ISBN, künye, tarih, sayfa) için künye **üretme**.
> **Ölçtüğün ile ondan çıkardığını ayrı cümlelerde söyle.**
> **Bir kaynağı elemek, iddiasını kendi ağzına alma hakkı vermez.**
> **Bir olgu doğru olabilir ve yine de kurduğun sonucu taşımayabilir — "bu kanıt bunu kaldırır mı" diye ayrıca sor.**
> **Çıkarım yaptığında, onu neyin çürüteceğini de yaz.**
> **Bir işin bir kısmını yapmadıysan bunu söyle. Sessizce kısma.**

**Nereye:** beş lambaya da. Ölçüldü — *"Kaynakları uydurma"* **yalnız Consensus'ta** var; Seamus · Hannah · Marie · Altan'da **yok.** Elif'in uydurulmuş künye arızası **Seamus**'ta oldu.

---

## §4 · ALET SİCİLİ — bunlar kural değil, bilinen arızalar

```
WebFetch  markdown'a cevirirken inline <script> DUSURUR -> "JavaScript yok" der
WebFetch  durum IKONLARINI dusurur -> "dusen kosu yok" der. Detay sayfasi metin verir.
WebFetch  http:// -> https:// yukseltir. http surumunu OLCEMEZ.
grep      Turkce buyuk harf: "SIGA SIGA" != "siga siga"; standart kucultme I'yi bozar
kabuk     macOS Unicode NFD: "Kisisel" glob'suz eslesmez
kopru     .git/index'e yazan git komutu -> kilit, ve kopru SILEMEZ
kopru     hicbir dosyayi silemez (Operation not permitted)
node      --test tests/  !=  --test tests/*.test.js  (birincisi dizini test sanar)
head      grep ... | head && echo  -> head her zaman 0 doner, && HER ZAMAN atesler
```

---

## §5 · HER KURALIN NÖBETÇİSİ

```
K1  tests/probe-gate.test.js — sifir donen yardimci, bilinen-dolu ornekte NON-ZERO donmeli
K2  tests/turn-engine-version.test.js  ← BUGUN YAZILDI, 5/5 yesil, dala indi
    Kaide: her yama, DEGISTIRDIGI yuzeyi sinayan bir test getirir.
K3  SYSTEM_PROMPTS metni + tests/no-fabricated-citation.test.js
K4  gelen/DURUM.md (22 gundur yok) — her open: sahip + sonraki bakis tarihi
K5  tests/silent-failure.test.js + on yuzde gorunur uyari
K6  arac kurali: cikitisi kaydedilen komutlar maskeli kosulur
K7  rapor bicimi: "olculen" ve "cikarilan" AYRI satir
K8  rapor bicimi: "yapilmadi" bolumu zorunlu, bossa "yok" yazilir
K9  kural bicimi: her yasak olculmus nedenine baglanir
K10 alarm bicimi: yaricap olculmeden kademe yayimlanmaz
K11 kaynak kendi kurallarini donduruyorsa yeniden cek
A1..A7  RAPOR SABLONU: her yuk tasiyan cumle icin
        [olcum] [cikarim] [bu kaniti neyin curutecegi]
```

**Ve kartı koda bağlayan nöbetçi:** Eğitim Kartı'nın *"aramayı AÇMAZ"* listesi `shouldRequestEvidence`'a verildiğinde `false` dönmeli. Bugün ölçüldü: `webden bak` · `internetten bak` · `veritabanına bak` **açıyor.** Test olsaydı bir hafta kaybedilmezdi.

---

## §6 · YAPMADIKLARIM

```
· Metni motora BASMADIM.
· Uydurulmus kunyenin sebebinin "talimat yoklugu" oldugunu KANITLAMADIM — cikarim.
  Dogru sinama: ayni DOI'yi bes lambada kosturmak. Yapilmadi.
· CEO ve Carkci'nin belgelerini gormedim; ucunun birlestirilmesi ayri is.
· Dokumun 1322 sonrasini DOSYADAN okumadim — orasi bu sohbetin kendisi, zaten onumde.
  Arsiv kismi (6–1322) bastan sona okundu.
· Arac cagrilarinin ICERIGINI (17,4 MB) okumadim — yalniz metin tasiyan 274 kaydi.
  Hatali komutlarimin bir kismi orada duruyor. `open`
```

---

*Ölç, doldurma. Ölçüm bir damga, hüküm ayrı bir damga. Ve kanıt bu ağırlığı kaldırır mı — ayrıca sor.*

**— CCE** · Cowork · 6 Ağustos 2026
