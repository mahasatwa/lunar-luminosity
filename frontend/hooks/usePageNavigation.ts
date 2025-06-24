import { BreadcrumbsProps } from "design-system/components/primitives/breadcrumbs/breadcrumbs";
import { SiblingNavigationProps } from "design-system/components/primitives/sibling-navigation/sibling-navigation";
import { SiblingNavigationItemProps } from "design-system/components/primitives/sibling-navigation/sibling-navigation-item";
import { usePageProps } from "frontend/hooks/use-page-props";
import { SiteMapPage } from "frontend/types";
import { useContentful } from "./use-contentful";
import { isContentType } from "frontend/contentful/lib/is-content-type";
import {
  ArchivePageEntry,
  LandingPageEntry,
} from "frontend/contentful/schema/pages";
import { PageSectionThemeEntry } from "frontend/contentful/schema/blocks";

interface SiblingNavigationItemPropsWithID extends SiblingNavigationItemProps {
  id: string;
}

interface SiblingNavigationPropsWithID extends SiblingNavigationProps {
  menu: Array<SiblingNavigationItemPropsWithID>;
}

export function usePageNavigation() {
  const { map, request, currentPage, entry } = usePageProps();
  const { site, getEntry } = useContentful();

  const domain = request.domain;

  const siteType = site?.fields.domain === "my" ? "internal" : "external";

  let rootLink;
  if (siteType === "internal") {
    rootLink = "https://inside.hbs.edu/myhbs.aspx";
  } else if (domain === "www") {
    rootLink = "/";
  } else {
    rootLink = "https://www.hbs.edu";
  }

  const breadcrumbs: BreadcrumbsProps = {
    breadcrumbs: [],
    rootLink: rootLink,
    theme: undefined,
    siteType: siteType,
  };
  const navigation: SiblingNavigationPropsWithID = { menu: [] };
  const submenu: Array<SiblingNavigationItemPropsWithID> = [];

  const page = getEntry(entry);

  if (isContentType<LandingPageEntry>("landingPage", page)) {
    const firstBlockEntry = getEntry(page?.fields.blocks?.[0]);
    if (
      isContentType<PageSectionThemeEntry>("pageSectionTheme", firstBlockEntry)
    ) {
      breadcrumbs.theme = firstBlockEntry.fields.theme;
    }
  } else if (isContentType<ArchivePageEntry>("archivePage", page)) {
    const firstTopContentEntry = getEntry(page?.fields.topContent?.[0]);
    if (
      isContentType<PageSectionThemeEntry>(
        "pageSectionTheme",
        firstTopContentEntry,
      )
    ) {
      breadcrumbs.theme = firstTopContentEntry.fields.theme;
    }
  }

  if (!site || !currentPage) {
    return { breadcrumbs, navigation };
  }

  if (currentPage.hidden) return { breadcrumbs, navigation };

  const getRelativeUrl = (item: SiteMapPage) =>
    item.url.replace(`${domain}.hbs.edu`, "");

  const addBreadcrumb = (item: SiteMapPage) => {
    const link = getRelativeUrl(item) || "/";

    if (!breadcrumbs.breadcrumbs.find((item) => item.link === link)) {
      breadcrumbs.breadcrumbs.unshift({
        title: item.title,
        link,
        isCurrent: item.id === currentPage.id,
      });

      if (item.parentPageId) {
        const parent = map.find((parent) => parent.id === item.parentPageId);
        if (parent) addBreadcrumb(parent);
      }
    }
  };

  addBreadcrumb(currentPage);

  // map is sorted in `use-page-props`
  map.forEach((item) => {
    if (item.hidden) return;

    if (item.parentPageId && item.parentPageId === currentPage.id) {
      submenu.push({
        id: item.id,
        title: item.title,
        link: getRelativeUrl(item),
      });
    }
  });

  const parentPage = map.find((item) => item.id === currentPage.parentPageId);
  const grandParentPage = parentPage
    ? map.find((item) => item.id === parentPage?.parentPageId)
    : null;

  const currentPageWithSiblings: Array<SiblingNavigationItemPropsWithID> = [];
  const isCurrentPageDeepestLevel =
    grandParentPage?.parentPageId && submenu.length === 0;

  map.forEach((item) => {
    if (item.hidden) return;

    /**
     * If current page is at the deepest level, display all
     * parent/uncles and siblings.
     *
     * @example
     * - Uncle
     * - Uncle
     * - Parent
     *   - Current Page
     *   - Sibling
     *   ...
     */
    if (isCurrentPageDeepestLevel) {
      // For uncles
      if (parentPage && parentPage.parentPageId === item.parentPageId) {
        navigation.menu.push({
          id: item.id,
          title: item.title,
          link: getRelativeUrl(item),
          isCurrent: false,
        });

        return;
      }

      // For siblings or current page, save as
      // the submenu for current page's parent.
      if (item.parentPageId === currentPage.parentPageId) {
        currentPageWithSiblings.push({
          id: item.id,
          title: item.title,
          link: getRelativeUrl(item),
          isCurrent: item.id === currentPage.id,
        });

        return;
      }
    }

    /**
     * If current page has children, display all
     * siblings and children.
     *
     * @example
     * - Sibling
     * - Sibling
     * - Current Page
     *   - Child
     *   - Child
     *   ...
     */
    if (
      !isCurrentPageDeepestLevel &&
      item.parentPageId &&
      item.parentPageId === currentPage.parentPageId
    ) {
      navigation.menu.push({
        id: item.id,
        title: item.title,
        link: getRelativeUrl(item),
        isCurrent: item.id === currentPage.id,
      });
    }
  });

  if (parentPage) {
    let slug = getRelativeUrl(parentPage) || "/";

    if (slug !== "/" && slug.startsWith("/")) {
      slug = slug.substring(1);
    }

    if (slug === site.fields.slug) {
      // if parent is site homepage and current page has no children, do not display sidebar navigation
      if (submenu.length === 0) {
        return { breadcrumbs, navigation: { menu: [] } };
      }
      // if parent is site homepage, set nav title to current page and menu as children
      navigation.heading = { text: currentPage.title };
      navigation.menu = submenu;
    } else if (isCurrentPageDeepestLevel && parentPage.parentPageId) {
      const grandParentPage = map.find(
        (item) => item.id === parentPage.parentPageId,
      );

      if (grandParentPage) {
        navigation.heading = {
          text: grandParentPage.title,
          link: getRelativeUrl(grandParentPage),
        };
      }
    } else {
      navigation.heading = {
        text: parentPage.title,
        link: getRelativeUrl(parentPage),
      };
    }
  }

  navigation.menu.forEach((item) => {
    if (item.isCurrent && submenu.length > 0) {
      item.submenu = submenu;
    }

    if (isCurrentPageDeepestLevel && item.id === currentPage.parentPageId) {
      item.submenu = currentPageWithSiblings;
    }
  });

  return { breadcrumbs, navigation };
}
