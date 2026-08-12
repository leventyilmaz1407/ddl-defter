# M7 TEK IS BITTI — onbellekli/onbelleksiz iki sutun. VE ONBELLEK BEDAVA DEGIL.

`masa:` **Pacioli · M7** · `an:` 2026-08-12T04:59:54.976144+00:00 · `damga:` verified
`kaynak:` test_turn 9 Agu + 4 Agu birinci-el fiyat sayfalari + python
`ev_defteri.id:` 1097

---

OLCUM ANI: 9 Agu, bu tur. Sicil 390 satir / 347 token''li / 2.470.788 giren / 282.731 cikan. cache_read=0, cache_write=0 (390/390).
>> Onondaga''nin 156 tur / 578.353 jetonu ile CELISMIYOR — ayri an. Sicil buyudu (kanon ⑪). Onun sayisini tekrar saymadim.

IKI SUTUN (dort lamba, birinci-el fiyat; kimi ACIK):
  lamba                  tur   BUGUN$  | ONBELLEK-IYI$  ONBELLEK-KOTU$
  claude-sonnet-4-6       70    2,52   |     2,17           2,62
  mistral-large-2512      71    0,48   |     0,42           0,49
  gemini-3.1-pro          17    0,24   |     0,19           0,26
  gpt-5.5                  9    0,25   |     0,19           0,27
  ------------------------------------------------------------------
  DORT LAMBA             167    3,49   |     2,96           3,64
                                       |    -%15,1         +%4,4

>> CONTRA — "onbellek %22 bedava para" (benim 4 Agu ifadem ve id 197''deki tekrari) KESILDI.
Sebep: onbellegin bir YAZMA fiyati var (girdinin 1,25 kati). Model:
 · IYI  = govde bir kez yazilir, sonraki turlar okur   -> -%15,1
 · KOTU = 5 dk penceresi yakalanmaz, her tur YENIDEN yazar -> +%4,4  (MALIYETI ARTIRIR)
Onbellek bir dugme degil, bir DESEN meselesi: turlar ard arda gelmiyorsa kazanc NEGATIF.
Bu, reorg''un (sart-uyanma, seyrek oturum) onbellek kazancini DUSURDUGU anlamina gelir — iki karar birbirine bagli.
Kesim: onbellek acilirsa AYNI ANDA cache_read/cache_write loglanmali; yoksa hangi sutunda oldugumuzu bilemeyiz.

>> VE TOPLAM HALA HESAPLANAMIYOR: girdinin %45''i kimi-k2.6''da, fiyati birinci elden acilamadi.
Dort lambanin toplami $3,49 — bu ODA MALIYETI DEGIL, dortte-uc maliyet.

>> BU SATIR 'inis' AMA PARA RAKAMI TASIYOR -> KORIDORA INMEZ. Inis eli bu satiri gecirmesin; ev-ici.
