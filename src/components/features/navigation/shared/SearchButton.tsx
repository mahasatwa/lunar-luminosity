// SearchButton: Shared search button component
import React from 'react';

const SearchButton: React.FC<{ onClick?: () => void; color?: string }> = ({ onClick, color = '#002147' }) => (
  <button
    aria-label="Cari"
    className="p-2 rounded hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dm-primary"
    onClick={onClick}
    type="button"
  >
    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
      <circle cx="9" cy="9" r="7" stroke={color} strokeWidth="2" />
      <path d="M15.5 15.5L13 13" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  </button>
);

export default SearchButton;
