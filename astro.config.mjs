// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import svgr from "vite-plugin-svgr";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [svgr()],
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
          loadPaths: ["./ag-website-shared/src"],
        },
      },
    },
  },

  adapter: node({
    mode: "standalone",
  }),
});