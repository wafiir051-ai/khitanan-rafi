// ============================================================
//  DATA UNDANGAN KHITANAN — edit di sini, lalu simpan & refresh.
//  Field yang dikosongkan ('') otomatis disembunyikan di website.
// ============================================================
window.SITE = {
  // Project Supabase dipakai bersama undangan lain; data dipisah per event (lihat supabase/multi-event.sql).
  // Kosongkan url untuk menyembunyikan RSVP & buku tamu.
  supabase: {
    url: 'https://djhvxpxxudswhwtkeivx.supabase.co',
    // anon key memang publik; keamanan data dijaga RLS (lihat supabase/schema.sql)
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqaHZ4cHh4dWRzd2h3dGtlaXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExNzcyODYsImV4cCI6MjEwNjc1MzI4Nn0.rVPRWb84p25amD3kf4_d3MwTS5M7QQLc1ookC0k0sMw',
  },
  eventKey: 'khitanan-rafi',   // penanda event di database bersama (jangan diubah setelah ada data)
  child: {
    nickname: 'Rafi',
    fullName: 'Rafi Radhika Alfarizki',
    parents: 'Putra dari Bapak Didik Adeng (Bre) & Ibu Lina Lisnawati',
    instagram: '',
    whatsapp: '',
    photo: 'img/rafi.jpg',
  },
  event: {
    title: 'Tasyakuran Khitanan',
    date: '2026-11-08',        // YYYY-MM-DD (Minggu)
    start: '07:00',
    end: '15:00',
    timezone: '+07:00',        // WIB
    timezoneLabel: 'WIB',
    venue: 'Peusar, Desa Baginda',
    address: 'Jl. Pagar Betis, Dusun Peusar, Desa Baginda RT 03/RW 05, Sumedang Selatan',
    // Ganti dengan koordinat (mis. "-6.xxxx,107.xxxx") kalau sudah ada, supaya peta lebih akurat.
    mapQuery: 'Dusun Peusar, Desa Baginda, Sumedang Selatan, Sumedang',
  },
  eventFamily: null,   // tidak dipakai di versi khitanan
  // Tanda kasih / amplop digital. Kosong = section disembunyikan.
  gifts: [
    { type: 'BCA', name: 'Didik Adeng', number: '7741176941' },
  ],
  story: [],            // tidak dipakai di versi khitanan
  giftAddress: '',
  entertainment: 'Musik Organ Tunggal & Hadroh Matro’atus Sa’adah',
  // Musik latar: isi dengan file sendiri (mis. shalawat/hadroh) di public/audio/. Kosong = tombol musik disembunyikan.
  music: { src: '', title: '' },
  shareMessage:
`Assalamualaikum.

Yth. Bapak/Ibu/Saudara/i
{nama}
Di Tempat
-----------
Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara,
===========
Tasyakuran Khitanan
Rafi Radhika Alfarizki
===========
🗓 Hari/Tanggal: Minggu, 08-11-2026
🕛 Pukul: 07:00 - 15:00
📍 Lokasi: Peusar, Desa Baginda — Jl. Pagar Betis, Dusun Peusar, Desa Baginda RT 03/RW 05, Sumedang Selatan

Link undangan bisa diakses lengkap di:
{link}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada putra kami.
Mohon maaf perihal undangan hanya dibagikan melalui pesan ini.
Terima kasih banyak atas perhatiannya.

Keluarga Bapak Didik Adeng (Bre) & Ibu Lina Lisnawati

Wa'alaikumussalam 🙏`,
  shareMessageFamily:
`Assalamualaikum.

Yth. Bapak/Ibu/Saudara/i
{nama}
Di Tempat
-----------
Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara,
===========
Tasyakuran Khitanan
Rafi Radhika Alfarizki
===========
🗓 Hari/Tanggal: Minggu, 08-11-2026
🕛 Pukul: 07:00 - 15:00
📍 Lokasi: Peusar, Desa Baginda — Jl. Pagar Betis, Dusun Peusar, Desa Baginda RT 03/RW 05, Sumedang Selatan

Link undangan bisa diakses lengkap di:
{link}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada putra kami.
Mohon maaf perihal undangan hanya dibagikan melalui pesan ini.
Terima kasih banyak atas perhatiannya.

Keluarga Bapak Didik Adeng (Bre) & Ibu Lina Lisnawati

Wa'alaikumussalam 🙏`,
};
