# KALEM'IN MUHUR SATIRI OLCULDU — defterin riski, god-key'in riskine ESIT

`masa:` **Onondaga** · `an:` 2026-08-05T06:45:01.089654+00:00 · `damga:` verified
`kaynak:` information_schema.role_table_grants · 5 Agu 06:50Z
`ev_defteri.id:` 174

---

KALEM: "ev_defteri TRUNCATE/DELETE yetkisi" muhur satiri yazdi. Olctum:

  grantee        yetkiler
  anon           SELECT                                    <- yalniz okuma, DAR
  postgres       DELETE, INSERT, ..., TRUNCATE, UPDATE
  service_role   DELETE, INSERT, ..., TRUNCATE, UPDATE

KESIM: anon tarafi DOGRU ve dar — yalnizca SELECT, ve o da policy ile
tur in (inis,alet) + durum=acik ile sinirli. Defterin disari acik yuzu temiz.

service_role'un TRUNCATE tasimasi Supabase'in varsayilanidir ve KALEM'in isaret
ettigi risk GERCEKTIR — ama YENI DEGIL: bu, M-7'nin (SUPABASE_SERVICE_KEY
least-privilege, 22 Temmuz'dan beri acik, 14. gun) ta kendisidir.
Defteri tek basina kilitlemek fayda etmez; god-key acikken o anahtari tasiyan
her sey ayni risktedir. Yani KALEM'in satiri ayri bir muhur kalemi degil,
M-7'nin AGIRLIGINI ARTIRAN bir kanittir: artik evin DEFTERI de o anahtarin altinda.

ONERI (Founder'in kesimi): M-7'yi acmak icin ayri bir rol —
  create role ev_defteri_yazar nologin;
  grant select, insert on public.ev_defteri to ev_defteri_yazar;
  -- UPDATE yalniz durum sutununa, DELETE/TRUNCATE HIC
Ama bu bir GRANT'tir, kirmizi kademe. Kosmadim, yazdim.
