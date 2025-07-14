// src/data/NavigationData.ts
export interface NavItem {
  id: string; // Add id for better key handling in React
  text: string;
  href?: string;
  isExternal?: boolean;
  submenu?: NavItem[];
  description?: string; // Optional description
}


export const homepageNavigationData: NavItem[] = [
  {
    id: 'tentang-kami',
    text: 'Tentang Kami',
    href: '/tentang-kami',
    description: 'Sejarah, visi, misi, dan nilai-nilai STIE Dwimulya.',
    submenu: [
      { id: 'profil', text: 'Profil STIE Dwimulya', href: '/tentang-kami/profil' },
      { id: 'visi-misi', text: 'Visi & Misi', href: '/tentang-kami/visi-misi' },
      { id: 'fasilitas', text: 'Fasilitas Kampus', href: '/tentang-kami/fasilitas' },
      { id: 'galeri', text: 'Galeri', href: '/tentang-kami/galeri' },
    ],
  },
  {
    id: 'akademik',
    text: 'Akademik',
    href: '/akademik',
    description: 'Program studi, kurikulum, dan kalender akademik.',
    submenu: [
      { id: 's1-akuntansi', text: 'S1 Akuntansi', href: '/akademik/program-studi/s1-akuntansi' },
      { id: 's1-manajemen', text: 'S1 Manajemen', href: '/akademik/program-studi/s1-manajemen' },
      { id: 'kurikulum', text: 'Struktur Kurikulum', href: '/akademik/kurikulum' },
      { id: 'kalender-akademik', text: 'Kalender Akademik', href: '/akademik/kalender' },
      { id: 'akreditasi', text: 'Akreditasi Program Studi', href: '/akreditasi' },
    ],
  },
  {
    id: 'pendaftaran',
    text: 'Pendaftaran',
    href: '/pendaftaran',
    description: 'Informasi lengkap mengenai prosedur pendaftaran mahasiswa baru.',
    submenu: [
      { id: 'alur-pendaftaran', text: 'Alur Pendaftaran', href: '/pendaftaran/alur' },
      { id: 'persyaratan', text: 'Persyaratan Pendaftaran', href: '/pendaftaran/persyaratan' },
      { id: 'biaya-kuliah', text: 'Biaya Kuliah & Beasiswa', href: '/pendaftaran/biaya-beasiswa' },
      { id: 'jadwal-penting', text: 'Jadwal Penting PMB', href: '/pendaftaran/jadwal' },
      { id: 'daftar-online', text: 'Daftar Online', href: '/pendaftaran/daftar-online' },
    ],
  },
  {
    id: 'kehidupan-kampus',
    text: 'Kehidupan Kampus',
    href: '/kehidupan-kampus',
    description: 'Informasi mengenai kegiatan mahasiswa, organisasi, dan fasilitas penunjang.',
    submenu: [
      { id: 'organisasi-mahasiswa', text: 'Organisasi Mahasiswa', href: '/kehidupan-kampus/organisasi' },
      { id: 'prestasi-mahasiswa', text: 'Prestasi Mahasiswa', href: '/kehidupan-kampus/prestasi' },
      { id: 'kegiatan-ekstrakurikuler', text: 'Kegiatan Ekstrakurikuler', href: '/kehidupan-kampus/ekstrakurikuler' },
      { id: 'career-center', text: 'Pusat Karir & Alumni', href: '/kehidupan-kampus/career-center' },
    ],
  },
];

export const globalNavigationData: NavItem[] = [
  {
    id: 'akademik',
    text: 'Akademik',
    description: 'Program studi, kurikulum, dan kalender akademik.',
    submenu: [
      {
        id: 'prodi', text: 'Program Studi', submenu: [
          { id: 's1-akuntansi', text: 'S1 Akuntansi', href: '/akademik/program-studi/s1-akuntansi' },
          { id: 's1-manajemen', text: 'S1 Manajemen', href: '/akademik/program-studi/s1-manajemen' },
        ]
      },
      { id: 'kalender-akademik', text: 'Kalender Akademik', href: '/akademik/kalender' },
      { id: 'beasiswa-biaya', text: 'Beasiswa & Biaya', href: '/akademik/beasiswa' },
      { id: 'akreditasi', text: 'Akreditasi', href: '/akreditasi' },
    ],
  },
  {
    id: 'penerimaan',
    text: 'Penerimaan',
    href: '/penerimaan',
    description: 'Informasi pendaftaran untuk mahasiswa baru.',
  },
  {
    id: 'penelitian',
    text: 'Penelitian',
    description: 'Pengabdian masyarakat dan publikasi ilmiah.',
    submenu: [
      { id: 'kkm', text: 'Program KKM', href: '/penelitian/kkm' },
      { id: 'pkm', text: 'Penelitian Mahasiswa (PKM)', href: '/penelitian/pkm' },
      { id: 'publikasi-dosen', text: 'Publikasi Dosen', href: '/penelitian/publikasi-dosen' },
    ],
  },
  {
    id: 'tentang-kami',
    text: 'Tentang Kami',
    description: 'Sejarah, visi, misi, dan struktur organisasi.',
    submenu: [
      { id: 'sejarah', text: 'Sejarah Kampus', href: '/kampus/sejarah' },
      { id: 'visi-misi', text: 'Visi & Misi', href: '/kampus/visi-misi' },
      { id: 'struktur-organisasi', text: 'Struktur Organisasi', href: '/kampus/struktur-organisasi' },
    ],
  },
  {
    id: 'kontak',
    text: 'Kontak',
    href: '/kontak',
    description: 'Hubungi kami dan temukan lokasi kampus.',
  },
];

export const quickLinksData = [
  { title: "Penerimaan Mahasiswa Baru", link: "/penerimaan" },
  { title: "Kontak Kami", link: "/kontak" },
  { title: "Kalender Akademik", link: "/akademik/kalender" },
  { title: "Portal Mahasiswa", link: "https://portal.stiedwimulya.ac.id/mahasiswa", isExternal: true },
  { title: "Berita Terbaru", link: "/berita" }
];
