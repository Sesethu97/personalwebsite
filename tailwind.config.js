const { color } = require("@mui/system");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "yeseva-one": ['"Yeseva One"', "san-serif"],
        "taviraj" : ['"Taviraj"', "san-serif"],
      },

      colors: {
        pico: "#fd79a8",
      },
    },
  },
  plugins: [],
};
