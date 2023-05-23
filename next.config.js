/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  devIndicators: {
    buildActivity: false,
  },
  images: {
    domains: ['localhost:5000', 'api-shop.kondish.su'],
  },
};

module.exports = nextConfig;

// api-shop.kondish.su
