import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate } from './astro/server_DaCzSFzi.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<h1 id=\"ikhtisar-penelitian-stie-dwimulya\">Ikhtisar Penelitian STIE Dwimulya</h1>\n<p>Selamat datang di bagian Penelitian dan Publikasi STIE Dwimulya. Kami berkomitmen untuk mendorong penelitian inovatif yang berkontribusi pada pengembangan ilmu ekonomi dan memberikan dampak positif bagi masyarakat.</p>\n<h2 id=\"visi-penelitian\">Visi Penelitian</h2>\n<p>[Bagian ini perlu diperbarui secara manual dengan pernyataan visi penelitian STIE Dwimulya yang jelas dan ringkas, selaras dengan misi institusi secara keseluruhan.]</p>\n<p>Contoh: Visi penelitian kami adalah menjadi pusat keunggulan dalam riset terapan di bidang ekonomi dan bisnis yang relevan dengan tantangan lokal dan global, serta menghasilkan publikasi berkualitas yang diakui secara nasional dan internasional.</p>\n<h2 id=\"pusat-penelitian-dan-lembaga\">Pusat Penelitian dan Lembaga</h2>\n<p>[Bagian ini perlu diperbarui secara manual dengan detail tentang pusat penelitian, laboratorium, atau lembaga spesifik yang ada di STIE Dwimulya. Jika belum ada, bagian ini bisa menjelaskan fokus institusi dalam mendukung kegiatan penelitian.]</p>\n<p>Contoh: STIE Dwimulya memiliki [Nama Pusat Penelitian], sebuah unit yang berfokus pada riset di bidang [bidang fokus, contoh: Ekonomi Pembangunan dan UMKM]. Pusat ini memfasilitasi [jelaskan aktivitas, contoh: workshop penelitian, kolaborasi dengan pihak eksternal].</p>\n<h2 id=\"dampak-penelitian-dan-kolaborasi\">Dampak Penelitian dan Kolaborasi</h2>\n<p>[Bagian ini perlu diperbarui secara manual dengan contoh spesifik, studi kasus, atau metrik yang menunjukkan dampak penelitian dosen dan mahasiswa terhadap industri, kebijakan, atau masyarakat. Detail kolaborasi penelitian dengan mitra eksternal juga perlu ditambahkan.]</p>\n<p>Contoh: Penelitian kami tentang [topik penelitian, contoh: efektivitas program pendanaan UMKM] telah memberikan masukan bagi pemerintah daerah dalam merumuskan kebijakan [nama kebijakan]. Kami juga aktif berkolaborasi dengan [nama mitra, contoh: Asosiasi Pengusaha Lokal] dalam proyek riset terapan.</p>";

				const frontmatter = {};
				const file = "/home/user/lunar-luminosity/src/data/facts/ikhtisar-penelitian.md";
				const url = undefined;
				function rawContent() {
					return "# Ikhtisar Penelitian STIE Dwimulya\n\nSelamat datang di bagian Penelitian dan Publikasi STIE Dwimulya. Kami berkomitmen untuk mendorong penelitian inovatif yang berkontribusi pada pengembangan ilmu ekonomi dan memberikan dampak positif bagi masyarakat.\n\n## Visi Penelitian\n\n[Bagian ini perlu diperbarui secara manual dengan pernyataan visi penelitian STIE Dwimulya yang jelas dan ringkas, selaras dengan misi institusi secara keseluruhan.]\n\nContoh: Visi penelitian kami adalah menjadi pusat keunggulan dalam riset terapan di bidang ekonomi dan bisnis yang relevan dengan tantangan lokal dan global, serta menghasilkan publikasi berkualitas yang diakui secara nasional dan internasional.\n\n## Pusat Penelitian dan Lembaga\n\n[Bagian ini perlu diperbarui secara manual dengan detail tentang pusat penelitian, laboratorium, atau lembaga spesifik yang ada di STIE Dwimulya. Jika belum ada, bagian ini bisa menjelaskan fokus institusi dalam mendukung kegiatan penelitian.]\n\nContoh: STIE Dwimulya memiliki [Nama Pusat Penelitian], sebuah unit yang berfokus pada riset di bidang [bidang fokus, contoh: Ekonomi Pembangunan dan UMKM]. Pusat ini memfasilitasi [jelaskan aktivitas, contoh: workshop penelitian, kolaborasi dengan pihak eksternal].\n\n## Dampak Penelitian dan Kolaborasi\n\n[Bagian ini perlu diperbarui secara manual dengan contoh spesifik, studi kasus, atau metrik yang menunjukkan dampak penelitian dosen dan mahasiswa terhadap industri, kebijakan, atau masyarakat. Detail kolaborasi penelitian dengan mitra eksternal juga perlu ditambahkan.]\n\nContoh: Penelitian kami tentang [topik penelitian, contoh: efektivitas program pendanaan UMKM] telah memberikan masukan bagi pemerintah daerah dalam merumuskan kebijakan [nama kebijakan]. Kami juga aktif berkolaborasi dengan [nama mitra, contoh: Asosiasi Pengusaha Lokal] dalam proyek riset terapan.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"ikhtisar-penelitian-stie-dwimulya","text":"Ikhtisar Penelitian STIE Dwimulya"},{"depth":2,"slug":"visi-penelitian","text":"Visi Penelitian"},{"depth":2,"slug":"pusat-penelitian-dan-lembaga","text":"Pusat Penelitian dan Lembaga"},{"depth":2,"slug":"dampak-penelitian-dan-kolaborasi","text":"Dampak Penelitian dan Kolaborasi"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
