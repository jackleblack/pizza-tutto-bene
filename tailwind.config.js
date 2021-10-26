module.exports = {
  purge: [
    './pages/**/*.{js,vue}',
    './components/**/*.{js,vue}',
    'node_modules/tv-*/dist/tv-*.umd.min.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        golden: {
          DEFAULT: '#BA8A49',
          light: '#FAF2A2',
          50: '#F9F5EF',
          100: '#F2E9DD',
          200: '#E4D1B8',
          300: '#D6BA93',
          400: '#C8A26E',
          500: '#BA8A49',
          600: '#976F39',
          700: '#72542B',
          800: '#4D391D',
          900: '#281D0F',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
}
