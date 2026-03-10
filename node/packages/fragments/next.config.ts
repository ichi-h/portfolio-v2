import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

import type { NextConfig } from "next";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withVanillaExtract(nextConfig);
