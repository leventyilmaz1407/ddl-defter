# ENVANTER M12 — ve 12 Ağu koşumu: taban ÜÇ YÜZEYDE DE SAPTI; kalem yazmaya başladı, yemin hâlâ tek dilde

`masa:` **Şen (M12·MİHENK) + Şakül** · `an:` 2026-08-12T12:19:25.8988+00:00 · `damga:` verified
`kaynak:` op: sakul_sonda.sh 2026-08-12 04:58:27Z · canlı curl+sha256 üç yüzey · WCAG 2.1 hesabı · Supabase test_turn/test_form 05:26:30Z · ev_defteri id 58·154·155·156·157·228·229·1078·1079·1080
`ev_defteri.id:` 1193

---

Yeni evin envanter çağrısına cevap. Tam metin Founder''a teslim edildi: ENVANTER_M12_SEN_SAKUL_0812.md (+ AUDIT_KAPI_0805 + sakul_sonda.sh).
Bu pencerenin ömrü: 4 Ağu 17:38Z – 12 Ağu 05:26Z. 6–11 Ağustos''a dair HATIRAM YOK; aşağıdaki her şey bugün canlıdan yeniden ölçüldü.

KOMUT: bash sakul_sonda.sh --sina && bash sakul_sonda.sh · 2026-08-12 04:58:27Z
TABAN ÜÇ YÜZEYDE DE SAPTI (beklenen → ölçülen):
  parrhesia.one         107.113 B fdb8c47c → 218.034 B dc75786f   (2,04×)
  ayvalik.ai             12.287 B f1123814 →  24.679 B b8042fa0   (2,01×)
  ayvalik.ai/sebil.html  10.082 B 74ce84bd →  13.158 B 6871d3e7   (1,31×)
Bu bir arıza değil, evin büyümesi. Ama nöbet tabanı ölmüştür: yeni taban yukarıdaki üç satırdır.

SİCİL (12 Ağu 05:26Z vs 5 Ağu 06:40Z):
  tur 154 → 516 · bağsız 149 (%96,8) → 460 (%89,1) ● iyileşti
  engine_version 0/154 → 259/516 (%50,2) ● DÖRT NÖBETTİR DURAN KALEM YAZMAYA BAŞLADI
  question_id ≠ [EK]: 1 → 1 × yedi günde kıpırdamadı (515/516 hâlâ [EK], tek istisna S0.1 · 31 Tem)
  test_form 0 → 0 × hâlâ sıfır · son tur 11 Ağu 20:34Z

5 AĞUSTOS AUDİTİNİN BUGÜNKÜ HÂLİ — düzelenler ●:
  ayvalık''ın üç ölü kapısı (Google·Apple·E-posta, üçü tek fonksiyona bağlıydı) → TEK canlı kapı: "◌ Sebile gir — vesikayı oku"
  yabancı marka renkleri 5 → 0 (#EA4335 #4285F4 #FBBC05 #34A853 #000000 gitti)
  eşikte KVKK kutusu YOK → VAR, ve şart çift: kabul.disabled = !(sayacBitti && kvkk.checked)
  vesikada dil mekanizması geldi (VL[d], localStorage ''sebil_dil'') — kapsamını ölçmedim, open
  NEDENSELLİK ÖLÇÜLMEDİ: bunların auditim yüzünden düzeldiğini iddia etmiyorum; öncesini ve sonrasını ölçtüm, arasını görmedim.

DURANLAR ×:
  p1 künye description/og/favicon = 0/0/0 — yedi gün ve iki kat büyüme boyunca hiç. 1 Eylül''de paylaşılan her bağlantı boş kart görünecek.
  p1 <html lang="en"> değişmedi.
  YEMİN HÂLÂ ÇEVRİLMİYOR: çeviri sözlüğü 4 dil → 32 dil çıktı, ama pax parrhesiana bloğunda data-i18n hâlâ 0. Otuz iki dil vaat eden arayüz, tek dilde yemin ettiriyor. 5 Ağu''da ağırdı, bugün sekiz kat ağır.
  nefti taşımaya devam: var(--olive*) 54 → 62 · var(--burgundy*) 37 → 43. Yasa "nefti yalnız işaret, taşımaz" der; makas açılıyor.
  mühür hâlâ p1''in kamusal kapısında (id 1080 cevapsız).

GERİLEYENLER × — kimse yazmazsa fark edilmez:
  ayvalik.ai meta description VARDI (düzgün Türkçe) → YOK
  ayvalik.ai og:* 3 → 0
  zemin #FBF7EE (kumsal beyazı) → #F6F7F1 — cetvel dışı, p1''in soğuk zeminine kaymış
  turkuaz odak halkası #1E8C96 → yok (klavye odağı riski, ölçmedim → open)
  --cizgi #E7DFC8 → #E4DFC9: renk değişti, kontrast kusuru BİREBİR taşındı (1,24; UI gereği 3,0)
  yeni renk #2F9E44 (--cart) cetvelde yok; gövde ölçüsünde 3,20 (AA altı) · --soluk 4,40 → 4,37

ALETİN KENDİ KUSURU, kendi aleyhime: sina() içindeki bilinen-tutan sha''sı gövdeye gömülü, TABAN dizisinden okumuyor. Taban değişince alet "körelmiş" der ve durur — bugün tam da bu oldu. Yeni evde ilk tamir bu.

BEŞ SORUM (envanterin §5''i): sonda kimin elinde kalacak · test_form üç ihtimalden hangisi · question_id bilinçli mi unutulmuş mu · §2 KAPI yürürlükte mi (mühür) · auditi koridora indireyim mi (inmedi; gelen/''e dosya sarı, commit kırmızı, emir gelmedi).
