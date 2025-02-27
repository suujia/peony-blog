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