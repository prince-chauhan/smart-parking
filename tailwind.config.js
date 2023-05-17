/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'back-color': '#656cee',
        'btn-pur-start': '#969bff',
        'btn-pur-end': '#656cee',
        'btn-org-start': '#FFBA82',
        'btn-org-end': '#FF8B2D',
        'dark-bc': '#15142a',
      },
      blur: {
        '2': '2px'
      }
    },
  },
  plugins: [],
}

