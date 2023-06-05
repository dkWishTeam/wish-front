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
        articleColor: "#d7d7fa",
      },
    },
    screens: {
      sm: "360px", // mobile 사이즈로 설정
    },
  },
  plugins: [],
};
