/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      '8/10':'80%'
    },
    extend: {
      colors:{
        'newport-blue': '#1D8BCC',
        'grayish-blue':'#353F50'
      },
      backgroundImage:{
        'lpBackground': "url('./LandingPage/lpBackground.svg')",
      }
    },
  },
  plugins: [],
}