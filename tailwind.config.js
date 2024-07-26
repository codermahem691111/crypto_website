/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
  
    extend: {
      spacing: {
        '4': '1rem', // 4 is a default spacing unit in Tailwind
      },
    },
  },
  plugins: [],
}

