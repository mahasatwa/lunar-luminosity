import { useEffect, useRef } from 'react';

const useScrollHandler = (
    onScroll: (isScrolled: boolean) => void,
    thresholdBottom = 10,   // Jika scrollY > 10px → scrolled
    thresholdTop = 80       // Jika scrollY <= 80px → back to top
) => {
    const lastScrollY = useRef<number | undefined>(undefined);

    useEffect(() => {
        const handler = () => {
            const currentScrollY = window.scrollY;

            if (lastScrollY.current === undefined) {
                lastScrollY.current = currentScrollY;
                return;
            }

            const isScrolled = currentScrollY > thresholdBottom;
            const nearTop = currentScrollY <= thresholdTop;

            // Prioritas: jika dekat dengan top, anggap tidak scrolled
            onScroll(nearTop ? false : isScrolled);
            lastScrollY.current = currentScrollY;
        };

        const throttledHandler = throttle(handler, 100);
        window.addEventListener('scroll', throttledHandler, { passive: true });

        handler(); // Trigger initial state

        return () => {
            window.removeEventListener('scroll', throttledHandler);
        };
    }, [onScroll, thresholdBottom, thresholdTop]);
};

// Fungsi throttle versi performa tinggi
const throttle = <T extends (...args: any[]) => void>(
    func: T,
    limit: number
) => {
    let inThrottle: boolean;
    return function (...args: Parameters<T>) {
        if (!inThrottle) {
            inThrottle = true;
            requestAnimationFrame(() => {
                func(...args);
                inThrottle = false;
            });
        }
    };
};

export default useScrollHandler;