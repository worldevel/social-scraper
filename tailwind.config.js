/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: {
          100: "#dcdafa",
          200: "#b9b5f5",
          300: "#9590ef",
          400: "#726bea",
          500: "#4f46e5",
          600: "#3f38b7",
          700: "#2f2a89",
          800: "#201c5c",
          900: "#100e2e",
        },
        dark: {
          100: "#d0d0d0",
          200: "#a1a1a2",
          300: "#717173",
          400: "#424245",
          500: "#131316",
          600: "#0f0f12",
          700: "#0b0b0d",
          800: "#080809",
          900: "#040404",
        },
      },
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
