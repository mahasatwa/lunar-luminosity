// src/components/organisms/site-header/HamburgerButton.tsx
import React, { useState, useEffect } from 'react';

const HamburgerButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const mobileMenu = document.getElementById('mobile-menu-overlay');
        if (mobileMenu) {
            if (isOpen) {
                mobileMenu.classList.remove('-translate-x-full');
            } else {
                mobileMenu.classList.add('-translate-x-full');
            }
        }
    }, [isOpen]);

    return (
        <button
            id="hamburger-button"
            onClick={toggleMenu}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
        >
            <span
                className={`block h-0.5 w-6 transform bg-current transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-y-2 rotate-45' : ''
                }`}
            />
            <span
                className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                }`}
            />
            <span
                className={`block h-0.5 w-6 transform bg-current transition-transform duration-300 ease-in-out ${
                    isOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
            />
        </button>
    );
};

export default HamburgerButton;
