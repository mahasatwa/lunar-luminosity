import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, i as addAttribute, u as unescapeHTML, r as renderComponent } from '../chunks/astro/server_gD8qDGW6.mjs';
import { $ as $$Layout } from '../chunks/Layout_DGIX28zN.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero-bg min-h-screen flex items-center justify-center text-white py-20 px-4" data-astro-cid-wse7a2hg> <div class="max-w-4xl mx-auto text-center" data-astro-cid-wse7a2hg> <h1 class="text-5xl md:text-7xl font-bold mb-6" data-astro-cid-wse7a2hg>Selamat Datang di STIE Dwimulya</h1> <p class="text-xl md:text-2xl mb-8 leading-relaxed" data-astro-cid-wse7a2hg>
Menjadi pusat keunggulan dalam pendidikan ekonomi dan bisnis,
            menciptakan lulusan yang kompeten, berintegritas, dan siap bersaing
            di era global.
</p> <div class="bg-blue-600 inline-block px-6 py-3 rounded-full text-lg font-semibold cursor-pointer" data-astro-cid-wse7a2hg> <span class="mr-2" data-astro-cid-wse7a2hg>Telusuri Program Kami</span> <i class="fas fa-arrow-right" data-astro-cid-wse7a2hg></i> </div> </div> </section> `;
}, "C:/astro/lunar-luminosity/src/components/home/HeroSection.astro", void 0);

const $$HeroStatement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-700 text-white py-12 px-4" data-astro-cid-zg3w75tq> <div class="max-w-4xl mx-auto text-center" data-astro-cid-zg3w75tq> <p class="text-2xl md:text-3xl font-light italic" data-astro-cid-zg3w75tq>
"Melahirkan pemimpin masa depan yang berkarakter, inovatif, dan siap
      menghadapi tantangan ekonomi global."
</p> </div> </section> `;
}, "C:/astro/lunar-luminosity/src/components/home/HeroStatement.astro", void 0);

