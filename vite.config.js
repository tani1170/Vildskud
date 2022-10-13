// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(
          __dirname,
          "src/index.html"
        ),
        program: resolve(
          __dirname,
          "src/program.html"
        ),
        forestillinger: resolve(
          __dirname,
          "src/forestillinger.html"
        ),
        frivilig: resolve(
          __dirname,
          "src/frivilig.html"
        ),
        kontakt: resolve(
          __dirname,
          "src/kontakt.html"
        ),
        om: resolve(
          __dirname,
          "src/om.html"
        ),
        opencall: resolve(
          __dirname,
          "src/opencall.html"
        ),
        prorgam: resolve(
          __dirname,
          "src/program.html"
        ),
        single: resolve(
          __dirname,
          "src/singleview.html"
        ),
        step: resolve(
          __dirname,
          "src/stepbystep.html"
        ),
        teamet: resolve(
          __dirname,
          "src/teamet.html"
        ),
        koeb: resolve(
          __dirname,
          "src/billetkoeb.html"
        ),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
