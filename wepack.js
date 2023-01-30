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
      pageName: 'architecture.html',
      title: 'Lsdigital gallery'
  }, 
  {
      pageName: 'detail-page.html',
      title: 'Lsdigital gallery'
  }, 
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
    './src/css/app.scss',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './js/[name].[contenthash].js',
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
      
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        }
        ],
      },
      // {
      //   test: /\.(svg|png|jpg|webp|ico|jpeg)$/,
      //   // type: 'asset/resource',
      //   use: [
      //     {
      //         loader: "file-loader",
      //         /**
      //          * use `name` to specify how and where images should be outputted
      //          *
      //          * 1. use the image's filepath to set the URL path from which it's served
      //          * 2. use the image's filename and contenthash to set its URL filename
      //          */
      //         options: {
      //             name: "[path][name].[contenthash].[ext]",
      //             // you may need to set `outputPath` too if you want
      //             // to specify how/where images should be outputted
      //         },
      //     },
      //     {
      //         loader: 'image-webpack-loader'
      //     },
      // ],
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // filename: 'assets/app.css',
      filename: argv.mode ? "css/[name].[contenthash].css" : "./css/scss/[name].[contenthash].css",
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
