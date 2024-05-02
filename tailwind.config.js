/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#B00000',
      },
      fontFamily: {
        'dm_serif': ['DM Serif Display']
      },
      backgroundImage: {
        'hero': "url('/src/assets/img/hero.jpg')",
        'sky': "url('/src/assets/img/sky.jpg')",
        'road': "url('/src/assets/img/road.jpg')",
        'city': "url('/src/assets/img/city.jpg')",
      }
    },
  },
  plugins: [],
}