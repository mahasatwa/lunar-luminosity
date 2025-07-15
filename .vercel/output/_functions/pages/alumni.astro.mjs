import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../chunks/Hero_BZUYs9dj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Alumni = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Alumni;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Alumni", href: "/alumni" }
  ];
  const pageContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"../data/facts/profil-alumni-sukses.md": () => import('../chunks/profil-alumni-sukses_BqgOlh__.mjs')}), () => "../data/facts/profil-alumni-sukses.md");
  const { Content } = pageContent[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Alumni - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Kisah Sukses Alumni STIE Dwimulya", "subtitle": "Inspirasi dari para lulusan yang telah mengukir prestasi di berbagai bidang.", "backgroundImage": "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/alumni.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/alumni.astro";
const $$url = "/alumni";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Alumni,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
