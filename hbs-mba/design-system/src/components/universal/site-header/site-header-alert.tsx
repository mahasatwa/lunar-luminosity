import cn from "clsx";
import { ReactNode } from "react";

import { Link } from "design-system/components/primitives/link/link";
import { EditAttributes } from "design-system/types/types";
import { Icon } from "design-system/components/icons/icon";
import { SiteHeaderTheme, Theme } from "design-system/utils/theme";

export interface SiteHeaderAlertProps {
  title?: string;
  href?: string;
  description?: ReactNode;
  menuIsOpen?: boolean;
  hasBanner?: boolean;
  theme?: Theme;
  parentTheme?: SiteHeaderTheme;

  editAttributes?: {
    url?: EditAttributes;
    title?: EditAttributes;
    description?: EditAttributes;
  };
}

export function SiteHeaderAlert({
  title,
  description,
  href,
  theme = "crimson",
  parentTheme,
  menuIsOpen,
  hasBanner,
  editAttributes,
}: SiteHeaderAlertProps) {
  if (!title) return null;

  const themeWithDefault =
    parentTheme === theme ? (theme === "crimson" ? "black" : "crimson") : theme;

  const alertClass = cn(
    "hbs-header-alert__link",
    menuIsOpen && "hbs-header-alert__link--menu-is-open"
  );

  return (
    <div
      className={cn(
        "hbs-header-alert__link-container",
        hasBanner && "hbs-header-alert__link-container--with-banner"
      )}
    >
      <div className={alertClass} data-theme={themeWithDefault}>
        <div className="hbs-header-alert__wrapper">
          <span
            {...editAttributes?.title}
            className="hbs-header-alert__title hbs-text-h5"
          >
            {href ? (
              <Link editAttributes={editAttributes?.url} href={href}>
                {title}
              </Link>
            ) : (
              title
            )}
          </span>

          <div
            {...editAttributes?.description}
            className="hbs-header-alert__description"
          >
            <span className="hbs-header-alert__description-text">
              {description}
            </span>

            {href && <Icon name="arrow" className="hbs-header-alert__icon" />}
          </div>
        </div>
      </div>
    </div>
  );
}
