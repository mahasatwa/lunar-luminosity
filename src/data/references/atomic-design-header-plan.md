# Rencana Atomic Design: Desain Ulang Header STIE Dwimulya

Dokumen ini menguraikan rencana revisi header eksisting STIE Dwimulya menggunakan prinsip Atomic Design, berdasarkan spesifikasi sistem navigasi yang dijelaskan dalam `sistem-navigasi-stie-dwimulya.md` dan struktur hierarki dari `hierarki-navigasi-stie-dwimulya.md`.

Tujuan utamanya adalah menciptakan header yang modern, responsif, mudah dinavigasi, dan efisien di berbagai perangkat, sekaligus menjadi pemicu utama untuk menu global overlay, selaras dengan identitas visual dan panduan branding STIE Dwimulya.

## Atoms

Atoms adalah elemen UI terkecil yang tidak dapat dipecah lagi. Untuk header STIE Dwimulya, atoms yang dibutuhkan meliputi:

1.  **Logo:**
    *   Representasi visual identitas STIE Dwimulya.
    *   Berfungsi sebagai tautan kembali ke halaman utama (`/`).
    *   Memiliki properti `src` (untuk gambar) dan `alt` (untuk aksesibilitas).
2.  **Teks Branding:**
    *   Teks "STIE Dwimulya".
    *   Ukuran font: `1rem` (`text-base`).
    *   Sebagai tautan kembali ke halaman utama bersama logo.
3.  **Tautan Navigasi (Link):**
    *   Elemen tautan standar (`<a>`).
    *   Digunakan untuk navigasi lokal dan item menu global.
    *   Properti: `href`, `target` (opsional, untuk eksternal), `title`.
    *   Variasi: Font tebal (`font-bold`) untuk navigasi lokal desktop.
    *   Harus memiliki state `active` untuk menandai halaman yang sedang dilihat.
4.  **Ikon:**
    *   Representasi visual untuk aksi (Pencarian, Hamburger/Close).
    *   Properti: `type` (misal: 'search', 'hamburger', 'close').
    *   Harus mendukung ukuran dan warna yang berbeda sesuai konteks.
5.  **Tombol (Button):**
    *   Elemen interaktif untuk memicu aksi (CTA, Pencarian, Hamburger).
    *   Properti: `onClick`, `label` (aksesibilitas).
    *   Variasi: Tombol CTA dengan latar belakang biru (`bg-blue-500`).

## Molecules

Molecules adalah kumpulan atoms yang disatukan menjadi unit fungsional terkecil.

1.  **Brand Identity (Logo + Text):**
    *   Menggabungkan atom Logo dan Teks Branding.
    *   Berfungsi sebagai area klik tunggal untuk navigasi ke beranda.
    *   Posisi: Sisi kiri header.
2.  **Local Navigation Link:**
    *   Menggabungkan atom Tautan Navigasi dengan styling khusus untuk navigasi lokal desktop (font tebal, ukuran `1rem`, underline saat active/hover).
3.  **Search Button:**
    *   Menggabungkan atom Ikon (search) dengan atom Tombol.
    *   Memicu fungsionalitas pencarian.
    *   Harus memiliki state yang jelas saat aktif/fokus.
4.  **CTA Button:**
    *   Menggunakan atom Tombol dengan styling spesifik sesuai panduan branding (misal: latar belakang biru, teks "Daftar Sekarang", border-radius).
    *   Sebagai ajakan bertindak yang menonjol.
    *   Harus memiliki state hover dan active yang jelas.
5.  **Hamburger/Close Button:**
    *   Menggabungkan atom Ikon (hamburger atau close) dengan atom Tombol.
    *   Merupakan pemicu utama untuk menu global.
    *   Memiliki animasi perubahan ikon dari hamburger ke 'X' dan perubahan warna (abu-abu ke putih) saat menu global aktif (`isMenuOpen`).
    *   Area klik harus cukup besar untuk kemudahan penggunaan di perangkat sentuh.

