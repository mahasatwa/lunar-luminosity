# Daftar Tugas: Penerapan Identitas Visual dan Interaktif

Dokumen ini berfungsi sebagai panduan untuk menerapkan identitas visual dan prinsip desain interaktif ke komponen Astro di website STIE Dwimulya. Tujuannya adalah untuk menciptakan pengalaman pengguna yang maksimal dengan gaya yang **modern, minimalis, profesional, dan sedikit bernuansa aware masa depan yang inklusif**, sesuai dengan moto institusi sebagai **"kampus perubahan"**.

Gaya ini akan dicapai melalui penggunaan ruang putih yang efektif, tipografi yang bersih, palet warna yang terarah (akan ditentukan lebih lanjut), transisi dan animasi yang halus dan fungsional, serta mikro interaksi yang responsif dan bermakna.

## Komponen Organisme (src/components/organisms)

### /src/components/organisms/AccordionFAQ/AccordionFAQ.astro
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk judul dan konten akordion.
- Terapkan palet warna dan tipografi merek pada judul dan konten akordion.
- Sesuaikan padding dan margin untuk tampilan minimalis.
- Pertimbangkan transisi halus saat akordion dibuka/ditutup.
- Pastikan status aktif/tidak aktif akordion terlihat jelas dan sesuai brand.
- Pastikan aksesibilitas keyboard untuk navigasi akordion.
- Mikro-interaksi pada tombol buka/tutup (misalnya, rotasi ikon).

### /src/components/organisms/AccordionFAQ/AccordionFAQ.pcss
- Styling untuk tampilan visual accordion, termasuk border, background, dan shadow (jika ada) sesuai gaya minimalis.

### /src/components/organisms/AccordionFAQ/AccordionFAQ.tsx
- Perhatikan tipografi: Pastikan teks dalam interaksi (jika ada) menggunakan font merek (pertimbangkan gaya Swiss).
- Logika untuk mengelola status buka/tutup accordion. Pertimbangkan animasi berbasis JS jika transisi CSS tidak memadai.

### /src/components/organisms/Buttons/Buttons.astro
- Perhatikan tipografi: Pastikan teks pada tombol menggunakan font merek (pertimbangkan gaya Swiss).
- Terapkan gaya tombol utama dan sekunder sesuai panduan merek (warna, bentuk, ukuran, hover state).
- Pertimbangkan mikro-interaksi saat tombol di-hover atau di-klik (misalnya, slight scale, background fill).
- Pastikan konsistensi visual tombol di seluruh situs.

### /src/components/organisms/CardGrid/CardGrid.astro
- Terapkan gaya kartu (border radius, shadow, padding) dan layout grid yang bersih.
- Sesuaikan spasi antar kartu untuk tampilan lapang.
- Pertimbangkan animasi muncul (fade-in atau slide-up) untuk kartu saat load atau scroll.
- Mikro-interaksi saat hover pada kartu (misalnya, subtle shadow or border change).

### /src/components/organisms/Columns/Columns.astro
- Perhatikan tipografi: Pastikan teks di dalam kolom menggunakan font merek (pertimbangkan gaya Swiss).
- Terapkan spasi antar kolom dan padding di dalam kolom yang konsisten dengan gaya minimalis.
- Pastikan responsivitas layout kolom di berbagai ukuran layar.

### /src/components/organisms/ContentList/ContentList.astro
- Terapkan gaya daftar (bullet points, numbering) dan spasi baris yang bersih.
- Pastikan tipografi sesuai merek untuk item daftar.
- Pertimbangkan animasi sederhana saat item daftar muncul jika digunakan dalam konteks dinamis.
- Perhatikan tipografi: Gunakan font merek (pertimbangkan gaya Swiss) untuk semua teks dalam daftar.

### /src/components/organisms/Courses/Courses.astro
- Terapkan gaya visual untuk blok atau kartu kursus (jika menggunakan kartu).
- Sesuaikan layout dan spasi untuk tampilan modern.
- Pertimbangkan animasi atau transisi untuk elemen interaktif seperti tombol pendaftaran.

### /src/components/organisms/EventSchedule/EventSchedule.astro
- Perhatikan tipografi: Pastikan semua teks jadwal (judul, detail, tanggal, waktu) menggunakan font merek (pertimbangkan gaya Swiss).
- Terapkan gaya visual untuk jadwal acara (garis waktu, blok acara).
- Pastikan tipografi dan warna mudah dibaca.
- Pertimbangkan indikator visual untuk acara yang akan datang atau yang lalu.
- Mikro-interaksi saat hover pada detail acara.

