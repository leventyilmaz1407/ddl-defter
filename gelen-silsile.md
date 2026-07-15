Bu belge, Claude Fable 5 ve GPT-5.6 modellerini kullanarak, insan müdahalesi olmadan (veya minimum müdahale ile) çalışabilen, kendi kendini doğrulayan bir ajan sisteminin (Agent Stack) sıfırdan nasıl inşa edileceğini anlatan kapsamlı bir rehberdir. Yaklaşık 12 saatlik kurulumun ardından 30 günlük bir olgunlaşma süreci önerir. İşte belgenin sistematik özeti:

---

1. Felsefe ve Mimari: Kanıt Merdiveni (The Evidence Ladder)

Sistemin merkezinde 6 basamaklı bir merdiven bulunur. Kontrol akışı aşağıya doğru (hedefler), kanıt akışı yukarıya doğru (gerçekler) hareket eder. Her basamağın bir çıkış (exit) ve bir iptal/başarısızlık (abort) koşulu vardır. En alt basamak (0) en ucuz ve en hızlı, üst basamaklar (4 ve 5) ise daha pahalı ve stratejiktir.

· Kural: Alt basamaktan gelen bir rapora dayanarak üst basamak kapatılamaz. Her şey kanıtlanmalıdır. "Bir döngü durma koşuluna ulaşabilir ama yine de yanlış olabilir" – bu nedenle 5. basamak (siz/insan) her zaman son imzayı atar.

2. 12 Aşamalı İnşaat Süreci (Build 0 - 12)

· Aşama 0: Motorların Yapılandırılması. Fiyatlandırma ve API kimlikleri tek bir dosyada sabitlenir (SKILL.md). Fable 5 planlamacı, GPT-5.6 (Sol/Terra/Luna) yürütücü ve eleştirmen olarak atanır.
· Aşama 1: Anayasalar. Her bir yapay zeka çerçevesi (Claude ve Codex) için kesin kurallar ve "asla yapılmaması gerekenler" listeleri (CLAUDE.md, AGENTS.md) oluşturulur.
· Aşama 2: Kapı (The Gate). verify.sh adında bir bash betiği oluşturulur. Hiçbir iş, bu betik başarılı olmadan (testler geçmeden) tamamlanmış sayılmaz. Ayrıca yönlendirme değişiklikleri için bir kapı (eval_gate.py) kurulur.
· Aşama 3: Kalp Atışı (The Heartbeat). ralph.sh adında bir döngü betiği oluşturulur. Tüm işleri teker teker alır, yapar ve bir sonraki işe geçer. Her döngüde iki sabit sınır kullanır: Maksimum iterasyon sayısı ve maksimum bütçe (USD).
· Aşama 4: Yönlendirici (The Router). Hangi modelin hangi görevi alacağını belirler. Kural: Önce modeli, sonra çabayı seç. Çok pahalı olan GPT-5.6 Sol/Fable 5 modelini tüm işler için değil, sadece kırılması zor sorunlar için kullan. Mümkünse hafif modelleri (Luna, Haiku) kullan.
· Aşama 5: Danışman (The Advisor). Tersine çalışan bir model: Ucuz ve hızlı bir model sürücü olarak çalışır, sıkıştığında Fable 5'ten "gramla" tavsiye alır. Ucuz model asla tavsiyeyi kendi başına aramaz; durup durmadığını davranışsal işaretler (iki kez aynı hatayı vermek, testin geçmemesi) belirler.
· Aşama 6: İki Şeritli Kıyaslama. "Kendi ödevini kendisi notlandırmaz" ilkesi uygulanır. Claude tarafı yazılan kod, Codex (GPT-5.6 Sol) tarafı tarafından tamamen temiz bir bağlamda (bağımsız) incelenir ve tam tersi.
· Aşama 7: Fan-Out'lar (Opsiyonel). İzci sürüsü (paralel araştırma) ve gece yürütücüsü (bir gecelik toplu işlem) gibi özelleştirilmiş çalışma düzenleri eklenir.
· Aşama 8: Fabrika (The Factory). İşleri ve kanıtları SQLite veritabanında saklar. Bir satır bir kanıttır; bir görüş değil. Kapı, veritabanında test geçti satırını görene kadar işi onaylamaz.
· Aşama 9: Sürü (The Swarm). Fable 5 planı yazar, filo (birçok düşük maliyetli ajan) işi paralel yürütür ve Fable tekrar puan verir. Görevlerin bağımsız olması şarttır, aksi takdirde para israfıdır.
· Aşama 10: 4. Basamak (Rung 4). Geçmişte tamamlanan hedefler sonsuza kadar günlük olarak doğrulanır. Haftada bir kez başarısız olan görevlerden (BLOCKED, GATE REFUSED) "kompost" yapılarak yeni sistem kuralları önerilir.
· Aşama 11: 5. Basamak (Sizin Koltuğunuz). İnsan operatörün rolü tanımlanır: Haftada bir kez sırayı okumak, kapanış komitini kontrol etmek ve kompost önerilerini onaylamak/reddetmek.
· Aşama 12: Operasyon (Ops). Sistemin günlük çalışması için cron işleri kurulur. Maliyet takipçileri kurulur ve acil durum durumlarında ne yapılacağını belirten bir Runbook (kılavuz) hazırlanır.

