/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          300: "#955CC1",
          400: "#961AF880",
          500: "#961AF8",
          900: "#360959",
        },
        neutral: {
          100: "#FFFFFF",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
