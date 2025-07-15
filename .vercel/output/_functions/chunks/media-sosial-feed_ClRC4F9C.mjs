import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"umpan-media-sosial\">Umpan Media Sosial</h1>\n<p>Bagian ini menampilkan aktivitas terbaru STIE Dwimulya di berbagai platform media sosial.</p>\n<!-- PERHATIAN: Bagian ini memerlukan implementasi teknis untuk menampilkan umpan media sosial secara langsung atau tautan yang jelas ke profil kami. Konten di bawah adalah placeholder dan harus diganti. -->\n<p>Di sini Anda dapat menemukan pembaruan terkini langsung dari akun resmi kami di:</p>\n<ul>\n<li><strong>Twitter:</strong> [Sematkan umpan Twitter terbaru atau tautan ke profil Twitter resmi STIE Dwimulya]</li>\n<li><strong>Instagram:</strong> [Sematkan umpan Instagram terbaru atau tautan ke profil Instagram resmi STIE Dwimulya]</li>\n<li><strong>Facebook:</strong> [Sematkan umpan Facebook terbaru atau tautan ke profil Facebook resmi STIE Dwimulya]</li>\n<li><strong>YouTube:</strong> [Sematkan video terbaru atau tautan ke kanal YouTube resmi STIE Dwimulya]</li>\n</ul>\n<p>Untuk interaksi lebih lanjut, silakan kunjungi profil media sosial kami secara langsung:</p>\n<ul>\n<li>[Tautan ke Profil Twitter Resmi]</li>\n<li>[Tautan ke Profil Instagram Resmi]</li>\n<li>[Tautan ke Profil Facebook Resmi]</li>\n<li>[Tautan ke Kanal YouTube Resmi]</li>\n</ul>\n<!-- Catatan: Integrasi umpan langsung mungkin memerlukan penggunaan widget atau API. Tautan langsung adalah alternatif jika umpan langsung tidak memungkinkan. Pastikan tautan selalu diperbarui. -->";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/media-sosial-feed.md";
				const url = undefined;
				function rawContent() {
					return "# Umpan Media Sosial\n\nBagian ini menampilkan aktivitas terbaru STIE Dwimulya di berbagai platform media sosial.\n\n<!-- PERHATIAN: Bagian ini memerlukan implementasi teknis untuk menampilkan umpan media sosial secara langsung atau tautan yang jelas ke profil kami. Konten di bawah adalah placeholder dan harus diganti. -->\n\nDi sini Anda dapat menemukan pembaruan terkini langsung dari akun resmi kami di:\n\n*   **Twitter:** [Sematkan umpan Twitter terbaru atau tautan ke profil Twitter resmi STIE Dwimulya]\n*   **Instagram:** [Sematkan umpan Instagram terbaru atau tautan ke profil Instagram resmi STIE Dwimulya]\n*   **Facebook:** [Sematkan umpan Facebook terbaru atau tautan ke profil Facebook resmi STIE Dwimulya]\n*   **YouTube:** [Sematkan video terbaru atau tautan ke kanal YouTube resmi STIE Dwimulya]\n\nUntuk interaksi lebih lanjut, silakan kunjungi profil media sosial kami secara langsung:\n\n*   [Tautan ke Profil Twitter Resmi]\n*   [Tautan ke Profil Instagram Resmi]\n*   [Tautan ke Profil Facebook Resmi]\n*   [Tautan ke Kanal YouTube Resmi]\n\n<!-- Catatan: Integrasi umpan langsung mungkin memerlukan penggunaan widget atau API. Tautan langsung adalah alternatif jika umpan langsung tidak memungkinkan. Pastikan tautan selalu diperbarui. -->";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"umpan-media-sosial","text":"Umpan Media Sosial"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
