import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../chunks/Hero_BZUYs9dj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$LokasiKampus = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LokasiKampus;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Lokasi Kampus", href: "/lokasi-kampus" }
  ];
  const pageContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"../data/facts/lokasi-aksesibilitas.md": () => import('../chunks/lokasi-aksesibilitas_CmLhAvvz.mjs')}), () => "../data/facts/lokasi-aksesibilitas.md");
  const { Content } = pageContent[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lokasi Kampus - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Lokasi & Aksesibilitas Kampus", "subtitle": "Temukan lokasi strategis STIE Dwimulya yang mudah dijangkau.", "backgroundImage": "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/lokasi-kampus.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/lokasi-kampus.astro";
const $$url = "/lokasi-kampus";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LokasiKampus,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
