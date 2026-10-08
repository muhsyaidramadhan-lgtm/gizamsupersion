# Gizam Suspension Kendari

Website katalog & toko online **Gizam Suspension Kendari** — supplier shockbreaker motor (tabung & mekanik) ukuran 310–330 mm untuk motor matic & bebek di Kendari, Sulawesi Tenggara.

Dibangun dengan **React 19**, **Vite**, **TypeScript**, dan **Tailwind CSS**.

## Fitur

- Katalog produk shock mekanik & tabung (310 / 315 / 320 / 330 mm)
- Filter berdasarkan ukuran
- Cek kompatibilitas motor (database Honda, Yamaha, dll.)
- Keranjang belanja + checkout via WhatsApp
- Tombol CTA WhatsApp di mana-mana
- Desain dark modern, mobile-friendly

## Tech Stack

| Layer        | Teknologi              |
|--------------|------------------------|
| Framework    | React 19 + TypeScript  |
| Bundler      | Vite 6                 |
| Styling      | Tailwind CSS 4         |
| Icons        | Lucide React           |
| Animasi      | Motion                 |

## Menjalankan secara lokal

**Prasyarat:** Node.js 18+ (disarankan 20 LTS)

```bash
# 1. Clone repo
git clone https://github.com/USERNAME/gizam-suspension-kendari.git
cd gizam-suspension-kendari

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Script yang tersedia

| Command           | Keterangan                     |
|-------------------|--------------------------------|
| `npm run dev`     | Development server (port 3000) |
| `npm run build`   | Build production ke `dist/`    |
| `npm run preview` | Preview hasil build            |
| `npm run lint`    | Type-check TypeScript          |

## Deploy

Hasil `npm run build` (folder `dist/`) bisa di-deploy ke:

- [Vercel](https://vercel.com) — rekomendasi
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- GitHub Pages (set `base` di `vite.config.ts` jika perlu)

Contoh Vercel:

```bash
npx vercel
```

## Struktur project

```
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── types.ts
│   ├── components/     # UI components
│   ├── data/           # Produk & database motor
│   └── assets/images/  # Gambar produk & hero
└── README.md
```

## Kontak toko

- **WhatsApp:** [0851-1991-9090](https://wa.me/6285119919090)
- **Alamat:** Jl. G. Nipa-nipa, Lorong Maleo, Kel. Punggolaka, Kec. Puuwatu, Kota Kendari, Sulawesi Tenggara

## Lisensi

Kode sumber dilisensikan di bawah MIT (lihat file `LICENSE`).  
Nama merek **Gizam Suspension**, gambar produk, dan data toko milik pemilik usaha terkait.  
Jangan gunakan untuk menyamar sebagai toko resmi tanpa izin.
