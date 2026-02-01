/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f8fafc',
          100: '#eef2f7',
          200: '#d9e1ee',
          300: '#b6c3d6',
          400: '#92a3bb',
          500: '#6f829e',
          600: '#51607a',
          700: '#3b465f',
          800: '#252d43',
          900: '#151b2a',
          950: '#0b0f1c',
        },
        primary: {
          DEFAULT: '#1f56d4',
          50: '#eef3ff',
          100: '#dbe6ff',
          200: '#b7ccff',
          300: '#8fb0ff',
          400: '#5f8cff',
          500: '#1f56d4',
          600: '#1747b3',
          700: '#12378e',
          800: '#0f2d73',
          900: '#0b214f',
          950: '#071533',
        },
        accent: {
          DEFAULT: '#3fbd8b',
          50: '#ebfbf4',
          100: '#d2f4e3',
          200: '#a6e9c7',
          300: '#79dca9',
          400: '#52cc91',
          500: '#3fbd8b',
          600: '#2f9d73',
          700: '#257b5a',
          800: '#1f6248',
          900: '#164535',
          950: '#0f2f24',
        },
        surface: {
          light: '#f8fafc',
          dark: '#0b1120',
        },
        border: {
          DEFAULT: '#e2e8f0',
          dark: '#1f2a44',
        },
        background: {
          dark: '#070b14',
          light: '#f9fbff',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      textColor: {
        dark: {
          primary: '#f8fafc',
          secondary: '#b6c3d6',
        },
        light: {
          primary: '#0b0f1c',
          secondary: '#51607a',
        },
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.200', 'currentColor'),
        dark: theme('colors.gray.800'),
      }),
      backgroundImage: {
        'brand-mesh': 'radial-gradient(700px circle at 20% 20%, rgba(31, 86, 212, 0.25), transparent 55%), radial-gradient(600px circle at 80% 15%, rgba(63, 189, 139, 0.18), transparent 55%), radial-gradient(800px circle at 45% 85%, rgba(31, 86, 212, 0.18), transparent 60%)',
        'brand-glow': 'radial-gradient(900px circle at 10% 10%, rgba(31, 86, 212, 0.28), transparent 60%)',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 8, 23, 0.12)',
        card: '0 20px 50px rgba(2, 8, 23, 0.2)',
        glow: '0 0 30px rgba(31, 86, 212, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 0.8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'border-glow': 'borderGlow 2.5s ease-in-out infinite',
        'cursor-ripple': 'cursorRipple 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(31, 86, 212, 0.3)'
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 40px rgba(31, 86, 212, 0.6)'
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': {
            textShadow: '0 0 5px rgba(31, 86, 212, 0.5)'
          },
          '50%': {
            textShadow: '0 0 20px rgba(31, 86, 212, 1)'
          },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(31, 86, 212, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(31, 86, 212, 0.45)' },
        },
        cursorRipple: {
          '0%': { opacity: '0.6', transform: 'translate(-50%, -50%) scale(0.2)' },
          '100%': { opacity: '0', transform: 'translate(-50%, -50%) scale(1.8)' },
        },
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.gray.900'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.primary.400'),
              '&:hover': {
                color: theme('colors.primary.300'),
              },
            },
            'h1, h2, h3, h4': {
              color: theme('colors.white'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addBase, theme }) {
      addBase({
        'html.dark': {
          '--background': theme('colors.gray.900'),
          '--foreground': theme('colors.gray.100'),
        },
        'html.light': {
          '--background': theme('colors.white'),
          '--foreground': theme('colors.gray.900'),
        },
      });
    },
  ],
};
