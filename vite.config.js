import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport  from 'unplugin-auto-import/vite' 
import  Components  from 'unplugin-vue-components/vite' 
import{ElementPlusResolver} from 'unplugin-vue-components/resolvers' 
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server:{
    proxy:{
      '/config_cross_area_api':{
        target:'http://localhost:8080/',
        changeOrigin:true,
        rewrite:(path)=>path.replace(/^\/config_cross_area_api/,''),
        secure: false,
      }
    },
    fs: {
      allow: ['..']  // Allows serving from one level up (the parent directory containing node_modules)
    }
  }
})
