import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Contact lives as a section on the home one-pager now.
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
};

export default nextConfig;
