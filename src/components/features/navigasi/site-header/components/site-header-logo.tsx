import { Link } from "design-system/components/primitives/link/link";
import { Logo } from "design-system/components/primitives/logo/logo";
import { FC } from "react";

export interface SiteHeaderLogoProps {
  logoLink?: string;
  siteTypeOption?: "external" | "internal";
}

export const SiteHeaderLogo: FC<SiteHeaderLogoProps> = ({
  logoLink,
  siteTypeOption,
}) => {
  return (
    <div className="hbs-site-header__logo-wrapper">
      <div className="hbs-site-header__logo">
        <Link href={logoLink}>
          <span className="hbs-global-visually-hidden">
            Harvard Business School
          </span>
          {siteTypeOption === "external" && (
            <Logo
              title="Harvard Business School Logo"
              siteType={siteTypeOption}
            />
          )}
          {siteTypeOption === "internal" && (
            <Logo title="myHBS Logo" siteType={siteTypeOption} />
          )}
        </Link>
      </div>
    </div>
  );
};
