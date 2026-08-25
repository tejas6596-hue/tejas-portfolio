import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/skills', destination: '/#skills', permanent: true },
      { source: '/projects', destination: '/#projects', permanent: true },
      { source: '/achievements', destination: '/#certifications', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
    ];
  },
};

export default nextConfig;
