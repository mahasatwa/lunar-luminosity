/**
 * OverlayRoot: Full-screen overlay navigation with multi-level panels and focus trap.
 */
import React, { useEffect, useState } from 'react';
import type { NavItem } from '../../../../types/navigation';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { quickLinksData } from '../../../../data/NavigationData';
import { LOGO_URL, WORDMARK_URL } from '../../../../assets/brand';

const OverlayRoot: React.FC<{ open: boolean; onClose: () => void; navItems: NavItem[] }> = ({ open, onClose, navItems }) => {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  useEffect(() => {
    if (open) {
      // Set menu aktif ke menu pertama jika belum ada
      if (!activeMenuId && navItems.length > 0) setActiveMenuId(navItems[0].id);
    } else {
      setActiveMenuId(null);
    }
  }, [open, navItems, activeMenuId]);
  const activeMenu = navItems.find(item => item.id === activeMenuId);

  return (
    <Dialog.Root open={open} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-neutral-900/95 flex flex-col focus:outline-none"
                aria-modal="true"
              >
                <Dialog.Content asChild aria-labelledby="menu-heading">
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col h-full w-full max-w-full mx-auto relative"
                  >
                    {/* ARIA heading for dialog accessibility */}
                    <h2 id="menu-heading" className="sr-only">Menu utama</h2>
                    {/* Header overlay */}
                    <div className="flex items-center justify-between px-6 pt-6 pb-2">
                      <a href="/" className="flex items-center min-w-0" aria-label="Beranda">
                        <img src={LOGO_URL} alt="Logo" className="h-10 w-auto md:h-12" />
                        <img src={WORDMARK_URL} alt="Wordmark" className="ml-2 h-8 md:h-10 w-auto max-w-xs" />
                      </a>
                      <div className="flex items-center gap-3">
                        <a href="/daftar" className="px-4 py-2 rounded bg-dm-primary text-white font-semibold hover:bg-dm-primary-dark transition-colors">Daftar</a>
                        <button aria-label="Cari" className="p-2 rounded hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dm-primary">
                          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="9" cy="9" r="7" stroke="#fff" strokeWidth="2"/><path d="M15.5 15.5L13 13" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                        </button>
                        <Dialog.Close asChild>
                          <button aria-label="Tutup menu" className="p-2 rounded border-2 border-white text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-dm-primary">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M8 8L20 20M20 8L8 20" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                          </button>
                        </Dialog.Close>
                      </div>
                    </div>
                    {/* Main overlay content */}
                    <div className="flex-1 flex flex-row overflow-y-auto">
                      {/* Panel kiri: menu utama */}
                      <div className="w-full max-w-xs min-w-[220px] bg-transparent px-6 pt-4 pb-8 flex flex-col justify-between">
                        <nav aria-label="Menu utama" className="flex-1">
                          <ul className="space-y-2">
                            {navItems.map((item) => (
                              <li key={item.id}>
                                <button
                                  className={`w-full text-left font-bold text-2xl md:text-3xl text-white py-2 px-2 rounded hover:bg-white/10 transition-colors flex items-center justify-between ${activeMenuId === item.id ? 'bg-white/10' : ''}`}
                                  onClick={() => setActiveMenuId(item.id)}
                                  data-menu-id={item.id}
                                >
                                  {item.title}
                                  {item.subItems && <span aria-hidden>›</span>}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </nav>
                        {/* Quick links di bawah */}
                        <div className="mt-8 border-t border-white/20 pt-4">
                          <ul className="flex flex-wrap gap-3">
                            {quickLinksData.map((link) => (
                              <li key={link.title}>
                                <a href={link.link} target={link.isExternal ? '_blank' : undefined} rel={link.isExternal ? 'noopener noreferrer' : undefined} className="text-white/80 hover:text-white underline text-sm font-medium">
                                  {link.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      {/* Panel kanan: submenu dinamis */}
                      <div className="flex-1 bg-transparent px-6 pt-4 pb-8">
                        {activeMenu && activeMenu.subItems ? (
                          <ul className="space-y-2">
                            {activeMenu.subItems.map((sub) => (
                              <li key={sub.id}>
                                <a href={sub.link || '#'} className="block text-white text-xl py-2 px-2 rounded hover:bg-white/10 transition-colors">
                                  {sub.title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-white/60 text-lg flex items-center h-full justify-center">Pilih menu utama</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </motion.div>
            </Dialog.Overlay>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default OverlayRoot;
