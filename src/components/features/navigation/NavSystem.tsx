/**
 * NavSystem: Top-level navigation system controller.
 * Handles header, overlay, and state management.
 */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import SiteHeader from './site-header/SiteHeader';
import OverlayRoot from './overlay/OverlayRoot';
import { navigationData as unifiedNavigationData } from '../../../data/NavigationData';
import type { NavItem } from '../../../types/navigation';

const NavSystem: React.FC = () => {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Toggle overlay
  const handleMenuToggle = useCallback(() => {
    setOverlayOpen((open) => !open);
  }, []);

  // Close overlay
  const handleClose = useCallback(() => {
    setOverlayOpen(false);
  }, []);

  // Escape key, scroll lock, focus return
  useEffect(() => {
    if (overlayOpen) {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') handleClose();
      };
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      // Return focus to hamburger
      hamburgerRef.current?.focus();
    }
  }, [overlayOpen, handleClose]);

  return (
    <>
      <SiteHeader
        onMenuToggle={handleMenuToggle}
        isMenuOpen={overlayOpen}
        hamburgerRef={hamburgerRef}
      />
      <OverlayRoot open={overlayOpen} onClose={handleClose} navItems={unifiedNavigationData} />
    </>
  );
};

export default NavSystem;
