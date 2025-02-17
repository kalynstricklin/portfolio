/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F6C6C2',
          dark: '#CEA4A0',
          medium: '#F6C6C2'
        },
        secondary: {
          light: '#C7C675', //C7C675 C9B650
          dark: '#49796B',
        },
        info: {
          light: '#A5B8FA',
          dark: '#116498'
        },
        neutral: {
          light: '#FAF1D2'
        }
      }
    },
    screens: {
      sm: { max: "639px" },
      md: { max: "767px" },
      lg: { max: "1023px" },
      xl: { max: "1279px" },
      xxl: { max: "1535px" },
    },
    fontFamily:{
      irish: ['Irish Grover', 'sans-serif']
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
