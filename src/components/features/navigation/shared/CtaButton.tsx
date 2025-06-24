// CtaButton: Shared call-to-action button (e.g. Daftar)
import React from 'react';

const CtaButton: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ href, children, className }) => (
  <a
    href={href}
    className={`px-4 py-2 rounded font-semibold shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-dm-primary focus:ring-2 focus:ring-dm-primary transition-colors ${className || ''}`}
    tabIndex={0}
  >
    {children}
  </a>
);

export default CtaButton;
