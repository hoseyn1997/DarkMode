/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/page.html", "./testPage.html"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "dark-pattern": "url('/public/stars.jpg')",
        "light-pattern": "url('/public/cloud.jpg')",
      },
    },
  },
  plugins: [],
};
