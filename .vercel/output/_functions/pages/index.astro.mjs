import { c as createAstro, a as createComponent, d as renderComponent, F as Fragment, r as renderTemplate, e as renderSlot, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_B8HYKlh3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DypUevl7.mjs';
import 'clsx';
/* empty css                                 */
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

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { variant = "primary" } = Astro2.props;
  const baseStyles = `
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;
  const variantStyles = {
    primary: `
    background-color: #007bff; /* Example primary color */
    color: white;
  `,
    secondary: `
    background-color: #6c757d; /* Example secondary color */
    color: white;
  `,
    tertiary: `
    background-color: transparent;
    color: #007bff; /* Example primary color for text */
    border: 1px solid #007bff;
  `
  };
  const buttonStyles = `${baseStyles} ${variantStyles[variant]}`;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute([buttonStyles], "class:list")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/home/user/lunar-luminosity/src/components/atoms/buttons/Button.astro", void 0);

const $$HeroStatement = createComponent(($$result, $$props, $$slots) => {
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

const $$HomepageTemplate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> <!-- Homepage Template: Assembles the main content organisms for the homepage --> ${renderComponent($$result, "HeroStatement", $$HeroStatement, {})} ${renderComponent($$result, "MediaCarousel", $$MediaCarousel, {})} ${renderComponent($$result, "GridLists", $$GridLists, {})} <!-- Add more organism components here as needed for the homepage --> </main>`;
}, "/home/user/lunar-luminosity/src/components/templates/homepage-template/HomepageTemplate.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const homepageData = {
    seo: {
      title: "STIE Dwimulya - Unggul dalam Pendidikan Ekonomi & Bisnis",
      description: "STIE Dwimulya, kampus rakyat dan kampus perubahan di Serang, Banten. Menawarkan S1 Akuntansi dan S1 Manajemen terakreditasi BAN-PT. Fokus pada akses pendidikan, pemberdayaan UMKM, dan penelitian budaya."
    }
    // Data for the organisms within the template will be passed down.
    // Example: heroStatementData, mediaCarouselData, etc.
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": homepageData.seo.title, "description": homepageData.seo.description }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HomepageTemplate", $$HomepageTemplate, { "heroStatementData": homepageData.heroStatement })} ` })}`;
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
