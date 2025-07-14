# Rencana Atomic Design untuk Halaman Utama (Index Page)

Halaman utama STIE Dwimulya dirancang sebagai pintu gerbang dinamis yang menampilkan informasi inti, pembaruan, dan pencapaian. Implementasi akan mengikuti prinsip Atomic Design untuk modularitas dan keterbacaan.

## 1. Halaman (Page): `src/pages/index.astro`

*   **Peran:** Mengatur susunan Template dan Organisme untuk membentuk tampilan akhir halaman utama. Bertanggung jawab untuk fetching data yang diperlukan (misalnya dari CMS atau API) dan meneruskannya sebagai `props` ke Template atau Organisme yang relevan.
*   **Komponen Utama:** Mengimpor `Layout.astro` (yang sudah menyertakan `SiteHeader` dan `GlobalMenuOverlay`), `HomepageTemplate.astro`, dan organisme spesifik yang mungkin tidak terintegrasi langsung dalam template.

## 2. Template: `src/components/templates/homepage-template/HomepageTemplate.astro`

*   **Peran:** Mendefinisikan struktur kerangka halaman utama, yaitu urutan organisme yang akan muncul. Ini adalah blueprint statis atau dinamis yang menerima data dan menyajikannya dalam layout yang konsisten.
*   **Komponen Utama:** Mengandung placeholder untuk organisme-organisme utama halaman.

## 3. Organisme (Organisms): `src/components/organisms/`

Organisme adalah kelompok molekul dan/atau atom yang bekerja sama sebagai satu unit yang dapat dikenali.

### 3.1. Header Situs (`SiteHeader.astro` & `SiteHeader.tsx` - React Island)
*   **Deskripsi:** Header yang persisten di bagian atas halaman, menampilkan logo, navigasi lokal (desktop), kontrol pencarian, CTA, dan tombol hamburger untuk menu global.
*   **Molekul/Atom yang Digunakan:**
    *   `LogoWithBranding` (Molekul): Menggabungkan `Logo` (Atom) dan `BrandingText` (Atom).
    *   `LocalNavigation` (Molekul): Mengelompokkan `NavLink` (Atom).
    *   `ControlButtons` (Molekul): Mengelompokkan `Icon` (Atom - Search, Hamburger/Close) dan `Button` (Atom - CTA "Daftar Sekarang").
*   **Kebutuhan Khusus:** Logika interaktivitas (toggle menu, animasi hamburger), responsivitas (sembunyikan nav lokal di mobile), sticky behavior.

### 3.2. Menu Global (`GlobalMenuOverlay.astro` & `GlobalMenuOverlay.tsx` - React Island)
*   **Deskripsi:** Overlay layar penuh yang menampilkan navigasi hierarkis tiga tingkat (desktop) dan dropdown satu kolom (mobile).
*   **Molekul/Atom yang Digunakan:**
    *   `NavLink` (Atom): Untuk setiap item navigasi.
    *   `Icon` (Atom): Untuk panah dropdown di mobile.
*   **Kebutuhan Khusus:** State management untuk `selectedGrandItem`, `selectedMiddleItem`, `mobileDropdowns`, animasi geser/dropdown, penanganan tautan (internal/eksternal), background gambar responsif.

### 3.3. Bagian Hero (`HeroSection.astro`)
*   **Deskripsi:** Area utama di bagian atas halaman.
*   **Atom/Molekul yang Digunakan:**
    *   `ResponsiveImage` (Molekul/Atom): Untuk gambar latar belakang.
    *   `Heading` (Atom): Untuk Judul utama.
    *   `Text` (Atom): Untuk Sub-judul.
    *   `Button` (Atom): Untuk CTA Utama dan CTA Sekunder.
*   **Contoh Konten:** Judul: "Transformasi Anda Dimulai di STIE Dwimulya", Sub-judul: "Mengintegrasikan Keunggulan Akademik...", CTA: "Daftar Sekarang", "Jelajahi Program".

