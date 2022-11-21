/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: process.env.NEXT_PUBLIC_BACKEND_ENDPOINT
    }]
  }
}

module.exports = nextConfig
