# AYVALIK.AI — FİNAL RAPOR

`masa:` **CW · Çarkçı** · `an:` 2026-08-12 · `damga:` karar/ölçüm/MODEL/açık satır satır
`kapsam:` Bu oturumda konuşulan her şeyin tek yerde özeti. Kaynak dosyalar: `AYVALIK_AI_KARAR.md` (guard/model) · `AYVALIK_BIRIM_EKONOMI.md` (fiyat/maliyet) · `gelen/PAC-0812-A` (envanter) · kanon bağı (defter 1197).
`kaide:` Fiyat + Anthropic $/1M = **ölçüm**. Hacim / USD-TRY / soru-dağılımı = **MODEL** (`sebil_kapi` 0 satır). Ölç, doldurma.

---

## 1 · ÜRÜN — ne (karar)

Kasabanın kendi yapay zekâsı. **İki wizard, iki büyük bela:**
- **⚖️ Haklarınız** (hukuk · İştar Gözaydın *izi*)
- **🩺 Sağlığınız** (sağlık · Dr. Osman Müftüoğlu *izi*)

**İki kapı:**
- **Sebil** — kimliksiz, bedava, sınırsız. Akar Su: içerik saklanmaz.
- **Ücretli oda** — kimlikli (telefon kapısı), Plan A/B.

**Pazarlık dışı:** İsim, **imzalı sözleşme** olmadan hiçbir duyuruya girmez (bugün "iz/ruh", tabela değil). Ses = klon değil, **yaşayan-razı-sözleşmeli gerçek Ayvalıklı**.

---

## 2 · FİYAT — kapandı (karar, 12 Ağu)

| katman | € | ~₺ peg | ne |
|---|---|---|---|
| **Sebil** | 0 | — | ayvalık, kimliksiz |
| **Plan A** | **29** | ~1.400 | ayvalık, bireysel |
| **Plan B** | **145 (29×5)** | ~7.000 | ayvalık premium · **sınırsız + sohbet geçmişi** + (ek açık) · **p1 dahil değil** |
| *(p1)* | 2900 | — | parrhesia.one, ayrı ürün |

**Kur mekanizması (kapandı):** EUR-anchor · **TL sabit peg** (canlı çevrim yok) · **6 ayda bir yeniden pegleme = kur + enflasyon.**
⚠️ Kur ≠ enflasyon: kur güncellemesi USD/EUR maliyeti tazeler; enflasyon yalnız TL-yerel giderler için — üst üste binmesin.

---

## 3 · MİMARİ — teknik (karar + tasarım)

```
kullanıcı → ayvalik.ai (eşik: dil TR/EN/EL + Vesika + KVKK) → sebil.html
  → POST /api/chat
       ├─ provider: TEK Claude (p1 API'si yeniden)      [karar]
       ├─ braveMini (arama, kaynak göster deyince)       [var]
       ├─ 🔴 GUARD / citation floor  ← YOK = 428          [açık]
       └─ cevap
  → telemetri: sebil_turn İÇERİKSİZ (Akar Su)            [var]
```

- **Provider = Anthropic Claude, tek.** Nemotron/DeepSeek beyin adayı düştü. *(Nemotron yalnız ucuz tesisat hipotezi.)*
- **Kademe:** Sebil = **Sonnet 5 · high** · Ücretli oda = **Opus 4.8 · xhigh/max**. Karar **KillTest**'e (tetiklenme × maliyet). Founder eğilimi opus/sonnet-max; CW hükmü iki-kapı kademesi.
- **Kademeli routing** (Haiku router + prompt cache + kaskad) → **5-8× ucuz** vs naif Opus-max. *Routing = marjın kendisi.*
- **P1-lite guard** (seçenek C, ~400 satır): citation floor + `stripFabricated`/`stripNoSource` + unbacked-op silme. ESM geçişi şart. `logTurn` ALINMAZ (Akar Su).
- **Kaynak rafı:** 993 · Sağlık MED 29 var · Hukuk "Haklarınız" rafı kurulacak.
- **Kimlik:** sebil kimliksiz; telefon kapısı `sebil_kapi` (HMAC, kod 5dk, 5 yanlış=30dk) — şema inmiş.
- **Kota:** kimlik-bazlı (IP değil — kasaba WiFi NAT).
- **Deploy:** Vercel · Node 20 · main merge = production (Founder mührü).

---

## 4 · BİRİM EKONOMİ (MODEL hacimler)

