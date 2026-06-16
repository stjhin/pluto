// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://stjhin.github.io',
  base: '/pluto/',  // <-- Is this line here or not?
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});