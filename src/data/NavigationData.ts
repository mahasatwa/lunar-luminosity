// src/data/NavigationData.ts

import type { NavItem, QuickLink } from "../types/navigation";

export const navigationData: NavItem[] = [
    // 1. AKADEMIK (Apa yang bisa saya pelajari?)
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
            {
                id: "sertifikasi",
                title: "Kursus & Sertifikasi",
                description: "Tingkatkan keahlian spesifik Anda melalui program sertifikasi profesional kami.",
                subItems: [
                    { id: "brevet-pajak", title: "Brevet Pajak A & B", link: "/akademik/sertifikasi/brevet-pajak" },
                    { id: "digital-marketing", title: "Digital Marketing", link: "/akademik/sertifikasi/digital-marketing" },
                    { id: "ekspor-impor", title: "Manajemen Ekspor-Impor", link: "/akademik/sertifikasi/ekspor-impor" },
                ],
            },
            { id: "dosen", title: "Staf Pengajar", link: "/akademik/dosen" },
            { id: "kalender", title: "Kalender Akademik", link: "/akademik/kalender" },
        ],
    },

    // 2. PENDAFTARAN (Bagaimana cara saya bergabung?)
    {
        id: "pendaftaran",
        title: "Pendaftaran",
        description: "Semua informasi yang Anda butuhkan untuk menjadi bagian dari keluarga STIE Dwimulya.",
        subItems: [
            { id: "jalur-masuk", title: "Jalur Pendaftaran", link: "/pendaftaran/jalur" },
            { id: "prosedur", title: "Prosedur Pendaftaran", link: "/pendaftaran/prosedur" },
            { id: "biaya", title: "Biaya & Beasiswa", link: "/pendaftaran/biaya" },
            { id: "faq", title: "Tanya Jawab (FAQ)", link: "/pendaftaran/faq" },
        ],
    },

    // 3. KEHIDUPAN KAMPUS (Seperti apa rasanya di sana?)
    {
        id: "kampus",
        title: "Kehidupan Kampus",
        description: "Temukan lingkungan belajar yang dinamis, fasilitas modern, dan komunitas yang mendukung.",
        subItems: [
            {
                id: "kemahasiswaan",
                title: "Organisasi Mahasiswa",
                description: "Salurkan minat dan bakat Anda melalui berbagai unit kegiatan mahasiswa.",
                subItems: [
                    { id: "bem", title: "Badan Eksekutif Mahasiswa (BEM)", link: "/kampus/kemahasiswaan/bem" },
                    { id: "ukm-musik", title: "UKM Musik & Seni", link: "/kampus/kemahasiswaan/musik" },
                    { id: "ukm-olahraga", title: "UKM Olahraga", link: "/kampus/kemahasiswaan/olahraga" },
                ],
            },
            { id: "fasilitas", title: "Fasilitas Kampus", link: "/kampus/fasilitas" },
            { id: "layanan", title: "Layanan Mahasiswa", link: "/kampus/layanan" },
        ],
    },

    // 4. KARIER & ALUMNI (Apa yang terjadi setelah lulus?)
    {
        id: "alumni",
        title: "Karier & Alumni",
        description: "Lihat jejak kesuksesan alumni kami dan bagaimana kami mendukung karier Anda setelah lulus.",
        subItems: [
            { id: "kisah-alumni", title: "Kisah Sukses Alumni", link: "/alumni/kisah-sukses" },
            { id: "jaringan-alumni", title: "Jaringan Alumni", link: "/alumni/jaringan" },
            { id: "kerjasama-industri", title: "Kemitraan Industri", link: "/kemitraan" },
            { id: "pusat-karier", title: "Pusat Karier & Magang", link: "/karier" },
        ]
    },

    // 5. BERITA & ACARA (Apa yang sedang terjadi?)
    {
        id: "berita",
        title: "Berita & Acara",
        description: "Ikuti terus perkembangan terbaru, prestasi, dan kegiatan menarik di STIE Dwimulya.",
        subItems: [
            { id: "berita-kampus", title: "Berita Kampus", link: "/berita" },
            { id: "agenda-acara", title: "Agenda Acara", link: "/acara" },
            { id: "galeri", title: "Galeri Kegiatan", link: "/galeri" },
        ]
    },

    // 6. TENTANG KAMI (Siapa institusi ini?)
    {
        id: "tentang",
        title: "Tentang Kami",
        description: "Kenali lebih dalam sejarah, visi & misi, dan nilai-nilai yang kami anut.",
        subItems: [
            { id: "sejarah", title: "Sejarah Singkat", link: "/tentang/sejarah" },
            { id: "visi-misi", title: "Visi, Misi & Tujuan", link: "/tentang/visi-misi" },
            { id: "struktur", title: "Struktur Organisasi", link: "/tentang/struktur" },
            { id: "akreditasi", title: "Akreditasi Institusi", link: "/tentang/akreditasi" },
            { id: "kontak", title: "Lokasi & Kontak", link: "/kontak" },
        ],
    },

    // 7. PENELITIAN & PENGABDIAN (Kontribusi kepada masyarakat)
    {
        id: "penelitian",
        title: "Penelitian & Pengabdian",
        description: "Kontribusi nyata STIE Dwimulya bagi perkembangan ilmu pengetahuan dan masyarakat.",
        subItems: [
            { id: "pusat-studi", title: "Pusat Studi & Riset", link: "/penelitian/pusat-studi" },
            { id: "publikasi", title: "Publikasi Ilmiah", link: "/penelitian/publikasi" },
            { id: "pengabdian-masyarakat", title: "Pengabdian Masyarakat", link: "/penelitian/ppm" },
        ]
    },

    // 8. PORTAL (Akses Cepat - Utility)
    {
        id: "portal",
        title: "Portal",
        description: "Akses cepat ke sistem informasi akademik untuk komunitas internal STIE Dwimulya.",
        subItems: [
            { id: "portal-mahasiswa", title: "Portal Mahasiswa", link: "https://portal.stiedwimulya.ac.id/mahasiswa", isExternal: true },
            { id: "portal-dosen", title: "Portal Dosen", link: "https://portal.stiedwimulya.ac.id/dosen", isExternal: true },
            { id: "e-learning", title: "E-Learning", link: "https://elearning.stiedwimulya.ac.id", isExternal: true },
            { id: "perpustakaan", title: "Perpustakaan Digital", link: "https://library.stiedwimulya.ac.id", isExternal: true },
        ]
    },
];

// --- Tautan Cepat untuk Footer ---
export const quickLinksData: QuickLink[] = [
    { title: "Pendaftaran Online", link: "/pendaftaran/prosedur" },
    { title: "Hubungi Kami", link: "/kontak" },
    { title: "Kalender Akademik", link: "/akademik/kalender" },
    { title: "Portal Mahasiswa", link: "https://portal.stiedwimulya.ac.id/mahasiswa", isExternal: true },
];