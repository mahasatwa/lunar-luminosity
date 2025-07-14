import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, r as renderTemplate, d as renderComponent, u as unescapeHTML } from '../chunks/astro/server_B8HYKlh3.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DypUevl7.mjs';
import { $ as $$Hero } from '../chunks/Hero_BHVPH9b9.mjs';
import 'clsx';
import '../chunks/index_CCxZAn8N.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_D63vEc6n.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://www.stiedwimulya.ac.id");
const $$Columns = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Columns;
  const {
    count,
    theme = "dark",
    removeLine = false,
    isStatHeading = false
  } = Astro2.props;
  const blockClasses = [
    "c-block b-columns",
    theme === "light" ? "t-theme--light" : "",
    removeLine ? "b-columns--remove-line" : "",
    isStatHeading ? "stat-heading-style" : ""
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(blockClasses, "class")}> <div class="l-container"> <div class="b-columns__container"> <div${addAttribute([`b-columns__row b-columns--count-${count}`], "class:list")}> <div class="b-columns__col"> ${renderSlot($$result, $$slots["col-1"])} </div> <div class="b-columns__col"> ${renderSlot($$result, $$slots["col-2"])} </div> ${count > 2 && renderTemplate`<div class="b-columns__col"> ${renderSlot($$result, $$slots["col-3"])} </div>`} ${count > 3 && renderTemplate`<div class="b-columns__col"> ${renderSlot($$result, $$slots["col-4"])} </div>`} </div> </div> </div> </div>`;
}, "/home/user/lunar-luminosity/src/components/organisms/columns/Columns.astro", void 0);

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

const $$Penerimaan = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Penerimaan Mahasiswa Baru - STIE Dwimulya", "description": "Informasi lengkap mengenai pendaftaran, jadwal, biaya, dan beasiswa untuk calon mahasiswa baru STIE Dwimulya." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Penerimaan Mahasiswa Baru", "subtitle": "Bergabunglah dengan STIE Dwimulya dan jadilah bagian dari perubahan.", "backgroundImage": "/assets/campus-reception.jpg" })} ${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-6"> <h2 class="text-3xl font-bold text-center mb-12">Prosedur Pendaftaran</h2> ${renderComponent($$result2, "Columns", $$Columns, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "title": "1. Pendaftaran Online", "text": "Isi formulir pendaftaran secara online melalui portal pendaftaran kami. Pastikan semua data terisi dengan benar.", "icon": "tabler:file-text" })} ${renderComponent($$result3, "Card", $$Card, { "title": "2. Seleksi Berkas", "text": "Tim kami akan melakukan verifikasi dan seleksi berkas yang telah Anda kirimkan. Pengumuman kelulusan akan diinformasikan.", "icon": "tabler:zoom-check" })} ${renderComponent($$result3, "Card", $$Card, { "title": "3. Daftar Ulang", "text": "Calon mahasiswa yang dinyatakan lulus seleksi dapat melakukan daftar ulang sesuai dengan jadwal yang telah ditentukan.", "icon": "tabler:checkbox" })} ` })} </div> </section> <section class="bg-gray-100 py-16"> <div class="container mx-auto px-6"> <h2 class="text-3xl font-bold text-center mb-12">Jadwal Penting</h2> <!-- Placeholder untuk tabel jadwal --> <div class="text-center"> <p>Jadwal pendaftaran untuk tahun ajaran 2024/2025 akan segera diumumkan. Mohon periksa kembali halaman ini secara berkala.</p> </div> </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/penerimaan.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/penerimaan.astro";
const $$url = "/penerimaan";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Penerimaan,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
