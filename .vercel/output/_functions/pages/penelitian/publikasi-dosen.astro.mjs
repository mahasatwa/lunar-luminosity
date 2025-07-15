import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../../chunks/Hero_BZUYs9dj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$PublikasiDosen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PublikasiDosen;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Penelitian & Publikasi", href: "/penelitian" },
    { text: "Publikasi Dosen", href: "/penelitian/publikasi-dosen" }
  ];
  const pageContent = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../../../data/facts/publikasi-dosen.md");
  const { Content } = pageContent[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Publikasi Dosen - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Publikasi Dosen STIE Dwimulya", "subtitle": "Karya-karya ilmiah terbaru dari para akademisi kami yang berkontribusi pada pengembangan ilmu pengetahuan.", "backgroundImage": "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/penelitian/publikasi-dosen.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/penelitian/publikasi-dosen.astro";
const $$url = "/penelitian/publikasi-dosen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PublikasiDosen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
