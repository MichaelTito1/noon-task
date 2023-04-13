/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.pngkit.com",
      "play-lh.googleusercontent.com",
      "picsum.photos"
    ]
  }
}

module.exports = nextConfig
