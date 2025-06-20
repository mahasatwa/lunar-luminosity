import "./site-header.scss";

import { Link } from "design-system/components/primitives/link/link";
import { GlobalMenu } from "design-system/components/universal/global-menu/global-menu";
import { LocalNavigationProps } from "design-system/components/universal/local-navigation/local-navigation";
import { SiteHeaderTheme } from "design-system/utils/theme";
import FocusTrap from "focus-trap-react";
import { ReactNode, useRef, useState } from "react";
import {
  SiteHeaderAlertAndBanner,
  SiteHeaderAlertAndBannerProps,
} from "./components/alert-and-banner";
import {
  SiteHeaderButtons,
  SiteHeaderButtonsProps,
} from "./components/site-header-buttons";
import {
  SiteHeaderLogo,
  SiteHeaderLogoProps,
} from "./components/site-header-logo";

import {
  SiteHeaderNavigation,
  SiteHeaderNavigationProps,
} from "./components/site-header-navigation";

import {
  SiteHeaderSectionTitle,
  SiteHeaderSectionTitleProps,
} from "./components/site-header-section-title";

import {
  SiteHeaderWorkingKnowledgeTagline,
  SiteHeaderWorkingKnowledgeTaglineProps,
} from "./components/site-header-working-knowledge-tagline";
import { SiteHeaderWorkingKnowledgeTitle } from "./components/site-header-working-knowledge-title";

import { ExpandedLocalNavigationProps } from "../expanded-local-navigation/local/expanded-local-navigation";
import {
  SiteHeaderWrapper,
  SiteHeaderWrapperProps,
} from "./components/site-header-wrapper";
import { useSetSticky } from "./components/useSetSticky";

export interface SiteHeaderCta {
  link?: string;
  text?: string;
  hideIcon?: boolean;
}

/**
 * Type that overrides certain required props inherited then omitted
 */
interface SiteHeaderPropsPartialOverrides {
  localNavigationItems?: LocalNavigationProps["localNavigationItems"];
  expandedNavigationItems?: ExpandedLocalNavigationProps["expandedNavigationItems"];
  position?: SiteHeaderWrapperProps["position"];
  sectionTitle?: SiteHeaderNavigationProps["sectionTitle"];
  enableLogout?: SiteHeaderButtonsProps["enableLogout"];
  children?: ReactNode;
}

export type SiteHeaderProps = SiteHeaderLogoProps &
  SiteHeaderWorkingKnowledgeTaglineProps &
  Omit<SiteHeaderWrapperProps, "isMenuOpen" | "bannerRef" | "position"> &
  Omit<SiteHeaderAlertAndBannerProps, "isMenuOpen" | "bannerRef"> &
  Omit<SiteHeaderSectionTitleProps, "sectionTitle"> &
  Omit<SiteHeaderNavigationProps, "sectionTitle"> &
  Omit<
    SiteHeaderButtonsProps,
    | "siteTypeOption"
    | "toggleMenu"
    | "closeMenuOnSearchOverlayOpen"
    | "isMenuOpen"
    | "enableLogout"
  > &
  SiteHeaderPropsPartialOverrides & {
    theme?: SiteHeaderTheme;
    moreItemsTitle?: string;
    siteType?: string;
    domain?: string;
  };

/**
 * - **`id: UC-004-001-00`**
 * - **`data-region: uc__site-header__sitewide`**
 */
