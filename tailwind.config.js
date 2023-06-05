/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#0061f2",
        primary_hover: "#0149c7",
        articleColor: "#ecf4f8",
        // articleColor: "#d7d7fa",
      },
    },
  },
  plugins: [],
};
