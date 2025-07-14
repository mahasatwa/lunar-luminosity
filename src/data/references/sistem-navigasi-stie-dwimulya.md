# Sistem Navigasi STIE Dwimulya

Sistem navigasi STIE Dwimulya dirancang untuk memberikan pengalaman pengguna yang modern, responsif, dan sangat interaktif, dengan fokus pada efisiensi dan estetika di berbagai perangkat.

## Struktur Header

Header adalah elemen yang persisten dan selalu terlihat di bagian atas halaman, bahkan saat menu global aktif.

-   **Logo & Branding:** Di sisi kiri header, terdapat logo STIE Dwimulya dan teks "STIE Dwimulya" (dengan ukuran font 1rem atau text-base dari Tailwind CSS) yang berfungsi sebagai tautan kembali ke halaman utama.
-   **Header Styling Dinamis:** Penggunaan utilitas seperti `cn` (untuk classnames kondisional) sangat penting dalam mengelola kelas CSS header secara dinamis. Misalnya, saat pengguna menggulir halaman ke bawah, kelas tambahan dapat ditambahkan untuk mengubah tampilan header (misalnya, membuatnya lebih kompak atau menambahkan bayangan) guna meningkatkan visibilitas konten di bawahnya.

    *Contoh penggunaan `cn` pada elemen header:*


-   **Navigasi Lokal (Desktop):** Di bagian tengah, untuk tampilan desktop, terdapat tautan navigasi utama seperti Akademik, Pendaftaran, Kehidupan Kampus, dan Berita & Acara. Tautan-tautan ini disajikan dengan font tebal (font-bold) dan ukuran 1rem (text-base). Navigasi ini akan secara halus menghilang (menggunakan transisi CSS seperti opacity atau transform) saat menu global diaktifkan, mengalihkan fokus pengguna ke menu yang lebih luas.
    *Data contoh untuk Navigasi Lokal:*
    
```
javascript
    const defaultLocalMenuData = [
        { id: "profil", title: "Profil", link: "/profil" },
        { id: "program-studi", title: "Program Studi", link: "/program-studi" },
        { id: "penerimaan", title: "Penerimaan Mahasiswa Baru", link: "/penerimaan" },
        { id: "kehidupan-mahasoswa", title: "Kehidupan Mahasiswa", link: "/kehidupan-mahasiswa" },
        { id: "karir-alumni", title: "Karier & Alumni", link: "/karir-alumni" },
        { id: "penelitian", title: "Penelitian & Pengabdian Masyarakat", link: "/penelitian" },
    ];
    
```
-   **Menu Kontrol Cepat (Sisi Kanan):**
    -   **Ikon Pencarian:** Sebuah tombol untuk fungsionalitas pencarian.
    -   **Tombol CTA ("Daftar Sekarang"):** Tombol ajakan bertindak yang menonjol dengan latar belakang biru.
    -   **Ikon Hamburger:** Tombol ini adalah pemicu utama untuk membuka dan menutup menu global. Saat diklik, ikon hamburger akan berubah secara animasi menjadi ikon 'X' (dalam durasi 0.3 detik dengan sedikit rotasi dan perubahan warna dari abu-abu menjadi putih). Animasi ini memberikan feedback visual yang jelas bahwa menu global telah aktif.

## Menu Global (Full-Screen Overlay)

Menu global muncul sebagai overlay layar penuh yang meluncur masuk dari samping saat ikon hamburger diklik.

-   **Desain & Latar Belakang:** Menu ini memiliki latar belakang gradien gelap dengan gambar kampus sebagai background yang berskala responsif untuk menyesuaikan ukuran layar, memastikan keterbacaan konten tetap terjaga.
-   **Navigasi Hierarkis (Desktop & Mobile):** Menggunakan struktur data `navigationData` untuk membangun menu.
    *Struktur data contoh untuk Menu Global:*
    
