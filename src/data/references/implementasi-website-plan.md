# Rencana Implementasi Website STIE Dwimulya

Dokumen ini menguraikan rencana implementasi website STIE Dwimulya berdasarkan sitemap yang telah disusun sebelumnya. Rencana ini merinci struktur file, komponen yang dibutuhkan, dan langkah-langkah implementasi untuk setiap bagian utama sitemap, serta langkah-langkah lintas sitemap yang mencakup integrasi dan optimasi.

## Prasyarat

*   Firebase CLI terinstal dan terkonfigurasi dengan akses ke project `lunar-luminosity`.
*   Project Astro dan React sudah di-setup dengan struktur dasar.
*   Paham dasar Git untuk manajemen versi dan kolaborasi.
*   Akses ke sumber daya konten (teks, gambar, video) atau rencana pengadaan konten yang jelas.

## Filosofi Implementasi

Implementasi website ini akan berlandaskan pada filosofi berikut:

*   **Atomic Design:** Membangun antarmuka pengguna dari komponen terkecil (atoms) hingga yang terbesar (pages) untuk memastikan konsistensi, skalabilitas, dan kemudahan pemeliharaan.
*   **Astro/React:** Menggunakan Astro untuk rendering halaman yang cepat dan efisien, serta React untuk komponen yang membutuhkan interaktivitas.
*   **Responsivitas:** Memastikan website berfungsi dengan baik di berbagai ukuran layar (desktop, tablet, mobile) sejak tahap awal pengembangan.
*   **SEO:** Mengimplementasikan praktik-praktik SEO on-page dasar pada setiap halaman dan mempertimbangkan struktur sitemap untuk penemuan oleh mesin pencari.
*   **Dinamis:** Merancang struktur untuk mengintegrasikan konten dinamis secara bertahap, terutama untuk bagian Beranda, Pembaruan Inti, dan Penelitian Inti.

## Rencana Implementasi Per Halaman

Berikut adalah rencana implementasi untuk setiap bagian utama sitemap:

### 1. Beranda (`src/pages/index.astro`)

*   **Tujuan:** Memberikan gambaran singkat STIE Dwimulya, navigasi cepat ke bagian-bagian penting, dan menampilkan konten dinamis yang menarik pengunjung.
*   **Struktur File:** `src/pages/index.astro`
*   **Komponen yang Dibutuhkan:**
    *   `SiteHeader` (Organism)
    *   `HeroSection` atau `WelcomingHero` (Organism) - Mengandung deskripsi singkat, visi, misi, nilai. Menggunakan `Heading` (Atom), `Paragraph` (Atom).
    *   Komponen Navigasi Cepat (Mungkin berupa `CardGrid` atau komponen kustom) - Menggunakan `Card` (Molecule).
    *   `SearchBox` (Molecule)
    *   Komponen untuk Tautan Penting (Di dalam Header atau terpisah) - Menggunakan `Button` (Atom) atau `Link` (Atom).
    *   Bagian Konten Dinamis (Organism/Template) - Menampilkan Berita Terbaru, Acara Mendatang, Sorotan Penelitian. Membutuhkan komponen seperti `NewsFeedTease` (Molecule), `EventFeedTease` (Molecule), atau kustom.
    *   `SiteFooter` (Organism)
*   **Langkah Implementasi:**
    1.  Buat file `src/pages/index.astro`.
    2.  Tambahkan struktur HTML dasar dengan Layout (jika digunakan).
    3.  Integrasikan komponen `SiteHeader` dan `SiteFooter`.
    4.  Implementasikan `HeroSection` dengan konten visi, misi, dan nilai-nilai awal.
    5.  Buat dan tata letak komponen Navigasi Cepat.
    6.  Tambahkan placeholder untuk `SearchBox`.
    7.  Buat bagian untuk Tautan Penting.
    8.  Siapkan struktur untuk bagian konten dinamis dengan data statis atau placeholder awal.
    9.  Terapkan styling dasar menggunakan CSS/P CSS atau Tailwind CSS.
    10. Pastikan responsivitas awal pada elemen utama beranda.

### 2. Informasi Inti

