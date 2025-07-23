import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 添加服务器配置
  server: {
    host: 'localhost', // 显式指定主机
    port: 5173,        // 显式指定端口
    open: true,        // 自动打开浏览器
    strictPort: true   // 端口被占用时直接退出
  },
  //src文件夹别名
  resolve: {
    alias:{
      '@': path.resolve(__dirname,'./src')
    }
  }
})
