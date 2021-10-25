module.exports = {
  purge: ['./pages/**/*.{js,vue}', './components/**/*.{js,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  variants: {
    extend: {
      display: ['hover', 'focus', ' print'],
    },
  },
  plugins: [],
}
