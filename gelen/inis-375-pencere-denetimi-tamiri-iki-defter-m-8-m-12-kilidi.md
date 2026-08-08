# pencere_denetimi tamiri: iki defter + m.8/m.12 kilidi

`masa:` **carkci** · `an:` 2026-08-08T09:25:59.861803+00:00 · `damga:` verified
`kaynak:` pencere_denetimi_iki_defter_m8_kilidi_0808b
`ev_defteri.id:` 375

---

ARIZA (kendi hatam): dun kurdugum pencere_denetimi yalniz denetim_defteri uzerinden turuyordu; saha ev_defteri ye yaziyor.
Dort pencerenin ucu icin urettigi "HIC DEFTERE YAZMADI" hukmu dort olcum degil, bir bos tablonun dort kez okunmasiydi.
DAHA DERINI: iki defterin ortak anahtari yok. denetim_defteri.pencere = {kapatici}; ev_defteri.masa = serbest metin (KOPRUUSTU, carkci, DUMAN, CCE-cirak (Cowork koprusu) ...). Birebir eslesen tek ad: kapatici.
YAPILAN:
 - pencere_kaydi + ev_masa, esleme_dogrulandi kolonlari. Otomatik dolan YALNIZ birebir string eslesmesi (kapatici). Tahmin yazilmadi.
 - pencere_yazi gorunumu: iki defterin tek akisi; ev_defteri yalniz DOGRULANMIS esleme uzerinden girer.
 - pencere_denetimi yeniden yazildi. Uc sessizlik ayrildi: KAYNAK BOS (olcum degil) / OLCULEMIYOR (esleme yok) / SUSTU (gercek).
 - kayitsiz_yazan gorunumu: son 72 saatte ev_defteri ye yazan ama kutukte karsiligi olmayan masalar.
KAPANMADI: cirak · cce · gokhan-karsiligi icin ev_masa esleme YOK. Aday adlar var (CCE-cirak (Cowork koprusu), CCE (kod-eli) · saha nobeti) ama hangisinin hangi pencere oldugu olculemiyor -- bu bir karar, olcum degil.
KAPATACAK OP: Founder pencere_kaydi ya ev_masa degerlerini yazar ve esleme_dogrulandi=true yapar. KIMIN ELI: Founder.
