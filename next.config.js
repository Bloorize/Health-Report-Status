/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/Health-Report-Status' : '',
  assetPrefix: isProd ? '/Health-Report-Status/' : '',
};

module.exports = nextConfig;


