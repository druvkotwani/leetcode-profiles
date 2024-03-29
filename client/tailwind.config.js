/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],
  boxShadow: {
    white: '0 0 10px #fff',
  },
}