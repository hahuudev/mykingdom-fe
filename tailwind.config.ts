import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: 'class',
  content: [
    './.storybook/welcome.stories.mdx',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/assets/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
        openSans: ['var(--font-open-sans)'],
        orbitron: ['var(--font-orbitron)'],
        metropolis: ['var(--font-metropolis)'],
      },
      spacing: {
        17: '68px',
        18: '72px',
      },
      colors: {
        white: '#FFFFFF',
        success: {
          DEFAULT: '#ECFDF3',
          border: '#067647',
          text: '#027A48',
        },
        error: {
          DEFAULT: '#FEF3F2',
          border: '#FECDCA',
          text: '#B42318',
        },
        warning: {
          DEFAULT: '#FFFAEB',
          border: '#FEDF89',
          text: '#B54708',
        },
        info: {
          DEFAULT: '#EAFEFF',
          border: '#9EF4FF',
          text: '#03729B',
        },
        background: 'var(--background)',
        foreground: {
          DEFAULT: 'var(--foreground)',
        },
        input: 'var(--input)',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: {
          DEFAULT: '#DBDBDB',
          primary: '#DBDBDB',
        },
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        },
        secondary: {
          50: 'var(--secondary-50)',
          100: 'var(--secondary-100)',
          200: 'var(--secondary-200)',
          300: 'var(--secondary-300)',
          400: 'var(--secondary-400)',
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          800: 'var(--secondary-800)',
          900: 'var(--secondary-900)',
        },
        tertiary: {
          50: 'var(--tertiary-50)',
          100: 'var(--tertiary-100)',
          200: 'var(--tertiary-200)',
          300: 'var(--tertiary-300)',
          400: 'var(--tertiary-400)',
          500: 'var(--tertiary-500)',
          600: 'var(--tertiary-600)',
          700: 'var(--tertiary-700)',
          800: 'var(--tertiary-800)',
          900: 'var(--tertiary-900)',
        },
        gray: {
          50: 'var(--gray-50)',
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
          500: 'var(--gray-500)',
          600: 'var(--gray-600)',
          700: 'var(--gray-700)',
          800: 'var(--gray-800)',
          900: 'var(--gray-900)',
        },
        shamrock: {
          50: 'var(--shamrock-50)',
          100: 'var(--shamrock-100)',
          200: 'var(--shamrock-200)',
          300: 'var(--shamrock-300)',
          400: 'var(--shamrock-400)',
          500: 'var(--shamrock-500)',
          600: 'var(--shamrock-600)',
          700: 'var(--shamrock-700)',
          800: 'var(--shamrock-800)',
          900: 'var(--shamrock-900)',
        },
        amaranth: {
          50: 'var(--amaranth-50)',
          100: 'var(--amaranth-100)',
          200: 'var(--amaranth-200)',
          300: 'var(--amaranth-300)',
          400: 'var(--amaranth-400)',
          500: 'var(--amaranth-500)',
          600: 'var(--amaranth-600)',
          700: 'var(--amaranth-700)',
          800: 'var(--amaranth-800)',
          900: 'var(--amaranth-900)',
        },
        'red-damask': {
          50: 'var(--red-damask-50)',
          100: 'var(--red-damask-100)',
          200: 'var(--red-damask-200)',
          300: 'var(--red-damask-300)',
          400: 'var(--red-damask-400)',
          500: 'var(--red-damask-500)',
          600: 'var(--red-damask-600)',
          700: 'var(--red-damask-700)',
          800: 'var(--red-damask-800)',
          900: 'var(--red-damask-900)',
        },
      },
      borderRadius: {},
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};

export default config;
