/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // tells tailwind
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

