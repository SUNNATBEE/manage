/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        vietnam: ["Be Vietnam Pro", "Arial", "sans-serif"],
      },
      backgroundImage: {
        body: 'url("./src/images/plaster.svg")',
      },
      backgroundPosition:{
        "header-p" : "calc(50% + 120px) -100px"
      },
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [],
};
