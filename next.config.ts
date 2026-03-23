import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src")], // point directly to styles folder
  },
  turbopack: {}, // safe for Next.js 16+
};

export default nextConfig;
