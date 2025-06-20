import cn from "clsx";
import { useResizeObserver } from "design-system/hooks/use-resize-observer";
import { SiteHeaderPosition } from "design-system/types/types";
import { CSSProperties, FC, ReactNode, RefObject, useRef } from "react";

export interface SiteHeaderWrapperProps {
  children?: ReactNode;
  bannerRef: RefObject<HTMLElement>;
  sticky?: boolean;
  position: SiteHeaderPosition;
  isMenuOpen?: boolean;
  hasAlert?: boolean;
  isWorkingKnowledge?: boolean;
  isMinimalHeader?: boolean;
  isHomepage?: boolean;
  headerTheme?: string;
  domain?: string;
}

export const SiteHeaderWrapper: FC<SiteHeaderWrapperProps> = ({
  children,
  bannerRef,
  sticky,
  position,
  isMenuOpen,
  hasAlert,
  isWorkingKnowledge,
  isMinimalHeader,
  isHomepage,
  headerTheme,
  domain,
}) => {
  const ref = useRef<HTMLElement>(null);
  const { height: bannerHeight } = useResizeObserver(bannerRef);

  const headerClass = cn(
    domain === "online" ? "hbs-site-header" : "hbs-site-header noindex",
    domain === "online" && "hbs-site-header--online",
    sticky && position === "sticky" && "hbs-site-header--sticky",
    position === "relative" && "hbs-site-header--relative",
    isMenuOpen && "hbs-site-header--menu-is-open",
    hasAlert && "hbs-site-header--header-alert",
    isWorkingKnowledge && "hbs-wk-site-header",
    isMinimalHeader && "hbs-site-header--minimal",
    isHomepage && "hbs-site-header--homepage",
  );

  return (
    <header
      className={headerClass}
      data-theme={headerTheme}
      data-testid="site-header"
      ref={ref}
      role="banner"
      style={
        {
          "--banner-height": `${bannerHeight || 0}px`,
        } as CSSProperties
      }
    >
      {children}
    </header>
  );
};
