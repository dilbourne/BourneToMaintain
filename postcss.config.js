module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production'
        ? {
            '@fullhuman/postcss-purgecss': {
              content: [
                './node_modules/lightbox-react/style.css',
                './components/**/*.js',
                './pages/**/*.js'
              ],
              defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
            }
          }
        : {})
    }
};