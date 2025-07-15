import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate, b as addAttribute } from '../chunks/astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Y_pXMfm_.mjs';
import { $ as $$Hero } from '../chunks/Hero_D-edu_WB.mjs';
import { $ as $$Interstitial } from '../chunks/Interstitial_D4XtsZSi.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
/* empty css                                    */
import { $ as $$CardGrid } from '../chunks/CardGrid_CuYMI0hY.mjs';
export { renderers } from '../renderers.mjs';

const AccordionItem = ({ item, isOpen, onClick }) => {
  return /* @__PURE__ */ jsxs("div", { className: "accordion-item", children: [
    /* @__PURE__ */ jsxs("button", { className: "accordion-title", onClick, children: [
      /* @__PURE__ */ jsx("span", { children: item.question }),
      /* @__PURE__ */ jsx(FiChevronDown, { className: `chevron ${isOpen ? "open" : ""}` })
    ] }),
    /* @__PURE__ */ jsx("div", { className: `accordion-content ${isOpen ? "open" : ""}`, children: /* @__PURE__ */ jsx("div", { className: "accordion-content-inner", children: /* @__PURE__ */ jsx("p", { children: item.answer }) }) })
  ] });
};
const AccordionFAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsx("div", { className: "accordion-faq", children: faqs.map((faq, index) => /* @__PURE__ */ jsx(
    AccordionItem,
    {
      item: faq,
      isOpen: openIndex === index,
      onClick: () => handleClick(index)
    },
    index
  )) });
};

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$AccordionFAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccordionFAQ;
  const { title, faqs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto my-12 px-4 md:my-20"> ${title && renderTemplate`<h2 class="mb-10 text-center text-3xl font-bold text-gray-800 md:text-4xl"> ${title} </h2>`} <div class="mx-auto max-w-3xl"> ${renderComponent($$result, "AccordionFAQ", AccordionFAQ, { "client:load": true, "faqs": faqs, "client:component-hydration": "load", "client:component-path": "/home/user/lunar-luminosity/src/components/organisms/accordion-faq/AccordionFAQ.tsx", "client:component-export": "default" })} </div> </section>`;
}, "/home/user/lunar-luminosity/src/components/organisms/accordion-faq/AccordionFAQ.astro", void 0);

const $$Beasiswa = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Beasiswa & Bantuan Keuangan", href: "/beasiswa" }
  ];
  const scholarships = [
    {
      title: "Beasiswa Unggulan",
      description: "Beasiswa penuh untuk mahasiswa berprestasi dengan IPK tinggi.",
      imageUrl: "https://images.pexels.com/photos/4146459/pexels-photo-4146459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    },
    {
      title: "Beasiswa Bidikmisi",
      description: "Bantuan biaya pendidikan bagi calon mahasiswa dari keluarga kurang mampu.",
      imageUrl: "https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    },
    {
      title: "Beasiswa Peningkatan Prestasi Akademik (PPA)",
      description: "Beasiswa parsial untuk mahasiswa dengan prestasi akademik yang konsisten.",
      imageUrl: "https://images.pexels.com/photos/4050319/pexels-photo-4050319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    },
    {
      title: "Bantuan UKT (Uang Kuliah Tunggal)",
      description: "Bantuan subsidi UKT bagi mahasiswa yang membutuhkan.",
      imageUrl: "https://images.pexels.com/photos/4050327/pexels-photo-4050327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    }
  ];
  const faqs = [
    {
      question: "Bagaimana cara mengajukan beasiswa?",
      answer: "Proses pengajuan beasiswa melibatkan pengisian formulir online, pengiriman dokumen pendukung, dan wawancara. Detail lengkap dapat dilihat di halaman masing-masing beasiswa."
    },
    {
      question: "Apa saja syarat umum untuk mendapatkan beasiswa?",
      answer: "Syarat umum meliputi status sebagai mahasiswa aktif, IPK minimal tertentu, dan tidak sedang menerima beasiswa lain. Syarat spesifik bervariasi untuk setiap jenis beasiswa."
    },
    {
      question: "Kapan batas waktu pendaftaran beasiswa?",
      answer: "Batas waktu pendaftaran bervariasi setiap tahun akademik. Informasi terkini akan diumumkan di website dan papan pengumuman kampus."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Beasiswa & Bantuan Keuangan - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Beasiswa & Bantuan Keuangan", "subtitle": "Wujudkan pendidikan impian Anda bersama STIE Dwimulya melalui berbagai program beasiswa dan bantuan keuangan.", "backgroundImage": "https://images.pexels.com/photos/3058277/pexels-photo-3058277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "buttons": [{ text: "Lihat Persyaratan", href: "#persyaratan", style: "primary" }] })} ${maybeRenderHead()}<section class="section"> <div class="container"> <h2 class="text-3xl font-bold text-center mb-8">Program Beasiswa Unggulan</h2> ${renderComponent($$result2, "CardGrid", $$CardGrid, { "items": scholarships }, { "default": ($$result3) => renderTemplate`${scholarships.map((scholarship) => renderTemplate`<div class="bg-white rounded-lg shadow-md overflow-hidden"> <img${addAttribute(scholarship.imageUrl, "src")}${addAttribute(scholarship.title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">${scholarship.title}</h3> <p class="text-gray-600 mb-4">${scholarship.description}</p> <a${addAttribute(scholarship.link, "href")} class="text-blue-600 hover:underline">Pelajari Lebih Lanjut</a> </div> </div>`)}` })} </div> </section> ${renderComponent($$result2, "Interstitial", $$Interstitial, { "title": "Jangan Biarkan Biaya Menjadi Penghalang", "content": "STIE Dwimulya berkomitmen untuk mendukung setiap mahasiswa meraih pendidikan terbaik. Berbagai program bantuan keuangan tersedia untuk memastikan Anda fokus pada studi.", "button": { text: "Hubungi Kami untuk Konsultasi", href: "/kontak" }, "backgroundImage": "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} <section class="section" id="faq"> <div class="container"> <h2 class="text-3xl font-bold text-center mb-8">Pertanyaan Umum (FAQ)</h2> ${renderComponent($$result2, "AccordionFAQ", $$AccordionFAQ, { "items": faqs })} </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/beasiswa.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/beasiswa.astro";
const $$url = "/beasiswa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Beasiswa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
