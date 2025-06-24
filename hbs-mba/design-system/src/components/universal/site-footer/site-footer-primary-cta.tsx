import { Icon } from "design-system/components/icons/icon";
import { Link } from "design-system/components/primitives/link/link";
import { EditAttributes } from "design-system/types/types";
import { ReactNode } from "react";

export interface SiteFooterPrimaryCtaProps {
  title?: ReactNode;
  description?: ReactNode;
  href?: string;

  editAttributes?: {
    url?: EditAttributes;
    title?: EditAttributes;
    description?: EditAttributes;
  };
}

export function SiteFooterPrimaryCta({
  title,
  description,
  href,
  editAttributes,
}: SiteFooterPrimaryCtaProps) {
  if (!title || !href) return null;

  return (
    <div data-theme="crimson" className="hbs-footer-primary-cta__link">
      <div className="hbs-footer-primary-cta__wrapper">
        <span
          {...editAttributes?.title}
          className="hbs-footer-primary-cta__title hbs-text-h3"
        >
          <Link href={href} editAttributes={editAttributes?.url}>
            {title}
          </Link>
        </span>

        <div
          {...editAttributes?.description}
          className="hbs-footer-primary-cta__description"
        >
          {description}
          <Icon name="arrow" className="hbs-footer-primary-cta__icon" />
        </div>
      </div>
    </div>
  );
}
