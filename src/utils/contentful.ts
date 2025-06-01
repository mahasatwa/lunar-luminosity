// src/utils/contentful.ts

import { createClient } from 'contentful';
import type { Entry, EntryCollection, EntrySkeletonType } from 'contentful';

// This sets up the Contentful client, keep this.
const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
});

// --- Type Definitions (Keep these) ---
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

// Hero Section Types
interface HeroSkeleton extends EntrySkeletonType {
  contentTypeId: 'hero';
  fields: {
    headline: string;
    subhead: string;
    mainText: string;
    backgroundImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

// Program Types
interface ProgramSkeleton extends EntrySkeletonType {
  contentTypeId: 'program';
  fields: {
    title: string;
    content: string;
    links: {
      text: string;
      url: string;
    }[];
  };
}

// Academic Experience Types
interface AcademicExperienceSkeleton extends EntrySkeletonType {
  contentTypeId: 'academicExperience';
  fields: {
    title: string;
    tagline: string;
    videoUrl: string;
    teachingMethods: string;
    faculty: string;
    facilities: string;
  };
}

// Campus Life Types
interface CampusLifeSkeleton extends EntrySkeletonType {
  contentTypeId: 'campusLife';
  fields: {
    title: string;
    content: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    ctaText: string;
    ctaLink: string;
  };
}

// News Types
interface NewsSkeleton extends EntrySkeletonType {
  contentTypeId: 'news';
  fields: {
    title: string;
    summary: string;
    date: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    slug: string;
  };
}

// Event Types
interface EventSkeleton extends EntrySkeletonType {
  contentTypeId: 'event';
  fields: {
    title: string;
    type: 'openHouse' | 'infoSession' | 'webinar' | 'entranceTest';
    date: string;
    time: string;
    description: string;
    registrationLink: string;
  };
}

// Export interfaces for component use
export interface Hero {
  headline: string;
  subhead: string;
  mainText: string;
  backgroundImageUrl: string;
}

export interface Program {
  title: string;
  content: string;
  links: {
    text: string;
    url: string;
  }[];
}

export interface AcademicExperience {
  title: string;
  tagline: string;
  videoUrl: string;
  teachingMethods: string;
  faculty: string;
  facilities: string;
}

export interface CampusLife {
  title: string;
  content: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

export interface News {
  title: string;
  summary: string;
  date: string;
  imageUrl: string;
  slug: string;
}

export interface Event {
  title: string;
  type: 'openHouse' | 'infoSession' | 'webinar' | 'entranceTest';
  date: string;
  time: string;
  description: string;
  registrationLink: string;
}
// --- End Type Definitions ---


// --- Modified Fetch Functions (Contentful calls commented out) ---
export async function getNavigation(): Promise<{
  globalLinks: NavigationLink[];
  localLinks: NavigationLink[];
}> {
  try {
    // const response = await client.getEntries<NavigationSkeleton>({
    //   content_type: 'navigation',
    //   include: 2,
    // });

    console.warn("Contentful navigation fetching is commented out.");

    // const navigationData = response.items[0]?.fields;

    // const transformLink = (entry: Entry<NavigationLinkSkeleton>): NavigationLink => {
    //   // Cast entry.fields to the expected type
    //   const fields = entry.fields as NavigationLinkSkeleton['fields'];
    //   return {
    //     title: fields.title,
    //     href: fields.href,
    //     // Safely call map using optional chaining on the array
    //     submenu: fields.submenu?.map(transformLink),
    //   };
    // };

    // // Fix: Check if navigationData exists and then directly access links with fallback
    // if (navigationData) {
    //   return {
    //     // Explicitly assert the type to ensure .map is recognized
    //     globalLinks: (navigationData.globalLinks as Entry<NavigationLinkSkeleton>[] || []).map(transformLink), // Explicit assertion
    //     localLinks: (navigationData.localLinks as Entry<NavigationLinkSkeleton>[] || []).map(transformLink), // Explicit assertion
    //   };
    // } else {
    //   return {
    //     globalLinks: [],
    //     localLinks: [],
    //   };
    // }

    // Return empty data structure as a placeholder
    return {
      globalLinks: [],
      localLinks: [],
    };

  } catch (error) {
    console.error('Error fetching navigation:', error);
    // Still return empty data on error, even if call is commented out
    return {
      globalLinks: [],
      localLinks: [],
    };
  }
}

export async function getPageContent(slug: string): Promise<PageContent | null> {
  try {
    // const response = await client.getEntries<PageSkeleton>({
    //   content_type: 'page',
    //   // Cast to any to bypass strict type checking for 'fields.slug'
    //   'fields.slug': slug,
    //   limit: 1,
    // } as any);

    console.warn(`Contentful page content fetching for slug "${slug}" is commented out.`);

    // if (response.items.length === 0) {
    //   return null;
    // }

    // // Safely access response.items[0] and cast its fields
    // const pageEntry = response.items[0];
    // if (!pageEntry) return null;
    // const pageFields = pageEntry.fields as PageSkeleton['fields'];

    // return {
    //   title: pageFields.title,
    //   slug: pageFields.slug,
    //   content: pageFields.content,
    // };

    // Return null as a placeholder
    return null;

  } catch (error) {
    console.error('Error fetching page content:', error);
    return null;
  }
}

// get All Slugs from Contentful
export async function getAllSlugs() {
  try {
    // const entries = await client.getEntries({
    //     content_type: 'page', // Match your page content type
    //     select: ['fields.slug'], // Only fetch the slug field
    //     limit: 1000, // Adjust limit if you have many pages
    //     // Add any other filters if needed
    // });

    console.warn("Contentful slug fetching is commented out.");

    // // Extract slugs, handle cases where slug might be missing or is the homepage ''
    // const slugs = entries.items
    //     .map(item => item.fields.slug)
    //     .filter(slug => slug !== undefined); // Filter out entries without a slug field

    // // Ensure the homepage slug (which is often represented as '' or null in CMS)
    // // is included. If your CMS uses '', add it. If you need a root path,
    // // ensure your mapping in getStaticPaths handles `undefined`.
    // // A common pattern is to include an entry with slug '' for the root.
    // // If your CMS doesn't have an explicit '' slug entry for the home page,
    // // you might manually add undefined to the slugs array if needed for getStaticPaths:
    // // slugs.push(undefined); // Add this if you need the root path `/` and your CMS doesn't provide a '' slug.

    // console.log("Fetched Slugs:", slugs); // Log to check what you're getting

    // return slugs;

    // Return an empty array or a default slug list if needed for testing
    return [];

  } catch (error) {
    console.error("Error fetching slugs from Contentful:", error);
    return []; // Return empty array on error
  }
}

// Fetch functions
export async function getHero(): Promise<Hero | null> {
  try {
    // const response = await client.getEntries<HeroSkeleton>({
    //   content_type: 'hero',
    //   limit: 1,
    // });

    console.warn("Contentful hero fetching is commented out.");

    // // Add check for response.items[0] and cast its fields
    // if (!response.items.length || !response.items[0]) return null;
    // const heroFields = response.items[0].fields as HeroSkeleton['fields'];

    // return {
    //   headline: heroFields.headline,
    //   subhead: heroFields.subhead,
    //   mainText: heroFields.mainText,
    //   // Safely access nested properties with optional chaining and provide default
    //   backgroundImageUrl: heroFields.backgroundImage?.fields?.file?.url || '',
    // };

    // Return null as a placeholder
    return null;

  } catch (error) {
    console.error('Error fetching hero:', error);
    return null;
  }
}

export async function getPrograms(): Promise<Program[]> {
  try {
    // const response = await client.getEntries<ProgramSkeleton>({
    //   content_type: 'program',
    // });

    console.warn("Contentful programs fetching is commented out.");

    // // Cast item.fields inside the map function to the expected type
    // return response.items.map(item => {
    //   const fields = item.fields as ProgramSkeleton['fields'];
    //   return {
    //     title: fields.title,
    //     content: fields.content,
    //     links: fields.links,
    //   };
    // });

    // Return an empty array as a placeholder
    return [];

  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}

export async function getAcademicExperience(): Promise<AcademicExperience | null> {
  try {
    // const response = await client.getEntries<AcademicExperienceSkeleton>({
    //   content_type: 'academicExperience',
    //   limit: 1,
    // });

    console.warn("Contentful academic experience fetching is commented out.");

    // // Add check for response.items[0] and cast its fields
    // if (!response.items.length || !response.items[0]) return null;
    // const academicExperienceFields = response.items[0].fields as AcademicExperienceSkeleton['fields'];

    // return academicExperienceFields;

    // Return null as a placeholder
    return null;

  } catch (error) {
    console.error('Error fetching academic experience:', error);
    return null;
  }
}

export async function getCampusLife(): Promise<CampusLife | null> {
  try {
    // const response = await client.getEntries<CampusLifeSkeleton>({
    //   content_type: 'campusLife',
    //   limit: 1,
    // });

    console.warn("Contentful campus life fetching is commented out.");

    // // Add check for response.items[0] and cast its fields
    // if (!response.items.length || !response.items[0]) return null;
    // const campusLifeFields = response.items[0].fields as CampusLifeSkeleton['fields'];

    // return {
    //   title: campusLifeFields.title,
    //   content: campusLifeFields.content,
    //   // Safely access nested properties with optional chaining and provide default
    //   imageUrl: campusLifeFields.image?.fields?.file?.url || '',
    //   ctaText: campusLifeFields.ctaText,
    //   ctaLink: campusLifeFields.ctaLink,
    // };

    // Return null as a placeholder
    return null;

  } catch (error) {
    console.error('Error fetching campus life:', error);
    return null;
  }
}

export async function getNews(limit = 3): Promise<News[]> {
  try {
    // const response = await client.getEntries<NewsSkeleton>({
    //   content_type: 'news',
    //   limit,
    //   // Wrap order string in array and cast to any
    //   order: ['-fields.date'] as any,
    // });

    console.warn("Contentful news fetching is commented out.");

    // // Cast item.fields inside the map function to the expected type
    // return response.items.map(item => {
    //   const fields = item.fields as NewsSkeleton['fields'];
    //   return {
    //     title: fields.title,
    //     summary: fields.summary,
    //     date: fields.date,
    //     // Safely access nested properties with optional chaining and provide default
    //     imageUrl: fields.image?.fields?.file?.url || '',
    //     slug: fields.slug,
    //   };
    // });

    // Return an empty array as a placeholder
    return [];

  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

export async function getEvents(): Promise<Event[]> {
  try {
    // const response = await client.getEntries<EventSkeleton>({
    //   content_type: 'event',
    //   // Wrap order string in array and cast to any
    //   order: ['fields.date'] as any,
    // });

    console.warn("Contentful events fetching is commented out.");

    // return response.items.map(item => item.fields);

    // Return an empty array as a placeholder
    return [];

  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}