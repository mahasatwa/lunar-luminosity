/**
 * OverlayBackButton: Accessible back button for overlay navigation.
 */
import React from 'react';

const OverlayBackButton: React.FC<{ onClick: () => void; label: string }> = ({ onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    className="mb-4 flex items-center text-red-700 hover:text-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600 transition-colors duration-200"
  >
    <span aria-hidden="true" className="mr-2">&larr;</span>
    <span>{label}</span>
  </button>
);

export default OverlayBackButton;
