// import { defineConfig } from 'vite'
// // import { createRequire } from 'module'
// import react from '@vitejs/plugin-react'
// import path from 'path'
// import tailwindcss from '@tailwindcss/vite'
// import { fileURLToPath } from 'url';

// // const require = createRequire(import.meta.url)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   // server: {
//   //   host: "10.10.20.70",
//   //   port: "3000",
//   // },
//   preview: {
//     host: '0.0.0.0',
//     allowedHosts:["koumanisdietapp.com","www.koumanisdietapp.com"],
//   },
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//     extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json'],
//   },
// }); 

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // DEV SERVER (npm run dev)
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
  },

  // PREVIEW SERVER (npm run preview)
  preview: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'koumanisdietapp.com',
      'www.koumanisdietapp.com',
    ],
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: [
      '.mjs',
      '.js',
      '.mts',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
    ],
  },
})