const $$AtAGlance = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-4 bg-gray-50" data-astro-cid-qd6yhdtj> <div class="max-w-6xl mx-auto" data-astro-cid-qd6yhdtj> <h2 class="text-3xl md:text-4xl font-bold text-center mb-12" data-astro-cid-qd6yhdtj>
STIE Dwimulya Sekilas
</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-qd6yhdtj> <div class="stat-item bg-white p-8 rounded-lg shadow-md text-center" data-astro-cid-qd6yhdtj> <div class="text-5xl font-bold text-blue-700 mb-2" data-astro-cid-qd6yhdtj>Tahun Didirikan</div> <p class="text-gray-600" data-astro-cid-qd6yhdtj>
Sejak memberikan kontribusi bagi pendidikan ekonomi Indonesia
</p> </div> <div class="stat-item bg-white p-8 rounded-lg shadow-md text-center" data-astro-cid-qd6yhdtj> <div class="text-5xl font-bold text-blue-700 mb-2" data-astro-cid-qd6yhdtj>
Jumlah Mahasiswa
</div> <p class="text-gray-600" data-astro-cid-qd6yhdtj>
Aktif menempuh pendidikan di program sarjana dan pascasarjana
</p> </div> <div class="stat-item bg-white p-8 rounded-lg shadow-md text-center" data-astro-cid-qd6yhdtj> <div class="text-5xl font-bold text-blue-700 mb-2" data-astro-cid-qd6yhdtj>Jumlah Alumni</div> <p class="text-gray-600" data-astro-cid-qd6yhdtj>Berkiprah di berbagai sektor industri</p> </div> <div class="stat-item bg-white p-8 rounded-lg shadow-md text-center" data-astro-cid-qd6yhdtj> <div class="text-5xl font-bold text-blue-700 mb-2" data-astro-cid-qd6yhdtj>Program Studi</div> <p class="text-gray-600" data-astro-cid-qd6yhdtj>
Pilihan studi yang relevan dengan kebutuhan pasar
</p> </div> <div class="stat-item bg-white p-8 rounded-lg shadow-md text-center" data-astro-cid-qd6yhdtj> <div class="text-5xl font-bold text-blue-700 mb-2" data-astro-cid-qd6yhdtj>Tenaga Pengajar</div> <p class="text-gray-600" data-astro-cid-qd6yhdtj>
Dosen profesional dan berpengalaman di bidangnya
</p> </div> <div class="stat-item bg-white p-8 rounded-lg shadow-md text-center" data-astro-cid-qd6yhdtj> <div class="text-5xl font-bold text-blue-700 mb-2" data-astro-cid-qd6yhdtj>Akreditasi</div> <p class="text-gray-600" data-astro-cid-qd6yhdtj>Institusi dan Program Studi terakreditasi</p> </div> </div> </div> </section> `;
}, "C:/astro/lunar-luminosity/src/components/home/AtAGlance.astro", void 0);

const $$Astro = createAstro("https://www.stiedwimulya.ac.id");
const $$AcademicExperience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AcademicExperience;
  const experience = {
    title: "Pengalaman Akademik Berkualitas di STIE Dwimulya",
    tagline: "Perpaduan Teori, Praktik, dan Teknologi Terkini",
    videoUrl: "https://www.youtube.com/embed/VqHsmduXhWc",
    // >>> GANTI DENGAN LINK VIDEO YOUTUBE PROFIL STIE DWIMULYA <<<
    teachingMethods: `
    <p>STIE Dwimulya menerapkan metode pengajaran yang interaktif dan relevan dengan dunia kerja:</p>
    <ul>
      <li>Kuliah Interaktif & Diskusi</li>
      <li>Studi Kasus Bisnis Riil</li>
      <li>Seminar & Workshop Praktisi</li>
      <li>Proyek Kelompok & Presentasi</li>
      <li>Penggunaan Teknologi E-learning</li>
      <li>Pendekatan Belajar Berbasis Masalah (Problem-Based Learning)</li>
    </ul>
    <p>Kami fokus pada pengembangan kemampuan analisis, pemecahan masalah, dan komunikasi mahasiswa.</p>
  `,
    faculty: `
    <p>Didukung oleh jajaran Dosen dan Tenaga Pengajar yang kompeten dan berpengalaman:</p>
    <ul>
      <li>Akademisi dengan Kualifikasi Tinggi (S2/S3)</li>
      <li>Praktisi Bisnis & Keuangan dari Berbagai Industri</li>
      <li>Peneliti Aktif dalam Bidang Ekonomi & Bisnis</li>
      <li>Pembelajaran dengan Pendekatan Personal</li>
      <li>Pembimbing Akademik yang Siap Mendukung Studi Anda</li>
    </ul>
    <p>Mereka tidak hanya mengajar teori, tetapi juga berbagi pengalaman nyata di lapangan.</p>
  `,
    facilities: `
    <p>STIE Dwimulya menyediakan fasilitas modern untuk menunjang proses belajar mengajar yang efektif:</p>
    <ul>
      <li>Ruang Kelas Nyaman & Ber-AC dengan Proyektor</li>
      <li>Perpustakaan dengan Koleksi Buku dan Jurnal Ilmiah Terkini (baik fisik maupun digital)</li>
      <li>Laboratorium Komputer dengan Akses Internet</li>
      <li>Laboratorium Bahasa</li>
      <li>Ruang Diskusi Kelompok</li>
      <li>Akses Wi-Fi Gratis di Seluruh Area Kampus</li>
      <li>Aula Pertemuan/Seminar</li>
    </ul>
    <p>Fasilitas kami dirancang untuk menciptakan lingkungan belajar yang kondusif.</p>
  `
  };
  return renderTemplate`${maybeRenderHead()}<section class="py-16 bg-gray-50"> <div class="container"> <div class="text-center mb-12"> <h2 class="text-4xl font-bold mb-4">${experience.title}</h2> <p class="text-xl text-gray-600">${experience.tagline}</p> </div> <div class="aspect-w-16 aspect-h-9 mb-12"> <iframe${addAttribute(experience.videoUrl, "src")} class="w-full h-full rounded-lg shadow-lg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div> <div class="grid md:grid-cols-3 gap-8"> <div class="bg-white p-8 rounded-lg shadow-sm"> <h3 class="text-2xl font-bold mb-4">Metode Pengajaran</h3> <div class="prose">${unescapeHTML(experience.teachingMethods)}</div> </div> <div class="bg-white p-8 rounded-lg shadow-sm"> <h3 class="text-2xl font-bold mb-4">Dosen & Tenaga Pengajar</h3> <div class="prose">${unescapeHTML(experience.faculty)}</div> </div> <div class="bg-white p-8 rounded-lg shadow-sm"> <h3 class="text-2xl font-bold mb-4">
