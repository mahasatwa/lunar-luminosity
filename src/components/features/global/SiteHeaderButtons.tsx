import React from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

interface SiteHeaderButtonsProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const SiteHeaderButtons: React.FC<SiteHeaderButtonsProps> = ({ isMenuOpen, setIsMenuOpen }) => (
  <div className="hbs-site-header__buttons flex items-center gap-2 min-w-0">
    <a
      href="/search"
      aria-label="Pencarian"
      className="hidden lg:block text-gray-600 hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 p-2 rounded"
    >
      <FiSearch size={22} />
    </a>
    <a
      href="/pendaftaran"
      className="hidden lg:block bg-brand-red text-white text-base font-bold py-2 px-5 rounded-full bg-teal-800 hover:bg-sky-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
    >
      Daftar
    </a>
    <button
      type="button"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="hbs-site-header__button flex items-center justify-center p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors duration-200"
      aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
      aria-expanded={isMenuOpen}
    >
      {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
    </button>
  </div>
);

export default SiteHeaderButtons;
