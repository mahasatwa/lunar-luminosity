// DesktopNavMoreMenu: Overflow menu for desktop navigation
import React from 'react';

type NavItem = {
  id: string;
  title: string;
  link?: string;
};

const DesktopNavMoreMenu: React.FC<{ items: NavItem[] }> = ({ items }) => {
  return (
    <div className="desktop-nav-more-menu bg-white shadow-lg rounded-lg p-4 min-w-[200px] animate-fadeIn">
      {items.map((item) => (
        <a key={item.id} href={item.link || '#'} className="nav-link block py-1 px-2 rounded hover:bg-dm-primary/10 focus:bg-dm-primary/20 transition-colors text-base">
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default DesktopNavMoreMenu;
