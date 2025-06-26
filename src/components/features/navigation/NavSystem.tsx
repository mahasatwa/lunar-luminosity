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
import MobileNavMenu from './mobile/MobileNavMenu'; // Integrasi MobileNavMenu

const SCROLL_SHRINK_THRESHOLD = 100;

const NavSystem: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // for search overlay
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setIsShrunk(window.scrollY > SCROLL_SHRINK_THRESHOLD);
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
  const headerPadding = isShrunk ? 'py-1 md:py-2' : 'py-4 md:py-4';

  // Refactor: HBS MBA-style header layout
  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${headerBg}`}
      role="banner"
    >
      <div className={`max-w-7xl mx-auto flex w-full items-start px-4 ${headerPadding} transition-all duration-300`}> 
        {/* 1/4 kiri: Logo */}
        <div className="w-1/4 min-w-[140px] flex items-center">
          <Logo shrunk={isShrunk} />
        </div>
        {/* 3/4 kanan: menu dan tombol */}
        <div className="w-3/4 flex flex-col relative min-w-0">
          {/* Spacer for menu positioning */}
          <div className="h-8"></div>

          {/* Main Navigation Menu */}
          <div className="w-full flex items-center min-w-0">
            <nav className="flex-1 flex justify-center min-w-0">
              <DesktopNavMenu />
            </nav>
          </div>

          {/* Buttons: CTA, Search, Hamburger */}
          <div className="absolute top-3 right-[1vw] flex items-center gap-2 z-40">
            <CtaButton href="/daftar" className={ctaClass}>
              Daftar
            </CtaButton>
            <SearchButton color={hamburgerIconColor} onClick={() => setIsSearchOpen(true)} />
            <HamburgerButton
              ref={hamburgerRef}
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              color={hamburgerIconColor}
              aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-overlay"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <MobileNavMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Search overlay (to be implemented) */}
      {/* <SearchOverlay open={isSearchOpen} onClose={() => setIsSearchOpen(false)} /> */}
    </header>
  );
};

export default NavSystem;
