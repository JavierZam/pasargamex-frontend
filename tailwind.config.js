/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'pgx-dark': '#121826',
          'pgx-dark-surface': '#1F2937',
          'pgx-red': '#E53E3E',
          'pgx-blue': '#2B6CB0',
          'pgx-light-gray': '#A0AEC0',
          'pgx-white': '#F7FAFC',
        },
        fontFamily: {
          // sans: ['Inter', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }