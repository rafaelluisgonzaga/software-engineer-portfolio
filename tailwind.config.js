// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#2b8cee",

        surface: {
          DEFAULT: "#ffffff",     // cards, blocos
          dark: "#0f172a",        // slate-900 feel
        },

        background: {
          DEFAULT: "#ffffff",     // body
          dark: "#101922",
        },

        border: {
          DEFAULT: "#e5e7eb",     // slate-200
          dark: "#1f2937",        // slate-800
        },

        text: {
          main: "#0d141b",
          secondary: "#4c739a",
          dark: "#e5e7eb",
          muted: "#9ca3af",
        },

        tag: {
          DEFAULT: "#f1f5f9",     // slate-100
          dark: "#1e293b",        // slate-800
        },
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