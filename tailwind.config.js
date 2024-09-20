/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'FFD6A8': '#FFD6A8',
        '9D320F': '#9D320F',
        'statsBar': '#f5f5f5',
        'HealthCardColor': '#FFF7ED',
      },
      keyframes: {
        slider: {
          'from': { transform: 'translateX(40px)' },
          'to': { transform: 'translateX(-2188px)' },
        },
        slider_mobile: {
          'from': { transform: 'translateX(40px)' },
          'to': { transform: 'translateX(-1935px)' },
        },
      },
      animation: {
        slider: 'slider 30s linear infinite',
        slider_mobile: 'slider_mobile 30s linear infinite',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xs': '425px',
        'xxl': '1680px',
        'xxl2': '2800px',
      },
    },
  },
  plugins: [],
}