### 3.4. Bagian Tentang Kami (`AboutUsSection.astro` atau `MediaText.astro`)
*   **Deskripsi:** Menjelaskan filosofi dan komitmen kampus.
*   **Atom/Molekul yang Digunakan:**
    *   `Image` (Atom)
    *   `Heading` (Atom)
    *   `Text` (Atom)
    *   `Button` (Atom)
*   **Contoh Konten:** Judul: "Mengenal STIE Dwimulya: Dua Pilar Keunggulan", Teks, Tombol CTA: "Pelajari Visi & Misi Kami".

### 3.5. Program Studi Unggulan (`ProgramsGrid.astro` atau `CardGrid.astro`)
*   **Deskripsi:** Menampilkan program studi dalam format grid kartu.
*   **Molekul/Atom yang Digunakan:**
    *   `Card` (Molekul): Berisi `Image` (Atom), `Heading` (Atom), `Text` (Atom), `Button` (Atom).
    *   `Heading` (Atom): Untuk judul bagian.
*   **Contoh Konten:** Judul: "Program Studi Unggulan Kami", Kartu untuk "Manajemen Bisnis", "Akuntansi", dll. Tombol CTA: "Lihat Semua Program Studi".

### 3.6. Inovasi dalam Pendidikan (`InnovationSection.astro` atau `MediaText.astro`)
*   **Deskripsi:** Menunjukkan integrasi teknologi dan metode modern.
*   **Atom/Molekul yang Digunakan:**
    *   `VideoEmbed` (Atom) atau `Image` (Atom)
    *   `Heading` (Atom)
    *   `Text` (Atom)
    *   `Button` (Atom)
*   **Contoh Konten:** Judul: "Pendidikan yang Relevan dengan Industri 4.0", Teks, Tombol CTA: "Lihat Fasilitas & Metode Kami".

### 3.7. Program Magang dan Kemitraan Industri (`PartnershipSection.astro` atau `Logos.astro`)
*   **Deskripsi:** Menampilkan logo perusahaan mitra.
*   **Atom/Molekul yang Digunakan:**
    *   `Logo` (Atom): Untuk logo perusahaan.
    *   `Heading` (Atom)
    *   `Text` (Atom)
    *   `Button` (Atom)
*   **Contoh Konten:** Judul: "Jembatan Anda Menuju Karir Profesional", Teks, Tombol CTA: "Jelajahi Jaringan Mitra Kami".

### 3.8. Kisah Sukses Alumni (`AlumniTestimonial.astro` atau `Quote.astro`)
*   **Deskripsi:** Menampilkan testimoni alumni.
*   **Atom/Molekul yang Digunakan:**
    *   `Image` (Atom): Foto Alumni.
    *   `Quote` (Molekul): Mengelompokkan `Text` (Atom - Kutipan), `Text` (Atom - Nama), `Text` (Atom - Jabatan).
    *   `Heading` (Atom): Untuk judul bagian.
*   **Contoh Konten:** Judul: "Jejak Alumni Kami", Testimonial.

### 3.9. Blog dan Berita Terkini (`NewsFeed.astro` atau `CardGrid.astro`)
*   **Deskripsi:** Menyajikan berita kampus atau artikel wawasan.
*   **Molekul/Atom yang Digunakan:**
    *   `Card` (Molekul): Untuk setiap artikel (Image, Title, Link).
    *   `Heading` (Atom): Untuk judul bagian.
    *   `Button` (Atom): Untuk melihat semua berita.
*   **Contoh Konten:** Judul: "Wawasan dari Kampus", Contoh Artikel, Tombol CTA: "Kunjungi Blog Kami".

### 3.10. Hubungi Kami (`ContactSection.astro` atau `LeadForm.astro`)
*   **Deskripsi:** Menyediakan formulir kontak dan informasi penting.
*   **Molekul/Atom yang Digunakan:**
    *   `ContactForm` (Molekul): Mengelompokkan `Input` (Atom), `Textarea` (Atom), `Button` (Atom).
    *   `ContactInfo` (Molekul): Mengelompokkan `Text` (Atom) untuk alamat, email, telepon.
    *   `MapEmbed` (Atom/Molekul): Embed peta.
    *   `Heading` (Atom)
    *   `Text` (Atom)
