/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.graphassets.com',
            port: '',
            pathname: '/',
          },
        ],
      },
}

module.exports = nextConfig
