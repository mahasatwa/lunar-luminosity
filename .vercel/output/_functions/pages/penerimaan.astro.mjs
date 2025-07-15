import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DUFz-yKd.mjs';
import { $ as $$Hero } from '../chunks/Hero_BZUYs9dj.mjs';
import 'clsx';
import { $ as $$Card } from '../chunks/Card_CMFR0zbW.mjs';
import { $ as $$Interstitial } from '../chunks/Interstitial_BO1lcwza.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$Columns = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
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

const $$Penerimaan = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Penerimaan Mahasiswa Baru - STIE Dwimulya", "description": "Informasi lengkap mengenai pendaftaran, jadwal, biaya, dan beasiswa untuk calon mahasiswa baru STIE Dwimulya." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Penerimaan Mahasiswa Baru", "subtitle": "Bergabunglah dengan STIE Dwimulya dan jadilah bagian dari perubahan.", "backgroundImage": "https://images.pexels.com/photos/4146237/pexels-photo-4146237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", "buttons": [{ text: "Daftar Sekarang", href: "#form-pendaftaran", style: "primary" }] })} ${maybeRenderHead()}<section class="py-16"> <div class="container mx-auto px-6"> <h2 class="text-3xl font-bold text-center mb-12">Prosedur Pendaftaran</h2> ${renderComponent($$result2, "Columns", $$Columns, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "title": "1. Pendaftaran Online", "text": "Isi formulir pendaftaran secara online melalui portal pendaftaran kami. Pastikan semua data terisi dengan benar.", "icon": "tabler:file-text" })} ${renderComponent($$result3, "Card", $$Card, { "title": "2. Seleksi Berkas", "text": "Tim kami akan melakukan verifikasi dan seleksi berkas yang telah Anda kirimkan. Pengumuman kelulusan akan diinformasikan.", "icon": "tabler:zoom-check" })} ${renderComponent($$result3, "Card", $$Card, { "title": "3. Daftar Ulang", "text": "Calon mahasiswa yang dinyatakan lulus seleksi dapat melakukan daftar ulang sesuai dengan jadwal yang telah ditentukan.", "icon": "tabler:checkbox" })} ` })} </div> </section> <section class="bg-gray-100 py-16"> <div class="container mx-auto px-6"> <h2 class="text-3xl font-bold text-center mb-12">Jadwal Penting</h2> <div class="text-center mb-8"> <p class="text-lg text-gray-700 mb-4">Untuk informasi jadwal pendaftaran, seleksi, dan daftar ulang terlengkap, silakan kunjungi:</p> <a href="/akademik/kalender" class="btn btn-primary inline-block">Kalender Akademik Lengkap</a> </div> <div class="text-center mb-8"> <h3 class="text-2xl font-semibold mb-4">Gelombang Pendaftaran [Tahun Akademik]</h3> <ul class="list-disc list-inside mx-auto max-w-md text-left"> <li>**Pendaftaran Gelombang I:** [Tanggal Mulai Gelombang I] - [Tanggal Akhir Gelombang I]</li> <li>**Tes Masuk Gelombang I:** [Tanggal Tes Gelombang I]</li> <li>**Pengumuman Hasil Gelombang I:** [Tanggal Pengumuman Gelombang I]</li> <li>**Daftar Ulang Gelombang I:** [Tanggal Mulai Daftar Ulang Gelombang I] - [Tanggal Akhir Daftar Ulang Gelombang I]</li> <li>**Pendaftaran Gelombang II:** [Tanggal Mulai Gelombang II] - [Tanggal Akhir Gelombang II]</li> <li>**Tes Masuk Gelombang II:** [Tanggal Tes Gelombang II]</li> <li>**Pengumuman Hasil Gelombang II:** [Tanggal Pengumuman Gelombang II]</li> <li>**Daftar Ulang Gelombang II:** [Tanggal Mulai Daftar Ulang Gelombang II] - [Tanggal Akhir Daftar Ulang Gelombang II]</li> </ul> <p class="text-sm text-gray-500 mt-4">*Jadwal di atas adalah perkiraan dan dapat berubah sewaktu-waktu. Mohon pantau pengumuman resmi di situs web ini.</p> </div> </div> </section> <section class="py-16"> <div class="container mx-auto px-6 max-w-3xl prose"> <h2 class="text-3xl font-bold text-center mb-8">Persyaratan Pendaftaran</h2> <p>Berikut adalah persyaratan umum untuk mendaftar di STIE Dwimulya. Untuk persyaratan spesifik program studi, silakan lihat detail di bawah:</p> <ul> <li>Lulusan SMA/SMK atau sederajat.</li> <li>Mengisi formulir pendaftaran online dengan lengkap dan benar.</li> <li>Melampirkan dokumen yang disyaratkan (Scan Ijazah, Transkrip Nilai, Akta Kelahiran, Kartu Keluarga, KTP, Pas Foto). Detail dokumen akan diinformasikan pada saat pendaftaran online.</li> <li>Membayar biaya pendaftaran.</li> <li>Mengikuti tes seleksi masuk (jika ada).</li> </ul> <h3 class="text-2xl font-semibold mt-8 mb-4">Persyaratan Khusus Program Studi</h3> <h4>S1 Akuntansi</h4> <p>Persyaratan khusus untuk program studi S1 Akuntansi mencakup:</p> <ul> <li>[Detail persyaratan khusus S1 Akuntansi, contoh: tidak buta warna parsial/total].</li> <li>[Persyaratan tambahan lainnya untuk S1 Akuntansi].</li> </ul> <h4>S1 Manajemen</h4> <p>Persyaratan khusus untuk program studi S1 Manajemen mencakup:</p> <ul> <li>[Detail persyaratan khusus S1 Manajemen].</li> <li>[Persyaratan tambahan lainnya untuk S1 Manajemen].
</li></ul> <p class="text-sm text-gray-500 mt-4">*Detail persyaratan dokumen dan kualifikasi dapat bervariasi. Mohon cek informasi terbaru di portal pendaftaran online atau hubungi tim admisi.</p> </div> </section> <section class="bg-gray-100 py-16"> <div class="container mx-auto px-6 max-w-3xl prose"> <h2 class="text-3xl font-bold text-center mb-8">Informasi untuk Mahasiswa Internasional</h2> <p>STIE Dwimulya menyambut calon mahasiswa dari berbagai negara. Kami siap membantu Anda dalam proses pendaftaran dan transisi studi di Indonesia.</p> <p>[Informasi spesifik tentang proses pendaftaran untuk mahasiswa internasional, termasuk persyaratan visa, legalisasi dokumen, dan tes kemahiran berbahasa Indonesia/Inggris. Gunakan placeholder jika detail belum final.]</p> <p>[Informasi tentang layanan dukungan yang tersedia bagi mahasiswa internasional, seperti orientasi, bantuan akomodasi, dan dukungan akademik/non-akademik. Gunakan placeholder jika detail belum final.]</p> </div> </section> ${renderComponent($$result2, "Interstitial", $$Interstitial, { "title": "Kesempatan Beasiswa & Bantuan Keuangan", "content": "Jangan biarkan biaya menjadi penghalang mimpi Anda. STIE Dwimulya menyediakan beragam program beasiswa dan bantuan keuangan untuk mahasiswa berprestasi dan yang membutuhkan.", "button": { text: "Pelajari Beasiswa", href: "/beasiswa" }, "backgroundImage": "https://images.pexels.com/photos/3762804/pexels-photo-3762804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" })} <section class="py-16" id="form-pendaftaran"> <div class="container mx-auto px-6 text-center"> <h2 class="text-3xl font-bold mb-8">Siap Bergabung?</h2> <p class="text-lg text-gray-700 mb-6">Daftar sekarang dan mulailah perjalanan akademik Anda bersama STIE Dwimulya!</p> <a href="[URL Formulir Pendaftaran Online]" class="btn btn-lg btn-secondary">[Teks Tombol Pendaftaran, contoh: Isi Formulir Pendaftaran Online]</a> <p class="text-sm text-gray-500 mt-4">*Link pendaftaran online resmi akan diaktifkan sesuai jadwal penerimaan mahasiswa baru. Mohon pantau halaman ini secara berkala.</p> </div> </section> ` })}`;
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
