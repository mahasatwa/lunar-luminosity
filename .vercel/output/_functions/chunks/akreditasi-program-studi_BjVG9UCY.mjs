import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"akreditasi-program-studi-stie-dwimulya\">Akreditasi Program Studi STIE Dwimulya</h1>\n<p>STIE Dwimulya senantiasa berkomitmen untuk menjaga dan meningkatkan kualitas pendidikan melalui akreditasi yang diakui secara nasional. Akreditasi ini menjadi jaminan bagi calon mahasiswa bahwa program studi yang diselenggarakan telah memenuhi standar mutu yang ditetapkan oleh BAN-PT (Badan Akreditasi Nasional Perguruan Tinggi).</p>\n<h2 id=\"status-akreditasi-institusi\">Status Akreditasi Institusi:</h2>\n<ul>\n<li><strong>Institusi:</strong> [Peringkat Akreditasi Institusi, contoh: Unggul/A/B]</li>\n<li><strong>Nomor SK:</strong> [Nomor SK Akreditasi Institusi]</li>\n<li><strong>Berlaku Hingga:</strong> [Tanggal Berakhir Akreditasi Institusi]</li>\n</ul>\n<h2 id=\"status-akreditasi-program-studi\">Status Akreditasi Program Studi:</h2>\n<h3 id=\"program-studi-s1-akuntansi\">Program Studi S1 Akuntansi</h3>\n<ul>\n<li><strong>Peringkat Akreditasi:</strong> [Peringkat Akreditasi Akuntansi, contoh: Unggul/A/B]</li>\n<li><strong>Nomor SK:</strong> [Nomor SK Akreditasi Akuntansi]</li>\n<li><strong>Berlaku Hingga:</strong> [Tanggal Berakhir Akreditasi Akuntansi]</li>\n<li><strong>Keunggulan Akuntansi:</strong> Program studi ini secara konsisten menghasilkan lulusan yang kompeten di bidang akuntansi keuangan, manajerial, perpajakan, dan audit, siap bersaing di pasar kerja global.</li>\n</ul>\n<h3 id=\"program-studi-s1-manajemen\">Program Studi S1 Manajemen</h3>\n<ul>\n<li><strong>Peringkat Akreditasi:</strong> [Peringkat Akreditasi Manajemen, contoh: Unggul/A/B]</li>\n<li><strong>Nomor SK:</strong> [Nomor SK Akreditasi Manajemen]</li>\n<li><strong>Berlaku Hingga:</strong> [Tanggal Berakhir Akreditasi Manajemen]</li>\n<li><strong>Keunggulan Manajemen:</strong> Memfokuskan pada pengembangan kepemimpinan, strategi bisnis, pemasaran, keuangan, dan manajemen sumber daya manusia, mempersiapkan pemimpin dan inovator di berbagai industri.</li>\n</ul>\n<p>Kami terus berupaya untuk mempertahankan dan meningkatkan status akreditasi sebagai bukti komitmen kami terhadap kualitas dan relevansi pendidikan.</p>";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/akreditasi-program-studi.md";
				const url = undefined;
				function rawContent() {
					return "# Akreditasi Program Studi STIE Dwimulya\n\nSTIE Dwimulya senantiasa berkomitmen untuk menjaga dan meningkatkan kualitas pendidikan melalui akreditasi yang diakui secara nasional. Akreditasi ini menjadi jaminan bagi calon mahasiswa bahwa program studi yang diselenggarakan telah memenuhi standar mutu yang ditetapkan oleh BAN-PT (Badan Akreditasi Nasional Perguruan Tinggi).\n\n## Status Akreditasi Institusi:\n\n*   **Institusi:** [Peringkat Akreditasi Institusi, contoh: Unggul/A/B]\n*   **Nomor SK:** [Nomor SK Akreditasi Institusi]\n*   **Berlaku Hingga:** [Tanggal Berakhir Akreditasi Institusi]\n\n## Status Akreditasi Program Studi:\n\n### Program Studi S1 Akuntansi\n\n*   **Peringkat Akreditasi:** [Peringkat Akreditasi Akuntansi, contoh: Unggul/A/B]\n*   **Nomor SK:** [Nomor SK Akreditasi Akuntansi]\n*   **Berlaku Hingga:** [Tanggal Berakhir Akreditasi Akuntansi]\n*   **Keunggulan Akuntansi:** Program studi ini secara konsisten menghasilkan lulusan yang kompeten di bidang akuntansi keuangan, manajerial, perpajakan, dan audit, siap bersaing di pasar kerja global.\n\n### Program Studi S1 Manajemen\n\n*   **Peringkat Akreditasi:** [Peringkat Akreditasi Manajemen, contoh: Unggul/A/B]\n*   **Nomor SK:** [Nomor SK Akreditasi Manajemen]\n*   **Berlaku Hingga:** [Tanggal Berakhir Akreditasi Manajemen]\n*   **Keunggulan Manajemen:** Memfokuskan pada pengembangan kepemimpinan, strategi bisnis, pemasaran, keuangan, dan manajemen sumber daya manusia, mempersiapkan pemimpin dan inovator di berbagai industri.\n\nKami terus berupaya untuk mempertahankan dan meningkatkan status akreditasi sebagai bukti komitmen kami terhadap kualitas dan relevansi pendidikan.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"akreditasi-program-studi-stie-dwimulya","text":"Akreditasi Program Studi STIE Dwimulya"},{"depth":2,"slug":"status-akreditasi-institusi","text":"Status Akreditasi Institusi:"},{"depth":2,"slug":"status-akreditasi-program-studi","text":"Status Akreditasi Program Studi:"},{"depth":3,"slug":"program-studi-s1-akuntansi","text":"Program Studi S1 Akuntansi"},{"depth":3,"slug":"program-studi-s1-manajemen","text":"Program Studi S1 Manajemen"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
