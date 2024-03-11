/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: { 
      colors: {
      overlay: 'rgba(0, 0, 0, 0.5)', // Define your custom color here
    },
  },
  },
  plugins: [],
}