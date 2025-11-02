/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Enables standalone output for Docker
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shot.screenshotapi.net',
        pathname: '/v3/screenshot',
      },
    ],
  },
};

export default nextConfig;