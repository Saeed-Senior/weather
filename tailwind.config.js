/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'gradient-to': '#48355B',
        'gradient-from': '#91BEF3',
      }
    },
  },
  plugins: [],
}

