import cn from "clsx";
import { useFocusVisible } from "react-aria";
import { ReactNode, useContext, useMemo } from "react";
import { EditAttributes } from "design-system/types/types";
import {
  GlobalMenuLevelContext,
  GlobalMenuNavContext,
} from "./global-menu-nav";
import { useBreakpoint } from "design-system/hooks/use-breakpoint";
import { Link } from "design-system/components/primitives/link/link";
import { GlobalMenuItemContext, GlobalMenuNavItem } from "./global-menu-item";
import { toggleNavStack } from "./toggle-nav-stack";
import { GlobalMenuList } from "./global-menu-list";
import { Icon } from "design-system/components/icons/icon";

export interface GlobalMenuSubmenuHeader {
  label: string;
  link?: string;
  subtitle?: ReactNode;

  editAttributes?: {
    title?: EditAttributes;
    subtitle: EditAttributes;
  };
}

export interface GlobalMenuSubmenu {
  header: GlobalMenuSubmenuHeader;
  items: Array<GlobalMenuNavItem>;
}

interface GlobalMenuSubmenuProps extends GlobalMenuSubmenu {
  label: string;
}

export function GlobalMenuSub({
  header,
  label,
  items,
}: GlobalMenuSubmenuProps) {
  const context = useContext(GlobalMenuNavContext);
  const { id, triggerButton } = useContext(GlobalMenuItemContext);
  const { level: parentLevel } = useContext(GlobalMenuLevelContext);

  const { isDesktop } = useBreakpoint();
  const { isFocusVisible } = useFocusVisible({
    autoFocus: false,
    isTextInput: false,
  });

  // Submenu is one level up from the parent list item
  const level = parentLevel + 1;
  const isThirdLevel = level === 2;

  const isOpen = useMemo(
    () => context.navStack.includes(id),
    [id, context.navStack],
  );

  const isActive = useMemo(
    () => context.navStack.at(-1) === id,
    [id, context.navStack],
  );

  const shouldShowBackButton = isDesktop
    ? isActive && isFocusVisible
    : isActive;

  const closeSubmenu = () => {
    context.setNavStack((prevStack) =>
      toggleNavStack(id, parentLevel, prevStack, false),
    );
  };

  return (
    <GlobalMenuLevelContext.Provider value={{ level }}>
      <div
        id={id}
        className={cn(
          "hbs-global-menu__submenu",
          isOpen && "hbs-global-menu__submenu--open",
          isThirdLevel && "hbs-global-menu__submenu--third-level-open",
        )}
        aria-label={label}
        onBlur={(e) => {
          // Close submenu if focus leaves the submenu
          if (e.relatedTarget && !e.currentTarget.contains(e.relatedTarget)) {
            closeSubmenu();
          }
        }}
      >
        <div className="hbs-global-menu__submenu-inner">
          <button
            className={cn(
              "hbs-global-menu__back",
              shouldShowBackButton && "hbs-global-menu__back--visible",
            )}
            onClick={() => {
              closeSubmenu();
              // Then re-focus this submenu's trigger button
              triggerButton?.focus();
            }}
          >
            <Icon name="arrowOpen" className="hbs-global-menu__back-icon" />
            Back
          </button>

          <div className="hbs-global-menu__submenu-header">
            <Link
              {...header.editAttributes?.title}
              className="hbs-global-menu__submenu-title-link"
              href={header.link}
            >
              {header.label}
            </Link>

            <div
              {...header.editAttributes?.subtitle}
              className="hbs-global-menu__submenu-subtitle"
            >
              {header.subtitle}
            </div>
          </div>

          <GlobalMenuList items={items} isVisible={isOpen} />
        </div>
      </div>
    </GlobalMenuLevelContext.Provider>
  );
}
