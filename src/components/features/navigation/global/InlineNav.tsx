import React from 'react';
import type { NavItem } from '@/types/navigation';

interface InlineNavProps {
  navItems: NavItem[];
  isShrunk: boolean;
}

const InlineNav: React.FC<InlineNavProps> = ({ navItems }) => {
  return (
    <nav className="hidden lg:flex items-center space-x-8" aria-label="Navigasi utama">
      {navItems.map((item) => (
        <div key={item.id} className="group relative">
          {item.subItems ? (
            <div className="relative group">
              <a href={item.link || '#'} className="font-semibold text-base flex items-center group-hover:text-dm-primary transition-colors">
                {item.title}
                <svg className="ml-1 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </a>
              <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded-md py-2 min-w-[200px] z-10">
                {item.subItems.map((sub) => (
                  <a key={sub.id} href={sub.link || '#'} className="block px-4 py-2 text-base hover:bg-dm-primary/10 whitespace-nowrap">
                    {sub.title}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a href={item.link || '#'} className="font-semibold text-base group-hover:text-dm-primary transition-colors">
              {item.title}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
};

export default InlineNav;
