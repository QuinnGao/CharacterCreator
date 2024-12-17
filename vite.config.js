import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/CharacterCreator/" : "/"
  plugins: [react()],
})
