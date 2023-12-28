/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-white": "#F5F5F5",
      "primary-blue": "#1C98ED",
      "primary-black": "#333333",
      "secondary-blue": "#176FAE",
      "secondary-white": "#F0F2F5",
      "white": "#FFFFFF"
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}
