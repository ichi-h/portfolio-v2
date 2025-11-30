import { resolve } from "path";
import { defineConfig } from "vite";
import Dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    Dts({
      entryRoot: resolve(__dirname, "src"),
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        "features/notion/index": resolve(__dirname, "src/features/notion/index.ts"),
        "utils/index": resolve(__dirname, "src/utils/index.ts"),
      },
      formats: ["es"],
      fileName: (_, entryName) => {
        return `${entryName}.js`;
      },
    },
    rollupOptions: {
      external: ["@notionhq/client", "notion-to-md"],
    },
  },
});
