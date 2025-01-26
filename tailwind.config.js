/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'jersey': ['Jersey 15', 'sans-serif'],
        'open_sans': ['Open Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],

      },
    },
  },
  plugins: [],
}