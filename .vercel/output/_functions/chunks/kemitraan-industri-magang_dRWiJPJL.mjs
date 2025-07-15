import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"kemitraan-industri--program-magang-stie-dwimulya\">Kemitraan Industri &#x26; Program Magang STIE Dwimulya</h1>\n<p>STIE Dwimulya menjalin kemitraan strategis dengan berbagai perusahaan dan institusi, baik swasta maupun pemerintah, untuk memperkaya pengalaman belajar mahasiswa dan mempersiapkan mereka menghadapi dunia kerja. Kemitraan ini terwujud dalam berbagai bentuk, termasuk program magang, kuliah tamu, proyek kolaborasi, hingga rekrutmen lulusan.</p>\n<h2 id=\"manfaat-kemitraan-industri\">Manfaat Kemitraan Industri:</h2>\n<ul>\n<li><strong>Pengalaman Praktis:</strong> Mahasiswa mendapatkan kesempatan untuk mengaplikasikan teori yang dipelajari di kelas ke dalam situasi kerja nyata.</li>\n<li><strong>Pengembangan Jaringan:</strong> Membangun koneksi profesional dengan para ahli dan praktisi di industri.</li>\n<li><strong>Peluang Karir:</strong> Meningkatkan prospek kerja setelah lulus melalui program magang yang berpotensi menjadi penawaran pekerjaan.</li>\n<li><strong>Kurikulum Relevan:</strong> Masukan dari industri membantu kami dalam menyusun kurikulum yang selalu relevan dengan kebutuhan pasar kerja.</li>\n</ul>\n<h2 id=\"program-magang-unggulan\">Program Magang Unggulan:</h2>\n<p>Kami secara aktif memfasilitasi mahasiswa untuk mengikuti program magang di berbagai perusahaan terkemuka. Beberapa sektor industri tempat mahasiswa kami biasa magang meliputi:</p>\n<ul>\n<li><strong>Sektor Keuangan:</strong> Bank (BCA, Mandiri, BRI), Perusahaan Asuransi (Prudential, AXA), Lembaga Pembiayaan.</li>\n<li><strong>Perusahaan Manufaktur:</strong> [Contoh: PT Indofood Sukses Makmur Tbk, PT Astra International Tbk]</li>\n<li><strong>Kantor Akuntan Publik (KAP):</strong> [Contoh: KAP Deloitte, EY, PwC, KPMG, atau KAP Nasional]</li>\n<li><strong>Konsultan:</strong> Konsultan Manajemen, Konsultan Pajak, Konsultan Keuangan.</li>\n<li><strong>Start-up &#x26; Teknologi:</strong> Perusahaan teknologi yang membutuhkan talenta di bidang keuangan, pemasaran, atau operasional.</li>\n<li><strong>Pemerintahan/BUMN:</strong> Kementerian Keuangan, Bank Indonesia, BUMN sektor keuangan atau non-keuangan.</li>\n</ul>\n<p>Kami memiliki unit khusus yang bertugas menghubungkan mahasiswa dengan peluang magang yang sesuai dengan minat dan program studi mereka. Kami juga terus memperluas jaringan kemitraan untuk memberikan lebih banyak pilihan bagi mahasiswa.</p>";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/kemitraan-industri-magang.md";
				const url = undefined;
				function rawContent() {
					return "# Kemitraan Industri & Program Magang STIE Dwimulya\n\nSTIE Dwimulya menjalin kemitraan strategis dengan berbagai perusahaan dan institusi, baik swasta maupun pemerintah, untuk memperkaya pengalaman belajar mahasiswa dan mempersiapkan mereka menghadapi dunia kerja. Kemitraan ini terwujud dalam berbagai bentuk, termasuk program magang, kuliah tamu, proyek kolaborasi, hingga rekrutmen lulusan.\n\n## Manfaat Kemitraan Industri:\n\n*   **Pengalaman Praktis:** Mahasiswa mendapatkan kesempatan untuk mengaplikasikan teori yang dipelajari di kelas ke dalam situasi kerja nyata.\n*   **Pengembangan Jaringan:** Membangun koneksi profesional dengan para ahli dan praktisi di industri.\n*   **Peluang Karir:** Meningkatkan prospek kerja setelah lulus melalui program magang yang berpotensi menjadi penawaran pekerjaan.\n*   **Kurikulum Relevan:** Masukan dari industri membantu kami dalam menyusun kurikulum yang selalu relevan dengan kebutuhan pasar kerja.\n\n## Program Magang Unggulan:\n\nKami secara aktif memfasilitasi mahasiswa untuk mengikuti program magang di berbagai perusahaan terkemuka. Beberapa sektor industri tempat mahasiswa kami biasa magang meliputi:\n\n*   **Sektor Keuangan:** Bank (BCA, Mandiri, BRI), Perusahaan Asuransi (Prudential, AXA), Lembaga Pembiayaan.\n*   **Perusahaan Manufaktur:** [Contoh: PT Indofood Sukses Makmur Tbk, PT Astra International Tbk]\n*   **Kantor Akuntan Publik (KAP):** [Contoh: KAP Deloitte, EY, PwC, KPMG, atau KAP Nasional]\n*   **Konsultan:** Konsultan Manajemen, Konsultan Pajak, Konsultan Keuangan.\n*   **Start-up & Teknologi:** Perusahaan teknologi yang membutuhkan talenta di bidang keuangan, pemasaran, atau operasional.\n*   **Pemerintahan/BUMN:** Kementerian Keuangan, Bank Indonesia, BUMN sektor keuangan atau non-keuangan.\n\nKami memiliki unit khusus yang bertugas menghubungkan mahasiswa dengan peluang magang yang sesuai dengan minat dan program studi mereka. Kami juga terus memperluas jaringan kemitraan untuk memberikan lebih banyak pilihan bagi mahasiswa.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"kemitraan-industri--program-magang-stie-dwimulya","text":"Kemitraan Industri & Program Magang STIE Dwimulya"},{"depth":2,"slug":"manfaat-kemitraan-industri","text":"Manfaat Kemitraan Industri:"},{"depth":2,"slug":"program-magang-unggulan","text":"Program Magang Unggulan:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
