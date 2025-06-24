// MobileNavTrigger: Trigger for opening mobile nav panels
import React from 'react';

const MobileNavTrigger: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button className="mobile-nav-trigger" onClick={onClick}>
    {children}
  </button>
);

export default MobileNavTrigger;
