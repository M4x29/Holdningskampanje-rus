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
    },
  },
  plugins: [],
};
