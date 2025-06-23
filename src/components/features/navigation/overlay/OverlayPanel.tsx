/**
 * OverlayPanel: Recursive, animated multi-level navigation panel.
 */
import React from 'react';
import type { NavItem } from '../../../../types/navigation';
import { OverlayBackButton } from './index';
import { useNavStack } from './NavStackContext';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { motion } from 'framer-motion';

interface OverlayPanelProps {
  navItems: NavItem[];
  onClose: () => void;
  level?: number;
  parentTitle?: string;
  parentId?: string;
}

const OverlayPanel: React.FC<OverlayPanelProps> = ({ navItems, onClose, level = 0, parentTitle, parentId }) => {
  const { navStack, setNavStack } = useNavStack();
  const activeIndex = navStack[level] ? navItems.findIndex(item => item.id === navStack[level]) : null;

  const hasSubItems = (item: NavItem) => Array.isArray(item.subItems) && item.subItems.length > 0;

  const handleItemClick = (idx: number, id: string) => {
    setNavStack(stack => {
      const updated = stack.slice(0, level);
      updated[level] = id;
      return updated;
    });
  };

  const handleBack = () => {
    setNavStack(stack => stack.slice(0, -1));
  };

  // If at a deeper level, show only the active submenu
  if (activeIndex !== null && hasSubItems(navItems[activeIndex])) {
    return (
      <div className="w-full max-w-md mx-auto py-8 px-4 animate-slide-in">
        <OverlayBackButton onClick={handleBack} label={parentTitle || 'Back'} />
        <OverlayPanel
          navItems={navItems[activeIndex].subItems!}
          onClose={onClose}
          level={level + 1}
          parentTitle={navItems[activeIndex].title}
          parentId={navItems[activeIndex].id}
        />
      </div>
    );
  }

  // Use Radix NavigationMenu for menu structure
  return (
    <motion.div
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 40, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="w-full max-w-md mx-auto py-8 px-4 animate-slide-in"
    >
      {level > 0 && <OverlayBackButton onClick={handleBack} label={parentTitle || 'Back'} />}
      <NavigationMenu.Root orientation="vertical" className="w-full">
        <NavigationMenu.List className="divide-y divide-dm-border" role="menu">
          {navItems.map((item, idx) => (
            <NavigationMenu.Item key={item.id}>
              {hasSubItems(item) ? (
                <button
                  className="w-full text-left flex items-center justify-between px-2 py-2 rounded hover:bg-dm-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dm-primary transition-colors duration-200"
                  aria-haspopup="true"
                  aria-expanded={navStack[level] === item.id}
                  onClick={() => handleItemClick(idx, item.id)}
                >
                  {item.title}
                  <span aria-hidden>›</span>
                </button>
              ) : (
                <NavigationMenu.Link
                  asChild
                  className="block w-full px-2 py-2 rounded hover:bg-dm-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dm-primary transition-colors duration-200"
                  onClick={onClose}
                  href={item.link || '#'}
                >
                  <a>{item.title}</a>
                </NavigationMenu.Link>
              )}
            </NavigationMenu.Item>
          ))}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </motion.div>
  );
};

export default OverlayPanel;
