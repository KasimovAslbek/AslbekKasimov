/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      aspectRatio: {
        'square': [1, 1], // You can define more aspect ratios if needed
      },
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

