/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
        screens: {
        'xl2': '1550px', // custom breakpoint for 1550px
      },
    },
  },
  plugins: [],
};
