/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',
        secondary: '#4A5568',
      },
      spacing: {
        'nav-height': '64px',
        'nav-height-mobile': '56px',
      },
    },
  },
  plugins: [],
}; 