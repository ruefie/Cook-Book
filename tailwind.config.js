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
      'photo': "url('/images/wave-haikei(1).svg')"
    },
    animation:{
      'animate': '5s ease-in-out infinite', 
    },
    keyframes: {
      'animate':{
        '0%,100%': {
          borderRadius: '60%, 40%,30%, 70% / 60%, 30%, 70%, 40%',
          },
        '50%': {
            borderRadius: '30%, 60%,70%, 40% / 50%, 60%, 30%, 60%',
            }
      } 
  }
  },
  plugins: [],
}
}
