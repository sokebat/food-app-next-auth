/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
