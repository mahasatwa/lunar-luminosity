import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$SiteHeader, b as $$SiteFooter } from '../../chunks/Layout_zTOg-nuv.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

const $$ProgramPageTemplate = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Program Details - Stie Dwimulya", "data-astro-cid-utwapz2a": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SiteHeader", $$SiteHeader, { "data-astro-cid-utwapz2a": true })} ${maybeRenderHead()}<main data-astro-cid-utwapz2a> <section class="program-hero" data-astro-cid-utwapz2a>  <h2 data-astro-cid-utwapz2a>[Program Title Placeholder]</h2> <p data-astro-cid-utwapz2a>[Program Short Description Placeholder]</p>  </section> <section class="program-overview" data-astro-cid-utwapz2a>  <h3 data-astro-cid-utwapz2a>Overview</h3> <p data-astro-cid-utwapz2a>[Detailed Program Overview Placeholder]</p>  </section> <section class="program-curriculum" data-astro-cid-utwapz2a>  <h3 data-astro-cid-utwapz2a>Curriculum</h3> <ul data-astro-cid-utwapz2a> <li data-astro-cid-utwapz2a>[Course 1 Placeholder]</li> <li data-astro-cid-utwapz2a>[Course 2 Placeholder]</li>  </ul> </section> <section class="program-admissions" data-astro-cid-utwapz2a>  <h3 data-astro-cid-utwapz2a>Admissions</h3> <p data-astro-cid-utwapz2a>[Admissions Information Placeholder]</p>  </section> <section class="program-faculty" data-astro-cid-utwapz2a>  <h3 data-astro-cid-utwapz2a>Faculty</h3>  </section> <section class="program-outcomes" data-astro-cid-utwapz2a>  <h3 data-astro-cid-utwapz2a>Career Outcomes</h3> <p data-astro-cid-utwapz2a>[Career Outcomes Information Placeholder]</p> </section> <section class="program-cta" data-astro-cid-utwapz2a>  <h3 data-astro-cid-utwapz2a>Ready to Apply?</h3>  <button data-astro-cid-utwapz2a>[Apply Now Placeholder]</button> <button data-astro-cid-utwapz2a>[Request Information Placeholder]</button> </section> </main> ${renderComponent($$result2, "SiteFooter", $$SiteFooter, { "data-astro-cid-utwapz2a": true })} ` })} `;
}, "/home/user/lunar-luminosity/src/components/templates/program-page-template/ProgramPageTemplate.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Akuntansi = createComponent(($$result, $$props, $$slots) => {
  const programData = {
    title: "Program Studi S1 Akuntansi",
    description: "Pelajari Akuntansi di STIE Dwimulya. Program S1 Akuntansi terakreditasi BAN-PT.",
    programName: "S1 Akuntansi",
    accreditationStatus: "Terakreditasi BAN-PT",
    accreditationNumber: "BAN-PT Decision No. 157/BAN-PT/AK-XVI/S/VII/2013",
    intro: "Program Studi S1 Akuntansi STIE Dwimulya dirancang untuk menghasilkan lulusan yang kompeten dan siap bersaing di bidang akuntansi. Kurikulum kami mencakup teori dan praktik akuntansi terkini, mempersiapkan Anda untuk berbagai karir di sektor publik dan swasta.",
    sections: [
      {
        heading: "Mengapa Memilih S1 Akuntansi di STIE Dwimulya?",
        content: `
        <p>Kami menawarkan pendidikan berkualitas dengan biaya terjangkau, sejalan dengan misi 'kampus rakyat'.</p>
        <ul>
          <li>Kurikulum relevan dengan kebutuhan industri.</li>
          <li>Dosen berpengalaman dan profesional.</li>
          <li>Fasilitas kampus yang mendukung proses belajar.</li>
          <li>Kesempatan terlibat dalam kegiatan PKM dan KKM yang relevan dengan akuntansi.</li>
        </ul>
      `
      },
      {
        heading: "Prospek Karir",
        content: `
        <p>Lulusan S1 Akuntansi memiliki prospek karir yang luas, antara lain:</p>
        <ul>
          <li>Akuntan Publik</li>
          <li>Akuntan Internal</li>
          <li>Auditor</li>
          <li>Konsultan Pajak</li>
          <li>Staf Keuangan</li>
        </ul>
      `
      },
      {
        heading: "Akreditasi",
        content: `
        <p>Program Studi S1 Akuntansi STIE Dwimulya telah terakreditasi oleh BAN-PT.</p>
        <p>Status Akreditasi: <strong>${programData.accreditationStatus}</strong></p>
        <p>Nomor Keputusan: ${programData.accreditationNumber}</p>
        <!-- Accreditation Badge would go here (dynamic from CMS) -->
      `
      }
    ],
    cta: {
      text: "Daftar Sekarang",
      link: "/pendaftaran"
      // Placeholder link
    }
  };
  return renderTemplate`${renderComponent($$result, "ProgramPageTemplate", $$ProgramPageTemplate, { "title": programData.title, "description": programData.description }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<h1>${programData.programName}</h1> <p>${programData.intro}</p> ${programData.sections.map((section) => renderTemplate`<section> <h2>${section.heading}</h2> <div>${unescapeHTML(section.content)}</div> </section>`)}<a${addAttribute(programData.cta.link, "href")}> <!-- Using Button atom/molecule --> <button>${programData.cta.text}</button> </a>  <section> <h2>Cerita Sukses Alumni</h2> <p>Baca testimoni dari para alumni kami yang sukses di berbagai bidang.</p> <!-- Grid Lists organism or similar (dynamic from CMS) --> </section>  <section> <h2>Dosen Pengajar</h2> <p>Kenali para dosen berpengalaman yang akan membimbing Anda.</p> <!-- Grid Lists organism or similar (dynamic from CMS) --> </section> `, "head": ($$result2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "EducationalProgram",\n      "name": "{programData.programName}",\n      "description": "{programData.description}",\n      "provider": {\n        "@type": "Organization",\n        "name": "STIE Dwimulya"\n        // Add other organization details (dynamic from CMS)\n      },\n      "educationalCredentialAwarded": "Sarjana Akuntansi (S.Ak)", // Example\n      "programPrerequisites": "Lulus SMA/SMK Sederajat", // Example\n      // Add other relevant fields (dynamic from CMS)\n    }\n  <\/script>']))) })}`;
}, "/home/user/lunar-luminosity/src/pages/programs/akuntansi.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/programs/akuntansi.astro";
const $$url = "/programs/akuntansi";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Akuntansi,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
