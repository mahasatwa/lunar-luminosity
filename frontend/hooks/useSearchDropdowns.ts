import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useContentful } from "./use-contentful";
import { EntryRef } from "frontend/contentful/schema/sys";
import { SelectTopperEntry } from "frontend/contentful/schema/toppers";
import { ArchivePageTopperEntry } from "frontend/contentful/schema/pages";
import { isContentType } from "frontend/contentful/lib/is-content-type";
import { useSearchParams } from "next/navigation";

interface SearchDropdownsContext {
  selectedOptions: Record<string, string>;
  onSelectedOptionChange: (key: string, value: string) => void;
  resetSelectedOptions: () => void;
  getSelectedOptionsESFilters: (filters: string) => string | undefined;
}

export const SearchDropdownsContext = createContext<SearchDropdownsContext>({
  selectedOptions: {},
  onSelectedOptionChange: () => null,
  resetSelectedOptions: () => null,
  getSelectedOptionsESFilters: () => undefined,
});

export const useSearchDropdowns = () => {
  return useContext(SearchDropdownsContext);
};

interface SearchDropdownsProviderProps {
  topper?: EntryRef<ArchivePageTopperEntry>;
}

/**
 * Escapes special characters in a field value for AWS OpenSearch query_string syntax.
 * @param value - The user-provided field value to be escaped.
 * @returns The escaped field value.
 */
function escapeFieldValue(value: string): string {
  const specialCharacters = [
    "+",
    "-",
    "&",
    "|",
    "!",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    "^",
    '"',
    "~",
    "*",
    "?",
    ":",
    "\\",
    "/",
    " ",
  ];

  let escapedValue = "";

  for (const char of value) {
    if (specialCharacters.includes(char)) {
      escapedValue += `\\${char}`;
    } else {
      escapedValue += char;
    }
  }

  return escapedValue;
}

export const SearchDropdownsProvider = ({
  topper,
  children,
}: PropsWithChildren<SearchDropdownsProviderProps>) => {
  const searchParams = useSearchParams();
  const { getEntry, getEntries } = useContentful();
  const topperEntry = useMemo(() => getEntry(topper), [getEntry, topper]);
  const isSelectTopper = isContentType<SelectTopperEntry>(
    "selectTopper",
    topperEntry,
  );

  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >(
    isSelectTopper && topperEntry.fields.facets?.length
      ? Object.fromEntries(
          getEntries(topperEntry.fields.facets)?.map((facet) => [
            facet.fields.field || "",
            facet.fields.field
              ? searchParams.get(facet.fields.field) || ""
              : "",
          ]),
        )
      : {},
  );
  const prevUrl = useRef<string>();

  useEffect(() => {
    const url = new URL(window.location.href);

    Object.entries(selectedOptions).forEach(([key, value]) => {
      if (value) {
        url.searchParams.set(key, value);
      } else {
        url.searchParams.delete(key);
      }
    });

    if (
      Object.keys(selectedOptions).length > 0 &&
      prevUrl.current !== url.href
    ) {
      window.history.pushState({}, "", url);
      prevUrl.current = url.href;
    }
  }, [selectedOptions]);

  const getSelectedOptionsESFilters = (filters: string) => {
    if (!isSelectTopper) {
      return;
    }

    let newFilters = "";

    for (const [key, value] of Object.entries(selectedOptions)) {
      if (value) {
        const prefix = filters ? " AND " : "";
        if (!key.includes("[")) {
          newFilters += `${prefix}${key}:"${value}"`;
        }
      }
    }

    const combinedFilters: Record<string, Array<string | undefined>> = {};
    getEntries(topperEntry.fields.facets)?.forEach((facet) => {
      if (facet.fields.field && facet.fields.field.includes("[")) {
        const matches = facet.fields.field.match(/(.*?)\[(\d+)\]/);
        if (matches) {
          const field = matches[1]!;

          if (!combinedFilters[field]) {
            combinedFilters[field] = [];
          }

          combinedFilters[field]?.push(selectedOptions[facet.fields.field]);
        }
      }
    });

    let combinedFilterStr = "";
    for (const [key, values] of Object.entries(combinedFilters)) {
      if (values.length > 0 && values.some((value) => !!value)) {
        combinedFilterStr += `${key}:`;
        for (const value of values) {
          const index = values.indexOf(value);

          if (index === 0) {
            if (value) {
              combinedFilterStr += escapeFieldValue(`${value}:`);
            } else {
              combinedFilterStr += `*\\:`;
            }
          } else {
            if (value) {
              combinedFilterStr += escapeFieldValue(value);
            } else {
              combinedFilterStr += "*";
            }
          }
        }
      }
    }

    if (combinedFilterStr) {
      const prefix = filters ? " AND " : "";
      newFilters += `${prefix}${combinedFilterStr}`;
    }

    return newFilters;
  };

  return (
    <SearchDropdownsContext.Provider
      value={{
        selectedOptions,
        getSelectedOptionsESFilters,
        onSelectedOptionChange: (key: string, value: string) => {
          setSelectedOptions((prev) => ({ ...prev, [key]: value }));
        },
        resetSelectedOptions: () => {
          setSelectedOptions((prev) =>
            Object.fromEntries(Object.keys(prev).map((key) => [key, ""])),
          );
        },
      }}
    >
      {children}
    </SearchDropdownsContext.Provider>
  );
};
