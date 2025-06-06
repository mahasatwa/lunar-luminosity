import React, { useState, useEffect } from "react";
import styles from "./Navigation.module.css";
import { navigationData, quickLinksData } from "../../data/NavigationData";
import NavigationOverlay from "./NavigationOverlay";
import useBreakpoint from "../../hooks/useBreakpoint";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const breakpoint = useBreakpoint();

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Pilih item mana dari data Anda yang akan muncul di navigasi tengah
  const desktopNavItems = navigationData.filter((item) =>
    ["Akademik", "Pendaftaran", "Tentang Kami", "Berita & Acara"].includes(
      item.title
    )
  );

  return (
    <>
      <header
        className={`${styles.header} ${
          isHeaderScrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.navigationContainer}>
          {/* === BAGIAN KIRI: LOGO === */}
          <a
            href="/"
            className={styles.logo}
            aria-label="Beranda STIE Dwimulya"
          >
            {/* Ganti dengan komponen logo SVG atau gambar Anda */}
            <img
              src="/logo-stie-dwimulya.png"
              alt="Logo STIE Dwimulya"
              style={{ height: "40px" }}
            />
          </a>

          {/* === BAGIAN TENGAH: NAVIGASI UTAMA (Hanya di Desktop) === */}
          {breakpoint === "desktop" && (
            <nav className={styles.desktopNav}>
              {desktopNavItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link || `/`}
                  className={styles.desktopNavItem}
                >
                  {item.title}
                </a>
              ))}
            </nav>
          )}

          {/* === BAGIAN KANAN: KONTROL === */}
          <div className={styles.rightControls}>
            <a
              href="/pendaftaran"
              className={`${styles.ctaButton} ${styles.primary}`}
            >
              Daftar Sekarang
            </a>
            <button
              onClick={handleMenuToggle}
              className={styles.menuToggle}
              aria-label="Buka Menu"
              aria-expanded={isMenuOpen}
            >
              MENU
            </button>
          </div>
        </div>
      </header>

      {/* Mega Menu Overlay tetap sama, dipanggil oleh tombol "MENU" */}
      <NavigationOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        data={navigationData}
        quickLinks={quickLinksData}
        breakpoint={breakpoint}
      />
    </>
  );
};

export default Navigation;
