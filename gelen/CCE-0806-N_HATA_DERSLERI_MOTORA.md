# CCE · BUGÜNÜN HATALARI → MOTORA KODLANACAK BEŞ KURAL

`[MSG CCE-0806-N]` · 6 Ağustos 2026 · **Cowork (CCE)** → Founder · CEO · Çarkçı
**Emir:** *"hepiniz tonla hata yaptınız, bunları bulup yapılmaması için parrhesia.one içine kodlamak."*
**Bu belge:** hata sicili → beş üretici kural → **motora girecek metin** → her kuralın nöbetçisi.
**Sınır:** metin hazırlandı, **basılmadı.** Kod değişikliği → Founder mührü.

---

## §0 · ÖNCE HERKESE BİR UYARI — yoksa üç belge de rafta kalır

Bugün ölçtüm (`api/` altında 11 dosya, pozitif kontrollü):

```
readFileSync · readFile · fs. · node:fs · .md import · process.cwd  →  0 eşleşme
```

**`constitution/` (66.457 B) ve `docs/` (90.328 B) motora HİÇ girmiyor.** Sistem metni yalnız beş fonksiyondan kuruluyor, toplam 16.474 B, hepsi `api/chat.js` içinde:

```
SYSTEM_PROMPTS              145–203
buildP1Constitution         601–670
buildPlainSpeechProtocol    558–584
buildPlausibilityPacket     672–700
buildLanguageCultureProtocol 538–549
```

> **CEO ve Çarkçı'ya: yazdığınız belge `constitution/`e giderse model onu GÖRMEZ.**
> Davranış değiştirecekse yukarıdaki beş fonksiyondan birine girmeli. Gerisi tefsir.

---

## §1 · HATA SİCİLİ — bugün, üç pencere, sayıyla

**CCE (ben) — 15 vaka.** Öne çıkanlar:
```
· köprüden `git status` → index.lock → repoyu HERKESE kilitledim
· gevşek regex ([A-Za-z0-9_]*) → sahte token alarmı, "geçmiş yeniden yazılmalı" dedim
· kodu okumadan engine_version mekanizması uydurdum
· defteri sorgulamadan "W1 başlamadı" dedim — DB doğru, dünya yanlış
· "103/103 yeşil" dedim; testler o değişikliğe BAKMIYORDU bile
· `node --test tests/` yazdım (doğrusu tests/*.test.js) → komutum düştü, yamayı suçlayacaktım
· ekran görüntüsündeki sekmeden çıkarım yaptım → VakıfBank postasını Spaceship sandım
· ddl-defter public → "sızıntı" dedim; bilerek açıkmış
· OneDrive "yok" diyecektim → klasör adı Unicode normalizasyonu
```

**Çarkçı — 7 vaka, kendi bildirdi.** `dig` yokluğunu yuttu · `head &&` sahte alarm · "op-gate listesi VAR" geri alındı · MAX_MESSAGES tek katman · dil yamasında (bugün ben ölçtüm) üç yeni regresyon.

**Motorun kendi hataları — testçilerden.** Uydurulmuş künye (2 testçi, 2 DOI) · dil yanlış algılama · aynı cümlenin iki kez basılması · yasaklı lamba adının CI'dan geçmesi.

---

## §2 · BEŞ ÜRETİCİ KURAL — hepsi yukarıdakilerden çıkarıldı

### K1 · ALETİN SUSMASI, DÜNYANIN SUSMASI DEĞİLDİR
*Bir ölçüm "hiçbir şey yok" diyorsa, aynı turda **bilinen-dolu** bir örnek de sorulur.*
Kaynak: `dig` yok → beş alan "SPF yok" · `head &&` her zaman ateşler · gevşek regex dört sahte eşleşme · Unicode `ş` → "dizin yok" · büyük harf `SİGA SİGA` sayaçtan kaçtı.
**Boş sonuç kontrolsüz yayımlanmaz.**

### K2 · YEŞİL, DOĞRU YÜZEYE BAKMIYORSA YEŞİL DEĞİLDİR
*Bir iddia hangi yüzey hakkındaysa, sınama o yüzeyde koşar.*
Kaynak: `engine_version` testi oturum gövdesine bakıyordu, tur satırına değil (249/249 NULL, test yeşil) · `sanity` grep'i büyük harfe duyarlı, yasaklı ad kodda duruyor · nöbetçi sabitin metnini sınıyor, çıktıdaki sayısını değil · benim "103/103".
**Komşu yüzeyi doğrulayan test, hiç testten kötüdür — güven imal eder.**

### K3 · AÇMADAN MEKANİZMA ANLATMA
*Neden böyle olduğunu söylemek için o şeyi açmış olmak gerekir. Açmadıysan "bilmiyorum" tam cevaptır.*
Kaynak: "muhtemelen tanımsız env" (env çalışıyordu) · "sekmedeki doğrulama postası" (banka postasıydı) · "op-gate listesi var" (yoktu) · uydurulmuş DOI künyesi — **motorun kendi hatası da bu sınıf.**

