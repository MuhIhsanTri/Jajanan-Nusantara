/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#E05D26',
          'primary-dark': '#C84D1B',
          'primary-light': '#FCEEE8',
          secondary: '#F5B301',
          'secondary-hover': '#DF9F00',
          bg: '#FDFBF7',
          dark: '#2D3748',
          muted: '#64748B',
          card: '#FFFFFF',
          accent: '#FFF7ED',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'warm': '0 10px 25px -5px rgba(224, 93, 38, 0.1), 0 8px 10px -6px rgba(224, 93, 38, 0.05)',
        'warm-hover': '0 20px 30px -10px rgba(224, 93, 38, 0.2), 0 10px 15px -5px rgba(245, 179, 1, 0.15)',
      }
    },
  },
  plugins: [],
};
