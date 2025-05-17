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
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        primary: {
          DEFAULT: '#1e56d6',
          50: '#eef3ff',
          100: '#e0e9ff',
          200: '#c7d6fe',
          300: '#a4bafd',
          400: '#7c95f9',
          500: '#1e56d6',
          600: '#3b4eeb',
          700: '#2f3bd8',
          800: '#2832af',
          900: '#252e8b',
          950: '#1a1d54',
        },
        border: {
          DEFAULT: '#e5e7eb',
          dark: '#2d2d2d',
        },
        background: {
          dark: '#121212',
          light: '#ffffff',
        },
      },
      textColor: {
        dark: {
          primary: '#ffffff',
          secondary: '#a3a3a3',
        },
        light: {
          primary: '#000000',
          secondary: '#4b5563',
        },
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: theme('colors.gray.200', 'currentColor'),
        'dark': theme('colors.gray.800'),
      }),
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
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
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
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
