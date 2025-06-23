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

        // Dwimulya Brand Colors (using new dm-tokens)
        'dm-primary': 'rgb(var(--dm-primary) / <alpha-value>)',
        'dm-primary-light': 'rgb(var(--dm-primary-light) / <alpha-value>)',
        'dm-primary-dark': 'rgb(var(--dm-primary-dark) / <alpha-value>)',
        'dm-secondary': 'rgb(var(--dm-secondary) / <alpha-value>)',
        'dm-accent': 'rgb(var(--dm-accent) / <alpha-value>)',
        'dm-accent-light': 'rgb(var(--dm-accent-light) / <alpha-value>)',
        'dm-accent-dark': 'rgb(var(--dm-accent-dark) / <alpha-value>)',
        'dm-success': 'rgb(var(--dm-success) / <alpha-value>)',
        'dm-warning': 'rgb(var(--dm-warning) / <alpha-value>)',
        'dm-danger': 'rgb(var(--dm-danger) / <alpha-value>)',
        'dm-bg': 'rgb(var(--dm-bg) / <alpha-value>)',
        'dm-bg-alt': 'rgb(var(--dm-bg-alt) / <alpha-value>)',
        'dm-bg-inverse': 'rgb(var(--dm-bg-inverse) / <alpha-value>)',
        'dm-text': 'rgb(var(--dm-text) / <alpha-value>)',
        'dm-text-light': 'rgb(var(--dm-text-light) / <alpha-value>)',
        'dm-text-inverse': 'rgb(var(--dm-text-inverse) / <alpha-value>)',
        'dm-border': 'rgb(var(--dm-border) / <alpha-value>)',
        'dm-border-dark': 'rgb(var(--dm-border-dark) / <alpha-value>)',
        'dm-border-light': 'rgb(var(--dm-border-light) / <alpha-value>)',
        'dm-overlay': 'rgb(var(--dm-overlay))',
        'dm-highlight': 'rgb(var(--dm-highlight) / <alpha-value>)',
        'dm-outline': 'rgb(var(--dm-outline) / <alpha-value>)',
        'dm-shadow': 'rgba(var(--dm-shadow))',
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