```
javascript
    const navigationData = [
        {
            id: "akademik",
            title: "Akademik",
            description: "Jelajahi program studi, kurikulum, dan staf pengajar yang akan membentuk masa depan Anda.",
            subItems: [
                {
                    id: "sarjana",
                    title: "Program Sarjana (S1)",
                    description: "Program gelar yang dirancang untuk mempersiapkan para pemimpin dan profesional yang kompeten.",
                    subItems: [
                        { id: "s1-manajemen", title: "S1 Manajemen", link: "/akademik/s1-manajemen" },
                        { id: "s1-akuntansi", title: "S1 Akuntansi", link: "/akademik/s1-akuntansi" },
                    ],
                },
                // ... kategori akademik lainnya
            ],
        },
        // ... kategori utama lainnya (Pendaftaran, Kehidupan Kampus, dll.)
    ];
    
```
-   **Responsivitas (Mobile):**
    Pada perangkat seluler (lebar layar kurang dari 768px), layout menu global berubah menjadi kolom vertikal tunggal.
    Setiap kategori di Grand Tier (dan sub-kategori yang memiliki anak) berfungsi sebagai dropdown yang dapat diperluas saat disentuh. Konten di dalamnya (Middle Tier dan Specific Tier) akan meluncur ke bawah dengan animasi lembut (max-height dan opacity transition) di bawah item induknya.
    Gambar latar belakang menu menyesuaikan skala untuk memastikan konten tetap terbaca dan menarik secara visual di berbagai ukuran layar.
-   **Tautan Cepat Footer (Dalam Menu Global):** Di bagian bawah menu global, terdapat bagian tautan cepat penting yang ditampilkan dalam satu baris horizontal, dipisahkan oleh bilah vertikal.
    *Data contoh untuk Tautan Cepat:*
    
```
javascript
    const quickLinksData = [
        { title: "Pendaftaran Online", link: "/pendaftaran/prosedur" },
        { title: "Hubungi Kami", link: "/kontak" },
        { title: "Kalender Akademik", link: "/akademik/kalender" },
        // ... tautan cepat lainnya
    ];
    
```
## Interaksi Mikro & Observasi

Navigasi ini mengintegrasikan interaksi yang lebih canggih untuk peningkatan pengalaman pengguna:

-   **Resize Observer:** Sistem akan menggunakan Resize Observer untuk mendeteksi perubahan ukuran viewport (misalnya, saat pengguna mengubah ukuran jendela browser atau memutar perangkat seluler). Berdasarkan perubahan ini, menu akan secara cerdas menyesuaikan layout-nya antara mode desktop (tiga kolom) dan mode seluler (satu kolom dengan dropdown). Hal ini memastikan transisi yang mulus tanpa perlu memuat ulang halaman.

## Hierarki Tiga Tingkat Menu (Tampilan Desktop)

Pada tampilan desktop (lebar layar lebih dari 768px), menu global terbagi menjadi tiga kolom utama yang saling berinteraksi secara dinamis:

#### 1. Grand Tier (Kolom Pertama)

-   **Peran:** Tingkat navigasi paling atas dan titik masuk utama.
-   **Konten:** Kategori utama situs (Akademik, Pendaftaran, dll.).
-   **Visual:** Judul tebal dengan deskripsi singkat (`item.description`).
-   **Interaksi:**
    -   Klik menyorot item (`text-blue-500`).
    -   Klik memicu tampilan Middle Tier.
    -   Jika tidak ada `subItems`, klik mengarah langsung ke `link`.

#### 2. Middle Tier (Kolom Kedua)

-   **Peran:** Menampilkan sub-kategori terkait pilihan Grand Tier.
-   **Konten:** Sub-kategori (misalnya, Program Sarjana (S1) di bawah Akademik).
-   **Visual:** Judul, dapat memiliki deskripsi singkat (`item.description`).
-   **Interaksi:**
    -   Muncul dengan animasi halus (opacity dan transform transition) dari sisi kanan.
    -   Klik menyorot item (`text-blue-500`).
    -   Jika memiliki `subItems`, klik memicu tampilan Specific Tier.
    -   Jika tidak ada `subItems`, klik mengarah langsung ke `link`.

#### 3. Specific Tier (Kolom Ketiga)

-   **Peran:** Tingkat navigasi paling detail, menampilkan opsi spesifik.
-   **Konten:** Sub-sub-kategori (misalnya, S1 Manajemen, S1 Akuntansi di bawah Program Sarjana (S1)).
-   **Visual:** Judul lebih kecil, umumnya tautan langsung.
-   **Interaksi:**
    -   Muncul dengan animasi halus (opacity dan transform transition) dari sisi kanan.
    -   Klik mengarah langsung ke `link`.

### Alur Interaksi dan Animasi

-   **Progresif:** Alur navigasi jelas: Grand Tier → Middle Tier → Specific Tier.
-   **Feedback Visual:** Penyorotan item aktif (`text-blue-500`).
-   **Animasi Geser:** Munculnya Middle Tier dan Specific Tier menggunakan animasi slide-in dan fade-in yang halus.
-   **Reset Otomatis:** Mengganti pilihan di Grand Tier mereset dan menyembunyikan Middle Tier dan Specific Tier sebelumnya.