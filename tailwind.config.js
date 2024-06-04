/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black1: "#1A212F",
      },
      fontSize: {
        3.5: "14px",
      },
      margin: {
        17.5: "70px",
      },
      backgroundColor: {
        orange: "#FAC663",
      },
      padding: {
        17.5: "70px",
      },
    },
  },
  plugins: [],
};
