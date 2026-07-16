import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // WordPress Media Library — replace host with your real WP domain
        // once it's live (e.g. cms.carrierwebmaroc.com).
        protocol: "https",
        hostname: "**.carrierwebmaroc.com",
      },
      {
        // Convenient for local WP development (LocalWP/Docker on localhost).
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
