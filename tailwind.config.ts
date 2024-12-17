import type { Config } from 'tailwindcss'

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        base: '14px', // Default font size for the page
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
} satisfies Config

