/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        book: "#FFDD8A",
        title: "#FFFAE9",
        accept: "#40A900",
        reject: "#BA1313",
        details: "#787CE0",
        bookLight: "#FFE8AF",
        background: "#040821",
        titleSecond: "#E7E6DE",
        backgroundLight: "#161A33",
      },
    },
  },
  plugins: [],
};
