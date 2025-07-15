import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Y_pXMfm_.mjs';
import { a as $$Heading, R as ResponsiveImage, $ as $$Hero } from '../chunks/Hero_D-edu_WB.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Card } from '../chunks/Card_D9I3Etmd.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$8 = createAstro("https://www.stiedwimulya.ac.id");
const $$StatisticItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$StatisticItem;
  const { value, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> ${renderComponent($$result, "Heading", $$Heading, { "as": "p", "size": "xl", "text": value, "addClass": "text-blue-600" })} <p class="text-gray-600 mt-1">${label}</p> </div>`;
}, "/home/user/lunar-luminosity/src/components/molecules/statistic-item/StatisticItem.astro", void 0);

const $$Astro$7 = createAstro("https://www.stiedwimulya.ac.id");
const $$Statistics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Statistics;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="container mx-auto px-6"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${content.map((item) => renderTemplate`${renderComponent($$result, "StatisticItem", $$StatisticItem, { "value": item.value, "label": item.label })}`)} </div> </div> </section>`;
}, "/home/user/lunar-luminosity/src/components/organisms/statistics/Statistics.astro", void 0);

const $$Astro$6 = createAstro("https://www.stiedwimulya.ac.id");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, class: className } = Astro2.props;
  let svgPath = "";
  switch (name) {
    case "tabler:menu-2":
      svgPath = '<path d="M4 6h16M4 12h16M4 18h16" />';
      break;
    case "tabler:chevron-down":
      svgPath = '<path d="m6 9 6 6 6-6" />';
      break;
    case "tabler:x":
      svgPath = '<path d="M18 6 6 18M6 6l12 12" />';
      break;
    default:
      svgPath = '<circle cx="12" cy="12" r="10" fill="currentColor" />';
  }
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(`icon ${className || ""}`, "class")} aria-hidden="true" data-astro-cid-s5vmrxnm>${unescapeHTML(svgPath)}</svg> `;
}, "/home/user/lunar-luminosity/src/components/atoms/icons/Icon.astro", void 0);

const $$Astro$5 = createAstro("https://www.stiedwimulya.ac.id");
const $$ProgramCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProgramCard;
  const { title, description, href, icon } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="block p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-12 h-12 text-blue-600 mb-4" })} ${renderComponent($$result, "Heading", $$Heading, { "as": "h3", "size": "md", "text": title, "addClass": "mb-2" })} <p class="text-gray-600">${description}</p> </a>`;
}, "/home/user/lunar-luminosity/src/components/molecules/program-card/ProgramCard.astro", void 0);

const $$Astro$4 = createAstro("https://www.stiedwimulya.ac.id");
const $$FeaturedPrograms = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$FeaturedPrograms;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-6 text-center"> ${renderComponent($$result, "Heading", $$Heading, { "as": "h2", "text": content.title, "addClass": "mb-12" })} <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left"> ${content.programs.map((program) => renderTemplate`${renderComponent($$result, "ProgramCard", $$ProgramCard, { ...program })}`)} </div> </div> </section>`;
}, "/home/user/lunar-luminosity/src/components/organisms/featured-programs/FeaturedPrograms.astro", void 0);

const $$Astro$3 = createAstro("https://www.stiedwimulya.ac.id");
const $$LatestPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LatestPosts;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="container mx-auto px-6"> ${renderComponent($$result, "Heading", $$Heading, { "as": "h2", "text": content.title, "addClass": "text-center mb-12" })} <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${content.items.map((item) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": item.title, "imageUrl": item.image.url, "imageAlt": item.image.alt, "description": `Dipublikasikan pada ${new Date(item.date).toLocaleDateString("id-ID", { year: "numeric", month: "long", day: "numeric" })}`, "badgeText": item.type, "href": item.href })}`)} </div> </div> </section>`;
}, "/home/user/lunar-luminosity/src/components/organisms/latest-posts/LatestPosts.astro", void 0);

const $$Astro$2 = createAstro("https://www.stiedwimulya.ac.id");
const $$TestimonialCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TestimonialCard;
  const { quote, author, title, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white p-8 rounded-lg shadow-lg text-center"> ${renderComponent($$result, "ResponsiveImage", ResponsiveImage, { "src": image.url, "alt": image.alt, "addClass": "w-24 h-24 rounded-full mx-auto mb-6 object-cover", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/lunar-luminosity/src/components/utils/ResponsiveImage.tsx", "client:component-export": "default" })} <blockquote class="text-lg italic text-gray-700 mb-4">
"${quote}"
</blockquote> <p class="font-bold text-gray-900">${author}</p> <p class="text-sm text-gray-500">${title}</p> </div>`;
}, "/home/user/lunar-luminosity/src/components/molecules/testimonial-card/TestimonialCard.astro", void 0);

