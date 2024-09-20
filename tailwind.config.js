/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bangers: ["Bangers", "system-ui"],
        roboto:["Roboto", "sans-serif"]
      },
    },
  },
  plugins: [],
};
