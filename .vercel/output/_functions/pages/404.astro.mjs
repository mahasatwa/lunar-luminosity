import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BfQs_CC2.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Ch54PjWF.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-[50vh] flex flex-col items-center justify-center text-center"> <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1> <p class="text-xl text-gray-600 mb-8">Page not found</p> <a href="/" class="bg-primary text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
Go Home
</a> </div> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/404.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
