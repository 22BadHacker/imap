/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Disable temporarily for dev speed
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // Speed up builds
  },
  typescript: {
    ignoreBuildErrors: true, // Optional, for dev only
  },
  experimental: {
    turbo: true, // Speeds up builds in Next.js 13+
  },
};

export default nextConfig;
