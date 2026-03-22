/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "compack-dark": "#0a0a0a",
        "compack-gold": "#c9a84c",
        "solatera-green": "#2d6a4f",
        "carbon-slate": "#1c2b3a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
