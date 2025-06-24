// MobileNavCta: Call-to-action for mobile navigation
import React from 'react';

const MobileNavCta: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="mobile-nav-cta">
    {children}
  </a>
);

export default MobileNavCta;
