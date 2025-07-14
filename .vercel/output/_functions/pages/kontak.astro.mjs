import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_zTOg-nuv.mjs';
import { $ as $$Hero } from '../chunks/Hero_CfPE-CmR.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$LeadForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LeadForm;
  const {
    title,
    description,
    width = "grid",
    layout = "left"
  } = Astro2.props;
  const blockClasses = [
    "c-block b-lead-form",
    `b-lead-form--width-${width}`,
    `b-lead-form--layout-${layout}`
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(blockClasses, "class")}> <div class="l-container"> <div class="b-lead-form__container"> <div class="b-lead-form__content"> <h2 class="c-block__title">${title}</h2> <div class="b-lead-form__description">${unescapeHTML(description)}</div> </div> <div class="b-lead-form__form"> <!-- A basic form structure. Implementation would require a backend. --> <form> <div class="form-field"> <label for="email" class="sr-only">Email Address</label> <input type="email" id="email" name="email" placeholder="Your email address" class="form-input"> </div> <button type="submit" class="a-btn a-btn-primary">Submit</button> </form> </div> </div> </div> </div>`;
}, "/home/user/lunar-luminosity/src/components/organisms/lead-form/LeadForm.astro", void 0);

const $$Kontak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kontak Kami - STIE Dwimulya", "description": "Hubungi STIE Dwimulya untuk informasi lebih lanjut. Temukan alamat, nomor telepon, dan kirimkan pertanyaan Anda melalui formulir kontak kami." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Hubungi Kami", "subtitle": "Kami siap membantu Anda. Jangan ragu untuk menghubungi kami." })} ${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-6 grid md:grid-cols-2 gap-12"> <div> <h3 class="text-2xl font-bold mb-4">Informasi Kontak</h3> <p class="mb-2"><strong>Alamat:</strong> Jl. Akses Tol Serang Timur, Kel. Penancangan, Kec. Cipocok Jaya, Kota Serang, Banten</p> <p class="mb-2"><strong>Telepon:</strong> (0254) 123-456</p> <p class="mb-4"><strong>Email:</strong> info@stiedwimulya.ac.id</p> <h3 class="text-2xl font-bold mt-8 mb-4">Peta Lokasi</h3> <div class="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg"> <!-- Placeholder for an embedded map --> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.33649938883!2d106.1758583153479!3d-6.188216995502011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4218d2f17812f9%3A0x7a3c3b0b7405a32!2sSTIE%20Dwimulya!5e0!3m2!1sen!2sid!4v1678886400000!5m2!1sen!2sid" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe> </div> </div> <div> <h3 class="text-2xl font-bold mb-4">Kirimkan Pertanyaan</h3> ${renderComponent($$result2, "LeadForm", $$LeadForm, {})} </div> </div> </section> ` })}`;
}, "/home/user/lunar-luminosity/src/pages/kontak.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/kontak.astro";
const $$url = "/kontak";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kontak,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
