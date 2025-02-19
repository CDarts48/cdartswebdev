/** @type {import('next').NextConfig} */
const nextConfig = {
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