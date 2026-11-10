/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F1F8F4',
          100: '#DCEFE3',
          200: '#BFE0CD',
          300: '#8CC3A6',
          400: '#4C9B72',
          500: '#1F7A4C',
          600: '#0A5C33',
          700: '#004625',
          800: '#00331F',
          900: '#00261A',
        },
        lime: {
          100: '#F1FADB',
          300: '#D4EC8A',
          400: '#C5E36E',
          500: '#BADA55',
          600: '#A3C43F',
        },
        accent: {
          50: '#EAF2FF',
          100: '#D1E2FF',
          300: '#7FB0FF',
          400: '#3D8BFF',
          500: '#116DFF',
          700: '#0057E1',
          800: '#0046B5',
        },
        success: { 100: '#DCFCE7', 600: '#15803D' },
        warning: { 100: '#FEF3C7', 600: '#B45309' },
        error: { 100: '#FEE2E2', 600: '#B91C1C' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out both',
      },
    },
  },
  plugins: [],
};
