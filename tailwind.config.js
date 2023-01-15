/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        googleFont1: ["Anton", "sans-serif"],
        googleFont2: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
