import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.genius.com' }],
  },
}

export default nextConfig
