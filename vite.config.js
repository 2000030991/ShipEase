import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ShipEase/',   // VERY IMPORTANT — Must match your repo name
})
