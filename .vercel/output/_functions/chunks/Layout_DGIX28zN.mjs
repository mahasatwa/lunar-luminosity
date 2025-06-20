import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, i as addAttribute, F as Fragment$2, u as unescapeHTML, b as createAstro, j as renderHead, k as renderSlot } from './astro/server_gD8qDGW6.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect, useState, Fragment as Fragment$1 } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { FiChevronLeft, FiChevronRight, FiMenu, FiX, FiSearch } from 'react-icons/fi';
import { useSwipeable } from 'react-swipeable';
import { v2 } from 'cloudinary';
import 'clsx';
/* empty css                          */

const navigationData = [
  // 1. AKADEMIK (Apa yang bisa saya pelajari?)
  {
    id: "akademik",
    title: "Akademik",
    description: "Jelajahi program studi, kurikulum, dan staf pengajar yang akan membentuk masa depan Anda.",
    subItems: [
      {
        id: "sarjana",
        title: "Program Sarjana (S1)",
        description: "Program gelar yang dirancang untuk mempersiapkan para pemimpin dan profesional yang kompeten.",
        subItems: [
          { id: "s1-manajemen", title: "S1 Manajemen", link: "/akademik/s1-manajemen" },
          { id: "s1-akuntansi", title: "S1 Akuntansi", link: "/akademik/s1-akuntansi" }
        ]
      },
      {
        id: "sertifikasi",
        title: "Kursus & Sertifikasi",
        description: "Tingkatkan keahlian spesifik Anda melalui program sertifikasi profesional kami.",
        subItems: [
          { id: "brevet-pajak", title: "Brevet Pajak A & B", link: "/akademik/sertifikasi/brevet-pajak" },
          { id: "digital-marketing", title: "Digital Marketing", link: "/akademik/sertifikasi/digital-marketing" },
          { id: "ekspor-impor", title: "Manajemen Ekspor-Impor", link: "/akademik/sertifikasi/ekspor-impor" }
        ]
      },
      { id: "dosen", title: "Staf Pengajar", link: "/akademik/dosen" },
      { id: "kalender", title: "Kalender Akademik", link: "/akademik/kalender" }
    ]
  },
  // 2. PENDAFTARAN (Bagaimana cara saya bergabung?)
  {
    id: "pendaftaran",
    title: "Pendaftaran",
    description: "Semua informasi yang Anda butuhkan untuk menjadi bagian dari keluarga STIE Dwimulya.",
    subItems: [
      { id: "jalur-masuk", title: "Jalur Pendaftaran", link: "/pendaftaran/jalur" },
      { id: "prosedur", title: "Prosedur Pendaftaran", link: "/pendaftaran/prosedur" },
      { id: "biaya", title: "Biaya & Beasiswa", link: "/pendaftaran/biaya" },
      { id: "faq", title: "Tanya Jawab (FAQ)", link: "/pendaftaran/faq" }
    ]
  },
  // 3. KEHIDUPAN KAMPUS (Seperti apa rasanya di sana?)
  {
    id: "kampus",
    title: "Kehidupan Kampus",
    description: "Temukan lingkungan belajar yang dinamis, fasilitas modern, dan komunitas yang mendukung.",
    subItems: [
      {
        id: "kemahasiswaan",
        title: "Organisasi Mahasiswa",
        description: "Salurkan minat dan bakat Anda melalui berbagai unit kegiatan mahasiswa.",
        subItems: [
          { id: "bem", title: "Badan Eksekutif Mahasiswa (BEM)", link: "/kampus/kemahasiswaan/bem" },
          { id: "ukm-musik", title: "UKM Musik & Seni", link: "/kampus/kemahasiswaan/musik" },
          { id: "ukm-olahraga", title: "UKM Olahraga", link: "/kampus/kemahasiswaan/olahraga" }
        ]
      },
      { id: "fasilitas", title: "Fasilitas Kampus", link: "/kampus/fasilitas" },
      { id: "layanan", title: "Layanan Mahasiswa", link: "/kampus/layanan" }
    ]
  },
  // 4. KARIER & ALUMNI (Apa yang terjadi setelah lulus?)
  {
    id: "alumni",
    title: "Karier & Alumni",
    description: "Lihat jejak kesuksesan alumni kami dan bagaimana kami mendukung karier Anda setelah lulus.",
    subItems: [
      { id: "kisah-alumni", title: "Kisah Sukses Alumni", link: "/alumni/kisah-sukses" },
      { id: "jaringan-alumni", title: "Jaringan Alumni", link: "/alumni/jaringan" },
      { id: "kerjasama-industri", title: "Kemitraan Industri", link: "/kemitraan" },
      { id: "pusat-karier", title: "Pusat Karier & Magang", link: "/karier" }
    ]
  },
  // 5. BERITA & ACARA (Apa yang sedang terjadi?)
  {
    id: "berita",
    title: "Berita & Acara",
    description: "Ikuti terus perkembangan terbaru, prestasi, dan kegiatan menarik di STIE Dwimulya.",
    subItems: [
      { id: "berita-kampus", title: "Berita Kampus", link: "/berita" },
      { id: "agenda-acara", title: "Agenda Acara", link: "/acara" },
      { id: "galeri", title: "Galeri Kegiatan", link: "/galeri" }
    ]
  },
  // 6. TENTANG KAMI (Siapa institusi ini?)
  {
    id: "tentang",
    title: "Tentang Kami",
    description: "Kenali lebih dalam sejarah, visi & misi, dan nilai-nilai yang kami anut.",
    subItems: [
      { id: "sejarah", title: "Sejarah Singkat", link: "/tentang/sejarah" },
      { id: "visi-misi", title: "Visi, Misi & Tujuan", link: "/tentang/visi-misi" },
      { id: "struktur", title: "Struktur Organisasi", link: "/tentang/struktur" },
      { id: "akreditasi", title: "Akreditasi Institusi", link: "/tentang/akreditasi" },
      { id: "kontak", title: "Lokasi & Kontak", link: "/kontak" }
    ]
  },
  // 7. PENELITIAN & PENGABDIAN (Kontribusi kepada masyarakat)
  {
    id: "penelitian",
    title: "Penelitian & Pengabdian",
    description: "Kontribusi nyata STIE Dwimulya bagi perkembangan ilmu pengetahuan dan masyarakat.",
    subItems: [
      { id: "pusat-studi", title: "Pusat Studi & Riset", link: "/penelitian/pusat-studi" },
      { id: "publikasi", title: "Publikasi Ilmiah", link: "/penelitian/publikasi" },
      { id: "pengabdian-masyarakat", title: "Pengabdian Masyarakat", link: "/penelitian/ppm" }
    ]
  },
  // 8. PORTAL (Akses Cepat - Utility)
  {
    id: "portal",
    title: "Portal",
    description: "Akses cepat ke sistem informasi akademik untuk komunitas internal STIE Dwimulya.",
    subItems: [
      { id: "portal-mahasiswa", title: "Portal Mahasiswa", link: "https://portal.stiedwimulya.ac.id/mahasiswa", isExternal: true },
      { id: "portal-dosen", title: "Portal Dosen", link: "https://portal.stiedwimulya.ac.id/dosen", isExternal: true },
      { id: "e-learning", title: "E-Learning", link: "https://elearning.stiedwimulya.ac.id", isExternal: true },
      { id: "perpustakaan", title: "Perpustakaan Digital", link: "https://library.stiedwimulya.ac.id", isExternal: true }
    ]
  }
];
const quickLinksData = [
  { title: "Pendaftaran Online", link: "/pendaftaran/prosedur" },
  { title: "Hubungi Kami", link: "/kontak" },
  { title: "Kalender Akademik", link: "/akademik/kalender" },
  { title: "Portal Mahasiswa", link: "https://portal.stiedwimulya.ac.id/mahasiswa", isExternal: true }
];

