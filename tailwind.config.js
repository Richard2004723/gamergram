/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Scans files in the src folder
    "./*.html"              // Scans any HTML files in the main folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}