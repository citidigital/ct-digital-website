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
      'layout': '1440px'
    },
    extend: {
      inset:{
        '196px':'196px',
        '352px':'352px',
        '18': '4.5rem',
        '25': '6.5rem'
      },
      width:{
        '507px':'507px',
        '579px':'579px',
        '634px':'634px',
        '1/10': '10%',
        '2/10': '20%',
        '3/10':'30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10':'70%',      
        '8/10':'80%',
        '9/10':'90%',
        '18': '4.5rem'
      },
      height:{
        '465px':'465px',
        halfscreen: '50vh',
        '18': '4.5rem',
        'hero': '498px'
      },
      colors:{
        'newport-blue': '#1D8BCC',
        'grayish-blue':'#353F50',
        'default-gray': '#374151',
        'primary-blue': '#072F40',
        'verylight-blue':'#F7FBFC',
        'blue1': '#CBF6FF'
      },
      lineHeight:{
        'leading-14':'3.5rem',
      },
      padding:{
        '13':'52px',
        '22':'88px',
        '4\.5': '1.125rem'
      },
      margin:{
        '18': '4.5rem'
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