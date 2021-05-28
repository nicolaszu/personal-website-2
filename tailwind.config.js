module.exports = {
  theme: {
    fontFamily: {
      sans: ['ProximaNova', 'sans-serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
    },
    boxShadow: {
      'button-hover': '0 5px 15px rgb(0 0 0 / 6%)',
      none: '0 0px 0px rgb(0 0 0 / 0%)',
      'button-secondary-hover':
        '0 0 0 0.5px rgb(0 0 0 / 4%), 0 2px 6px rgb(0 0 0 / 5%), 0 7px 14px rgb(0 0 0 / 10%)',
      button: '0 1px 2px rgb(41 52 204 / 10%), 0 2px 4px rgb(41 52 204 / 20%)',
      image: '0 1px 2px rgb(0 0 0 / 5%), 0 10px 20px rgb(0 0 0 / 5%)',
      'image-hover': '0 1px 2px rgb(0 0 0 / 5%), 0 15px 30px rgb(0 0 0 / 10%)',
      'card-shadow':
        '0 50px 100px -20px rgba(50,50,93,0.25),0 30px 60px -30px rgba(0,0,0,0.3)',
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      101: '1.01',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
      colors: {
        primary: '#3340ff',
        'primary-light': '#4753ff',
        'primary-dark': '#224A9E',
        'kpmg-blue': '#073589',
        gray: {
          50: '#f6f9fc',
          100: '#F2F2F2',
          200: '#CCCCCC',
          500: '#808080',
          600: '#666666',
          700: '#4D4D4D',
          800: '#425466',
        },
        black: '#0a2540',
      },
    },
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
      scale: ['active', 'group-hover'],
    },
  },
}
