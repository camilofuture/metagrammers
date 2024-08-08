const withNextIntl = require("next-intl/plugin")("./i18n.js");

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({});

module.exports = nextConfig;

/* 

	webpack: (config, { isServer }) => {
		// Añadir regla para manejar archivos de sonido
		config.module.rules.push({
			test: /\.(mp3|wav)$/,
			use: {
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					outputPath: "static/sounds/",
					publicPath: "/_next/static/sounds/",
					esModule: false,
				},
			},
		});

		return config;
	},
*/
