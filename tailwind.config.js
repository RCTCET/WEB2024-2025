/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        slider: {
          'from' : { transform: 'translateX(40px)' },
          'to': { transform: 'translateX(-2188px)' },
        },
        slider_mobile: {
          'from' : { transform: 'translateX(40px)' },
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

      colors: {
        "statsBar" : "#f5f5f5",
        "HealthCardColor" : "#FFF7ED"
      },

      screens: {
        'xxl': '1680px',
        'xxl2': '2800px',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
};

