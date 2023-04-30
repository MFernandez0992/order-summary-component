/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        'pale-blue': 'hsl(225, 100%, 94%)',
        'bright-blue': 'hsl(245, 75%, 52%)',
        'very-pale-blue': 'hsl(225, 100%, 98%)',
        'desaturated-blue': 'hsl(224, 23%, 55%)',
        'dark-blue': 'hsl(223, 47%, 23%)',
      },
    },
  },
  plugins: [],
}

