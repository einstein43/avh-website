/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        carbon: {
          DEFAULT: '#191716',
          light: '#2a2725',
          dark: '#0f0e0d',
        },
        sunflower: {
          DEFAULT: '#e6af2e',
          light: '#f0c559',
          dark: '#c89624',
        },
        linen: {
          DEFAULT: '#e0e2db',
          light: '#f0f1ed',
          dark: '#c8cac3',
        },
        indigo: {
          DEFAULT: '#3d348b',
          light: '#5249a8',
          dark: '#2a2362',
        },
        khaki: {
          DEFAULT: '#beb7a4',
          light: '#d4cfc0',
          dark: '#a39a84',
        },
        primary: {
          DEFAULT: '#e6af2e',
          50: '#fef9ed',
          100: '#fdf3d5',
          200: '#fbe5ab',
          300: '#f7d276',
          400: '#f3bd47',
          500: '#e6af2e',
          600: '#c89624',
          700: '#a67a1d',
          800: '#865f1c',
          900: '#6f501a',
        },
        secondary: {
          DEFAULT: '#3d348b',
          50: '#f4f3fb',
          100: '#e9e7f7',
          200: '#d5d1f0',
          300: '#b4aee4',
          400: '#8d83d5',
          500: '#6d60c6',
          600: '#5c4ab4',
          700: '#4e3d9d',
          800: '#413481',
          900: '#3d348b',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
