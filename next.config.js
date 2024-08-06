const withNextIntl = require("next-intl/plugin")("./i18n.js");

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
	//swcMinify: true,
	//reactStrictMode: false,
	env: {
		NEXT_PUBLIC_CF_IMAGE_DELIVERY_URL: "https://imagedelivery.net/mJoqRT4o5giYTzFZcDhgng",
	},
});

module.exports = nextConfig;
