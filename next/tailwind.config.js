const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ringColor: {
      white: colors.white,
      pink: colors.fuchsia,
    },
    extend: {
      fontFamily: {
        different: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        orange: colors.orange,
        amber: colors.amber,
        cyan: colors.cyan,
      },
      minHeight: {
        'half': '60vh',
      }
      // backgroundImage: (theme) => ({
      //   header: "url('/images/jesse-bowser-c0I4ahyGIkA-unsplash.jpg')",
      // }),
    },
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
    },
  },
  plugins: [],
};
