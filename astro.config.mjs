import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	server: {
		port: 1234,
		host: '0.0.0.0',
	},
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
			noExternal: ['@fortawesome/react-fontawesome', 'luxon'],
		},
	},
});
