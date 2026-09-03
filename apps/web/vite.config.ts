import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const environment = loadEnv(mode, '../../', '')

  return {
    plugins: [react()],
    server: {
      port: Number(environment.WEB_PORT || 5173),
      proxy: {
        '/api': {
          target: `http://localhost:${environment.API_PORT || 3000}`,
          changeOrigin: true,
        },
      },
    },
  }
})
