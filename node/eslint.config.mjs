import path from "node:path";
import { fileURLToPath } from "node:url";

import { fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import { defineConfig, globalIgnores } from "eslint/config";
import _import from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores([
    "**/*.config.ts",
    "**/*.config.js",
    "**/node_modules",
    "**/coverage",
    "**/.next/",
    "**/out/",
    "**/dist",
    "**/build",
    "packages/tinysearch-engine",
    "**/storybook-static",
    "**/.storybook",
    "**/.astro",
    "packages/works",
    "**/.turbo",
    "**/.direnv",
  ]),
  {
    extends: compat.extends(
      "prettier",
      "plugin:@typescript-eslint/recommended",
    ),

    plugins: {
      import: fixupPluginRules(_import),
      "unused-imports": unusedImports,
      "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],

      "react-hooks/rules-of-hooks": "off",
      "unused-imports/no-unused-imports": "warn",
      "@typescript-eslint/no-explicit-any": "warn",

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],

          pathGroups: [
            {
              pattern: "@/**",
              group: "parent",
              position: "before",
            },
          ],

          alphabetize: {
            order: "asc",
          },

          "newlines-between": "always",
        },
      ],
    },
  },
]);
