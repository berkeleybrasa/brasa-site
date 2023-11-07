import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = resolve(__dirname, 'brasa-site')
const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  base: "/brasa-site",
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions:{
      input:{
        main: resolve(base, root, 'index.html'),
        membros: resolve(base, root, 'Membros', 'index.html'),
        emconstrucao: resolve(base, root, 'EmConstrucao', 'index.html')
      }
    }
  }
})
