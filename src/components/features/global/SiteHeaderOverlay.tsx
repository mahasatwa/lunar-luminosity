import React from "react";
import type { NavItem, QuickLink } from "@/types/navigation";

interface SiteHeaderOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  navigationData: NavItem[];
  quickLinksData: QuickLink[];
}

const SiteHeaderOverlay: React.FC<SiteHeaderOverlayProps> = ({
  isOpen,
  onClose,
  navigationData,
  quickLinksData,
}) => {
  // TODO: Implement HBS-style full-screen overlay with 3-panel navigation
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Menu Utama"
    >
      <div className="absolute inset-0 bg-blue-950 bg-opacity-80 transition-opacity duration-500" onClick={onClose} />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        {/* TODO: Render 3-panel navigation here, always in DOM, with correct transitions */}
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-[80vh] flex">
          <div className="flex-1 border-r border-blue-100 p-6 overflow-y-auto">
            {/* Panel 1: Top-level nav */}
            <ul>
              {navigationData.map((item) => (
                <li key={item.id}>
                  <button className="w-full text-left py-2 px-3 font-bold text-lg hover:bg-blue-50 rounded">
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 border-r border-blue-100 p-6 overflow-y-auto">
            {/* Panel 2: Subnav (placeholder) */}
            <div className="text-gray-400 italic">Subnav</div>
          </div>
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Panel 3: Details (placeholder) */}
            <div className="text-gray-400 italic">Details</div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-blue-900 bg-white rounded-full p-2 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Tutup menu"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SiteHeaderOverlay;
