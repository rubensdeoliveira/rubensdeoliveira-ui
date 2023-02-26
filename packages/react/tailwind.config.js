/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      12: `${12 / 16}rem`,
      14: `${14 / 16}rem`,
      16: `${16 / 16}rem`,
      18: `${18 / 16}rem`,
      20: `${20 / 16}rem`,
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
  important: true,
}
