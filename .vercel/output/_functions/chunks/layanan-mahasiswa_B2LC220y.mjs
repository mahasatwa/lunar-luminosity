import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"layanan-mahasiswa-stie-dwimulya\">Layanan Mahasiswa STIE Dwimulya</h1>\n<p>STIE Dwimulya berkomitmen untuk menyediakan lingkungan belajar yang kondusif dan mendukung kesejahteraan mahasiswa secara menyeluruh. Berbagai layanan tersedia untuk membantu mahasiswa dalam perjalanan akademik dan personal mereka.</p>\n<h2 id=\"jenis-layanan-mahasiswa\">Jenis Layanan Mahasiswa:</h2>\n<ul>\n<li><strong>Bimbingan Akademik &#x26; Konseling:</strong>\n<ul>\n<li><strong>Dosen Pembimbing Akademik:</strong> Setiap mahasiswa akan mendapatkan dosen pembimbing yang akan membantu dalam perencanaan studi, pemilihan mata kuliah, dan konsultasi akademik.</li>\n<li><strong>Konseling Psikologis:</strong> Layanan konseling rahasia untuk membantu mahasiswa mengatasi tantangan pribadi, stres, atau masalah lain yang memengaruhi studi mereka.</li>\n</ul>\n</li>\n<li><strong>Layanan Perpustakaan:</strong>\n<ul>\n<li><strong>Koleksi Lengkap:</strong> Akses ke ribuan buku, jurnal ilmiah, e-book, dan database online yang mendukung semua program studi.</li>\n<li><strong>Bantuan Riset:</strong> Staf perpustakaan siap membantu mahasiswa dalam mencari referensi, menggunakan database, dan mengelola kutipan.</li>\n</ul>\n</li>\n<li><strong>Pusat Karir &#x26; Pengembangan Alumni:</strong>\n<ul>\n<li><strong>Bimbingan Karir:</strong> Workshop, seminar, dan sesi konsultasi individual untuk membantu mahasiswa merencanakan karir mereka.</li>\n<li><strong>Informasi Lowongan Kerja:</strong> Menyediakan informasi terkini tentang peluang magang dan pekerjaan dari berbagai perusahaan mitra.</li>\n<li><strong>Jaringan Alumni:</strong> Menghubungkan mahasiswa dengan alumni yang sukses di berbagai bidang.</li>\n</ul>\n</li>\n<li><strong>Fasilitas Kesehatan:</strong>\n<ul>\n<li><strong>Poli Umum/Klinik Kampus:</strong> Layanan kesehatan dasar untuk mahasiswa di dalam kampus.</li>\n<li><strong>Kerjasama dengan Rumah Sakit/Klinik:</strong> Memfasilitasi akses ke layanan medis yang lebih komprehensif jika diperlukan.</li>\n</ul>\n</li>\n<li><strong>Asrama Mahasiswa (jika ada):</strong> Informasi mengenai fasilitas asrama, tata tertib, dan cara pendaftaran.</li>\n<li><strong>Beasiswa &#x26; Bantuan Keuangan:</strong> Informasi lengkap tentang berbagai jenis beasiswa dan prosedur pengajuannya (sudah ada halaman khusus).</li>\n</ul>\n<p>Kami percaya bahwa dukungan yang komprehensif akan membantu mahasiswa meraih potensi terbaik mereka di STIE Dwimulya.</p>";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/layanan-mahasiswa.md";
				const url = undefined;
				function rawContent() {
					return "# Layanan Mahasiswa STIE Dwimulya\n\nSTIE Dwimulya berkomitmen untuk menyediakan lingkungan belajar yang kondusif dan mendukung kesejahteraan mahasiswa secara menyeluruh. Berbagai layanan tersedia untuk membantu mahasiswa dalam perjalanan akademik dan personal mereka.\n\n## Jenis Layanan Mahasiswa:\n\n*   **Bimbingan Akademik & Konseling:**\n    *   **Dosen Pembimbing Akademik:** Setiap mahasiswa akan mendapatkan dosen pembimbing yang akan membantu dalam perencanaan studi, pemilihan mata kuliah, dan konsultasi akademik.\n    *   **Konseling Psikologis:** Layanan konseling rahasia untuk membantu mahasiswa mengatasi tantangan pribadi, stres, atau masalah lain yang memengaruhi studi mereka.\n*   **Layanan Perpustakaan:**\n    *   **Koleksi Lengkap:** Akses ke ribuan buku, jurnal ilmiah, e-book, dan database online yang mendukung semua program studi.\n    *   **Bantuan Riset:** Staf perpustakaan siap membantu mahasiswa dalam mencari referensi, menggunakan database, dan mengelola kutipan.\n*   **Pusat Karir & Pengembangan Alumni:**\n    *   **Bimbingan Karir:** Workshop, seminar, dan sesi konsultasi individual untuk membantu mahasiswa merencanakan karir mereka.\n    *   **Informasi Lowongan Kerja:** Menyediakan informasi terkini tentang peluang magang dan pekerjaan dari berbagai perusahaan mitra.\n    *   **Jaringan Alumni:** Menghubungkan mahasiswa dengan alumni yang sukses di berbagai bidang.\n*   **Fasilitas Kesehatan:**\n    *   **Poli Umum/Klinik Kampus:** Layanan kesehatan dasar untuk mahasiswa di dalam kampus.\n    *   **Kerjasama dengan Rumah Sakit/Klinik:** Memfasilitasi akses ke layanan medis yang lebih komprehensif jika diperlukan.\n*   **Asrama Mahasiswa (jika ada):** Informasi mengenai fasilitas asrama, tata tertib, dan cara pendaftaran.\n*   **Beasiswa & Bantuan Keuangan:** Informasi lengkap tentang berbagai jenis beasiswa dan prosedur pengajuannya (sudah ada halaman khusus).\n\nKami percaya bahwa dukungan yang komprehensif akan membantu mahasiswa meraih potensi terbaik mereka di STIE Dwimulya.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"layanan-mahasiswa-stie-dwimulya","text":"Layanan Mahasiswa STIE Dwimulya"},{"depth":2,"slug":"jenis-layanan-mahasiswa","text":"Jenis Layanan Mahasiswa:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
