module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue","./public/*.html"] },
  darkMode: "class", // or 'media' or 'class'
  // important: true,
  theme: {
    extend:{
      backgroundImage: (theme) => ({
        waveLeft: "url('/img/bg-wave-left.png')",
        waveRight: "url('/img/bg-wave-right.png')",
      }),
      backgroundColor:(them)=>({
        'dark'            :'#303030',
        'purple'          :'rgb(156, 39, 176)',
        'purple-primary'  :'rgb(106 27 154)',
        'purple-socondry' :'rgb(225 190 231)',
        'green'           :'rgb(139, 195, 74)',
        'green-primary'   :'rgb(85 139 47)',
        'green-socondy'   :'rgb(220 237 200)'
      }),
      rotate: {
        19: "19deg",
        "-19": "-19deg",
      },
     textColor:()=> ({
        'purple'          :'rgb(156, 39, 176)',
        'purple-primary'  :'rgb(106 27 154)',
        'purple-secondry' :'rgb(225 190 231)',
        'green'           :'rgb(139, 195, 74)',
        'green-primary'   :'rgb(85 139 47)',
        'green-socondy'   :'rgb(220 237 200)'
      })
    } ,
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
