/* eslint-disable quotes */
/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  fontFamily: {
    'font-family': 'Coalition',
  },
  theme: {
    extend: {
      backgroundImage: {
        'fondo-pc': "url('assets/images/desktop/fondo-pc.jpg')",
        'fondo-celu': "url('assets/images/mobile/fondo-celu.jpg')",
      },
      colors: {
        // 'btn-green-dark': '#7db192'
      },
    },
  },
  plugins: [],
};