- **Ay-1 hedefi:** 100 × 145€ + 1000 × 29€ = **43.500 €/ay ≈ ~2,09M ₺** (hedef-mix Founder'ın).
- **Marj kalın** — model maliyeti gelirin ~%9; kaba net ≈ **~1,74M ₺/ay** (sabit/pazarlama öncesi).
- **Başabaş soru/ay:** Plan A ~1.000+ · Plan B ~1.570 → adil-kullanım tavanı endişesi düştü.
- **Bedava sebil = saf yanma** — swing değişken, **Founder-tavanı şart** (açık).
- **Risk marjda değil:** (1) **dönüşüm** (29€ bireysel, kasabada satması zor) · (2) **bedava-yanma tavanı**.
- **Yılbaşı 10k:** sayı değil kompozisyon — 10k paralı çok kârlı, 10k bedava yanmayı büyütür.

---

## 5 · 🔴 428 — DEMİR ÇİVİ

**`ev_defteri` id 428:** Founder'ın 8 Ağu canlı testinde ayvalik.ai **SAHTE "Kaynaklar" listesi uydurdu** = uydurma atıf. ANAYASA 1: evin en ağır suçu, tek vaka motoru kapıdan indirir. **Bugün açık (P0).**
- Kök: `braveMini` var ama p1 guard'ları yok.
- **1186 hükmü: "428 kapanmadan PARA ALINMAZ."** Sağlık+hukukta uydurma atıf = gerçek zarar.
- **Açılış = POS onayı + 428 kapanışı** (~21 Ağu). Çözüm = guard portu (§3).

---

## 6 · KVKK / AKAR SU (Plan B "sohbet geçmişi" çözümü)

"Sohbet geçmişi" = içerik saklama = ANAYASA §2 "saklamazsın" ile gerilim (B2 §4 kırmızı çizgi). **Çözüm iki-kapı veri rejimi:**

| | Sebil | Ücretli oda (Plan B) |
|---|---|---|
| içerik | **saklanmaz** (Akar Su · dört KVKK metni korunur) | saklanır — kimlikli, opt-in, **silinebilir** |
| KVKK | dört metin aynen | **ayrı aydınlatma metni** |

Üç şart: ① ANAYASA §2 sebil'e daraltılır · ② geçmiş kullanıcının/silinebilir (unutulma hakkı) · ③ oda için ayrı KVKK.

---

## 7 · ÖDEME (karar + carried)

- **1 Eylül entegrasyon gerekmez:** şema `provider='manual'` → bir fiyat, bir sayfa, bir IBAN.
- **Yurt içi + turist:** **VakıfBank sanal POS** (Tekrarlı Tahsilat VAR) — TR kart + "yurtdışı kart" açık ile turist. En ucuz ray.
- **Stripe TR yok** (teyitli). **iyzico** alternatif (~%4,29, link, 3 hafta valör). **MoR (Paddle/LS)** yalnız uluslararası EUR/AB-KDV senaryosunda.
- POS başvurusu gitti (~21 Ağu onay).

---

## 8 · DURUM PANOSU

**✅ Kapanan kararlar:** ürün/iki-kapı · fiyat (29/145€, p1 hariç) · kur mekanizması · giriş (kimliksiz sebil) · provider (Claude tek) · Plan B içeriği (kısmen) · Akar Su çözümü.

**⏳ Founder bekliyor:** sebil yakım tavanı · tam ticaret unvanı (fatura+POS+`merchant_entity` üçünü açar) · ses maliyeti (STT+TTS) · devirme mührü (MİSEL) · Plan B ek özellikleri · model kademesi (KillTest).

**📏 Ölçülecek:** soru/abone · bedava:paralı oranı · USD/TRY · `count_tokens` · **KillTest** (kademe×guard-tetik).

**🔴 Demir çivi:** 428 muhafız portu — para o çiviye asılı.

---

## 9 · TAKVİM (carried)

| ~tarih | ne |
|---|---|
| ~21 Ağu | POS onayı + 428 kapanışı |
| 15 Eylül | lansman (billboard ucuz + doğru sezon) |
| Ekim–Kasım | SASU / tüzel kişilik (id 529) |
| Yılbaşı | 10k hedefi |

---

## 10 · BELGE HARİTASI — tüm ayvalık dokları

### A · CW'nin bu oturumda ürettikleri (koridorda, canlı)
| dosya | ne | boyut |
|---|---|---|
| **`AYVALIK_AI_KARAR.md`** | guard mimarisi (seçenek C) → provider (Claude tek) → kademe (KillTest) → kur (EUR-peg) zinciri; errata'da 12 Ağu karar günlüğü | ~14 KB |
| **`AYVALIK_BIRIM_EKONOMI.md`** | routing optimumu (5-8× ucuz) · başabaş · P&L · FX + Akar Su uyarıları · fiyat sağlaması · 4 ölçüm + formül | ~8 KB |
| **`AYVALIK_RAPOR_0812.md`** | *(bu dosya)* — hepsinin tek-yer özeti | — |
| **`gelen/PAC-0812-A_AYVALIK_AI_DOSYASI.md`** | Pacioli'nin envanteri, CW eliyle verbatim indi | 10.255 B |
| `MAKBUZ_ACK.md` satırları | her Founder girdisine + her upload'a makbuz (op-gate) | append |

### B · Yan pencerelerin dokları (bu oturumda okundu; kaynak masalar)
| belge | masa | ne · en kritik bulgu | damga |
|---|---|---|---|
| **B1** `TELEFON_KAPISI_0807` (sha16 fb6a617d) | Çarkçı · 7 Ağu | kimlik/kapı/KVKK · `sebil_kapi` HMAC şeması bundan | carried |
| **B2** `AYVALIK_AI_KARAR.md` | *(bu koridor)* | motor/guard mimarisi · dört damga (verified≠exists) · logTurn kırmızı çizgi | live |
| **B3** `AYVALIK_KARAR_DOSYASI` (defter id 1186) | Onondaga · 12 Ağu | iş/para/takvim · askıyı devirdi "hemen açılabilir" · Free/29€/290€ | carried |
| **B4** `PAC-0812-A` (Pacioli/M7·KASA) | Pacioli · 12 Ağu | 14 M7 dosyasından envanter · Stripe TR yok · iyzico valör · VakıfBank Tekrarlı Tahsilat | verified(M7) |
| **Bağ** `AYVALIK_KANON_BAGI` (defter 1197) | Onondaga · 12 Ağu | B1+B2+B3'ü bağladı · **iki-kapı tezi** · sebil_turn zaten var · 428=guard işi | verified |
| **Derleme** `AYVALIK_KARARLAR` | DUMAN · 12 Ağu 14:08Z | 147 satır tarama · iki zıt karar (881 askı / 1186 aç) · canlı yüzey ölçümü (§11) | verified |

### C · Koridor kayıtları (gelen/)
- `inis-328` (Çarkçı, 7 Ağu) — EN zemin + parrhesia1.com kaçak alan bulgusu · `verified`
- `inis-1079` (Şen/M12, 12 Ağu 04:56Z) — `sebil.html` 200 · 10.082 B · üç yüzey ● · `verified`

---

## 11 · CANLI ÖLÇÜM — 12 Ağu (DUMAN 14:08Z + inis-1079)

*Bu elde ölçülmedi (egress bloklu); yan pencereden `carried`. Kanıt: DUMAN kendi eliyle ölçtü.*

```
ayvalik.ai/            24.679 B · sha16 b8042fa0   (kök/eşik)
ayvalik.ai/sebil.html  13.158 B · sha16 6871d3e7   (5 Ağu'da 10.082 idi → büyüyor)
fiyat işareti ($/€/₺) . 0   (iki sayfada)          → para YÜZEYDE yok, beyanda var
"Sebil kuruluyor" ..... kökte VAR, sebil.html'de YOK (iki sayfa farklı anlatıyor)
/api/chat ............. VAR
braveMini ............. VAR    ·    P1 guard'ları ... YOK  → 428 P0 AÇIK
sebil_kapi ............ 0 satır (şema hazır, HMAC)
sebil_turn ............ 12 kolon, İÇERİK KOLONU 0 (ayrı proje ayvalik-sebil, 9 Ağu)
raf ................... 993 kaynak · serve 991 · SAĞLIK MED 29 VAR · HUKUK kategori YOK
diller ................ TR/EN/EL canlı · Vesika + KVKK onay ("Okudum, kabul ettim 12")
eski yara ............. id 56 mutlak "hiçbir veri kaydetmez" → artık canlıda YOK, KVKK onayı geldi
```

**Tek cümle:** ayvalık bugün **konuşan ama korumasız** bir sebil — kapı/dil/KVKK/raf/içeriksiz telemetri ayakta; eksik olan **muhafız (428)**, ve para tam ona asılı.

---

*Ürün belli, fiyat belli, mimari belli, belgeler tek yerde. Kalan: 428'i kapat, KillTest'i koş, üç sayıyı ölç. Para o çiviye asılı. — CW, 12 Ağustos 2026*
