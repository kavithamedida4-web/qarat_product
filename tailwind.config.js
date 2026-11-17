/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF8F5',
          200: '#F4EFE6',
          300: '#EAE1D2',
          400: '#D5C7B0',
        },
        qarat: {
          gold: '#B68D40',
          'gold-dark': '#9A7432',
          'gold-light': '#D4AF37',
          charcoal: '#1A1D20',
          dark: '#121416',
          muted: '#6B7280',
          border: '#E8E2D8',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      }
    },
  },
  plugins: [],
};

