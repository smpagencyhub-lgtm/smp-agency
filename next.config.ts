import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Cap device widths so optimized images aren't larger than needed (saves ~11MB+)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
