module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        danger: {
          DEFAULT: '#FF464F',
          dark: '#FF323C',
        },
        primary: {
          light: '#66C2FF',
          DEFAULT: '#0099FF',
          dark: '#005C99',
        },
        secondary: {
          light: '#F9DA9F',
          DEFAULT: '#F2A71B',
          dark: '#916108',
        },
        light: {
          100: '#EBE4E4',
          300: '#F5F2F2',
        },
        dark: {
          100: '#231F1F',
          300: '#594E4E',
          500: '#B2A1A1',
        },
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      fontSize: {
        base: '0.9375rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
