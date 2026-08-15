/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f4a261",
        brown: "#774936",
        beige: "#F8F0E3",
        darkText: "#33272a",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Montserrat", "Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
}