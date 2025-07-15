import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../chunks/Hero_BZUYs9dj.mjs';
import { $ as $$CardGrid } from '../chunks/CardGrid_B2_H8Ov-.mjs';
import { $ as $$Interstitial } from '../chunks/Interstitial_BO1lcwza.mjs';
export { renderers } from '../renderers.mjs';

const $$Penelitian = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbs = [
    { text: "Home", href: "/" },
    { text: "Penelitian & Publikasi", href: "/penelitian" }
  ];
  const researchAreas = [
    {
      title: "Program KKM (Kuliah Kerja Mahasiswa)",
      description: "Kegiatan pengabdian masyarakat yang terintegrasi dengan kurikulum akademik untuk memberikan dampak positif bagi komunitas lokal.",
      imageUrl: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/penelitian/kkm"
    },
    {
      title: "Penelitian Mahasiswa (PKM)",
      description: "Mendorong mahasiswa untuk berpartisipasi dalam program kreativitas mahasiswa dan mengembangkan ide-ide inovatif di bidang ekonomi.",
      imageUrl: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/penelitian/pkm"
    },
    {
      title: "Publikasi Dosen",
      description: "Menampilkan hasil-hasil penelitian dan publikasi ilmiah yang dilakukan oleh para dosen STIE Dwimulya di berbagai jurnal nasional maupun internasional.",
      imageUrl: "https://images.pexels.com/photos/3760072/pexels-photo-3760072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/penelitian/publikasi-dosen"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Penelitian & Publikasi - STIE Dwimulya", "breadcrumbs": breadcrumbs }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Penelitian & Publikasi", "subtitle": "Wadah inovasi dan kontribusi ilmiah STIE Dwimulya bagi pengembangan ilmu pengetahuan dan masyarakat.", "backgroundImage": "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "buttons": [{ text: "Lihat Publikasi Terbaru", href: "/penelitian/publikasi-dosen", style: "primary" }] })} ${maybeRenderHead()}<section class="section"> <div class="container"> <h2 class="text-3xl font-bold text-center mb-8">Area Penelitian Utama Kami</h2> ${renderComponent($$result2, "CardGrid", $$CardGrid, { "items": researchAreas }, { "default": ($$result3) => renderTemplate`${researchAreas.map((area) => renderTemplate`<div class="bg-white rounded-lg shadow-md overflow-hidden"> <img${addAttribute(area.imageUrl, "src")}${addAttribute(area.title, "alt")} class="w-full h-48 object-cover"> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">${area.title}</h3> <p class="text-gray-600 mb-4">${area.description}</p> <a${addAttribute(area.link, "href")} class="text-blue-600 hover:underline">Pelajari Lebih Lanjut</a> </div> </div>`)}` })} </div> </section> ${renderComponent($$result2, "Interstitial", $$Interstitial, { "title": "Bergabunglah dalam Inovasi Bersama Kami", "content": "STIE Dwimulya aktif dalam berbagai penelitian yang relevan dengan perkembangan ekonomi terkini. Kami mengundang Anda untuk menjadi bagian dari perjalanan ilmiah ini.", "button": { text: "Ajukan Proposal Penelitian", href: "#kontak-penelitian" }, "backgroundImage": "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} ` })}`;
}, "/home/user/lunar-luminosity/src/pages/penelitian.astro", void 0);

const $$file = "/home/user/lunar-luminosity/src/pages/penelitian.astro";
const $$url = "/penelitian";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Penelitian,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
