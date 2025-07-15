import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../chunks/Hero_BZUYs9dj.mjs';
import { $ as $$CardGrid } from '../chunks/CardGrid_B2_H8Ov-.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Berita = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Berita;
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Berita & Pembaruan", href: "/berita" }
  ];
  const allNews = await Astro2.glob(/* #__PURE__ */ Object.assign({"../data/news/artikel-pembukaan-pmb-2024.md": () => import('../chunks/artikel-pembukaan-pmb-2024_jH6bxBpD.mjs').then(n => n._)}), () => "../data/news/*.md");
  const newsItems = allNews.map((post) => ({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    imageUrl: post.frontmatter.image,
    link: `/berita/${post.file.split("/").pop().replace(".md", "")}`,
    date: new Date(post.frontmatter.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })
  }));
  newsItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const pressReleasesContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"../data/facts/rilis-pers.md": () => import('../chunks/rilis-pers_C3dfZHpK.mjs')}), () => "../data/facts/rilis-pers.md");
  const mediaHighlightsContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"../data/facts/sorotan-media.md": () => import('../chunks/sorotan-media_oveBzciG.mjs')}), () => "../data/facts/sorotan-media.md");
  const socialMediaFeedContent = await Astro2.glob(/* #__PURE__ */ Object.assign({"../data/facts/media-sosial-feed.md": () => import('../chunks/media-sosial-feed_ClRC4F9C.mjs')}), () => "../data/facts/media-sosial-feed.md");
  const PressReleasesContent = pressReleasesContent[0].Content;
  const MediaHighlightsContent = mediaHighlightsContent[0].Content;
  const SocialMediaFeedContent = socialMediaFeedContent[0].Content;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Berita & Pembaruan - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Berita & Pembaruan STIE Dwimulya", "subtitle": "Ikuti perkembangan terkini, acara, dan pengumuman penting dari kampus kami.", "backgroundImage": "https://images.pexels.com/photos/17628514/pexels-photo-17628514/free-photo-of-kota-bangunan-jalan-gang.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ${maybeRenderHead()}<section class="section"> <div class="container"> <h2 class="text-3xl font-bold text-center mb-8">Berita Terbaru</h2> ${renderComponent($$result2, "CardGrid", $$CardGrid, { "items": newsItems }, { "default": async ($$result3) => renderTemplate`${newsItems.map((news) => renderTemplate`<div class="bg-white rounded-lg shadow-md overflow-hidden"> <img${addAttribute(news.imageUrl, "src")}${addAttribute(news.title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">${news.title}</h3> <p class="text-gray-600 text-sm mb-2">${news.date}</p> <p class="text-gray-700 mb-4">${news.description}</p> <a${addAttribute(news.link, "href")} class="text-blue-600 hover:underline">Baca Selengkapnya</a> </div> </div>`)}` })} ${newsItems.length === 0 && renderTemplate`<p class="text-center text-gray-500">Belum ada berita terbaru saat ini.</p>`} </div> </section> <section class="section bg-gray-100"> <div class="container"> <h2 class="text-3xl font-bold text-center mb-8">Rilis Pers</h2> <div class="prose mx-auto"> ${renderComponent($$result2, "PressReleasesContent", PressReleasesContent, {})} </div> </div> </section> <section class="section"> <div class="container"> <h2 class="text-3xl font-bold text-center mb-8">Sorotan Media</h2> <div class="prose mx-auto"> ${renderComponent($$result2, "MediaHighlightsContent", MediaHighlightsContent, {})} </div> </div> </section> <section class="section bg-gray-100"> <div class="container"> <h2 class="text-3xl font-bold text-center mb-8">Media Sosial & Feed</h2> <div class="prose mx-auto"> ${renderComponent($$result2, "SocialMediaFeedContent", SocialMediaFeedContent, {})} </div> </div> </section> ` })}`;
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
