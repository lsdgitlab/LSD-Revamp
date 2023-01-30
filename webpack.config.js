const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");
const htmlPageNames = [
  {
      pageName: 'index.html',
      title: 'Lsdigital gallery'
  }, 
  {
      pageName: 'career-job-listing.html',
      title: 'Career'
  }, 
  // {
  //     pageName: 'detail-page.html',
  //     title: 'Lsdigital gallery'
  // }, 
];
let htmlFileName = htmlPageNames.map(htmlPage=> htmlPage.pageName);
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
      // template: `./src/${name.pageName}`,
      filename: `${name.pageName}`, 
      // chunks: [`${name.pageName}`],
      // chunks: [name.pageName.replace(/-(\w)/g, (match, c) => c.toUpperCase())],
      title: name.title,
      template: path.resolve(__dirname, `src/${name.pageName}`),
  })
});

module.exports = (env, argv) => ({
  mode: argv.mode,
  devtool: argv.mode === 'development' ? 'source-map' : false,
  entry: [
    './src/js/app.js',
    './src/css/sass/index.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[contenthash].js',
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin(),
      new CopyPlugin({
        patterns: [
          // {from: 'src/*.html', to: '[name].[ext]'},
          { from: './src/assets', to: './assets' },
          { from: "./src/img", to: "./img" },
          { from: "./src/video", to: "./video" },
          { from: "./src/favicon.ico", to: "./favicon.ico" },
          { from: 'src/images/*',to: 'images/[name].[ext]'}
         ],
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            only: ["./src"],
            // name: '[name][ext]',
            // outputPath :'./js/'
          }
        },
      }, {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          }, {
            loader: 'css-loader',
            options: {
              url: false,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer'],
                ],
              },
            },
          }, {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // filename: 'assets/app.css',
      filename: argv.mode ? "./css/[name].[contenthash].css" : "./css/scss/[name].[contenthash].css",
    }),
    new HtmlWebpackPartialsPlugin({
      path:path.join(__dirname,'./src/header.html'),
      location:'header',
      template_filename: htmlFileName
    }),
    new HtmlWebpackPartialsPlugin({
        path:path.join(__dirname,'./src/footer.html'),
        location:'footer',
        template_filename: htmlFileName
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery'
    }),
  ].concat(multipleHtmlPlugins),
  devServer: {
    contentBase: [
      path.join(__dirname, '/src'),
    ],
    watchContentBase: true,
    // compress: true,
    port: 9000,
    open: true,
  },
});
