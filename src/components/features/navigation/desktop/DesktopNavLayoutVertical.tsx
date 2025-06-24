// DesktopNavLayoutVertical: Vertical layout for 2nd/3rd level panels
import React from 'react';

const DesktopNavLayoutVertical: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="desktop-nav-layout-vertical">{children}</div>
);

export default DesktopNavLayoutVertical;
