import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.ChromoDesign.github.io",
  base: "/chromo-landing-page",
  server: {
    host: "0.0.0.0",
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
