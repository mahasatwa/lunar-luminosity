import React, { useEffect, useRef, useState } from "react";
import type { NavItem, QuickLink } from "@/types/navigation";

interface SiteHeaderOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  navigationData: NavItem[];
  quickLinksData: QuickLink[];
}

const TRANSITION_DURATION = 350; // ms
const PANEL_TRANSITION = "transition-transform duration-[350ms] ease-[cubic-bezier(0.52,0.16,0.24,1)]";

const SiteHeaderOverlay: React.FC<SiteHeaderOverlayProps> = ({
  isOpen,
  onClose,
  navigationData,
  quickLinksData,
}) => {
  // State for active panels
  const [activeLevel1, setActiveLevel1] = useState<NavItem | null>(null);
  const [activeLevel2, setActiveLevel2] = useState<NavItem | null>(null);
  const [display, setDisplay] = useState(false);
  const [animating, setAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);

  // Prevent background scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Show/hide overlay with animation
  useEffect(() => {
    if (isOpen) {
      setDisplay(true);
      setTimeout(() => setAnimating(true), 10);
      setTimeout(() => {
        const btn = panel1Ref.current?.querySelector<HTMLElement>("button, a");
        btn?.focus();
      }, 100);
    } else {
      setAnimating(false);
      setTimeout(() => setDisplay(false), TRANSITION_DURATION);
      setActiveLevel1(null);
      setActiveLevel2(null);
    }
  }, [isOpen]);

  // Focus trap and ESC/arrow navigation
  useEffect(() => {
    if (!display) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      // Trap focus
      if (e.key === "Tab" && overlayRef.current) {
        const focusables = overlayRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
      // Arrow key navigation (left/back, right/forward)
      if (e.key === "ArrowLeft") {
        if (activeLevel2) {
          setActiveLevel2(null);
          setTimeout(() => {
            const btn = panel2Ref.current?.querySelector<HTMLElement>("button, a");
            btn?.focus();
          }, 50);
        } else if (activeLevel1) {
          setActiveLevel1(null);
          setTimeout(() => {
            const btn = panel1Ref.current?.querySelector<HTMLElement>("button, a");
            btn?.focus();
          }, 50);
        }
      }
      if (e.key === "ArrowRight") {
        if (activeLevel1 && !activeLevel2) {
          const firstSub = activeLevel1.subItems?.[0];
          if (firstSub) {
            setActiveLevel2(firstSub);
            setTimeout(() => {
              const btn = panel3Ref.current?.querySelector<HTMLElement>("button, a");
              btn?.focus();
            }, 50);
          }
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [display, onClose, activeLevel1, activeLevel2]);

  if (!display) return null;

  // Panel logic
  const itemsLevel1 = navigationData;
  const itemsLevel2 = activeLevel1?.subItems || [];
  const itemsLevel3 = activeLevel2?.subItems || [];

  // Handlers
  const handleLevel1 = (item: NavItem) => {
    setActiveLevel1(item);
    setActiveLevel2(null);
    setTimeout(() => {
      const btn = panel2Ref.current?.querySelector<HTMLElement>("button, a");
      btn?.focus();
    }, 100);
  };
  const handleLevel2 = (item: NavItem) => {
    setActiveLevel2(item);
    setTimeout(() => {
      const btn = panel3Ref.current?.querySelector<HTMLElement>("button, a");
      btn?.focus();
    }, 100);
  };
  const handleBackToLevel1 = () => {
    setActiveLevel1(null);
    setActiveLevel2(null);
    setTimeout(() => {
      const btn = panel1Ref.current?.querySelector<HTMLElement>("button, a");
      btn?.focus();
    }, 100);
  };
  const handleBackToLevel2 = () => {
    setActiveLevel2(null);
    setTimeout(() => {
      const btn = panel2Ref.current?.querySelector<HTMLElement>("button, a");
      btn?.focus();
    }, 100);
  };
  const handleLink = () => {
    onClose();
  };

  // Panel transition classes (always in DOM, only one visible)
  const panelBase =
    `absolute top-0 left-0 w-full h-full bg-white ${PANEL_TRANSITION}`;
  const panel1Class =
    panelBase +
    (!activeLevel1
      ? " translate-x-0 opacity-100 pointer-events-auto z-30 shadow-xl border-r border-blue-100"
      : " -translate-x-full opacity-0 pointer-events-none z-10");
  const panel2Class =
    panelBase +
    (activeLevel1 && !activeLevel2
      ? " translate-x-0 opacity-100 pointer-events-auto z-30 shadow-xl border-r border-blue-100"
      : activeLevel2
      ? " -translate-x-full opacity-0 pointer-events-none z-10"
      : " translate-x-full opacity-0 pointer-events-none z-10");
  const panel3Class =
    panelBase +
    (activeLevel2
      ? " translate-x-0 opacity-100 pointer-events-auto z-30 shadow-xl"
      : " translate-x-full opacity-0 pointer-events-none z-10");

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
        className="absolute inset-0 bg-blue-950 bg-opacity-90 backdrop-blur-[2.5px] transition-opacity duration-500"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* 3-panel navigation, always in DOM */}
      <div className="relative w-full max-w-5xl h-[80vh] flex bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-200">
        {/* Panel 1: Top-level nav */}
        <div
          ref={panel1Ref}
          className={`flex-1 px-8 py-10 ${panel1Class}`}
          aria-label="Kategori utama"
        >
          <ul>
            {itemsLevel1.map((item) => (
              <li key={item.id} className="mb-2">
                <button
                  className={`w-full text-left py-3 px-4 font-bold text-xl rounded transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    activeLevel1?.id === item.id ? "bg-blue-50 text-blue-900" : "hover:bg-blue-50 text-blue-950"
                  }`}
                  onClick={() => handleLevel1(item)}
                  aria-current={activeLevel1?.id === item.id ? "page" : undefined}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Panel 2: Subnav */}
        <div
          ref={panel2Ref}
          className={`flex-1 px-8 py-10 ${panel2Class}`}
          aria-label="Subkategori"
        >
          {activeLevel1 && (
            <button
              onClick={handleBackToLevel1}
              className="mb-6 flex items-center gap-2 text-blue-900 hover:underline focus-visible:ring-2 focus-visible:ring-amber-400 font-semibold text-base"
              aria-label="Kembali ke kategori utama"
            >
              <span className="text-2xl">←</span> Kembali
            </button>
          )}
          {activeLevel1 && itemsLevel2.length > 0 ? (
            <ul>
              {itemsLevel2.map((item) => (
                <li key={item.id} className="mb-2">
                  <button
                    className={`w-full text-left py-3 px-4 font-semibold text-lg rounded transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 ${
                      activeLevel2?.id === item.id ? "bg-blue-100 text-blue-900" : "hover:bg-blue-50 text-blue-950"
                    }`}
                    onClick={() => handleLevel2(item)}
                    aria-current={activeLevel2?.id === item.id ? "page" : undefined}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          ) : activeLevel1 ? (
            <div className="text-gray-400 italic mt-8">Tidak ada subkategori.</div>
          ) : (
            <div className="text-gray-400 italic mt-8">Pilih kategori utama.</div>
          )}
        </div>
        {/* Panel 3: Details */}
        <div
          ref={panel3Ref}
          className={`flex-1 px-8 py-10 ${panel3Class}`}
          aria-label="Detail"
        >
          {activeLevel2 && (
            <button
              onClick={handleBackToLevel2}
              className="mb-6 flex items-center gap-2 text-blue-900 hover:underline focus-visible:ring-2 focus-visible:ring-amber-400 font-semibold text-base"
              aria-label="Kembali ke subkategori"
            >
              <span className="text-2xl">←</span> Kembali
            </button>
          )}
          {activeLevel2 && itemsLevel3.length > 0 ? (
            <ul>
              {itemsLevel3.map((item) => (
                <li key={item.id} className="mb-2">
                  <a
                    href={item.link}
                    className="block w-full py-3 px-4 font-medium text-lg rounded transition-colors hover:bg-blue-50 text-blue-950 focus-visible:ring-2 focus-visible:ring-amber-400"
                    onClick={handleLink}
                    target={item.isExternal ? "_blank" : "_self"}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : activeLevel2 ? (
            <div className="text-gray-400 italic mt-8">Tidak ada detail.</div>
          ) : (
            <div className="text-gray-400 italic mt-8">Pilih subkategori.</div>
          )}
        </div>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-blue-900 bg-white rounded-full p-3 shadow-lg border border-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 z-20 transition-all duration-200 hover:bg-blue-50 hover:scale-110"
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
