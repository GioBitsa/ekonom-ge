import path from "path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src")], // point directly to styles folder
  },
  turbopack: {}, // safe for Next.js 16+
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
