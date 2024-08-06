/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xl: { max: "90em" },
      lg: { max: "69em" },
      md: { max: "47.8em" },
      xsm: { max: "30em" },
    },
    extend: {},
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
