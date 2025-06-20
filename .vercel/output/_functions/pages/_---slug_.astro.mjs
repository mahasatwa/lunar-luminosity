import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_gD8qDGW6.mjs';
import { $ as $$Layout } from '../chunks/Layout_DGIX28zN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
async function getStaticPaths() {
  const hardcodedSlugs = [
    void 0,
    // Represents the homepage (slug is undefined for '/')
    "tentang-kami",
    // Example slug for an "About Us" page
    "program-studi",
    // Example slug for a "Programs" page
    "kontak"
    // Example slug for a "Contact" page
    // Add more slugs as needed
  ];
  return hardcodedSlugs.map((slug) => {
    return {
      params: { slug }
    };
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const contentSlug = slug === void 0 ? "home" : slug;
  let pageContent;
  if (contentSlug === "home") {
    pageContent = {
      title: "Halaman Utama STIE Dwimulya (Hardcoded)",
      content: `
          <p>Ini adalah konten hardcoded untuk <strong>Halaman Utama</strong>.</p>
          <p>Kami menyambut Anda di website STIE Dwimulya. Temukan informasi tentang program studi, penerimaan mahasiswa baru, dan kehidupan kampus kami.</p>
          <h2>Bagian Hardcoded Lainnya</h2>
          <p>Anda bisa menambahkan lebih banyak HTML di sini untuk halaman home hardcoded.</p>
        `
    };
  } else if (contentSlug === "tentang-kami") {
    pageContent = {
      title: "Tentang STIE Dwimulya (Hardcoded)",
      content: `
          <p>Ini adalah konten hardcoded untuk halaman <strong>Tentang Kami</strong>.</p>
          <p>STIE Dwimulya memiliki sejarah panjang dalam menyediakan pendidikan berkualitas di bidang Ekonomi dan Bisnis. Kami berkomitmen untuk mencetak lulusan yang siap bersaing di dunia kerja.</p>
          <h3>Visi & Misi</h3>
          <p>Deskripsi singkat Visi dan Misi STIE Dwimulya hardcoded.</p>
        `
    };
  } else if (contentSlug === "program-studi") {
    pageContent = {
      title: "Program Studi STIE Dwimulya (Hardcoded)",
      content: `
          <p>Ini adalah konten hardcoded untuk halaman <strong>Program Studi</strong>.</p>
          <p>Kami menawarkan program pendidikan unggulan di bidang Manajemen dan Akuntansi.</p>
          <ul>
            <li>S1 Manajemen: Fokus pada pengelolaan bisnis modern.</li>
            <li>S1 Akuntansi: Mempersiapkan profesional akuntansi yang kompeten.</li>
          </ul>
          <p>Lihat detail kurikulum dan prospek karir untuk setiap program.</p>
        `
    };
  } else if (contentSlug === "kontak") {
    pageContent = {
      title: "Hubungi Kami (Hardcoded)",
      content: `
          <p>Ini adalah konten hardcoded untuk halaman <strong>Kontak</strong>.</p>
          <p>Anda dapat menghubungi kami melalui:</p>
          <ul>
            <li>Alamat: Alamat Kampus STIE Dwimulya (Hardcoded)</li>
            <li>Telepon: (021) XXXX XXXX (Hardcoded)</li>
            <li>Email: info@stiedwimulya.ac.id (Hardcoded)</li>
          </ul>
          <p>Atau kunjungi media sosial kami.</p>
        `
    };
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageContent?.title || "STIE Dwimulya" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="prose lg:prose-xl mx-auto py-8"> ${pageContent ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <h1>${pageContent.title}</h1> <div>${unescapeHTML(pageContent.content)}</div> ` })}` : renderTemplate`<p>Content not found for this slug (Hardcoded fallback).</p>`} </div> ` })}`;
}, "C:/astro/lunar-luminosity/src/pages/[...slug].astro", void 0);

const $$file = "C:/astro/lunar-luminosity/src/pages/[...slug].astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
