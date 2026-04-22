/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/resume',
  assetPrefix: '/resume/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
