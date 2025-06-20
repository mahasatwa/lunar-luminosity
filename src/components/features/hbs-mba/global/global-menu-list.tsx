import cn from "clsx";
import { GlobalMenuItem, GlobalMenuNavItem } from "./global-menu-item";

export interface GlobalMenuListProps {
  items: Array<GlobalMenuNavItem>;
  isVisible?: boolean;
}

export function GlobalMenuList({ items, isVisible }: GlobalMenuListProps) {
  if (!items || items.length === 0) return null;

  return (
    <ul className={cn("hbs-global-menu-list")}>
      {items.map((item, i) => (
        <GlobalMenuItem
          key={item.id}
          index={i}
          item={item}
          isVisible={isVisible}
        />
      ))}
    </ul>
  );
}
