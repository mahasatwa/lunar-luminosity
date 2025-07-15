import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Y_pXMfm_.mjs';
import { $ as $$Hero } from '../../chunks/Hero_D-edu_WB.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$StrukturOrganisasi = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StrukturOrganisasi;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Tentang Kami", href: "#" },
    { text: "Struktur Organisasi", href: "/kampus/struktur-organisasi" }
  ];
  const pageContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"../../data/facts/struktur-organisasi.md": () => import('../../chunks/struktur-organisasi_DoZ6MXw_.mjs')}), () => "../../data/facts/struktur-organisasi.md");
  const { Content } = pageContent[0];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Struktur Organisasi - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Struktur Organisasi STIE Dwimulya", "subtitle": "Tata kelola yang efektif untuk mencapai visi dan misi institusi.", "backgroundImage": "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container mx-auto px-4 py-8 max-w-3xl prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/kampus/struktur-organisasi.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/kampus/struktur-organisasi.astro";
const $$url = "/kampus/struktur-organisasi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StrukturOrganisasi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
