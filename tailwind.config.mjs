/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				emphasisTitle: "#535c91",
				normalTitle: "#ebeffe",
				normalText: "#9290c3"
			}
		},
	},
	plugins: [],
}
