/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#17AF26",
        white: "#FFFFFF",
        red: "#EB2606",
        grayLight: "#C8C9CB",
        darkGreen: "#05422C",
        gray: "#46494F",
        grayMuted: "#9D9EA2",
        grayOff: "#F2F6F4"
      }
    },
  },
  plugins: [],
};