const useScrollHandler = (onScroll, thresholdBottom = 10, thresholdTop = 80) => {
  const lastScrollY = useRef(void 0);
  useEffect(() => {
    const handler = () => {
      const currentScrollY = window.scrollY;
      if (lastScrollY.current === void 0) {
        lastScrollY.current = currentScrollY;
        return;
      }
      const isScrolled = currentScrollY > thresholdBottom;
      const nearTop = currentScrollY <= thresholdTop;
      onScroll(nearTop ? false : isScrolled);
      lastScrollY.current = currentScrollY;
    };
    const throttledHandler = throttle(handler);
    window.addEventListener("scroll", throttledHandler, { passive: true });
    handler();
    return () => {
      window.removeEventListener("scroll", throttledHandler);
    };
  }, [onScroll, thresholdBottom, thresholdTop]);
};
const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      inThrottle = true;
      requestAnimationFrame(() => {
        func(...args);
        inThrottle = false;
      });
    }
  };
};

const breakpoints = {
  tabletVertical: 768,
  // Contoh breakpoint untuk tablet potret
  tabletHorizontal: 1024,
  // Contoh breakpoint untuk tablet landscape / desktop awal
  desktop: 1280
  // Contoh breakpoint untuk desktop
};
const getBreakpoint = (width) => {
  if (width < breakpoints.tabletVertical) {
    return "mobile";
  } else if (width < breakpoints.tabletHorizontal) {
    return "tabletVertical";
  } else if (width < breakpoints.desktop) {
    return "tabletHorizontal";
  } else {
    return "desktop";
  }
};
const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("desktop");
  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return breakpoint;
};

