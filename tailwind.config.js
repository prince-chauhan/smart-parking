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
        'btn-red-start': '#ff9090',
        'btn-red-end': '#ff4f4f',
        'btn-green-start': '#62dd00 ',
        'btn-green-end': '#047800 ',
      },
      blur: {
        '2': '2px'
      },
      grayscale: {
        '0.8': '80%'
      }
    },
  },
  plugins: [],
}

