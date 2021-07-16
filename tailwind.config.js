module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: "class", // or 'media' or 'class'
  // important: true,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        waveLeft: "url('/img/bg-wave-left.png')",
        waveRight: "url('/img/bg-wave-right.png')",
      }),
      backgroundColor:(them)=>({
        'dark':'#303030'
      }),
      rotate: {
        19: "19deg",
        "-19": "-19deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
