/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./services/*.html",
    "./policies/*.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      "chil-blue": "#1F3A93",
      "chil-red": "#800000",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
