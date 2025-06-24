// DesktopNavPanel: Panel for multi-level navigation (desktop)
import React from 'react';
// Fallback type if import fails
// import type { NavItem } from '../../../types/navigation';
type NavItem = any;

const DesktopNavPanel: React.FC<{ item: NavItem }> = ({ item }) => {
  if (!item.subItems) return null;
  return (
    <div className="desktop-nav-panel p-4 min-w-[320px]">
      {item.subItems.map((sub: any) => {
        if (sub.subItems && Array.isArray(sub.subItems)) {
          return (
            <div key={sub.id} className="nav-group">
              <div className="nav-group-title">{sub.title}</div>
              <div className="nav-group-items">
                {sub.subItems.map((leaf: any) => (
                  <a key={leaf.id} href={leaf.link || '#'} className="nav-link">
                    {leaf.title}
                  </a>
                ))}
              </div>
            </div>
          );
        } else {
          return (
            <a key={sub.id} href={sub.link || '#'} className="nav-link">
              {sub.title}
            </a>
          );
        }
      })}
    </div>
  );
};

export default DesktopNavPanel;
