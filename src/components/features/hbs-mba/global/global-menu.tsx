import "./global-menu.scss";
import "./top-level.scss";
import "./second-level.scss";
import "./third-level.scss";

import { GlobalMenuNav, GlobalMenuNavMainProps } from "./global-menu-nav";
import { GlobalMenuList } from "./global-menu-list";
import { GlobalMenuNavItem } from "./global-menu-item";

/* -------------------------------------------------------------------------------------------------
 * GlobalMenu
 * -----------------------------------------------------------------------------------------------*/

export interface GlobalMenuProps extends GlobalMenuNavMainProps {
  items?: Array<GlobalMenuNavItem>;
}

/**
 * This component lives in the hamburger menu of each page. It renders a nested list of links with submenus as a three-tier nav menu.
 *
 * - **`id: UC-001-000-00`**
 * - **`data-region: uc__global-menu`**
 */
export function GlobalMenu({ items, ...props }: GlobalMenuProps) {
  if (!Array.isArray(items)) items = [];

  return (
    <GlobalMenuNav {...props}>
      <GlobalMenuList items={items} isVisible={props.open} />
    </GlobalMenuNav>
  );
}
