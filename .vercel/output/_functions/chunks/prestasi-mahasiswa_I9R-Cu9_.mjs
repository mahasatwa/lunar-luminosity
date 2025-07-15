import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"prestasi-mahasiswa-stie-dwimulya\">Prestasi Mahasiswa STIE Dwimulya</h1>\n<p>Mahasiswa STIE Dwimulya tidak hanya unggul di bidang akademik, tetapi juga aktif mengukir prestasi di berbagai kompetisi, baik di tingkat regional maupun nasional. Kami bangga dengan semangat juang dan dedikasi mereka yang membawa nama baik almamater.</p>\n<h2 id=\"bidang-prestasi\">Bidang Prestasi:</h2>\n<ul>\n<li><strong>Olimpiade Akuntansi/Manajemen:</strong> Partisipasi dan kemenangan dalam kompetisi ilmiah antar perguruan tinggi.</li>\n<li><strong>Lomba Karya Tulis Ilmiah (LKTI):</strong> Kontribusi ide dan solusi inovatif untuk tantangan ekonomi dan bisnis.</li>\n<li><strong>Kompetisi Bisnis Plan/Startup:</strong> Mengembangkan ide-ide bisnis kreatif yang memiliki potensi pasar.</li>\n<li><strong>Kejuaraan Olahraga:</strong> Prestasi di berbagai cabang olahraga yang diselenggarakan antar kampus atau umum.</li>\n<li><strong>Seni dan Budaya:</strong> Partisipasi dalam ajang seni, musik, atau tari yang menunjukkan bakat non-akademik.</li>\n</ul>\n<h2 id=\"kisah-inspiratif\">Kisah Inspiratif:</h2>\n<ul>\n<li><strong>[Nama Mahasiswa/Tim]:</strong> Meraih Juara [Posisi] dalam [Nama Kompetisi] pada tahun [Tahun]. Proyek/Karya mereka tentang [Deskripsi singkat proyek/karya].</li>\n<li><strong>[Nama Mahasiswa/Tim]:</strong> Terpilih sebagai [Penghargaan/Beasiswa] karena [Alasan Penghargaan].</li>\n</ul>\n<p>Kami terus mendorong mahasiswa untuk mengembangkan potensi diri secara holistik dan memberikan dukungan penuh bagi mereka yang berprestasi.</p>";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/prestasi-mahasiswa.md";
				const url = undefined;
				function rawContent() {
					return "# Prestasi Mahasiswa STIE Dwimulya\n\nMahasiswa STIE Dwimulya tidak hanya unggul di bidang akademik, tetapi juga aktif mengukir prestasi di berbagai kompetisi, baik di tingkat regional maupun nasional. Kami bangga dengan semangat juang dan dedikasi mereka yang membawa nama baik almamater.\n\n## Bidang Prestasi:\n\n*   **Olimpiade Akuntansi/Manajemen:** Partisipasi dan kemenangan dalam kompetisi ilmiah antar perguruan tinggi.\n*   **Lomba Karya Tulis Ilmiah (LKTI):** Kontribusi ide dan solusi inovatif untuk tantangan ekonomi dan bisnis.\n*   **Kompetisi Bisnis Plan/Startup:** Mengembangkan ide-ide bisnis kreatif yang memiliki potensi pasar.\n*   **Kejuaraan Olahraga:** Prestasi di berbagai cabang olahraga yang diselenggarakan antar kampus atau umum.\n*   **Seni dan Budaya:** Partisipasi dalam ajang seni, musik, atau tari yang menunjukkan bakat non-akademik.\n\n## Kisah Inspiratif:\n\n*   **[Nama Mahasiswa/Tim]:** Meraih Juara [Posisi] dalam [Nama Kompetisi] pada tahun [Tahun]. Proyek/Karya mereka tentang [Deskripsi singkat proyek/karya].\n*   **[Nama Mahasiswa/Tim]:** Terpilih sebagai [Penghargaan/Beasiswa] karena [Alasan Penghargaan].\n\nKami terus mendorong mahasiswa untuk mengembangkan potensi diri secara holistik dan memberikan dukungan penuh bagi mereka yang berprestasi.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"prestasi-mahasiswa-stie-dwimulya","text":"Prestasi Mahasiswa STIE Dwimulya"},{"depth":2,"slug":"bidang-prestasi","text":"Bidang Prestasi:"},{"depth":2,"slug":"kisah-inspiratif","text":"Kisah Inspiratif:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
