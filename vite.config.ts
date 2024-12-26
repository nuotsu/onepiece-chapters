import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'
import ViteYaml from '@modyfi/vite-plugin-yaml'

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		ViteYaml(),
	]
})