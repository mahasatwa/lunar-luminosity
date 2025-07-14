import { b as createAstro, c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, d as renderSlot, m as maybeRenderHead } from '../chunks/astro/server_BfQs_CC2.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Ch54PjWF.mjs';
import { b as $$Button, $ as $$SiteHeader, a as $$SiteFooter } from '../chunks/SiteFooter_CgioIMBn.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://www.stiedwimulya.ac.id");
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  const { level = "h1" } = Astro2.props;
  const validLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const tag = validLevels.includes(level) ? level : "h1";
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "as": tag, "style": "margin: 0;" }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/home/user/lunar-luminosity/src/components/atoms/typography/Heading.astro", void 0);

const $$HeroStatement$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero-statement" data-astro-cid-e343liq7> <div class="hero-content" data-astro-cid-e343liq7> ${renderComponent($$result, "Heading", $$Heading, { "level": "h1", "data-astro-cid-e343liq7": true }, { "default": ($$result2) => renderTemplate` 
Your Compelling Headline Here
` })} <p data-astro-cid-e343liq7> <!-- Dynamic Text Content Placeholder -->
A brief statement about the value proposition or key message, potentially personalized based on user behavior or location.
</p> <div class="hero-actions" data-astro-cid-e343liq7> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "data-astro-cid-e343liq7": true }, { "default": ($$result2) => renderTemplate` 
Call to Action 1
` })} ${renderComponent($$result, "Button", $$Button, { "variant": "secondary", "data-astro-cid-e343liq7": true }, { "default": ($$result2) => renderTemplate` 
Call to Action 2 (Optional)
` })} </div> <!-- Placeholder for other dynamic content like location-based programs --> <div class="dynamic-info" data-astro-cid-e343liq7> <!-- Dynamic Information Placeholder --> </div> </div> </section> `;
}, "/home/user/lunar-luminosity/src/components/organisms/hero-statement/HeroStatement.astro", void 0);

const $$MediaCarousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="media-carousel" data-astro-cid-e73yxnqo> <!-- This is a placeholder for a media carousel organism. --> <!-- It features rotating media elements with easy navigation. --> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "/home/user/lunar-luminosity/src/components/organisms/media-carousel/MediaCarousel.astro", void 0);

const $$GridLists = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="grid-list-container" data-astro-cid-lxk5indm> <h2 data-astro-cid-lxk5indm>Grid List</h2> <p data-astro-cid-lxk5indm>This organism uses cards to display related content.</p> <div class="grid-list" data-astro-cid-lxk5indm> <!-- Placeholder for Card molecules --> ${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/home/user/lunar-luminosity/src/components/organisms/grid-lists/GridLists.astro", void 0);

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$HomepageTemplate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HomepageTemplate;
  const { title } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SiteHeader", $$SiteHeader, {})} ${maybeRenderHead()}<main> <!-- Homepage Template: Combines site header, hero statement, media carousel, grid lists, and site footer organisms --> ${renderComponent($$result2, "HeroStatement", $$HeroStatement$1, {})} ${renderComponent($$result2, "MediaCarousel", $$MediaCarousel, {})} ${renderComponent($$result2, "GridLists", $$GridLists, {})} <!-- Add more organism components here as needed for the homepage --> </main> ${renderComponent($$result2, "SiteFooter", $$SiteFooter, {})} ` })}`;
}, "/home/user/lunar-luminosity/src/components/templates/homepage-template/HomepageTemplate.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero-bg min-h-screen flex items-center justify-center text-white py-20 px-4" data-astro-cid-wse7a2hg> <div class="max-w-4xl mx-auto text-center" data-astro-cid-wse7a2hg> <h1 class="text-5xl md:text-7xl font-bold mb-6" data-astro-cid-wse7a2hg>Selamat Datang di STIE Dwimulya</h1> <p class="text-xl md:text-2xl mb-8 leading-relaxed" data-astro-cid-wse7a2hg>
Menjadi pusat keunggulan dalam pendidikan ekonomi dan bisnis,
            menciptakan lulusan yang kompeten, berintegritas, dan siap bersaing
            di era global.
</p> <div class="bg-blue-600 inline-block px-6 py-3 rounded-full text-lg font-semibold cursor-pointer" data-astro-cid-wse7a2hg> <span class="mr-2" data-astro-cid-wse7a2hg>Telusuri Program Kami</span> <i class="fas fa-arrow-right" data-astro-cid-wse7a2hg></i> </div> </div> </section> `;
}, "/home/user/lunar-luminosity/src/components/home/HeroSection.astro", void 0);

const $$HeroStatement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-700 text-white py-12 px-4" data-astro-cid-zg3w75tq> <div class="max-w-4xl mx-auto text-center" data-astro-cid-zg3w75tq> <p class="text-2xl md:text-3xl font-light italic" data-astro-cid-zg3w75tq>
"Melahirkan pemimpin masa depan yang berkarakter, inovatif, dan siap
      menghadapi tantangan ekonomi global."
</p> </div> </section> `;
}, "/home/user/lunar-luminosity/src/components/home/HeroStatement.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const homepageData = {
    heroStatement: {
      heading: "Selamat Datang di STIE Dwimulya",
      text: "Kampus Rakyat dan Kampus Perubahan di Serang, Banten.",
      cta: { label: "Pelajari Lebih Lanjut", url: "/tentang-kami" }
    }
    // Add more data fields for other sections based on CMS content
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "STIE Dwimulya - Unggul dalam Pendidikan Ekonomi & Bisnis" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "HeroStatement", $$HeroStatement, {})} ${renderComponent($$result2, "HomepageTemplate", $$HomepageTemplate, { "heroStatementData": homepageData.heroStatement, "Pass": true, "data": true, "for": true, "other": true, "organisms": true, "as": true, "props": true, "Example:": true, "mediaCarouselData": homepageData.carousel, "gridListsData": homepageData.programHighlights, "eventScheduleData": homepageData.upcomingEvents }, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<section> <h2>Institusi dan Visi Kami</h2> <p>Didirikan pada 11 Februari 2009 oleh Yayasan Dwimulya Sahati di Serang, Banten, STIE Dwimulya berkomitmen menyediakan pendidikan ekonomi dan bisnis berkualitas, khususnya bagi yang memiliki keterbatasan finansial. Kami adalah "kampus rakyat" dan "kampus perubahan".</p>  </section> <section> <h2>Program Studi Unggulan</h2>   <p>Temukan program S1 Akuntansi dan S1 Manajemen kami yang terakreditasi BAN-PT.</p>  </section> <section> <h2>Pengabdian Masyarakat dan Penelitian</h2>   <p>Kami aktif dalam pengembangan UMKM lokal melalui program KKM dan penelitian di bidang pariwisata budaya.</p>  </section> ` })} ` })}`;
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
