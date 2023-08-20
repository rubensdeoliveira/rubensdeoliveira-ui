/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    '../../node_modules/flowbite/**/*.js',
    '../../node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',
        'laptop': '1024px',
      }
    }
  },
  darkMode: 'class',
  plugins: [require('flowbite/plugin')]
}
