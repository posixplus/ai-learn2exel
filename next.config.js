/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable strict mode for better React practices
  reactStrictMode: true,
  // Allow images from any source (for AI tool logos etc.)
  images: {
    remotePatterns: [],
  },
}

module.exports = nextConfig