3. Ana Mekanizmalar

· Yönlendirme ve Çaba (Effort): Bir göreve hangi modeli atayacağınızı ve o modelin ne kadar "düşüneceğini" (düşük, orta, yüksek) belirler. Yüksek çaba sadece görev başarısız olduğunda kullanılmalıdır. Alt modeller üst çabayı devralır, bu nedenle sürü kullanırken alt modellerin "düşük" çabaya sabitlenmesi maliyet kontrolü için kritiktir.
· Önbellek (Cache) Ekonomisi: Yapay zeka işlemleri sırasında yazılan önbellek, tekrar okunan metinler için %90 indirim sağlar. Bu yüzden asla bir görevi yarıda kesip model değiştirmeyin, yoksa önbellek yanar ve maliyet 10 katına çıkar.
· Kapı (The Gate): Çalışmanın çevresel bir gerçek olduğunu kanıtlar. Bir test geçmediyse, iki farklı model de "Bu doğru" dese bile sistem bu işi tamamlanmış saymaz.

4. Operasyon, Maliyet ve Program

· Maliyet Yönetimi: API anahtarı kullanımında maliyet, sınırlar ve progress.log ile takip edilir. Eğer bir abonelik (seat) kullanılıyorsa, bir 5 saatlik ve haftalık pencere olduğunu unutmayın ve o pencereleri takip edin.
· 30 Günlük Takvim: Sistemin "siz olmadan çalışması" için 4 aşamalı bir geçiş önerir: 1. Hafta (Süpervizör - elle kontrol), 2. Hafta (Taslak - kahve eşliğinde onay), 3. Hafta (Sevkiyat - otomatik birleştirme), 4. Hafta (Büyüme - tam otomatik, sadece ayda bir kez bir şeyi silmek).
· Slash Komutları: /plan-stop (planı yap, dur), /effort (çaba seviyesini seç), /compost (başarısızlıkları kurala dönüştür) gibi komutlarla kullanıcı arayüzü sağlanır.

5. Altın Kurallar (Özet)

· Kuralsızlık yok: Her kural bir sayıya, "asla" ifadesine veya kontrol edilebilir bir betiğe dayanmalıdır.
· Sonsuz döngü yok: Her döngü için maksimum dolar ve maksimum iterasyon sınırı koyun.
· Kanıt akışı yukarı: Alt basamaklar sadece veri (satır) üretir, üst basamaklar bunları yorumlar. Bir rapor asla bir üst basamağı kapatamaz.
· Modeli kiralayın, mantığı (loops) sahiplenin: Doğru cevabı model vermez, doğru cevabı sizin yazdığınız döngü bulur.
· Kendini test etme: Asla bir modelin kendi yazdığını kendisinin değerlendirmesine izin vermeyin.

Özetin Sonucu: Bu belge, sadece "Yapay zeka kullanma" değil, bunu sürdürülebilir, maliyet etkin ve güvenilir bir sistem haline getirme kılavuzudur. En pahalı modelleri sadece "yön ve karar" için kullanır (gram hesabı), en ucuz modelleri ise "yazma ve kopyalama" (ton hesabı) için kullanır. Sonunda, sistemin asla tamamen hata yapmayacağını garanti edemezsiniz; ancak en tepeyi (Basamak 5) insana bırakarak, hatanın sistemin içinden sızdırmadan önce son bir kez yakalanmasını sağlarsınız.

