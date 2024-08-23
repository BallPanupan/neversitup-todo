/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/service/:path*',
				destination: 'https://candidate-assignment.neversitup.com/:path*',
			},
		]
	},
};

export default nextConfig;