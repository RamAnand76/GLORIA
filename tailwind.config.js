/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

export default {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Outfit: ['Outfit', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Manrope: ['Manrope', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#07283b',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
