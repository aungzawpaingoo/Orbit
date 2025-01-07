/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
}