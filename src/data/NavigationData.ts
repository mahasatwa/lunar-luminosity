// src/data/NavigationData.ts
export interface NavItem {
  id: string; // Add id for better key handling in React
  text: string;
  href?: string;
  isExternal?: boolean;
  submenu?: NavItem[];
  description?: string; // Optional description
}

export const globalNavigationData: NavItem[] = [
  {
    id: 'akademik',
    text: 'Akademik',
    description: 'Program studi, kurikulum, dan kalender akademik.',
    submenu: [
      { id: 'prodi', text: 'Program Studi', submenu: [
          { id: 's1-akuntansi', text: 'S1 Akuntansi', href: '/akademik/program-studi/s1-akuntansi' },
          { id: 's1-manajemen', text: 'S1 Manajemen', href: '/akademik/program-studi/s1-manajemen' },
      ]},
      { id: 'kalender-akademik', text: 'Kalender Akademik', href: '/akademik/kalender' },
      // Beasiswa & Biaya will be a top-level item
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
    id: 'beasiswa-biaya',
    text: 'Beasiswa & Bantuan Keuangan',
    href: '/beasiswa',
    description: 'Informasi lengkap tentang beasiswa, bantuan biaya, dan panduan pengajuan.',
  },
  {
    id: 'penelitian',
    text: 'Penelitian & Publikasi', // Changed text to be more explicit
    description: 'Pengabdian masyarakat, penelitian mahasiswa, dan publikasi ilmiah dosen.', // Enhanced description
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
