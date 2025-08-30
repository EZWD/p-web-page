import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: 'https://ezwd.github.io/p-web-page/',
  // base: '/p-web-page/',
  site: 'https://peiyuzhang.com',
  integrations: [mdx(), sitemap(), tailwind()]
});