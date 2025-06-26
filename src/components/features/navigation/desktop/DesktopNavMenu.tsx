// DesktopNavMenu: Wrapper for InlineNav (HBS MBA style, robust, overflow, ARIA, dropdown)
import React from 'react';
import { InlineNav } from '../global';
import { navigationData } from '@/data/NavigationData';

const DesktopNavMenu: React.FC = () => {
  // InlineNav sudah handle overflow, dropdown, ARIA, dsb.
  // isShrunk di-pass dari parent (SiteHeader/NavSystem),
  // tapi di desktop menu tidak perlu shrink logic sendiri.
  return (
    <InlineNav navItems={navigationData} isShrunk={false} />
  );
};

export default DesktopNavMenu;
