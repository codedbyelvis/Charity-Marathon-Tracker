// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind()
  ],
  vite: {
    server: {
      allowedHosts: ['.gitpod.io'] // Allow all Gitpod subdomains
    },
    define: {
      'process.env': JSON.stringify(process.env)
    }
  }
});