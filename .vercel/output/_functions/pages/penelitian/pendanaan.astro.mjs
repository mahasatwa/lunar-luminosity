import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../../chunks/Hero_BZUYs9dj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Pendanaan = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pendanaan;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Penelitian & Publikasi", href: "/penelitian" },
    { text: "Pendanaan Penelitian", href: "/penelitian/pendanaan" }
  ];
  const pageContent = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../../../data/facts/pendanaan-penelitian.md");
  const { Content } = pageContent[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pendanaan Penelitian - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Pendanaan Penelitian", "subtitle": "Informasi mengenai sumber pendanaan dan proses aplikasi untuk mendukung aktivitas riset.", "backgroundImage": "https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/penelitian/pendanaan.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/penelitian/pendanaan.astro";
const $$url = "/penelitian/pendanaan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pendanaan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
