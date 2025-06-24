// DesktopNavMenu: Entry point for desktop navigation (multi-level, overflow, ARIA, animation)
import React, { useRef, useEffect, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { getFittingItemsIndex } from './getFittingItemsIndex';
import NavLink from '../shared/NavLink';
import NavGroup from '../shared/NavGroup';
import NavCta from '../shared/NavCta';
import DesktopNavPanel from './DesktopNavPanel';
import DesktopNavMoreMenu from './DesktopNavMoreMenu';
import { navigationData } from '@/data/NavigationData';

const DesktopNavMenu: React.FC = () => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [itemWidths, setItemWidths] = useState<number[]>([]);
  const [moreButtonWidth, setMoreButtonWidth] = useState(64);
  const [fittingIndex, setFittingIndex] = useState(navigationData.length);

  // Measure item widths
  useEffect(() => {
    if (!containerRef.current) return;
    const items = Array.from(containerRef.current.children) as HTMLElement[];
    setItemWidths(items.map((el) => el.offsetWidth));
  }, [navigationData]);

  // Calculate fitting items on resize
  useEffect(() => {
    function handleResize() {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.offsetWidth;
      const idx = getFittingItemsIndex(containerWidth, itemWidths, moreButtonWidth);
      setFittingIndex(idx);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [itemWidths, moreButtonWidth]);

  // Split items for overflow
  const visibleItems = navigationData.slice(0, fittingIndex);
  const overflowItems = navigationData.slice(fittingIndex);

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List asChild>
        <ul ref={containerRef} className="desktop-nav flex items-center gap-2 min-w-0" aria-label="Navigasi utama">
          {visibleItems.map((item) => (
            <NavigationMenu.Item asChild key={item.id}>
              <li>
                <NavigationMenu.Trigger asChild>
                  <button className="desktop-nav-trigger">
                    {item.title}
                  </button>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content asChild>
                  <DesktopNavPanel item={item} />
                </NavigationMenu.Content>
              </li>
            </NavigationMenu.Item>
          ))}
          {overflowItems.length > 0 && (
            <NavigationMenu.Item asChild>
              <li>
                <NavigationMenu.Trigger asChild>
                  <button className="desktop-nav-trigger">Lainnya</button>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content asChild>
                  <DesktopNavMoreMenu items={overflowItems} />
                </NavigationMenu.Content>
              </li>
            </NavigationMenu.Item>
          )}
        </ul>
      </NavigationMenu.List>
      <NavigationMenu.Viewport className="desktop-nav-viewport" />
    </NavigationMenu.Root>
  );
};

export default DesktopNavMenu;
