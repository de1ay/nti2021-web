const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@core': path.resolve(__dirname, 'src/core'),
        '@modules': path.resolve(__dirname, 'src/modules'),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/functions.scss";
          @import "@/assets/scss/mixins.scss";
          @import "@/assets/scss/variables.scss";
        `,
      },
    },
  },
};
