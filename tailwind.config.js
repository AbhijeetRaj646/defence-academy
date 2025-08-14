/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-saffron': '#FF9933',
        'india-green': '#138808',
        'navy-blue': '#000080',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
};