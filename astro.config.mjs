import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

/* Debug logs added for deployment validation */
console.log('ASTRO CONFIG INIT: NODE_ENV:', process.env.NODE_ENV);

export default defineConfig({
  adapter: vercel(),
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    shikiConfig: { theme: "css-variables" }
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true
  },
  site: 'https://heypeony.com',
  integrations: [sitemap(), mdx()]
});

// If using a base path configuration, log it as well
if(process.env.NODE_ENV === 'production') {
  const basePath = (typeof Astro !== 'undefined' && Astro?.site) || 'undefined';
  console.log('Production Build: Astro Site/Base Path:', basePath);
}
