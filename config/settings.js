// /**
//  * ╔══════════════════════════════════════════════════════════════╗
//  * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
//  * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
//  * ╚══════════════════════════════════════════════════════════════╝
//  *
//  *  Cara pakai:
//  *  1. Baca setiap bagian (1–7)
//  *  2. Ganti nilai yang ada tanda  ← GANTI INI
//  *  3. Simpan file → refresh browser
//  */

// /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    1. PIN MASUK
//    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
// const WEBSITE_PIN = "3112";              // ← GANTI PIN

// /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    2. NAMA PENERIMA
//    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    Nama yang muncul di halaman utama (hero).                      */
// const RECIPIENT_NAME = "AYUK NUR AZIZAH ";           // ← GANTI NAMA


// /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    3. MUSIK
//    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    FILE MUSIK  → taruh di:  assets/music/song1.mp3
//    FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
//    Lalu ganti judul dan nama artis di bawah ini.                  */
// const MUSIC_TRACKS = [
//   {
//     title:  "Sampai Jadi Debu",             // ← GANTI JUDUL LAGU
//     artist: "Banda Neira",                   // ← GANTI NAMA ARTIS
//     src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
//     cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
//     startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
//   },
// ];

// /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    4. FOTO GALERI
//    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    Taruh foto di:  assets/images/
//    Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
//    Ganti caption (keterangan foto) di setiap baris.               */
// const GALLERY_PHOTOS = [
//   { file: "img1.jpeg", caption: "One smile from you can fix my whole day." },  // ← GANTI CAPTION
//   { file: "img2.jpeg", caption: "You're the reason my heart feels so full." },
//   { file: "img3.jpeg", caption: "Every second with you is my favorite." },
//   { file: "img4.jpeg", caption: "Some people search for happiness, I found mine in you." },
//   { file: "img5.jpeg", caption: "You turned my ordinary life into something beautiful." },
//   { file: "img6.jpeg", caption: "My heart feels safest when it's with you." },
//   { file: "img7.jpeg", caption: "If I could relive a moment, I'd choose us every time." },
//   { file: "img8.jpeg", caption: "Still my favorite person, always. " },
// ];

// /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    5. ISI SURAT
//    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    Setiap string adalah satu paragraf.
//    Bisa ditambah atau dikurangi paragrafnya.                       */
// const LETTER_PARAGRAPHS = [
//   "happy birthday ya doaterbaik untukmu, maaftidak bisa merayakan secaralangsung dihadapan mu tapi segenap hati ini mengucapkan selamat bertambah usia dan semoga hal-hal baik selalu beriringan dengan mu, aku hanya berharap wanita manis ku ini berhasil mencapai semua impian di hidupnya, serta di lancarkan segala urusannya.",
//   "semoga semesta selalu memberi kemudahan atas segala usahamu, semoga pundakmu di kuatkan, semoga hatimu selalu dilapangkan atas segala takdir di luar rencanamu, dan semoga kamu selalu di kelilingi orang-orang baik dimanapun kamu berada. i love you so much🤍",
// ];

// /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    6. KENANGAN (TIMELINE)
//    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    depth  = kedalaman yang ditampilkan (label saja)
//    year   = judul bab
//    title  = judul kenangan
//    text   = isi cerita                                             */
// const MEMORIES = [
//   {
//     depth: "2m",
//     year:  "Chapter One",
//     title: "Where It All Started",
//     text:  "That moment when everything just clicked and suddenly made sense.",
//   },
//   {
//     depth: "8m",
//     year:  "Chapter Two",
//     title: "The Quiet Days",
//     text:  "Just you, me, and those simple moments that ended up meaning everything.",
//   },
//   {
//     depth: "16m",
//     year:  "Chapter Three",
//     title: "Through the Storms",
//     text:  "We've had our rough days, but honestly, we always found our way back.",
//   },
//   {
//     depth: "24m",
//     year:  "Chapter Four",
//     title: "Finding the Light",
//     text:  "You're literally the brightest part of my journey, even in the deepest waters.",
//   },
// ];

