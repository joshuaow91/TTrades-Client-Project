/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'maroon': 'rgb(84, 2, 8)',
      },
      textColor: {
        'maroon': 'rgb(84, 2, 8)',
      },
      borderColor: {
        'maroon': 'rgb(84, 2, 8)',
      },
    },
  },
  plugins: [],
}

