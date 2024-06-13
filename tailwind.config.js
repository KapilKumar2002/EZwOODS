/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primaryColor: "rgb(234 179 8 / 0.6)",
        disabledColor: "rgb(243 244 246 / 1)",
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f",
      },
    },
  },
  plugins: [],
};
