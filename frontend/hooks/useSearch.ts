import {
  ModernSearchHit,
  SearchHit,
  SearchQuery,
  SearchResults,
} from "frontend/types";
import { UseFetchProps, useFetch } from "./use-fetch";

type UseSearchArgs = SearchQuery | null | undefined;

const searchApiUrl = "/api/search/query";

export function createSearchParams(search: UseSearchArgs) {
  if (search?.query === undefined) return {};

  return {
    from: search?.from?.toString(),
    size: search?.size?.toString(),
    index: search.index,
    query: search.query,
    facets: search?.facets?.join(","),
    filters: search?.filters,
    sort: search?.sort,
    facetLimit: search?.facetLimit?.toString(),
  };
}

interface UseSearchOptions {
  dedupe?: boolean;
  defaultSize?: number;
}

export function useSearch<T extends object = SearchHit>(
  search: UseSearchArgs,
  options: UseSearchOptions = {},
) {
  let size = search?.size;

  if (options.dedupe) {
    size = (size ?? 25) + 10; // add extra results to dedupe
  }

  const fetchProps: UseFetchProps = {
    url: searchApiUrl,
    params: createSearchParams({ ...search, size }),
  };

  const result = useFetch<SearchResults<T>>(fetchProps);

  if (options.dedupe && result.data?.hits) {
    dedupeSearchData({ search, options, data: result.data });
  }

  return result;
}

export function useMultiSearch<T extends object = ModernSearchHit>(
  search: Array<UseSearchArgs>,
  options: UseSearchOptions = {},
) {
  const fetchProps: UseFetchProps = {
    method: "POST",
    url: searchApiUrl,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      queries: search.map((s) => {
        let size = s?.size;
        if (options.dedupe) size = (size ?? 25) + 10;
        return createSearchParams({ ...(s ?? {}), size });
      }),
    }),
  };

  const result = useFetch<Array<SearchResults<T>>>(fetchProps);

  if (options.dedupe && result.data) {
    result.data.forEach((data, i) =>
      dedupeSearchData<T>({ options, data, search: search[i] }),
    );
  }

  return result;
}

interface DedupeSearchDataArgs<S extends object = SearchHit> {
  data: SearchResults<S>;
  search: UseSearchArgs;
  options: UseSearchOptions;
}

function dedupeSearchData<S extends object = SearchHit>({
  data,
  search,
  options,
}: DedupeSearchDataArgs<S>) {
  const deduped: Array<S> = [];
  const size = search?.size ?? options.defaultSize ?? 25;

  for (const hit of data.hits) {
    const exists = deduped.some((item) => {
      if ("id" in item && "id" in hit && item.id === hit.id) return true;
      if (
        "HBSTitle" in item &&
        "HBSTitle" in hit &&
        item.HBSTitle === hit.HBSTitle
      ) {
        return true;
      }
      return false;
    });

    if (!exists) deduped.push(hit);
    if (deduped.length >= size) break;
  }

  data.hits = deduped;
}
