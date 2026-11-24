import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sendforless.com",
  trailingSlash: "always",
  output: "static",
  integrations: [mdx(), sitemap()],
  build: {
    format: "directory",
  },
  compressHTML: true,
});
