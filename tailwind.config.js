/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#00000",
        primary: "rgb(29, 144, 255)",
        tertiary: "rgb(79, 79, 79)",
        white: "#FFFFFF",
      },
      fontFamily: {
        interBold: ["Inter-ExtraBold", "sans-serif"],
        interMedium: ["Inter-Medium", "sans-serif"],
        interRegular: ["Inter-Regular", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
