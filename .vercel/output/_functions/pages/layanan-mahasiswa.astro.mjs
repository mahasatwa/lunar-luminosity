import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../chunks/Hero_BZUYs9dj.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$LayananMahasiswa = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LayananMahasiswa;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Layanan Mahasiswa", href: "/layanan-mahasiswa" }
  ];
  const pageContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"../data/facts/layanan-mahasiswa.md": () => import('../chunks/layanan-mahasiswa_BH7vhWfg.mjs')}), () => "../data/facts/layanan-mahasiswa.md");
  const { Content } = pageContent[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Layanan Mahasiswa - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Layanan Mahasiswa STIE Dwimulya", "subtitle": "Dukungan komprehensif untuk keberhasilan akademik dan personal Anda.", "backgroundImage": "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/layanan-mahasiswa.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/layanan-mahasiswa.astro";
const $$url = "/layanan-mahasiswa";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$LayananMahasiswa,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
