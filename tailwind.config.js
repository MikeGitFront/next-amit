/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans','sans-serif'],
      serif: ['Merriweather', 'serif'],
      nubito: '',
    },
    extend: {},
  },
  plugins: [],
}
