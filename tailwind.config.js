const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      xxs: '350px',
      xs: '25rem',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        headerHeight: '4rem',
      },
      fontSize: {
        'h1-small': [
          '3rem',
          { fontWeight: 900, lineHeight: '53px', letterSpacing: '-0.01em' },
        ],
        h1: [
          '3.5rem',
          { fontWeight: 900, lineHeight: '62px', letterSpacing: '-0.01em' },
        ],
        'h1-lg': [
          '5.375rem',
          {
            fontWeight: '900',
            lineHeight: '96px',
            letterSpacing: '-0.02em',
          },
        ],
        h3: ['2rem', { fontWeight: '900', lineHeight: '39px' }],
        regular: ['1rem', { fontWeight: 600, lineHeight: '27px' }],
        p: ['1.25rem', { lineHeight: '30px' }],
        sm: ['0.875rem', { lineHeight: '21px' }],
        mono: [
          '1rem',
          { lineHeight: '22px', fontWeight: 700, letterSpacing: '0.08em' },
        ],
      },
      letterSpacing: {
        upper: '0.08em',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#3a1fd3',
          foreground: '#f6f6e8',
        },
        secondary: {
          DEFAULT: '#fedb63',
          foreground: '#10284b',
        },
        teal: '#99d6cc',
        purple: '#381fd1',
        beige: '#f6f6e8',
        pink: '#fc6f6b',
        blue: '#10284b',
        purple2: '#a599f0',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        arminGrotesk: ['Armin Grotesk', 'sans-serif'],
        roboto: ['"Roboto Mono"', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        spin: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        'spin-left': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
        expandBg: {
          '0%': { 'background-size': '100% 100%' },
          '100%': { 'background-size': '150% 120%' },
        },
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        spin: 'spin 30s linear infinite',
        'spin-left': 'spin-left 30s linear infinite',
        'expand-bg': 'expandBg ease-in-out 5s infinite alternate-reverse',
        scroll: 'scroll 60s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
