import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Y_pXMfm_.mjs';
import { $ as $$Hero } from '../chunks/Hero_D-edu_WB.mjs';
import { $ as $$Interstitial } from '../chunks/Interstitial_D4XtsZSi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Prestasi = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Prestasi;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Prestasi Mahasiswa", href: "/prestasi" }
  ];
  const pageContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"../data/facts/prestasi-mahasiswa.md": () => import('../chunks/prestasi-mahasiswa_I9R-Cu9_.mjs')}), () => "../data/facts/prestasi-mahasiswa.md");
  const { Content } = pageContent[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Prestasi Mahasiswa - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Prestasi Mahasiswa STIE Dwimulya", "subtitle": "Kisah-kisah inspiratif dan pencapaian gemilang mahasiswa kami di berbagai bidang.", "backgroundImage": "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ${renderComponent($$result2, "Interstitial", $$Interstitial, { "title": "Raih Prestasi Anda Bersama Kami", "content": "STIE Dwimulya mendukung penuh setiap mahasiswa untuk mengembangkan potensi dan mengukir prestasi. Bergabunglah dengan lingkungan yang inspiratif ini!", "button": { text: "Lihat Program Studi", href: "/akademik/program-studi/s1-akuntansi" }, "backgroundImage": "https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ` })}`;
}, "/home/user/lunar-luminosity/src/pages/prestasi.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/prestasi.astro";
const $$url = "/prestasi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Prestasi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