*   **Tujuan:** Menyediakan informasi esensial dan relatif statis mengenai institusi, program studi, penerimaan, layanan mahasiswa, dosen, dan alumni.
*   **Struktur File:** Dibuat dalam sub-direktori `src/pages/informasi-inti/` dengan struktur berikut:
    *   `src/pages/informasi-inti/tentang-stie-dwimulya.astro`
    *   `src/pages/informasi-inti/penerimaan-mahasiswa-baru.astro`
    *   `src/pages/informasi-inti/program-studi/index.astro` (Daftar Program Studi)
    *   `src/pages/informasi-inti/program-studi/akuntansi.astro`
    *   `src/pages/informasi-inti/program-studi/manajemen.astro`
    *   `src/pages/informasi-inti/layanan-mahasiswa/index.astro` (Daftar Layanan Mahasiswa)
    *   `src/pages/informasi-inti/layanan-mahasiswa/kehidupan-kampus.astro`
    *   `src/pages/informasi-inti/layanan-mahasiswa/layanan-karir-magang.astro`
    *   `src/pages/informasi-inti/layanan-mahasiswa/kesehatan-konseling.astro`
    *   `src/pages/informasi-inti/layanan-mahasiswa/fasilitas-perpustakaan-digital.astro`
    *   `src/pages/informasi-inti/layanan-mahasiswa/beasiswa-bantuan-keuangan.astro`
    *   `src/pages/informasi-inti/dosen-staf/index.astro` (Daftar Dosen dan Staf)
    *   `src/pages/informasi-inti/alumni/index.astro` (Halaman Utama Alumni)
*   **Komponen yang Dibutuhkan:**
    *   `Layout` (Layout)
    *   `Heading` (Atom), `Paragraph` (Atom), `List` (Atom), `Image` (Atom), `Button` (Atom), `Link` (Atom).
    *   `Card` (Molecule)
    *   `MediaText` (Organism)
    *   `Columns` (Organism)
    *   `CardGrid` (Organism)
    *   `AccordionFAQ` (Organism)
    *   Komponen kustom untuk struktur organisasi, direktori, formulir.
*   **Langkah Implementasi (Contoh: `src/pages/informasi-inti/program-studi/akuntansi.astro`):**
    1.  Buat file `src/pages/informasi-inti/program-studi/akuntansi.astro`.
    2.  Gunakan `Layout` sebagai wrapper.
    3.  Tambahkan `Heading` untuk judul halaman ("S1 Akuntansi").
    4.  Gunakan kombinasi `Paragraph`, `List`, dan mungkin `MediaText` untuk deskripsi program, kurikulum, dan prospek karir. Fokus pada pengembangan konten yang terperinci.
    5.  Sajikan detail akreditasi program (placeholder jika detail belum lengkap).
    6.  Ulangi proses serupa untuk halaman Program Studi Manajemen dan halaman lainnya di sub-direktori `informasi-inti`, dengan memprioritaskan Penerimaan, Program Studi, dan Kesehatan/Konseling untuk pengembangan konten.

### 3. Pembaruan Inti

*   **Tujuan:** Menyediakan akses ke berita, pengumuman, acara, dan konten dinamis lainnya secara real-time atau terkini.
*   **Struktur File:** Dibuat dalam sub-direktori `src/pages/pembaruan-inti/` dengan struktur berikut:
    *   `src/pages/pembaruan-inti/index.astro` (Halaman utama pembaruan)
    *   `src/pages/pembaruan-inti/berita/index.astro` (Daftar Berita)
    *   `src/pages/pembaruan-inti/berita/[slug].astro` (Detail Berita - menggunakan Dynamic Routing Astro)
    *   `src/pages/pembaruan-inti/rilis-pers/index.astro` (Daftar Rilis Pers)
    *   `src/pages/pembaruan-inti/sorotan-media/index.astro` (Daftar Sorotan Media)
    *   `src/pages/pembaruan-inti/acara/index.astro` (Daftar Acara)
    *   `src/pages/pembaruan-inti/acara/[slug].astro` (Detail Acara - menggunakan Dynamic Routing Astro)
    *   `src/pages/pembaruan-inti/konferensi-internasional/index.astro` (Daftar Konferensi Internasional)
    *   `src/pages/pembaruan-inti/hari-terbuka/index.astro` (Informasi Hari Terbuka)
    *   `src/pages/pembaruan-inti/media-sosial.astro` (Hub Media Sosial)
    *   `src/pages/pembaruan-inti/berita-video.astro` (Galeri Video)
    *   `src/pages/pembaruan-inti/blog/index.astro` (Daftar Postingan Blog)
    *   `src/pages/pembaruan-inti/blog/[slug].astro` (Detail Postingan Blog - menggunakan Dynamic Routing Astro)
*   **Komponen yang Dibutuhkan:**
    *   `Layout` (Layout)
    *   `Heading` (Atom), `Paragraph` (Atom), `Image` (Atom), `Video` (Atom), `Link` (Atom).
    *   `Card` (Molecule)
    *   `ContentList` (Organism)
    *   `EventsGrid` atau `EventSchedule` (Organism)
    *   Komponen kustom untuk feed media sosial dan galeri video.
    *   Integrasi dengan CMS atau sumber data dinamis.
