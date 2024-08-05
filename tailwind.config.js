/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        golos:'Golos Text'
      },
      colors: {
        'gray-500': 'rgba(107, 114, 128, 0.3)', // Custom gray with 30% opacity
      },
    },
  },
  plugins: [],
}