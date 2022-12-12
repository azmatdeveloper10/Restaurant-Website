/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primaryColor: 'rgb(255, 234, 128)',
        bgColor: 'rgb(15, 10, 10)',
      },
    },
  },
  plugins: [],
};
