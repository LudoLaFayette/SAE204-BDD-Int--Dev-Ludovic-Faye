module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "grey-gradient": "#A8A29E",
        "grey-gradiant-form": "#bbb7b4",
        "text": "var(--couleur-text)",
        "fond": "var(--couleur-fond)",
        "interactive": "var(--couleur-interactive)",
        "debut-gradient" : "var(--color-debut-gradient)",
        "fin-gradient" : "var(--color-fin-gradient)",
        "couleur-header": "var(--couleur-header)",
        "couleur-footer": 'var(--couleur-footer)',
        "couleur-h2": 'var(--couleur-h2)',
        "color-card": "var(--color-card)",
        "footer": "#b1aca9",
        "text h2": "#801e1e",
        "titreLogo": "#801e1e",
        "borderlLogo": "#1d1d1b",
        "lettreLogo": "#728ca8",
        "lettreLogo2": "#1d1d1b",
        "borderlLogo2": "#728ca8",
        "font-Card": "#e5e7eb",
        "red-action": "#d92d3c",
        "mainTextCardColor": "#000000"
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
      "boxShadow": {
        "cardShadow": "5px 5px 5px 0px rgba(0,0,0,0.5)"
      },


    },


  },
  plugins: [],
}
