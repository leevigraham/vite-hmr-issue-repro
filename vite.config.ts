import { defineConfig } from 'vite'
const { resolve } = require('path')

export default defineConfig(({ command }) => ({
    // Project root directory (where index.html is located).
    // Can be an absolute path, or a path relative to the location of the config file itself.
    root: resolve(__dirname, "theme"),
    base: "",
    build: {
        // Specify the output directory (relative to project root).
        // outDir: "../public/build-vite",
        outDir: resolve(__dirname, "public/build-vite"),
        // Remove everything from the outputDir when building
        emptyOutDir: true,
        // Base public path when served in development or production.
        // When set to true, the build will also generate a manifest.json file
        // that contains a mapping of non-hashed asset filenames to their
        // hashed versions, which can then be used by a server framework
        // to render the correct asset links.
        manifest: true,
        rollupOptions: {
            // https://rollupjs.org/guide/en/#input
            input: resolve(__dirname, "theme/index.ts"),
        },
    },
    server: {
        // origin: 'http://localhost:3000/',
    },
}));
