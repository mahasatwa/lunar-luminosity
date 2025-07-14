import React from 'react';
import { cn } from '../../utils/cn'; // Assuming cn utility is here, adjust path if needed

// We are assuming Icon and Button Astro components can be directly used in React component's JSX
// without explicit React imports if they are truly "framework-agnostic" Astro components.
// However, the standard practice for Astro Islands interacting with Astro components
// is for the Astro component to render the React component, and the React component
// doesn't directly import/render other Astro components in its JSX.
// For now, let's keep the Icon/Button as simple props or directly rendered elements
// to avoid complex interop issues at this stage.

interface ControlButtonsProps {
  ctaText: string;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  onSearchClick: () => void;
  onCtaClick: () => void;
}

const ControlButtons: React.FC<ControlButtonsProps> = ({
  ctaText,
  isMenuOpen,
  toggleMenu,
  onSearchClick,
  onCtaClick,
}) => {
  return (
    <div className="control-buttons flex items-center space-x-4">
      {/* Search Icon Button */}
      <button className="search-icon-button" onClick={onSearchClick}>
        {/* For now, a simple placeholder for the icon. Actual Icon.astro can't be rendered directly here. */}
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>

      {/* CTA Button */}
      {/* Assuming Button.astro's styling can be replicated or it's a very simple button */}
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        onClick={onCtaClick}
      >
        {ctaText}
      </button>

      {/* Hamburger/Close Icon Button */}
      <button
        className={cn(
          `hamburger-button`,
          'cursor-pointer border-none bg-none p-0 transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'is-open rotate-90 text-white' : '' // Added rotate-90 for visual feedback
        )}
        onClick={toggleMenu}
      >
        {/* Placeholder for the Icon. Actual Icon.astro cannot be rendered directly here. */}
        {isMenuOpen ? (
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        )}
      </button>
    </div>
  );
};

export default ControlButtons;
