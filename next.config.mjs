/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repo is at https://github.com/Bloorize/Health-Report-Status
  // then your basePath should be /Health-Report-Status
  basePath: '/Health-Report-Status',
  assetPrefix: '/Health-Report-Status/',
};

export default nextConfig;

