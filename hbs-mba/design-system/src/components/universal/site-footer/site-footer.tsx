import "./site-footer.scss";

import { Link, LinkProps } from "design-system/components/primitives/link/link";
import { SiteFooterBlock, SiteFooterBlockProps } from "./site-footer-block";
import {
  SiteFooterPrimaryCta,
  SiteFooterPrimaryCtaProps,
} from "./site-footer-primary-cta";

export interface SiteFooterProps {
  displayPrimaryCTA?: boolean;
  footerBlocks?: Array<SiteFooterBlockProps>;
  footerLegalItems?: Array<LinkProps>;
  footerPrimaryCta?: SiteFooterPrimaryCtaProps;
  disclaimer?: string;
  siteType?: string;
}

/**
 * - **`id: UC-003-000-01`**
 * - **`data-region: uc__site-footer__donation-cta`**
 */

export function SiteFooter({
  footerBlocks,
  footerLegalItems,
  footerPrimaryCta,
  displayPrimaryCTA,
  siteType,
  disclaimer,
}: SiteFooterProps) {
  if (!Array.isArray(footerBlocks)) footerBlocks = [];
  if (!Array.isArray(footerLegalItems)) footerLegalItems = [];

  const showPrimaryCta = displayPrimaryCTA && footerPrimaryCta;
  const dataRegion = `uc__site-footer${showPrimaryCta ? "__donation-cta" : ""}`;

  const footerLabel =
    siteType === "internal" ? "myHBS" : "Harvard Business School";
  const footerLink =
    siteType === "internal"
      ? "https://inside.hbs.edu/myhbs.aspx"
      : "https://www.hbs.edu";

  return (
    <footer
      className="hbs-footer noindex"
      data-region={dataRegion}
      role="contentinfo"
    >
      {/* Footer Primary CTA */}
      {showPrimaryCta && <SiteFooterPrimaryCta {...footerPrimaryCta} />}

      {/* Footer content */}
      <div className="hbs-footer__content" data-theme="dark">
        <div className="hbs-footer__content-wrapper">
          <div className="hbs-footer-block">
            <div className="hbs-footer-block__heading">
              <Link href={footerLink}>{footerLabel}</Link>
            </div>
          </div>

          {footerBlocks.map((block, i) => (
            <SiteFooterBlock {...block} key={i} />
          ))}
        </div>
      </div>

      {/* Footer copyrights */}
      <div className="hbs-footer__legal" data-theme="dark">
        <div className="hbs-footer__legal-wrapper">
          <p className="hbs-footer__copyrights">
            © President & Fellows of Harvard College
          </p>

          <div className="hbs-footer__legal-nav">
            {footerLegalItems.map((link, i) => (
              <Link key={i} className="hbs-footer-legal-item" {...link} />
            ))}
          </div>

          {disclaimer && (
            <div className="hbs-footer-discrimination-notice">{disclaimer}</div>
          )}
        </div>
      </div>
    </footer>
  );
}