Fasilitas Laboratorium & Praktikum
</h3> <div class="prose">${unescapeHTML(experience.facilities)}</div> </div> </div> </div> </section>`;
}, "C:/astro/lunar-luminosity/src/components/home/AcademicExperience.astro", void 0);

const $$CampusLifeGrids = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-4" data-astro-cid-4jzusg5y> <div class="max-w-6xl mx-auto" data-astro-cid-4jzusg5y> <div class="text-center mb-12" data-astro-cid-4jzusg5y> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-4jzusg5y>
Dinamika Kehidupan Kampus
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-4jzusg5y>
Temukan berbagai kegiatan akademik dan non-akademik yang memperkaya
        pengalaman Anda selama menempuh studi di STIE Dwimulya.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-4jzusg5y> <div class="activity-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-4jzusg5y> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-users text-6xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="p-6" data-astro-cid-4jzusg5y> <h3 class="text-xl font-bold mb-2" data-astro-cid-4jzusg5y>Organisasi Mahasiswa</h3> <p class="text-gray-600 mb-4" data-astro-cid-4jzusg5y>
Bergabung dengan beragam Unit Kegiatan Mahasiswa (UKM) untuk
            mengembangkan minat dan bakat di luar perkuliahan.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-4jzusg5y>
Pelajari lebih lanjut <i class="fas fa-arrow-right ml-1" data-astro-cid-4jzusg5y></i> </a> </div> </div> <div class="activity-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-4jzusg5y> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-chalkboard-teacher text-6xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="p-6" data-astro-cid-4jzusg5y> <h3 class="text-xl font-bold mb-2" data-astro-cid-4jzusg5y>Kegiatan Akademik</h3> <p class="text-gray-600 mb-4" data-astro-cid-4jzusg5y>
Ikuti seminar, workshop, dan diskusi rutin untuk memperdalam
            pemahaman materi dan wawasan keilmuan.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-4jzusg5y>
Lihat agenda akademik <i class="fas fa-arrow-right ml-1" data-astro-cid-4jzusg5y></i> </a> </div> </div> <div class="activity-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-4jzusg5y> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-trophy text-6xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="p-6" data-astro-cid-4jzusg5y> <h3 class="text-xl font-bold mb-2" data-astro-cid-4jzusg5y>Kompetisi Mahasiswa</h3> <p class="text-gray-600 mb-4" data-astro-cid-4jzusg5y>
Asah kemampuan dan raih prestasi melalui partisipasi dalam kompetisi
            ilmiah, bisnis, dan olahraga.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-4jzusg5y>
Informasi kompetisi <i class="fas fa-arrow-right ml-1" data-astro-cid-4jzusg5y></i> </a> </div> </div> <div class="activity-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-4jzusg5y> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-building text-6xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="p-6" data-astro-cid-4jzusg5y> <h3 class="text-xl font-bold mb-2" data-astro-cid-4jzusg5y>Pengabdian Masyarakat</h3> <p class="text-gray-600 mb-4" data-astro-cid-4jzusg5y>
Berkontribusi positif bagi lingkungan sekitar melalui
            program-program pengabdian masyarakat yang relevan.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-4jzusg5y>
Kegiatan sosial <i class="fas fa-arrow-right ml-1" data-astro-cid-4jzusg5y></i> </a> </div> </div> <div class="activity-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-4jzusg5y> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-briefcase text-6xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="p-6" data-astro-cid-4jzusg5y> <h3 class="text-xl font-bold mb-2" data-astro-cid-4jzusg5y>Pengembangan Karir</h3> <p class="text-gray-600 mb-4" data-astro-cid-4jzusg5y>
Akses ke pusat karir, bursa kerja, dan mentorship untuk
            mempersiapkan langkah setelah lulus.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-4jzusg5y>
Pusat Karir <i class="fas fa-arrow-right ml-1" data-astro-cid-4jzusg5y></i> </a> </div> </div> <div class="activity-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-4jzusg5y> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-book-open text-6xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="p-6" data-astro-cid-4jzusg5y> <h3 class="text-xl font-bold mb-2" data-astro-cid-4jzusg5y>Fasilitas Kampus</h3> <p class="text-gray-600 mb-4" data-astro-cid-4jzusg5y>
Manfaatkan fasilitas modern seperti perpustakaan, laboratorium
            komputer, ruang diskusi, dan area olahraga.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-4jzusg5y>
Lihat Fasilitas <i class="fas fa-arrow-right ml-1" data-astro-cid-4jzusg5y></i> </a> </div> </div> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12" data-astro-cid-4jzusg5y> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-chart-line text-4xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-laptop-code text-4xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-users text-4xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-building text-4xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-book text-4xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-handshake text-4xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-globe text-4xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4jzusg5y> <i class="fas fa-graduation-cap text-4xl text-blue-700" data-astro-cid-4jzusg5y></i> </div> </div> </div> </section> `;
}, "C:/astro/lunar-luminosity/src/components/home/CampusLifeGrids.astro", void 0);

