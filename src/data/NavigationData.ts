// src/data/NavigationData.ts
export interface NavItem {
  text: string;
  href?: string;
  submenu?: NavItem[];
}

export const globalNavigationData: NavItem[] = [
  {
    text: 'Kampus',
    submenu: [
      { text: 'Lokasi & Akses', href: '/kampus/lokasi-akses' },
      { text: 'Sejarah Kampus', href: '/kampus/sejarah' },
      { text: 'Visi & Misi', href: '/kampus/visi-misi' },
      { text: 'Struktur Organisasi', href: '/kampus/struktur-organisasi' },
    ],
  },
  {
    text: 'Akademik',
    submenu: [
      {
        text: 'Program Studi',
        submenu: [
          { text: 'S1 Akuntansi', href: '/akademik/program-studi/s1-akuntansi' },
          { text: 'S1 Manajemen', href: '/akademik/program-studi/s1-manajemen' },
        ],
      },
      { text: 'Kalender Akademik', href: '/akademik/kalender' },
      { text: 'Beasiswa & Biaya', href: '/akademik/beasiswa' },
    ],
  },
  {
    text: 'Penelitian',
    submenu: [
        {
            text: 'Program KKM',
            submenu: [
              { text: 'Desa Kadubeureum', href: '/penelitian/kkm/desa-kadubeureum' },
              { text: 'Program Lainnya', href: '/penelitian/kkm/lainnya' },
            ],
          },
      {
        text: 'Penelitian Mahasiswa (PKM)',
        submenu: [
          { text: 'Budaya Debus', href: '/penelitian/pkm/budaya-debus' },
          { text: 'Penelitian Lainnya', href: '/penelitian/pkm/lainnya' },
        ],
      },
      { text: 'Publikasi Dosen', href: '/penelitian/publikasi-dosen' },
    ],
  },
  {
    text: 'Fasilitas',
    submenu: [
      { text: 'Gedung Perkuliahan', href: '/fasilitas/gedung' },
      { text: 'Laboratorium', href: '/fasilitas/lab' },
      { text: 'Perpustakaan', href: '/fasilitas/perpustakaan' },
      { text: 'Ruang Seminar', href: '/fasilitas/ruang-seminar' },
    ],
  },
  {
    text: 'Alumni',
    submenu: [
      { text: 'Jejaring Alumni', href: '/alumni/jejaring' },
      { text: 'Lowongan Kerja', href: '/alumni/lowongan-kerja' },
      { text: 'Tracer Study', href: '/alumni/tracer-study' },
    ],
  },
  {
    text: 'Tentang',
    submenu: [
      { text: 'Akreditasi BAN-PT', href: '/tentang/akreditasi' },
      { text: 'Penghargaan', href: '/tentang/penghargaan' },
      { text: 'Kontak Kami', href: '/tentang/kontak' },
    ],
  },
];
