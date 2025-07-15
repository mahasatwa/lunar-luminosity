import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"arsip-rilis-pers\">Arsip Rilis Pers</h1>\n<p>Bagian ini berisi arsip rilis pers resmi dari STIE Dwimulya.</p>\n<hr>\n<p><strong>Catatan:</strong> Konten spesifik rilis pers (judul, tanggal, ringkasan, tautan ke file PDF atau halaman detail) perlu ditambahkan dan diperbarui secara manual oleh administrator situs.</p>\n<hr>\n<h2 id=\"rilis-pers-terbaru\">Rilis Pers Terbaru</h2>\n<ul>\n<li><strong>[Tanggal Rilis]:</strong> [Judul Rilis Pers Terbaru]\n[Ringkasan singkat rilis pers terbaru.]\n[Baca Selengkapnya / Unduh PDF] - [Tautan]</li>\n</ul>\n<h2 id=\"arsip\">Arsip</h2>\n<ul>\n<li>\n<p><strong>[Tahun/Bulan]:</strong></p>\n<ul>\n<li>[Tanggal]: [Judul Rilis Pers] - [Tautan]</li>\n<li>[Tanggal]: [Judul Rilis Pers] - [Tautan]</li>\n<li>…</li>\n</ul>\n</li>\n<li>\n<p><strong>[Tahun/Bulan Sebelumnya]:</strong></p>\n<ul>\n<li>[Tanggal]: [Judul Rilis Pers] - [Tautan]</li>\n<li>…</li>\n</ul>\n</li>\n</ul>\n<!-- Tambahkan daftar rilis pers lainnya di sini -->";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/rilis-pers.md";
				const url = undefined;
				function rawContent() {
					return "# Arsip Rilis Pers\n\nBagian ini berisi arsip rilis pers resmi dari STIE Dwimulya.\n\n---\n\n**Catatan:** Konten spesifik rilis pers (judul, tanggal, ringkasan, tautan ke file PDF atau halaman detail) perlu ditambahkan dan diperbarui secara manual oleh administrator situs.\n\n---\n\n## Rilis Pers Terbaru\n\n*   **[Tanggal Rilis]:** [Judul Rilis Pers Terbaru]\n    [Ringkasan singkat rilis pers terbaru.]\n    [Baca Selengkapnya / Unduh PDF] - [Tautan]\n\n## Arsip\n\n*   **[Tahun/Bulan]:**\n    *   [Tanggal]: [Judul Rilis Pers] - [Tautan]\n    *   [Tanggal]: [Judul Rilis Pers] - [Tautan]\n    *   ...\n\n*   **[Tahun/Bulan Sebelumnya]:**\n    *   [Tanggal]: [Judul Rilis Pers] - [Tautan]\n    *   ...\n\n<!-- Tambahkan daftar rilis pers lainnya di sini -->\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"arsip-rilis-pers","text":"Arsip Rilis Pers"},{"depth":2,"slug":"rilis-pers-terbaru","text":"Rilis Pers Terbaru"},{"depth":2,"slug":"arsip","text":"Arsip"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
