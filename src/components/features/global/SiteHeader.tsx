import React, { useRef, useState } from "react";
import type { NavItem, QuickLink } from "@/types/navigation";
import SiteHeaderWrapper from "./SiteHeaderWrapper";
import SiteHeaderLogo from "./SiteHeaderLogo";
import SiteHeaderButtons from "./SiteHeaderButtons";
import SiteHeaderOverlay from "./SiteHeaderOverlay";
import GlobalNavigation from "./GlobalNavigation";
import LocalNavigation from "./LocalNavigation";

interface SiteHeaderProps {
  logoUrl: string;
  wordmarkUrl: string;
  navigationData: NavItem[];
  quickLinksData: QuickLink[];
}

// Example: split navigationData into global/local for demo
const globalNavIds = ["tentang", "berita", "kegiatan"];
const localNavIds = ["akademik", "pendaftaran", "mahasiswa"];

const SiteHeader: React.FC<SiteHeaderProps> = ({
  logoUrl,
  wordmarkUrl,
  navigationData,
  quickLinksData,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Split navigationData for demo (customize as needed)
  const globalNav = navigationData.filter((item) =>
    globalNavIds.includes(item.id)
  );
  const localNav = navigationData.filter((item) =>
    localNavIds.includes(item.id)
  );

  return (
    <>
      <a
        href="#main-content"
        className="hbs-global-visually-hidden skipto noindex focus:not-sr-only sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:text-blue-900 focus:p-4 focus:rounded"
      >
        Skip to Main Content
      </a>
      <SiteHeaderWrapper bannerRef={bannerRef} isMenuOpen={isMenuOpen}>
        <div ref={bannerRef} />
        <div className="hbs-site-header__wrapper flex items-center justify-between px-4 md:px-8 py-2 min-h-[64px] border-b border-blue-100">
          <SiteHeaderLogo logoUrl={logoUrl} wordmarkUrl={wordmarkUrl} />
          <SiteHeaderButtons
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
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