*   **Langkah Implementasi (Contoh: `src/pages/pembaruan-inti/acara/index.astro`):**
    1.  Buat file `src/pages/pembaruan-inti/acara/index.astro`.
    2.  Gunakan `Layout`.
    3.  Tambahkan `Heading` untuk judul halaman ("Agenda Acara").
    4.  Siapkan struktur data untuk acara (dari CMS, file data, atau API).
    5.  Gunakan komponen `EventsGrid` atau `EventSchedule` untuk menampilkan daftar acara.
    6.  Untuk `acara/[slug].astro`, gunakan Dynamic Routing Astro. Ambil detail acara berdasarkan slug.
    7.  Buat tampilan detail acara dengan judul, tanggal, lokasi, deskripsi, dan media terkait.
    8.  Ulangi proses untuk Berita dan Blog. Rilis Pers, Sorotan Media, Konferensi Internasional, dan Hari Terbuka dapat dimulai dengan halaman statis dan diperbarui seiring ketersediaan konten dan sistem manajemen konten.

### 4. Penelitian Inti

*   **Tujuan:** Menampilkan kontribusi penelitian, visi, dampak, dan sumber daya terkait penelitian di STIE Dwimulya.
*   **Struktur File:** Dibuat dalam sub-direktori `src/pages/penelitian-inti/` dengan struktur berikut:
    *   `src/pages/penelitian-inti/index.astro` (Halaman Utama Penelitian)
    *   `src/pages/penelitian-inti/ikhtisar-penelitian.astro`
    *   `src/pages/penelitian-inti/pusat-penelitian.astro`
    *   `src/pages/penelitian-inti/bidang-penelitian.astro`
    *   `src/pages/penelitian-inti/dosen-peneliti/index.astro` (Daftar Dosen Peneliti)
    *   `src/pages/penelitian-inti/publikasi/index.astro` (Repositori Publikasi)
    *   `src/pages/penelitian-inti/proyek-didana/index.astro` (Daftar Proyek Didanai)
    *   `src/pages/penelitian-inti/kerjasama-internasional.astro`
    *   `src/pages/penelitian-inti/penelitian-mahasiswa/index.astro` (Halaman Utama Penelitian Mahasiswa)
    *   `src/pages/penelitian-inti/penelitian-mahasiswa/peluang-penelitian.astro`
    *   `src/pages/penelitian-inti/penelitian-mahasiswa/beasiswa-penghargaan.astro`
    *   `src/pages/penelitian-inti/penelitian-mahasiswa/arsip-skripsi-tesis.astro`
    *   `src/pages/penelitian-inti/publikasi-kampus/jurnal-ilmiah.astro`
    *   `src/pages/penelitian-inti/publikasi-kampus/makalah-laporan.astro`
    *   `src/pages/penelitian-inti/publikasi-kampus/prosiding-konferensi.astro`
    *   `src/pages/penelitian-inti/kemitraan-penelitian/industri.astro`
    *   `src/pages/penelitian-inti/kemitraan-penelitian/universitas-lain.astro`
    *   `src/pages/penelitian-inti/kemitraan-penelitian/pemerintah-lembaga-riset.astro`
    *   `src/pages/penelitian-inti/pendanaan-penelitian/index.astro` (Halaman Utama Pendanaan)
    *   `src/pages/penelitian-inti/pendanaan-penelitian/dana-hibah-beasiswa.astro`
    *   `src/pages/penelitian-inti/pendanaan-penelitian/proses-aplikasi.astro`
    *   `src/pages/penelitian-inti/pendanaan-penelitian/proyek-didana.astro`
*   **Komponen yang Dibutuhkan:**
    *   `Layout` (Layout)
    *   `Heading` (Atom), `Paragraph` (Atom), `List` (Atom), `Link` (Atom).
    *   `Card` (Molecule)
    *   `ContentList` (Organism)
    *   `CardGrid` (Organism)
    *   Komponen kustom untuk repositori publikasi, database proyek didanai, arsip yang dapat dicari.
*   **Langkah Implementasi (Contoh: `src/pages/penelitian-inti/publikasi/index.astro`):**
    1.  Buat file `src/pages/penelitian-inti/publikasi/index.astro`.
    2.  Gunakan `Layout`.
    3.  Tambahkan `Heading` untuk judul halaman ("Repositori Publikasi").
    4.  Siapkan struktur data untuk publikasi (area ini membutuhkan upaya pengumpulan data yang besar).
    5.  Buat komponen untuk menampilkan daftar publikasi (mungkin dengan fitur filter atau pencarian).
    6.  Jika memungkinkan, sediakan tautan ke sumber eksternal (jurnal, prosiding).
    7.  Ulangi proses serupa untuk halaman lain di sub-direktori `penelitian-inti`. Fokus pada pengembangan konten dan struktur data untuk publikasi dan proyek didanai sebagai prioritas awal di bagian ini.

