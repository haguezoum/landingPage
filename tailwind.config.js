module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:theme=>({
        'waveLeft':"url('/img/bg-wave-left.png')",
        'waveRight':"url('/img/bg-wave-right.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
