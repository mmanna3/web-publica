/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        // eslint-disable-next-line quotes
        'img-inicio': "url('assets/images/desktop/fondo-pc.jpg')",
      },
    },
  },
  plugins: [],
};
