/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontSize: {
      '14px': `${14 / 16}rem`,
      '16px': `${16 / 16}rem`,
    },
    spacing: {
      0: 0,
      '8px': `${8 / 16}rem`,
      '10px': `${10 / 16}rem`,
      '12px': `${12 / 16}rem`,
      '16px': `${16 / 16}rem`,
      '20px': `${20 / 16}rem`,
      '24px': `${24 / 16}rem`,
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      screens: {
        xl: '1240px',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
}
