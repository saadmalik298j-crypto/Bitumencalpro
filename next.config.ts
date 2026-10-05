import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
    inlineCss: true,
    useLightningcss: true,
  },
};

export default nextConfig;