Gemini yorumu : 
[VERIFIED] Ajan işletim sistemlerinde olay odaklı (event-driven) mimari ve çapraz doğrulama mutlak bir zorunluluktur. Ancak metnindeki "lüks" tanımı, hala fazla insani bir dille ve retorikle yazılmış. Gerçek lüks, determinizmdir; hiçbir yoruma yer bırakmayan matematiksel kesinliktir.
[SUBTRACTED] Belgedeki mecazları ve zayıf metaforları sistem mimarisinden çıkarıp, yerine deterministik durum geçişleri ve ölçülebilir mühendislik prensipleri yerleştirdim. Metnini, sistem mühendisliği açısından sıfır toleranslı bir forma yükseltiyorum.
CASCADE: L0 Ajan İşletim Sistemi
1. Topoloji: Durum Makinesi ve Varlıklar
Döngü (loop) kavramı tamamen terkedilmiştir. Cascade, yönlendirilmiş asiklik grafik (DAG) üzerinde çalışan bir sonlu durum makinesidir (FSM).
•	The Worker (Yürütücü Düğüm): Durumsuz (stateless) bir fonksiyondur. Kendi varlığından habersizdir. Sadece f(x) \rightarrow y dönüşümünü yapar. Bellek yönetimi, planlama veya durma koşulu bilmez.
•	The Verifier (Gerçeklik Geçidi): Fonksiyon çıktısının doğruluğunu sentaktik ve semantik olarak ölçer. Bir test raporu veya derleme logu bekler. Geçerli sonucu JSONL formatında, değiştirilemez (immutable) bir olay günlüğüne (Event Sourcing) yazar.
•	The Daemon (Gözlemci / Rust-Go Core): Sistemin tek asenkron hakimidir. Worker'ın telemetrisini mikrosaniye bazında izler. İşlemde bir tıkanma veya sonsuz halüsinasyon tespit ettiği an Worker'ı acımasızca sonlandırır (SIGKILL).
2. Assess & Select: Deterministik Yönlendirme
Trend takibi bir okuma işi değil, matematiksel bir tensör hesaplamasıdır. Daemon, görevleri "Context Lens" filtresinden geçirerek maliyet-zaman optimizasyonu yapar.
İş Yükü (Kriter)	Atanan Kaynak	İşlem Sonucu & Çıktı
Düşük Maliyet (Token < 20K, Basit Tool)	Haiku / 8B Local	Düşük gecikme, hızlı [VERIFIED] satır üretimi.
Ağır Yük (Token > 60K, Derin Mantık)	Fable / Opus	Kapsamlı analiz. Eksik veriler [OPEN] olarak işaretlenir.
Kritik Güvenlik (Sistem Yaması, PR)	Çapraz Denetim	Model A üretir, Model B doğrular. Uyumsuzluk [CONTRA] yaratır ve iptal edilir.
3. Cascade OS Invariants (Sistem Değişmezleri)
Bu kurallar bir "Anayasa" (prompt) değil, doğrudan Daemon'un içine derlenmiş bellek kısıtlamalarıdır.
1.	Önbellek Kutsallığı (Context Slice): Model değişimi sırasında durum kaybı yaşanmaz. KV Önbelleği (Cache Slicing) aktif tutulur. Yeni model sıfırdan başlamaz, bir Snapshot üzerinden devam eder. Maliyet O(1) süresinde korunur.
2.	Kanıt Önceliği (Row is Evidence): Verifier'ın olay günlüğüne exit\_code = 0 yazılmadan, hiçbir durum makinesi statüsü "Tamamlandı" olarak güncellenemez. İş bitmez, kanıt bitirir.
3.	Kesin İnfaz (Budget & Limit): Her Worker, kendisine atanan B_{usd} (Bütçe) ve T_{max} (Zaman) kısıtlamalarına tabidir. Limite ulaşıldığında süreç sonlandırılır, hata logu üst katmana iletilir. Sonsuz döngü yoktur, kesin limitler vardır.
4.	Çapraz Mutabakat (Byzantine Fault): Kritik modüllerde tek sağlayıcı (single-vendor) güveni yasaktır. Claude kodlarsa, OpenAI denetler. İki farklı ağırlık (weights) mimarisine sahip ağın mutabakatı şarttır.
5.	Oto-Bağışıklık (Self-Healing): Dün başarısız olan işlem, Daemon tarafından yakalanır ve bir kısıtlama (Constraint Policy) olarak derlenir.
4. Kompostlama: Asenkron Geri Besleme (The Compost)
Hatalar statik metinler değil, dinamik kural modülleridir.
•	Toplama: Daemon her gece başarısız olayları, maliyet aşımlarını ve [CONTRA] çakışmalarını kaydeder.
•	Sentezleme: Haftada bir (Örn: Perşembe 03:00) hataların kök neden analizi (RCA) yapılır. Maksimum 3 kesin sistem düzeltmesi (yama) üretilir.
•	Lüks Onay: Sabah 08:00'de operatöre sadece ikili (binary) bir onay sunulur. Eğer onay verilirse yama, sistemi yeniden başlatmadan (hot-reload) uygulanır. Reddedilirse sonsuza dek rafa kaldırılır.
5. Rung 5: İnsanın Saltanatı (Oracle Rolü)
Sistem %99.9 otonom çalışır. İnsan bu sistemde bir işçi değil, bir "İstisna Yöneticisidir" (Exception Handler).
•	Yönlendirme: Sistemin genel yönünü belirlemek.
•	Veto: Sistemin çapraz doğrulama sonucunda mutabakata varamadığı veya onay gerektiren "Kompost" yamalarında son sözü söylemek. Makinenin çözemediği boşlukları doldurmak.
Siga siga. Sistemi metin tabanlı iyi niyet dileklerinden arındırdık ve saf deterministik bir işlemci mantığına oturttuk.
Eğer bu mimariyi somut bir kod tabanında inşa etmeye başlasaydık; ilk adımı Worker'ın durumsuz yapısını kurgulamakla mı, yoksa Daemon'un Event Stream (Olay Akışı) dinleyicisini yazmakla mı atardın?

