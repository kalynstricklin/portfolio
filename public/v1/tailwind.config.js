/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html, js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(255,192,203)', //rgb(255,192,203) rgb(247,127,190)
        secondary: 'rgb(215,107,107)',
        tertiary: 'rgb(255,250,250)',
        dark: '#1f2022'
      }
    },
    fontFamily:{
      fraunces: ['Fraunces', 'serif']
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
