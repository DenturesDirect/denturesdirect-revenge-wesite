/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:    '#1d2939', // Deep slate — headers, dark sections
          blue:    '#3b82f6', // Vivid sky blue — primary CTAs, accents
          light:   '#e8f0f9', // Icy blue-white — section backgrounds
          gray:    '#4b5563', // Slate gray — secondary text
          // Derived shades (same hues, different luminosity)
          darker:  '#111927', // Deeper slate for footer / darkest sections
          blueLight: '#93c5fd', // Blue-300 — for tints, glows
          blueDark:  '#1d4ed8', // Blue-700 — for hover states
          ice:     '#f0f6ff', // Near-white with blue cast for subtle section alternates
          border:  '#dbeafe', // Blue-100 — card borders
        }
      },
      fontFamily: {
        sans:    ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'card':       '0 4px 24px 0 rgba(59,130,246,0.08), 0 1px 4px 0 rgba(29,41,57,0.06)',
        'card-hover': '0 16px 48px 0 rgba(59,130,246,0.20), 0 4px 12px 0 rgba(29,41,57,0.10)',
        'glass':      '0 8px 32px 0 rgba(59,130,246,0.12)',
        'cta':        '0 4px 20px 0 rgba(59,130,246,0.40)',
        'cta-hover':  '0 8px 36px 0 rgba(59,130,246,0.55)',
        'header':     '0 2px 24px 0 rgba(29,41,57,0.14)',
        'inner-glow': 'inset 0 1px 0 rgba(255,255,255,0.15)',
      },
      backgroundImage: {
        'gradient-hero':    'linear-gradient(135deg, #1d2939 0%, #1a3356 55%, #1d2939 100%)',
        'gradient-blue':    'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        'gradient-blue-r':  'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
        'gradient-light':   'linear-gradient(180deg, #e8f0f9 0%, #f0f6ff 100%)',
        'gradient-card':    'linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(29,78,216,0.03) 100%)',
        'shimmer':          'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%)',
        'shimmer-dark':     'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        fadeSlideUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseBlue: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(59,130,246,0.5)' },
          '50%':      { boxShadow: '0 0 0 10px rgba(59,130,246,0)' },
        },
        orb: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%':      { transform: 'translate(30px,-30px) scale(1.06)' },
          '66%':      { transform: 'translate(-20px,20px) scale(0.94)' },
        },
      },
      animation: {
        shimmer:      'shimmer 2.5s linear infinite',
        float:        'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        fadeSlideUp:  'fadeSlideUp 0.6s ease-out forwards',
        pulseBlue:    'pulseBlue 2s ease-in-out infinite',
        orb:          'orb 14s ease-in-out infinite',
        'orb-slow':   'orb 20s ease-in-out infinite reverse',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34,1.56,0.64,1)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
