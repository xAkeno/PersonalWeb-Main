import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all your source files
  ],
  theme: {
    extend: {
      screens: {
        'max-1275': { 'max': '1275px' },
        'max-1130': { 'max': '1130px' },
        'max-1115': { 'max': '1115px' },
        'max-865': { 'max': '865px' },
        'max-755': { 'max': '755px' },
        'max-679': { 'max': '679px' },
        'max-615': { 'max': '615px' },
        'max-579': { 'max': '579px' },
      },
    },
  },
  extend: {
  keyframes: {
    appear: {
      '0%': { opacity: '0', transform: 'translateX(-50px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    appear2: {
      '0%': { opacity: '0', transform: 'translateX(50px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },
    appearlogo: {
      '0%': { opacity: '0', transform: 'scale(0.1)' },
      '100%': { opacity: '1', transform: 'scale(1)' },
    },
    appearmes: {
      '0%': { opacity: '0', transform: 'translateY(200px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
  },
  animation: {
    appear: "appear 0.3s linear",
    appear2: "appear2 0.3s linear",
    appearlogo: "appearlogo 0.4s linear",
    appearmes: "appearmes 0.5s linear",
  }
},
  plugins: [
    react(),
    tailwindcss(),
  ],
})
