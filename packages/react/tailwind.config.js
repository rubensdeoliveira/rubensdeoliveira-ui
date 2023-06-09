/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.tsx',
    '../../node_modules/flowbite/**/*.js',
    '../../node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [require('flowbite/plugin')]
}
