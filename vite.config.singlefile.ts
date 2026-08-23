import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Special build used only to publish this page as a single self-contained
// HTML file (e.g. via the Artifact tool). It inlines JS, CSS, and — by
// raising assetsInlineLimit — the bundled variable-font files as base64
// data URIs, so the result has zero external requests.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: {
    outDir: 'dist-singlefile',
    assetsInlineLimit: 100_000_000,
    cssCodeSplit: false,
    chunkSizeWarningLimit: 10_000,
  },
})