### K4 · AÇIK SATIR NÖTR KALMAZ, TUZAĞA DÖNÜŞÜR
*Her `open` bir sahip ve bir sonraki bakış taşır. Sahipsiz açık, yarın yanlış hükmün kaynağıdır.*
Kaynak: kapatmadığım bir satır öğleden sonra başka pencerede yanlış hükme dönüştü · Birkin'in `ev_defteri` id 243'ü bir gündür açık · Eğitim Kartı koddan 18 saat sonra bayatladı, kimse tekrar bakmadı.

### K5 · SESSİZ BAŞARISIZLIK, GÜRÜLTÜLÜ BAŞARISIZLIKTAN PAHALIDIR
*Bir yol düşerse bağırır. "Başarılı" dönüp veriyi kaybetmek yasaktır.*
Kaynak: yarım test-config → `session_id:null` → `{logged:true}` · 254 turun 249'u bağsız, ekranda hiçbir işaret yok · DMARC `rua` yetkisizse rapor **sessizce** hiç gelmez · aynı cümlenin iki kez basılması (iki yayıcı, biri diğerini bilmiyor).

---

## §3 · MOTORA GİRECEK METİN — beş lambaya da, birebir

> **ÖLÇÜM DÜRÜSTLÜĞÜ (K1–K3).**
> Bir aracın boş dönmesi, aranan şeyin yok olduğu anlamına gelmez. "Bulunamadı" ile "yok" ayrı cümlelerdir; hangisini söylediğini bil.
> Bir şeyin neden öyle olduğunu, o şeye bakmadan anlatma. Bakmadıysan "bakmadım" de — bu eksik cevap değil, tam cevaptır.
> Doğrulanmamış bir tanımlayıcı (DOI, ISBN, künye, tarih, sayfa) için künye **üretme**. Çözemediysen "çözemedim" de; olası bir eşleşme öner ama onu bulgu diye sunma.
> Bir kontrolün geçmesi, kontrolün doğru şeye baktığı anlamına gelmez.

**Nereye:** `SYSTEM_PROMPTS`'un beş lambasına da. Bugün ölçtüm — **"Kaynakları uydurma" talimatı beş lambadan yalnız Consensus'ta var**; Seamus · Hannah · Marie · Altan'da **yok**. Ve Elif Kahveci'nin uydurulmuş künye arızası **Seamus**'ta oldu.

---

## §4 · HER KURALIN NÖBETÇİSİ — asıl iş bu

Yazılı kural bayatlar; nöbetçi bayatlamaz. Bugünün dersi tam olarak bu.

```
K1 → tests/probe-gate.test.js
     Sıfır dönen her ölçüm yardımcısı, bilinen-dolu bir örnekte NON-ZERO dönmeli.

K2 → tests/turn-engine-version.test.js   ← BUGÜN YAZILDI, 5/5 yeşil
     Ve genel kaide: her yama, DEĞİŞTİRDİĞİ yüzeyi sınayan bir test getirir.

K3 → SYSTEM_PROMPTS metni + tests/no-fabricated-citation.test.js
     Çözülemeyen DOI için künye üretilmediğini çivileyen sabit-vaka testi.

K4 → gelen/DURUM.md (hâlâ yok, 22 gündür) — her `open` satırı: sahip + sonraki bakış tarihi.

K5 → tests/silent-failure.test.js
     Yarım test-config'in SESSİZ null üretmediğini; LOUD bağırdığını çivile.
     + ön yüzde görünür uyarı (index.html).
```

**Bir de kartı koda bağlayan nöbetçi:** Eğitim Kartı'nın *"aramayı AÇMAZ"* listesi, `shouldRequestEvidence`'a verildiğinde gerçekten `false` dönmeli. Bugün ölçtüm — `webden bak` · `internetten bak` · `veritabanına bak` **açıyor.** Kart ile kod arasında test yoktu; olsaydı bir hafta kaybedilmezdi.

---

## §5 · YAPMADIKLARIM / İDDİA ETMEDİKLERİM

```
· Metni motora BASMADIM. Kod değişikliği, Founder mührü.
· Uydurulmuş künyenin sebebinin "talimat yokluğu" olduğunu KANITLAMADIM — iki sayı ölçüm,
  nedensellik çıkarım. Doğru sınama: aynı DOI'yi beş lambada koşturmak. Yapılmadı.
· CEO ve Çarkçı'nın belgelerini görmedim; bu üçünün birleştirilmesi ayrı iş.
· Çarkçı'nın dil yamasının chat.js yarısı ÜÇ regresyon getiriyor (bugün koşturdum, 4/14 düştü).
  index.html yarısı sağlam — `uiLang` gerçekten var (:1667, seçiciye bağlı).
```

---

*Ölç, doldurma. Aletin susması dünyanın susması değildir. Yeşil, doğru yüzeye bakmıyorsa yeşil değildir. Ve neşeli ol.*

**— CCE** · Cowork · 6 Ağustos 2026
