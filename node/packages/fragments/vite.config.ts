import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [vinext(), vanillaExtractPlugin({ unstable_mode: "transform" })],
});
