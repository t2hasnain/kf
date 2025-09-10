import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ✅ Ignores ESLint errors during `next build`
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ✅ Ignores TypeScript errors during `next build`
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
