/**
 * HamburgerButton: Accessible, animated hamburger/close icon.
 */
import React from 'react';

const HamburgerButton = React.forwardRef<HTMLButtonElement, { onClick: () => void; isOpen?: boolean }>(
  ({ onClick, isOpen }, ref) => (
    <button
      type="button"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className="ml-4 p-2 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600 transition-colors duration-200"
      onClick={onClick}
      ref={ref}
    >
      <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
      <span className="relative block w-6 h-6">
        <span
          className={`absolute left-0 top-1/2 w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? 'rotate-45 top-1/2' : '-translate-y-2'
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`absolute left-0 top-1/2 w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? '-rotate-45 top-1/2' : 'translate-y-2'
          }`}
        />
      </span>
    </button>
  )
);

export default HamburgerButton;
