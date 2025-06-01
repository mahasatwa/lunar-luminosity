// src/components/Navigation/NavigationItem.tsx

import React from "react";
import type { NavItem } from "../../types/navigation";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import styles from "./Navigation.module.css";

interface NavigationItemProps {
  item: NavItem;
  level: number;
  path: string[]; // Path to this item (e.g., ['akademik', 'sarjana'])
  activePath: string[]; // Currently active submenu path
  setActivePath: (path: string[]) => void; // Handler to change active path
  breakpoint: "mobile" | "tabletVertical" | "tabletHorizontal" | "desktop";
  onLinkClick: () => void; // Handler to close menu on link click
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  level,
  path,
  activePath,
  setActivePath,
  breakpoint,
  onLinkClick,
}) => {
  const isMobileOrTabletVertical =
    breakpoint === "mobile" || breakpoint === "tabletVertical";

  // Determine if this item's submenu is currently active/open (for drill-down)
  const isSubMenuActive = JSON.stringify(activePath) === JSON.stringify(path);

  // Determine if this item is the *parent* of the currently active submenu
  // Used for highlighting the parent in drill-down view or showing as active
  const isParentOfActive =
    activePath.length > level &&
    JSON.stringify(activePath.slice(0, level + 1)) === JSON.stringify(path);

  // Function to handle click on a navigation item
  const handleClick = (e: React.MouseEvent) => {
    if (item.subItems) {
      // If it has subitems, clicking should navigate to that submenu level
      e.preventDefault(); // Prevent default link behavior if it's a button or has subitems
      setActivePath(path);
    } else if (item.link) {
      // If it's a direct link, navigate and close the menu
      // (Actual routing handled by wrapper Link component or direct a href)
      onLinkClick();
    }
  };

  const renderContent = () => {
    // If it's a direct link, render as <a>
    if (item.link) {
      return (
        <a
          href={item.link}
          className={`${styles.navLink} ${styles[`level${level}`]}`}
          onClick={onLinkClick} // Close menu on click
          target={item.isExternal ? "_blank" : "_self"}
          rel={item.isExternal ? "noopener noreferrer" : undefined}
        >
          {item.title}
          {item.isExternal && (
            <span className={styles.externalLinkIcon} aria-hidden="true">
              ↗
            </span>
          )}
        </a>
      );
    } else {
      // Otherwise, it's a button to reveal subitems/drill down
      return (
        <button
          className={`${styles.navButton} ${styles[`level${level}`]} ${
            isSubMenuActive ? styles.active : ""
          } ${isParentOfActive ? styles.parentActive : ""}`}
          onClick={handleClick}
          aria-expanded={isMobileOrTabletVertical ? isSubMenuActive : undefined}
          aria-haspopup={item.subItems ? "true" : undefined}
        >
          {item.title}
          {/* Show arrow indicator for items with subitems */}
          {item.subItems && (
            <span className={styles.arrowIcon}>
              {isMobileOrTabletVertical && isSubMenuActive ? (
                <FiChevronDown size={16} /> // Down arrow when active in drill-down
              ) : (
                <FiChevronRight size={16} /> // Right arrow otherwise
              )}
            </span>
          )}
        </button>
      );
    }
  };

  return <li className={styles.navItemContainer}>{renderContent()}</li>;
};

export default NavigationItem;
