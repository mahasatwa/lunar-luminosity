import { useEffect } from "react";

// Fungsi utilitas throttle yang sepenuhnya di-type
const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
) => {
  let inThrottle: boolean;
  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

const HeaderScrollManager = () => {
  useEffect(() => {
    // useEffect hanya berjalan di sisi klien, jadi aman untuk mengakses 'document'
    const header = document.getElementById("global-nav");

    if (!header) {
      return;
    }

    const scrollThreshold = 10;

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add("scrolled");
        header.classList.remove("p-4");
        header.classList.add("p-2");
      } else {
        header.classList.remove("p-2");
        header.classList.remove("scrolled");
        header.classList.add("p-4");
      }
    };

    const throttledScrollHandler = throttle(handleScroll, 100);

    // Panggil sekali untuk mengatur state awal
    handleScroll();

    // Tambahkan event listener
    window.addEventListener("scroll", throttledScrollHandler, {
      passive: true,
    });

    // Fungsi cleanup untuk menghapus event listener saat komponen dilepas
    return () => {
      window.removeEventListener("scroll", throttledScrollHandler);
    };
  }, []); // Array kosong berarti efek ini hanya berjalan sekali saat komponen dipasang

  // Komponen ini tidak me-render elemen visual apa pun
  return null;
};

export default HeaderScrollManager;
