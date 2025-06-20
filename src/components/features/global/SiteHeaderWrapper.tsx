import React from "react";
import type { FC, ReactNode, RefObject } from "react";

interface SiteHeaderWrapperProps {
  children?: ReactNode;
  bannerRef: RefObject<HTMLDivElement>;
  isMenuOpen: boolean;
}

const SiteHeaderWrapper: FC<SiteHeaderWrapperProps> = ({
  children,
  bannerRef,
  isMenuOpen,
}) => {
  return (
    <header
      className={`hbs-site-header${
        isMenuOpen ? " hbs-site-header--menu-is-open" : ""
      } sticky top-0 z-50 bg-white transition-all duration-300`}
      role="banner"
      data-testid="site-header"
    >
      {children}
    </header>
  );
};

export default SiteHeaderWrapper;
