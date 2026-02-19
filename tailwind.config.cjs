/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1a2332",
        ocean: "#2dd4bf",
        ink: "#0f172a",
        fog: "#f8fafc",
      },
    },
  },
  plugins: [],
};
