/*
 * @Author: Antony vic19910108@gmail.com
 * @Date: 2022-12-10 10:51:05
 * @LastEditors: Antony vic19910108@gmail.com
 * @LastEditTime: 2022-12-10 20:46:38
 * @FilePath: /fire-ui/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
})
