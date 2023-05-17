/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  
  content: [
    "./index.html",
    "./js/script.js",
    "./js/itemHover.js",
    
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      '3xl': {'min': '1500px'},
      // => @media (min-width: 1500px)
      '2xl': {'max': '1500px'},
      // => @media (max-width: 1500px) 

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) 

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) 

      'md': {'max': '767px'},
      // => @media (max-width: 767px) 

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) 
      'xs': {'max': '500px'},
      // => @media (max-width: 500px) 
      '2xs': {'max': '450px'},
      // => @media (max-width: 450px) 
      '3xs': {'max': '423px'},
      // => @media (max-width: 423px) 
      'sxs': {'max': '380px'}
      // => @media (max-width: 380px) 
    }
    
  },
  plugins: [],
}

