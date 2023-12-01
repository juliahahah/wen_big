import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  // base: '/Woodball_Test/',
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    vue()
  ],
  server: {
    host: '0.0.0.0'
  },
   // ...
   optimizeDeps: {
    exclude: ['swiper'],
  },
  

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 添加别名配置，将 @ 设置为 ./src 路径
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue'
    ]
  },
  
});
