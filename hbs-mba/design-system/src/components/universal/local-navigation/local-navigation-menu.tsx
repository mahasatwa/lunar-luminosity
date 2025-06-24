import cn from "clsx";
import { ForwardedRef, forwardRef } from "react";
import { NavigationLink } from "./local-navigation";
import { Link } from "design-system/components/primitives/link/link";
import { Icon } from "design-system/components/icons/icon";
import { useStoreSelector } from "design-system/store/store";

export interface LocalNavigationItemProps extends NavigationLink {
  isCurrent?: boolean;
  isCurrentSubmenu?: boolean;
  submenu?: Array<NavigationLink>;
  isDropdownOpen?: boolean;
  showDropdown?: () => void;
  hideDropdown?: () => void;
  isHidden?: boolean;
  mobileOnly?: boolean;
}

export const LocalNavigationItem = forwardRef(LocalNavigationItemWithRef);

function LocalNavigationItemWithRef(
  {
    submenu,
    isDropdownOpen,
    showDropdown,
    hideDropdown,
    isHidden,
    url,
    title,
    editAttributes,
    isCurrent,
    isCurrentSubmenu,
  }: LocalNavigationItemProps,
  ref: ForwardedRef<HTMLLIElement>,
) {
  const path = useStoreSelector((store) => store.location.path);

  const hasSubmenu = Array.isArray(submenu) && submenu.length > 0;

  // Helper function to check if a URL matches the current path
  const isUrlCurrent = (linkUrl?: string) => {
    return linkUrl && path.startsWith(linkUrl);
  };
  return (
    <li
      {...editAttributes?.title}
      ref={ref}
      aria-hidden={isHidden}
      onMouseEnter={() => hasSubmenu && showDropdown && showDropdown()}
      onMouseLeave={() => hideDropdown && hideDropdown()}
      className={cn(
        "hbs-local-navigation__item",
        (isCurrent || isCurrentSubmenu) && "hbs-local-navigation__item--active",
        isHidden && "hbs-local-navigation__item--hidden",
      )}
    >
      {url ? (
        <Link
          href={url}
          className={cn(
            "hbs-local-navigation__item-link",
            hasSubmenu && "hbs-local-navigation__item-link-with-dropdown",
          )}
          aria-current={isCurrent ? "true" : undefined}
        >
          {title}
        </Link>
      ) : (
        <span
          className={cn(
            "hbs-local-navigation__item-link",
            hasSubmenu && "hbs-local-navigation__item-link-with-dropdown",
          )}
          aria-current={isCurrent ? "true" : undefined}
        >
          {title}
        </span>
      )}

      {hasSubmenu && (
        <>
          <button
            className="hbs-local-navigation__item-trigger"
            aria-label={`Menu for ${title}`}
            aria-expanded={isDropdownOpen}
            onClick={() => {
              if (isDropdownOpen && hideDropdown) {
                hideDropdown();
              } else if (showDropdown) {
                showDropdown();
              }
            }}
            aria-current={isCurrent ? "true" : undefined}
          >
            <Icon name="caret" className="hbs-local-navigation__item-caret" />
          </button>

          <div
            className="hbs-local-navigation__submenu-wrapper"
            aria-hidden={!isDropdownOpen}
            onBlur={(e) => {
              // Hide the dropdown when the focus leaves the dropdown
              if (!e.currentTarget.contains(e.relatedTarget)) {
                // Note: Directly setting the aria-hidden attribute instead of calling hideDropdown() because hideDropdown() causes the screen reader to re-read the dropdown trigger button label when focusing the next local nav item
                e.currentTarget.setAttribute("aria-hidden", "true");
              }
            }}
          >
            <ul className="hbs-local-navigation__submenu">
              {submenu?.map((link, j) => (
                <li
                  {...link.editAttributes?.title}
                  className="hbs-local-navigation__submenu-item"
                  key={j}
                >
                  <Link
                    href={link.url}
                    style={{ animationDelay: `${j * 0.03}s` }}
                    className="hbs-local-navigation__submenu-item-link"
                    aria-current={isUrlCurrent(link.url) ? "true" : undefined}
                  >
                    {link.title}
                    <div className="hbs-local-navigation__submenu-item-link-arrow-wrapper">
                      <Icon
                        name="navArrow"
                        className="hbs-local-navigation__submenu-item-link-arrow"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </li>
  );
}
