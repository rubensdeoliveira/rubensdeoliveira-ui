/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  plugins: [require('flowbite/plugin')],
  prefix: 'rdoui-',
  content: [
    './src/**/*.tsx',
    '../../node_modules/flowbite/**/*.js',
    '../../node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ]
}
