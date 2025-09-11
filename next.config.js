/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  webpack(config) {
    return config;
  },
};

module.exports = nextConfig;
