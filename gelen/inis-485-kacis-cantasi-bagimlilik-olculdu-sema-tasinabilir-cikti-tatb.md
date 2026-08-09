# KAÇIŞ ÇANTASI — bağımlılık ölçüldü, şema taşınabilir çıktı, tatbikat koşuldu

`masa:` **carkci** · `an:` 2026-08-09T12:31:32.430411+00:00 · `damga:` verified
`kaynak:` DDL_KACIS_CANTASI.zip · tatbikat PostgreSQL 16.13 · 2026-08-09 12:30Z
`ev_defteri.id:` 485

---

Founder: "Anthropic mortu cekerse bizim ddl ne olacak? Bir masaustu onlemi alsak, herhangi bir motora gecebilecek halde."
OLCUM 1 — BAGIMLILIK (test_turn n=390, en yeni tur 2026-08-08 23:22:57Z):
  kimi-k2.6 183 (%47.8) · mistral-large-2512 78 (%20.4) · claude-sonnet-4-6 74 (%19.3) ·
  gemini-3.1-pro 18 · gpt-5.5 14 · deepseek-v4-flash 9 · grok-4.3 6 · groq-plan-b 1
  HUKUM: motor ZATEN cok-saglayicili; Anthropic birincil bile degil (%19.3).
OLCUM 2 — NE BAGLI, NE DEGIL:
  Bagli DEGIL: butun defterler+kurallar (Supabase/Postgres, 21 MB) · depo/Vercel · 7 model saglayicisi · MACH GATE metni.
  BAGLI: dort zamanlanmis pencere (trig_ kimlikleri Claude/Cowork) · butun masalar (Carkci·CCE·CEO·ciraklar·Genel) · Cowork koprusu.
  TEK CUMLE: URUN YASAR, ATOLYE OLUR. Canta bu yuzden EL i yeniden kurmak icin, veriyi kurtarmak icin degil.
YAPILAN — DDL_KACIS_CANTASI.zip teslim edildi (9311 B):
  00_BOOT.md (bagimlilik haritasi + T+0..T+3 ayaga kaldirma sirasi)
  01_SEMA_yonetisim.sql (motor-bagimsiz sema: kural_metni · ev_defteri+sha tetigi · denetim_defteri ·
    pencere_kaydi · kasa+iki kilit · pencere_yazi · pencere_denetimi · kayitsiz_yazan · kural_kimlik ·
    kural_uyum() · kural_karnesi(). Anthropic e ait hicbir sey yok, Postgres 14+ ve pgcrypto yeter.)
  02_YEDEK.sh (pg_dump tam + cekirdek + CSV + sha256 muhur)
  04_TATBIKAT_RAPORU.md
TATBIKAT KOSULDU (PostgreSQL 16.13, sifirdan initdb, bos kume):
  sema hatasiz kuruldu · pencere_denetimi kostu (OLCULEMIYOR + BAYAT KURAL dogru cikti) ·
  kural_karnesi() kostu (K-02 %50.0, K-03 %100.0, K-04 iz_yok->NULL) · kasa_okuma_sirasi kostu ·
  KASA KILIDI muhurlu metni UPDATE i reddetti · KASADAN SILINMEZ DELETE i reddetti.
TATBIKATTA CIKAN HATA: ilk kosuda K-03 kapsami 0. Sema kusuru degil — tatbikat betiginde deseni
  10\\\\.\\\\d{4,9}/ yazmisim (bash tirnak katmani fazla kacis eklemis). Depodaki deger okundu, duzeltildi, %100 e cikti.
  BUGUNUN UCUNCU KACIS HATASI (once K-01/K-02 de '?, sonra bu). Hepsi ayni sinif: gercek op, sakat girdi.
KANITLANMAYAN: gercek veriyle restore denenmedi (maket test_turn 4 satir kullanildi); pg_dump bu ortamda kosulmadi.
  Yani SEMA TASINABILIR oldugu kanitlandi, YEDEK ZINCIRI kanitlanmadi.
