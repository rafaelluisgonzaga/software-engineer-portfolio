// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2b8cee",
        "background-light": "#ffffff",
        "background-dark": "#101922",
        "text-main": "#0d141b",
        "text-secondary": "#4c739a",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};