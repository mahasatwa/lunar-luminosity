// src/components/organisms/site-header/GlobalNavMenu.tsx
import React, { useState, useRef } from 'react';
import type { NavItem } from '../../../data/NavigationData';

interface AccordionItemProps {
    item: NavItem;
    isMobile?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isMobile }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const hasSubmenu = item.submenu && item.submenu.length > 0;

    const toggleAccordion = (e: React.MouseEvent) => {
        if (isMobile && hasSubmenu) {
            e.preventDefault();
            setIsOpen(!isOpen);
        }
    };

    const contentHeight = isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px';

    return (
        <li className="nav-item">
            <a
                href={item.href || '#'}
                className={`nav-link ${hasSubmenu ? 'has-submenu' : ''}`}
                onClick={toggleAccordion}
                aria-expanded={isMobile && hasSubmenu ? isOpen : undefined}
            >
                {item.text}
                {isMobile && hasSubmenu && <span className={`chevron ${isOpen ? 'open' : ''}`} />}
            </a>
            {hasSubmenu && (
                <div
                    ref={contentRef}
                    className={`submenu-container ${isMobile ? 'mobile' : 'desktop'}`}
                    style={isMobile ? { height: contentHeight } : {}}
                >
                    <ul className="submenu">
                        {item.submenu?.map((subItem) => (
                            <AccordionItem key={subItem.text} item={subItem} isMobile={isMobile} />
                        ))}
                    </ul>
                </div>
            )}
        </li>
    );
};

interface GlobalNavMenuProps {
    data: NavItem[];
    isMobile?: boolean;
}

const GlobalNavMenu: React.FC<GlobalNavMenuProps> = ({ data, isMobile }) => {
    return (
        <ul className={`nav-menu ${isMobile ? 'mobile' : 'desktop'}`}>
            {data.map((item) => (
                <AccordionItem key={item.text} item={item} isMobile={isMobile} />
            ))}
        </ul>
    );
};

export default GlobalNavMenu;
