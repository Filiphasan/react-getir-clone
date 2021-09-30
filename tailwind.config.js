module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-color': '#5d3ebc',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#ffd300'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
