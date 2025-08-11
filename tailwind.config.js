/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ios: {
          dark: {
            background: '#1C1C1E',
            secondary: '#2C2C2E',
            separator: 'rgba(255,255,255,0.1)',
            text: 'rgba(255,255,255,0.9)',
            secondaryText: 'rgba(255,255,255,0.6)'
          }
        }
      },
      fontFamily: {
        'sf': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif']
      },
      animation: {
        'ios-tap': 'ios-tap 0.1s ease-out',
        'ios-bounce': 'ios-bounce 0.3s ease-out'
      },
      keyframes: {
        'ios-tap': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' }
        },
        'ios-bounce': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' }
        }
      }
    },
  },
  plugins: [],
}
