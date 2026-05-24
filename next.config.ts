import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/My-Portfolio",
  assetPrefix: "/My-Portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;