import React, { useRef, useState, useEffect } from "react";
import type { NavItem, QuickLink } from "@/types/navigation";
import SiteHeaderWrapper from "../components/SiteHeaderWrapper";
import SiteHeaderLogo from "../components/SiteHeaderLogo";
import SiteHeaderButtons from "../components/SiteHeaderButtons";
import SiteHeaderOverlay from "../components/SiteHeaderOverlay";
import GlobalNavigation from "../global/GlobalNavigation";
import LocalNavigation from "../local/LocalNavigation";

interface SiteHeaderProps {
  logoUrl: string;
  wordmarkUrl: string;
  navigationData: NavItem[];
  quickLinksData: QuickLink[];
}

const globalNavIds = ["tentang", "berita", "kegiatan"];
const localNavIds = ["akademik", "pendaftaran", "mahasiswa"];

const SiteHeader: React.FC<SiteHeaderProps> = ({
  logoUrl,
  wordmarkUrl,
  navigationData,
  quickLinksData,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrink, setIsShrink] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  const globalNav = navigationData.filter((item) => globalNavIds.includes(item.id));
  const localNav = navigationData.filter((item) => localNavIds.includes(item.id));

  // Sticky header shrink/expand logic
  useEffect(() => {
    let lastScroll = window.scrollY;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          if (currentScroll > 10 && currentScroll > lastScroll) {
            setIsShrink(true);
          } else if (currentScroll < lastScroll || currentScroll <= 10) {
            setIsShrink(false);
          }
          lastScroll = currentScroll;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="hbs-global-visually-hidden skipto noindex focus:not-sr-only sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:text-blue-900 focus:p-4 focus:rounded">
        Skip to Main Content
      </a>
      <SiteHeaderWrapper bannerRef={bannerRef} isMenuOpen={isMenuOpen}>
        <div ref={bannerRef} />
        <div className={`hbs-site-header__wrapper flex items-center justify-between px-4 md:px-8 transition-all duration-300 ${isShrink ? "py-1 min-h-[48px]" : "py-2 min-h-[64px]"}`}>
          <div className="transition-all duration-300" style={{ minWidth: isShrink ? 48 : 64 }}>
            <SiteHeaderLogo logoUrl={logoUrl} wordmarkUrl={wordmarkUrl} isShrink={isShrink} />
          </div>
          <SiteHeaderButtons isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
        <GlobalNavigation items={globalNav} />
        <LocalNavigation items={localNav} />
        <div className="w-full h-px transition-all duration-300 bg-gray-200" />
        <SiteHeaderOverlay
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          navigationData={navigationData}
          quickLinksData={quickLinksData}
        />
      </SiteHeaderWrapper>
    </>
  );
};

export default SiteHeader;
