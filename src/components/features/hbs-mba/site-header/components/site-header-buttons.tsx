import { Icon } from "design-system/components/icons/icon";
import { Link } from "design-system/components/primitives/link/link";
import {
  SearchBoxDropdown,
  SearchBoxDropdownProps,
} from "design-system/components/search/search-dropdown/search-dropdown";
import { GlobalMenuProps } from "design-system/components/universal/global-menu/global-menu";
import { SiteHeaderCta } from "design-system/components/universal/site-header/site-header";
import { SessionProps } from "frontend/types";
import { FC, useRef } from "react";

export interface SiteHeaderButtonsProps {
  session?: SessionProps;
  logInOut?: SiteHeaderCta;
  enableLogout?: boolean;
  cta?: SiteHeaderCta;
  hasSearchOverlay?: boolean;
  searchLink?: string;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenuOnSearchOverlayOpen: () => void;
  search?: SearchBoxDropdownProps;
  siteTypeOption: "internal" | "external";
  globalMenu?: GlobalMenuProps;
  subscribeLink?: string;
}
export const SiteHeaderButtons: FC<SiteHeaderButtonsProps> = ({
  logInOut,
  cta,
  closeMenuOnSearchOverlayOpen,
  hasSearchOverlay,
  isMenuOpen,
  toggleMenu,
  searchLink,
  search,
  siteTypeOption,
  globalMenu,
  subscribeLink,
}) => {
  const buttonsRef = useRef<HTMLDivElement>(null);

  let hasGlobalMenu = true;
  if (siteTypeOption === "internal") hasGlobalMenu = false;
  else if (!globalMenu?.items || globalMenu.items.length === 0) {
    hasGlobalMenu = false;
  }

  return (
    <div className="hbs-site-header__buttons" ref={buttonsRef}>
      {logInOut?.text && (
        <p>
          <Link
            href={logInOut.link}
            className="hbs-site-header__button hbs-site-header__cta"
          >
            {logInOut.text}
          </Link>
        </p>
      )}

      {cta && (
        <Link
          href={cta.link}
          className="hbs-site-header__button hbs-site-header__cta"
        >
          {cta.text}
        </Link>
      )}

      {subscribeLink && (
        <Link
          className="hbs-site-header__button hbs-site-header__button--subscribe"
          href={subscribeLink}
          aria-label="Subscribe"
        >
          Subscribe
        </Link>
      )}

      {hasSearchOverlay ? (
        <SearchBoxDropdown
          {...search}
          searchLink={searchLink}
          dropdownItems={search?.dropdownItems}
          isOverlay
          onOpenCallback={closeMenuOnSearchOverlayOpen}
        />
      ) : (
        searchLink && (
          <Link
            className="hbs-site-header__button"
            href={searchLink}
            aria-label="Search"
          >
            <Icon name="search" className="hbs-site-header__button--search" />
          </Link>
        )
      )}

      {hasGlobalMenu && (
        <button
          className="hbs-site-header__button"
          onClick={toggleMenu}
          data-testid="global-menu-trigger"
          aria-label="Quick Links Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <Icon name="close" className="hbs-site-header__button--menu" />
          ) : (
            <Icon name="menu" className="hbs-site-header__button--menu" />
          )}
        </button>
      )}
    </div>
  );
};
