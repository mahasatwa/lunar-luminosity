import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"sorotan-media\">Sorotan Media</h1>\n<p>Bagian ini menampilkan liputan dan упоминания STIE Dwimulya di berbagai media eksternal. Ini mencerminkan pengakuan publik dan visibilitas institusi kami.</p>\n<p><em>(Catatan: Konten spesifik sorotan media (judul berita, sumber media, tanggal, tautan ke artikel/video) perlu ditambahkan secara manual di sini.)</em></p>\n<h2 id=\"contoh-placeholder\">Contoh Placeholder:</h2>\n<h3 id=\"judul-berita-menarik\">Judul Berita Menarik</h3>\n<p><strong>Sumber:</strong> [Nama Media] | <strong>Tanggal:</strong> [Tanggal Publikasi]</p>\n<p>[Deskripsi singkat atau kutipan dari berita.]</p>\n<p>[Tautan ke artikel/video asli]([URL Artikel/Video])</p>\n<hr>\n<h3 id=\"stie-dwimulya-tampil-di-nama-program-tvradio\">STIE Dwimulya Tampil di [Nama Program TV/Radio]</h3>\n<p><strong>Sumber:</strong> [Nama Stasiun TV/Radio] | <strong>Tanggal:</strong> [Tanggal Tayang]</p>\n<p>[Ringkasan singkat tentang penampilan atau liputan tersebut.]</p>\n<p>[Tautan ke rekaman (jika tersedia)]([URL Rekaman])</p>\n<hr>\n<p>Silakan periksa secara berkala untuk pembaruan terbaru mengenai STIE Dwimulya di media.</p>";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/sorotan-media.md";
				const url = undefined;
				function rawContent() {
					return "# Sorotan Media\n\nBagian ini menampilkan liputan dan упоминания STIE Dwimulya di berbagai media eksternal. Ini mencerminkan pengakuan publik dan visibilitas institusi kami.\n\n*(Catatan: Konten spesifik sorotan media (judul berita, sumber media, tanggal, tautan ke artikel/video) perlu ditambahkan secara manual di sini.)*\n\n## Contoh Placeholder:\n\n### Judul Berita Menarik\n\n**Sumber:** [Nama Media] | **Tanggal:** [Tanggal Publikasi]\n\n[Deskripsi singkat atau kutipan dari berita.]\n\n[Tautan ke artikel/video asli]([URL Artikel/Video])\n\n---\n\n### STIE Dwimulya Tampil di [Nama Program TV/Radio]\n\n**Sumber:** [Nama Stasiun TV/Radio] | **Tanggal:** [Tanggal Tayang]\n\n[Ringkasan singkat tentang penampilan atau liputan tersebut.]\n\n[Tautan ke rekaman (jika tersedia)]([URL Rekaman])\n\n---\n\nSilakan periksa secara berkala untuk pembaruan terbaru mengenai STIE Dwimulya di media.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"sorotan-media","text":"Sorotan Media"},{"depth":2,"slug":"contoh-placeholder","text":"Contoh Placeholder:"},{"depth":3,"slug":"judul-berita-menarik","text":"Judul Berita Menarik"},{"depth":3,"slug":"stie-dwimulya-tampil-di-nama-program-tvradio","text":"STIE Dwimulya Tampil di [Nama Program TV/Radio]"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
