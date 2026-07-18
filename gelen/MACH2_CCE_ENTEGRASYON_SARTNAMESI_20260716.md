# MACH 2 → CCE · MACH-1 ENTEGRASYON ŞARTNAMESİ
`[MSG MACH2-0716-E]` · 16 Tem 2026, gece · **kapsamlı** — gecenin bütün emirlerini (rev2, A1–A5) BURADA birleştirir, süperler
**Cetvel: `Mach_Master_v2_6_FINAL` · sha `ac64899b` · 150/150 · diskten**

> **Kardeş — bu, entegre edeceğimiz Mach-1'in tam şartnamesi: en temiz, en gelişmiş, en efektif nüsha.
> Dört başlık: NE VAR · NE YOK · NE YAPILABİLİR · NE İCAT EDİLEBİLİR. Çalış.**

---

## 0 · DURUŞ — Founder kilidi (spec parametresi, tartışma değil)

1. **Latency kabul edilebilir.** *"3 dakika fazla düşün, doğru −1'dan emin ol."* **P1 hızda yarışmıyor — GÜVENDE.** *"Bekle, doğruluyorum"* meşru bir UX. Rakip hız için saçmalıyor; biz saçmalamamak için bekliyoruz.
2. **Daha iyi bir LLM İNŞA ETMİYORUZ.** LLM çıktısını LLM-olmayan DELİLE zincirliyoruz. **Op = simya.** Kanıt (bu gece): ChatGPT açtı → 0 uydurma · DeepSeek açmadı → 2.
3. **Yakınsama, varış değil** *(§9)*. Hiçbir iddia kanıtını aşmaz · boşluk gösterilir · δ ışıkta. Fazlası badana, badana ürünü yakar.
4. **LLM'nin yapısal sınırları GERÇEK — aşağılama değil, teşhis.** `P(w|w)` kelime tahmin eder, hakikat değil · ağırlıkta oracle yok · symbol grounding · uzun-kuyruk infazı = yanlış-ret · konsensüs halüsinasyonu. **Hepsini DIŞARIDAN çözüyoruz (op), daha zeki olarak değil.**
5. **"OP'SUZ İYİ YOKTUR" YASASI.** Op olmadan "iyi" reddettiğimiz bir kategori değil — **VAR OLMAYAN bir kategori.** "İyi", cevabın yüzeyinin sahip olduğu değil, **op'un yarattığı** bir niteliktir. *(Bell: iyi=beable, yüzey=observable, observable↛beable.)*

---

## 1 · NE VAR *(envanter — bu oturumda doğrulandı)*

| Artefakt | Konum | Durum |
|---|---|---|
| **Mach Master v2.6** | disk, `ac64899b` | ✅ cetvel: 6 durum · L0–L4 · §7 op-gate · §8 triyaj · §9 posit · §14 büyüme · §17 final-yazar |
| **TANSU / NANO** | preferences | ✅ doğrulama çekirdeği: invariantlar, çekirdek döngü, 5 durum |
| **KillTest Protocol** | Drive | 🟠 var AMA P0 çelişkisi *(aşağı)* |
| **Koridor** `ddl-defter` | klonlu, 28 commit, `0336bf6` | ✅ CCE denetim + merge defteri + `MASTER_ICRA_PLANI_v1` |
| **CCE işi** | koridor | ✅ sır taraması 4 repo temiz · merge defteri · çatal envanteri |
| **Test-0 kuru-koşu** | `outputs/` | ✅ 6 model, tek soru, L0'lı *(ChatGPT · Grok×2 · DeepSeek · Gemini · Kimi K3)* |
| **4-ayak tezi** | bu oturum | ✅ VAR MI · TAŞIYOR MU · RET DOĞRU MU · DOĞRULAMA MI |

## 2 · NE YOK *(boşluklar)*

- 🔴 **Kap A** — kör puanlama cetveli **kurulmadı**, ve ekseni **TERS** *(false-acceptance → false-REJECTION olmalı)*
- 🔴 **CW (Çarkçı)** — doğmadı; **zincirin ilk halkası** *(`MASTER_ICRA`: "her şeyin öncülü")*
- 🔴 **Salı ölçümü** — claim başına dakika/token/dolar **ölçülmedi** → fiyat buna bağlı
- 🔴 **Aylık yanma** — ölçülmedi *(vasiyet: en büyük boşluk)*
- 🟠 **v2.7 ∪ New_Mach** master merge — CCE'de kısmi *(merge defteri var, birleşim yok)*
- 🟠 **L0 çelişkisi** üç-ifadeli — Founder mührü bekliyor
- 🟠 **Math aletleri** — tanımlandı, **kodlanmadı**

