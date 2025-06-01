// src/components/Navigation/Navigation.tsx
// Komponen ini di-hydrate di client-side (misal: <Navigation client:load /> di Astro)

import React, { useState, useEffect } from "react";
import styles from "./Navigation.module.css";
import useBreakpoint from "../../hooks/useBreakpoint"; // Asumsi hook ini berfungsi
import NavigationOverlay from "./NavigationOverlay";
import { FiMenu, FiSearch } from "react-icons/fi";
// Tipe NavItem tidak lagi memerlukan UserRole
import type { NavItem } from "../../types/navigation";

// --- Impor Data Navigasi dari File Eksternal ---
import { navigationData, quickLinksData } from "../../data/NavigationData";

// --- SEMUA KODE UserContext, useUser, dan UserProvider DIHAPUS ---
// Karena situs bersifat statis dan tidak ada sistem role.

// Komponen utama diganti nama kembali menjadi 'Navigation' dan tidak lagi
// memerlukan wrapper/provider.
export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const breakpoint = useBreakpoint();

  // Hapus pemanggilan useUser()
  // const { userRole } = useUser();

  const isMobileOrTablet =
    breakpoint === "mobile" ||
    breakpoint === "tabletVertical" ||
    breakpoint === "tabletHorizontal";
  const isDesktop = breakpoint === "desktop";

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    document.body.classList.add("overflow-hidden"); // Mencegah body scroll
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove("overflow-hidden"); // Mengembalikan body scroll
  };

  // Efek Header Sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filter tidak lagi diperlukan, kita akan langsung menggunakan navigationData
  // const visibleDesktopNavItems = navigationData.filter(...)

  return (
    <header
      className={`${styles.header} header-sticky ${
        isHeaderScrolled ? "scrolled" : ""
      }`}
    >
      <div className={styles.navContainer}>
        {/* Logo STIE Dwimulya */}
        <div className={styles.logo}>
          <a href="/">
            <img
              src="https://via.placeholder.com/40x40/A51C30/FFFFFF?text=Logo"
              alt="STIE Dwimulya Logo"
            />
            <span className="hidden md:inline">STIE Dwimulya</span>
          </a>
        </div>

        {/* Navigasi Desktop */}
        {isDesktop && (
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            {/* Langsung map dari navigationData, tidak perlu filter */}
            {navigationData.map((item, index) => (
              <div key={item.id || index} className={styles.desktopNavItem}>
                {item.link ? (
                  <a
                    href={item.link}
                    className={styles.desktopNavLink}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {item.title}
                  </a>
                ) : (
                  // Tombol ini sekarang hanya akan membuka mega menu
                  <button
                    className={styles.desktopNavButton}
                    onClick={handleOpenMenu}
                    aria-haspopup="true"
                    aria-expanded={isMenuOpen}
                  >
                    {item.title}
                  </button>
                )}
              </div>
            ))}
            <a
              href="/search"
              className={styles.desktopSearch}
              aria-label="Search"
            >
              <FiSearch size={20} />
            </a>
            {/* Tombol menu global ini tetap berfungsi untuk membuka overlay */}
            <button
              className={styles.desktopGlobalMenuToggle}
              onClick={handleOpenMenu}
              aria-label="Buka Menu Utama"
              aria-expanded={isMenuOpen}
            >
              Menu
            </button>
          </nav>
        )}

        {/* Kontrol Mobile/Tablet */}
        {isMobileOrTablet && (
          <div className={styles.mobileTabletControls}>
            <a
              href="/search"
              className={styles.mobileTabletSearch}
              aria-label="Search"
            >
              <FiSearch size={20} />
            </a>
            <button
              className={styles.mobileMenuToggle}
              onClick={handleOpenMenu}
              aria-label="Buka Menu Utama"
              aria-expanded={isMenuOpen}
            >
              <FiMenu size={24} />
            </button>
          </div>
        )}
      </div>

      {/* Navigation Overlay */}
      <NavigationOverlay
        data={navigationData}
        quickLinks={quickLinksData}
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        breakpoint={breakpoint}
      />
    </header>
  );
};

// --- Hapus wrapper NavigationWithProvider ---

// Ekspor komponen Navigation secara default
export default Navigation;
