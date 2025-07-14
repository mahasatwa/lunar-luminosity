# Blueprint Konten Website: STIE Dwimulya

Dokumen ini adalah panduan strategis untuk arsitektur informasi dan konten website STIE Dwimulya. Tujuannya adalah untuk menciptakan portal digital yang komprehensif, kredibel, dan berpusat pada pengguna.

## 1. Prinsip Utama

- **Calon Mahasiswa sebagai Prioritas**: Semua keputusan konten harus memprioritaskan kebutuhan informasi calon mahasiswa.
- **Performa & Aksesibilitas**: Website harus cepat dimuat dan dapat diakses oleh semua orang, menargetkan skor Lighthouse di atas 95.
- **Modular & Dapat Diperluas**: Dikelola melalui Contentful, konten harus terstruktur dan modular untuk kemudahan pembaruan.
- **Identitas Visual Kuat**: Aset visual dikelola melalui Cloudinary untuk memastikan konsistensi dan optimalisasi.

## 2. Arsitektur Informasi (Sitemap)

Berikut adalah struktur halaman yang direkomendasikan, dirancang untuk skalabilitas dan kejelasan.

### **Beranda (`/`)**
- **Tujuan**: Menarik perhatian, menyampaikan nilai utama, dan mengarahkan pengguna ke area paling penting.
- **Komponen Utama**:
  - **Hero Section**: Gambar/video kampus yang kuat dengan slogan "Kampus Rakyat, Kampus Perubahan".
  - **Statistik Kunci**: Angka yang menonjol (jumlah mahasiswa, rasio dosen, persentase kelulusan).
  - **Program Studi Unggulan**: Tautan visual ke S1 Akuntansi & Manajemen.
  - **Panggilan Aksi (CTA)**: Tombol besar dan jelas menuju halaman "Penerimaan".
  - **Berita & Acara Terbaru**: Feed dinamis dari Contentful.
  - **Testimoni**: Kutipan dari mahasiswa atau alumni.

### **Akademik (`/akademik`)**
- **Tujuan**: Menyediakan informasi akademik yang detail dan terstruktur.
- **Halaman Anak**:
  - **/program-studi**: Landing page untuk semua program studi.
    - **/program-studi/s1-akuntansi**: Halaman detail.
      - *Model Konten*: Judul, Deskripsi, Visi & Misi Prodi, Kurikulum (tabel atau daftar), Profil Dosen (relasi ke model Dosen), Prospek Karir, Testimoni Mahasiswa (relasi).
    - **/program-studi/s1-manajemen**: Halaman detail dengan struktur yang sama.
  - **/akreditasi**: Halaman khusus yang menampilkan sertifikat dan penjelasan akreditasi BAN-PT.
  - **/fasilitas**: Galeri foto & deskripsi fasilitas (ruang kelas, perpustakaan, lab) yang diambil dari Cloudinary.
  - **/kalender-akademik**: Tampilan kalender atau daftar tanggal-tanggal penting.

### **Penerimaan (`/penerimaan`)**
- **Tujuan**: Panduan lengkap dan jelas untuk calon mahasiswa.
- **Halaman Anak**:
  - **/prosedur-pendaftaran**: Langkah-langkah pendaftaran (infografis).
  - **/jadwal-penting**: Tabel waktu yang jelas untuk gelombang pendaftaran.
  - **/biaya-studi**: Rincian biaya yang transparan.
  - **/beasiswa**: Informasi mengenai beasiswa yang tersedia.
  - **/faq**: Jawaban atas pertanyaan yang sering diajukan (Accordion UI).

### **Tentang Kami (`/tentang`)**
- **Tujuan**: Membangun kepercayaan dan menceritakan kisah institusi.
- **Halaman Anak**:
  - **/sejarah**: Linimasa (timeline) sejarah STIE Dwimulya.
  - **/visi-misi-dan-nilai**: Penjabaran detail dari nilai-nilai inti.
  - **/struktur-organisasi**: Bagan organisasi.
  - **/kontak**: Alamat, Peta Google, nomor telepon, dan formulir kontak.

### **Kehidupan Kampus (`/kampus`)**
- **Tujuan**: Menampilkan budaya dan dinamika kehidupan mahasiswa.
- **Halaman Anak**:
  - **/berita-dan-acara**: Blog atau feed berita lengkap.
    - **/berita/[slug]**: Halaman detail untuk setiap artikel berita.
  - **/kegiatan-mahasiswa**: Showcase untuk UKM dan organisasi mahasiswa.
  - **/galeri**: Galeri foto dan video (terintegrasi dengan Cloudinary Albums).

### **Penelitian & Pengabdian (`/penelitian`)**
- **Tujuan**: Menunjukkan kontribusi akademik dan sosial institusi.
- **Halaman Anak**:
  - **/publikasi-ilmiah**: Daftar publikasi dosen dan mahasiswa.
  - **/pengabdian-masyarakat**: Cerita dan dokumentasi program KKM dan kegiatan sosial lainnya.

## 3. Strategi Model Konten (Contentful)

- **Model Atomik**: Buat model untuk entitas yang dapat digunakan kembali seperti `Dosen`, `Testimoni`, `Acara`, `ArtikelBerita`.
- **Model Halaman**: Buat model untuk setiap jenis halaman (misal: `Halaman Program Studi`, `Halaman Berita`) yang merujuk ke model-model atomik.
- **Validasi**: Gunakan validasi Contentful untuk memastikan semua data (misal: ukuran gambar, panjang teks) konsisten.
