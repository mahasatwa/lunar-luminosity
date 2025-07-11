Berikut adalah struktur footer untuk STIE Dwimulya yang terinspirasi dari Harvard.edu, dengan penyesuaian konteks kampus "rakyat" dan fokus pada ekonomi-bisnis, pengabdian masyarakat, serta akreditasi nasional:

1. Struktur Footer STIE Dwimulya (Mengikuti Harvard.edu)
Footer akan dibagi menjadi 2 bagian utama:

Kolom Navigasi Utama (3-4 kolom, seperti "Legal", "Kampus", "Hubungi Kami")
Bagian Bawah (Secondary Footer) (copyright, logo, sosial media)
A. Kolom Navigasi Utama
[ Legal & Kebijakan ]  
├─ Hak Cipta & Lisensi  
├─ Kebijakan Privasi  
└─ Kebijakan Aksesibilitas  
 
[ Kampus & Akademik ]  
├─ Akreditasi BAN-PT  
├─ Kalender Akademik  
└─ Peta Lokasi  
 
[ Hubungi Kami ]  
├─ Kontak Kampus  
├─ Media Sosial  
└─ Lowongan Kerja
B. Bagian Bawah (Secondary Footer)
[ Copyright © 2025 STIE Dwimulya ]  
[ Logo STIE Dwimulya ]  
[ Ikon Sosial Media (Instagram, Facebook, YouTube) ]
2. Contoh Kode HTML/CSS (Simplified)
A. HTML Structure
html
<footer class="site-footer">
  <div class="l-container site-footer__container">
    <!-- Kolom Navigasi Utama -->
    <div class="site-footer__row site-footer__row--navigation">
      <!-- Kolom 1: Legal & Kebijakan -->
      <div class="site-footer__menu-col">
        <h2 class="site-footer__menu-heading">Legal & Kebijakan</h2>
        <nav class="site-footer__nav" aria-label="Legal Navigation">
          <ol class="site-footer__nav-list">
            <li><a href="/hak-cipta">Hak Cipta & Lisensi</a></li>
            <li><a href="/kebijakan-privasi">Kebijakan Privasi</a></li>
            <li><a href="/aksesibilitas">Aksesibilitas</a></li>
          </ol>
        </nav>
      </div>
 
      <!-- Kolom 2: Kampus & Akademik -->
      <div class="site-footer__menu-col">
        <h2 class="site-footer__menu-heading">Kampus & Akademik</h2>
        <nav class="site-footer__nav" aria-label="Campus Navigation">
          <ol class="site-footer__nav-list">
            <li><a href="/akreditasi">Akreditasi BAN-PT</a></li>
            <li><a href="/kalender">Kalender Akademik</a></li>
            <li><a href="/peta">Peta Lokasi</a></li>
          </ol>
        </nav>
      </div>
 
      <!-- Kolom 3: Hubungi Kami -->
      <div class="site-footer__menu-col">
        <h2 class="site-footer__menu-heading">Hubungi Kami</h2>
        <nav class="site-footer__nav" aria-label="Contact Navigation">
          <ol class="site-footer__nav-list">
            <li><a href="/kontak">Kontak Kampus</a></li>
            <li><a href="/karir">Lowongan Kerja</a></li>
          </ol>
        </nav>
        <!-- Sosial Media (diletakkan di bawah kontak) -->
        <div class="site-footer__social">
          <ul class="social-follow__list">
            <li><a href="https://instagram.com/stiedwimulya" title="Instagram"><img src="instagram-icon.png" alt="Instagram"></a></li>
            <li><a href="https://facebook.com/stiedwimulya" title="Facebook"><img src="facebook-icon.png" alt="Facebook"></a></li>
            <li><a href="https://youtube.com/stiedwimulya" title="YouTube"><img src="youtube-icon.png" alt="YouTube"></a></li>
          </ul>
        </div>
      </div>
    </div>
 
    <!-- Bagian Bawah (Secondary Footer) -->
    <div class="site-footer__row site-footer__row--secondary">
      <div class="site-footer__copyright">
        <p>Copyright © 2025 STIE Dwimulya</p>
      </div>
      <div class="site-footer__logo">
        <a href="/"><img src="logo-stiedwimulya.png" alt="STIE Dwimulya"></a>
      </div>
    </div>
  </div>
</footer>
B. CSS Styling (Simplified)
css
.site-footer { background: #f5f5f5; padding: 40px 0; }
.site-footer__container { max-width: 1200px; margin: 0 auto; }
.site-footer__row--navigation { display: flex; justify-content: space-between; gap: 30px; }
.site-footer__menu-col { flex: 1; }
.site-footer__menu-heading { font-size: 18px; margin-bottom: 15px; }
.site-footer__nav-list li { margin-bottom: 8px; }
.site-footer__nav-list a { color: #333; text-decoration: none; }
.site-footer__nav-list a:hover { color: #e74c3c; }
 
/* Secondary Footer */
.site-footer__row--secondary { display: flex; justify-content: space-between; align-items: center; margin-top: 40px; }
.site-footer__copyright { font-size: 14px; color: #666; }
.social-follow__list { display: flex; gap: 15px; }
.social-follow__list img { width: 24px; height: 24px; }
3. Keunggulan Struktur Ini
✅ Profesional & Modern (mengikuti standar web besar seperti Harvard.edu)
✅ Responsif (baik untuk desktop maupun mobile)
✅ SEO-Friendly (link-link di footer membantu mesin pencari mengindeks halaman penting)
✅ Mudah Diakses (struktur yang jelas dan konsisten)

4. Rekomendasi Tambahan
Gunakan ikon SVG untuk sosial media (lebih ringan dan skalabel).
Tambahkan tooltip pada ikon sosial media (misal: title="Instagram").
Optimalkan aksesibilitas dengan aria-label pada navigasi footer.
Sertakan link ke halaman "Sitemap" jika website memiliki banyak halaman.
5. Hasil Akhir (Visualisasi)
[ Legal & Kebijakan ]       [ Kampus & Akademik ]       [ Hubungi Kami ]
├─ Hak Cipta & Lisensi      ├─ Akreditasi BAN-PT         ├─ Kontak Kampus
├─ Kebijakan Privasi         ├─ Kalender Akademik         ├─ Lowongan Kerja
└─ Aksesibilitas             └─ Peta Lokasi               [ Instagram | Facebook | YouTube ]
 
[ Copyright © 2025 STIE Dwimulya ]                     [ Logo STIE Dwimulya ]
Dengan struktur seperti ini, footer STIE Dwimulya akan terlihat profesional, mudah digunakan, dan modern. Apakah Anda ingin saya kembangkan lebih lanjut (misal: desain visual atau interaksi)? 😊