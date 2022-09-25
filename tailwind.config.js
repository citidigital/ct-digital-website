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
        '22': '5.5rem',
        '25': '6.5rem',
        '30': '7.5rem',
        '5\.5': '1.375rem'
      },
      width:{
        '828px':'828px',
        '507px':'507px',
        '579px':'579px',
        '634px':'634px',
        '750px':'750px',
        '1132px':'1132',
  
        '1/10': '10%',
        '2/10': '20%',
        '2\.7/10': '27%',
        '3/10':'30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10':'70%', 
        '8/10':'80%',
        '9/10':'90%',
        '18': '4.5rem',
        'button-width': '17.375rem',
        '38': '9.5rem'
      },
      height:{
        '465px':'465px',
        halfscreen: '50vh',
        '18': '4.5rem',
        'hero': '498px',
        '8\.2': '82%'
      },
      colors:{
        'newport-blue': '#1D8BCC',
        'grayish-blue':'#353F50',
        'gray-100': '#F3F4F6',
        'default-gray': '#374151',
        'primary-blue': '#072F40',
        'verylight-blue':'#F7FBFC',
        'blue1': '#CBF6FF',
        'link': '#40A9FF',
        'alice-blue': '#F3F7FF',
        'magenta': '#E6E1E7',
        'violet': '#E8F4F9',
        'gray': '#E5E7EB',
        'dark-cyan': '#00425F',
        'cyan-blue': '#F9FAFB',
        'light-cyan': '#EBF8FE',
        'primary1': '#063C5C',
        'primary2': '#364653',
        'secondary1': '#1D8BCC',
        'secondary2': '#00B8DE',
        'popColor1': '#DCD6CF',
        'popColor2': '#F7E2D2',
        'neutral': '#5F738C',
        'neutral-1000': '#1F2126',
        'blue-1000': '#0172CB'
      },
      lineHeight:{
        '14':'3.5rem',
        '11':'2.75rem',
      },
      padding:{
        '13':'52px',
        '15':'3.75rem',
        '22':'88px',
        '4\.5': '1.125rem',
        '18': '4.5rem',
        '21': '5.25rem'
      },
      margin:{
        '18': '4.5rem',
        '1/10': '10%',
        '2/10': '20%',
        '7\.5': '1.875rem'
      },
      backgroundImage:{
        'lpBackground': "url('./LandingPage/lpBackground.svg')",
      },
      fontSize: {
        '3\.5xl': '2rem',
        '4\.5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}