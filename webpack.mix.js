const mix = require("laravel-mix");
const LiveReloadPlugin = require("webpack-livereload-plugin");

mix.webpackConfig({
  plugins: [
    new LiveReloadPlugin(),
  ],
  resolve: {
    extensions: [".js", ".vue"],
    alias: {
      "@": __dirname + "/resources"
    }
  }
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
let productionSourceMaps = false;

mix
  .js("resources/js/main.js", "public/js")
  .sass("resources/sass/main.scss", "public/css")
  .sourceMaps(productionSourceMaps, "source-map")
    .options({
    processCssUrls: false
  });

if (mix.inProduction()) {
  mix.version();
}