const $$FinancialAid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-4 bg-gray-50" data-astro-cid-cjevp4f2> <div class="max-w-6xl mx-auto" data-astro-cid-cjevp4f2> <div class="text-center mb-12" data-astro-cid-cjevp4f2> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-cjevp4f2>
Beasiswa dan Bantuan Studi di STIE Dwimulya
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-cjevp4f2>
STIE Dwimulya berkomitmen untuk mendukung mahasiswa berprestasi dan yang
        membutuhkan melalui berbagai program beasiswa dan bantuan studi.
</p> </div> <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto" data-astro-cid-cjevp4f2> <div class="md:flex" data-astro-cid-cjevp4f2> <div class="md:w-1/2 bg-blue-700 text-white p-8 flex items-center" data-astro-cid-cjevp4f2> <div data-astro-cid-cjevp4f2> <h3 class="text-2xl font-bold mb-4" data-astro-cid-cjevp4f2>
Akses Pendidikan Berkualitas
</h3> <p class="mb-6" data-astro-cid-cjevp4f2>
Kami percaya setiap calon mahasiswa berpotensi memiliki kesempatan
              yang sama untuk mendapatkan pendidikan terbaik di bidang ekonomi
              dan bisnis.
</p> <a href="#" class="inline-block bg-white text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition" data-astro-cid-cjevp4f2>
Info Lengkap Program Beasiswa
</a> </div> </div> <div class="md:w-1/2 p-8 flex items-center justify-center bg-gray-100" data-astro-cid-cjevp4f2> <div class="text-center" data-astro-cid-cjevp4f2> <i class="fas fa-hand-holding-usd text-6xl text-blue-700 mb-4" data-astro-cid-cjevp4f2></i> <p class="text-lg font-semibold mb-2" data-astro-cid-cjevp4f2>Beragam Jenis Beasiswa</p> <p class="text-gray-600" data-astro-cid-cjevp4f2>
Tersedia untuk mahasiswa berprestasi dan kurang mampu
</p> </div> </div> </div> </div> </div> </section> `;
}, "C:/astro/lunar-luminosity/src/components/home/FinancialAid.astro", void 0);

const $$PullQuote = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-4 bg-blue-700 text-white" data-astro-cid-vqvzpntw> <div class="max-w-4xl mx-auto text-center" data-astro-cid-vqvzpntw> <blockquote class="text-2xl md:text-3xl font-light italic" data-astro-cid-vqvzpntw>
"Pendidikan adalah investasi terbaik untuk masa depan. Di STIE Dwimulya,
      kami berinvestasi dalam potensi setiap mahasiswa untuk menjadi agen
      perubahan."
</blockquote> </div> </section> `;
}, "C:/astro/lunar-luminosity/src/components/home/PullQuote.astro", void 0);

