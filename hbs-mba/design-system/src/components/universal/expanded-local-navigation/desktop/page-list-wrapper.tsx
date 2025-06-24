import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Icon } from "design-system/components/icons/icon";
import { LinkProps } from "design-system/components/primitives/link/link";
import { FC } from "react";
import { ExpandedNavigationLinkWithSubItems } from "../local/expanded-local-navigation";
import { PageList } from "./page-list";

interface PageListWrapperProps {
  pageList: ExpandedNavigationLinkWithSubItems;
  tab: number;
  layout: "vertical" | "horizontal";
  singleTopLink?: LinkProps;
}

export const PageListWrapper: FC<PageListWrapperProps> = ({
  layout,
  pageList,
  tab,
  singleTopLink,
}) => {
  if (layout === "horizontal") {
    const { title } = pageList;
    return (
      <NavigationMenu.Item value={`tab-${tab}`} key={tab}>
        {title && (
          <NavigationMenu.Trigger
            onPointerMove={(event) => event.preventDefault()}
            onPointerLeave={(event) => event.preventDefault()}
            asChild
          >
            <button className="expanded-navigation__subitem-link">
              {title}
              <Icon
                name="caret"
                className="expanded-navigation__item-caret"
                aria-hidden
              />
            </button>
          </NavigationMenu.Trigger>
        )}

        <NavigationMenu.Content>
          <PageList pageList={pageList} layout={layout} />
        </NavigationMenu.Content>
      </NavigationMenu.Item>
    );
  }

  return (
    <PageList
      pageList={pageList}
      layout={layout}
      singleTopLink={singleTopLink}
    />
  );
};
