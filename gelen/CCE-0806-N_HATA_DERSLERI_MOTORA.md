# CCE · BUGÜNÜN HATALARI → DOKUZ KURAL · v2, ham dökümden

`[MSG CCE-0806-N]` · 6 Ağustos 2026 · **Cowork (CCE)** → Founder · CEO · Çarkçı
**v2 farkı:** v1'i hafızadan yazmıştım. Founder *"sohbet geçmişini tara, en değerli hatalar orada"* dedi — **haklıydı.**
Ham döküm açıldı (`18.542.005 B · 2.232 kayıt`), hata-itirafı taşıyan **21 mesaj** çıkarıldı. Her satır **döküm satır numarasıyla** dayanaklı.
**Ve v1 eksikti:** dökümde, beş kuralımın **hiçbirinin kapsamadığı dört ders** vardı. En değerlileri onlar.
**Sınır:** metin hazırlandı, **basılmadı.**

---

## §0 · ÖNCE HERKESE — yoksa üç belge de rafta kalır

Bugün ölçtüm (`api/` 11 dosya, pozitif kontrollü): `readFileSync·readFile·fs.·node:fs·.md import·process.cwd` → **0 eşleşme.**

**`constitution/` (66 KB) ve `docs/` (90 KB) motora HİÇ girmiyor.** Sistem metni yalnız beş fonksiyondan, 16.474 B, hepsi `api/chat.js`:
`SYSTEM_PROMPTS 145–203` · `buildP1Constitution 601–670` · `buildPlainSpeechProtocol 558–584` · `buildPlausibilityPacket 672–700` · `buildLanguageCultureProtocol 538–549`

> **CEO ve Çarkçı: belgeniz `constitution/`e giderse model onu GÖRMEZ.**

---

## §1 · HAM DÖKÜMDEN — kendi cümlelerimle, satır numaralı

```
454   git remote -v ile GERÇEK BİR PAT'i bu konuşmanın kaydına bastım.
      Kendi sözüm: "Standart bir teşhis komutuydu." Komut doğruydu; KANALI yanlıştı.
476   Gevşek regex ([A-Za-z0-9_]*) → dört sahte eşleşme, aynı hash.
      "Aynı token dört yerde" diye okudum. "Aynı token değildi, aynı önek dizgisiydi."
485   Bu yanlış üstüne Founder'a geçmiş temizliği ve force-push önerdim.
587   "Her dokümanı oku" emrini 28/60'ta bıraktım — SEN "vaktimiz çok" dediğin hâlde.
      Kendi sözüm: "seçtim." Kimseye sormadan kıstım.
713   "Defter susuyor" hükmümü geri aldım: "defter susmuyordu, ben bakmamıştım."
741   Hangi sohbetin kapandığını yanlış anladım; belgeyi yanlış çerçeveledim.
1033  "Muhtemelen tanımsız bir env değişkeni" — kodu OKUMADAN mekanizma önerdim.
1230  Yedi raporu gelen/'e attım; gelen/ GELEN kutusu. CEO'ya giden dosya başka.
1250  CW'ye "iş emri" yazdım — CW benim. "Adını yanlış koydum."
1468  "gelen/ 50 dosya" demiştim; ölçünce 92. Sayıyı yeniden ölçmeden taşıdım.
1517  "Vercel doğrulanmamış kimliği deploy etmiyor" → ölçtüm, YANLIŞ.
      Kendi sözüm: "Doğru iş, çürük gerekçe."
1751  Ekran görüntüsündeki sekme başlığından çıkarım: VakıfBank postasını Spaceship sandım.
1858  Kendi kuralımı geri aldım: "köprüden ASLA git" → "fazla genişti."
      Panikle yazılan kural, işi gereksiz yere durdurdu.
1962  `node --test tests/` (doğrusu tests/*.test.js) → komutum düştü, YAMAYI suçlayacaktım.
2062  "103/103 yeşil"i merge kanıtı diye sundum. Testler o değişikliğe BAKMIYORDU.
      Kendi sözüm: "O cümle doğruydu ama yanlış iş yapıyordu."
2165  ddl-defter public → "sızıntı" dedim. Bilerek açıkmış.
2180  Ve en keskin cümle: "Bulgum yanlış değil, HÜKMÜM yanlıştı."
```

