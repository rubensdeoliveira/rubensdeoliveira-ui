const path = require("path");

const sourcePath = path.join(__dirname, "src");

module.exports = {
  content: [`${sourcePath}${path.sep}**${path.sep}*.{js,ts,jsx,tsx,mdx}`],
  plugins: [require('flowbite/plugin')]
};
