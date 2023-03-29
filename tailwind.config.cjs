/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'custom-yellow': '#F3E060',
      'custom-blue': '#0038AB',
      'gray': '#F4F4F4',
    }
  },
  plugins: [],
}
