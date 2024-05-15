import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// '/<Real-Estate.git>/'
export default defineConfig({
  base: './',
  plugins: [react()],
})
