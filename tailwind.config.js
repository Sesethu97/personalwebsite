const { color } = require("@mui/system");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "yeseva-one": ['"Yeseva One"', "san-serif"],
        "taviraj" : ['"Taviraj"', "san-serif"],
        "good-vibes" : ['"Good Vibes"', "san-serif"],
      },

      colors: {
        pico: "#fd79a8",
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
     
      
      
    },
  },
  plugins: ['tailwind-clip-path'],
};
