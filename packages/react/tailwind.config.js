/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './src/**/*.{html,js}',
    '../../node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      screens: {
        xl: '1240px'
      }
    }
  },
  darkMode: 'class',
  plugins: [require('tw-elements/dist/plugin.cjs')]
}
