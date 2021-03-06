const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ringColor: {
      white: colors.white,
      pink: colors.fuchsia,
      orange: colors.orange,
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
        half: '50vh',
      },
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
