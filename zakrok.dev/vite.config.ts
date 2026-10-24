import tailwindcss from '@tailwindcss/vite';
import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';
import adapter from "@sveltejs/adapter-static";
import {mdsvex} from "mdsvex";

export default defineConfig({
    plugins: [
        tailwindcss(),
        sveltekit({
            adapter: adapter({
                pages: 'build',
                assets: 'build',
                precompress: false,
                strict: true,
                fallback: undefined
            }),
            preprocess: [mdsvex()],
            extensions: ['.svelte', '.svx']
        })
    ]
});
