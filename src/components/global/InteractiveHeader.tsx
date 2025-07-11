import React, { useState, useEffect } from "react";
import useScrollHandler from "../../hooks/useScrollHandler";
import HamburgerButton from "./HamburgerButton";
import GlobalNavMenu from "./GlobalNavMenu";
import { FiSearch } from "react-icons/fi";

interface InteractiveHeaderProps {
  logoUrl: string;
  wordmarkUrl: string;
}

const InteractiveHeader: React.FC<InteractiveHeaderProps> = ({
  logoUrl,
  wordmarkUrl,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dynamicClasses, setDynamicClasses] = useState("bg-gray-100 p-4");

  useScrollHandler((isScrolled) => {
    setDynamicClasses(
      isScrolled
        ? "bg-gray-200 shadow-md p-2"
        : "bg-gray-100 p-4"
    );
  });

  useEffect(() => {
    // Add/remove class to body to prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ease-in-out ${dynamicClasses}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="/"
            aria-label="Beranda STIE Dwimulya"
            className="flex items-center gap-4"
          >
            <img
              src={logoUrl}
              alt="Logo STIE Dwimulya"
              className={`h-[2.5rem] md:h-[3rem] w-auto transition-all duration-300 ease-in-out ${
                dynamicClasses.includes("p-2") ? "h-[2.25rem]" : "h-[3rem]"
              }`}
              width={64}
              height={64}
            />
            <img
              src={wordmarkUrl}
              alt="Wordmark STIE Dwimulya"
              className={`h-[2.5rem] md:h-[3rem] w-auto transition-all duration-300 ease-in-out ${
                dynamicClasses.includes("p-2") ? "h-[2.25rem]" : "h-[3rem]"
              }`}
              width={180}
              height={64}
            />
          </a>

          <div className="flex items-center gap-4">
            <a
              href="/search"
              aria-label="Pencarian"
              className="text-gray-600 hover:text-brand-red transition-colors"
            >
              <FiSearch size={24} />
            </a>
            <HamburgerButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </header>
      <GlobalNavMenu isOpen={isMenuOpen} />
      <div
        className={`global-nav-overlay ${isMenuOpen ? 'is-visible' : ''}`}
        onClick={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default InteractiveHeader;

