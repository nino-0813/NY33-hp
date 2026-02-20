/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.ikevege.com", pathname: "/**" },
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
    ],
  },
}

export default nextConfig
