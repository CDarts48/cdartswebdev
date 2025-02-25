/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  trailingSlash: true, // Helps with correct routing on GitHub Pages
  images: {
    unoptimized: true, // Disable Image Optimization API
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