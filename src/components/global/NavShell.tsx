// src/components/global/NavShell.tsx

import React, { useState, useRef, Fragment } from "react"; // Tambahkan useRef
import { Dialog, Transition } from "@headlessui/react";
import { FiMenu, FiX } from "react-icons/fi";
import DrawerContent from "./DrawerContent";
import type { NavItem, QuickLink } from "../../types/navigation"; // Impor tipe

// Interface Props tetap sama
interface NavShellProps {
  navigationData: NavItem[];
  quickLinksData: QuickLink[];
}

const NavShell: React.FC<NavShellProps> = ({
  navigationData,
  quickLinksData,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Buat ref untuk tombol close di dalam drawer
  const closeButtonRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* Tombol Hamburger */}
      <button
        type="button"
        onClick={openModal}
        className="rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Buka menu"
      >
        <FiMenu className="h-6 w-6" aria-hidden="true" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        {/* 2. Tambahkan prop 'initialFocus' ke Dialog */}
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={closeButtonRef}
          onClose={closeModal}
        >
          {/* ... Latar belakang overlay ... */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-blue-950 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-0 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full h-full transform overflow-hidden bg-blue-950 text-left align-middle shadow-xl transition-all">
                  {/* Tombol close sekarang berada di sini, di dalam Dialog.Panel */}
                  <button
                    ref={closeButtonRef} // 3. Pasang ref ke tombol close
                    onClick={closeModal}
                    className="text-white absolute top-4 right-4 z-20 p-2"
                    aria-label="Tutup menu"
                  >
                    <FiX size={24} />
                  </button>

                  <DrawerContent
                    navigationData={navigationData}
                    quickLinksData={quickLinksData}
                    onClose={closeModal}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NavShell;