const $$Community = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-4" data-astro-cid-4ruvmn52> <div class="max-w-6xl mx-auto" data-astro-cid-4ruvmn52> <div class="text-center mb-12" data-astro-cid-4ruvmn52> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-4ruvmn52>
Bergabung dalam Komunitas STIE Dwimulya
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-4ruvmn52>
STIE Dwimulya adalah rumah bagi komunitas akademik yang beragam, terdiri
        dari mahasiswa, dosen, staf, dan alumni yang saling mendukung untuk
        mencapai keunggulan bersama.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-astro-cid-4ruvmn52> <div class="bg-white rounded-lg overflow-hidden shadow-md" data-astro-cid-4ruvmn52> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-4ruvmn52> <i class="fas fa-users text-6xl text-blue-700" data-astro-cid-4ruvmn52></i> </div> <div class="p-6" data-astro-cid-4ruvmn52> <h3 class="text-xl font-bold mb-2" data-astro-cid-4ruvmn52>Ikatan Alumni</h3> <p class="text-gray-600 mb-4" data-astro-cid-4ruvmn52>
Jaringan alumni yang kuat membuka peluang karir dan kolaborasi bagi
            para lulusan.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-4ruvmn52>
Info Ikatan Alumni <i class="fas fa-arrow-right ml-1" data-astro-cid-4ruvmn52></i> </a> </div> </div> <div class="bg-white rounded-lg overflow-hidden shadow-md" data-astro-cid-4ruvmn52> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-4ruvmn52> <i class="fas fa-user-graduate text-6xl text-blue-700" data-astro-cid-4ruvmn52></i> </div> <div class="p-6" data-astro-cid-4ruvmn52> <h3 class="text-xl font-bold mb-2" data-astro-cid-4ruvmn52>Profil Mahasiswa</h3> <p class="text-gray-600 mb-4" data-astro-cid-4ruvmn52>
Kenali lebih dekat kisah dan pencapaian mahasiswa STIE Dwimulya.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-4ruvmn52>
Lihat Profil <i class="fas fa-arrow-right ml-1" data-astro-cid-4ruvmn52></i> </a> </div> </div> <div class="bg-white rounded-lg overflow-hidden shadow-md" data-astro-cid-4ruvmn52> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-4ruvmn52> <i class="fas fa-chalkboard-teacher text-6xl text-blue-700" data-astro-cid-4ruvmn52></i> </div> <div class="p-6" data-astro-cid-4ruvmn52> <h3 class="text-xl font-bold mb-2" data-astro-cid-4ruvmn52>Staf Pengajar Berkualitas</h3> <p class="text-gray-600 mb-4" data-astro-cid-4ruvmn52>
Belajar dari para akademisi dan praktisi berpengalaman di bidang
            ekonomi dan bisnis.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-4ruvmn52>
