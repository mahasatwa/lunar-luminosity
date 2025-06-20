import { Link } from "design-system/components/primitives/link/link";
import { NavigationLink } from "design-system/components/universal/local-navigation/local-navigation";
import { EditAttributes } from "design-system/types/types";
import { FC, useRef } from "react";

export interface SiteHeaderSectionTitleProps {
  sectionTitle: NavigationLink;

  editAttributes?: {
    title?: EditAttributes;
    moreItemsTitle?: EditAttributes;
  };
}

export const SiteHeaderSectionTitle: FC<SiteHeaderSectionTitleProps> = ({
  sectionTitle,
  editAttributes,
}) => {
  const sectionTitleRef = useRef<HTMLDivElement>(null);

  return (
    <div className="hbs-site-header__section-title" ref={sectionTitleRef}>
      <Link
        {...editAttributes?.title}
        className="hbs-site-header__section-title-link"
        href={sectionTitle.url}
      >
        {sectionTitle.title}
      </Link>
    </div>
  );
};
