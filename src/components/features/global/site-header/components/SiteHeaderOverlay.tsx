import React, { useEffect, useRef, useState } from "react";
import type { NavItem, QuickLink } from "@/types/navigation";

interface SiteHeaderOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  navigationData: NavItem[];
  quickLinksData: QuickLink[];
}

const PANEL_TRANSITION = "transition-transform duration-[350ms] ease-[cubic-bezier(0.52,0.16,0.24,1)]";

const SiteHeaderOverlay: React.FC<SiteHeaderOverlayProps> = ({
  isOpen,
  onClose,
  navigationData,
  quickLinksData,
}) => {
  // State for active path
  const [activeL1, setActiveL1] = useState<number | null>(null);
  const [activeL2, setActiveL2] = useState<number | null>(null);
  const [display, setDisplay] = useState(false);
  const [animating, setAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Show/hide overlay with animation
  useEffect(() => {
    if (isOpen) {
      setDisplay(true);
      setTimeout(() => setAnimating(true), 10);
    } else {
      setAnimating(false);
      setTimeout(() => setDisplay(false), 350);
      setActiveL1(null);
      setActiveL2(null);
    }
  }, [isOpen]);

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Focus trap and ESC
  useEffect(() => {
    if (!display) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [display, onClose]);

  if (!display) return null;

  // Panel data
  const l1Items = navigationData;
  const l2Items = activeL1 !== null ? l1Items[activeL1]?.subItems || [] : [];
  const l2Parent = activeL1 !== null ? l1Items[activeL1] : null;
  const l3Items = (activeL1 !== null && activeL2 !== null) ? l2Items[activeL2]?.subItems || [] : [];
  const l3Parent = (activeL1 !== null && activeL2 !== null) ? l2Items[activeL2] : null;

  // Handlers
  const handleL1 = (idx: number) => {
    setActiveL1(idx);
    setActiveL2(null);
  };
  const handleL2 = (idx: number) => {
    setActiveL2(idx);
  };
  const handleBackL2 = () => {
    setActiveL1(null);
    setActiveL2(null);
  };
  const handleBackL3 = () => {
    setActiveL2(null);
  };
  const handleLink = () => {
    onClose();
  };

  // Highlight logic
  const isActiveL1 = (idx: number) => activeL1 === idx;
  const isActiveL2 = (idx: number) => activeL2 === idx;

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 ease-in-out ${
        animating ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-label="Menu Utama"
    >
      {/* Overlay background */}
      <div
        className="absolute inset-0 bg-neutral-900 bg-opacity-95 backdrop-blur-[2.5px] transition-opacity duration-500"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* 3-column mega menu */}
      <div className="relative w-full max-w-7xl h-[80vh] flex flex-col md:flex-row bg-transparent p-6 pt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 w-full h-full">
          {/* L1: Main menu */}
          <div className="py-4 border-b md:border-r md:border-b-0 border-white/10 menu-column">
            <ul className="space-y-1 menu-list">
              {l1Items.map((item, i) => (
                <li key={item.id} className={`border-t border-transparent ${isActiveL1(i) ? "text-white has-eyebrow border-t-2 border-white" : "text-neutral-400 hover:text-white hover:bg-white/5"} text-2xl font-semibold`}>
                  {item.subItems ? (
                    <button
                      className="flex items-center w-full text-left p-2 transition-colors duration-200 rounded-md"
                      onClick={() => handleL1(i)}
                      aria-current={isActiveL1(i) ? "page" : undefined}
                    >
                      {item.title}
                      <svg className="w-5 h-5 ml-auto text-neutral-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                    </button>
                  ) : (
                    <a href={item.link || "#"} className="flex items-center w-full text-left p-2 transition-colors duration-200 rounded-md" onClick={handleLink}>{item.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* L2: Submenu + description */}
          <div className={`py-4 border-b md:border-r md:border-b-0 border-white/10 menu-column ${activeL1 !== null ? "is-active" : ""}`}>
            <div className="h-full md:pl-8">
              {activeL1 !== null && (
                <>
                  <button onClick={handleBackL2} className="flex items-center gap-2 px-2 py-4 text-lg font-semibold text-white">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Back
                  </button>
                  {l2Parent?.description && <p className="px-2 mb-4 text-sm text-neutral-400">{l2Parent.description}</p>}
                  {l2Items.length > 0 && (
                    <ul className="space-y-1 menu-list divide-y divide-white/10">
                      {l2Items.map((item, i) => (
                        <li key={item.id} className={`text-lg ${isActiveL2(i) ? "text-white bg-white/5" : "text-neutral-400 hover:text-white hover:bg-white/5"}`}>
                          {item.subItems ? (
                            <button
                              className="flex items-center w-full text-left p-2 transition-colors duration-200 rounded-md"
                              onClick={() => handleL2(i)}
                              aria-current={isActiveL2(i) ? "page" : undefined}
                            >
                              {item.title}
                              <svg className="w-5 h-5 ml-auto text-neutral-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                            </button>
                          ) : (
                            <a href={item.link || "#"} className="flex items-center w-full text-left p-2 transition-colors duration-200 rounded-md" onClick={handleLink}>{item.title}</a>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          </div>
          {/* L3: Submenu of submenu */}
          <div className={`py-4 menu-column ${activeL2 !== null ? "is-active" : ""}`}>
            <div className="h-full md:pl-8">
              {activeL2 !== null && (
                <>
                  <button onClick={handleBackL3} className="flex items-center gap-2 px-2 py-4 text-lg font-semibold text-white">
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Back
                  </button>
                  {l3Parent?.description && <p className="px-2 mb-4 text-sm text-neutral-400">{l3Parent.description}</p>}
                  {l3Items.length > 0 && (
                    <ul className="space-y-1 menu-list divide-y divide-white/10">
                      {l3Items.map((item, i) => (
                        <li key={item.id} className="text-base text-neutral-400 hover:text-white hover:bg-white/5">
                          <a href={item.link || "#"} className="flex items-center w-full text-left p-2 transition-colors duration-200 rounded-md" onClick={handleLink}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white bg-neutral-900 rounded-full p-3 shadow-lg border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 z-20 transition-all duration-200 hover:bg-white/10 hover:scale-110"
          aria-label="Tutup menu"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="15" fill="white" stroke="#1e293b" strokeWidth="2" />
            <path d="M10 10L22 22M22 10L10 22" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SiteHeaderOverlay;
