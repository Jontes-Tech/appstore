// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://apps.nt3.me", // Change this to your production URL.
	description:
		"Appstore with apps by Jonte.", // Change this to be your website's description.
	type: "website",
	siteName: "Appstore by Jonte", // Change this to your website's name,
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Appstore by Jonte", // Change this to your website's name.
	short_name: "Apps", // Change this to your website's short name.
	description:
		"Download apps by Jonte", // Change this to your websites description.
	theme_color: "#30E130", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