### /src/components/organisms/EventsGrid/EventsGrid.astro
- Terapkan gaya visual untuk kartu acara serupa dengan CardGrid, namun dengan elemen spesifik acara (tanggal, waktu, lokasi).
- Perhatikan tipografi: Pastikan semua teks pada kartu acara menggunakan font merek (pertimbangkan gaya Swiss).
- Sesuaikan spasi dan layout grid.
- Pertimbangkan animasi muncul dan mikro-interaksi pada kartu acara.

### /src/components/organisms/FeaturedPrograms/FeaturedPrograms.astro
- Terapkan gaya visual untuk representasi program unggulan (misalnya, kartu program, blok feature).
- Gunakan warna dan tipografi merek untuk menonjolkan informasi kunci.
- Pertimbangkan animasi saat elemen program muncul.
- Perhatikan tipografi: Gunakan font merek (pertimbangkan gaya Swiss) untuk judul dan deskripsi program.
- Mikro-interaksi pada elemen yang mengarah ke halaman detail program.

### /src/components/organisms/FeaturedStories/FeaturedStories.astro
- Terapkan gaya visual untuk menampilkan cerita unggulan (berita, artikel).
- Pastikan gambar dan teks terintegrasi dengan bersih.
- Pertimbangkan animasi muncul untuk blok cerita.

- Perhatikan tipografi: Gunakan font merek (pertimbangkan gaya Swiss) untuk judul dan kutipan cerita.
### /src/components/organisms/FeaturedStories/FeaturedStoriesSlider.tsx
- Kustomisasi gaya slider (navigasi, indikator) agar sesuai merek.
- Terapkan transisi halus antar slide.
- Pertimbangkan efek paralaks atau subtle animation pada konten slide.

### /src/components/organisms/Gallery/Gallery.astro
- Terapkan gaya visual untuk tampilan galeri (grid, lightbox).
- Pastikan spasi antar gambar dan border konsisten.
- Pertimbangkan animasi fade-in atau scale-up saat gambar dimuat.
- Mikro-interaksi saat hover atau klik pada gambar (misalnya, overlay informasi, zoom effect).

- Perhatikan tipografi: Pastikan teks dalam overlay galeri (jika ada) menggunakan font merek (pertimbangkan gaya Swiss).
### /src/components/organisms/Gallery/GalleryWrapper.tsx
- Logika untuk pengelolaan galeri (misalnya, lightbox). Sesuaikan transisi lightbox agar halus.

### /src/components/organisms/GalleryCarousel/GalleryCarousel.astro
- Gabungan gaya galeri dan slider. Terapkan gaya visual carousel sesuai merek.
- Pastikan transisi antar gambar mulus.

### /src/components/organisms/GalleryCarousel/GalleryCarouselSlider.tsx
- Logika untuk fungsi carousel. Pertimbangkan penggunaan GSAP untuk transisi carousel yang lebih kompleks atau custom.

### /src/components/organisms/Gazette/Gazette.astro
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk semua teks di format gazette.
- Terapkan gaya visual untuk format gazette (misalnya, layout kolom majalah).
- Pastikan tipografi dan spasi mendukung keterbacaan.
- Pertimbangkan elemen desain yang modern dan profesional.

### /src/components/organisms/GlobalNav/GlobalNav.astro
- Terapkan palet warna, tipografi, dan logo merek pada navigasi global.
- Pastikan transisi menu (dropdown, off-canvas) halus dan responsif.
- Perhatikan tipografi: Gunakan font merek (pertimbangkan gaya Swiss) untuk item menu navigasi.
- Pertimbangkan mikro-interaksi pada item menu saat di-hover.
- Pastikan navigasi terlihat bersih dan minimalis namun mudah digunakan.

### /src/components/organisms/GridLists/GridLists.astro
- Terapkan gaya daftar dan grid sesuai kebutuhan, dengan spasi yang optimal.
- Pastikan elemen daftar mudah dibaca dan dipindai.

- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk teks dalam daftar.
### /src/components/organisms/Hero/Hero.astro
- Terapkan overlay warna atau gradien merek pada gambar latar.
- Gunakan tipografi merek untuk judul dan sub-judul hero.
- Sesuaikan padding dan margin untuk menciptakan kesan lapang dan modern.
- Pertimbangkan animasi muncul (fade-in, slide-up) untuk teks dan tombol pada hero.
- Pastikan kontras teks terhadap gambar latar memadai untuk aksesibilitas.

### /src/components/organisms/HeroSplit/HeroSplit.astro
- Terapkan gaya visual pada kedua sisi split hero (gambar/media dan teks/konten).
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk teks di sisi konten.
- Pastikan keseimbangan visual antar kedua sisi.
- Pertimbangkan animasi saat kedua sisi muncul secara bersamaan atau berurutan.

### /src/components/organisms/HeroStatement/HeroStatement.astro
- Gunakan tipografi yang kuat dan spasi yang dramatis untuk statement hero.
- Pertimbangkan animasi teks sederhana untuk menarik perhatian.

- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk statement teks.
### /src/components/organisms/IconTextCluster/IconTextCluster.astro
- Terapkan gaya visual untuk ikon (warna, ukuran) dan teks terkait.
- Pastikan spasi antar ikon dan teks, serta antar cluster, jelas dan bersih.
- Pertimbangkan animasi ringan pada ikon saat di-hover atau muncul.

### /src/components/organisms/InlineStat/InlineStat.astro
- Terapkan tipografi dan warna merek untuk statistik inline.
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk angka dan label statistik.
- Pastikan format angka mudah dibaca.
- Pertimbangkan animasi count-up sederhana untuk angka statistik saat muncul di viewport.

### /src/components/organisms/Interstitial/Interstitial.astro
- Terapkan warna latar atau gambar dengan overlay merek.
- Gunakan tipografi merek untuk judul dan konten.
- Pastikan tombol atau call-to-action menonjol dan sesuai gaya tombol merek.
- Pertimbangkan animasi fade-in atau slide-in saat interstitial muncul.
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk judul dan konten interstitial.

### /src/components/organisms/LatestPosts/LatestPosts.astro
- Terapkan gaya visual untuk daftar posting terbaru, serupa dengan kartu berita atau daftar item bersih.
- Pastikan gambar mini (jika ada) dan teks terintegrasi dengan baik.

### /src/components/organisms/LeadForm/LeadForm.astro
- Terapkan gaya visual pada elemen formulir (input fields, labels, submit button).
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk label, placeholder, dan teks tombol formulir.
- Pastikan field input memiliki border atau highlight yang bersih saat fokus.
- Gunakan tombol submit sesuai gaya tombol merek.
- Pertimbangkan feedback visual (mikro-interaksi) saat field diisi atau saat form disubmit (misalnya, loading spinner, pesan sukses/error).

### /src/components/organisms/MediaCarousel/MediaCarousel.astro
- Terapkan gaya visual pada carousel media (gambar, video).
- Pastikan kontrol navigasi dan indikator sesuai merek.
- Pertimbangkan transisi halus antar item media.

### /src/components/organisms/MediaText/MediaText.astro
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk teks di sisi konten.
- Terapkan gaya visual untuk layout media (gambar/video) di satu sisi dan teks di sisi lain.
- Pastikan spasi antar media dan teks, serta padding, optimal.
- Pertimbangkan animasi slide-in untuk media dan teks saat muncul.

### /src/components/organisms/ProgramAbout/ProgramAbout.astro
- Terapkan gaya visual untuk bagian deskripsi program.
- Pastikan tipografi, heading, dan daftar (jika ada) sesuai merek.
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk semua teks deskripsi program.
- Gunakan spasi yang memadai untuk keterbacaan.

### /src/components/organisms/Quote/Quote.astro
- Terapkan gaya visual untuk blok kutipan (misalnya, large quotation marks, border style, font style).
- Gunakan tipografi merek untuk teks kutipan dan atribusi.
- Pertimbangkan animasi sederhana saat kutipan muncul.

- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk teks kutipan dan atribusi.
### /src/components/organisms/SiteFooter/SiteFooter.astro
- Terapkan palet warna dan tipografi merek pada footer.
- Pastikan layout footer (kolom link, info kontak, sosial media) bersih dan terorganisir.
- Pastikan ikon media sosial sesuai merek atau menggunakan gaya ikon yang konsisten.
- Pertimbangkan animasi ringan pada elemen footer saat halaman dimuat (jika diinginkan).

