import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import clsx from "clsx";
import { LinkProps } from "design-system/components/primitives/link/link";
import { FC } from "react";
import { ExpandedNavigationLinkWithSubItems } from "../local/expanded-local-navigation";
import { FeatureLink } from "./feature-link";
import { MenuLink } from "./menu-link";
import { TopLink } from "./top-link";

interface PageListProps {
  pageList: ExpandedNavigationLinkWithSubItems;
  layout: "vertical" | "horizontal";
  singleTopLink?: LinkProps;
}

export type LinkType = "topLink" | "link" | "featureLink";

export const PageList: FC<PageListProps> = ({
  pageList,
  layout,
  singleTopLink,
}) => {
  const {
    featureLinksTitle,
    featureCard,
    featureDescription,
    featureLinks,
    featureMedia,
    menu,
    topLinks,
  } = pageList;

  const hasTopLinks = !!topLinks?.length;
  const hasMenu = !!menu?.length;
  const hasFeatureLinks = !!featureLinks?.length;

  const featureOptions = {
    featureCard,
    featureDescription,
    featureMedia,
  };

  return (
    <div className={`expanded-navigation-link-list-${layout}`}>
      <>
        {singleTopLink?.href && singleTopLink.title && (
          <NavigationMenu.Item asChild>
            <div className={`expanded-navigation-top-links--${layout}`}>
              <MenuLink title={singleTopLink.title} url={singleTopLink.href} />
            </div>
          </NavigationMenu.Item>
        )}
      </>
      <>
        {hasTopLinks && (
          <NavigationMenu.Item asChild>
            <div className={`expanded-navigation-top-links--${layout}`}>
              {topLinks.map((topLink, index) => (
                <TopLink key={topLink.title + index} {...topLink} />
              ))}
            </div>
          </NavigationMenu.Item>
        )}

        {hasMenu && (
          <NavigationMenu.List asChild>
            <ul className={`expanded-navigation-menu-${layout}`}>
              {menu.map((menuLink, index) => (
                <MenuLink {...menuLink} key={menuLink.title + index} />
              ))}
            </ul>
          </NavigationMenu.List>
        )}

        {hasFeatureLinks && (
          <div className="expanded-navigation-feature-wrapper">
            <NavigationMenu.List
              className={clsx(
                `expanded-navigation-feature-${layout}${featureCard ? "__has-card" : ""}`,
              )}
            >
              {featureLinksTitle && (
                <div className="expanded-navigation-content-links-label">
                  {featureLinksTitle}
                </div>
              )}
              <div className="expanded-navigation-feature-items">
                {featureLinks.map((featureLink, index) => {
                  return (
                    <FeatureLink
                      {...featureLink}
                      key={featureLink.title + index}
                      featureOptions={featureOptions}
                    />
                  );
                })}
              </div>
            </NavigationMenu.List>
          </div>
        )}
      </>
    </div>
  );
};
