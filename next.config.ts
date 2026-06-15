import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: process.env.GITHUB_ACTIONS ? "/xolvyn" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/xolvyn/" : "",
};

export default nextConfig;
