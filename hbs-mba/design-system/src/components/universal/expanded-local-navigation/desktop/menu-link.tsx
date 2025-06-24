import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "design-system/components/primitives/link/link";
import { FC } from "react";
import { NavigationLink } from "../../local-navigation/local-navigation";

type MenuLinkProps = NavigationLink;

export const MenuLink: FC<MenuLinkProps> = ({ title, url }) => {
  return (
    <NavigationMenu.Link asChild key={title}>
      <Link href={url} className="expanded-navigation-link">
        {title}
      </Link>
    </NavigationMenu.Link>
  );
};