## Organisms

Organisms adalah kelompok molecules dan/atau atoms yang membentuk bagian yang kompleks dan fungsional dari antarmuka.

1.  **Header:**
    *   Merupakan container utama di bagian atas viewport.
    *   Memiliki ketinggian tetap di desktop dan mobile (dengan penyesuaian jika ada notifikasi/alert bar di atasnya).
    *   Menggunakan warna latar belakang dan gaya sesuai panduan branding.
    *   Menggabungkan Brand Identity, Local Navigation Links (desktop), Search Button, CTA Button, dan Hamburger/Close Button.
    *   Struktur: Terbagi menjadi sisi kiri (Brand Identity), tengah (Navigasi Lokal - desktop only), dan kanan (Menu Kontrol Cepat: Search, CTA, Hamburger).
    *   Properti:
        *   `domain`: Mengatur kelas CSS (`site-header`, `noindex`, `site-header--online`).
        *   `position`: Menentukan posisi (`sticky`, `relative`). Menggunakan kelas `site-header--sticky` atau `site-header--relative`.
        *   `sticky`: Boolean, mengaktifkan styling sticky.
        *   `isMenuOpen`: Boolean, menentukan status menu global. Mempengaruhi animasi Hamburger/Close Button dan kelas CSS header (`site-header--menu-is-open`).
        *   `hasAlert`: Boolean, menambahkan kelas `site-header--header-alert` jika ada pesan alert di atas header.
        *   `isWorkingKnowledge`, `isMinimalHeader`, `isHomepage`: Properti opsional untuk styling kontekstual tambahan (`wk-site-header`, `site-header--minimal`, `site-header--homepage`).
    *   Mengelola visibilitas Navigasi Lokal: Navigasi lokal menghilang halus saat `isMenuOpen` bernilai `true`.
    *   Mengelola status animasi Hamburger/Close Button berdasarkan `isMenuOpen`.
    *   Menggunakan kelas CSS yang dikondisikan dengan fungsi `cn` (misal: `headerClass`).
    *   Harus memiliki `aria-label` atau atribut aksesibilitas lain untuk identifikasi peran.
2.  **Global Menu Overlay:**
    *   *Catatan: Meskipun bukan bagian langsung dari header itu sendiri, header bertanggung jawab memicu dan mengelola status buka/tutup menu global ini.*
    *   Overlay layar penuh yang muncul saat header Hamburger Button diklik (`isMenuOpen` menjadi `true`).
    *   Memiliki struktur hierarki tiga tingkat (desktop) atau satu kolom dropdown (mobile) berdasarkan data `navigationData`.
    *   Mencakup Quick Links Footer berdasarkan data `quickLinksData`.
    *   Menggunakan latar belakang gradien gelap dan gambar kampus responsif.

## Integrasi dan Perilaku

*   Header akan menggunakan state internal atau props (`isMenuOpen`) untuk mengontrol status menu global dan animasi Hamburger/Close Button.
*   Klik pada Hamburger Button di header akan mengubah nilai `isMenuOpen`, yang memicu tampilan menu global dan animasi ikon.
*   Navigasi lokal di header akan responsif; hanya terlihat di desktop dan akan menghilang saat menu global terbuka.
*   Penggunaan `useResizeObserver` (seperti yang dijelaskan dalam `sistem-navigasi-stie-dwimulya.md`) akan diterapkan untuk mendeteksi perubahan ukuran viewport dan memungkinkan komponen header (dan menu global yang dipicu) untuk menyesuaikan layout-nya secara dinamis antara mode desktop dan mobile tanpa memuat ulang halaman.
*   CSS Transitions akan digunakan untuk animasi halus pada perubahan visibilitas navigasi lokal dan transformasi ikon hamburger.

Rencana Atomic Design ini memecah header menjadi bagian-bagian yang dapat dikelola, memfasilitasi pengembangan, pengujian, dan pemeliharaan komponen secara independen sebelum dirakit menjadi organisme header yang utuh.