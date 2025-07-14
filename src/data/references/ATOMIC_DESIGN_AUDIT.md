# Audit Desain Atom & Rencana Perbaikan

Dokumen ini menganalisis implementasi Atomic Design saat ini dan memberikan rencana untuk perbaikan, dengan fokus pada penggunaan komponen `.astro` dan `.tsx` yang tepat.

## Filosofi Perbaikan

- **Komponen `.astro`**: Digunakan untuk rendering di sisi server (SSR). Ideal untuk elemen statis, layout, dan menyusun komponen lain. Mereka tidak menjalankan state di sisi klien.
- **Komponen `.tsx` (React)**: Digunakan untuk interaktivitas di sisi klien. Komponen apa pun yang memerlukan *state*, *event listener* (seperti `onClick`, `onChange`, `useEffect`), harus menjadi komponen React dan dimuat dalam file `.astro` menggunakan direktif `client:*`.
- **Kolokasi**: File `.tsx` yang interaktif harus berada di direktori yang sama dengan file `.astro` yang memanggilnya. Ini membuat hubungan antar komponen menjadi jelas. Direktori `src/components/react` harus **dihapus**.

---

## Analisis & Rekomendasi Per Komponen

### 1. Header Situs (`SiteHeader`)

- **Masalah**: Logika header yang sangat interaktif tersebar di beberapa lokasi, termasuk direktori `react` dan `global` yang terpisah. Ada beberapa file `SiteHeader.astro`.
- **Rekomendasi**:
    1.  **Konsolidasi**: Jadikan `src/components/organisms/site-header/SiteHeader.astro` sebagai satu-satunya *entry point*. Hapus duplikat seperti `src/components/organisms/SiteHeader.astro`.
    2.  **Pindahkan Komponen React**: Pindahkan file-file berikut:
        - `src/components/react/SiteHeader.tsx` → `src/components/organisms/site-header/SiteHeader.tsx`
        - `src/components/react/SiteHeaderLogic.tsx` → `src/components/organisms/site-header/SiteHeaderLogic.tsx`
        - `src/components/global/HamburgerButton.tsx` → `src/components/organisms/site-header/HamburgerButton.tsx`
        - `src/components/global/GlobalNavMenu.tsx` → `src/components/organisms/site-header/GlobalNavMenu.tsx`
    3.  **Refactor**: Ubah `src/components/organisms/site-header/SiteHeader.astro` untuk mengimpor dan menggunakan komponen `.tsx` di atas dengan direktif `client:load` atau `client:idle`.

### 2. Tombol Kontrol (`ControlButtons`)

- **Masalah**: Ada dua implementasi, `ControlButtons.astro` di `molecules` dan `ControlButtons.tsx` di `react`. Ini membingungkan.
- **Rekomendasi**:
    1.  **Tentukan Kebutuhan**: Jika tombol ini memerlukan state (misalnya, untuk slider), maka versi `.tsx` adalah yang utama.
    2.  **Pindahkan & Ganti Nama**:
        - Pindahkan `src/components/react/ControlButtons.tsx` ke `src/components/molecules/ControlButtons.tsx`.
        - Hapus `src/components/molecules/ControlButtons.astro`.
    3.  **Integrasi**: Komponen lain yang membutuhkan tombol ini (misalnya, Carousel) harus mengimpor `ControlButtons.tsx` secara langsung.

### 3. Komponen dengan Logika Terpisah (Pola yang Baik)

- **Contoh**: `AccordionFAQ`, `FeaturedStoriesSlider`, `Gallery`.
- **Status**: Ini adalah contoh implementasi yang **baik**. File `.astro` bertindak sebagai kontainer, sementara file `.tsx` di direktori yang sama menangani semua logika interaktif.
- **Rekomendasi**: Pertahankan pola ini. Terapkan ke komponen lain yang saat ini tidak konsisten.

### 4. Direktori `src/components/global`

- **Masalah**: Direktori ini berisi campuran organisme (`Footer.astro`, `GlobalNav.astro`) dan komponen `.tsx` yang seharusnya menjadi bagian dari organisme lain.
- **Rekomendasi**:
    1.  **Pindahkan Komponen**:
        - `Footer.astro` → `src/components/organisms/site-footer/SiteFooter.astro` (jika belum ada, ini adalah lokasi yang lebih baik).
        - `GlobalNav.astro` → `src/components/organisms/global-nav/GlobalNav.astro`.
    2.  **Hapus Komponen Anak**: Komponen seperti `HamburgerButton.tsx` dan `GlobalNavMenu.tsx` sudah direkomendasikan untuk pindah ke direktori `site-header`.

### 5. Struktur Direktori `atoms` dan `molecules`

- **Status**: **Bagus**. Sebagian besar komponen di sini adalah `.astro` dan tidak memiliki state, yang sudah tepat. Mereka adalah blok bangunan dasar yang statis.
- **Rekomendasi**: Tidak ada perubahan besar yang diperlukan. Terus pertahankan aturan bahwa atom dan molekul harus sebagian besar statis. Jika molekul membutuhkan interaktivitas (seperti *search box* dengan *autocomplete*), buat file `.tsx` di sampingnya.

## Ringkasan Rencana Aksi

1.  [ ] **Buat direktori baru** yang diperlukan untuk struktur yang lebih bersih (misalnya, `src/components/organisms/site-header`).
2.  [ ] **Pindahkan semua file** dari `src/components/react` ke direktori komponen yang sesuai.
3.  [ ] **Hapus direktori** `src/components/react`.
4.  [ ] **Refactor** `SiteHeader.astro` untuk mengimpor komponen `.tsx` yang telah dipindahkan.
5.  [ ] **Periksa dan refactor** komponen lain yang mungkin memiliki masalah serupa.
6.  [ ] **Hapus file duplikat** atau yang tidak lagi digunakan setelah refactoring.
