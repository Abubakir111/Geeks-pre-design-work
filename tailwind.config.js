/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      boxShadow: {
        ten: '0px 0px 20px 0px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        ['Roboto']: ['Roboto'],
      },
    },
    container: {
      center: true,
    },
    // настройка  адаптаций  под размер экрана
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    // Настройка  основного цвета

    // colors: {
    //   'blue': '#1fb6ff',
    //   // 'purple': '#7e5bef',
    //   // 'pink': '#ff49db',
    //   // 'orange': '#ff7849',
    //   // 'green': '#13ce66',
    //   // 'yellow': '#ffc82c',
    //   // 'gray-dark': '#273444',
    //   // 'gray': '#8492a6',
    //   // 'gray-light': '#d3dce6',
    // },

    // Настройка  основоного шрифта
    //   fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },

    // Настройка  основного радиуса
    // borderRadius: {
    //   '4xl': '2rem',
    // }
  },
  plugins: [],
};