Daftar Dosen <i class="fas fa-arrow-right ml-1" data-astro-cid-4ruvmn52></i> </a> </div> </div> </div> <div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-astro-cid-4ruvmn52> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4ruvmn52> <i class="fas fa-users text-4xl text-blue-700" data-astro-cid-4ruvmn52></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4ruvmn52> <i class="fas fa-building text-4xl text-blue-700" data-astro-cid-4ruvmn52></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4ruvmn52> <i class="fas fa-handshake text-4xl text-blue-700" data-astro-cid-4ruvmn52></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4ruvmn52> <i class="fas fa-book text-4xl text-blue-700" data-astro-cid-4ruvmn52></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4ruvmn52> <i class="fas fa-chart-pie text-4xl text-blue-700" data-astro-cid-4ruvmn52></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4ruvmn52> <i class="fas fa-briefcase text-4xl text-blue-700" data-astro-cid-4ruvmn52></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4ruvmn52> <i class="fas fa-graduation-cap text-4xl text-blue-700" data-astro-cid-4ruvmn52></i> </div> <div class="h-40 bg-gray-200 rounded-lg flex items-center justify-center" data-astro-cid-4ruvmn52> <i class="fas fa-globe text-4xl text-blue-700" data-astro-cid-4ruvmn52></i> </div> </div> </div> </section> `;
}, "C:/astro/lunar-luminosity/src/components/home/Community.astro", void 0);

const $$BeritaTerkini = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-4 bg-gray-50" data-astro-cid-uomix46b> <div class="max-w-6xl mx-auto" data-astro-cid-uomix46b> <div class="text-center mb-12" data-astro-cid-uomix46b> <h2 class="text-3xl md:text-4xl font-bold mb-4" data-astro-cid-uomix46b>
Berita Terbaru dari STIE Dwimulya
</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto" data-astro-cid-uomix46b>
Ikuti perkembangan terkini mengenai kegiatan akademik, prestasi
        mahasiswa dan dosen, serta informasi penting lainnya dari kampus STIE
        Dwimulya.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-uomix46b> <div class="news-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-uomix46b> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-uomix46b> <i class="fas fa-award text-6xl text-blue-700" data-astro-cid-uomix46b></i> </div> <div class="p-6" data-astro-cid-uomix46b> <span class="text-sm font-semibold text-blue-700" data-astro-cid-uomix46b>Prestasi</span> <h3 class="text-xl font-bold my-2" data-astro-cid-uomix46b>
Mahasiswa STIE Dwimulya Raih Juara Kompetisi Nasional
</h3> <p class="text-gray-600 mb-4" data-astro-cid-uomix46b>
Tim mahasiswa berhasil meraih juara pertama dalam ajang kompetisi
            bisnis tingkat nasional, menunjukkan kualitas pendidikan STIE
            Dwimulya.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-uomix46b>
Baca selengkapnya <i class="fas fa-arrow-right ml-1" data-astro-cid-uomix46b></i> </a> </div> </div> <div class="news-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-uomix46b> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-uomix46b> <i class="fas fa-chalkboard-teacher text-6xl text-blue-700" data-astro-cid-uomix46b></i> </div> <div class="p-6" data-astro-cid-uomix46b> <span class="text-sm font-semibold text-blue-700" data-astro-cid-uomix46b>Kegiatan Kampus</span> <h3 class="text-xl font-bold my-2" data-astro-cid-uomix46b>
Seminar Nasional "Prospek Ekonomi Indonesia 2025"
</h3> <p class="text-gray-600 mb-4" data-astro-cid-uomix46b>
STIE Dwimulya sukses menggelar seminar nasional yang dihadiri para
            pakar ekonomi dan praktisi industri.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-uomix46b>
Baca selengkapnya <i class="fas fa-arrow-right ml-1" data-astro-cid-uomix46b></i> </a> </div> </div> <div class="news-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-uomix46b> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-uomix46b> <i class="fas fa-building text-6xl text-blue-700" data-astro-cid-uomix46b></i> </div> <div class="p-6" data-astro-cid-uomix46b> <span class="text-sm font-semibold text-blue-700" data-astro-cid-uomix46b>Kerjasama</span> <h3 class="text-xl font-bold my-2" data-astro-cid-uomix46b>
Penandatanganan MoU dengan Industri XYZ
</h3> <p class="text-gray-600 mb-4" data-astro-cid-uomix46b>
STIE Dwimulya menjalin kerjasama strategis dengan perusahaan XYZ
            untuk program magang dan pengembangan kurikulum.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-uomix46b>
Baca selengkapnya <i class="fas fa-arrow-right ml-1" data-astro-cid-uomix46b></i> </a> </div> </div> <div class="news-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-uomix46b> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-uomix46b> <i class="fas fa-scroll text-6xl text-blue-700" data-astro-cid-uomix46b></i> </div> <div class="p-6" data-astro-cid-uomix46b> <span class="text-sm font-semibold text-blue-700" data-astro-cid-uomix46b>Riset</span> <h3 class="text-xl font-bold my-2" data-astro-cid-uomix46b>
Publikasi Jurnal Dosen STIE Dwimulya Terindeks Internasional
</h3> <p class="text-gray-600 mb-4" data-astro-cid-uomix46b>
Beberapa dosen STIE Dwimulya berhasil mempublikasikan hasil risetnya
            di jurnal internasional bereputasi.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-uomix46b>
Baca selengkapnya <i class="fas fa-arrow-right ml-1" data-astro-cid-uomix46b></i> </a> </div> </div> <div class="news-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-uomix46b> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-uomix46b> <i class="fas fa-graduation-cap text-6xl text-blue-700" data-astro-cid-uomix46b></i> </div> <div class="p-6" data-astro-cid-uomix46b> <span class="text-sm font-semibold text-blue-700" data-astro-cid-uomix46b>Akademik</span> <h3 class="text-xl font-bold my-2" data-astro-cid-uomix46b>
Pembukaan Pendaftaran Mahasiswa Baru Tahun Akademik xxxx/xxxx
</h3> <p class="text-gray-600 mb-4" data-astro-cid-uomix46b>
Informasi lengkap mengenai prosedur dan jadwal pendaftaran mahasiswa
            baru STIE Dwimulya untuk program studi yang tersedia.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-uomix46b>
Info Pendaftaran <i class="fas fa-arrow-right ml-1" data-astro-cid-uomix46b></i> </a> </div> </div> <div class="news-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300" data-astro-cid-uomix46b> <div class="h-48 bg-gray-200 flex items-center justify-center" data-astro-cid-uomix46b> <i class="fas fa-book text-6xl text-blue-700" data-astro-cid-uomix46b></i> </div> <div class="p-6" data-astro-cid-uomix46b> <span class="text-sm font-semibold text-blue-700" data-astro-cid-uomix46b>Perpustakaan</span> <h3 class="text-xl font-bold my-2" data-astro-cid-uomix46b>
Penambahan Koleksi Buku dan Jurnal Terbaru
</h3> <p class="text-gray-600 mb-4" data-astro-cid-uomix46b>
Perpustakaan STIE Dwimulya memperbarui koleksi untuk mendukung
            kegiatan belajar dan riset mahasiswa dan dosen.
</p> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-uomix46b>
Cek Koleksi Baru <i class="fas fa-arrow-right ml-1" data-astro-cid-uomix46b></i> </a> </div> </div> </div> <div class="text-center mt-12" data-astro-cid-uomix46b> <a href="#" class="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition" data-astro-cid-uomix46b>
Lihat Semua Berita
</a> </div> </div> </section> `;
}, "C:/astro/lunar-luminosity/src/components/home/BeritaTerkini.astro", void 0);

