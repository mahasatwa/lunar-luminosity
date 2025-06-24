import { Link } from "design-system/components/primitives/link/link";
import { FC, useRef } from "react";

export interface SiteHeaderWorkingKnowledgeTitle {
  workingKnowledgeTitleLink?: string;
}

export const SiteHeaderWorkingKnowledgeTitle: FC<
  SiteHeaderWorkingKnowledgeTitle
> = ({ workingKnowledgeTitleLink }) => {
  const sectionTitleRef = useRef<HTMLDivElement>(null);

  return (
    <div className="hbs-site-header__section-title" ref={sectionTitleRef}>
      <Link
        className="hbs-site-header__section-title-link"
        href={workingKnowledgeTitleLink}
      >
        Working Knowledge
      </Link>
    </div>
  );
};
