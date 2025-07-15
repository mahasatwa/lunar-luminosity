import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, r as renderTemplate } from './astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Interstitial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Interstitial;
  const {
    title,
    description,
    imageUrl,
    ctaLabel,
    ctaUrl,
    layout = "left",
    overlay = "dark"
  } = Astro2.props;
  const blockClasses = [
    "c-block b-interstitial",
    `feature-layout-${layout}`,
    `b-interstitial__media-overlay--${overlay}`
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(blockClasses, "class")}> <div class="b-interstitial__container"> <div class="b-interstitial__img c-image--bg"${addAttribute(`background-image: url(${imageUrl})`, "style")}></div> <div class="b-interstitial__content"> <div class="c-content-block b-interstitial__featured_content-container"> <h2 class="b-interstitial__feature-title">${title}</h2> <div class="b-interstitial__feature-text c-content-block__content">${unescapeHTML(description)}</div> ${ctaLabel && ctaUrl && renderTemplate`<div class="c-content-block__cta"> <a${addAttribute(ctaUrl, "href")} class="a-btn a-btn-primary">${ctaLabel}</a> </div>`} </div> </div> </div> </div>`;
}, "/home/user/lunar-luminosity/src/components/organisms/interstitial/Interstitial.astro", void 0);

export { $$Interstitial as $ };
