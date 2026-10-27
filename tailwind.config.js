/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '1.25rem', screens: { '2xl': '1240px' } },
    extend: {
      colors: { ocean: { 50: '#edf8f7', 100: '#d3edeb', 200: '#acdcd8', 300: '#77c3bf', 400: '#3c9b9a', 500: '#168180', 600: '#106a70', 700: '#0c535a', 800: '#10434a', 900: '#112f38' }, ink: '#16272f', sand: '#f9f6f0', coral: '#e6a77c' },
      fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Playfair Display', 'serif'] },
      boxShadow: { soft: '0 18px 50px rgba(20,51,54,0.08)', float: '0 22px 65px rgba(20,51,54,0.16)' },
      backgroundImage: { grain: 'linear-gradient(135deg, rgba(255,255,255,.75), rgba(250,246,237,.9))' }
    }
  }, plugins: []
};
