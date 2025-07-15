import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"lokasi--aksesibilitas-kampus-stie-dwimulya\">Lokasi &#x26; Aksesibilitas Kampus STIE Dwimulya</h1>\n<p>Kampus STIE Dwimulya terletak di lokasi strategis yang mudah dijangkau, memberikan kemudahan akses bagi mahasiswa dari berbagai wilayah. Lingkungan sekitar kampus juga mendukung kegiatan akademik dan sosial mahasiswa.</p>\n<h2 id=\"alamat-lengkap\">Alamat Lengkap:</h2>\n<p>[Alamat Lengkap STIE Dwimulya, contoh:\nJl. Raya Contoh No. 123, Kelurahan ABC, Kecamatan XYZ,\nKota Bandung, Jawa Barat, 40XXX]</p>\n<h2 id=\"aksesibilitas\">Aksesibilitas:</h2>\n<h3 id=\"transportasi-umum\">Transportasi Umum:</h3>\n<ul>\n<li><strong>Angkutan Kota (Angkot):</strong> Jalur angkot [Sebutkan jalur angkot yang melewati kampus] berhenti di depan/dekat kampus.</li>\n<li><strong>Bus Trans [Nama Kota]:</strong> Halte bus [Nama Halte] berjarak [Jarak, contoh: 500 meter] dari kampus.</li>\n<li><strong>Kereta Api (Jika Dekat Stasiun):</strong> Stasiun Kereta Api [Nama Stasiun Terdekat] berjarak sekitar [Jarak] dan dapat dijangkau dengan angkutan online/taxi.</li>\n</ul>\n<h3 id=\"kendaraan-pribadi\">Kendaraan Pribadi:</h3>\n<ul>\n<li><strong>Akses Tol:</strong> Dekat dengan gerbang tol [Nama Gerbang Tol Terdekat], memudahkan akses dari luar kota.</li>\n<li><strong>Area Parkir:</strong> Tersedia area parkir yang cukup luas untuk kendaraan roda dua dan roda empat di dalam/sekitar kampus.</li>\n</ul>\n<h3 id=\"fasilitas-umum-di-sekitar-kampus\">Fasilitas Umum di Sekitar Kampus:</h3>\n<ul>\n<li><strong>Pusat Kuliner:</strong> Berbagai pilihan tempat makan dan kafe.</li>\n<li><strong>Mini Market/Supermarket:</strong> Untuk kebutuhan sehari-hari mahasiswa.</li>\n<li><strong>Fasilitas Kesehatan:</strong> Klinik atau apotek terdekat.</li>\n<li><strong>Bank/ATM:</strong> Tersedia ATM dari berbagai bank terkemuka.</li>\n<li><strong>Tempat Ibadah:</strong> Masjid/Gereja/tempat ibadah lainnya di sekitar kampus.</li>\n</ul>\n<p>Lokasi kampus yang strategis ini memudahkan mahasiswa dalam beraktivitas sehari-hari dan mendukung gaya hidup mahasiswa yang dinamis.</p>";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/lokasi-aksesibilitas.md";
				const url = undefined;
				function rawContent() {
					return "# Lokasi & Aksesibilitas Kampus STIE Dwimulya\n\nKampus STIE Dwimulya terletak di lokasi strategis yang mudah dijangkau, memberikan kemudahan akses bagi mahasiswa dari berbagai wilayah. Lingkungan sekitar kampus juga mendukung kegiatan akademik dan sosial mahasiswa.\n\n## Alamat Lengkap:\n\n[Alamat Lengkap STIE Dwimulya, contoh:\nJl. Raya Contoh No. 123, Kelurahan ABC, Kecamatan XYZ,\nKota Bandung, Jawa Barat, 40XXX]\n\n## Aksesibilitas:\n\n### Transportasi Umum:\n\n*   **Angkutan Kota (Angkot):** Jalur angkot [Sebutkan jalur angkot yang melewati kampus] berhenti di depan/dekat kampus.\n*   **Bus Trans [Nama Kota]:** Halte bus [Nama Halte] berjarak [Jarak, contoh: 500 meter] dari kampus.\n*   **Kereta Api (Jika Dekat Stasiun):** Stasiun Kereta Api [Nama Stasiun Terdekat] berjarak sekitar [Jarak] dan dapat dijangkau dengan angkutan online/taxi.\n\n### Kendaraan Pribadi:\n\n*   **Akses Tol:** Dekat dengan gerbang tol [Nama Gerbang Tol Terdekat], memudahkan akses dari luar kota.\n*   **Area Parkir:** Tersedia area parkir yang cukup luas untuk kendaraan roda dua dan roda empat di dalam/sekitar kampus.\n\n### Fasilitas Umum di Sekitar Kampus:\n\n*   **Pusat Kuliner:** Berbagai pilihan tempat makan dan kafe.\n*   **Mini Market/Supermarket:** Untuk kebutuhan sehari-hari mahasiswa.\n*   **Fasilitas Kesehatan:** Klinik atau apotek terdekat.\n*   **Bank/ATM:** Tersedia ATM dari berbagai bank terkemuka.\n*   **Tempat Ibadah:** Masjid/Gereja/tempat ibadah lainnya di sekitar kampus.\n\nLokasi kampus yang strategis ini memudahkan mahasiswa dalam beraktivitas sehari-hari dan mendukung gaya hidup mahasiswa yang dinamis.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"lokasi--aksesibilitas-kampus-stie-dwimulya","text":"Lokasi & Aksesibilitas Kampus STIE Dwimulya"},{"depth":2,"slug":"alamat-lengkap","text":"Alamat Lengkap:"},{"depth":2,"slug":"aksesibilitas","text":"Aksesibilitas:"},{"depth":3,"slug":"transportasi-umum","text":"Transportasi Umum:"},{"depth":3,"slug":"kendaraan-pribadi","text":"Kendaraan Pribadi:"},{"depth":3,"slug":"fasilitas-umum-di-sekitar-kampus","text":"Fasilitas Umum di Sekitar Kampus:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
