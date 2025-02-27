import fs from 'fs';
import path from 'path';

const configPath = '/vercel/path0/.vercel/output/config.json';
console.log('[DEBUG] Checking config file at:', configPath);
console.log('[DEBUG] File exists:', fs.existsSync(configPath));
console.log('[DEBUG] Current working directory:', process.cwd());
try {
  console.log('[DEBUG] Contents of /vercel/path0/.vercel/output/:', fs.readdirSync('/vercel/path0/.vercel/output/'));
} catch (error) {
  console.error('[DEBUG] Failed to read directory /vercel/path0/.vercel/output/:', error);
}

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
const config = defineConfig({
  base: "/blog",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables"
    }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://heypeony.com',
  integrations: [sitemap(), mdx()]
});

console.log("Astro configuration loaded, base set to:", config.base);
export default config;