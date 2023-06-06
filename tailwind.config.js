/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Text: "#080802",
        Background: "#fafbee",
        "Primary-Button": "#186267",
        "Secondary-Button": "#f2f4d2",
        Accent: "#671862",
      },
      animation: {
        "bounce-slow": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(50px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
