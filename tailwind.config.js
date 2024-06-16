/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: [    
    "./*.html",
    "./js/*.js",
    "node_modules/@material-tailwind/html/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

