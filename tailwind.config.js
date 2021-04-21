module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/img/sunsetglaze.png')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      
    },
  },
  plugins: [],
}
