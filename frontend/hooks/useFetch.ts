import { CONTENTFUL_ENV_PARAM } from "frontend/lib/constants";
import useSWR from "swr";

class FetchError extends Error {
  status = 500;
  info: unknown = {};
}

export type UseFetchPropsValue = UseFetchProps | null | false | undefined;

export interface UseFetchProps {
  url: string;
  method?: string;
  params?: Record<string, string | undefined>;
  headers?: Record<string, string>;
  body?: string;
}

export async function fetcher({
  url,
  method,
  params,
  headers,
  body,
}: UseFetchProps) {
  const searchParams = new URLSearchParams();
  let hasSearchParams = false;

  if (params) {
    Object.entries(params).forEach(([key, val]) => {
      if (val) {
        searchParams.set(key, val);
        hasSearchParams = true;
      }
    });
  }

  if (url.startsWith("/")) {
    const environmentParameter = new URL(location.href).searchParams.get(
      CONTENTFUL_ENV_PARAM,
    );
    // if the environment is set, then send it, else fallback to the default
    if (environmentParameter) {
      searchParams.set("environment", environmentParameter); // ensures the backend api request uses the same contentful env as frontend
    }
  }

  if (hasSearchParams) url += "?" + searchParams.toString();

  const res = await fetch(url, { method, headers, body });

  if (!res.ok) {
    const error = new FetchError("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = (await res.json()) as unknown;
    error.status = res.status;
    // re-throw error to trigger error on useSWR
    throw error;
  }

  return res.json();
}

export function useFetch<T = unknown, E = unknown>(props: UseFetchPropsValue) {
  return useSWR<T, E>(props || null, fetcher, {
    revalidateOnMount: true,

    refreshInterval: 0,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    revalidateOnReconnect: false,
    revalidateIfStale: false,
    revalidateOnFocus: false,

    errorRetryCount: 3,
    errorRetryInterval: 1000,

    // return the previous value (if any) when revalidating instead of `undefined`
    keepPreviousData: true,

    onSuccess: (data, key) => {
      console.info("useFetch success", { key, data });
    },

    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      console.info("useFetch error", { key, error, props, retryCount });

      // Never retry on 404.
      if ((error as FetchError).status === 404) return;

      // Only retry up to 3 times.
      if (retryCount >= 3) return;

      // Retry after 5 seconds.
      setTimeout(() => {
        console.info("useFetch retry", { key, props, retryCount });
        void revalidate({ retryCount });
      }, 5000);
    },
  });
}
