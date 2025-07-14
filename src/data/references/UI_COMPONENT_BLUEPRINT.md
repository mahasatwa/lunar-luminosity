# Blueprint Komponen UI: STIE Dwimulya (Atomic Design)

Dokumen ini mendefinisikan sistem komponen UI untuk website STIE Dwimulya, berdasarkan prinsip Atomic Design. Tujuannya adalah untuk menciptakan bahasa visual yang konsisten, mempercepat pengembangan, dan memastikan kualitas di seluruh platform.

---

## Atom

Atom adalah blok bangunan dasar dari UI. Mereka tidak dapat dipecah lebih lanjut dan tidak memiliki *state* sendiri.

- **`Icon.astro`**:
  - **Tujuan**: Menampilkan ikon SVG dari pustaka (misal: Tabler Icons).
  - **Props**: `name`, `size`, `color`.

- **`Button.astro`**:
  - **Tujuan**: Elemen interaktif utama.
  - **Varian**: `primary` (CTA), `secondary` (aksi pendukung), `tertiary` (link-like).
  - **Props**: `variant`, `href`, `iconName`, `label`.

- **`Logo.astro`**:
  - **Tujuan**: Menampilkan logo resmi STIE Dwimulya.
  - **Props**: `variant` ('full', 'emblem').

- **`Heading.astro`**:
  - **Tujuan**: Menangani semua level heading (`h1` hingga `h6`) dengan gaya yang konsisten.
  - **Props**: `as` (h1-h6), `size` (sm-xl).

- **`Input.astro`**:
  - **Tujuan**: Komponen dasar untuk semua input formulir.
  - **Props**: `type`, `placeholder`, `name`, `label`.

- **`Badge.astro`**:
  - **Tujuan**: Menampilkan label kecil atau status (misal: "Terakreditasi B").
  - **Props**: `text`, `color`.

---

## Molekul

Molekul adalah grup atom yang terikat bersama dan berfungsi sebagai satu unit.

- **`Card.astro`**:
  - **Tujuan**: Menampilkan konten dalam sebuah kartu. Digunakan untuk berita, program studi, dll.
  - **Komposisi**: `Heading`, `Image` (Atom), `Badge`.
  - **Props**: `title`, `imageUrl`, `description`, `badgeText`, `href`.

- **`StatisticItem.astro`**:
  - **Tujuan**: Menampilkan satu angka statistik dengan labelnya.
  - **Komposisi**: `Heading` (untuk angka), `Paragraph` (untuk label).
  - **Props**: `value`, `label`.

- **`Testimonial.astro`**:
  - **Tujuan**: Menampilkan kutipan testimoni dengan foto dan nama.
  - **Komposisi**: `Image` (Atom), `Blockquote`, `Paragraph`.
  - **Props**: `quote`, `authorName`, `authorImage`, `authorTitle`.

- **`FormField.astro`**:
  - **Tujuan**: Menggabungkan `Input` dengan `Label` dan pesan error.
  - **Komposisi**: `Input`, `Label`.
  - **Props**: `name`, `label`, `type`, `errorMessage`.

- **`NavLink.astro`**:
  - **Tujuan**: Item navigasi yang dapat memiliki dropdown.
  - **Komposisi**: `Button`, `Icon`.
  - **Props**: `text`, `href`, `submenu` (array).

---

## Organisme

Organisme adalah bagian UI yang relatif kompleks yang terdiri dari grup molekul dan/atau atom.

- **`SiteHeader.astro`**:
  - **Tujuan**: Header utama situs.
  - **Komposisi**: `Logo`, Molekul `NavLink`, `Button` (CTA).
  - **Interaktivitas**: Mengelola state menu mobile (jika diperlukan, menggunakan `script` Astro).

- **`SiteFooter.astro`**:
  - **Tujuan**: Footer utama situs.
  - **Komposisi**: `Logo`, daftar tautan, informasi kontak, ikon media sosial.

- **`Hero.astro`**:
  - **Tujuan**: Bagian pembuka yang besar dan visual di atas halaman.
  - **Komposisi**: `Heading`, `Paragraph`, `Button` (CTA), `Image`/`Video` latar belakang.
  - **Props**: `title`, `subtitle`, `ctaLabel`, `ctaHref`, `backgroundImageUrl`.

- **`CardGrid.astro`**:
  - **Tujuan**: Menampilkan grid dari molekul `Card`.
  - **Komposisi**: `Heading`, Looping `Card`.
  - **Props**: `title`, `items` (array data kartu).

- **`ContactForm.astro`**:
  - **Tujuan**: Formulir kontak yang fungsional.
  - **Komposisi**: Looping `FormField`, `Button` (submit).

- **`Accordion.tsx`**:
  - **Tujuan**: Menampilkan konten yang dapat diperluas/diciutkan (untuk FAQ).
  - **Komposisi**: Menggunakan `Heading` dan `Paragraph`.
  - **Props**: `items` (array dari judul dan konten).
  - **Catatan**: Ini adalah kandidat kuat untuk komponen React (`.tsx`) karena memerlukan *state* sisi klien.

---

## Template

Template adalah kerangka halaman yang menyusun organisme menjadi layout.

- **`LandingPageTemplate.astro`**:
  - **Tujuan**: Layout untuk halaman utama.
  - **Struktur**: Slot untuk `Hero`, `CardGrid`, `Testimonials`, dll.

- **`DetailPageTemplate.astro`**:
  - **Tujuan**: Layout untuk halaman detail seperti program studi atau artikel berita.
  - **Struktur**: Slot untuk `Hero` (lebih kecil), konten utama (artikel), dan sidebar (jika ada).

- **`FormPageTemplate.astro`**:
  - **Tujuan**: Layout untuk halaman yang didominasi formulir, seperti Kontak atau Penerimaan.
  - **Struktur**: Layout dua kolom dengan formulir di satu sisi dan informasi di sisi lain.

---

## Halaman

Halaman adalah instance spesifik dari template, di mana konten nyata (dari Contentful) dimasukkan. Contoh: `src/pages/index.astro`, `src/pages/akademik/program-studi/[slug].astro`.
