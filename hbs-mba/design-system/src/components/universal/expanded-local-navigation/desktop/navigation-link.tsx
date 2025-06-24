import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "design-system/components/primitives/link/link";
import { FC } from "react";
import { NavigationLink as NavigationLinkType } from "../../local-navigation/local-navigation";

interface NavigationLinkProps {
  link: NavigationLinkType;
}
export const NavigationLink: FC<NavigationLinkProps> = ({ link }) => {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link href={link.url} className="expanded-navigation-link">
          {link.title}
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};
