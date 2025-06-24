// HamburgerButton: Shared hamburger menu button
import React from 'react';

const HamburgerButton = React.forwardRef<HTMLButtonElement, { onClick?: () => void; isOpen?: boolean; color?: string }>(
  ({ onClick, isOpen, color = '#002147' }, ref) => (
    <button
      ref={ref}
      aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
      aria-expanded={isOpen}
      aria-controls="main-menu"
      className="p-2 rounded hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dm-primary focus:ring-2 focus:ring-dm-primary transition-colors"
      onClick={onClick}
      type="button"
    >
      <span className="sr-only">{isOpen ? 'Tutup menu' : 'Buka menu'}</span>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        {isOpen ? (
          <path d="M8 8L20 20M20 8L8 20" stroke={color} strokeWidth="2" strokeLinecap="round" />
        ) : (
          <>
            <rect x="5" y="8" width="18" height="2" rx="1" fill={color} />
            <rect x="5" y="13" width="18" height="2" rx="1" fill={color} />
            <rect x="5" y="18" width="18" height="2" rx="1" fill={color} />
          </>
        )}
      </svg>
    </button>
  )
);

export default HamburgerButton;
