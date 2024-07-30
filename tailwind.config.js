/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4fd1c5",
        // primary: "#c4a676",
        secondary: "#1f2937",
        // secondary: "#000000",
        neutral: "#6b7b8c",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none", // Chrome, Safari, and Opera
        },
      })
    },
  ],
}
