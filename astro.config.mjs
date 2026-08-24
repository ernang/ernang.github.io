// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  //   output: "server",
  output: "static",
  i18n: {
    defaultLocale: "ca",
    locales: ["ca", "es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@pub": path.resolve("./public"),
        "@": path.resolve("./src"),
      },
    },
  },
   site: "https://ernang.github.io",
});
