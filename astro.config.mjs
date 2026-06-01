// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.jr-vntravel.com',
	/** 與 canonical、站內連結一致，避免 sitemap 帶尾斜線而 canonical 不帶 */
	trailingSlash: 'never',
	build: {
		format: 'file',
	},
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
