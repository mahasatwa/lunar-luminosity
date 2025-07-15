import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import { c as cn, d as $$Button } from './Layout_Y_pXMfm_.mjs';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { v2 } from 'cloudinary';

const $$Astro$1 = createAstro("https://www.stiedwimulya.ac.id");
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  const { as: Element, text, size, addClass } = Astro2.props;
  const sizeClasses = {
    xl: "text-4xl md:text-5xl lg:text-6xl font-extrabold",
    lg: "text-3xl md:text-4xl font-bold",
    md: "text-2xl font-bold",
    sm: "text-xl font-semibold"
  };
  const finalSize = size || (Element === "h1" ? "xl" : Element === "h2" ? "lg" : "md");
  return renderTemplate`${renderComponent($$result, "Element", Element, { "class": cn(sizeClasses[finalSize], addClass) }, { "default": ($$result2) => renderTemplate`${text}` })}`;
}, "/home/user/lunar-luminosity/src/components/atoms/heading/Heading.astro", void 0);

function getOptimizedImageUrl(publicId, options = {}) {
  const {
    width,
    height,
    crop = "fill",
    quality = "auto",
    format = "auto"
  } = options;
  const transformation = {
    width,
    height,
    crop,
    quality,
    format,
    fetch_format: format
  };
  return v2.url(publicId, {
    transformation: [transformation],
    secure: true
  });
}
function getResponsiveImageUrl(publicId, breakpoints = [640, 768, 1024, 1280, 1536]) {
  return breakpoints.map(
    (width) => getOptimizedImageUrl(publicId, {
      width,
      quality: 80,
      format: "auto"
    })
  );
}
function getSrcSet(publicId) {
  const breakpoints = [640, 768, 1024, 1280, 1536];
  const urls = getResponsiveImageUrl(publicId, breakpoints);
  return urls.map((url, index) => `${url} ${breakpoints[index]}w`).join(", ");
}

const ResponsiveImage = ({
  publicId,
  width,
  height,
  alt,
  className
}) => {
  const imageUrl = getOptimizedImageUrl(publicId, {
    width,
    height,
    crop: "fit"
  });
  const srcSetValue = getSrcSet(publicId);
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: imageUrl,
      srcSet: srcSetValue,
      sizes: "(max-width: 640px) 100vw, 640px",
      width,
      height,
      alt,
      className,
      loading: "lazy"
    }
  );
};

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { title, subtitle, backgroundImage, buttons, imageAlt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative text-white"> <div class="absolute inset-0 bg-black opacity-50 z-10"></div> ${renderComponent($$result, "ResponsiveImage", ResponsiveImage, { "src": backgroundImage, "alt": imageAlt || `Background image for ${title}`, "addClass": "absolute inset-0 w-full h-full object-cover", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/user/lunar-luminosity/src/components/utils/ResponsiveImage.tsx", "client:component-export": "default" })} <div class="relative z-20 container mx-auto px-6 py-24 md:py-32 text-center"> ${renderComponent($$result, "Heading", $$Heading, { "as": "h1", "text": title, "addClass": "mb-4" })} <p class="max-w-3xl mx-auto text-lg md:text-xl mb-8">${subtitle}</p> ${buttons && buttons.length > 0 && renderTemplate`<div class="flex justify-center space-x-4"> ${buttons.map((btn) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "label": btn.text, "href": btn.href, "style": btn.style })}`)} </div>`} </div> </section>`;
}, "/home/user/lunar-luminosity/src/components/organisms/hero/Hero.astro", void 0);

export { $$Hero as $, ResponsiveImage as R, $$Heading as a };
