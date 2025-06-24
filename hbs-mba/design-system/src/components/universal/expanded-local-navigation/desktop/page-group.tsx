import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { FC } from "react";
import { ExpandedNavigationSubMenuProps } from "../local/expanded-local-navigation";
import { PageListOrLink } from "./page-list-or-link";

interface PageGroupProps {
  pageGroup: ExpandedNavigationSubMenuProps;
  layout: "horizontal" | "vertical";
}
export const PageGroup: FC<PageGroupProps> = ({ pageGroup, layout }) => {
  const { title, pageListOrLinks } = pageGroup;
  return (
    <>
      {pageListOrLinks && (
        <NavigationMenu.List asChild>
          <div className="expanded-navigation-content-links">
            {title && (
              <div className="expanded-navigation-content-links-label">
                {title}
              </div>
            )}
            <ul>
              {pageListOrLinks.map((pageListOrLink, k) => (
                <PageListOrLink
                  layout={layout}
                  pageListOrLink={pageListOrLink}
                  tab={k}
                  key={k}
                ></PageListOrLink>
              ))}
            </ul>
          </div>
        </NavigationMenu.List>
      )}
    </>
  );
};
