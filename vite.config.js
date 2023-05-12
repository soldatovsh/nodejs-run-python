import { createVuePlugin } from 'vite-plugin-vue2';
import mix from 'vite-plugin-mix';

export default {
  plugins: [
    createVuePlugin(/* options */),
    mix.default({
      handler: './server/index.js',
    }),
  ],
};
