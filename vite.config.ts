import ssg from "@hono/vite-ssg";
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig({
  // エイリアスの設定
  resolve: {
    alias: {
      "public": "/public",
    }
  },
  plugins: [
    ssg(),
    devServer({
      entry: 'src/index.tsx'
    })
  ]
})