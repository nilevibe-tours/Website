/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#15364D",
        golden: "#FECC15",
        light: "#cbd5e1",
        "light-blue": "#4DBDD5",
      },
    },
  },
  plugins: [],
};
