import { FC } from "react";

import {
  LocalNavigation,
  LocalNavigationProps,
} from "design-system/components/universal/local-navigation/local-navigation";
import { SiteHeaderCta } from "design-system/components/universal/site-header/site-header";
import {
  ExpandedLocalNavigation,
  ExpandedLocalNavigationProps,
} from "../../expanded-local-navigation/local/expanded-local-navigation";

export type SiteHeaderNavigationProps = Omit<
  LocalNavigationProps & ExpandedLocalNavigationProps,
  "mobileCta"
> & {
  cta?: SiteHeaderCta;
  logInOut?: SiteHeaderCta;
  domain?: string;
};

export const SiteHeaderNavigation: FC<SiteHeaderNavigationProps> = ({
  localNavigationItems,
  expandedNavigationItems,
  editAttributes,
  isHomepage,
  isSticky,
  moreItemsTitle,
  sectionTitle,
  isWorkingKnowledge,
  logInOut,
  cta,
  domain,
}) => {
  const mobileCta = cta && {
    href: cta.link,
    children: cta.text,
    hideIcon: cta.hideIcon,
  };

  return (
    <div className="hbs-site-header__menu">
      {domain === "online" ? (
        <ExpandedLocalNavigation
          expandedNavigationItems={expandedNavigationItems}
          isHomepage={isHomepage}
          isSticky={isSticky}
          sectionTitle={sectionTitle}
          editAttributes={editAttributes}
          isWorkingKnowledge={isWorkingKnowledge}
          mobileCta={
            cta && {
              href: cta.link,
              children: cta.text,
              hideIcon: cta.hideIcon,
            }
          }
          logInOut={logInOut}
        />
      ) : (
        <LocalNavigation
          isWorkingKnowledge={isWorkingKnowledge}
          moreItemsTitle={moreItemsTitle}
          localNavigationItems={localNavigationItems}
          isHomepage={isHomepage}
          isSticky={isSticky}
          sectionTitle={sectionTitle}
          editAttributes={editAttributes}
          mobileCta={mobileCta}
          logInOut={logInOut}
        />
      )}
    </div>
  );
};