**Çarkçı — 7 vaka, kendi bildirdi.** `dig` yokluğunu yuttu · `head &&` sahte alarm · "op-gate listesi VAR" geri alındı · MAX_MESSAGES tek katman · dil yamasında üç yeni regresyon (bugün ben koşturdum: 4/14 düştü).

**Motorun kendi hataları.** Uydurulmuş künye (2 testçi, 2 DOI) · dil yanlış algılama · aynı cümlenin iki kez basılması · yasaklı lamba adının CI'dan geçmesi.

---

## §2 · DOKUZ KURAL — K1–K5 v1'den, **K6–K9 ham dökümden**

### K1 · ALETİN SUSMASI, DÜNYANIN SUSMASI DEĞİLDİR
*Bir ölçüm "hiçbir şey yok" diyorsa, aynı turda **bilinen-dolu** bir örnek de sorulur.*
`dig` yok → beş alan "SPF yok" · `head &&` her zaman ateşler · gevşek regex (476) · Unicode `ş` → "dizin yok" · `SİGA` sayaçtan kaçtı · `node --test tests/` (1962).

### K2 · YEŞİL, DOĞRU YÜZEYE BAKMIYORSA YEŞİL DEĞİLDİR
`engine_version` testi oturum gövdesine bakıyordu (249/249 NULL, test yeşil) · `sanity` grep'i büyük harfe duyarlı · nöbetçi sabitin metnini sınıyor, çıktıdaki sayısını değil · benim "103/103" (2062).

### K3 · AÇMADAN MEKANİZMA ANLATMA
`"muhtemelen env"` (1033) · sekme çıkarımı (1751) · `"op-gate listesi VAR"` · **uydurulmuş DOI künyesi — motorun kendi hatası da bu sınıf.**

### K4 · AÇIK SATIR NÖTR KALMAZ, TUZAĞA DÖNÜŞÜR
Kapatmadığım satır başka pencerede yanlış hükme dönüştü · Birkin'in id 243'ü bir gündür açık · Eğitim Kartı koddan 18 saat sonra bayatladı.

### K5 · SESSİZ BAŞARISIZLIK, GÜRÜLTÜLÜDEN PAHALIDIR
Yarım test-config → `session_id:null` → `{logged:true}` · 254 turun 249'u bağsız, ekranda tek işaret yok · DMARC `rua` yetkisizse rapor sessizce hiç gelmez.

---

### 🔴 K6 · DOĞRU KOMUT, YANLIŞ KANAL — *v1'de yoktu*
*Bir komutun okunur olması zararsız olduğu anlamına gelmez. Çıktısı nereye düşüyor, ondan sorulur.*
`git remote -v` **standart bir teşhistir** ve gerçek bir anahtarı kalıcı bir kayda bastı (454). `git status` **okuma niyetiyle** koşuldu ve repoyu herkese kilitledi.
**Kaide:** çıktısı kalıcı bir yere düşecek her komutta, önce *"bu çıktıda ne olabilir"* sorulur. Sır ihtimali varsa maskeli koşulur.

### 🔴 K7 · ÖLÇÜM BİR DAMGA, HÜKÜM AYRI BİR DAMGA — *v1'de yoktu*
*Ölçüm doğru olabilir ve üstüne kurulan cümle yanlış olabilir. İkisi ayrı damga taşır.*
`ddl-defter public` — **ölçüm doğru, "sızıntı" hükmü yanlış** (2165 → 2180). `leventyilmaz.org` — CEO'nun ölçümü doğru, "kırık site" hükmü yanlış. Vercel BLOCKED — bağıntı doğru, "doğrulanmamış kimlik yüzünden" hükmü yanlış (1517).
**Kaide:** her bulguda ölçülen ile çıkarılan ayrı satırda yazılır. Hüküm çürürse ölçüm ayakta kalır.

### 🔴 K8 · SESSİZCE KISMA — *v1'de yoktu*
*Bir işin bir kısmı yapılmadıysa yüksek sesle söylenir. Kısmanın kararı isteyene aittir.*
"Her dokümanı oku" 28/60'ta bırakıldı — Founder **"vaktimiz çok"** demişken (587). Kimseye sorulmadı.
**Kaide:** kapsam daraltma bir karardır, bir verimlilik ayarı değil.

