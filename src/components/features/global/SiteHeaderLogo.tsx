import React from "react";

interface SiteHeaderLogoProps {
  logoUrl: string;
  wordmarkUrl: string;
}

const SiteHeaderLogo: React.FC<SiteHeaderLogoProps> = ({ logoUrl, wordmarkUrl }) => (
  <div className="hbs-site-header__logo-wrapper flex items-center min-w-0">
    <a href="/" aria-label="Beranda STIE Dwimulya" className="hbs-site-header__logo flex items-center gap-3">
      <img
        src={logoUrl}
        alt="Logo STIE Dwimulya"
        className="h-10 md:h-12 w-auto transition-all duration-300"
        width={64}
        height={64}
      />
      <img
        src={wordmarkUrl}
        alt="Wordmark STIE Dwimulya"
        className="h-8 md:h-10 w-auto transition-all duration-300"
        width={180}
        height={64}
      />
    </a>
  </div>
);

export default SiteHeaderLogo;
