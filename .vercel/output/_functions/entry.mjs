import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_GjDZ9izV.mjs';
import { manifest } from './manifest_CfOoaLX-.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/articles/first-article.astro.mjs');
const _page3 = () => import('./pages/programs/akuntansi.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const _page5 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.13_@types+node@22.15.17_jiti@2.4.2_lightningcss@1.29.3_rollup@4.40.2_terser@5.39.0_typescript@5.8.3_yaml@2.7.1/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/articles/first-article.astro", _page2],
    ["src/pages/programs/akuntansi.astro", _page3],
    ["src/pages/index.astro", _page4],
    ["src/pages/[...slug].astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bf5302af-0aea-4249-a482-433cba37bc47",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
