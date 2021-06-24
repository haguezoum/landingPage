module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:theme=>({
        'waveLeft':"url('/img/bg-wave-left.png')",
        'waveRight':"url('/img/bg-wave-right.png')",
        'wave':"url('/img/wave.svg')",
        'wave3':"url('/img/wave-3.svg')",
      }),
      animation: {
        wave: 'wave 8s ease-in-out infinite',
       },
       keyframes: {
        wave: {
          '0%,': { left: '0rem' ,top:'20%' },
          '50%': { left: '10rem',top:'10%' },
          '100%':{left:'30rem',top:'20%'}
        }
       },
       rotate:{
         '19' :'19deg',
         '-19':'-19deg'
       }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
