import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import commonjs from 'vite-plugin-commonjs'

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '/AlexonWebsite/',
    plugins: [react(), viteTsconfigPaths(), commonjs()],
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3000  
        port: 3000, 
    },
    build: {
        commonjsOptions: { transformMixedEsModules: true }
      }
})