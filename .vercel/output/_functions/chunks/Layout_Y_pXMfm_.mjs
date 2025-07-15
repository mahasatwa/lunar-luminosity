import { a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, F as Fragment, u as unescapeHTML, c as createAstro, l as renderHead, e as renderSlot } from './astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import { clsx } from 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
/* empty css                                 */

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
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
</h3> <div class="flex space-x-4 mb-6"> ${socialLinks.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} class="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer"> <span class="sr-only">${social.label}</span> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(social.icon)}` })} </a>`)} </div> <address class="not-italic text-gray-400 space-y-2"> <p>STIE Dwimulya</p> <p>Jl. Jenderal Sudirman No.Kav. 52-53</p> <p>Serang, Banten 42118, Indonesia</p> <p>Telepon: (0254) 123-456</p> <p>Email: info@stiedwimulya.ac.id</p> </address> </div> </div> <div class="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm"> <p>
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} STIE Dwimulya. Hak Cipta Dilindungi Undang-Undang.
</p> <div class="flex justify-center space-x-4 mt-4"> <a href="/kebijakan-privasi" class="hover:underline">Kebijakan Privasi</a> <span>&bull;</span> <a href="/syarat-ketentuan" class="hover:underline">Syarat & Ketentuan</a> <span>&bull;</span> <a href="/peta-situs" class="hover:underline">Peta Situs</a> </div> </div> </div> </footer>`;
}, "/home/user/lunar-luminosity/src/components/organisms/site-footer/SiteFooter.astro", void 0);

const $$Astro$4 = createAstro("https://www.stiedwimulya.ac.id");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Logo;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(src, "src")}${addAttribute(alt, "alt")}>`;
}, "/home/user/lunar-luminosity/src/components/atoms/logo/Logo.astro", void 0);

const $$Astro$3 = createAstro("https://www.stiedwimulya.ac.id");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const { label, href, variant = "primary", icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    "inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 shadow-lg",
    { "bg-blue-600 text-white hover:bg-blue-700": variant === "primary" },
    { "bg-white text-blue-600 border border-blue-600 hover:bg-gray-100": variant === "secondary" }
  ], "class:list")}> ${label} </a>`;
}, "/home/user/lunar-luminosity/src/components/atoms/button/Button.astro", void 0);

const HamburgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const mobileMenu = document.getElementById("mobile-menu-overlay");
    if (mobileMenu) {
      if (isOpen) {
        mobileMenu.classList.remove("-translate-x-full");
      } else {
        mobileMenu.classList.add("-translate-x-full");
      }
    }
  }, [isOpen]);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      id: "hamburger-button",
      onClick: toggleMenu,
      className: "relative z-50 flex h-8 w-8 flex-col items-center justify-center space-y-1.5",
      "aria-label": isOpen ? "Tutup menu" : "Buka menu",
      "aria-expanded": isOpen,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block h-0.5 w-6 transform bg-current transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-2 rotate-45" : ""}`
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block h-0.5 w-6 bg-current transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `block h-0.5 w-6 transform bg-current transition-transform duration-300 ease-in-out ${isOpen ? "-translate-y-2 -rotate-45" : ""}`
          }
        )
      ]
    }
  );
};

const AccordionItem = ({ item, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const toggleAccordion = (e) => {
    if (isMobile && hasSubmenu) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };
  const contentHeight = isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : "0px";
  return /* @__PURE__ */ jsxs("li", { className: "nav-item", children: [
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: item.href || "#",
        className: `nav-link ${hasSubmenu ? "has-submenu" : ""}`,
        onClick: toggleAccordion,
        "aria-expanded": isMobile && hasSubmenu ? isOpen : void 0,
        children: [
          item.text,
          isMobile && hasSubmenu && /* @__PURE__ */ jsx("span", { className: `chevron ${isOpen ? "open" : ""}` })
        ]
      }
    ),
    hasSubmenu && /* @__PURE__ */ jsx(
      "div",
      {
        ref: contentRef,
        className: `submenu-container ${isMobile ? "mobile" : "desktop"}`,
        style: isMobile ? { height: contentHeight } : {},
        children: /* @__PURE__ */ jsx("ul", { className: "submenu", children: item.submenu?.map((subItem) => /* @__PURE__ */ jsx(AccordionItem, { item: subItem, isMobile }, subItem.text)) })
      }
    )
  ] });
};
const GlobalNavMenu = ({ data, isMobile }) => {
  return /* @__PURE__ */ jsx("ul", { className: `nav-menu ${isMobile ? "mobile" : "desktop"}`, children: data.map((item) => /* @__PURE__ */ jsx(AccordionItem, { item, isMobile }, item.text)) });
};

