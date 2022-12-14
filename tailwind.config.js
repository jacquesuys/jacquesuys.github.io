/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1E90FF",
          secondary: "#7FFF62",
          accent: "#BC62FF",
          neutral: "#7F7F7F",
          "base-100": "#333333",
          info: "#3ABFF8",
          success: "#22c55e",
          warning: "#FFAB1E",
          error: "#FF1E1E",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        "base-500": "rgba(255, 255, 255, 0.5)",
        "base-300": "rgba(255, 255, 255, 0.3)",
        "base-200": "rgba(255, 255, 255, 0.2)",
        "content-bg": "#1a1a1a",
      },
      fontFamily: {
        interBold: ["Inter-ExtraBold", "sans-serif"],
        interMedium: ["Inter-Medium", "sans-serif"],
        interRegular: ["Inter-Regular", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
