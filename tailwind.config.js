/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      "chil-blue": "#1F3A93",
      "chil-red": "#800000",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
