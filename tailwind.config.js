/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      '3/10':'30%',
      '7/10':'70%',      
      '8/10':'80%',
      '9/10':'90%',
    },
    extend: {
      colors:{
        'newport-blue': '#1D8BCC',
        'grayish-blue':'#353F50',
        'default-gray': '#374151',
        'primary-blue': '#072F40',
        'verylight-blue':'#F7FBFC'
      },
      lineHeight:{
        'leading-14':'3.5rem',
      },
      backgroundImage:{
        'lpBackground': "url('./LandingPage/lpBackground.svg')",
      },
      fontSize: {
        '3\.5xl': '2rem'
      }
    },
  },
  plugins: [],
}