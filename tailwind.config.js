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
      },
      backgroundImage: {
        'mobile-app': "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
