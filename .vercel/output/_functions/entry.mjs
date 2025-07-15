import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BMzVdb27.mjs';
import { manifest } from './manifest_D1WC96R-.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/akademik/kalender.astro.mjs');
const _page3 = () => import('./pages/akademik/program-studi/s1-akuntansi.astro.mjs');
const _page4 = () => import('./pages/akademik/program-studi/s1-manajemen.astro.mjs');
const _page5 = () => import('./pages/akreditasi.astro.mjs');
const _page6 = () => import('./pages/alumni.astro.mjs');
const _page7 = () => import('./pages/articles/first-article.astro.mjs');
const _page8 = () => import('./pages/beasiswa.astro.mjs');
const _page9 = () => import('./pages/berita/_slug_.astro.mjs');
const _page10 = () => import('./pages/berita.astro.mjs');
const _page11 = () => import('./pages/biaya-kuliah.astro.mjs');
const _page12 = () => import('./pages/dosen.astro.mjs');
const _page13 = () => import('./pages/fakta-cepat.astro.mjs');
const _page14 = () => import('./pages/kampus/kehidupan-kampus.astro.mjs');
const _page15 = () => import('./pages/kampus/sejarah.astro.mjs');
const _page16 = () => import('./pages/kampus/struktur-organisasi.astro.mjs');
const _page17 = () => import('./pages/kampus/visi-misi.astro.mjs');
const _page18 = () => import('./pages/kemitraan.astro.mjs');
const _page19 = () => import('./pages/kontak.astro.mjs');
const _page20 = () => import('./pages/layanan-mahasiswa.astro.mjs');
const _page21 = () => import('./pages/lokasi-kampus.astro.mjs');
const _page22 = () => import('./pages/peluang-karir.astro.mjs');
const _page23 = () => import('./pages/penelitian/kkm.astro.mjs');
const _page24 = () => import('./pages/penelitian/pkm.astro.mjs');
const _page25 = () => import('./pages/penelitian/publikasi-dosen.astro.mjs');
const _page26 = () => import('./pages/penelitian.astro.mjs');
const _page27 = () => import('./pages/penerimaan.astro.mjs');
const _page28 = () => import('./pages/prestasi.astro.mjs');
const _page29 = () => import('./pages/programs/akuntansi.astro.mjs');
const _page30 = () => import('./pages/index.astro.mjs');
const _page31 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/akademik/kalender.astro", _page2],
    ["src/pages/akademik/program-studi/s1-akuntansi.astro", _page3],
    ["src/pages/akademik/program-studi/s1-manajemen.astro", _page4],
    ["src/pages/akreditasi.astro", _page5],
    ["src/pages/alumni.astro", _page6],
    ["src/pages/articles/first-article.astro", _page7],
    ["src/pages/beasiswa.astro", _page8],
    ["src/pages/berita/[slug].astro", _page9],
    ["src/pages/berita.astro", _page10],
    ["src/pages/biaya-kuliah.astro", _page11],
    ["src/pages/dosen.astro", _page12],
    ["src/pages/fakta-cepat.astro", _page13],
    ["src/pages/kampus/kehidupan-kampus.astro", _page14],
    ["src/pages/kampus/sejarah.astro", _page15],
    ["src/pages/kampus/struktur-organisasi.astro", _page16],
    ["src/pages/kampus/visi-misi.astro", _page17],
    ["src/pages/kemitraan.astro", _page18],
    ["src/pages/kontak.astro", _page19],
    ["src/pages/layanan-mahasiswa.astro", _page20],
    ["src/pages/lokasi-kampus.astro", _page21],
    ["src/pages/peluang-karir.astro", _page22],
    ["src/pages/penelitian/kkm.astro", _page23],
    ["src/pages/penelitian/pkm.astro", _page24],
    ["src/pages/penelitian/publikasi-dosen.astro", _page25],
    ["src/pages/penelitian.astro", _page26],
    ["src/pages/penerimaan.astro", _page27],
    ["src/pages/prestasi.astro", _page28],
    ["src/pages/programs/akuntansi.astro", _page29],
    ["src/pages/index.astro", _page30],
    ["src/pages/[...slug].astro", _page31]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c01b5ecf-1fbf-4bb1-ae26-e3ad6663cfce",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
