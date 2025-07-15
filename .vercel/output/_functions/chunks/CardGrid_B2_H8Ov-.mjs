import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, u as unescapeHTML, d as renderComponent } from './astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Card } from './Card_CMFR0zbW.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$CardGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardGrid;
  const {
    title,
    description,
    cards,
    theme = "dark",
    layout = "g-3-up",
    isSpotlight = false
  } = Astro2.props;
  const blockClasses = [
    "c-block b-card-grid",
    theme === "light" ? "t-theme--light" : "",
    isSpotlight ? "spotlight" : ""
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(blockClasses, "class")}> <div class="l-container"> ${(title || description) && renderTemplate`<div class="c-block__header b-card-grid__header c-block__header--inline"> ${title && renderTemplate`<h2 class="c-block__title b-card-grid__title">${title}</h2>`} ${description && renderTemplate`<div class="c-content-block__content-wrap"> <div class="c-content-block__content">${unescapeHTML(description)}</div> </div>`} </div>`} <div${addAttribute(["b-card-grid__loop g-grid", layout], "class:list")}> ${cards.map((card) => renderTemplate`<div class="g-grid__item"> ${renderComponent($$result, "Card", $$Card, { ...card, "isSpotlight": isSpotlight })} </div>`)} </div> </div> </div>`;
}, "/home/user/lunar-luminosity/src/components/organisms/card-grid/CardGrid.astro", void 0);

export { $$CardGrid as $ };
