import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent, u as unescapeHTML } from './astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import './index_CCxZAn8N.mjs';
import { $ as $$Image } from './_astro_assets_tjciG59O.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    title,
    description,
    imageUrl,
    imageAlt = "Card image",
    ctaLabel,
    ctaUrl,
    meta,
    metaSecondary,
    wrapperLink,
    style,
    isSpotlight = false
  } = Astro2.props;
  const cardClasses = [
    "c-card",
    "h-full",
    // Ensure cards in a grid take full height
    wrapperLink ? "has-target-link" : "",
    style === "elevated" ? "c-card--style-elevated" : "",
    style === "outlined" ? "c-card--style-outlined" : "",
    isSpotlight ? "spotlight" : ""
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cardClasses, "class")}> ${wrapperLink && renderTemplate`<a${addAttribute(wrapperLink, "href")} class="c-card__wrapper-link"${addAttribute(title, "aria-label")}></a>`} ${imageUrl && renderTemplate`<div${addAttribute(["c-card__media", { "c-image--spotlight": isSpotlight }], "class:list")}> ${renderComponent($$result, "Image", $$Image, { "src": imageUrl, "alt": imageAlt, "width": "400", "height": "300", "class": "c-image__image w-full h-auto object-cover" })} </div>`} <div class="c-card__content"> ${meta && renderTemplate`<div class="c-card__meta t-overline">${meta}</div>`} <h3 class="c-card__title"> ${wrapperLink ? renderTemplate`<span>${title}</span>` : title} </h3> ${description && renderTemplate`<div class="c-card__description">${unescapeHTML(description)}</div>`} ${metaSecondary && renderTemplate`<div class="c-card__meta--secondary">${metaSecondary}</div>`} </div> ${ctaLabel && ctaUrl && renderTemplate`<div class="c-card__cta"> <a${addAttribute(ctaUrl, "href")} class="a-btn a-btn-secondary"> <span class="a-btn__text">${ctaLabel}</span> </a> </div>`} </div>`;
}, "/home/user/lunar-luminosity/src/components/molecules/card/Card.astro", void 0);

export { $$Card as $ };
