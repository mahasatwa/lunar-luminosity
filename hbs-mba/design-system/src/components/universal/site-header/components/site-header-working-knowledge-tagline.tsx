import { Link } from "design-system/components/primitives/link/link";
import { FC } from "react";

export interface SiteHeaderWorkingKnowledgeTaglineProps {
  workingKnowledgeTitleLink?: string;
  workingKnowledgeTagline?: string;
}
export const SiteHeaderWorkingKnowledgeTagline: FC<
  SiteHeaderWorkingKnowledgeTaglineProps
> = ({ workingKnowledgeTitleLink, workingKnowledgeTagline }) => {
  return (
    <div className="hbs-site-header__wk-header">
      <Link
        className="hbs-text-h1 hbs-site-header__wk-title"
        href={workingKnowledgeTitleLink}
      >
        Working Knowledge
      </Link>
      <div className="hbs-site-header__wk-subtitle">
        <em>{workingKnowledgeTagline}</em>
      </div>
    </div>
  );
};
