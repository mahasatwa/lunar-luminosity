// DesktopNavPanel: Panel for multi-level navigation (desktop)
import React from 'react';
// import type { NavItem } from '../../../types/navigation';
type NavItem = any;

const DesktopNavPanel: React.FC<{ item: NavItem }> = ({ item }) => {
  if (!item.subItems) return null;
  return (
    <div
      className="desktop-nav-panel bg-white shadow-lg rounded-lg p-4 min-w-[320px] animate-fadeIn"
      role="menu"
      aria-label={item.title}
      tabIndex={-1}
    >
      {item.subItems.map((sub: any) => {
        if (sub.subItems && Array.isArray(sub.subItems)) {
          return (
            <div key={sub.id} className="nav-group mb-4">
              <div className="nav-group-title font-semibold text-dm-primary mb-2 text-sm uppercase tracking-wide">{sub.title}</div>
              <div className="nav-group-items flex flex-col gap-1">
                {sub.subItems.map((leaf: any) => (
                  <a
                    key={leaf.id}
                    href={leaf.link || '#'}
                    className="nav-link block px-2 py-1 rounded hover:bg-dm-primary/10 focus:bg-dm-primary/20 transition-colors text-base"
                    role="menuitem"
                  >
                    {leaf.title}
                  </a>
                ))}
              </div>
            </div>
          );
        } else {
          return (
            <a
              key={sub.id}
              href={sub.link || '#'}
              className="nav-link block px-2 py-1 rounded hover:bg-dm-primary/10 focus:bg-dm-primary/20 transition-colors text-base"
              role="menuitem"
            >
              {sub.title}
            </a>
          );
        }
      })}
    </div>
  );
};

export default DesktopNavPanel;
