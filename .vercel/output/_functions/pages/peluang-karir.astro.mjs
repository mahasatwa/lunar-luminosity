import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Y_pXMfm_.mjs';
import { $ as $$Hero } from '../chunks/Hero_D-edu_WB.mjs';
import { $ as $$Interstitial } from '../chunks/Interstitial_D4XtsZSi.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$PeluangKarir = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PeluangKarir;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Peluang Karir", href: "/peluang-karir" }
  ];
  const pageContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"../data/facts/peluang-karir.md": () => import('../chunks/peluang-karir_CfSgd471.mjs')}), () => "../data/facts/peluang-karir.md");
  const { Content } = pageContent[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Peluang Karir - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Peluang Karir Lulusan STIE Dwimulya", "subtitle": "Membuka gerbang masa depan yang cemerlang di berbagai industri.", "backgroundImage": "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ${renderComponent($$result2, "Interstitial", $$Interstitial, { "title": "Siap Memulai Karir Impian Anda?", "content": "STIE Dwimulya tidak hanya mendidik, tetapi juga mempersiapkan Anda untuk menjadi profesional yang sukses dan berdaya saing global.", "button": { text: "Daftar Sekarang", href: "/penerimaan" }, "backgroundImage": "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ` })}`;
}, "/home/user/lunar-luminosity/src/pages/peluang-karir.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/peluang-karir.astro";
const $$url = "/peluang-karir";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PeluangKarir,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
