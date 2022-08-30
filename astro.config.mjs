import path from "path";
import { fileURLToPath } from "url";

import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import { SITE } from "./src/config.mjs";

// https://astro.build/config
export default defineConfig({
    site: SITE.domain,
  base: "/",

  output: "static",

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    image(),
  ]
});