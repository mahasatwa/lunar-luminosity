/**
 * SiteHeader: Fixed, sticky, shrink-on-scroll header with logo and hamburger (Indonesian, HBS MBA style).
 */
import React, { useState, useEffect } from 'react';
import { Logo, HamburgerButton } from './index';
import { InlineNav } from '../global';
import { navigationData as unifiedNavigationData } from '../../../../data/NavigationData';

const SCROLL_SHRINK_THRESHOLD = 100;

interface SiteHeaderProps {
  onMenuToggle: () => void;
  isMenuOpen?: boolean;
  hamburgerRef?: React.Ref<HTMLButtonElement>;
}

const SiteHeader: React.FC<SiteHeaderProps> = ({ onMenuToggle, isMenuOpen, hamburgerRef }) => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsShrunk(window.scrollY > SCROLL_SHRINK_THRESHOLD);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out bg-white ${
        isShrunk ? 'py-1 shadow-lg bg-dm-primary/95' : 'py-3 bg-white'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <Logo shrunk={isShrunk} />
        <nav className="hidden md:flex flex-1 justify-center min-w-0">
          <InlineNav isShrunk={isShrunk} navItems={unifiedNavigationData} />
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/daftar"
            className="hidden md:inline-block px-4 py-2 rounded bg-dm-primary text-white font-semibold hover:bg-dm-primary-dark transition-colors"
          >
            Daftar
          </a>
          <button
            aria-label="Cari"
            className="p-2 rounded hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dm-primary"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="9" cy="9" r="7" stroke="#002147" strokeWidth="2" />
              <path
                d="M15.5 15.5L13 13"
                stroke="#002147"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <HamburgerButton onClick={onMenuToggle} isOpen={isMenuOpen} ref={hamburgerRef} />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
