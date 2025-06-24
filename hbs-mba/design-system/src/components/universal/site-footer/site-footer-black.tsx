import { EditAttributes } from "design-system/types/types";
import { ReactNode } from "react";

interface SiteFooterBlockItem {
  children: ReactNode;
  editAttributes?: EditAttributes;
}

export interface SiteFooterBlockProps {
  title?: ReactNode;
  items?: Array<SiteFooterBlockItem>;

  editAttributes?: {
    title?: EditAttributes;
  };
}

export function SiteFooterBlock({
  title,
  items,
  editAttributes,
}: SiteFooterBlockProps) {
  return (
    <div className="hbs-footer-block">
      {title && (
        <p {...editAttributes?.title} className="hbs-footer-block__title">
          {title}
        </p>
      )}

      {items?.map(({ editAttributes, children }, i) => (
        <div {...editAttributes} className="hbs-footer-block-item" key={i}>
          {children}
        </div>
      ))}
    </div>
  );
}
