// DesktopNavMoreMenu: Overflow menu for desktop navigation
import React from 'react';

type NavItem = {
  id: string;
  title: string;
  link?: string;
};

const DesktopNavMoreMenu: React.FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <div className="desktop-nav-more-menu p-4 min-w-[200px]">
      {items.map((item) => (
        <a key={item.id} href={item.link || '#'} className="nav-link block py-1">
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default DesktopNavMoreMenu;
