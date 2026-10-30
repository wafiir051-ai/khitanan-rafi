# Undangan Khitanan — Rafi Radhika Alfarizki

Website statis (HTML/CSS/JS) + database **Supabase** (opsional). Tidak perlu `npm install`.

## Isi data undangan
Edit `public/js/site-config.js` (nama, orang tua, tanggal/jam, lokasi, rekening, hiburan, pesan WhatsApp).
Field kosong otomatis disembunyikan.

## RSVP & buku tamu (database bersama)
Project Supabase dipakai bersama undangan pernikahan; data dipisah per event lewat kolom `event` (`eventKey` di `site-config.js`).
Jalankan `supabase/multi-event.sql` SEKALI di Supabase SQL Editor sebelum deploy. Data lama otomatis jadi event `wedding`.

## Musik (opsional)
Taruh file di `public/audio/` lalu isi `music.src` (mis. `audio/hadroh.mp3`). Kosong = tombol musik disembunyikan.

## Jalankan / deploy
- Lokal: `npm start` → http://localhost:3000
- Produksi: upload folder `public/` ke Netlify / Vercel / Cloudflare Pages / GitHub Pages.
- Link per tamu: `/?to=Nama Tamu`
