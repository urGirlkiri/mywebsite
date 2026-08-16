import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: undefined 
        }),
        paths: {
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || '/mywebsite'
        }
    }
};

export default config;
