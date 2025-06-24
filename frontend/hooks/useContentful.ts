import type * as ContentfulLiveImport from "@contentful/live-preview/react";
import { editAttributesFactory } from "frontend/contentful/lib/edit-attributes-factory";
import { resolveAssets } from "frontend/contentful/lib/resolve-assets";
import { resolveEntityLink } from "frontend/contentful/lib/resolve-entity-link";
import { resolveEntityName } from "frontend/contentful/lib/resolve-entity-name";
import { resolveEntries } from "frontend/contentful/lib/resolve-entries";
import {
  ResolveEntriesOptions,
  resolveEntryUrl,
} from "frontend/contentful/lib/resolve-entry-url";
import {
  resolveAsset,
  resolveEntry,
} from "frontend/contentful/lib/resolve-includes";
import { resolveIsPersonPastHbsFaculty } from "frontend/contentful/lib/resolve-is-person-past-hbs-faculty";
import { AppUrlEntry } from "frontend/contentful/schema/app";
import {
  OrganizationEntry,
  PersonEntry,
  PersonWrapperEntry,
  SchoolLeadershipPersonDetailsEntry,
} from "frontend/contentful/schema/semantics";
import {
  AssetRef,
  ContentfulAsset,
  ContentfulEntry,
  EntryRef,
} from "frontend/contentful/schema/sys";
import dynamic from "next/dynamic";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePageProps } from "./use-page-props";

const ContentfulToolbox = dynamic(
  () =>
    import(
      "frontend/contentful/components/utils/contentful-toolbox/contentful-toolbox"
    ).then((e) => ({
      default: e.ContentfulToolbox,
    })), // do not ssr - will break due to portal rendering
  { ssr: false },
);

interface ContentfulLivePreviewProps {
  isPreview?: boolean;
  children: ReactNode;
}

interface ContentfulEditorState {
  isPageLoaded: boolean;
  isEditorMode: boolean;
  setIsEditorMode: Dispatch<SetStateAction<boolean>>;
  useContentfulLiveUpdates: typeof ContentfulLiveImport.useContentfulLiveUpdates;
  useContentfulInspectorMode: typeof ContentfulLiveImport.useContentfulInspectorMode;
  ContentfulLivePreviewProvider?: typeof ContentfulLiveImport.ContentfulLivePreviewProvider;
}

const createInitialState = (): ContentfulEditorState => ({
  isPageLoaded: false,
  isEditorMode: false,
  setIsEditorMode: (s) => s,
  useContentfulLiveUpdates: (e: ContentfulEntry) => e,
  useContentfulInspectorMode: () => () => null,
});

type ContentfulEditorContextState = [
  ContentfulEditorState,
  Dispatch<SetStateAction<ContentfulEditorState>>,
];

const ContentfulEditorContext = createContext<ContentfulEditorContextState>([
  createInitialState(),
  (s) => s,
]);

export function ContentfulLivePreview({
  isPreview,
  children,
}: ContentfulLivePreviewProps) {
  const [state, setState] =
    useState<ContentfulEditorState>(createInitialState());

  useEffect(() => {
    // Contentful site preview is inside an iframe
    const isEditorMode = isPreview ? window.self !== window.top : false;
    setState((state) => ({ ...state, isPageLoaded: true, isEditorMode }));
  }, [isPreview]);

  useEffect(() => {
    // lazy import the hooks
    if (state.isEditorMode && !state.ContentfulLivePreviewProvider) {
      void (async () => {
        try {
          // we want to only import the live-preview library when we are in editor mode
          const lib = await import("@contentful/live-preview/react");

          setState((state) => ({
            ...state,
            ContentfulLivePreviewProvider: lib.ContentfulLivePreviewProvider,
            useContentfulInspectorMode: lib.useContentfulInspectorMode,
            useContentfulLiveUpdates: lib.useContentfulLiveUpdates,
          }));
        } catch (e) {
          console.error(e);
        }
      })();
    }
  }, [state]);

  return (
    <ContentfulEditorContext.Provider value={[state, setState]}>
      {state.ContentfulLivePreviewProvider ? (
        <state.ContentfulLivePreviewProvider
          locale="en-US"
          debugMode
          enableInspectorMode
          enableLiveUpdates
          targetOrigin="https://app.contentful.com"
        >
          {children}
        </state.ContentfulLivePreviewProvider>
      ) : (
        children
      )}

      {isPreview && <ContentfulToolbox />}
    </ContentfulEditorContext.Provider>
  );
}

export type GetEntryUrl = <E extends AppUrlEntry>(
  entry?: EntryRef<E>,
  options?: ResolveEntriesOptions,
) => string | undefined;

export type GetEntry = <E extends ContentfulEntry>(
  ref?: EntryRef<E>,
) => E | undefined;

export function useContentful() {
  const [state] = useContext(ContentfulEditorContext);

  const {
    contentful,
    includes,
    request,
    site,
    locale: entryLocale,
    defaultLocale,
    supportedLocales,
  } = usePageProps();

  const createEditAttributes = editAttributesFactory(state.isEditorMode);

  const createContentfulHref = (path?: string) => {
    return `https://app.contentful.com/spaces/${contentful.spaceId}/environments/${contentful.environment}${path}`;
  };

  const getEntry: GetEntry = useCallback(
    (ref) => {
      return resolveEntry(includes, ref);
    },
    [includes],
  );

  const getSite = () => getEntry(site);

  const getEntries = useCallback(
    <E extends ContentfulEntry>(refs?: Array<EntryRef<E>>): Array<E> => {
      return resolveEntries({ refs, includes });
    },
    [includes],
  );

  const getAsset = (ref?: AssetRef) => {
    return resolveAsset(includes, ref);
  };

  const getAssets = (refs?: Array<AssetRef>): Array<ContentfulAsset> => {
    return resolveAssets({ refs, includes });
  };

  const getEntryUrl: GetEntryUrl = (
    entry,
    { excludeProtocol, absolute, locale } = { locale: entryLocale },
  ) => {
    return resolveEntryUrl({
      domain: request.domain,
      entry: getEntry(entry),
      includes,
      excludeProtocol,
      absolute,
      locale,
      defaultLocale,
      supportedLocales,
    });
  };

  const getPersonLink = (
    entry?: EntryRef<
      | PersonEntry
      | PersonWrapperEntry
      | SchoolLeadershipPersonDetailsEntry
      | OrganizationEntry
    >,
  ): string => {
    return resolveEntityLink({
      entry,
      includes,
      domain: request.domain,
      site: getSite(),
    });
  };

  const getEntityName = (
    entry?: EntryRef<
      | PersonEntry
      | PersonWrapperEntry
      | SchoolLeadershipPersonDetailsEntry
      | OrganizationEntry
    >,
  ): string => {
    return resolveEntityName({ entry, includes });
  };

  const getIsPersonPastHbsFaculty = (
    entry?: EntryRef<PersonEntry | PersonWrapperEntry>,
  ): boolean => {
    return resolveIsPersonPastHbsFaculty({ entry, includes });
  };

  return {
    ...contentful,
    site: getSite(),
    getEntry,
    getAsset,
    getAssets,
    getEntries,
    getEntryUrl,
    getPersonLink,
    getEntityName,
    getIsPersonPastHbsFaculty,
    createEditAttributes,
    createContentfulHref,
    isPageLoaded: state.isPageLoaded,
    isEditorMode: state.isEditorMode,
    useContentfulLiveUpdates: state.useContentfulLiveUpdates,
    useContentfulInspectorMode: state.useContentfulInspectorMode,
  };
}