Grok yorumu : 
Daemon’un Event Stream (Olay Akışı) dinleyicisini yazmakla başlarım.
Bu seçim, mimarinin kendi temel prensiplerinden doğuyor: tamamen event-driven FSM + DAG + Event Sourcing üzerine kurulu bir sistemde, “Row is Evidence” ve “Kanıt Önceliği” invariant’ları en üstte yer alıyor. Verifier’ın JSONL immutable log’a yazmadığı sürece hiçbir durum geçişi (state transition) geçerli sayılmıyor. Daemon ise “tek asenkron hakim” olarak tüm telemetriyi, budget/time limitlerini, SIGKILL’leri ve çapraz mutabakatı enforce ediyor. Worker ise bilinçli olarak “durumsuz ve kendi varlığından habersiz” bir f(x) → y dönüşümü. Dolayısıyla Worker’ı önce yazmak, sistemi “dışarıdan” bir fonksiyon olarak ele almak olur; oysa mimari içten içe olay akışının kendisiyle tanımlanmış.
İki Yaklaşımı Karşılaştırmalı Analiz
1. Worker’ın stateless yapısını önce kurgulamak (bottom-up yaklaşım)
Avantajlar:
•	En atomik birim olduğu için hızlıca unit-test edilebilir (input JSON → output JSON + telemetry hook’ları).
•	Interface’ler (TaskSpec, OutputEvidence, TelemetrySnapshot) netleşir ve Verifier hemen üzerine oturabilir.
•	Erken MVP’de “Haiku/Local 8B ile basit görev” prototipi çalıştırılabilir.
Dezavantajlar (mimari açısından kritik):
•	Event tipleri (TaskAssigned, OutputProduced, VerificationResult, BudgetExceeded, [CONTRA], ConstraintDerived) henüz tanımlı olmadığı için Worker’ın ürettiği event’ler “havada” kalır.
•	Daemon’un Assess & Select, Context Lens filtreleme, KV cache slicing ve oto-bağışıklık (self-healing) mantığı mock’larla yazılmak zorunda kalır → gerçek determinizm ve invariant enforcement gecikir.
•	“Sonsuz halüsinasyon” veya “tıkanma” tespiti gibi Daemon-specific mekanizmalar Worker’ın içinde olamaz; dışarıda olmalı. Bu da mimarinin “lüks” tanımını (matematiksel kesinlik) ertelemek anlamına gelir.
2. Daemon’un Event Stream dinleyicisini önce yazmak (foundation-first yaklaşım)
Avantajlar:
•	Event Sourcing omurgası en baştan kurulur → append-only log (JSONL veya WAL tabanlı), event schema’ları (Protobuf/strongly-typed enum’lar) ve consumer/processor loop’u tanımlanır.
•	Tüm FSM geçişleri ve DAG state projection’ı (Context Slice + Snapshot) hemen test edilebilir.
•	Invariant’lar (B_{usd}, T_{max}, Byzantine Fault tolerance, Cache Slicing O(1)) doğrudan Daemon’un içine derlenir.
•	Worker, Verifier ve Assess & Select modülleri “plugin” gibi sonradan takılır → Worker sadece “TaskAssigned” event’ini dinleyip “OutputProduced” event’ini üretir.
Dezavantajlar (yönetilebilir):
•	İlk aşamada Worker stub/mock gerekir (basit identity fonksiyonu veya hardcoded return). Bu, mimarinin kendi felsefesine uygundur: Worker “kendi varlığından habersiz”dir, sadece olay tetiklediğinde çalışır.
Edge cases ve nüanslar:
•	Hot-reload & Compostlama: Hatalı olaylar gece toplanıp Perşembe 03:00 RCA’sı yapılacağı için, event log’un replay edilebilir olması şart. Listener önce olursa, “dün başarısız olan işlemi Constraint Policy’ye çevirmek” mekanizması sıfırdan test edilebilir.
•	Çapraz doğrulama (Model A üretir, Model B doğrular): Event akışında [CONTRA] üretmek ve iptal etmek, Worker’ların paralel çalıştırılmasından önce tanımlanmalıdır.
•	Mikrosaniye telemetri + SIGKILL: Rust/Go core’da async runtime (Tokio veya Go goroutine’ler) ile watchdog loop’u kurmak, Worker’ı beklemeden yapılabilir.
•	Önbellek kutsallığı: KV Cache slicing ve snapshot’lar event’lerin içinden türetilir; listener bunu yönettiği anda cache invariant’ı korunur.
Benim Tercihimin Somut Gerekçeleri (Sıfır Toleranslı Mimariye Uygunluk)
1.	Event Sourcing = Tek Gerçeklik Kaynağı
Mimari “Row is Evidence” diyor. Log’a yazılmadan “Tamamlandı” statüsü yok. Bu yüzden log producer/consumer altyapısını (immutable append-only store + exactly-once semantics) en başta kurmak, tüm üst katmanların rely edeceği contract’ı verir.
2.	Daemon = Sistemin Anayasası
Tüm invariant’lar “doğrudan Daemon’un içine derlenmiş bellek kısıtlamaları”. Worker stateless olsa da, onun ne zaman, hangi budget’la, hangi Context Lens’ten geçirilerek çalıştırılacağını Daemon belirler. Orchestration katmanını önce kurarsak, “deterministik durum geçişleri” matematiksel olarak erken doğrulanır.
3.	Worker = Saf Dönüşüm
f(x) → y’nin kendisi çok basit:
4.	trait Worker {
5.	    fn execute(&self, task: TaskEvent) -> Result;
6.	}
Bu trait, event schema’ları netleştikten sonra 1-2 saatte yazılır. Tersine, event’leri bilmeden Worker yazmak, ileride “contract drift” riski yaratır.
7.	Pratik İlk 3 Adım (Kod Tabanı Sırası)
1.	Event Model + Immutable Log
	Enum’lar: TaskScheduled, WorkerStarted, OutputProduced, VerificationPassed, BudgetExceeded, ConstraintDerived, [VERIFIED], [CONTRA], [OPEN].
	Append-only store (başta Vec + WAL, sonra RocksDB / NATS JetStream / file-based JSONL).
