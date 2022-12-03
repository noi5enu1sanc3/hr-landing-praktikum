const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const autoprefixer = require('autoprefixer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: { main: './src/app.js' },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'assets/js/scripts.[contenthash:8].js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 3000,
    open: true,
    hot: false,
    liveReload: true
  },
  module: {
    rules: [
      // Шрифты
      {
        test: /\.(woff|woff2|svg|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name].[hash:8][ext]',
        }
      },
      // Медиа файлы
      {
        test: /\.(png|svg|jpe?g|webp|webm|mp4|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/uploads/[name].[hash:8][ext]',
        },
      },
      // JS
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      // CSS
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../../",
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                  ],
                ],
              },
            },
          },
        ],
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    autoprefixer,
    new HtmlWebpackPlugin({
      template: './src/pages/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/styles.[contenthash:8].css',
    }),
    new CleanWebpackPlugin(),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devtool: 'source-map'
}