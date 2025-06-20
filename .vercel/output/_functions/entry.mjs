import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CN7SC6vm.mjs';
import { manifest } from './manifest_Bzcran6s.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const _page3 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.13_@types+node@22_7744527e7318e7e34185c2f81eafc10d/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/index.astro", _page2],
    ["src/pages/[...slug].astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "736037c7-ac8a-407c-9ee0-275605fde04a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