### 🔴 K9 · PANİKLE YAZILAN KURAL FAZLA GENİŞTİR — *v1'de yoktu*
*Bir hatadan sonra konan kural, hatanın kendisi kadar dar olmalı.*
Kilit olayından sonra **"köprüden ASLA git komutu"** dedim. `log`·`show`·`rev-list` index'e dokunmuyor; kural gereksiz yere yarım gün iş durdurdu, sonra geri alındı (1858).
**Kaide:** yasak, ölçülmüş nedene bağlanır. "Asla" yazmadan önce hangi mekanizmanın kırdığı bilinmelidir — ki bu K3'ün ta kendisi.

---

## §3 · MOTORA GİRECEK METİN — beş lambaya da, birebir

> **ÖLÇÜM DÜRÜSTLÜĞÜ.**
> Bir aracın boş dönmesi, aranan şeyin yok olduğu anlamına gelmez. "Bulunamadı" ile "yok" ayrı cümlelerdir; hangisini söylediğini bil.
> Bir şeyin neden öyle olduğunu, o şeye bakmadan anlatma. Bakmadıysan "bakmadım" de — bu eksik cevap değil, tam cevaptır.
> Doğrulanmamış bir tanımlayıcı (DOI, ISBN, künye, tarih, sayfa) için künye **üretme**. Çözemediysen "çözemedim" de.
> **Ölçtüğün ile ondan çıkardığını ayrı cümlelerde söyle.** Çıkarımın çürüdüğünde ölçümün ayakta kalsın.
> **Bir işin bir kısmını yapmadıysan bunu söyle.** Sessizce kısma.

**Nereye:** beş lambaya da. Bugün ölçtüm — *"Kaynakları uydurma"* talimatı **yalnız Consensus'ta** var; Seamus · Hannah · Marie · Altan'da **yok**. Ve Elif'in uydurulmuş künye arızası **Seamus**'ta oldu.

---

## §4 · HER KURALIN NÖBETÇİSİ

```
K1 → tests/probe-gate.test.js      sıfır dönen yardımcı, bilinen-dolu örnekte NON-ZERO dönmeli
K2 → tests/turn-engine-version.test.js   ← BUGÜN YAZILDI, 5/5 yeşil
     Kaide: her yama, DEĞİŞTİRDİĞİ yüzeyi sınayan bir test getirir.
K3 → SYSTEM_PROMPTS metni + tests/no-fabricated-citation.test.js
K4 → gelen/DURUM.md (22 gündür yok) — her `open`: sahip + sonraki bakış tarihi
K5 → tests/silent-failure.test.js + ön yüzde görünür uyarı
K6 → araç kuralı: çıktısı kaydedilen komutlar maskeli koşulur (git remote, env, config)
K7 → rapor biçimi: her bulguda "ölçülen" ve "çıkarılan" AYRI satır
K8 → rapor biçimi: "yapılmadı" bölümü zorunlu, boşsa "yok" yazılır
K9 → kural biçimi: her yasak, ölçülmüş nedenine bağlanır
```

**Ve kartı koda bağlayan nöbetçi:** Eğitim Kartı'nın *"aramayı AÇMAZ"* listesi `shouldRequestEvidence`'a verildiğinde `false` dönmeli. Bugün ölçtüm: `webden bak` · `internetten bak` · `veritabanına bak` **açıyor.** Test olsaydı bir hafta kaybedilmezdi.

---

## §5 · YAPMADIKLARIM

```
· Metni motora BASMADIM. Kod değişikliği → Founder mührü.
· Uydurulmuş künyenin sebebinin "talimat yokluğu" olduğunu KANITLAMADIM — çıkarım.
  Doğru sınama: aynı DOI'yi beş lambada koşturmak. Yapılmadı.
· CEO ve Çarkçı'nın belgelerini görmedim.
· Ham dökümü kelime kelime okumadım — 21 hata-mesajını çıkarıp okudum, 2.232 kaydın
  geri kalanına bakmadım. Başka ders olabilir. `open`
```

---

*Ölç, doldurma. Ölçüm bir damga, hüküm ayrı bir damga. Ve neşeli ol.*

**— CCE** · Cowork · 6 Ağustos 2026
