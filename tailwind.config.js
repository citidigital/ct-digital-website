/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors:{
      'newport-blue': '#1D8BCC'
    },
    backgroundImage:{
      'lpBackground': "url('./LandingPage/lpBackground.svg')",
    }
    },
  },
  plugins: [],
}