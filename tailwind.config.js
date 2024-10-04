/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Segoe UI", "Roboto"],
      },
      colors: {
        gray: "#99AABB",
      },
    },
  },
  plugins: [],
};
