import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable"; // 1. Impor hook
import type { NavItem, QuickLink } from "../../types/navigation";
import styles from "../navigation/Navigation.module.css"; // Kita gunakan file CSS yang sama
import { FiChevronLeft } from "react-icons/fi";

interface DrawerContentProps {
  navigationData: NavItem[];
  quickLinksData: QuickLink[];
  onClose: () => void; // Fungsi untuk menutup drawer dari NavShell
}

const DrawerContent: React.FC<DrawerContentProps> = ({
  navigationData,
  quickLinksData,
  onClose,
}) => {
  const [activeLevel1, setActiveLevel1] = useState<NavItem | null>(null);
  const [activeLevel2, setActiveLevel2] = useState<NavItem | null>(null);

  const handleLevel1Click = (item: NavItem) => {
    // Jika item punya sub-menu, buka panel berikutnya.
    if (item.subItems && item.subItems.length > 0) {
      setActiveLevel1(item);
    } else if (item.link) {
      // Jika ini link langsung, navigasi dan tutup menu.
      window.location.href = item.link;
      onClose();
    }
  };

  const handleLevel2Click = (item: NavItem) => {
    if (item.subItems && item.subItems.length > 0) {
      setActiveLevel2(item);
    } else if (item.link) {
      window.location.href = item.link;
      onClose();
    }
  };

  const goBack = () => {
    if (activeLevel2) {
      setActiveLevel2(null); // Kembali dari Level 3 ke Level 2
    } else if (activeLevel1) {
      setActiveLevel1(null); // Kembali dari Level 2 ke Level 1
    }
  };

  // 2. Setup swipe handler
  const swipeHandlers = useSwipeable({
    // Panggil fungsi goBack() saat pengguna swipe ke kanan
    onSwipedRight: () => goBack(),
    trackMouse: true, // Opsional: memungkinkan swipe dengan mouse untuk testing di desktop
    preventScrollOnSwipe: true,
  });

  // Fungsi untuk menentukan kelas CSS panel mana yang terlihat atau tersembunyi
  const getPanelClass = (level: number): string => {
    // Panel Level 1
    if (level === 1) {
      return activeLevel1 ? styles.panelHiddenLeft : styles.panelVisible;
    }
    // Panel Level 2
    if (level === 2) {
      if (!activeLevel1) return styles.panelInitialRight; // Mulai dari kanan
      return activeLevel2 ? styles.panelHiddenLeft : styles.panelVisible;
    }
    // Panel Level 3
    if (level === 3) {
      return activeLevel2 ? styles.panelVisible : styles.panelInitialRight;
    }
    return "";
  };

  return (
    <div className={styles.drawerContainer} {...swipeHandlers}>
      <div className={styles.drawerHeader}>
        {activeLevel1 && (
          <button onClick={goBack} className={styles.backButton}>
            <FiChevronLeft />
            <span>{activeLevel2 ? activeLevel1.title : "Menu Utama"}</span>
          </button>
        )}
      </div>

      {/* Kontainer untuk semua panel yang bisa bergeser */}
      <div className={styles.panelsContainer}>
        {/* Panel Level 1: Daftar Menu Utama */}
        <div className={`${styles.panel} ${getPanelClass(1)}`}>
          <ul className={styles.navList}>
            {navigationData.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleLevel1Click(item)}
                  className={styles.navButton}
                >
                  <span>{item.title}</span>
                  {item.subItems && <span aria-hidden="true">&rsaquo;</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Panel Level 2: Sub-Menu */}
        <div className={`${styles.panel} ${getPanelClass(2)}`}>
          {activeLevel1 && (
            <>
              <h3 className={styles.panelTitle}>{activeLevel1.title}</h3>
              <p className={styles.panelDescription}>
                {activeLevel1.description}
              </p>
              <ul className={styles.navList}>
                {activeLevel1.subItems?.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleLevel2Click(item)}
                      className={styles.navButton}
                    >
                      <span>{item.title}</span>
                      {item.subItems && (
                        <span aria-hidden="true">&rsaquo;</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Panel Level 3: Link Akhir */}
        <div className={`${styles.panel} ${getPanelClass(3)}`}>
          {activeLevel2 && (
            <>
              <h3 className={styles.panelTitle}>{activeLevel2.title}</h3>
              <p className={styles.panelDescription}>
                {activeLevel2.description}
              </p>
              <ul className={styles.navList}>
                {activeLevel2.subItems?.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className={styles.navLink}
                      onClick={onClose}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>

      {/* Footer dengan Quick Links */}
      <div className={styles.drawerFooter}>
        {quickLinksData.map((link) => (
          <a key={link.title} href={link.link} className={styles.quickLink}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DrawerContent;