const DrawerContent = ({
  navigationData,
  quickLinksData,
  onClose
}) => {
  const breakpoint = useBreakpoint();
  const [activeLevel1, setActiveLevel1] = useState(null);
  const [activeLevel2, setActiveLevel2] = useState(null);
  const [activePath, setActivePath] = useState("");
  useEffect(() => {
    setActivePath(typeof window !== "undefined" ? window.location.pathname : "");
  }, []);
  useEffect(() => {
    setActiveLevel1(null);
    setActiveLevel2(null);
  }, [breakpoint, onClose]);
  const handleLevel1Click = (item) => {
    if (item.subItems) {
      setActiveLevel1(item);
      setActiveLevel2(null);
    } else {
      window.location.href = item.link || "#";
      onClose();
    }
  };
  const handleLevel2Click = (item) => {
    if (item.subItems) {
      setActiveLevel2(item);
    } else {
      window.location.href = item.link || "#";
      onClose();
    }
  };
  const goBack = () => {
    if (activeLevel2) setActiveLevel2(null);
    else if (activeLevel1) setActiveLevel1(null);
  };
  const swipeHandlers = useSwipeable({
    onSwipedRight: () => goBack(),
    trackMouse: true,
    preventScrollOnSwipe: true
  });
  let containerClass = breakpoint === "desktop" ? "grid grid-cols-3 gap-6 p-6 flex-grow overflow-y-auto" : "flex w-[300%] flex-grow transition-transform duration-500 ease-in-out";
  let slideOffset = 0;
  if (breakpoint !== "desktop") {
    if (activeLevel2) {
      slideOffset = -200;
    } else if (activeLevel1) {
      slideOffset = -100;
    }
  }
  return /* @__PURE__ */ jsxs("div", { className: "h-full flex flex-col bg-blue-950 text-white", ...swipeHandlers, children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 px-6 py-4 border-b border-blue-900", children: breakpoint !== "desktop" && activeLevel1 && /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: goBack,
        className: "flex items-center gap-1 text-white hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded",
        "aria-label": "Back",
        children: [
          /* @__PURE__ */ jsx(FiChevronLeft, {}),
          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Back" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: containerClass,
        style: { transform: `translateX(${slideOffset}%)` },
        children: [
          /* @__PURE__ */ jsx("div", { className: "overflow-y-auto p-6", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col", children: navigationData.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => handleLevel1Click(item),
              className: `w-full flex justify-between items-center py-3 px-2 text-lg font-semibold rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${activePath === item.link ? "bg-blue-100 text-blue-900 shadow-inner" : "hover:bg-blue-900"}`,
              "aria-expanded": activeLevel1?.id === item.id,
              children: [
                /* @__PURE__ */ jsx("span", { children: item.title }),
                item.subItems && /* @__PURE__ */ jsx(FiChevronRight, { "aria-hidden": "true" })
              ]
            }
          ) }, item.id)) }) }),
          /* @__PURE__ */ jsx("div", { className: "overflow-y-auto p-6", children: activeLevel1 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4 border-b border-blue-900 pb-2", children: activeLevel1.title }),
            /* @__PURE__ */ jsx("ul", { className: "flex flex-col", children: activeLevel1.subItems?.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => handleLevel2Click(item),
                className: `w-full flex justify-between items-center py-3 px-2 text-base rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${activePath === item.link ? "bg-blue-100 text-blue-900 shadow-inner" : "hover:bg-blue-900"}`,
                "aria-expanded": activeLevel2?.id === item.id,
                children: [
                  /* @__PURE__ */ jsx("span", { children: item.title }),
                  item.subItems && /* @__PURE__ */ jsx(FiChevronRight, { "aria-hidden": "true" })
                ]
              }
            ) }, item.id)) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "overflow-y-auto p-6", children: activeLevel2 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-4 border-b border-blue-900 pb-2", children: activeLevel2.title }),
            /* @__PURE__ */ jsx("ul", { className: "flex flex-col", children: activeLevel2.subItems?.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                href: item.link,
                className: `block py-2 px-2 text-base rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${activePath === item.link ? "bg-blue-100 text-blue-900 shadow-inner" : "hover:bg-blue-900"}`,
                onClick: onClose,
                tabIndex: 0,
                children: item.title
              }
            ) }, item.id)) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 border-t border-blue-900 mt-auto flex flex-wrap gap-4", children: [
      /* @__PURE__ */ jsx("span", { className: "font-bold text-sm text-gray-400 w-full mb-2", children: "Quick Links" }),
      quickLinksData.map((link) => /* @__PURE__ */ jsx(
        "a",
        {
          href: link.link,
          className: "text-sm text-gray-300 hover:text-yellow-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded",
          children: link.title
        },
        link.title
      ))
    ] })
  ] });
};

