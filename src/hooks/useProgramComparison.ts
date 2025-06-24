import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
  useRef,
} from "react";
import { Program } from "design-system/types/exed-schema";
import { useDataLayer } from "frontend/hooks/use-data-layer";

export interface ProgramToCompare extends Program {
  activeSessionIndex?: number;
}

type ProgramComparisonContext = [
  Array<ProgramToCompare>,
  Dispatch<SetStateAction<Array<ProgramToCompare>>>,
];

const Context = createContext<ProgramComparisonContext>([[], (s) => s]);

interface ProgramComparisonProviderProps {
  children: ReactNode;
  programs: Array<Program>;
}

export function ProgramComparisonProvider({
  children,
  programs,
}: ProgramComparisonProviderProps) {
  const [programsToCompare, setProgramsToCompare] = useState<
    Array<ProgramToCompare>
  >([]);
  const { pushDataLayer } = useDataLayer();

  useEffect(() => {
    const getProgramsByIds = (ids: Array<string>) => {
      return ids
        .map((id) =>
          programs.find((p) => p.id === id.replace("coursePage-", "")),
        )
        .filter((p): p is ProgramToCompare => !!p);
    };

    const urlParams = new URLSearchParams(window.location.search);
    const programParams = urlParams.get("programs");
    if (!programParams) return;

    const ids = programParams.split(",");

    const initialProgramsToCompare = getProgramsByIds(ids).map((program) => ({
      ...program,
      activeSessionIndex: 0,
    }));

    setProgramsToCompare(initialProgramsToCompare);
  }, [programs]);

  const comparedPrograms = useRef<string>("");
  const prevUrl = useRef<string>();

  // Update programs query param when programsToCompare updates
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const programParams = urlParams.get("programs");
    let programsChanged = false;
    if (!programParams || !programsToCompare.length) return;

    const updatedProgramIds = programsToCompare.map((p) => p.id).join(",");
    urlParams.delete("programs");
    urlParams.set("programs", updatedProgramIds);

    // Are all the programs the same? Order is not important
    if (
      comparedPrograms.current.split(",").sort().join() ===
      updatedProgramIds.split(",").sort().join()
    ) {
      return;
    } else {
      programsChanged = true;
    }

    if (programsChanged) {
      pushDataLayer({
        /* eslint-disable camelcase */
        event: "program_finder_comparison",
        event_data: {
          compared_programs: updatedProgramIds,
        },
        /* eslint-enable camelcase */
      });
      comparedPrograms.current = updatedProgramIds;
    }

    const queryParams = urlParams.toString();
    const newUrl = new URL(
      `${window.location.origin}${window.location.pathname}?${queryParams}`,
    );

    if (prevUrl.current && prevUrl.current !== newUrl.href) {
      window.history.pushState({}, "", newUrl.href);
    }
    prevUrl.current = newUrl.href;
  }, [programsToCompare, pushDataLayer]);

  useEffect(() => {
    // Handle browser back button
    window.onpopstate = (event) => {
      if (event.state) {
        history.go(0);
      }
    };
  });

  return (
    <Context.Provider value={[programsToCompare, setProgramsToCompare]}>
      {children}
    </Context.Provider>
  );
}

export function useProgramComparison() {
  const [programsToCompare, setProgramsToCompare] = useContext(Context);

  const addProgramToCompare = (program: ProgramToCompare) => {
    setProgramsToCompare((old) => [...old, program]);
  };

  const removeProgramToCompare = (program: ProgramToCompare) => {
    setProgramsToCompare((old) => old.filter((p) => p.id !== program.id));
  };

  const reorderProgramToCompare = (
    program: ProgramToCompare,
    direction: number,
  ) => {
    setProgramsToCompare((programsToCompare) => {
      const reordered = programsToCompare;
      const indexOfProgramToMove = programsToCompare.findIndex(
        (p) => p.id === program.id,
      );
      reordered.splice(indexOfProgramToMove, 1);
      reordered.splice(indexOfProgramToMove + direction, 0, program);

      return [...reordered];
    });
  };

  return {
    programsToCompare,
    setProgramsToCompare,
    addProgramToCompare,
    removeProgramToCompare,
    reorderProgramToCompare,
  };
}
