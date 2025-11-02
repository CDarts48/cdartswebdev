/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
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