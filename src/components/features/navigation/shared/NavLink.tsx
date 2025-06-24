// NavLink: Shared navigation link component
import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="nav-link">
    {children}
  </a>
);

export default NavLink;