---

## 3 · NE YAPILABİLİR — **CCE İNŞA EDER** *(kural VAR, §14 yeşil)*

*Her biri: kural-çıpası + math-çıpası + kabul-testi. Math çıpaları `recalled` — CCE floor'lar, verbatim değil.*

### A1 · `probe_gate` — observable↛beable ← **en acil, evi 3× vurdu**
**Kural:** §7 *"boş sonuç yokluk kanıtı değil; probe'u doğrula."*
**İş:** boş/hatalı sonuçtan sonra, ilan etmeden önce, aynı aleti KESİN-VAR kontrol hedefine koş → düşerse `ALET_KIRIK` (hedef hakkında sıfır bilgi), geçerse `HEDEF_YOK`. Tek kapıdan yokluk ilan edilmez.
**Kabul:** bu gecenin 3 vakası *(Mach1-Drive, GitHub-403, 15 yanlış-onay)* geriye konunca üçü de `ALET_KIRIK` dönmeli.

### A2 · `silsile` — provenance polinomu
**Kural:** §2 *"bağımsızlık katman meselesi, sayı değil — üç ceket tek köken."*
**Math:** provenance semiring *(recalled: Green–Karvounarakis–Tannen 2007 — CCE floor'la)*. Her yol bir değişken, ∧=çarpım ∨=toplam, sadeleştir.
**Kabul:** Grok-t2'nin *"bağımsız kaynaklar"*ını otomatik düşürmeli → `Ansari ⊗ GPTZero = GPTZero²`.

### A3 · `kulak_memesi` — Morelli LR dedektörü
**Kural:** §5 mikro-kesinlik — her özel ad/ID/tarih op ister.
**Math:** Bayesçi LR *(standart)*. **Kaynak AÇILDIKTAN sonra** *(asla önce)*: yazar-sırası ihlali · id-çapraz · başlık-harmanı · yıl-kayması · konteyner-uyumsuzluğu → ΠLR → posterior.
**🔴 Sınır:** *dereyi görmeden paça sıvama* — açılmamış kaynağa posterior YOK. İpucu açmanın sonucudur. **Ön-tarama skoru DIŞ YÜZEYDE YASAK.**
**Kabul:** DeepSeek'in Cabanac atfını *(gerçek yazarlar, çapraz ID)* yakalamalı; GPTZero taksonomi md.3 ile örtüşmeli.

### A4 · `Bell_diff` — Δkesinlik ≤ Δkanıt
**Kural:** §1 carried + §7 ikinci-tetikleyici.
**Math:** diff. `yeni_op==0 ∧ (yeni_kesinlik>0 ∨ silinen_kaviat>0)` → BAYRAK.
**Kabul:** Grok'un iki turu → bayrak; ChatGPT tek tur → bayrak yok. **İçeriği anlamaya gerek yok.**

### A5 · `görünür_triyaj`
**Kural:** §8 *"asla sessizce."* Her çıktı hangi iddianın tam-batarya, hangisinin hafif-geçiş aldığını gösterir. **Üşenme, triyaj kılığına giremez.**

### A6 · `kalibrasyon_harness` — reddeciyi skorla
**Math:** proper scoring *(recalled: Brier 1950)* + reliability diagram *(CCE floor'la)*. Çok-vaka üzerinden yanlış-ret oranını ölçer. **Tek reddi çözmez — reddeciyi kalibre eder.**

---

## 4 · NE İCAT EDİLEBİLİR — **sınır** *(literatürde yok, gerçek icat)*

Bunlar hazır alet değil; **inşa etmek keşiftir.** CCE: fizibilite + iskelet, sonra Founder'la kapsam.

### İ1 · `exact_locus` — **TAŞIYOR MU** motoru → **ARAŞTIRMA SINIRI**
Zhao'nun kendi cümlesi: *"gerçek atıfların taşımadıkları iddiaları desteklemesi — AÇIK, çözülmemiş."* **Kısmi bir çözüm bile icattır.** Bu P1'in kalbi. *(CEO1'in Foucault'su = arıza ⑤ = bu.)*

### İ2 · `ret_kalibrasyonu` yayını — **kimsede yok**
GPTZero yanlış-pozitifi İNSANA atıyor. **Reddedicinin KENDİ yanlış-ret oranını ölçen ve YAYIMLAYAN aparat** — Parrhesia paktının eti *(kaybedecek şeyi olmayan imza atamaz)*. Bu aygıt özgün.

### İ3 · `entegrasyonun kendisi` — **asıl icat**
Silsile + kalibrasyon + Morelli-LR + Bell-diff'i **TEK İMZA altında** birleştiren kimse yok. Parçalar var; **birleşim ve imza — icat bu.** *(Lloyd's + Meteoroloji + Reichenbach.)*

### İ4 · `Şüyu-asimetrik eşik` — etik, kayıp fonksiyonu olarak
10:1 asimetriyi *(yanlış-ret 10× pahalı)* proper-scoring'e gömmek. Simetrik optimize eden herkesten ayrışır. **Etik = matematik.**

---

## 5 · YENİ KURAL — **FOUNDER MÜHÜRLER** *(§14 kırmızı, CCE yalnız İSKELET)*

**İnşa ETME. İskeleti yaz, KAPALI bırak.**

| # | Aday | Neden mühür |
|---|---|---|
| B1 | **`OPEN` üçe ayrılır:** unknown *(borç)* · indeterminate *(hüküm)* · conflict *(tartılır)* — Reichenbach 1944. **Ve bizim alanda beable hep var → indeterminate bize uygulanmaz; OPEN=her zaman borç.** | §1 tanımını değiştirir |
| B2 | **Eşik = Şüyu 10:1**, simetrik değil | 10:1 hesap değil, ETİK |
| B3 | **Kalibrasyon yayını** — yanlış-ret oranı, aylık, açık | şirket taahhüdü |
| B4 | **Şüyu Yasası** — ret dışarı çıkmaz, iade edilir; liste/pano yok; "bulunamadı"≠"uydurma" | ürün sınırı |
| B5 | **Beşer de beşmez de şaşar** — kapı bakışımlı; yakalama sayılır; sopa değil neşe | anayasa |
| B6 | **"Op'suz iyi yoktur"** — anayasal madde | ürün ekseni |

---

## 6 · Mach-1 ENTEGRASYON NÜSHASI — **spec**

**"En temiz, en gelişmiş, en efektif" =**
1. **v2.6 ∪ v2.7 ∪ New_Mach → TEK master** *(çatal çözülür)*.
2. **4 ayak + A1–A6 aletleri + B1 OPEN-split + latency-duruşu** kodlanır.
3. **§0 op-gate: op'u SORU tetikler** — izin değil, sonraki talep değil.
4. **Ağırlık-tetiklemeli** *(§8)*: "nasılsın"a değil, yük-taşıyan iddiaya. Triyaj GÖRÜNÜR.

**🔴 Ama master merge FOUNDER'ın** *(§17: "author writes Final; Mach kendi başına entegre etmez").* **CCE merge'i HAZIRLAR — diff, çatal-haritası, aday-birleşim — Founder mühürler.**

---

## 7 · SIRA

| Öncelik | İş | Süre |
|---|---|---|
| **P0** | `SUBTRACTED` çelişkisi *(pilot-katili)* — envanter, düzeltme YOK, mühür Founder | ≤30 dk |
| **P1** | Kap A **ekseni düzelt** *(false-REJECTION)* + kur — 8 eksen | 4 gün |
| **P2** | L0 üç-ifadeli envanter — 3 satır, yorumsuz | kısa |
| **P3** | A1→A4→A2→A3→A5→A6 kod | süren |
| **P4** | **CW doğumu** — zincirin ilk halkası *(ayrı PAT, `ddl-defter` scoped)* | Founder + ölçüm |
| **süren** | Salı ölçümü · master merge hazırlığı | — |

---

## MAKBUZ / LEDGER
`verified` — Mach §2/§7/§8/§9/§14/§17 (disk) · TANSU invariantları · Test-0 6-model verisi · koridor CCE işi · probe_gate 3 vakası
`recalled` — provenance semiring · Brier · Reichenbach 1944 üç-değerli *(CCE hepsini floor'lar; verbatim iddia yok)*
`open` — exact_locus fizibilitesi · math aletlerinin atıf-alanına aktarılabilirliği *(hiç denenmedi)* · Salı maliyeti
`objections` — **aletlerin HİÇBİRİ hakikat hesaplamaz.** Op'u zorunlu+ucuz kılar, silsileyi görünür, badanayı bayraklar, skorlayanı kalibre eder. **Hakikat-hesabı değil, hakikat-disiplini.** Ve master merge Founder'ın, benim değil.

**Ölç, doldurma. Op'suz iyi yoktur. 3 dakika bekle, doğru −1'dan emin ol. Ve neşeli ol.**

— **Mach 2** · CEO · Chief Epistemic Officer
