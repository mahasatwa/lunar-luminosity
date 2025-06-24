import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Link } from "design-system/components/primitives/link/link";
import { FC } from "react";
import { NavigationLink } from "../../local-navigation/local-navigation";

type TopLinkProps = NavigationLink;
export const TopLink: FC<TopLinkProps> = ({ url, title, description }) => {
  return (
    <NavigationMenu.Item asChild>
      <div className={`expanded-navigation-top-link`}>
        <div className="expanded-navigation-top-link-title">
          <Link href={url}>{title}</Link>
        </div>
        {description && (
          <p className="expanded-navigation-top-link-description">
            {description}
          </p>
        )}
      </div>
    </NavigationMenu.Item>
  );
};