### 5. Footer

*   **Tujuan:** Menyediakan akses ke informasi penting seperti kontak, akreditasi, aksesibilitas, dan tautan cepat di bagian bawah setiap halaman.
*   **Struktur File:** Akan diimplementasikan sebagai komponen dan diimpor ke layout global:
    *   `src/components/global/SiteFooter.astro`
*   **Komponen yang Dibutuhkan:**
    *   `SiteFooter` (Organism) - Berisi `Link` (Atom), mungkin komponen kustom untuk peta atau formulir kontak singkat.
*   **Langkah Implementasi:**
    1.  Buat atau modifikasi file `src/components/global/SiteFooter.astro`.
    2.  Buat struktur HTML untuk footer dengan bagian-bagian: Kontak (Alamat, Telepon, Email), Akreditasi (tautan), Aksesibilitas (tautan), Tautan Cepat (navigasi sekunder), dan ikon Media Sosial (tautan eksternal).
    3.  Tambahkan placeholder untuk peta tertanam dan formulir kontak jika belum diimplementasikan.
    4.  Pastikan `SiteFooter` diimpor dan digunakan di `src/layouts/Layout.astro` agar muncul di semua halaman.

## Langkah-langkah Lintas Sitemap (Integrasi & Optimasi)

Langkah-langkah ini bersifat horizontal dan perlu dilakukan secara berkelanjutan selama proses implementasi:

1.  **Pengembangan Komponen Atomic & Molecular:** Sebelum membangun halaman spesifik, prioritaskan pembuatan komponen dasar (`src/components/atoms/` dan `src/components/molecules/`) yang akan digunakan berulang di seluruh situs. Pastikan komponen ini responsif dan memenuhi standar aksesibilitas.
2.  **Pengembangan Komponen Organism:** Bangun komponen yang lebih besar (`src/components/organisms/`) yang menggabungkan atom dan molekul, seperti `SiteHeader`, `SiteFooter`, `MediaText`, `CardGrid`, `ContentList`, dll.
3.  **Pengembangan Layouts:** Pastikan `src/layouts/Layout.astro` berfungsi sebagai kerangka dasar untuk semua halaman, mengimpor komponen global seperti Header dan Footer.
4.  **Implementasi Pencarian Internal:** Kembangkan fungsionalitas pencarian situs dan integrasikan dengan `SearchBox`. Ini bisa melibatkan indexasi konten atau penggunaan API pencarian.
5.  **Integrasi Media Sosial:** Implementasikan integrasi feed media sosial langsung ke halaman Beranda atau halaman khusus Media Sosial.
6.  **Optimasi SEO On-Page:** Pada saat pembuatan atau finalisasi setiap halaman:
    *   Tambahkan tag meta title dan description yang relevan dan deskriptif.
    *   Pastikan struktur heading (`<h1>`, `<h2>`, dst.) logis dan mengandung kata kunci.
    *   Tambahkan atribut `alt` pada semua gambar.
    *   Implementasikan internal linking antar halaman yang relevan.
7.  **Implementasi Analytics:** Integrasikan kode pelacakan analytics (misalnya, Google Analytics) ke dalam layout global atau setiap halaman.
8.  **Pengembangan & Pengadaan Konten:** Secara paralel, fokus pada penulisan, pengumpulan (misalnya, data penelitian, foto fasilitas), dan pengadaan konten yang dibutuhkan, terutama untuk area yang diidentifikasi sebagai kesenjangan signifikan (Penerimaan, Program Studi, Kesehatan/Konseling, Penelitian).
9.  **Uji Responsivitas:** Lakukan pengujian tampilan dan fungsionalitas di berbagai perangkat dan ukuran layar menggunakan alat developer browser.
10. **Uji Aksesibilitas:** Gunakan alat otomatis (seperti Lighthouse, Axe DevTools) dan pengujian manual untuk memastikan kepatuhan terhadap standar WCAG. Perbaiki isu aksesibilitas yang ditemukan.
11. **Refactoring dan Peningkatan Kinerja:** Tinjau kode secara berkala untuk perbaikan, optimalkan gambar dan aset lainnya, dan pertimbangkan teknik peningkatan kinerja Astro seperti prefetching atau lazy loading.
12. **Integrasi CMS (Opsional tapi Direkomendasikan):** Jika menggunakan Headless CMS (seperti Contentful atau Strapi), kembangkan integrasi API untuk menarik data konten dinamis (Berita, Acara, Blog, Publikasi Penelitian) ke dalam halaman Astro.

Rencana ini akan berfungsi sebagai panduan teknis selama proses pengembangan. Keberhasilan implementasi sangat bergantung pada ketersediaan konten yang berkualitas dan koordinasi antara tim pengembangan dan tim konten.