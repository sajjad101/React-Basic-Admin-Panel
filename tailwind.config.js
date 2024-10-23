/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}' // Adjust this if you have different file extensions
  ],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      'dark' // set dark as the default theme
      // You can include other themes if needed, like "light", "cupcake", etc.
    ]
  },
  plugins: [require('daisyui')]
}
