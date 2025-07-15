import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../chunks/Hero_BZUYs9dj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Penelitian & Publikasi", href: "/penelitian" }
  ];
  const pageContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../data/facts/ikhtisar-penelitian.md": () => import('../chunks/ikhtisar-penelitian_DzHFVvnE.mjs')}), () => "../../data/facts/ikhtisar-penelitian.md");
  const { Content } = pageContent[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Penelitian & Publikasi - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Penelitian & Publikasi", "subtitle": "Menjadi pusat unggulan riset yang berkontribusi pada ilmu pengetahuan dan masyarakat.", "backgroundImage": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/penelitian/index.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/penelitian/index.astro";
const $$url = "/penelitian";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
