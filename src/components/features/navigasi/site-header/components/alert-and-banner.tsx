import {
  SiteHeaderAlert,
  SiteHeaderAlertProps,
} from "design-system/components/universal/site-header/site-header-alert";
import {
  SiteHeaderBanner,
  SiteHeaderBannerProps,
} from "design-system/components/universal/site-header/site-header-banner";
import { SiteHeaderTheme } from "design-system/utils/theme";
import { FC, RefObject } from "react";

export interface SiteHeaderAlertAndBannerProps {
  bannerRef?: RefObject<HTMLDivElement>;
  headerAlert?: SiteHeaderAlertProps;
  headerTheme?: SiteHeaderTheme;
  isMenuOpen: boolean;
  headerBanner?: SiteHeaderBannerProps;
}

export const SiteHeaderAlertAndBanner: FC<SiteHeaderAlertAndBannerProps> = ({
  bannerRef,
  isMenuOpen,
  headerAlert,
  headerBanner,
  headerTheme,
}) => {
  return (
    <div ref={bannerRef}>
      {headerAlert && (
        <SiteHeaderAlert
          {...headerAlert}
          parentTheme={headerTheme}
          menuIsOpen={isMenuOpen}
          hasBanner={Boolean(headerBanner)}
        />
      )}
      {headerBanner && <SiteHeaderBanner {...headerBanner} />}
    </div>
  );
};