const NavShell = ({
  navigationData,
  quickLinksData
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: openModal,
        className: "rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 transition-colors duration-200",
        "aria-label": "Open menu",
        children: /* @__PURE__ */ jsx(FiMenu, { className: "h-6 w-6", "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ jsx(Transition, { appear: true, show: isOpen, as: Fragment$1, children: /* @__PURE__ */ jsxs(
      Dialog,
      {
        as: "div",
        className: "relative z-50 top-12",
        initialFocus: closeButtonRef,
        onClose: closeModal,
        children: [
          /* @__PURE__ */ jsx(
            Transition.Child,
            {
              as: Fragment$1,
              enter: "transition-opacity duration-500",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity duration-400",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-blue-950 bg-opacity-80 animate-fadeIn" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ jsx("div", { className: "flex min-h-full items-center justify-center p-0 text-center", children: /* @__PURE__ */ jsx(
            Transition.Child,
            {
              as: Fragment$1,
              enter: "transition-transform duration-500",
              enterFrom: "translate-x-full opacity-0",
              enterTo: "translate-x-0 opacity-100",
              leave: "transition-transform duration-400",
              leaveFrom: "translate-x-0 opacity-100",
              leaveTo: "translate-x-full opacity-0",
              children: /* @__PURE__ */ jsxs(Dialog.Panel, { className: "w-screen h-screen transform overflow-hidden bg-blue-950 text-left align-middle shadow-xl transition-all animate-slideInRight", children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    ref: closeButtonRef,
                    onClick: closeModal,
                    className: "text-white absolute top-4 right-4 z-20 p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                    "aria-label": "Close menu",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline mr-2", children: "Tutup" }),
                      /* @__PURE__ */ jsx(FiX, { size: 24 })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  DrawerContent,
                  {
                    navigationData,
                    quickLinksData,
                    onClose: closeModal
                  }
                )
              ] })
            }
          ) }) })
        ]
      }
    ) })
  ] });
};

