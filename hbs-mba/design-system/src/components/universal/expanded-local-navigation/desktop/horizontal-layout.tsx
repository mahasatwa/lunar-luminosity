import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CtaLinkProps } from "design-system/components/primitives/cta-link/cta-link";
import { Link, LinkProps } from "design-system/components/primitives/link/link";
import { FC } from "react";
import { ExpandedNavigationSubMenuProps } from "../local/expanded-local-navigation";
import { ExpandedNavigationCTA } from "./expanded-navigation-cta";
import { PageGroup } from "./page-group";

interface HorizontalLayoutProps {
  pageGroups: Array<ExpandedNavigationSubMenuProps>;
  cta?: CtaLinkProps;
  singleTopLink?: LinkProps;
}
/**
 * The Horizontal layout is calculated automatically on the props file.
 * If there's more than one pageListOrLinks that's a pageList, then it's horizontal.
 */
export const HorizontalLayout: FC<HorizontalLayoutProps> = ({
  pageGroups,
  cta,
  singleTopLink,
}) => {
  return (
    <div
      data-theme="white"
      className="expanded-navigation-content expanded-navigation-content--horizontal"
    >
      <NavigationMenu.Sub defaultValue="tab-0">
        <div className="expanded-navigation-content-wrapper">
          <div className="expanded-navigation-content-wrapper-column">
            <div>
              {singleTopLink?.href && singleTopLink.title && (
                <div className="expanded-navigation-content-links">
                  <Link href={singleTopLink.href} className="">
                    {singleTopLink.title}
                  </Link>
                </div>
              )}
              {pageGroups?.map((pageGroup, j) => (
                <PageGroup key={j} pageGroup={pageGroup} layout="horizontal" />
              ))}
            </div>
            {cta && <ExpandedNavigationCTA layout="horizontal" {...cta} />}
          </div>
          <NavigationMenu.Viewport />
        </div>
      </NavigationMenu.Sub>
    </div>
  );
};
