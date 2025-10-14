import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      sen: ['Sen', 'sans-serif'],
    },
    colors: {
      primary: '#4F46E5',
      'primary-light': '#6366F1',
      'primary-dark': '#4338CA',

      secondary: '#14B8A6',
      'secondary-light': '#2DD4BF',
      'secondary-dark': '#0D9488',

      accent: '#F472B6',
      'accent-light': '#F9A8D4',
      'accent-dark': '#EC4899',

      neutral: '#6B7280',
      'neutral-light': '#9CA3AF',
      'neutral-dark': '#374151',

      background: '#F9FAFB',
      white: '#FFFFFF',
      black: '#000000',
    },
    extend   : {
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-out",
      },
    }
  },
})