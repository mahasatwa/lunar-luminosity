import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_B8HYKlh3.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const {
    title,
    leadin,
    underline,
    ctaLabel,
    ctaUrl,
    backgroundImageUrl,
    backgroundVideoUrl,
    theme = "dark",
    titleSize = "large",
    overlay
  } = Astro2.props;
  const blockClasses = [
    "c-block b-hero",
    theme === "light" ? "t-theme--light" : "",
    `b-hero__media-overlay--${overlay}`
  ].join(" ");
  const titleClasses = `b-hero__title b-hero__title--${titleSize}`;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(blockClasses, "class")}${addAttribute(backgroundImageUrl ? `background-image: url(${backgroundImageUrl})` : "", "style")}> ${backgroundVideoUrl && renderTemplate`<video class="b-hero__bg-video" autoplay loop muted playsinline> <source${addAttribute(backgroundVideoUrl, "src")} type="video/mp4"> </video>`} <div class="l-container b-hero__content"> <div class="c-content-block text-center"> ${leadin && renderTemplate`<div class="c-content-block__leadin b-hero__leadin">${leadin}</div>`} <h1${addAttribute(titleClasses, "class")}>${title}</h1> ${underline && renderTemplate`<p class="b-hero__underline">${underline}</p>`} ${ctaLabel && ctaUrl && renderTemplate`<div class="c-content-block__cta"> <a${addAttribute(ctaUrl, "href")} class="a-btn a-btn-primary">${ctaLabel}</a> </div>`} </div> </div> <div class="b-hero__bottom-line"></div> </div>`;
}, "/home/user/lunar-luminosity/src/components/organisms/hero/Hero.astro", void 0);

export { $$Hero as $ };
