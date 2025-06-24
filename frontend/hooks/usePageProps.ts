import { resolveEntry } from "frontend/contentful/lib/resolve-includes";
import type { PageProps } from "frontend/types";
import { PropsWithChildren, createContext, useContext } from "react";

const PagePropsContext = createContext<PageProps>({
  map: [],
  errors: [],
  fetches: [],
  singletons: {},
  contentful: {},
  includes: { Asset: [], Entry: [] },
  request: {
    method: "get",
    path: "/",
    query: {},
    cookies: {},
    headers: {},
    host: "www.hbs.edu",
    domain: "www",
    env: "production",
    search: "",
  },
  locale: "en-us",
  defaultLocale: "en-us",
  supportedLocales: ["en-us", "zh-cn"],
  hasTranslations: false,
});

export function PagePropsProvider({
  children,
  ...ctx
}: PropsWithChildren<PageProps>) {
  const entry = resolveEntry(ctx.includes, ctx.entry);

  const map = ctx.map.sort((a, b) => {
    if (a.order && !b.order) return -1;
    if (b.order && !a.order) return 1;
    if (a.order && b.order && a.order !== b.order) {
      return a.order > b.order ? 1 : -1;
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <PagePropsContext.Provider value={{ ...ctx, entry, map }}>
      {children}
    </PagePropsContext.Provider>
  );
}

export function usePageProps() {
  return useContext(PagePropsContext);
}
    