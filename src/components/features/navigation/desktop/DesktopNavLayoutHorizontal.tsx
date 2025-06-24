// DesktopNavLayoutHorizontal: Horizontal layout for 2nd/3rd level panels
import React from 'react';

const DesktopNavLayoutHorizontal: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="desktop-nav-layout-horizontal">{children}</div>
);

export default DesktopNavLayoutHorizontal;