const globalNavigationData = [
  {
    id: "akademik",
    text: "Akademik",
    description: "Program studi, kurikulum, dan kalender akademik.",
    submenu: [
      { id: "prodi", text: "Program Studi", submenu: [
        { id: "s1-akuntansi", text: "S1 Akuntansi", href: "/akademik/program-studi/s1-akuntansi" },
        { id: "s1-manajemen", text: "S1 Manajemen", href: "/akademik/program-studi/s1-manajemen" }
      ] },
      { id: "kalender-akademik", text: "Kalender Akademik", href: "/akademik/kalender" },
      // Beasiswa & Biaya will be a top-level item
      { id: "akreditasi", text: "Akreditasi", href: "/akreditasi" }
    ]
  },
  {
    id: "penerimaan",
    text: "Penerimaan",
    href: "/penerimaan",
    description: "Informasi pendaftaran untuk mahasiswa baru."
  },
  {
    id: "beasiswa-biaya",
    text: "Beasiswa & Bantuan Keuangan",
    href: "/beasiswa",
    description: "Informasi lengkap tentang beasiswa, bantuan biaya, dan panduan pengajuan."
  },
  {
    id: "penelitian",
    text: "Penelitian & Publikasi",
    // Changed text to be more explicit
    description: "Pengabdian masyarakat, penelitian mahasiswa, dan publikasi ilmiah dosen.",
    // Enhanced description
    submenu: [
      { id: "kkm", text: "Program KKM", href: "/penelitian/kkm" },
      { id: "pkm", text: "Penelitian Mahasiswa (PKM)", href: "/penelitian/pkm" },
      { id: "publikasi-dosen", text: "Publikasi Dosen", href: "/penelitian/publikasi-dosen" }
    ]
  },
  {
    id: "tentang-kami",
    text: "Tentang Kami",
    description: "Sejarah, visi, misi, dan struktur organisasi.",
    submenu: [
      { id: "sejarah", text: "Sejarah Kampus", href: "/kampus/sejarah" },
      { id: "visi-misi", text: "Visi & Misi", href: "/kampus/visi-misi" },
      { id: "struktur-organisasi", text: "Struktur Organisasi", href: "/kampus/struktur-organisasi" }
    ]
  },
  {
    id: "kontak",
    text: "Kontak",
    href: "/kontak",
    description: "Hubungi kami dan temukan lokasi kampus."
  }
];

const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 bg-white/80 backdrop-blur-lg shadow-sm z-50"> <div class="container mx-auto px-6 flex items-center justify-between h-20"> <div class="flex-shrink-0"> <a href="/" aria-label="Beranda STIE Dwimulya"> ${renderComponent($$result, "Logo", $$Logo, { "src": "/logo-primary.svg", "alt": "STIE Dwimulya Logo" })} </a> </div>  <nav class="hidden md:flex items-center"> ${renderComponent($$result, "GlobalNavMenu", GlobalNavMenu, { "data": globalNavigationData })} </nav>  <div class="hidden md:block"> ${renderComponent($$result, "Button", $$Button, { "href": "/penerimaan", "label": "Pendaftaran" })} </div>  <div class="md:hidden"> ${renderComponent($$result, "HamburgerButton", HamburgerButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/lunar-luminosity/src/components/organisms/site-header/HamburgerButton.tsx", "client:component-export": "default" })} </div> </div> </header>  <div id="mobile-menu-overlay" class="fixed top-0 left-0 w-full h-full bg-white transform -translate-x-full transition-transform duration-300 ease-in-out z-40 md:hidden"> <div class="p-6 pt-24"> <nav> ${renderComponent($$result, "GlobalNavMenu", GlobalNavMenu, { "data": globalNavigationData, "isMobile": true })} </nav> <div class="mt-8"> ${renderComponent($$result, "Button", $$Button, { "href": "/penerimaan", "label": "Pendaftaran" })} </div> </div> </div>`;
}, "/home/user/lunar-luminosity/src/components/organisms/site-header/SiteHeader.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$2 = createAstro("https://www.stiedwimulya.ac.id");
const $$GlobalMenuOverlay = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GlobalMenuOverlay;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="global-menu-overlay"${addAttribute(cn("global-menu-overlay", className), "class")} data-astro-cid-q4qthebm> <!-- 
    The complex React logic has been temporarily removed.
    This placeholder ensures the project can build.
    The interactive menu functionality will need to be re-implemented
    either with vanilla JS or once the toolchain bug is resolved.
  --> <div class="placeholder-content p-8 text-white" data-astro-cid-q4qthebm> <h2 class="text-2xl font-bold mb-4" data-astro-cid-q4qthebm>Global Menu</h2> <p data-astro-cid-q4qthebm>Menu content would be rendered here.</p> </div> </div> `;
}, "/home/user/lunar-luminosity/src/components/organisms/GlobalMenuOverlay.astro", void 0);

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
}, "/home/user/lunar-luminosity/src/components/utils/SEO.astro", void 0);

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, image, ogType } = Astro2.props;
  return renderTemplate`<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image, "ogType": ogType })}${renderHead()}</head> <body class="font-sans antialiased text-gray-800 relative">  ${renderComponent($$result, "SiteHeader", $$SiteHeader, {})} ${renderComponent($$result, "GlobalMenuOverlay", $$GlobalMenuOverlay, { "class": "global-menu-overlay" })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$SiteFooter, {})} </body></html>`;
}, "/home/user/lunar-luminosity/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$SiteHeader as a, $$SiteFooter as b, cn as c, $$Button as d };
