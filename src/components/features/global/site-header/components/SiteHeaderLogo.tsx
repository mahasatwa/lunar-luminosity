import React from "react";

interface SiteHeaderLogoProps {
  logoUrl: string;
  wordmarkUrl: string;
  isShrink?: boolean;
}

const SiteHeaderLogo: React.FC<SiteHeaderLogoProps> = ({ logoUrl, wordmarkUrl, isShrink }) => (
  <div className="hbs-site-header__logo-wrapper flex items-center min-w-0 transition-all duration-300">
    <a href="/" aria-label="Beranda STIE Dwimulya" className="hbs-site-header__logo flex items-center gap-3">
      <img
        src={logoUrl}
        alt="Logo STIE Dwimulya"
        className={`transition-all duration-300 ${isShrink ? "h-8 md:h-9" : "h-10 md:h-12"} w-auto`}
        width={isShrink ? 48 : 64}
        height={isShrink ? 48 : 64}
      />
      <img
        src={wordmarkUrl}
        alt="Wordmark STIE Dwimulya"
        className={`transition-all duration-300 ${isShrink ? "h-6 md:h-8" : "h-8 md:h-10"} w-auto`}
        width={isShrink ? 120 : 180}
        height={isShrink ? 48 : 64}
      />
    </a>
  </div>
);

export default SiteHeaderLogo;
