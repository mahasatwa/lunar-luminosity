// src/data/NavigationData.ts

// Impor hanya tipe yang dibutuhkan, UserRole dihapus
import type { NavItem, QuickLink } from "../types/navigation";

// Tipe NavItem mungkin perlu disesuaikan di src/types/navigation.ts
// untuk membuat 'roles' opsional atau menghapusnya.

export const navigationData: NavItem[] = [
    // --- KATEGORI 1: AKADEMIK ---
    {
        id: "akademik",
        title: "Akademik",
        path: "/akademik",
        heading: 'Program Unggulan STIE Dwimulya',
        description: 'Jelajahi program studi Sarjana (S1) dan kursus kami yang dirancang untuk mencetak profesional ekonomi dan bisnis yang kompeten.',
        subItems: [
            {
                id: "sarjana",
                title: "Program Sarjana (S1)",
                path: "/akademik/sarjana",
                // Level 3 untuk Program Sarjana
                subItems: [
                    { id: "s1-manajemen", title: "S1 Manajemen", link: "/akademik/sarjana/manajemen" },
                    { id: "s1-akuntansi", title: "S1 Akuntansi", link: "/akademik/sarjana/akuntansi" },
                    { id: "kurikulum", title: "Struktur Kurikulum", link: "/akademik/kurikulum" },
                ],
            },
            {
                id: "sertifikasi",
                title: "Kursus & Sertifikasi",
                path: "/akademik/sertifikasi",
                // Level 3 untuk Kursus
                subItems: [
                    { id: "brevet-pajak", title: "Brevet Pajak A & B", link: "/akademik/sertifikasi/brevet-pajak" },
                    { id: "digital-marketing", title: "Digital Marketing", link: "/akademik/sertifikasi/digital-marketing" },
                    { id: "ekspor-impor", title: "Manajemen Ekspor-Impor", link: "/akademik/sertifikasi/ekspor-impor" },
                ],
            },
            { id: "dosen", title: "Staf Pengajar", path: "/akademik/dosen", link: "/akademik/dosen" },
            { id: "kalender", title: "Kalender Akademik", path: "/akademik/kalender", link: "/akademik/kalender" },
        ],
        featured: {
            title: 'Fokus: Akuntansi Digital',
            text: 'Pelajari bagaimana STIE Dwimulya mengintegrasikan teknologi terkini dalam kurikulum akuntansi untuk menjawab tantangan era digital.',
            image: 'https://via.placeholder.com/300x200/CCCCCC/FFFFFF?text=Akuntansi+Digital',
            link: '/kisah/akuntansi-digital',
        },
        quote: {
            text: '“Pendidikan di STIE Dwimulya membuka wawasan saya tentang dunia bisnis modern.”',
            author: 'Andi Pratama, Alumni Manajemen 2023'
        },
    },

    // --- KATEGORI 2: KEHIDUPAN KAMPUS ---
    {
        id: "kampus",
        title: "Kehidupan Kampus",
        path: "/kampus",
        heading: 'Lingkungan Belajar yang Mendukung',
        description: 'Temukan fasilitas modern, organisasi mahasiswa yang aktif, dan berbagai kegiatan yang memperkaya pengalaman Anda di STIE Dwimulya.',
        subItems: [
            {
                id: "kemahasiswaan",
                title: "Organisasi Mahasiswa",
                path: "/kampus/kemahasiswaan",
                // Level 3 untuk Organisasi
                subItems: [
                    { id: "bem", title: "Badan Eksekutif Mahasiswa (BEM)", link: "/kampus/kemahasiswaan/bem" },
                    { id: "ukm-musik", title: "UKM Musik & Seni", link: "/kampus/kemahasiswaan/musik" },
                    { id: "ukm-olahraga", title: "UKM Olahraga", link: "/kampus/kemahasiswaan/olahraga" },
                    { id: "hima", title: "Himpunan Mahasiswa Jurusan", link: "/kampus/kemahasiswaan/hima" },
                ],
            },
            { id: "fasilitas", title: "Fasilitas Kampus", path: "/kampus/fasilitas", link: "/kampus/fasilitas" },
            { id: "acara", title: "Acara & Kegiatan", path: "/kampus/acara", link: "/kampus/acara" },
            { id: "layanan", title: "Layanan Mahasiswa", path: "/kampus/layanan", link: "/kampus/layanan" },
        ],
        featured: {
            title: 'Dwimulya Business Challenge 2025',
            text: 'Ajang kompetisi ide bisnis tahunan yang mengasah jiwa kewirausahaan mahasiswa kami.',
            image: 'https://via.placeholder.com/300x200/CCCCCC/FFFFFF?text=Business+Challenge',
            link: '/acara/business-challenge-2025',
        },
        quote: {
            text: '“Kampus ini bukan hanya tempat belajar, tapi juga rumah kedua bagi saya.”',
            author: 'Dewi Lestari, Mahasiswi Akuntansi'
        },
    },

    // --- KATEGORI 3: PENELITIAN & PENGABDIAN ---
    {
        id: "penelitian",
        title: "Penelitian & Pengabdian",
        path: "/penelitian",
        heading: 'Inovasi untuk Masyarakat',
        description: 'Lihat bagaimana dosen dan mahasiswa STIE Dwimulya berkontribusi melalui penelitian terapan dan program pengabdian kepada masyarakat.',
        subItems: [
            {
                id: "pusat-studi",
                title: "Pusat Studi & Riset",
                path: "/penelitian/pusat-studi",
                // Level 3 untuk Pusat Studi
                subItems: [
                    { id: "pusat-umkm", title: "Pusat Pengembangan UMKM", link: "/penelitian/pusat-studi/umkm" },
                    { id: "pusat-ekonomi-digital", title: "Pusat Ekonomi Digital", link: "/penelitian/pusat-studi/digital" },
                ],
            },
            { id: "publikasi", title: "Publikasi Ilmiah", path: "/penelitian/publikasi", link: "/penelitian/publikasi" },
            { id: "pengabdian", title: "Pengabdian Masyarakat (PPM)", path: "/penelitian/ppm", link: "/penelitian/ppm" },
            { id: "kerjasama", title: "Kerja Sama Industri", path: "/penelitian/kerjasama", link: "/penelitian/kerjasama" },
        ],
        featured: {
            title: 'Pendampingan UMKM Go Digital',
            text: 'Program PPM kami membantu UMKM lokal memanfaatkan teknologi digital untuk meningkatkan daya saing.',
            image: 'https://via.placeholder.com/300x200/CCCCCC/FFFFFF?text=UMKM+Go+Digital',
            link: '/ppm/umkm-go-digital',
        },
        quote: {
            text: '“Riset yang relevan adalah kunci untuk memberikan solusi nyata bagi perekonomian.”',
            author: 'Dr. Budi Hartono, M.Si., Dosen Peneliti'
        },
    },

    // --- KATEGORI 4: PENDAFTARAN ---
    {
        id: "pendaftaran",
        title: "Pendaftaran",
        path: "/pendaftaran",
        heading: 'Bergabung dengan STIE Dwimulya',
        description: 'Informasi lengkap mengenai prosedur pendaftaran, biaya kuliah, dan beasiswa untuk calon mahasiswa baru.',
        subItems: [
            { id: "jalur-masuk", title: "Jalur Pendaftaran", path: "/pendaftaran/jalur", link: "/pendaftaran/jalur" },
            { id: "prosedur", title: "Prosedur Pendaftaran", path: "/pendaftaran/prosedur", link: "/pendaftaran/prosedur" },
            { id: "biaya", title: "Biaya & Beasiswa", path: "/pendaftaran/biaya", link: "/pendaftaran/biaya" },
            { id: "faq", title: "Tanya Jawab (FAQ)", path: "/pendaftaran/faq", link: "/pendaftaran/faq" },
            { id: "brosur", title: "Unduh Brosur", path: "/pendaftaran/brosur", link: "/pendaftaran/brosur" },
        ],
        featured: {
            title: 'Beasiswa Prestasi Dwimulya',
            text: 'STIE Dwimulya menyediakan berbagai pilihan beasiswa bagi calon mahasiswa berprestasi.',
            image: 'https://via.placeholder.com/300x200/CCCCCC/FFFFFF?text=Beasiswa+Prestasi',
            link: '/pendaftaran/beasiswa/prestasi',
        },
        quote: {
            text: '“Proses pendaftarannya mudah dan informatif. Saya tidak sabar untuk mulai kuliah!”',
            author: 'Siti Nurhaliza, Calon Mahasiswa'
        },
    },

    // --- KATEGORI 5: TENTANG KAMI ---
    {
        id: "tentang",
        title: "Tentang Kami",
        path: "/tentang",
        heading: 'Mengenal STIE Dwimulya',
        description: 'Pelajari lebih dalam tentang sejarah, visi & misi, struktur organisasi, dan kontak STIE Dwimulya.',
        subItems: [
            { id: "sejarah", title: "Sejarah Singkat", path: "/tentang/sejarah", link: "/tentang/sejarah" },
            { id: "visi-misi", title: "Visi, Misi & Tujuan", path: "/tentang/visi-misi", link: "/tentang/visi-misi" },
            { id: "struktur", title: "Struktur Organisasi", path: "/tentang/struktur", link: "/tentang/struktur" },
            { id: "akreditasi", title: "Akreditasi", path: "/tentang/akreditasi", link: "/tentang/akreditasi" },
            { id: "kontak", title: "Lokasi & Kontak", path: "/kontak", link: "/kontak" },
        ],
        featured: {
            title: 'Akreditasi "Baik Sekali"',
            text: 'STIE Dwimulya berkomitmen menjaga kualitas pendidikan melalui akreditasi nasional.',
            image: 'https://via.placeholder.com/300x200/CCCCCC/FFFFFF?text=Akreditasi+Kampus',
            link: '/tentang/akreditasi',
        },
        quote: {
            text: '“Kami bangga menjadi bagian dari institusi yang berdedikasi pada kualitas dan integritas.”',
            author: 'Prof. Dr. Ahmad Subarjo, Ketua STIE Dwimulya'
        },
    },

    // --- KATEGORI 6: PORTAL (Link Eksternal) ---
    {
        id: "portal",
        title: "Portal",
        heading: 'Akses Cepat Sistem Informasi',
        description: 'Masuk ke sistem informasi akademik untuk mahasiswa dan dosen.',
        subItems: [
            {
                id: "portal-mahasiswa",
                title: "Portal Mahasiswa",
                link: "https://portal.stiedwimulya.ac.id/mahasiswa",
                isExternal: true,
            },
            {
                id: "portal-dosen",
                title: "Portal Dosen",
                link: "https://portal.stiedwimulya.ac.id/dosen",
                isExternal: true,
            },
            {
                id: "e-learning",
                title: "E-Learning",
                link: "https://elearning.stiedwimulya.ac.id",
                isExternal: true,
            },
            {
                id: "perpustakaan",
                title: "Perpustakaan Digital",
                link: "https://library.stiedwimulya.ac.id",
                isExternal: true,
            },
        ]
    },
];

// --- Tautan Cepat ---
export const quickLinksData: QuickLink[] = [
    { title: "Pendaftaran Online", link: "/pendaftaran/prosedur" },
    { title: "Hubungi Kami", link: "/kontak" },
    { title: "Kalender Akademik", link: "/akademik/kalender" },
    { title: "Portal Mahasiswa", link: "https://portal.stiedwimulya.ac.id/mahasiswa", isExternal: true },
];