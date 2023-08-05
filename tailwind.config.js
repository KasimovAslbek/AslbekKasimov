/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      maxWidth: {
        'main': '1366px',
      },
      fontFamily: {
        'sourceSans': ['Source Sans 3', 'system-ui'],
      },
    },
  },
  plugins: [],
}