### /src/components/organisms/SiteHeader/SiteHeader.astro
- Terapkan palet warna, tipografi, dan logo merek pada header.
- Pastikan layout header responsif dan bersih.
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk teks navigasi dan elemen header lainnya.
- Pertimbangkan transisi untuk sticky header (jika ada).
- Mikro-interaksi pada elemen header seperti ikon pencarian atau hamburger menu.

### /src/components/organisms/SplitHero/SplitHero.astro
- Mirip dengan HeroSplit, terapkan gaya visual pada kedua sisi.
- Pastikan animasi muncul dan spasi konsisten dengan gaya modern dan minimalis.

### /src/components/organisms/Statistics/Statistics.astro
- Terapkan gaya visual untuk menampilkan statistik (misalnya, angka besar dengan label).
- Gunakan tipografi merek dan warna yang kontras.
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk angka dan label statistik.
- Pertimbangkan animasi count-up untuk angka statistik.
- Sesuaikan spasi antar item statistik.

### /src/components/organisms/Testimonials/Testimonials.astro
- Terapkan gaya visual untuk menampilkan testimonial (misalnya, dalam carousel atau grid).
- Gunakan blok kutipan (Quote component) dengan gaya yang konsisten.
- Pertimbangkan animasi atau transisi antar testimonial.
- Pastikan gambar profil (jika ada) terintegrasi dengan baik.

## Komponen Template (src/components/templates)
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk semua teks testimonial.

### /src/components/templates/ArticlePageTemplate/ArticlePageTemplate.astro
- Pastikan layout halaman artikel bersih, minimalis, dan fokus pada konten.
- Terapkan tipografi merek untuk judul, sub-judul, dan body text.
- Pastikan spasi baris dan paragraf memadai untuk keterbacaan.
- Integrasikan komponen seperti Hero (jika digunakan), Media (gambar/video), dan Quotedengan gaya yang konsisten.
- Pertimbangkan elemen navigasi atau progres baca (opsional, merefleksikan aware masa depan).

### /src/components/templates/HomepageTemplate/HomepageTemplate.astro
- Perhatikan tipografi: Pastikan konsistensi penggunaan font merek (pertimbangkan gaya Swiss) di seluruh template homepage.
- Pastikan layout homepage dinamis, modern, dan mencerminkan 'kampus perubahan'.
- Integrasikan berbagai komponen organisme (Hero, Featured Programs, Latest Posts, Testimonials, dll.) dengan spasi dan transisi yang mulus antar bagian.
- Pertimbangkan animasi scroll-triggered untuk bagian-bagian utama saat muncul.
- Pastikan penggunaan warna dan tipografi merek konsisten di seluruh template.
- Ciptakan alur visual yang menarik dan mudah dipindai.

### /src/components/templates/ProgramDetailTemplate/ProgramDetailTemplate.astro
- Pastikan layout halaman detail program terstruktur dengan baik, profesional, dan informatif.
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk semua teks di halaman detail program.
- Gunakan tipografi merek untuk heading dan body text.
- Integrasikan komponen seperti Hero, ProgramAbout, Courses, AccordionFAQ dengan gaya yang konsisten.
- Pertimbangkan cara menampilkan detail kurikulum, prospek karir, dll., secara bersih dan mudah dicerna.
- Pastikan elemen call-to-action (misalnya, tombol pendaftaran) menonjol.

### /src/components/templates/ProgramPageTemplate/ProgramPageTemplate.astro
- Mirip dengan ProgramDetailTemplate, pastikan layout halaman program (jika ini adalah halaman daftar program atau ringkasan) bersih dan profesional.
- Gunakan komponen seperti CardGrid atau ContentList untuk menampilkan program dengan gaya yang konsisten.
- Perhatikan tipografi: Terapkan font merek (pertimbangkan gaya Swiss) untuk semua teks di halaman daftar program.
- Pastikan filter atau opsi pencarian (jika ada) memiliki gaya yang bersih dan fungsional.

---
**Catatan Penting:** Penerapan detail spesifik dari instruksi di atas memerlukan panduan identitas visual dan merek STIE Dwimulya yang sebenarnya (palet warna hex/RGB, nama font, panduan penggunaan logo, dll.). Tugas-tugas ini adalah kerangka kerja yang perlu diisi dengan detail desain yang spesifik. Integrasi GSAP juga memerlukan pengetahuan teknis tambahan dalam pengembangan front-end.