import { Link } from "design-system/components/primitives/link/link";
import { NavigationLink } from "design-system/components/universal/local-navigation/local-navigation";
import { FC } from "react";

export const ExpandedMobileLink: FC<NavigationLink> = ({ url, title }) => {
  return (
    <li className="hbs-local-navigation__accordion-submenu-item">
      <Link
        href={url}
        className="hbs-local-navigation__accordion-submenu-item-link"
      >
        {title}
      </Link>
    </li>
  );
};
