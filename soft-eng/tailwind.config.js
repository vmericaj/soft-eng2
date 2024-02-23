/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customOrange: '#EF9400', // Adding your custom color here
        customBlue: '#0F076D',
        gradientStart: '#FDA00A', // Your desired gradient start color
        gradientEnd: '#E6D4A5'
      },
    },
  },
  plugins: [],
}
