# ÖZ-BEYAN KORUMASI TEK LAMBA DERİNLİĞİNDEYMİŞ: Seamus·Hannah·Marie·Altan o cümleyi HİÇ görmüyordu

`masa:` **carkci** · `an:` 2026-08-08T07:01:07.362234+00:00 · `damga:` —
`kaynak:` araclar/kapi_yuklu_mu.mjs üç koşu + negatif kontrol · TESTCI_TURLARI_TAM_DOKUM.md sha16 4d669dcdc78cfab8 üzerinde 4 desenli prob sayımı · Vercel list_deployments
`ev_defteri.id:` 338

---

Yeni yazdığım denetçi (araclar/kapi_yuklu_mu.mjs) ilk koşusunda kırmızı döndü ve sebebi bendeki
bir varsayımı yıktı.

BULGU: "internete erişimim yok / web'e bakamam" cümlelerini yasaklayan ÖZ-BEYAN bloğu
(KAPI-2 · 0802) yalnızca SYSTEM_PROMPTS.Consensus dizgesinin içindeydi. Seamus, Hannah,
Marie ve Altan bu cümleyi HİÇ GÖRMÜYORDU. Beş lambanın dördü korumasızdı.

NİYE ÖNEMLİ — korpusta ölçtüm (259 turun tamamı, soru tarafında 4 desen):
2 Ağustos'tan sonra 39 yetenek/kaynak probu var.
  Consensus 32  ← blok BUNDA vardı
  Hannah     4  ← blok yoktu, yine de ihlal etmedi
  Seamus     3  ← blok yoktu, yine de ihlal etmedi
  Marie      0  ← ne blok var, ne tek bir ölçüm
  Altan      0  ← ne blok var, ne tek bir ölçüm

Yani dün yazdığım "öz-beyan arızası kapandı, 39 probda sıfır ihlal" hükmü DOĞRU AMA DAR:
32'si korumalı tek lambadaydı, 7'si korumasız iki lambanın şansıydı, iki lamba hiç yoklanmadı.
Sayı doğruydu, kapsamı yanlış anlatmıştım. Düzeltiyorum (m.7: bir dala bakıp toplam ilan etme).

YAMA (yazıldı, BASILMADI): metin Consensus'un dizgesinden KESİLDİ (elle yazılmadı, m.5),
buildOzBeyanKapisi() olarak dışarı alındı ve buildStaticSystemParts()'a kondu.
Ayrıca motor ile denetçi TEK KAYNAĞA bağlandı: ikisi de buildStaticSystemParts() çağırıyor.
Denetçi kendi listesini kurarsa motordan sapar ve yanlış yüzeye bakar (m.12) — o kapı kapatıldı.
Üçüncü koşu: 10/10 yeşil (beş lamba × iki dil, 8/8 çivi).

DOSYA: api/chat.js · 107.993 B · sha16 acc14c4e7d931123 (temiz tezgâh cdc0803f3875fd1e'den türetildi)
YAMA : inis/KAPANACAK_KAPISI_0808.patch · 9.169 B · sha16 9b9af75ff11c5eb6
Yamada ayrıca: KAPANACAK KAPISI (açık yasağı, uydurma mekanizma yasağı, görmediğini onaylama
yasağı, kusur-devralma yasağı, süsleme yasağı) + CLAUDE.md (7.008 B · 9a7fc9c6b7c02740) +
iki denetçi.

CANLI SÜRÜM: 7d58905e78ca0a6301b5aeb211ea084cfbb12faf (v9-1, Vercel promote). Bu yamanın
HİÇBİR maddesi canlıda DEĞİL. Düğme Founder'ın (m.27).
