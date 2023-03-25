/* eslint-disable quotes */
/* eslint-disable no-undef */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-pc': "url('assets/images/desktop/fondo-pc.jpg')",
        'fondo-celu': "url('assets/images/mobile/fondo-celu.jpg')",
      },
    },
  },
  plugins: [],
};
