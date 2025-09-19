import { defineConfig } from 'vite'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  build: {
    rollupOptions: {
      input: resolve(__dirname, 'src/scripts/module.ts'),
      output: {
        dir: 'dist',
        format: 'es',
        entryFileNames: 'scripts/module.js'
      }
    },
    target: 'es2022',
    minify: false,
    sourcemap: true
  },
  plugins: [
    {
      name: 'copy-module-json',
      writeBundle() {
        copyFileSync(
          'src/module.json',
          'dist/module.json'
        )
      }
    }
  ]
})