const desktopLinks = [
  { title: "Admissions", href: "/mba/admissions" },
  { title: "Financial Aid", href: "/mba/financial-aid" },
  { title: "Academic Experience", href: "/mba/academic-experience" },
  { title: "Student Life", href: "/mba/student-life" },
  { title: "Blog", href: "/mba/blog" },
  { title: "Events", href: "/mba/admissions/events" },
  { title: "Contact", href: "/about/contact" }
];
const getActivePath = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "";
};
const InteractiveHeader = ({
  logoUrl,
  wordmarkUrl,
  navigationData,
  quickLinksData
}) => {
  const [dynamicClasses, setDynamicClasses] = useState("bg-gray-100 p-4");
  const [showMore, setShowMore] = useState(false);
  const [activePath, setActivePath] = useState("");
  useScrollHandler((isScrolled) => {
    setDynamicClasses(
      isScrolled ? "bg-gray-200 shadow-md p-2" : "bg-gray-100 p-4"
      // Header kembali normal
    );
  });
  useEffect(() => {
    setActivePath(getActivePath());
  }, []);
  const maxDesktopLinks = 5;
  const mainLinks = desktopLinks.slice(0, maxDesktopLinks);
  const moreLinks = desktopLinks.slice(maxDesktopLinks);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `flex justify-between items-center sticky top-0 z-50 transition-all duration-300 ease-in-out ${dynamicClasses}`,
      children: /* @__PURE__ */ jsxs("div", { className: `container mx-auto flex justify-between items-center`, children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "/",
            "aria-label": "Beranda STIE Dwimulya",
            className: "flex items-center gap-4",
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: logoUrl,
                  alt: "Logo STIE Dwimulya",
                  className: `h-[2.5rem] md:h-[3rem] w-auto transition-all duration-300 ease-in-out ${dynamicClasses.includes("p-2") ? "h-[2.25rem]" : "h-[3rem]"}`,
                  width: 64,
                  height: 64
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: wordmarkUrl,
                  alt: "Wordmark STIE Dwimulya",
                  className: `h-[2.5rem] md:h-[3rem] w-auto transition-all duration-300 ease-in-out ${dynamicClasses.includes("p-2") ? "h-[2.25rem]" : "h-[3rem]"}`,
                  width: 180,
                  height: 64
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsxs("nav", { className: "hidden lg:flex items-center gap-2 relative", children: [
            mainLinks.map((link) => /* @__PURE__ */ jsx(
              "a",
              {
                href: link.href,
                className: `text-sm font-semibold px-3 py-2 rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${activePath === link.href ? "bg-blue-100 text-blue-900 shadow-inner" : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"}`,
                "aria-current": activePath === link.href ? "page" : void 0,
                children: link.title
              },
              link.title
            )),
            moreLinks.length > 0 && /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setShowMore((v) => !v),
                  className: "text-sm font-semibold px-3 py-2 rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 text-gray-700 hover:text-blue-900 hover:bg-blue-50 flex items-center gap-1",
                  "aria-haspopup": "true",
                  "aria-expanded": showMore,
                  "aria-label": "Show more navigation links",
                  children: [
                    "More",
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: `w-4 h-4 transition-transform duration-200 ${showMore ? "rotate-180" : "rotate-0"}`,
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M19 9l-7 7-7-7"
                          }
                        )
                      }
                    )
                  ]
                }
              ),
              showMore && /* @__PURE__ */ jsx("div", { className: "absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg animate-fadeIn z-50", children: moreLinks.map((link) => /* @__PURE__ */ jsx(
                "a",
                {
                  href: link.href,
                  className: `block px-4 py-2 text-sm rounded transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${activePath === link.href ? "bg-blue-100 text-blue-900 shadow-inner" : "text-gray-700 hover:text-blue-900 hover:bg-blue-50"}`,
                  "aria-current": activePath === link.href ? "page" : void 0,
                  tabIndex: 0,
                  onClick: () => setShowMore(false),
                  children: link.title
                },
                link.title
              )) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block w-px h-6 bg-gray-300" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/pendaftaran",
                className: "hidden lg:block bg-brand-red text-white text-sm font-bold py-2 px-5 rounded-full bg-teal-800 hover:bg-sky-600 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                children: "Daftar"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "/search",
                "aria-label": "Pencarian",
                className: "hidden lg:block text-gray-600 hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                children: /* @__PURE__ */ jsx(FiSearch, { size: 20 })
              }
            ),
            /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx(
              NavShell,
              {
                navigationData,
                quickLinksData
              }
            ) })
          ] })
        ] })
      ] })
    }
  );
};

