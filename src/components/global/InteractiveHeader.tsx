import React, { useState } from "react";
import useScrollHandler from "../../hooks/useScrollHandler";
import type { NavItem, QuickLink } from "../../types/navigation";
import NavShell from "./NavShell";
import { FiSearch } from "react-icons/fi"; // Impor ikon pencarian

// Interface props tetap sama
interface InteractiveHeaderProps {
  logoUrl: string;
  wordmarkUrl: string;
  navigationData: NavItem[];
  quickLinksData: QuickLink[];
}

const desktopLinks = [
  { title: "Mahasiswa Baru", href: "/pendaftaran" },
  { title: "Akademik", href: "/akademik" },
  { title: "Alumni", href: "/alumni" },
  { title: "Riset", href: "/penelitian" },
  { title: "Tentang", href: "/tentang" },
];

const InteractiveHeader: React.FC<InteractiveHeaderProps> = ({
  logoUrl,
  wordmarkUrl,
  navigationData,
  quickLinksData,
}) => {
  // 1. Definisikan semua kelas awal yang akan berubah di dalam state
  const [dynamicClasses, setDynamicClasses] = useState("bg-gray-100 p-4");

  // Gunakan useScrollHandler untuk mengubah seluruh set kelas
  useScrollHandler((isScrolled) => {
    setDynamicClasses(
      isScrolled
        ? "bg-gray-200 shadow-md p-2" // Header menyusut
        : "bg-gray-100 p-4" // Header kembali normal
    );
  });

  return (
    <header
      // 2. className permanen sekarang hanya berisi kelas layout yang tidak akan pernah berubah
      className={`flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ease-in-out ${dynamicClasses}`}
    >
      <div className={`container mx-auto flex justify-between items-center`}>
        <a
          href="/"
          aria-label="Beranda STIE Dwimulya"
          className="flex items-center gap-4"
        >
          {/* Konten <img> tidak berubah */}
          <img
            src={logoUrl}
            alt="Logo STIE Dwimulya"
            // 3. Tambahkan juga transisi di sini agar ukuran logo berubah dengan mulus
            className={`h-[2.5rem] md:h-[3rem] w-auto transition-all duration-300 ease-in-out ${
              dynamicClasses.includes("p-2") ? "h-[2.25rem]" : "h-[3rem]"
            }`}
            width={64}
            height={64}
          />
          <img
            src={wordmarkUrl}
            alt="Wordmark STIE Dwimulya"
            className={`h-[2.5rem] md:h-[3rem] w-auto transition-all duration-300 ease-in-out ${
              dynamicClasses.includes("p-2") ? "h-[2.25rem]" : "h-[3rem]"
            }`}
            width={180}
            height={64}
          />
        </a>

        {/* Bagian Tengah & Kanan: Navigasi Desktop & Kontrol */}
        <div className="flex items-center gap-6">
          {/* 2. Navigasi Teks HANYA untuk Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {desktopLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-colors duration-200"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Garis Pemisah Vertikal */}
          <div className="hidden lg:block w-px h-6 bg-gray-300"></div>

          <div className="flex items-center gap-4">
            {/* 3. Ikon Search & Tombol CTA HANYA untuk Desktop */}

            <a
              href="/pendaftaran"
              className="hidden lg:block bg-brand-red text-white text-sm font-bold py-2 px-5 rounded-full bg-teal-800 hover:bg-sky-600 transition-all duration-300"
            >
              Daftar
            </a>

            <a
              href="/search"
              aria-label="Pencarian"
              className="hidden lg:block text-gray-600 hover:text-brand-red transition-colors"
            >
              <FiSearch size={20} />
            </a>

            <nav>
              <NavShell
                navigationData={navigationData}
                quickLinksData={quickLinksData}
              />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default InteractiveHeader;
