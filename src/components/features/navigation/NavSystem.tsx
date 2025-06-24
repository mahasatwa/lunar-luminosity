/**
 * NavSystem: Top-level navigation system controller.
 * Handles header, overlay, and state management.
 */
import React, { useState, useRef, useEffect } from 'react';
import DesktopNavMenu from './desktop/DesktopNavMenu';
import Logo from './shared/Logo';
import CtaButton from './shared/CtaButton';
import SearchButton from './shared/SearchButton';
import HamburgerButton from './shared/HamburgerButton';
// import MobileOverlay from './mobile/MobileOverlay'; // TODO: implement

const SCROLL_SHRINK_THRESHOLD = 100;

const NavSystem: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > SCROLL_SHRINK_THRESHOLD) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    // Set initial state (do not shrink on first load)
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Theme switching: oxford blue (bg-dm-primary) default, shrink ke putih
  const headerBg = isShrunk ? 'bg-white' : 'bg-dm-primary';
  const ctaClass = isShrunk
    ? 'bg-dm-primary text-white hover:bg-dm-primary-dark'
    : 'bg-white text-dm-primary border border-dm-primary hover:bg-dm-primary hover:text-white';
  const hamburgerIconColor = isShrunk ? '#002147' : '#fff';

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 shadow ${headerBg}`} role="banner">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Logo shrunk={isShrunk} />
        <nav className="flex-1 flex justify-center min-w-0">
          <DesktopNavMenu isShrunk={isShrunk} />
        </nav>
        <div className="flex items-center gap-2">
          <CtaButton href="/daftar" className={ctaClass}>Daftar</CtaButton>
          <SearchButton color={hamburgerIconColor} />
          <HamburgerButton
            ref={hamburgerRef}
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            color={hamburgerIconColor}
            aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-overlay"
          />
        </div>
      </div>
      {/* Mobile overlay navigation (to be implemented) */}
      {/* <MobileOverlay open={isMenuOpen} onClose={() => setIsMenuOpen(false)} /> */}
    </header>
  );
};

export default NavSystem;
