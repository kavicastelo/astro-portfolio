import { defineConfig, passthroughImageService } from 'astro/config'

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://kavicastelo-dev.netlify.app',
  integrations: [react(), sitemap(), mdx()],

  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    syntaxHighlight: 'shiki', // or 'prism'
    shikiConfig: {
      theme: 'dracula', // or 'nord', 'github-dark', 'light-plus', etc.
    },
  },
});