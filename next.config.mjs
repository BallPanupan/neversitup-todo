/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://candidate-assignment.neversitup.com/:path*',
      },
    ]
  },
};

export default nextConfig;
