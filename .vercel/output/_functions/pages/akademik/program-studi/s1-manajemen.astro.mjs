import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../../../chunks/Hero_BZUYs9dj.mjs';
export { renderers } from '../../../renderers.mjs';

const $$S1Manajemen = createComponent(async ($$result, $$props, $$slots) => {
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Akademik", href: "#" },
    { text: "Program Studi", href: "#" },
    { text: "S1 Manajemen", href: "/akademik/program-studi/s1-manajemen" }
  ];
  const pageContent = await /* #__PURE__ */ Object.assign({});
  const { Content } = Object.values(pageContent)[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "S1 Manajemen - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Program Studi S1 Manajemen", "subtitle": "Membekali Anda dengan keterampilan kepemimpinan dan strategi bisnis untuk masa depan yang sukses.", "backgroundImage": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/akademik/program-studi/s1-manajemen.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/akademik/program-studi/s1-manajemen.astro";
const $$url = "/akademik/program-studi/s1-manajemen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$S1Manajemen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