const $$KegiatanTerkini = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-4" data-astro-cid-pw5qpjrb> <div class="max-w-6xl mx-auto" data-astro-cid-pw5qpjrb> <h2 class="text-3xl md:text-4xl font-bold text-center mb-12" data-astro-cid-pw5qpjrb>
Acara Mendatang
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-astro-cid-pw5qpjrb> <div class="bg-white rounded-lg shadow-lg overflow-hidden" data-astro-cid-pw5qpjrb> <div class="md:flex" data-astro-cid-pw5qpjrb> <div class="md:w-1/3 bg-blue-700 text-white p-6 flex flex-col items-center justify-center" data-astro-cid-pw5qpjrb> <div class="text-4xl font-bold" data-astro-cid-pw5qpjrb>BLN</div>  <div class="text-6xl font-bold" data-astro-cid-pw5qpjrb>TGL</div>  </div> <div class="md:w-2/3 p-6" data-astro-cid-pw5qpjrb> <h3 class="text-xl font-bold mb-2" data-astro-cid-pw5qpjrb>Nama Acara Pertama</h3>  <p class="text-gray-600 mb-4" data-astro-cid-pw5qpjrb>Deskripsi singkat acara pertama.</p>  <div class="flex items-center text-gray-500 mb-2" data-astro-cid-pw5qpjrb> <i class="fas fa-map-marker-alt mr-2" data-astro-cid-pw5qpjrb></i> <span data-astro-cid-pw5qpjrb>Lokasi Acara</span>  </div> <div class="flex items-center text-gray-500" data-astro-cid-pw5qpjrb> <i class="fas fa-clock mr-2" data-astro-cid-pw5qpjrb></i> <span data-astro-cid-pw5qpjrb>Waktu Acara</span>  </div> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-pw5qpjrb>
Detail Acara <i class="fas fa-arrow-right ml-1" data-astro-cid-pw5qpjrb></i> </a> </div> </div> </div> <div class="bg-white rounded-lg shadow-lg overflow-hidden" data-astro-cid-pw5qpjrb> <div class="md:flex" data-astro-cid-pw5qpjrb> <div class="md:w-1/3 bg-blue-700 text-white p-6 flex flex-col items-center justify-center" data-astro-cid-pw5qpjrb> <div class="text-4xl font-bold" data-astro-cid-pw5qpjrb>BLN</div>  <div class="text-6xl font-bold" data-astro-cid-pw5qpjrb>TGL</div>  </div> <div class="md:w-2/3 p-6" data-astro-cid-pw5qpjrb> <h3 class="text-xl font-bold mb-2" data-astro-cid-pw5qpjrb>Nama Acara Kedua</h3>  <p class="text-gray-600 mb-4" data-astro-cid-pw5qpjrb>Deskripsi singkat acara kedua.</p>  <div class="flex items-center text-gray-500 mb-2" data-astro-cid-pw5qpjrb> <i class="fas fa-map-marker-alt mr-2" data-astro-cid-pw5qpjrb></i> <span data-astro-cid-pw5qpjrb>Lokasi Acara</span>  </div> <div class="flex items-center text-gray-500" data-astro-cid-pw5qpjrb> <i class="fas fa-clock mr-2" data-astro-cid-pw5qpjrb></i> <span data-astro-cid-pw5qpjrb>Waktu Acara</span>  </div> <a href="#" class="text-blue-700 font-semibold hover:underline" data-astro-cid-pw5qpjrb>
Detail Acara <i class="fas fa-arrow-right ml-1" data-astro-cid-pw5qpjrb></i> </a> </div> </div> </div> </div> </div> </section> `;
}, "C:/astro/lunar-luminosity/src/components/home/KegiatanTerkini.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "STIE Dwimulya - Unggul dalam Pendidikan Ekonomi & Bisnis", "description": "Selamat datang di STIE Dwimulya, institusi pendidikan tinggi unggulan yang berfokus pada pengembangan ilmu ekonomi dan bisnis untuk masa depan global." }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "HeroStatement", $$HeroStatement, {})} ${renderComponent($$result2, "AtAGlance", $$AtAGlance, {})} ${renderComponent($$result2, "AcademicExperience", $$AcademicExperience, {})} ${renderComponent($$result2, "CampusLifeGrids", $$CampusLifeGrids, {})} ${renderComponent($$result2, "FinancialAid", $$FinancialAid, {})} ${renderComponent($$result2, "PullQuote", $$PullQuote, {})} ${renderComponent($$result2, "Community", $$Community, {})} ${renderComponent($$result2, "BeritaTerkini", $$BeritaTerkini, {})} ${renderComponent($$result2, "KegiatanTerkini", $$KegiatanTerkini, {})} ` })}`;
}, "C:/astro/lunar-luminosity/src/pages/index.astro", void 0);

const $$file = "C:/astro/lunar-luminosity/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
