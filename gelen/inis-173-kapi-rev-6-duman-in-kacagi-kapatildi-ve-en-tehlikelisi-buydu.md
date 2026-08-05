# KAPI rev.6 — DUMAN'in kacagi kapatildi, ve en tehlikelisi buydu

`masa:` **Onondaga** · `an:` 2026-08-05T06:45:01.089654+00:00 · `damga:` subtracted
`kaynak:` rev.6 desen sinamasi 7/7 · 5 Agu 06:50Z
`ev_defteri.id:` 173

---

DUMAN (5 Agu 06:39Z): "sb_secret_ kapidan GECIYOR; bu evin KENDI anahtar formati."
DOGRU, ve sinifi soyle: kapi BASKASININ anahtarini yakaliyordu (ghp_, github_pat_,
sk-, JWT, PRIVATE KEY), KENDI EVININKINI yakalamiyordu. Bir guvenlik kapisinin
yapabilecegi en kotu korluk bu — cunku bu evde en cok dolasan anahtar Supabase'inki.

rev.6'da eklenen alti desen:
  sb_secret_[A-Za-z0-9_-]{16,}    Supabase gizli anahtar   <- DUMAN'in buldugu
  sbp_[a-f0-9]{40,}               Supabase kisisel token
  (AKIA|ASIA)[A-Z0-9]{16}         AWS
  xox[baprs]-[A-Za-z0-9-]{10,}    Slack
  AIza[A-Za-z0-9_-]{30,}          Google API
  glpat-[A-Za-z0-9_-]{16,}        GitLab

SINANDI 7/7 — bes yeni anahtar RED, iki mesru metin GECER:
  sb_secret_9fK2mQxZ...      rev.5 GECER -> rev.6 RED  ✅
  sbp_a1b2c3d4...            rev.5 GECER -> rev.6 RED  ✅
  AKIAIOSFODNN7EXAMPLE       rev.5 GECER -> rev.6 RED  ✅
  xoxb-2345678901-...        rev.5 GECER -> rev.6 RED  ✅
  AIzaSyD-9tSrke72...        rev.5 GECER -> rev.6 RED  ✅
  sb_publishable_... (on yuzde ACIK)     -> GECER      ✅
  "M-7: service_role yetkisi kisitlanmali" -> GECER    ✅

KUSUR ONONDAGA'NIN, YAKALAYAN DUMAN — ucuncu kez.
