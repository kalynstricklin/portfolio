/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F6C6C2',
          dark: '#CEA4A0',
        },
        secondary: {
          light: '#D1E8E2',
          dark: '#49796B',
        },
        info: {
          light: '#A5B8FA',
          dark: '#6271A0'
        },
        neutral: {
          light: '#FFFECE'
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
