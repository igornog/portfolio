/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        backgroundanimation1: {
          '0%, 16.667%, to': {
            opacity: 1,
          },
          '33%, 83.333%': {
            opacity: 0,
          },
        },
        backgroundanimation2: {
          '0%, to': {
            opacity: 0,
          },
          '33.333%, 50%': {
            opacity: 1,
          },
          '16.667%, 63.667%': {
            opacity: 0,
          },
        },
        backgroundanimation3: {
          '0%, 50%, to': {
            opacity: 0,
          },
          '66.667%, 83.333%': {
            opacity: 1,
          },
        },
        textGradientAnimation: {
          '0%': {
            color: '',
            opacity: 1,
          },
          '33%': {
            color: 'transparent',
          },
          '50%': {
            color: 'white',
          },
          '66%': {
            color: '',
          },
          '100%': {
            color: '',
          },
        },
      },
      animation: {
        backgroundanimation1: 'backgroundanimation1 6s infinite',
        backgroundanimation2: 'backgroundanimation2 6s infinite',
        backgroundanimation3: 'backgroundanimation3 6s infinite',
        textGradientAnimation: 'textGradientAnimation 8s infinite 0s',
        textGradientAnimation2: 'textGradientAnimation 8s infinite 2750ms',
        textGradientAnimation3: 'textGradientAnimation 8s infinite 5500ms',
      },
    },
  },
  plugins: [],
};
