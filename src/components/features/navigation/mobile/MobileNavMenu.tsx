// MobileNavMenu: Entry point for mobile navigation (multi-level, panels, ARIA, animation)
import React, { useEffect, useRef } from 'react';
import { navigationData } from '@/data/NavigationData';

interface MobileNavMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ open, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape or click outside
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    function handleClick(e: MouseEvent) {
      if (overlayRef.current && e.target === overlayRef.current) onClose();
    }
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClick);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClick);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black/70 flex justify-end md:hidden transition-all"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
    >
      <nav className="w-4/5 max-w-xs h-full bg-white shadow-lg flex flex-col animate-slideInRight">
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-bold text-lg">Menu</span>
          <button onClick={onClose} aria-label="Tutup menu" className="p-2 rounded hover:bg-gray-100">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M8 8L20 20M20 8L8 20" stroke="#002147" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
        </div>
        <ul className="flex-1 overflow-y-auto">
          {navigationData.map((item) => (
            <li key={item.id} className="border-b">
              <details>
                <summary className="px-4 py-3 font-semibold text-base cursor-pointer select-none flex items-center justify-between">
                  {item.title}
                  {item.subItems && <svg className="ml-2 w-4 h-4" fill="none" stroke="#002147" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>}
                </summary>
                {item.subItems && (
                  <ul className="pl-4 pb-2">
                    {item.subItems.map((sub: any) => (
                      <li key={sub.id}>
                        <a href={sub.link || '#'} className="block py-2 text-sm hover:text-dm-primary">
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </details>
            </li>
          ))}
        </ul>
        <div className="p-4 border-t">
          <a href="/daftar" className="block w-full text-center py-2 rounded bg-dm-primary text-white font-semibold hover:bg-dm-primary-dark transition-colors">Daftar</a>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavMenu;
