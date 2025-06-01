// src/hooks/useBreakpoint.ts

import { useState, useEffect } from 'react';

type Breakpoint = 'mobile' | 'tabletVertical' | 'tabletHorizontal' | 'desktop';

const breakpoints = {
    mobile: 0,
    tabletVertical: 768, // Contoh breakpoint untuk tablet potret
    tabletHorizontal: 1024, // Contoh breakpoint untuk tablet landscape / desktop awal
    desktop: 1280, // Contoh breakpoint untuk desktop
};

const getBreakpoint = (width: number): Breakpoint => {
    if (width < breakpoints.tabletVertical) {
        return 'mobile';
    } else if (width < breakpoints.tabletHorizontal) {
        // Anda mungkin perlu logika tambahan di sini jika ingin membedakan tablet potret dan landscape
        // Berdasarkan screenshot, tablet potret dan mobile vertikal berperilaku mirip (drill-down)
        // dan tablet landscape mirip desktop (multi-kolom). Mari kita simplifikasi:
        return 'tabletVertical'; // Perlakukan tablet vertikal mirip mobile drill-down
    } else if (width < breakpoints.desktop) {
        return 'tabletHorizontal'; // Perlakukan tablet horizontal mirip desktop multi-kolom
    }
    else {
        return 'desktop';
    }
};


const useBreakpoint = (): Breakpoint => {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop'); // Default ke desktop

    useEffect(() => {
        const handleResize = () => {
            setBreakpoint(getBreakpoint(window.innerWidth));
        };

        // Set breakpoint awal
        handleResize();

        // Tambahkan event listener
        window.addEventListener('resize', handleResize);

        // Bersihkan event listener saat komponen unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Hanya jalankan sekali saat mount

    return breakpoint;
};

export default useBreakpoint;