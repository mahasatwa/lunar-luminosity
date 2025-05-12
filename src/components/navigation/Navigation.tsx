import React, { useState, useEffect, useRef } from 'react';

interface NavigationProps {
  globalLinks: {
    title: string;
    href: string;
  }[];
  localLinks: {
    title: string;
    href: string;
    submenu?: {
      title: string;
      href: string;
    }[];
  }[];
}

export const Navigation: React.FC<NavigationProps> = ({ globalLinks, localLinks }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const offset = navRef.current.offsetTop;
        setIsSticky(window.pageYOffset > offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="w-full">
      {/* Global Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {globalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu icon */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Local Navigation */}
      <div
        className={`bg-white border-b border-gray-200 ${
          isSticky ? 'fixed top-0 left-0 right-0 shadow-md z-50' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            <div className="hidden md:flex items-center space-x-4">
              {localLinks.map((link, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setActiveSubmenu(index)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {link.title}
                  </a>
                  {link.submenu && activeSubmenu === index && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        {link.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center">
              <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {globalLinks.concat(localLinks).map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}; 