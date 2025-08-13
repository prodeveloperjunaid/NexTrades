/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "rgb(79, 70, 229)", // indigo-600
          700: "rgb(67, 56, 202)", // indigo-700
          800: "rgb(55, 48, 163)", // indigo-800
          900: "rgb(49, 46, 129)", // indigo-900
        },
        secondary: {
          200: "rgb(199, 210, 254)", // indigo-200
          500: "rgb(99, 102, 241)", // indigo-500
        },
        neutral: {
          300: "rgb(209, 213, 219)", // gray-300
          400: "rgb(156, 163, 175)", // gray-400
          700: "rgb(55, 65, 81)", // gray-700
          800: "rgb(31, 41, 55)", // gray-800
        },
        // New background colors (soft light options)
        background: {
          light: "#f8fafc",   // slate-50 (soft blue-white, best for screens)
          subtle: "#f3f4f6",  // gray-100 (very light gray)
          warm: "#f5f5f4",    // stone-50 (slightly warm white)
          DEFAULT: "#ffffff", // pure white (fallback)
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};