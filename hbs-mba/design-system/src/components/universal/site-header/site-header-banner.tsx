import cn from "clsx";

import { Link } from "design-system/components/primitives/link/link";
import {
  CtaLink,
  CtaLinkProps,
} from "design-system/components/primitives/cta-link/cta-link";
import { Icon } from "design-system/components/icons/icon";

export interface SiteHeaderBannerProps {
  title?: string;
  link?: CtaLinkProps;
  notificationHref?: string;
  notificationActive?: boolean;
}

export function SiteHeaderBanner({
  title,
  link,
  notificationActive,
  notificationHref,
}: SiteHeaderBannerProps) {
  return (
    <div className="hbs-header-banner">
      <div className="hbs-header-banner__container" data-theme="dark">
        <div className="hbs-header-banner__wrapper">
          <p className="hbs-header-banner__title">{title}</p>
          <div className="hbs-header-banner__links">
            {link ? (
              <CtaLink {...link} isSmall className="hbs-header-banner__link" />
            ) : null}
            {notificationHref ? (
              <Link
                href={notificationHref}
                aria-label="Notifications"
                className={cn(
                  "hbs-header-banner__notification",
                  notificationActive &&
                    "hbs-header-banner__notification--active"
                )}
              >
                <Icon name="bell" className="hbs-header-banner__icon" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
