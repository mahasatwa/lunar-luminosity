// DesktopNavTrigger: Trigger for opening desktop nav panels
import React from 'react';

const DesktopNavTrigger: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button className="desktop-nav-trigger" onClick={onClick}>
    {children}
  </button>
);

export default DesktopNavTrigger;
