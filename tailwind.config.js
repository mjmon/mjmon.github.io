/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#040F2E",
        secondary: "#A3B6F4",
        blueGray: "#CFDAF8",
        otherBg: "#0C183F",
      },
    },
  },
  plugins: [],
};
