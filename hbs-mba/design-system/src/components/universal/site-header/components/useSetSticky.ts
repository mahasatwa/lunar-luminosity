import { useResizeObserver } from "design-system/hooks/use-resize-observer";
import { useCallback, useEffect, useState } from "react";

type useSetSticky = (props: {
    defaultValue: boolean;
    isWorkingKnowledge?: boolean;
}) => boolean;
export const useSetSticky: useSetSticky = ({
    defaultValue,
    isWorkingKnowledge,
}) => {
    const [sticky, setSticky] = useState(defaultValue);

    const { width: windowWidth } = useResizeObserver({
        current: typeof document !== "undefined" ? document.body : null,
    });

    const isSticky = useCallback(() => {
        const headerHeight = isWorkingKnowledge ? 160 : 100;
        const isDesktop =
            typeof window !== "undefined" && window.innerWidth >= 1024;
        setSticky(window.scrollY >= headerHeight && isDesktop);
        // React complains about windowWidth below
    }, [isWorkingKnowledge, windowWidth]);

    useEffect(() => {
        if (document.readyState === "complete") {
            isSticky();
        }
    }, [isSticky]);

    useEffect(() => {
        window.addEventListener("load", isSticky);
        return () => window.removeEventListener("load", isSticky);
    }, [isSticky]);

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, [isSticky]);

    return sticky;
};
