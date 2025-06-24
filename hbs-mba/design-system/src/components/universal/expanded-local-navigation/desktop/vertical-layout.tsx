import cn from "clsx";
import { CtaLinkProps } from "design-system/components/primitives/cta-link/cta-link";
import { LinkProps } from "design-system/components/primitives/link/link";
import { FC } from "react";
import { ExpandedNavigationSubMenuProps } from "../local/expanded-local-navigation";
import { ExpandedNavigationCTA } from "./expanded-navigation-cta";
import { PageListOrLink } from "./page-list-or-link";

interface VerticalLayoutProps {
  pageGroups: Array<ExpandedNavigationSubMenuProps>;
  cta?: CtaLinkProps;
  singleTopLink?: LinkProps;
}
/**
 * The Vertical layout is calculated automatically on the props file.
 * If there's just ONE pageListOrLinks that's a pageList, then it's vertical.
 */
export const VerticalLayout: FC<VerticalLayoutProps> = ({
  pageGroups,
  cta,
  singleTopLink,
}) => {
  return (
    <>
      <div
        data-theme="white"
        className="expanded-navigation-content expanded-navigation-content--vertical"
      >
        {pageGroups.map(({ title, pageListOrLinks }, index) => (
          <div key={index} className={cn("expanded-navigation-contents")}>
            {title && (
              <div className="expanded-navigation-content-links-label">
                {title}
              </div>
            )}

            {pageListOrLinks?.map((pageListOrLink, k) => {
              return (
                <PageListOrLink
                  key={k}
                  pageListOrLink={pageListOrLink}
                  tab={k}
                  layout="vertical"
                  singleTopLink={k === 0 ? singleTopLink : undefined}
                />
              );
            })}

            {cta && <ExpandedNavigationCTA layout="vertical" {...cta} />}
          </div>
        ))}
      </div>
    </>
  );
};