v2.config({
  cloud_name: "dmadbfz58",
  api_key: "857145392544531",
  api_secret: "kcTBAQ43Xzx1uiR2xDKUZ_YqIEk"
});
function getOptimizedImageUrl(publicId, options = {}) {
  const {
    width,
    height,
    crop = "fill",
    quality = "auto",
    format = "auto"
  } = options;
  const transformation = {
    width,
    height,
    crop,
    quality,
    format,
    fetch_format: format
  };
  return v2.url(publicId, {
    transformation: [transformation],
    secure: true
  });
}

const $$GlobalNav = createComponent(($$result, $$props, $$slots) => {
  const logoUrl = getOptimizedImageUrl("logo_wclp2c", {
    width: 64,
    // Kita bisa minta ukuran sedikit lebih besar untuk layar retina
    height: 64,
    crop: "fit"
  });
  const wordmarkUrl = getOptimizedImageUrl("separator_wordmark_yrjcgy", {
    height: 64,
    // Hanya tentukan tinggi, lebar akan otomatis
    crop: "fit"
  });
  return renderTemplate`${renderComponent($$result, "InteractiveHeader", InteractiveHeader, { "client:load": true, "logoUrl": logoUrl, "wordmarkUrl": wordmarkUrl, "navigationData": navigationData, "quickLinksData": quickLinksData, "client:component-hydration": "load", "client:component-path": "C:/astro/lunar-luminosity/src/components/features/global/InteractiveHeader.tsx", "client:component-export": "default" })}`;
}, "C:/astro/lunar-luminosity/src/components/features/global/GlobalNav.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const aboutLinks = [
    { text: "Mengapa STIE Dwimulya?", href: "/tentang/mengapa-kami" },
    { text: "Visi & Misi", href: "/tentang/visi-misi" },
    { text: "Sejarah Institusi", href: "/tentang/sejarah" },
    { text: "Struktur Organisasi", href: "/tentang/struktur" },
    { text: "Akreditasi", href: "/tentang/akreditasi" }
  ];
  const studentLinks = [
    { text: "Pendaftaran Mahasiswa Baru", href: "/pendaftaran" },
    { text: "Program Studi", href: "/akademik" },
    { text: "Biaya & Beasiswa", href: "/pendaftaran/biaya" },
    { text: "Kehidupan Kampus", href: "/kampus" },
    { text: "FAQ Pendaftaran", href: "/pendaftaran/faq" }
  ];
  const resourceLinks = [
    { text: "Berita & Pengumuman", href: "/berita" },
    { text: "Agenda Acara", href: "/acara" },
    { text: "Pusat Karir & Alumni", href: "/karier" },
    { text: "Lokasi & Kontak", href: "/kontak" },
    {
      text: "Portal Mahasiswa",
      href: "https://portal.stiedwimulya.ac.id",
      isExternal: true
    }
  ];
  const socialLinks = [
    {
      label: "Facebook",
      href: "#",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>`
    },
    {
      label: "Instagram",
      href: "#",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"/></svg>`
    },
    {
      label: "YouTube",
      href: "#",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>`
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.481 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[#1A1A1A] text-white py-16 px-6 sm:px-8"> <div class="max-w-7xl mx-auto"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-10"> <div> <h3 class="text-lg font-bold mb-4 font-poppins text-gray-200">
Tentang STIE Dwimulya
</h3> <ul class="space-y-2"> ${aboutLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-white hover:underline transition-colors"> ${link.text} </a> </li>`)} </ul> </div> <div> <h3 class="text-lg font-bold mb-4 font-poppins text-gray-200">
Informasi Mahasiswa
</h3> <ul class="space-y-2"> ${studentLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-white hover:underline transition-colors"> ${link.text} </a> </li>`)} </ul> </div> <div> <h3 class="text-lg font-bold mb-4 font-poppins text-gray-200">
Sumber Daya
</h3> <ul class="space-y-2"> ${resourceLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-gray-400 hover:text-white hover:underline transition-colors"${addAttribute(link.isExternal ? "_blank" : "_self", "target")}${addAttribute(link.isExternal ? "noopener noreferrer" : "", "rel")}> ${link.text} </a> </li>`)} </ul> </div> <div> <h3 class="text-lg font-bold mb-4 font-poppins text-gray-200">
Hubungi Kami
</h3> <div class="flex space-x-4 mb-6"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} class="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"> <span class="sr-only">${social.label}</span> ${renderComponent($$result, "Fragment", Fragment$2, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(social.icon)}` })} </a>`)} </div> <address class="not-italic text-gray-400 space-y-2"> <p>STIE Dwimulya</p> <p>Jl. Jenderal Sudirman No.Kav. 52-53</p> <p>Serang, Banten 42118, Indonesia</p> <p>Telepon: (0254) 123-456</p> <p>Email: info@stiedwimulya.ac.id</p> </address> </div> </div> <div class="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm"> <p>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} STIE Dwimulya. Hak Cipta Dilindungi Undang-Undang.
</p> <div class="flex justify-center space-x-4 mt-4"> <a href="/kebijakan-privasi" class="hover:underline">Kebijakan Privasi</a> <span>&bull;</span> <a href="/syarat-ketentuan" class="hover:underline">Syarat & Ketentuan</a> <span>&bull;</span> <a href="/peta-situs" class="hover:underline">Peta Situs</a> </div> </div> </div> </footer>`;
}, "C:/astro/lunar-luminosity/src/components/features/global/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://www.stiedwimulya.ac.id");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description,
    image,
    ogType = "website",
    robots = { index: true, follow: true }
  } = Astro2.props;
  const SITE_TITLE = "STIE Dwimulya";
  const TWITTER_HANDLE = "@stiedwimulya";
  const formattedTitle = `${title} | ${SITE_TITLE}`;
  const ogImageUrl = image ? new URL(image, Astro2.site) : new URL("/og-default.png", Astro2.site);
  const canonicalUrl = new URL(Astro2.url.pathname, Astro2.site);
  const robotsContent = [
    robots.index ? "index" : "noindex",
    robots.follow ? "follow" : "nofollow"
  ].join(", ");
  return renderTemplate`<title>${formattedTitle}</title><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="canonical"${addAttribute(canonicalUrl, "href")}><meta name="robots"${addAttribute(robotsContent, "content")}><meta property="og:title"${addAttribute(formattedTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalUrl, "content")}><meta property="og:image"${addAttribute(ogImageUrl, "content")}><meta property="og:type"${addAttribute(ogType, "content")}><meta property="og:site_name"${addAttribute(SITE_TITLE, "content")}><meta property="og:locale" content="id_ID"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:site"${addAttribute(TWITTER_HANDLE, "content")}><meta name="twitter:title"${addAttribute(formattedTitle, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImageUrl, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#A51C30">`;
}, "C:/astro/lunar-luminosity/src/components/utils/SEO.astro", void 0);

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image } = Astro2.props;
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image })}${renderHead()}</head> <body class="font-sans antialiased text-gray-900 bg-gray-50"> ${renderComponent($$result, "GlobalNav", $$GlobalNav, {})} <main class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/astro/lunar-luminosity/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
