// src/components/Navigation/NavigationOverlay.tsx

import React, { useState, useEffect, useRef } from "react";
// Hapus import yang tidak perlu seperti useContext, NavigationItem, IoIosArrowBack, useUser
import type { NavItem, QuickLink } from "../../types/navigation";
import styles from "./Navigation.module.css";
import { FiX } from "react-icons/fi";

interface NavigationOverlayProps {
  data: NavItem[];
  quickLinks: QuickLink[];
  isOpen: boolean;
  onClose: () => void;
  // Prop 'breakpoint' bisa disimpan jika Anda ingin logika responsif yang berbeda di masa depan
  breakpoint: "mobile" | "tabletVertical" | "tabletHorizontal" | "desktop";
}

const NavigationOverlay: React.FC<NavigationOverlayProps> = ({
  data,
  quickLinks,
  isOpen,
  onClose,
  breakpoint,
}) => {
  // Hapus useUser() karena tidak ada lagi sistem role
  // const { userRole } = useUser();

  // State baru untuk mengontrol menu tiga level
  const [activeLevel1, setActiveLevel1] = useState<NavItem | null>(null);
  const [activeLevel2, setActiveLevel2] = useState<NavItem | null>(null);

  // State untuk animasi & display tetap sama
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayOverlay, setDisplayOverlay] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const primaryNavRef = useRef<HTMLElement>(null); // Ref untuk fokus

  // Efek untuk mengontrol animasi dan display overlay
  useEffect(() => {
    if (isOpen) {
      setDisplayOverlay(true);
      const timer = setTimeout(() => {
        setIsAnimating(true);
        // Set fokus ke elemen pertama yang bisa diakses
        if (primaryNavRef.current) {
          const firstFocusable =
            primaryNavRef.current.querySelector<HTMLElement>(
              'a, button, [tabindex]:not([tabindex="-1"])'
            );
          firstFocusable?.focus();
        }
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setDisplayOverlay(false);
        // Reset state menu saat ditutup
        setActiveLevel1(null);
        setActiveLevel2(null);
      }, 400); // Sesuaikan dengan durasi transisi CSS
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle keyboard navigation (Escape key)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Hapus semua logika lama yang bergantung pada roles dan activePathIds

  // --- Logika Baru untuk Menu Tiga Level ---

  // Handler saat item level 1 di-klik
  const handleLevel1Click = (item: NavItem) => {
    setActiveLevel1(item);
    setActiveLevel2(null); // Reset level 2 saat level 1 baru dipilih
  };

  // Handler saat item level 2 di-klik
  const handleLevel2Click = (item: NavItem) => {
    setActiveLevel2(item);
  };

  // Handler untuk menutup menu saat link di-klik
  const handleLinkClick = () => {
    onClose();
  };

  if (!displayOverlay) return null;

  // Data untuk setiap level, tanpa filter 'roles'
  const itemsLevel1 = data;
  const itemsLevel2 = activeLevel1?.subItems || [];
  const itemsLevel3 = activeLevel2?.subItems || [];

  return (
    <div
      ref={overlayRef}
      // Gunakan class CSS untuk mega menu full screen
      className={`${styles.navigationOverlayFullScreen} ${
        isAnimating ? styles.visible : ""
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Menu Utama STIE Dwimulya"
    >
      <div className={styles.fullScreenOverlayContent}>
        <div className={styles.fullScreenHeader}>
          <a href="/" onClick={handleLinkClick} className={styles.overlayLogo}>
            <img
              src="https://via.placeholder.com/60x60/A51C30/FFFFFF?text=Logo"
              alt="STIE Dwimulya Logo"
            />
            STIE Dwimulya
          </a>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Tutup Menu"
          >
            <FiX size={32} />
          </button>
        </div>

        <div className={styles.fullScreenNavGrid}>
          {/* Level 1: Kategori Utama */}
          <nav
            ref={primaryNavRef}
            className={styles.fullScreenNavLevel1}
            aria-label="Kategori Utama"
          >
            <ul>
              {itemsLevel1.map((item) => (
                <li key={item.id}>
                  <button
                    className={`${styles.fullScreenNavLink} ${
                      activeLevel1?.id === item.id ? styles.active : ""
                    }`}
                    onClick={() => handleLevel1Click(item)}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Level 2: Sub-Kategori */}
          <nav className={styles.fullScreenNavLevel2} aria-label="Sub-kategori">
            {activeLevel1 && itemsLevel2.length > 0 ? (
              <ul>
                {itemsLevel2.map((item) => (
                  <li key={item.id}>
                    {/* Jika item level 2 punya link sendiri, buat sebagai <a>, jika tidak sebagai <button> */}
                    {item.link ? (
                      <a
                        href={item.link}
                        className={`${styles.fullScreenNavLink} ${
                          activeLevel2?.id === item.id ? styles.active : ""
                        }`}
                        onClick={handleLinkClick}
                        target={item.isExternal ? "_blank" : "_self"}
                        rel={
                          item.isExternal ? "noopener noreferrer" : undefined
                        }
                      >
                        {item.title}
                      </a>
                    ) : (
                      <button
                        className={`${styles.fullScreenNavLink} ${
                          activeLevel2?.id === item.id ? styles.active : ""
                        }`}
                        onClick={() => handleLevel2Click(item)}
                      >
                        {item.title}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.emptyMenuSection}>
                {activeLevel1
                  ? "Tidak ada sub-kategori."
                  : "Pilih kategori utama."}
              </div>
            )}
          </nav>

          {/* Level 3: Link Detail atau Konten */}
          <div className={styles.fullScreenNavLevel3}>
            {activeLevel2 && itemsLevel3.length > 0 ? (
              <nav aria-label={activeLevel2.title}>
                <h3 className={styles.level3Title}>{activeLevel2.title}</h3>
                <ul>
                  {itemsLevel3.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className={styles.fullScreenNavSubLink}
                        onClick={handleLinkClick}
                        target={item.isExternal ? "_blank" : "_self"}
                        rel={
                          item.isExternal ? "noopener noreferrer" : undefined
                        }
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : // Menampilkan featured content dari item level 1 jika level 2/3 tidak aktif
            activeLevel1?.featured && !activeLevel2 ? (
              <div className={styles.level3Content}>
                <img
                  src={activeLevel1.featured.image}
                  alt={activeLevel1.featured.title}
                  className={styles.storyCardImage}
                />
                <h4 className={styles.storyCardTitle}>
                  {activeLevel1.featured.title}
                </h4>
                <p className={styles.storyCardText}>
                  {activeLevel1.featured.text}
                </p>
                <a
                  href={activeLevel1.featured.link}
                  onClick={handleLinkClick}
                  className={styles.storyCardLink}
                >
                  Baca Selengkapnya →
                </a>
              </div>
            ) : (
              <div className={styles.emptyMenuSection}>
                {activeLevel1 ? "Pilih sub-kategori untuk melihat detail." : ""}
              </div>
            )}
          </div>
        </div>

        <div className={styles.fullScreenFooter}>
          <div className={styles.quickLinksOverlay}>
            <h4>Tautan Cepat</h4>
            <ul>
              {quickLinks.map((linkItem, index) => (
                <li key={index}>
                  <a
                    href={linkItem.link}
                    target={linkItem.isExternal ? "_blank" : "_self"}
                    rel={
                      linkItem.isExternal ? "noopener noreferrer" : undefined
                    }
                    onClick={handleLinkClick}
                  >
                    {linkItem.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationOverlay;
