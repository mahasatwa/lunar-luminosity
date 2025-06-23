import React from "react";
import { FiSearch } from "react-icons/fi";

interface SiteHeaderButtonsProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const AnimatedHamburger: React.FC<{ open: boolean }> = ({ open }) => (
  <span className="relative w-8 h-8 block">
    <span
      className={`absolute left-1/2 top-2 w-6 h-0.5 bg-blue-900 rounded transition-all duration-300 origin-center ${
        open ? "rotate-45 top-4" : "-translate-x-1/2"
      }`}
      style={{ transform: open ? "translate(-50%, 0) rotate(45deg)" : "translate(-50%, 0) rotate(0deg)" }}
    />
    <span
      className={`absolute left-1/2 top-4 w-6 h-0.5 bg-blue-900 rounded transition-all duration-300 origin-center ${
        open ? "opacity-0" : "-translate-x-1/2"
      }`}
      style={{ opacity: open ? 0 : 1, transform: "translate(-50%, 0)" }}
    />
    <span
      className={`absolute left-1/2 top-6 w-6 h-0.5 bg-blue-900 rounded transition-all duration-300 origin-center ${
        open ? "-rotate-45 top-4" : "-translate-x-1/2"
      }`}
      style={{ transform: open ? "translate(-50%, 0) rotate(-45deg)" : "translate(-50%, 0) rotate(0deg)" }}
    />
  </span>
);

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
      <AnimatedHamburger open={isMenuOpen} />
    </button>
  </div>
);

export default SiteHeaderButtons;
