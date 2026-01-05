/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Health-Report-Status',
  assetPrefix: '/Health-Report-Status/',
};

module.exports = nextConfig;

