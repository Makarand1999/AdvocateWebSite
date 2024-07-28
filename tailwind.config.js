/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'lawyer-bg': "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36')", // Example URL
      },
    },
  },
  plugins: [],
}
