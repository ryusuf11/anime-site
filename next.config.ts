import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: ["img.youtube.com", "cdn.myanimelist.net"],
		minimumCacheTTL: 2678400,
	},
	/* config options here */
};

export default nextConfig;
