import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_BaeesDGl.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"sejarah-singkat-stie-dwimulya\">Sejarah Singkat STIE Dwimulya</h1>\n<p><strong>STIE Dwimulya</strong> didirikan pada tahun [tahun pendirian] dengan visi untuk menjadi institusi pendidikan tinggi ekonomi terkemuka yang menghasilkan lulusan berintegritas dan kompeten. Sejak awal berdirinya, kami telah berkomitmen untuk menyediakan pendidikan berkualitas tinggi yang relevan dengan kebutuhan industri dan masyarakat.</p>\n<p>Kampus kami berawal dari [ceritakan awal mula, misalnya: sebuah yayasan kecil, atau inisiatif tokoh masyarakat] dan terus berkembang pespat. Kami bangga dengan sejarah panjang kami dalam mendidik ribuan profesional yang kini berkiprah di berbagai sektor ekonomi di seluruh Indonesia.</p>\n<ul>\n<li><strong>[Tahun Penting 1]:</strong> [Peristiwa penting pada tahun tersebut]</li>\n<li><strong>[Tahun Penting 2]:</strong> [Peristiwa penting lainnya]</li>\n<li><strong>[Tahun Penting 3]:</strong> [Pencapaian penting]</li>\n</ul>\n<p>Kami terus berinovasi dalam kurikulum dan metode pengajaran untuk memastikan lulusan kami siap menghadapi tantangan global.</p>";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/sejarah-singkat.md";
				const url = undefined;
				function rawContent() {
					return "# Sejarah Singkat STIE Dwimulya\n\n**STIE Dwimulya** didirikan pada tahun [tahun pendirian] dengan visi untuk menjadi institusi pendidikan tinggi ekonomi terkemuka yang menghasilkan lulusan berintegritas dan kompeten. Sejak awal berdirinya, kami telah berkomitmen untuk menyediakan pendidikan berkualitas tinggi yang relevan dengan kebutuhan industri dan masyarakat.\n\nKampus kami berawal dari [ceritakan awal mula, misalnya: sebuah yayasan kecil, atau inisiatif tokoh masyarakat] dan terus berkembang pespat. Kami bangga dengan sejarah panjang kami dalam mendidik ribuan profesional yang kini berkiprah di berbagai sektor ekonomi di seluruh Indonesia.\n\n*   **[Tahun Penting 1]:** [Peristiwa penting pada tahun tersebut]\n*   **[Tahun Penting 2]:** [Peristiwa penting lainnya]\n*   **[Tahun Penting 3]:** [Pencapaian penting]\n\nKami terus berinovasi dalam kurikulum dan metode pengajaran untuk memastikan lulusan kami siap menghadapi tantangan global.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"sejarah-singkat-stie-dwimulya","text":"Sejarah Singkat STIE Dwimulya"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
