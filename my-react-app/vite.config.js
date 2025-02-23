import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const envDir = path.resolve(__dirname, 'env');
  const env = loadEnv(mode, envDir);
  return {
    plugins: [react()],
    envDir,
    define: {
      'process.env': env
    }
  }
})
