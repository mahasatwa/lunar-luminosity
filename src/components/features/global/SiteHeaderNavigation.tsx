import React from "react";
import type { NavItem } from "@/types/navigation";

interface SiteHeaderNavigationProps {
  navigationData: NavItem[];
}

const SiteHeaderNavigation: React.FC<SiteHeaderNavigationProps> = ({ navigationData }) => {
  // TODO: Implement HBS-style navigation bar (desktop) and "More" dropdown
  // For now, just render top-level links
  return (
    <nav className="hbs-site-header__menu hidden lg:flex items-center gap-2 flex-1 justify-center relative" aria-label="Navigasi utama">
      {navigationData.map((item) => (
        <a
          key={item.id}
          href={item.link || "/"}
          className="hbs-site-header__nav-link text-base font-semibold px-3 py-2 rounded transition-colors duration-200 text-gray-700 hover:text-blue-900 hover:bg-blue-50"
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
};

export default SiteHeaderNavigation;
