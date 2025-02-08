/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#F7B431", 100: "#FFA930", 200: "#E18400" },
        black: { DEFAULT: "#000", 100: "#333333", 200: "#4C4C4C" },
        white: {
          DEFAULT: "#FFF",
          100: "#c9c9c9",
          200: "#6A6A6A",
          300: "#9B9B9B",
        },
      },
      fontFamily: {
        plight: ["Proximanova-Light", "sans-serif"],
        pregular: ["Proximanova-Regular", "sans-serif"],
        pmedium: ["Proximanova-Medium", "sans-serif"],
        psemibold: ["Proximanova-SemiBold", "sans-serif"],
        pbold: ["Proximanova-Bold", "sans-serif"],
        pextrabold: ["Proximanova-ExtraBold", "sans-serif"],
        pblack: ["Proximanova-Black", "sans-serif"],
      },
      boxShadow: {
        "custom-opacity": "0 4px 6px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
