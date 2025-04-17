import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html", 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redPrimary: "#FF0000",
        redSecondary: "#FF4F00",
      },
      animation: {
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'shine': 'shine 2s infinite linear',
        'typewriter': 'typewriter 3s steps(30) 1s forwards',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #FF0000, 0 0 10px #FF0000' },
          '50%': { textShadow: '0 0 20px #FF0000, 0 0 30px #FF0000' },
          '100%': { textShadow: '0 0 5px #FF0000, 0 0 10px #FF0000' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [react(),
    tailwindcss(),],
})

