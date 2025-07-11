import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, e as addAttribute, d as renderSlot, r as renderComponent } from './astro/server_BfQs_CC2.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */

const $$NavigationBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navigation-bar" data-astro-cid-zvtbmqry> <!-- Placeholder for Logo Atom --> <div class="logo-placeholder" data-astro-cid-zvtbmqry>Logo</div> <ul class="nav-links" data-astro-cid-zvtbmqry> <!-- Placeholder for Navigation Item Molecule (Links) --> <li data-astro-cid-zvtbmqry>Link 1</li> <li data-astro-cid-zvtbmqry>Link 2</li> <li data-astro-cid-zvtbmqry>Link 3</li> </ul> <div class="nav-buttons" data-astro-cid-zvtbmqry> <!-- Placeholder for Button Atom --> <button data-astro-cid-zvtbmqry>Button 1</button> <button data-astro-cid-zvtbmqry>Button 2</button> </div> </nav> `;
}, "/home/user/lunar-luminosity/src/components/molecules/navigation-bar/NavigationBar.astro", void 0);

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

const $$SearchBox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="search-box" data-astro-cid-vgosmadh> <input type="text" placeholder="Search..." class="search-input" data-astro-cid-vgosmadh> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "data-astro-cid-vgosmadh": true }, { "default": ($$result2) => renderTemplate`Search` })} </div> `;
}, "/home/user/lunar-luminosity/src/components/molecules/search-box/SearchBox.astro", void 0);

const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="site-header" data-astro-cid-6jwomyys> <div class="header-content" data-astro-cid-6jwomyys> <!-- Placeholder for Logo --> <div class="logo" data-astro-cid-6jwomyys>Logo Placeholder</div> ${renderComponent($$result, "NavigationBar", $$NavigationBar, { "data-astro-cid-6jwomyys": true })} ${renderComponent($$result, "SearchBox", $$SearchBox, { "data-astro-cid-6jwomyys": true })} </div> </header> `;
}, "/home/user/lunar-luminosity/src/components/organisms/site-header/SiteHeader.astro", void 0);

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-t37fhjje> <div class="container" data-astro-cid-t37fhjje> <!-- This organism contains: --> <!-- Links --> <!-- Contact Information --> <!-- Social Media Icons --> <!-- CTA --> <p data-astro-cid-t37fhjje>Site Footer - Placeholder Content</p> </div> </footer> `;
}, "/home/user/lunar-luminosity/src/components/organisms/site-footer/SiteFooter.astro", void 0);

export { $$SiteHeader as $, $$SiteFooter as a, $$Button as b };
