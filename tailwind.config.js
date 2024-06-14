const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headingFont: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        buttonFont: ['"LXGW WenKai TC"', "sans-serif"],
        textFont: ['"Ibarra Real Nova"', "sans-serif"],
      },
      colors: {
        secondaryColor: "#FFEFDF",
        primaryColor: "#FFDC8D",
        disabledColor: "#EAE9E8",
        dialogShadow: "#212428",
        lightText: "#c1c4c9",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
      },
    },
  },
  plugins: [],
});
