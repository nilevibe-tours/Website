/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#15364D",
        golden: "#facc15",
        light: "#cbd5e1",
      },
    },
  },
  plugins: [],
};