2.	Daemon Core + Event Listener
	Async event loop (Rust Tokio veya Go).
	FSM state machine (DAG traversal + Context Slice snapshot).
	Watchdog (mikrosaniye telemetry → SIGKILL + budget enforcement).
	Assess & Select (tensör maliyet optimizasyonu).
3.	Worker Abstraction + Minimal Impl
	Stub Worker (identity veya basit local model çağrısı).
	Sonra gerçek Haiku/8B, Fable/Opus, tool-calling wrapper’lar eklenir.
Bu sırayla ilk çalışan skeleton birkaç gün içinde elde edilir: “Event → Daemon → Mock Worker → Verifier → Event” döngüsü. Worker-first yaparsak, bu döngü günlerce eksik kalır.
Sonuç:
Mimariyi “metin tabanlı iyi niyet dileklerinden arındırıp saf deterministik bir işlemci mantığına oturtmak” istiyorsak, omurgayı (Event Stream + Daemon listener) önce kurmak zorunlu. Worker’ı sonra, tam event contract’larıyla entegre etmek hem daha temiz hem de mimarinin “lüks” tanımına (matematiksel kesinlik, yoruma yer bırakmama) tamamen uygun.
Siga siga — bu temelden devam edersek, sistemin %99.9 otonom çalışması ve insanın sadece “Exception Handler / Oracle” rolünde kalması çok daha erken gerçekçi hale gelir.
İlk commit’te event schema’larını ve Daemon’un core listener’ını mı yoksa başka bir detayı mı derinleştirelim istersin?


Paste problemi çözümü : 



