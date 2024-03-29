/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // "/node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    // "/node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        flipHorizontal: {
          '50%': { transform: 'rotateY(180deg' },
        },
      },
      animation: {
        hflip: 'flipHorizontal 2s infinite',
        'text-gradient': 'text-gradient 1.5s linear infinite',
      },
      screens: { sm: '480px', md: '768px', lg: '976px', xl: '1440pd' },
      animation: {
        fadeIn: 'fadeIn 1.5s',
        bounce: 'bounce 0.5s alternate cubic-bezier(0.95, 0.05, 0.795, 0.035) infinite',
        slide: 'slideUp 0.5s',
        slideEaseInOut: 'slideUp 0.5s ease-in-out',
        slideCubiBezier: 'slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
      },
      animationDelay: {
        0: '0s',
        2: '0.2s',
        4: '0.4s',
        6: '0.6s',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
          'text-gradient': {
            to: {
              backgroundPosition: '200% center',
            },
          },
        },
        slide: {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        bounce: {
          from: { transform: 'translateY(10px)' },
          to: { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
