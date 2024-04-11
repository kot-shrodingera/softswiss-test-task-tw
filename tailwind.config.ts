import defaultTheme from 'tailwindcss/defaultTheme'

import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        navLinkGradient:
          'linear-gradient(98.25deg, #EBFF00 18.56%, #FF70D9 76.02%)',
      },
    },
    fontSize: {
      'sm': ['0.875rem', '1.0625rem'], // 14px/17px
      'base': ['1rem', '1.1875rem'], // 16px/19px
      'lg': ['1.125rem', '1.375rem'], // 18px/22px
      'xl': ['1.25rem', '1.5rem'], // 20px/24px
      '1.5xl': ['1.375rem', '1.625rem'], // 22px/26px
      '2xl': ['1.5rem', '1.8125rem'], // 24px/29px
      '2.5xl': ['1.625rem', '1.9375rem'], // 26px/31px
      '3xl': ['2rem', '2.375rem'], // 32px/38px
      '3.5xl': ['2.25rem', '2.25rem'], // 36px/36px
      '4xl': ['2.5rem', '2.5rem'], // 40px/40px
      '4.5xl': ['2.875rem', '2.875rem'], // 46px/46px
      '5xl': ['3rem', '3rem'], // 48px/48px
      '6xl': ['4.5rem', '4.5rem'], // 72px/72px
      '6.5xl': ['4.625rem', '4.625rem'], // 74px/74px
    },
    screens: {
      md: '768px',
      lg: '1248px',
    },
    colors: {
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      pink: '#FF70D9',
      yellow: '#EBFF00',
      darkBlue: '#304571',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '1.875rem',
        lg: '5rem',
      },
    },
  },
  plugins: [],
} satisfies Config
