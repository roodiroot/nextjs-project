/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["api-shop.kondish.su"],
  },
};

module.exports = nextConfig;
