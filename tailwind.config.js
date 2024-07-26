/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      margin: {
        '-1px': '-1px'
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.clearfix::after': {
          content: '""',
          display: 'table',
          clear: 'both',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

