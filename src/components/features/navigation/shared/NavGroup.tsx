// NavGroup: Shared navigation group component
import React from 'react';

const NavGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="nav-group">
    <div className="nav-group-title">{title}</div>
    <div className="nav-group-items">{children}</div>
  </div>
);

export default NavGroup;
