const sveltePreprocess = require('svelte-preprocess');
 
module.exports = {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [require('autoprefixer')({ browsers: 'last 2 versions' })],
    },
  }
  )
};