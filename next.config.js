/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // This is important for Glitch deployment
  poweredByHeader: false,
  // For better image loading on Glitch
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  output: 'standalone',
  // Allows content to be served on Glitch
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : ''
}

module.exports = nextConfig 