/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        70: '70%',
      },
      gridAutoRows: {
        '3fr': 'minmax(0,400px)',
      },
    },
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
