const webpack = require('webpack');
const resolve = require('path').resolve;
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

/*
 * Define source & build directories
 */
const sourceDirectory = resolve(__dirname, 'app');
const buildDirectory = resolve(__dirname, 'dist');

module.exports = (env) => {
  const isProduction = env.production;
  const publicPath = '/';
  const imagesLocation = 'images/';

  const extractSass = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: !isProduction,
  });

  return {
    context: sourceDirectory,
    entry: './index.js',
    output: {
      filename: isProduction ? '[name].[chunkhash].js' : '[name].js',
      path: buildDirectory,
      publicPath,
      pathinfo: !isProduction,
    },
    devtool: isProduction ? '' : 'source-map',
    bail: isProduction,
    resolve: {
      extensions: ['.js'],
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['raw-loader'],
        },
        {
          test: /\.scss$/,
          loaders: extractSass.extract({
            use: [
              // Order matters!!!
              {
                loader: 'css-loader',
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [autoprefixer],
                },
              },
              {
                loader: 'sass-loader',
              },
            ],
            // use style-loader in development
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [
      new CopyWebpackPlugin([{
        from: imagesLocation,
        to: imagesLocation,
      }]),

      new ImageminPlugin({
        disable: !isProduction,
        test: `${imagesLocation}/**`,
        optipng: {
          optimizationLevel: 5,
        },
        jpegtran: {
          progressive: true,
        },
      }),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html',
      }),

      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Tether: 'tether',
      }),

      extractSass,
    ],
  };
};
