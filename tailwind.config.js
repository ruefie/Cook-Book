/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily:{
      "script": ["Petit Formal Script"]
    },
    // fontSize:{
    //   xxs: '10px',
    //   xs: '12px'
    // },
    // spacing: {
    //   26: '110px'
    // },
    extend: { 
      borderRadius: {
      extraLarge: '12rem'
    },
    backgroundImage:{
      'wave': "url('/images/wave1.svg')",
      'wave2': "url('/images/wavefooter.svg')",
    },
    animation:{
      'animate': '5s ease-in-out infinite', 
    },
    // keyframes: {  
    //   slideLeft: {to: 0, from:{
    //     transform: translateX (100%)
    //   } 
  }
  },
  plugins: [],
}

