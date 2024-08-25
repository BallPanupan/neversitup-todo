/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone",
	async rewrites() {
		return [
			{
				source: '/service/:path*',
				destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
			},
		]
	},
};

export default nextConfig;