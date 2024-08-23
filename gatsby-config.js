module.exports = {
	pathPrefix: `epic`,
	siteMetadata: {
		title: `EPIC boutique fitness`,
		description: `Somos una boutique de entrenamiento funcional en Valencia donde lo principal eres tú. Ven a conocernos. Clase de prueba GRATIS.`,
		author: `Peim studio`,
		siteUrl: `https://www.epicboutiquefitness.com`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-gdpr-cookies`,
			options: {
				googleTagManager: {
					trackingId: "G-PPPJFFGLRF",
					anonymize: true,
				},
				facebookPixel: {
					pixelId: "534539291871739",
					anonymize: true,
				},
				environments: ["production", "development"],
			},
		},
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: `EPIC-boutique-fitness`, // No spaces allowed
				short_name: `EPIC`,
				start_url: `/`,
				background_color: `#000`,
				display: `minimal-ui`,
				icon: "src/svg/favicon.svg",
			},
		},

		// SCSS support
		"gatsby-plugin-sass",

		// Image processing
		"gatsby-plugin-image",
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`],
					placeholder: `blurred`,
					quality: 75,
				},
			},
		},
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},

		// Video import
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "videos",
				path: "./src/videos/",
			},
			__key: "videos",
		},

		// SVG processing
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `svg`,
				path: `./src/svg`,
			},
			__key: "svg",
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					// Incluir todos los *.svg excepto *.css.svg
					include: /\.svg$(?<!\.css\.svg$)/,
				},
			},
		},

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// {
		// 	resolve: `gatsby-plugin-offline`,
		// 	options: {
		// 	  workboxConfig: {
		// 		runtimeCaching: [
		// 		  {
		// 			urlPattern: /.*\.mp4/,
		// 			handler: `NetworkOnly`,
		// 		  },
		// 		],
		// 	  },
		// 	},
		// },

		// Multilingual support
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/locales`,
				name: `locale`,
			},
		},
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
				languages: [`en`, `es`],
				defaultLanguage: `en`,
				// if you are using Helmet, you must include siteUrl, and make sure you add http:https
				siteUrl: `https://www.epicboutiquefitness.com`,
				// you can pass any i18next options
				i18nextOptions: {
					interpolation: {
						escapeValue: false, // not needed for react as it escapes by default
					},
					keySeparator: false,
					nsSeparator: false,
				},
			},
		},
	],
};
