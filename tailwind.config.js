/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green-1': '#016170',
        'black-1': '#020E10',
        'yellow-1': '#FFC42C',
        'green-2': '#00E0C6',
        'white-2': '#EBE2D9',
        'white-1': '#FFFFFC'
      },
      padding: {
        '3.75': '3.75rem'
      },
      fontFamily: {
        'wagon-bold': ['Wagon-Bold', 'serif'],
        'wagon-extra-light': ['Wagon-ExtraLight', 'serif'],
        'nunito-sans': ['Nunito Sans', 'sans-serif']
      },
      fontSize: {
        '2x': ['2rem', '48px']
      },
      height: {
        '42rem': '42rem',
        '40rem': '40rem'
      },
      lineHeight: {
        '48px': '48px',
        '72px': '72px',
        '98px': '98px'
      }
    },
  },
  plugins: [],
}
