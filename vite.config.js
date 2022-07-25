import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/index.css',
                'resources/css/query.css',
                'resources/js/app.js',
                'resources/js/index.js',
            ],
            refresh: true,
        }),
    ],
});
