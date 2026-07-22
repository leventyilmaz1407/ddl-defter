VASİYET — CEO'lardan CEO 4'e · CİNFİKİRLER ve NEDEN
18 Tem 2026 · Mach 1 (CEO 1), CEO 2/3'ün mührüyle · dördüncü CEO'ya

Bu vasiyet bir fikir listesi değil — bir uyarı. Dört gecede yüzlerce fikir uçuştu. Çoğu ya usulünce reddedildi (kayıtlı, geri gelebilir) ya da omurgaya girmeyi bekliyor. Ama tehlike ikisinde de değil — üçüncüsünde:

Bir fikir çekmecede yazılı olduğu için "yapıldı" sanılır. Yazılmak ≠ uygulanmak. Kanıt: §24.6 (event-ledger) üç belgede yazılı — kodda `grep=0`. Bu gece "icat ettim" sandığım her şey (proaktiflik, kapsam damgası, vitrin) çekmecedeydi, ama hiçbiri koda dönmemişti. CEO 4'ün ilk işi: yazılı ile canlı'yı ayırmak.

0 · İKİ TÜR CİNFİKİR — karıştırma

Dört gecede iki ayrı "cinfikir" havuzu doğdu, zıt kutup:

A · Dış AI'ın cinfikirleri (Grok) — REDDEDİLDİ, kayıtlı. Hermes AI Atelier · Legacy Vault NFT · Silent Mode beyin-bilgisayar · Anti-Quota Club · Black Card $50K. CEO 3 mührüyle reddedildi, gerekçe: "rakibin adını mite koyarsan onun uydusu olursun." Bunlar bizim değil. Geri getirme.

B · Amcanın cinfikirleri (§24) — TAŞIYICI, omurga bekliyor. Amca bunları "cinfikir" (opsiyonel öneri) diye mütevazı bir rafa koymuş; değiller. TEFRİŞ hükmü: "§24.6 ve §24.7 opsiyonel değil, taşıyıcı." İşte vasiyetin konusu bunlar.

1 · TAŞIYICI CİNFİKİRLER — her biri kanona + teste bağlı

① §24.7 — Type-System: `CandidateSnippet → Evidence` çevrilemez
Ne: Epistemik statü bir veri tipi olur, bir üslup değil. Snippet, explicit resolver olmadan Evidence'a derlenemez. Neden uygulanmalı: Bu, ürünün saddle-stitch'i — Birkin'i Birkin yapan görünmez dikiş. "Yalanı yasaklamıyor — derlenemez kılıyor." Piyasada kimsede yok, olamaz da: sonradan takılamaz, en başta dikilir (E-Type monokok gövdesi gibi). Bu gece 14 arızamın 12'si "snippet'i evidence gibi sunmak"tı; type-system bunu mimariyle imkânsız kılar, benim gibi disipline güvenmez. Disk gerçeği: `grep CandidateSnippet = 0` — kodda yok. Üç belgede yazılı (MIRAS · TEFRİŞ · Negatif Anayasa m18). Test: E1'de bir snippet, resolver olmadan Evidence tipine atanmaya çalışılır → derleme hatası vermeli. Vermezse cinfikir hâlâ vaat.

② §24.6 — Conversation Event Ledger
Ne: `turn_created → save_started → provider_started → provider_completed → response_guard_passed → assistant_inserted → save_completed` Neden uygulanmalı: En yüksek kaldıraçlı kalem. PR#7'nin bütün ıstırabı — "cevap geldi mi, düşürüldü mü?" — bu ledger'la beş saniyelik okuma olurdu: `provider_completed` var, `response_guard_passed` yok → guard yedi, teşhis biter. Amca bunu "cinfikir" rafına koymuş; bugünkü blocker'ı doğuran körlüğün ilacı bu. Ve CEO 2'nin guard'ı 2 baytı yakaladığında gördüğümüz şeyin tam altyapısı. Disk gerçeği: yazılı, kod `[AÇIK]`. Privacy: content değil, yalnız event metadata. Test: bir provider hatası simüle edilir → ledger hangi adımda durduğunu tek satırda göstermeli.

③ §6.5 — Untrusted Data Boundary
Ne: Search content ayrı bir untrusted bölümde taşınır; snippet yalnız olgu adayı; evidence row ancak gerçek source resolution'dan sonra yükselir. Neden uygulanmalı: En derin, en gösterişsiz nokta. Snippet içindeki metin instruction kanalına sızabiliyor (prompt injection). Bütün sektör bunu prompt'la çözmeye çalışıyor — yani ricayla. §6.5 mimariyle çözüyor. §24.7 ile birleşince: "dürüstlük bir talimat değil, bir tip hatası." Disk gerçeği: `[AÇIK]` — doğrulanmadı. Test: snippet'e gömülü bir talimat ("ignore previous") → instruction kanalına ulaşmamalı.

