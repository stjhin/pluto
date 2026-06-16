// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://stjhin.github.io',  // ← FIXED: GitHub Pages URL
  base: '/pluto/',                    // ← Your repo name
  vite: {
    plugins: [tailwindcss()]
  }
});