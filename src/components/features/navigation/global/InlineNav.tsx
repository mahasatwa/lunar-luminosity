/**
 * InlineNav: Renders top-level nav items inline, with overflow into a 'More' dropdown.
 */
import React, { useRef, useEffect, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import type { NavItem } from '../../../../types/navigation';
import { getOverflowItems } from '../utils/overflowManager';

interface InlineNavProps {
  navItems: NavItem[];
  isShrunk: boolean;
}

const InlineNav: React.FC<InlineNavProps> = ({ navItems, isShrunk }) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState<number[]>([]);
  const [overflow, setOverflow] = useState<number[]>([]);
  const [itemWidths, setItemWidths] = useState<number[]>([]);
  const [moreButtonWidth, setMoreButtonWidth] = useState(64);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = Array.from(containerRef.current.children) as HTMLElement[];
    setItemWidths(items.map((el) => el.offsetWidth));
  }, [navItems]);

  useEffect(() => {
    function handleResize() {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const { visible, overflow } = getOverflowItems(navItems, containerWidth, itemWidths, moreButtonWidth);
      setVisible(visible);
      setOverflow(overflow);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [navItems, itemWidths, moreButtonWidth]);

  return (
    <ul ref={containerRef} className="dm-nav flex items-center gap-2 min-w-0 overflow-x-auto" aria-label="Navigasi utama">
      {visible.map((idx) => {
        const item = navItems[idx];
        return (
          <li key={item.id} className="dm-nav-item">
            <a
              href={item.link}
              className="px-3 py-2 rounded font-semibold text-base transition-colors duration-200 text-gray-800 hover:text-dm-primary hover:bg-dm-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dm-primary"
            >
              {item.title}
            </a>
          </li>
        );
      })}
      {overflow.length > 0 && (
        <li className="dm-nav-item">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="px-3 py-2 rounded font-semibold text-base bg-dm-primary text-white hover:bg-dm-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-dm-primary">
                Lainnya
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white rounded shadow-lg py-2 mt-2 min-w-[160px]">
              {overflow.map((idx) => {
                const item = navItems[idx];
                return (
                  <DropdownMenu.Item key={item.id} asChild>
                    <a
                      href={item.link}
                      className="block px-4 py-2 text-gray-800 hover:bg-dm-primary/10 hover:text-dm-primary rounded transition-colors duration-200"
                    >
                      {item.title}
                    </a>
                  </DropdownMenu.Item>
                );
              })}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </li>
      )}
    </ul>
  );
};

export default InlineNav;
