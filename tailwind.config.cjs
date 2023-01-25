/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'rainbow-00': '#817',
				'rainbow-01': '#a35',
				'rainbow-02': '#c66',
				'rainbow-03': '#e94',
				'rainbow-04': '#ed0',
				'rainbow-05': '#9d5',
				'rainbow-06': '#4d8',
				'rainbow-07': '#2cb',
				'rainbow-08': '#0bc',
				'rainbow-09': '#09c',
				'rainbow-10': '#36b',
				'rainbow-11': '#639',
			},
		},
	},
	plugins: [],
};
