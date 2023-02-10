import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import image from '@astrojs/image';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: netlify(),
	server: { port: 1234 },
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		preact({ compat: true }),
		image(),
	],

	vite: {
		define: {
			'import.meta.env.APP_VERSION': JSON.stringify(process.env.npm_package_version),
			'import.meta.env.APP_ENV': JSON.stringify(process.env.APP_ENV ?? 'development'),
		},
		build: {
			rollupOptions: {
				output: {
					assetFileNames: 'assets/asset.[hash][extname]',
				},
			},
		},
		ssr: {
			noExternal: ['@radix-ui/react-icons', '@fortawesome/react-fontawesome', 'luxon'],
		},
	},
});