export function SiteHeader({
  localNavigationItems,
  expandedNavigationItems,
  theme,
  isHomepage,
  isWorkingKnowledge,
  sectionTitle,
  headerAlert,
  headerBanner,
  globalMenu,
  cta,
  logoLink,
  position = "sticky",
  searchLink,
  hasSearchOverlay = false,
  search,
  moreItemsTitle,
  workingKnowledgeTagline,
  workingKnowledgeTitleLink,
  editAttributes,
  isMinimalHeader = false,
  siteType,
  logInOut,
  subscribeLink,
  domain,
}: SiteHeaderProps) {
  const bannerRef = useRef<HTMLDivElement>(null);
  const hasAlert = headerAlert !== undefined;
  const siteTypeOption = siteType === "internal" ? "internal" : "external";

  const isSticky = useSetSticky({
    defaultValue: false,
    isWorkingKnowledge,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerTheme =
    isMenuOpen || (isSticky && position === "sticky") ? "dark" : theme;

  let dataRegion = "uc__site-header" + isHomepage ? "__homepage" : "__sitewide";
  if (hasAlert) dataRegion += "__alert-banner";

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleDeactivate() {
    setIsMenuOpen(false);
  }

  function closeMenuOnSearchOverlayOpen() {
    if (isMenuOpen) {
      handleDeactivate();
    }
  }

  return (
    <>
      <Link
        href="#skipto-main"
        className="hbs-global-visually-hidden skipto noindex"
        target="_self"
      >
        Skip to Main Content
      </Link>
      <FocusTrap
        active={isMenuOpen}
        focusTrapOptions={{ onDeactivate: handleDeactivate }}
      >
        <span data-region={dataRegion}>
          <SiteHeaderWrapper
            bannerRef={bannerRef}
            sticky={isSticky}
            position={position}
            isMenuOpen={isMenuOpen}
            hasAlert={hasAlert}
            isWorkingKnowledge={isWorkingKnowledge}
            isMinimalHeader={isMinimalHeader}
            isHomepage={isHomepage}
            headerTheme={headerTheme}
            domain={domain}
          >
            <SiteHeaderAlertAndBanner
              bannerRef={bannerRef}
              isMenuOpen={isMenuOpen}
              headerAlert={headerAlert}
              headerBanner={headerBanner}
              headerTheme={headerTheme}
            />

            <div className="hbs-site-header__wrapper">
              <SiteHeaderLogo
                logoLink={logoLink}
                siteTypeOption={siteTypeOption}
              />

              {!isHomepage && sectionTitle && !isWorkingKnowledge && (
                <SiteHeaderSectionTitle
                  editAttributes={editAttributes}
                  sectionTitle={sectionTitle}
                />
              )}

              {isWorkingKnowledge && (
                <SiteHeaderWorkingKnowledgeTitle
                  workingKnowledgeTitleLink={workingKnowledgeTitleLink}
                />
              )}

              {!isMenuOpen && !isWorkingKnowledge && (
                <SiteHeaderNavigation
                  domain={domain}
                  moreItemsTitle={moreItemsTitle}
                  localNavigationItems={localNavigationItems}
                  expandedNavigationItems={expandedNavigationItems}
                  isHomepage={isHomepage}
                  isSticky={isSticky}
                  sectionTitle={sectionTitle}
                  editAttributes={editAttributes}
                  cta={cta}
                  isWorkingKnowledge={isWorkingKnowledge}
                  logInOut={logInOut}
                />
              )}

              {isWorkingKnowledge && !isMenuOpen && (
                <SiteHeaderWorkingKnowledgeTagline
                  workingKnowledgeTagline={workingKnowledgeTagline}
                  workingKnowledgeTitleLink={workingKnowledgeTitleLink}
                />
              )}

              <SiteHeaderButtons
                logInOut={logInOut}
                cta={cta}
                closeMenuOnSearchOverlayOpen={closeMenuOnSearchOverlayOpen}
                hasSearchOverlay={hasSearchOverlay}
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                searchLink={searchLink}
                search={search}
                siteTypeOption={siteTypeOption}
                globalMenu={globalMenu}
                subscribeLink={subscribeLink}
              />
            </div>

            {isWorkingKnowledge && !isMenuOpen && (
              <SiteHeaderNavigation
                moreItemsTitle={moreItemsTitle}
                localNavigationItems={localNavigationItems}
                expandedNavigationItems={expandedNavigationItems}
                isSticky={isSticky}
                sectionTitle={sectionTitle}
                editAttributes={editAttributes}
                cta={cta}
                logInOut={logInOut}
                isHomepage={isHomepage}
                isWorkingKnowledge={isWorkingKnowledge}
              />
            )}
          </SiteHeaderWrapper>

          {globalMenu && (
            <GlobalMenu
              {...globalMenu}
              open={isMenuOpen}
              numBanners={
                headerAlert && headerBanner
                  ? 2
                  : headerAlert || headerBanner
                  ? 1
                  : undefined
              }
            />
          )}
        </span>
      </FocusTrap>
    </>
  );
}
