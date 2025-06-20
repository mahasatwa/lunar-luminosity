import cn from "clsx";
import { useContext, useRef, createContext } from "react";
import {
  GlobalMenuLevelContext,
  GlobalMenuNavContext,
} from "./global-menu-nav";
import { GlobalMenuSub, GlobalMenuSubmenu } from "./global-menu-sub";
import { GlobalMenuLink } from "./global-menu-link";
import { GlobalMenuSubmenuTrigger } from "./global-menu-submenu-trigger";

interface GlobalMenuItemContextProps {
  id: string;
  triggerButton: HTMLButtonElement | null;
}

export const GlobalMenuItemContext = createContext<GlobalMenuItemContextProps>({
  id: "",
  triggerButton: null,
});

export interface GlobalMenuNavItem {
  id: string;
  label: string;
  link?: string;
  submenu?: GlobalMenuSubmenu;
}

export interface GlobalMenuItemProps {
  index: number;
  item: GlobalMenuNavItem;
  isVisible?: boolean;
}

export function GlobalMenuItem({
  item,
  index,
  isVisible,
}: GlobalMenuItemProps) {
  const context = useContext(GlobalMenuNavContext);
  const { level } = useContext(GlobalMenuLevelContext);

  const triggerRef = useRef<HTMLButtonElement>(null);

  const isSub = level > 0;
  const isActive = context.navStack.includes(item.id);

  const rootClass = isSub
    ? "hbs-global-menu__submenu-item"
    : "hbs-global-menu__item";
  const classname = cn(rootClass, isActive && `${rootClass}--active`);

  return (
    <GlobalMenuItemContext.Provider
      value={{ id: item.id, triggerButton: triggerRef.current }}
    >
      <li className={classname}>
        {item.submenu ? (
          <>
            <GlobalMenuSubmenuTrigger
              ref={triggerRef}
              label={item.label}
              index={index}
              isVisible={isVisible}
            ></GlobalMenuSubmenuTrigger>
            <GlobalMenuSub
              {...item.submenu}
              label={`All items in ${item.label}`}
            />
          </>
        ) : (
          <GlobalMenuLink href={item.link} index={index} isVisible={isVisible}>
            {item.label}
          </GlobalMenuLink>
        )}
      </li>
    </GlobalMenuItemContext.Provider>
  );
}
