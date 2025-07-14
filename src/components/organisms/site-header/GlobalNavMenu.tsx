// src/components/global/GlobalNavMenu.tsx
import React, { useState, useRef } from 'react';
import { globalNavigationData, type NavItem } from '../../data/NavigationData';
import './GlobalNavMenu.pcss';

interface AccordionItemProps {
  item: NavItem;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const hasSubmenu = item.submenu && item.submenu.length > 0;

  const toggleAccordion = () => {
    if (hasSubmenu) {
      setIsOpen(!isOpen);
    }
  };

  const contentHeight = isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px';

  return (
    <li className="global-nav-menu__item">
      <a
        href={item.href ?? '#'}
        className={`global-nav-menu__link ${hasSubmenu ? 'has-submenu' : ''}`}
        onClick={toggleAccordion}
        aria-expanded={hasSubmenu ? isOpen : undefined}
      >
        {item.text}
        {hasSubmenu && <span className={`chevron ${isOpen ? 'open' : ''}`} />}
      </a>
      {hasSubmenu && (
        <div
          ref={contentRef}
          className="global-nav-menu__submenu-container"
          style={{ height: contentHeight }}
        >
          <ul className="global-nav-menu__submenu">
            {item.submenu?.map((subItem) => (
              <AccordionItem key={subItem.text} item={subItem} />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

interface GlobalNavMenuProps {
  isOpen: boolean;
}

const GlobalNavMenu: React.FC<GlobalNavMenuProps> = ({ isOpen }) => {
  return (
    <div className={`global-nav-menu ${isOpen ? 'is-open' : ''}`}>
      <nav>
        <ul className="global-nav-menu__list">
          {globalNavigationData.map((item) => (
            <AccordionItem key={item.text} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default GlobalNavMenu;
