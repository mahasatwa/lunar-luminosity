/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Mengacu pada variabel CSS yang didefinisikan di base.pcss
        // Format: 'warna-tailwind': 'rgb(var(--nama-variabel-css) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        // Jika Anda mendefinisikan variabel lain di base.pcss atau file CSS global lainnya,
        // Anda bisa menambahkannya di sini juga jika ingin menggunakannya sebagai kelas Tailwind.
        // Contoh (jika ada variabel --primary-light di CSS global):
        // 'primary-light': 'rgb(var(--primary-light) / <alpha-value>)',
        // 'stie-accent': 'rgb(var(--warna-aksen-stie) / <alpha-value>)', // Contoh nama kustom
      },
      spacing: {
        'nav-height': '64px',
        'nav-height-mobile': '56px',
      },
      aspectRatio: {
        'video': '16 / 9',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // Jika Anda menggunakan @tailwindcss/forms atau plugin lain, tambahkan di sini
    // require('@tailwindcss/forms'),
  ],
};