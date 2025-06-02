/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pgx-dark': '#121826', // Atau coba #1A2035 untuk lebih biru
        'pgx-dark-surface': '#1F2937', // Atau coba #273043 jika pgx-dark diubah
        'pgx-red': '#E53E3E',
        'pgx-blue': '#2B6CB0',
        'pgx-light-gray': '#A0AEC0',
        'pgx-white': '#F7FAFC',
      },
    },
  },
  plugins: [],
}