*   **Contoh Konten:** Judul: "Terhubung dengan Kami", Teks, Formulir, Info Kontak, Peta.

### 3.11. Footer (`SiteFooter.astro`)
*   **Deskripsi:** Peta situs sekunder dan informasi hak cipta.
*   **Molekul/Atom yang Digunakan:**
    *   `FooterNavigation` (Molekul): Mengelompokkan `NavLink` (Atom) dalam kategori.
    *   `SocialIcons` (Molekul): Mengelompokkan `Icon` (Atom - media sosial).
    *   `CopyrightText` (Atom).
*   **Contoh Konten:** Kategori navigasi, Ikon media sosial, Teks hak cipta.

---

## 4. Molekul (Molecules): `src/components/molecules/`

Molekul adalah kelompok atom yang berfungsi sebagai satu unit.

*   `LogoWithBranding.astro` (menggunakan `Logo.astro`, `BrandingText.astro`)
*   `LocalNavigation.astro` (menggunakan `NavLink.astro`)
*   `ControlButtons.astro` (wrapper untuk `ControlButtons.tsx`, menggunakan `Icon.astro` (atau SVG langsung di React), `Button.astro` (atau button HTML dengan styling))
*   `Card.astro` (untuk program studi, artikel berita)
*   `ContactForm.astro` (jika tidak React, atau wrapper React component jika interaktif)
*   `ContactInfo.astro`
*   `Quote.astro`
*   `SocialIcons.astro`
*   `ResponsiveImage.astro` (jika belum ada di atoms)

## 5. Atom (Atoms): `src/components/atoms/`

Atom adalah elemen dasar, blok bangunan terkecil.

*   `Logo.astro`
*   `BrandingText.astro`
*   `NavLink.astro`
*   `Icon.astro` (untuk berbagai ikon: search, hamburger, close, social media, arrows)
*   `Button.astro` (untuk CTA)
*   `Heading.astro` (H1, H2, H3, dll.)
*   `Text.astro` (untuk paragraf, deskripsi)
*   `Input.astro` (untuk formulir)
*   `Textarea.astro` (untuk formulir)
*   `MapEmbed.astro` (untuk peta)

## 6. Direktori Baru untuk Komponen React (Astro Islands): `src/components/react/`

Ini adalah komponen React yang akan diimpor dan digunakan dalam `.astro` file dengan direktif `client:` untuk interaktivitas sisi klien.

*   `ControlButtons.tsx` (Logic for hamburger icon, toggle)
*   `SiteHeader.tsx` (Logic for sticky header, responsive visibility of nav, orchestrating `ControlButtons` and `GlobalMenuOverlay` props)
*   `GlobalMenuOverlay.tsx` (Logic for multi-tier navigation, mobile dropdowns, state management for selected items, data rendering)

## 7. Direktori Baru untuk Hooks & Tipe Global:

*   `src/hooks/`
    *   `useResizeObserver.ts` (untuk logika responsif di React components)
*   `src/types/`
    *   `navigation.ts` (untuk `interface NavItem` dan tipe-tipe navigasi lainnya)

## 8. Data & Utils

*   `src/data/NavigationData.ts` (Memastikan export `globalNavigationData`, `quickLinksData`, `defaultLocalMenuData` yang benar)
*   `src/utils/cn.ts` (Utility untuk menggabungkan class Tailwind)
*   `src/utils/debounce.ts` (Jika diperlukan untuk performa event listener)

Rencana ini menyediakan peta jalan yang jelas untuk pembangunan halaman utama, memisahkan tanggung jawab rendering statis dari interaktivitas sisi klien dengan pendekatan Astro Islands yang tepat.

**Langkah Selanjutnya yang Harus Anda Lakukan:**

Prioritas utama tetap **memperbaiki kesalahan build `null byte`**. Setelah itu, dengan rencana ini, Anda dapat mulai mengimplementasikan komponen-komponen `.tsx` (React) sesuai dengan pemetaan di atas, lalu mengintegrasikannya kembali ke dalam Astro wrappers dan akhirnya ke dalam `Layout.astro` dan `index.astro`.
