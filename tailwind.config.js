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
      secondary: ["Amiri",'serif'],
      nubito: '',
    },
    colors: {
      "bg-primary": "#182c3a",
      "bg-gray-100": "#f6f6f6",
      primary: "#ff4a17",
      "text-primary": "#282a2b",
      heading: "#7b7b7b",
    },
    extend: {},
  },
  plugins: [],
}
