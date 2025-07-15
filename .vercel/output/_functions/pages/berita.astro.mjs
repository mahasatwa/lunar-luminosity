import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Y_pXMfm_.mjs';
import { $ as $$Hero } from '../chunks/Hero_D-edu_WB.mjs';
import { $ as $$CardGrid } from '../chunks/CardGrid_CuYMI0hY.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Berita = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Berita;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Berita Terbaru", href: "/berita" }
  ];
  const allNews = await Astro2.glob(/* #__PURE__ */ Object.assign({"../data/news/artikel-pembukaan-pmb-2024.md": () => import('../chunks/artikel-pembukaan-pmb-2024_1Ql5evc7.mjs').then(n => n._)}), () => "../data/news/*.md");
  const newsItems = allNews.map((post) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    imageUrl: post.frontmatter.image,
    link: `/berita/${post.file.split("/").pop().replace(".md", "")}`,
    date: new Date(post.frontmatter.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })
  }));
  newsItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Berita Terbaru - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Berita Terbaru STIE Dwimulya", "subtitle": "Ikuti perkembangan terkini, acara, dan pengumuman penting dari kampus kami.", "backgroundImage": "https://images.pexels.com/photos/17628514/pexels-photo-17628514/free-photo-of-kota-bangunan-jalan-gang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container"> <h2 class="text-3xl font-bold text-center mb-8">Berita Pilihan</h2> ${renderComponent($$result2, "CardGrid", $$CardGrid, { "items": newsItems }, { "default": async ($$result3) => renderTemplate`${newsItems.map((news) => renderTemplate`<div class="bg-white rounded-lg shadow-md overflow-hidden"> <img${addAttribute(news.imageUrl, "src")}${addAttribute(news.title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">${news.title}</h3> <p class="text-gray-600 text-sm mb-2">${news.date}</p> <p class="text-gray-700 mb-4">${news.description}</p> <a${addAttribute(news.link, "href")} class="text-blue-600 hover:underline">Baca Selengkapnya</a> </div> </div>`)}` })} ${newsItems.length === 0 && renderTemplate`<p class="text-center text-gray-500">Belum ada berita terbaru saat ini.</p>`} </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/berita.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/berita.astro";
const $$url = "/berita";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Berita,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
