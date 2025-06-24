import { LinkProps } from "design-system/components/primitives/link/link";
import { FC } from "react";
import { NavigationLink as NavigationLinkType } from "../../local-navigation/local-navigation";
import { ExpandedNavigationLinkWithSubItems } from "../local/expanded-local-navigation";
import { NavigationLink } from "./navigation-link";
import { PageListWrapper } from "./page-list-wrapper";

interface PageListOrLinkProps {
  pageListOrLink: NavigationLinkType | ExpandedNavigationLinkWithSubItems;
  tab: number;
  layout: "vertical" | "horizontal";
  singleTopLink?: LinkProps;
}

export const PageListOrLink: FC<PageListOrLinkProps> = ({
  pageListOrLink,
  tab,
  layout,
  singleTopLink,
}) => {
  if ("url" in pageListOrLink) {
    return <NavigationLink link={pageListOrLink} />;
  }

  return (
    <PageListWrapper
      pageList={pageListOrLink}
      tab={tab}
      layout={layout}
      singleTopLink={singleTopLink}
    />
  );
};
