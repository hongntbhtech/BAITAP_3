/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'max-xxl': { 'max': '1350px' },
        'max-xl': { 'max': '1280px' },
        'max-lg': { 'max': '1024px' },
        'max-md': { 'max': '767px' },
        'max-ssm': { 'max': '425px' },
        'max-sssm': { 'max': '375px' },
      },
    },
  },
  plugins: [],
}
