// NavCta: Shared call-to-action button for navigation
import React from 'react';

const NavCta: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="nav-cta">
    {children}
  </a>
);

export default NavCta;
