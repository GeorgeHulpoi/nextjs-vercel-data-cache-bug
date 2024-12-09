/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'no-store',
					},
					{
						key: 'CDN-Cache-Control',
						value: 'no-store',
					},
					{
						key: 'Vercel-CDN-Cache-Control',
						value: 'no-store',
					}
				],
			},
		];
	},
};

export default nextConfig;
