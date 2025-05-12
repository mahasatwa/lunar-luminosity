import { createClient } from 'contentful';
import type { Entry, EntryCollection, EntrySkeletonType } from 'contentful';

const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

export interface NavigationLink {
  title: string;
  href: string;
  submenu?: NavigationLink[];
}

interface NavigationLinkSkeleton extends EntrySkeletonType {
  contentTypeId: 'navigationLink';
  fields: {
    title: string;
    href: string;
    submenu?: Entry<NavigationLinkSkeleton>[];
  };
}

interface NavigationSkeleton extends EntrySkeletonType {
  contentTypeId: 'navigation';
  fields: {
    globalLinks: Entry<NavigationLinkSkeleton>[];
    localLinks: Entry<NavigationLinkSkeleton>[];
  };
}

interface PageSkeleton extends EntrySkeletonType {
  contentTypeId: 'page';
  fields: {
    title: string;
    slug: string;
    content: any; // This will be refined based on your content model
  };
}

export interface PageContent {
  title: string;
  slug: string;
  content: any;
}

export async function getNavigation(): Promise<{
  globalLinks: NavigationLink[];
  localLinks: NavigationLink[];
}> {
  try {
    const response = await client.getEntries<NavigationSkeleton>({
      content_type: 'navigation',
      include: 2,
    });

    const navigationData = response.items[0]?.fields;
    
    const transformLink = (entry: Entry<NavigationLinkSkeleton>): NavigationLink => ({
      title: entry.fields.title,
      href: entry.fields.href,
      submenu: entry.fields.submenu?.map(transformLink),
    });

    return {
      globalLinks: navigationData?.globalLinks.map(transformLink) || [],
      localLinks: navigationData?.localLinks.map(transformLink) || [],
    };
  } catch (error) {
    console.error('Error fetching navigation:', error);
    return {
      globalLinks: [],
      localLinks: [],
    };
  }
}

export async function getPageContent(slug: string): Promise<PageContent | null> {
  try {
    const response = await client.getEntries<PageSkeleton>({
      content_type: 'page',
      'fields.slug': slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    const page = response.items[0];
    return {
      title: page.fields.title,
      slug: page.fields.slug,
      content: page.fields.content,
    };
  } catch (error) {
    console.error('Error fetching page content:', error);
    return null;
  }
} 