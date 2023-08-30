/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true
    },
    fontFamily: {
      sans: ['Roboto', 'Helvetica Neue', 'Helvetica Neue'],
      header: ['Playfair', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif']
    }
  },
  plugins: []
}