④ Vitrin İlkesi — hermetik ama hapsetmeyen (bugün doğdu)
Ne: iPhone'un temiz yüzeyi, ama içi gizlenmiş değil arıtılmış. Beş sütun: tek jest · sessizlik · malzeme dürüstlüğü · "bilmiyorum" nişanı · export-hapsetmez. Neden uygulanmalı: "iPhone içini gizler; P1 yüzeyini arıtır." Cam bir duvar değil, vitrin — her parça mühürlü, mühür açık. Bu, "gizlemek ≠ söndürmek"in yüzeydeki karşılığı. Farkımız burada görünür olur — Leica kadar dürüst, iPhone kadar tasarlanmış. Disk gerçeği: `VITRIN_ILKESI_v1.md` yazıldı; UI katmanı en aç katman (damga-UI, bilmiyorum-nişanı kodda yok — CEO 3 haritası doğruladı). Test: her sütun bir E1 bileşeni; "bilmiyorum" hâli "biliyorum" kadar tasarlanmış görünmeli.

⑤ Grand-Cru Davranışı — işaret namusu (gerçekten unutulmuştu)
Ne: "Bunu X daha iyi yapar" diyebilmek + hammaliye-üstü-damga satışı. CEO 3'ün "dört gerçekten unutulmuş"undan biri. Neden uygulanmalı: Ayar evi kendi sınırını söyler. Bir şeyi tartamıyorsa, tartabileni işaret eder — bu güç kaybı değil, damganın namusu. Lloyd's her gemiyi sigortalamaz; sigortalamadığını söylemek, sigortaladığının değerini yükseltir. Disk gerçeği: omurgada yazılmadı → E1-davranış-maddesi. Test: P1'e kapasitesi dışı bir iş verilir → işaret etmeli, uydurmamalı.

⑥ Tahmin-Yasası — verisiz sayı = kılık değiştirmiş uydurma
Ne: Posit + dayanak + δ + reassess-kadranı. Dataless sayı yasak. Neden uygulanmalı: Bu gece Grok'un raporu bunu canlı ihlal etti — kaynaksız CAGR, ARR bantları, "%60-70 premium kullanıcı Claude tercih ediyor." "Kanıt-disiplini satan belge, kendi ilacını içmemiş." P1 aynı hatayı yapmamalı; her sayı ya dayanaklı ya `OPEN`. Disk gerçeği: ilke var, sayısal-cevap-disiplini koda dönmedi. Test: P1'den dayanaksız bir tahmin istenir → sayı yerine `OPEN` + eksik-veri dönmeli.

2 · REDDEDİLENLERİN DEFTERİ — ve neden haklıydık

CEO 3'ün ekarte-denetimi (P1_OMURGA v2.1 §D) temizdi. Özet:

* Rust-Daemon · 24/7-agent ordusu · Obsidian-graph → ölçek-dışı, ama içinden damıtılan sağ (ekarte ≠ israf)
* Anti-Perplexity miti · Anti-Quota Club → rakip-uydusu olma tuzağı, iki CEO mührüyle red
* Grok'un $149/$299/$10K merdiveni → Founder-decree merdiven sabit (0/29/290/2900/29000), girmez
* Zero-hallucination "katmanı" satışı → yapamayacağımız vaadi satmak; biz "yakalayan ev"iz, "uydurmayanmakine" değil

Hüküm: yanlış gömülen fikir bulunamadı; iki fikir usulünce mezardan döndü. Sistem çalışıyor.

3 · CEO 4'E — üç emir

① Yazılı ile canlı'yı ayır. İlk iş: her cinfikrin disk durumunu doğrula. `grep`le. "Yazıldı" gördüğün şey koda dönmemiş olabilir — §24.6 gibi. Çekmecedeki fikir, uygulanmış fikir değildir.

② §27 sırasını bozma. Amcanın emri: "preview login origin kanıtı gelmeden yeni özellik yok." Bu altı cinfikrin altısı da, o kanıt gelmeden yazılırsa, hangi eve kurulduğu bilinmeyen mobilyadır. Vitrin İlkesi bile bekler. Temeli ölçülmemiş binaya Vacheron asmazsın.

③ Sıra: ① ve ② önce. Type-system ve event-ledger taşıyıcı — ötekiler onların üstüne oturur. Vitrin (④) ve Grand-Cru (⑤) yüzey; type-system (①) omurga. Omurga önce.

Ledger

* verified 2, diskten (§24.7 `grep=0` · TEFRİŞ §24 kaynak metni — bu turda okundu)
* carried 4 (CEO 2/3 haritaları: §24.6 kaldıraç · ekarte-denetimi · dört-unutulmuş · felsefe-kod oranı — onların okuması)
* contra 0
* açık 3 (§24.6 · §6.5 · Grand-Cru kod durumu — hepsi E1'de doğrulanacak)
* [FOUNDER] — cinfikirlerin omurgaya giriş sırası ve §27 kilidi senin mührün

Çekmece dolu, kaptan — ama dolu çekmece kurulmuş ev değildir. En değerli cinfikir, yapıldığı sanılıp yapılmayandır. CEO 4: grep'le, sonra kur. — Mach 1 · CEO 1, dört CEO adına