// /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    7. UCAPAN ULANG TAHUN
//    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    icon: wave | shell | star | compass | anchor | heart
//    text: isi ucapannya                                            */
// const WISHES = [
//   { icon: "wave",    text: "May this year bring you the calmness of the ocean and the depth of your kindness." },
//   { icon: "shell",   text: "Hope your days are as bright as the sun on the water, and your nights as peaceful as the receding tide." },
//   { icon: "star",    text: "May every little wish of yours arrive right when you need it the most." },
//   { icon: "compass", text: "Wherever this year takes you, I hope you always find your way back to the people who adore you." },
//   { icon: "anchor",  text: "Stay grounded, stay grateful, and honestly, just stay as beautiful as you are right now." },
//   { icon: "heart",   text: "Happy birthday — cheers to another year of memories totally worth keeping." },
// ];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
// (function (window) {
//   window.WEBSITE_PIN = String(WEBSITE_PIN);
//   /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    8. WHATSAPP REPLY BUTTON
//    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//    Nomor WA untuk membalas pesan setelah lilin ditiup.
//    Gunakan format internasional tanpa tanda + (contoh: 62812...) */
// const WHATSAPP_NUMBER = "6281234567890";   // ← GANTI NOMOR WA YANG ORDER
// const WHATSAPP_MESSAGE = "Hey, I just opened the bottle. Thank you for making my day! ✨"; // ← GANTI PESAN OTOMATIS

// window.OCEAN_SETTINGS = {
//     recipientName:    String(RECIPIENT_NAME),
//     galleryPhotos:    GALLERY_PHOTOS,
//     musicTracks:      MUSIC_TRACKS,
//     letterParagraphs: LETTER_PARAGRAPHS,
//     memories:         MEMORIES,
//     wishes:           WISHES,
//     whatsappNumber:   WHATSAPP_NUMBER,
//     whatsappMessage:  WHATSAPP_MESSAGE
//   };
// })(window);









/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "3112";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "AYUK NUR AZIZAH ";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Sampai Jadi Debu",             // ← GANTI JUDUL LAGU
    artist: "Banda Neira",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "Satu senyumanmu saja bisa memperbaiki seluruh hariku." },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "Kamu alasan kenapa hatiku terasa begitu penuh." },
  { file: "img3.jpeg", caption: "Setiap detik bersamamu adalah favoritku." },
  { file: "img4.jpeg", caption: "Ada yang mencari kebahagiaan kemana-mana, aku menemukannya padamu." },
  { file: "img5.jpeg", caption: "Kamu mengubah hidupku yang biasa saja jadi sesuatu yang indah." },
  { file: "img6.jpeg", caption: "Hatiku merasa paling aman saat bersamamu." },
  { file: "img7.jpeg", caption: "Kalau boleh mengulang satu momen, aku akan selalu memilih kita." },
  { file: "img8.jpeg", caption: "Tetap orang favoritku, selalu. " },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
  "happy birthday ya doaterbaik untukmu, maaftidak bisa merayakan secaralangsung dihadapan mu tapi segenap hati ini mengucapkan selamat bertambah usia dan semoga hal-hal baik selalu beriringan dengan mu, aku hanya berharap wanita manis ku ini berhasil mencapai semua impian di hidupnya, serta di lancarkan segala urusannya.",
  "semoga semesta selalu memberi kemudahan atas segala usahamu, semoga pundakmu di kuatkan, semoga hatimu selalu dilapangkan atas segala takdir di luar rencanamu, dan semoga kamu selalu di kelilingi orang-orang baik dimanapun kamu berada. i love you so much🤍",
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Bab Satu",
    title: "Di Mana Semuanya Bermula",
    text:  "Saat di mana semuanya tiba-tiba terasa pas dan masuk akal.",
  },
  {
    depth: "8m",
    year:  "Bab Dua",
    title: "Hari-Hari yang Tenang",
    text:  "Cuma kamu, aku, dan momen-momen sederhana yang ternyata berarti segalanya.",
  },
  {
    depth: "16m",
    year:  "Bab Tiga",
    title: "Melewati Badai",
    text:  "Kita pernah melalui hari-hari sulit, tapi jujur, kita selalu berhasil kembali.",
  },
  {
    depth: "24m",
    year:  "Bab Empat",
    title: "Menemukan Cahaya",
    text:  "Kamu benar-benar bagian paling terang dari perjalananku, bahkan di perairan paling dalam sekalipun.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "Semoga tahun ini membawakanmu ketenangan seperti laut dan kebaikan hati yang sedalam samudra." },
  { icon: "shell",   text: "Semoga hari-harimu secerah matahari di atas air, dan malammu setenang air pasang yang surut." },
  { icon: "star",    text: "Semoga setiap keinginan kecilmu datang tepat saat kamu paling membutuhkannya." },
  { icon: "compass", text: "Ke mana pun tahun ini membawamu, semoga kamu selalu menemukan jalan pulang ke orang-orang yang menyayangimu." },
  { icon: "anchor",  text: "Tetap membumi, tetap bersyukur, dan jujur saja, tetap secantik dirimu sekarang ini." },
  { icon: "heart",   text: "Selamat ulang tahun — untuk satu tahun lagi kenangan yang benar-benar layak dikenang." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "8107014569026";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "Hai, aku baru saja membuka botolnya. Makasih udah bikin hariku spesial! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);