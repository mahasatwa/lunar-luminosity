import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"statistik-kampus--fakta-cepat-stie-dwimulya\">Statistik Kampus &#x26; Fakta Cepat STIE Dwimulya</h1>\n<p>Berikut adalah beberapa fakta dan statistik penting mengenai STIE Dwimulya yang menunjukkan pertumbuhan, kualitas, dan kontribusi kami dalam pendidikan tinggi ekonomi:</p>\n<ul>\n<li><strong>Tahun Pendirian:</strong> [Tahun Pendirian]</li>\n<li><strong>Jumlah Program Studi:</strong> [Jumlah Program Studi, contoh: 2 (S1 Akuntansi, S1 Manajemen)]</li>\n<li><strong>Total Mahasiswa Aktif:</strong> Lebih dari [Jumlah] mahasiswa</li>\n<li><strong>Jumlah Dosen Tetap:</strong> Lebih dari [Jumlah] dosen</li>\n<li><strong>Rasio Dosen Mahasiswa:</strong> 1 : [Rasio, contoh: 1:30], memastikan perhatian yang memadai.</li>\n<li><strong>Akreditasi Institusi:</strong> [Peringkat Akreditasi, contoh: Unggul/A/B]</li>\n<li><strong>Jumlah Alumni:</strong> Lebih dari [Jumlah] alumni yang tersebar di berbagai sektor.</li>\n<li><strong>Rata-rata Waktu Tunggu Lulusan untuk Mendapatkan Pekerjaan:</strong> [Jumlah] bulan (misalnya: &#x3C; 6 bulan)</li>\n<li><strong>Persentase Lulusan yang Bekerja di Bidang Relevan:</strong> [Persentase, contoh: > 80%]</li>\n<li><strong>Luas Area Kampus:</strong> Sekitar [Jumlah] meter persegi.</li>\n<li><strong>Jumlah Organisasi Mahasiswa:</strong> [Jumlah] organisasi mahasiswa aktif.</li>\n<li><strong>Jumlah Beasiswa yang Tersedia Setiap Tahun:</strong> Rata-rata [Jumlah] jenis beasiswa.</li>\n</ul>\n<p>Fakta-fakta ini menunjukkan komitmen STIE Dwimulya terhadap keunggulan akademik, pengembangan karir mahasiswa, dan kontribusi terhadap masyarakat.</p>";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/statistik-kampus-fakta-cepat.md";
				const url = undefined;
				function rawContent() {
					return "# Statistik Kampus & Fakta Cepat STIE Dwimulya\n\nBerikut adalah beberapa fakta dan statistik penting mengenai STIE Dwimulya yang menunjukkan pertumbuhan, kualitas, dan kontribusi kami dalam pendidikan tinggi ekonomi:\n\n*   **Tahun Pendirian:** [Tahun Pendirian]\n*   **Jumlah Program Studi:** [Jumlah Program Studi, contoh: 2 (S1 Akuntansi, S1 Manajemen)]\n*   **Total Mahasiswa Aktif:** Lebih dari [Jumlah] mahasiswa\n*   **Jumlah Dosen Tetap:** Lebih dari [Jumlah] dosen\n*   **Rasio Dosen Mahasiswa:** 1 : [Rasio, contoh: 1:30], memastikan perhatian yang memadai.\n*   **Akreditasi Institusi:** [Peringkat Akreditasi, contoh: Unggul/A/B]\n*   **Jumlah Alumni:** Lebih dari [Jumlah] alumni yang tersebar di berbagai sektor.\n*   **Rata-rata Waktu Tunggu Lulusan untuk Mendapatkan Pekerjaan:** [Jumlah] bulan (misalnya: < 6 bulan)\n*   **Persentase Lulusan yang Bekerja di Bidang Relevan:** [Persentase, contoh: > 80%]\n*   **Luas Area Kampus:** Sekitar [Jumlah] meter persegi.\n*   **Jumlah Organisasi Mahasiswa:** [Jumlah] organisasi mahasiswa aktif.\n*   **Jumlah Beasiswa yang Tersedia Setiap Tahun:** Rata-rata [Jumlah] jenis beasiswa.\n\nFakta-fakta ini menunjukkan komitmen STIE Dwimulya terhadap keunggulan akademik, pengembangan karir mahasiswa, dan kontribusi terhadap masyarakat.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"statistik-kampus--fakta-cepat-stie-dwimulya","text":"Statistik Kampus & Fakta Cepat STIE Dwimulya"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
