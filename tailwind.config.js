/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        magenta: "#8B1E62",
        obsidian: "#121212",
        anthracite: "#2D2D30",
        gold: "#D4AF37",
        mint: "#E0F2F1",
      },
      fontFamily: {
        serif: ["'Libre Bodoni'", "serif"],
        sans: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  plugins: [],
}
