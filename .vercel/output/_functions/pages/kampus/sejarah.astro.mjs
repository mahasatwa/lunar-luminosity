import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../../chunks/Hero_BZUYs9dj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Sejarah = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sejarah;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Tentang Kami", href: "#" },
    { text: "Sejarah Kampus", href: "/kampus/sejarah" }
  ];
  const pageContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../data/facts/sejarah-singkat.md": () => import('../../chunks/sejarah-singkat_D7R_IvW0.mjs')}), () => "../../data/facts/sejarah-singkat.md");
  const { Content } = pageContent[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sejarah Kampus - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Sejarah Kampus STIE Dwimulya", "subtitle": "Menelusuri jejak langkah pendidikan yang telah membentuk ribuan profesional.", "backgroundImage": "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/kampus/sejarah.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/kampus/sejarah.astro";
const $$url = "/kampus/sejarah";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Sejarah,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
