/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lawyer-bg': "url('https://unsplash.com/photos/a-wooden-balance-scale-with-a-black-background-diZeo4uzp0o')", // Example URL
      },
    },
  },
  plugins: [],
}
