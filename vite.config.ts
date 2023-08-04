import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import mdx from '@mdx-js/rollup';
import svgr from 'vite-plugin-svgr'

var vite_config = defineConfig({
    plugins: [react(), mdx(
        {
            providerImportSource: "@mdx-js/react",
            remarkPlugins: [],
            rehypePlugins: [],
        }
    ), svgr()],
    optimizeDeps: {
        include: ["react/jsx-runtime"],
    },
    css: {
        preprocessorOptions: {
            scss: {}
        }
    }
});

export default vite_config;
