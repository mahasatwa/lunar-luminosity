import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../../chunks/Hero_BZUYs9dj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Kalender = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Kalender;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Akademik", href: "#" },
    { text: "Kalender Akademik", href: "/akademik/kalender" }
  ];
  const pageContent = await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "../../../data/facts/kalender-akademik.md");
  const { Content } = pageContent[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kalender Akademik - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Kalender Akademik STIE Dwimulya", "subtitle": "Informasi lengkap jadwal perkuliahan, ujian, dan kegiatan akademik penting lainnya.", "backgroundImage": "https://images.pexels.com/photos/3862635/pexels-photo-3862635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})}
}</div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/akademik/kalender.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/akademik/kalender.astro";
const $$url = "/akademik/kalender";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kalender,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
