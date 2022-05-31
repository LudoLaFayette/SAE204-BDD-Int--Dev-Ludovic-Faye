module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "grey-gradient" : "#A8A29E",
        // Ici vos couleurs exportées de Figma
      },
      "fontSize": {
        "base": "1rem",
        "md": "1.25rem",
        "md2": "1.5rem",
        "lg": "2rem",
        "lg1": "2.5rem",
        "lg2": "3rem",
        "xl": "5rem",
        "xl2": "6rem",
       },
       "fontFamily": {
        "happy-times-at-the-ikob-new-game-plus-edition": "Happy Times at the IKOB New Game Plus Edition",
        "alegreya-sans": "Alegreya Sans"
       },
       "borderRadius": {
        "none": "0",
        "xs": "0.25rem",
        "sm": "0.625rem",
        "default": "1.5625rem",
        "lg": "2.1875rem",
        "xl": "2.8271484375rem",
        "2xl": "5.0888671875rem",
        "full": "9999px"
       },
      
    },


  },
  plugins: [],
}
