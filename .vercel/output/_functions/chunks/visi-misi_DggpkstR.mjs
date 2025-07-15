import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"visi-dan-misi-stie-dwimulya\">Visi dan Misi STIE Dwimulya</h1>\n<h2 id=\"visi\">Visi</h2>\n<p>Menjadi Perguruan Tinggi Ekonomi yang unggul, berintegritas, dan inovatif dalam menghasilkan sumber daya manusia yang profesional serta berdaya saing global pada tahun [Tahun Visi].</p>\n<h2 id=\"misi\">Misi</h2>\n<ol>\n<li>Menyelenggarakan pendidikan tinggi di bidang ekonomi yang berkualitas, relevan, dan berkelanjutan sesuai dengan perkembangan ilmu pengetahuan dan teknologi.</li>\n<li>Melaksanakan penelitian dan pengembangan ilmu pengetahuan di bidang ekonomi untuk memberikan kontribusi nyata bagi masyarakat.</li>\n<li>Melaksanakan pengabdian kepada masyarakat melalui penerapan ilmu pengetahuan dan teknologi di bidang ekonomi untuk meningkatkan kesejahteraan masyarakat.</li>\n<li>Membangun suasana akademik yang kondusif, inklusif, dan partisipatif untuk mendukung pengembangan potensi civitas akademika.</li>\n<li>Membina kerjasama dengan berbagai pihak, baik di tingkat nasional maupun internasional, untuk meningkatkan kualitas dan relevansi pendidikan.</li>\n</ol>";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/visi-misi.md";
				const url = undefined;
				function rawContent() {
					return "# Visi dan Misi STIE Dwimulya\n\n## Visi\nMenjadi Perguruan Tinggi Ekonomi yang unggul, berintegritas, dan inovatif dalam menghasilkan sumber daya manusia yang profesional serta berdaya saing global pada tahun [Tahun Visi].\n\n## Misi\n\n1.  Menyelenggarakan pendidikan tinggi di bidang ekonomi yang berkualitas, relevan, dan berkelanjutan sesuai dengan perkembangan ilmu pengetahuan dan teknologi.\n2.  Melaksanakan penelitian dan pengembangan ilmu pengetahuan di bidang ekonomi untuk memberikan kontribusi nyata bagi masyarakat.\n3.  Melaksanakan pengabdian kepada masyarakat melalui penerapan ilmu pengetahuan dan teknologi di bidang ekonomi untuk meningkatkan kesejahteraan masyarakat.\n4.  Membangun suasana akademik yang kondusif, inklusif, dan partisipatif untuk mendukung pengembangan potensi civitas akademika.\n5.  Membina kerjasama dengan berbagai pihak, baik di tingkat nasional maupun internasional, untuk meningkatkan kualitas dan relevansi pendidikan.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"visi-dan-misi-stie-dwimulya","text":"Visi dan Misi STIE Dwimulya"},{"depth":2,"slug":"visi","text":"Visi"},{"depth":2,"slug":"misi","text":"Misi"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
