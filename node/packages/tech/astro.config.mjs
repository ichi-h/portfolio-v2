import react from "@astrojs/react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "astro/config";
import dotenv from "dotenv";

import { genResumePdf } from "./src/plugins/gen-resume-pdf";

dotenv.config();

const ACTUAL_NAME = process.env.ACTUAL_NAME;
const ENABLE_GENERATING_RESUME =
  process.env.ENABLE_GENERATING_RESUME === "true";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [
      vanillaExtractPlugin(),
      ENABLE_GENERATING_RESUME &&
        genResumePdf({ outputDir: "out", name: ACTUAL_NAME }),
    ],
  },
  server: {
    host: "0.0.0.0",
  },
});
