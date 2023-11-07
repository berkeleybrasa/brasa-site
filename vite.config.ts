import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  base: "/brasa-site",
  root,
  plugins: [react()],
  assetsInclude: ["/brasa-site/src/assets/brasa-logo.png"],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions:{
      input:{
        main: resolve(root, 'index.html'),
        membros: resolve(root, 'Membros', 'index.html'),
        emconstrucao: resolve(root, 'EmConstrucao', 'index.html')
      }
    }
  }
})
