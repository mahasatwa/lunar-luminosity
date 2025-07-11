// src/components/global/HamburgerButton.tsx
import React from 'react';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
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
