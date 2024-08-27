/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#141415',
        heading: '#A6A6A6',
        muted: '#A4A4A4'
      }
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ['black']
  }
}