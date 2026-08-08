# ÇARK DÖNGÜSÜ KURULDU: kural tek kaynağa, rapor kalıcı deftere, eksik ayak (KAPATICI) eklendi + 2 makine denetçisi

`masa:` **carkci** · `an:` 2026-08-08T07:01:07.362234+00:00 · `damga:` —
`kaynak:` list_triggers (last_fired_at) · apply_migration · execute_sql · update_trigger · create_trigger · node --check · negatif kontroller — hepsi bu turda
`ev_defteri.id:` 337

---

Founder sorusu: "bu loop çalışıyor mu? Çalışmıyorsa kur." — ÖLÇTÜM, sonra KURDUM.

ÖLÇÜM (bu turda, list_triggers + last_fired_at):
Dört görev de enabled, dördü de ATEŞLİYOR. "Sessiz" değillerdi — GÖRÜNMEZLERDİ.
  Gökhan raporu ↔ makine karşılığı  · son ateşleme 2026-08-08 05:03:03Z (1,3 saat önce)
  ÇARK · test_turn denetimi         · son ateşleme 2026-08-08 00:44:59Z (5,6 saat önce)
  parrhesia · saha okuma (CCE)      · son ateşleme 2026-08-07 18:07:30Z (12,3 saat önce)
  Morning brief                     · son ateşleme 2026-08-07 05:08:20Z (hafta içi cron, cumartesi doğru olarak atlamış)

KIRIK OLAN AYAK 1-2-3 DEĞİL, 4-5 VE GÖRÜNÜRLÜK:
 (a) Her koşu raporu SendUserFile ile TAZE bir oturuma bırakıyordu. Oturum kapanınca rapor
     yok oluyordu. Bir sonraki koşu "HATIRLAMIYORSUN" diye başlıyor ve öncekini GÖREMİYORDU.
     Döngünün hafızası yoktu.
 (b) Kurallar promptlara DONMUŞ METİN olarak gömülüydü. İki görevin promptu hâlâ
     "◇ AÇIK (ölçmedim/bilinmiyor)" basıyordu — dün kaldırılan satır. Kural değişince
     hiçbir pencere haberdar olmuyordu. Founder'ın sorusu buydu: "herkes okuyor mu?"
 (c) "Bulgu → yama → motora işlenme" ayağı HİÇ YOKTU. Rapor üretiliyor, kimse kapatmıyordu.

KURULAN OMURGA (migration: carkci_loop_kural_ve_denetim_defteri_0808, apply_migration success):
 · kural_metni      — kuralın TEK KAYNAĞI. Pencere koşarken buradan okur ve okuduğu SÜRÜMÜ
                      raporuna yazar. kural_surumu NULL ise o koşu kuralı okumamıştır: makbuz
                      mekanizması budur (m.XI). Yürürlükte: MUHUR/2026-08-08-rev2 (6.088 krk),
                      LOOP_USULU/2026-08-08a (1.498 krk).
 · denetim_defteri  — koşuların KALICI defteri. bulgular jsonb (sınıf/tur/lamba/model/birebir
                      alıntı/hüküm/motor maddesi) + odenmemis jsonb (is/denedim/kapanmadi_cunku/
                      kapanir) + durum(acik|yamalandi|basildi|dusuruldu) + yama_yolu.
                      Bir sonraki koşu buradan okur. Döngünün hafızası artık burada.

GÖREVLER YENİDEN YAZILDI:
 · trig_01GVFm6PGjNsUkEjdBJQgJtX → "ÇIRAK · saha okuma → defter (parrhesia.one + ayvalik.ai)"
   5.778 krk. ADIM 0 kuralı tablodan okur; ADIM 4 deftere yazar; ADIM 5 bu boruya iner.
   Sınıflar A–H ölçülmüş vakalarla çivilendi. ayvalik.ai için: tur tablosu YOK, uydurma yasak.
   Sıradaki koşu: 2026-08-08 12:44Z.
 · trig_013TtsXQrNrSBG9xfqFuv2Yj → YENİ: "KAPATICI · bulgu → yama → Founder'ın düğmesi"
   4.493 krk, günlük 07:15Z, push+email. Eksik 4-5. ayağı budur: defterdeki acik satırları alır,
   bulguyu SINIF kapatan motor maddesine çevirir, yamayı yazar, node --check + kapı denetçisi +
   NEGATİF KONTROL koşar, durumu 'yamalandi' yapar, ve ilk satırında "FOUNDER'IN BASACAĞI: n düğme"
   yazar. Deploy/commit/promote YOK. İlk koşu: 2026-08-08 07:15Z.

İKİ MAKİNE DENETÇİSİ YAZILDI (artık "okudum" bir iddia değil, çıkış kodu):
 · araclar/muhur_denetle.mjs (4.423 B · 8539dc2cb5264f23) — mührü, üç ödemeyi, yasak durum
   adını ("AÇIK/open/TBD/bilinmiyor"), yasak hedge'i ve "op-fiili var ama ÖLÇTÜM boş" halini arar.
   NEGATİF KONTROL koşuldu: bozuk örnek 5 ihlalle kırmızı (çıkış 1), düzgün örnek yeşil (çıkış 0).
 · araclar/kapi_yuklu_mu.mjs (1.514 B · de65997816e8c9e2) — kuralın motora GERÇEKTEN girdiğini
   beş lambada, iki dilde kanıtlar. NEGATİF KONTROL koşuldu: çivi sökülünce kırmızı (çıkış 1).

BU DENETÇİ İLK KOŞUSUNDA CANLI BİR ARIZA BULDU — aşağıdaki satıra bakın.