const $$Astro$1 = createAstro("https://www.stiedwimulya.ac.id");
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-6"> ${renderComponent($$result, "Heading", $$Heading, { "as": "h2", "text": content.title, "addClass": "text-center mb-12" })} <div class="max-w-3xl mx-auto"> ${content.items.map((item) => renderTemplate`${renderComponent($$result, "TestimonialCard", $$TestimonialCard, { ...item })}`)} </div> </div> </section>`;
}, "/home/user/lunar-luminosity/src/components/organisms/testimonials/Testimonials.astro", void 0);

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$HomepageTemplate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HomepageTemplate;
  const { data } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<main> ${renderComponent($$result, "Hero", $$Hero, { "content": data.hero })} ${renderComponent($$result, "Statistics", $$Statistics, { "content": data.key_statistics })} ${renderComponent($$result, "FeaturedPrograms", $$FeaturedPrograms, { "content": data.featured_programs })} ${renderComponent($$result, "LatestPosts", $$LatestPosts, { "content": data.news_and_events })} ${renderComponent($$result, "Testimonials", $$Testimonials, { "content": data.testimonials })} </main>`;
}, "/home/user/lunar-luminosity/src/components/templates/homepage-template/HomepageTemplate.astro", void 0);

const header = {"logo":{"url":"/public/logo-primary.svg","alt":"STIE Dwimulya Logo"},"branding_text":"STIE Dwimulya Serang","navigation":[{"label":"Beranda","href":"/"},{"label":"Tentang Kami","href":"/tentang"},{"label":"Akademik","href":"/akademik","submenu":[{"label":"Program Studi","href":"/akademik/program-studi"},{"label":"Kurikulum","href":"/akademik/kurikulum"},{"label":"Dosen & Staf","href":"/akademik/dosen-staf"}]},{"label":"Penerimaan","href":"/penerimaan"},{"label":"Kehidupan Kampus","href":"/kehidupan-kampus","submenu":[{"label":"Organisasi Mahasiswa","href":"/kehidupan-kampus/organisasi-mahasiswa"},{"label":"Fasilitas","href":"/kehidupan-kampus/fasilitas"},{"label":"Kegiatan Mahasiswa","href":"/kehidupan-kampus/kegiatan"}]},{"label":"Berita & Agenda","href":"/berita-agenda"},{"label":"Kontak","href":"/kontak"}]};
const hero = {"title":"Kampus Rakyat, Kampus Perubahan","subtitle":"STIE Dwimulya berkomitmen menyediakan pendidikan ekonomi dan bisnis berkualitas yang dapat diakses oleh semua kalangan di Serang, Banten.","cta":{"label":"Jelajahi Program Studi","href":"/akademik/program-studi"},"image":{"url":"https://res.cloudinary.com/stie-dwimulya/image/upload/v1629882685/campus/building-front-view.jpg","alt":"Gedung Kampus STIE Dwimulya dari depan"}};
const key_statistics = [{"value":"2","label":"Program Studi Unggulan"},{"value":"95%","label":"Lulusan Bekerja < 6 Bulan"},{"value":"10+","label":"Mitra Industri & Universitas"}];
const featured_programs = {"title":"Program Akademik Unggulan","programs":[{"title":"S1 Akuntansi","description":"Mencetak akuntan profesional yang siap menghadapi tantangan industri keuangan modern.","href":"/akademik/program-studi/s1-akuntansi","icon":"tabler:calculator"},{"title":"S1 Manajemen","description":"Mengembangkan pemimpin bisnis masa depan dengan keahlian manajerial yang komprehensif.","href":"/akademik/program-studi/s1-manajemen","icon":"tabler:briefcase"}]};
const news_and_events = {"title":"Berita & Agenda Terbaru","items":[{"type":"Berita","title":"STIE Dwimulya Lakukan Program KKM di Desa Kadubeureum","date":"2024-07-15","href":"/berita/kkm-desa-kadubeureum","image":{"url":"https://res.cloudinary.com/stie-dwimulya/image/upload/v1629882685/news/kkm-event.jpg","alt":"Mahasiswa KKM di Desa Kadubeureum"}},{"type":"Agenda","title":"Seminar Nasional: Ekonomi Digital 2024","date":"2024-08-01","href":"/agenda/seminar-ekonomi-digital-2024","image":{"url":"https://res.cloudinary.com/stie-dwimulya/image/upload/v1629882685/events/seminar-digital.jpg","alt":"Poster Seminar Nasional Ekonomi Digital"}}]};
const testimonials = {"title":"Apa Kata Mereka?","items":[{"quote":"Kurikulum yang relevan dengan industri dan dosen yang sangat mendukung mempersiapkan saya untuk berkarir di perusahaan multinasional.","author":"Rina Wijaya, S.Ak.","title":"Alumni 2022, Finance Analyst di PT. Unilever Indonesia","image":{"url":"https://res.cloudinary.com/stie-dwimulya/image/upload/v1629882685/testimonials/rina-wijaya.jpg","alt":"Foto Rina Wijaya"}}]};
const homepageData = {
  header,
  hero,
  key_statistics,
  featured_programs,
  news_and_events,
  testimonials,
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const seo = {
    title: "STIE Dwimulya - Kampus Rakyat, Kampus Perubahan",
    description: "Selamat datang di STIE Dwimulya, institusi pendidikan ekonomi dan bisnis terkemuka di Serang, Banten. Temukan program studi, informasi penerimaan, dan berita terbaru kami."
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seo.title, "description": seo.description }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HomepageTemplate", $$HomepageTemplate, { "data": homepageData })} ` })}`;
}, "/home/user/lunar-luminosity/src/pages/index.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
