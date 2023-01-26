import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	server: { port: 1234 },
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		preact(),
	],

	vite: {
		define: {
			'import.meta.env.APP_VERSION': JSON.stringify(process.env.npm_package_version),
		},
	},
});
