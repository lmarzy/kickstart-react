const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const productionBuild = process.env.NODE_ENV === 'production';

const cleanWebpackPlugin = new CleanWebpackPlugin();
const htmlWebPackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, '../../src/index.html'),
  filename: './index.html',
  // favicon: './src/assets/favicon.ico',
  minify: {
    collapseWhitespace: true,
  },
});
const copyPlugin = new CopyPlugin([{ from: './src/assets', to: './', ignore: ['styles/**'] }]);
const miniCssExtractPlugin = new MiniCssExtractPlugin({});

module.exports = {
  entry: path.join(__dirname, '../../src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              experimentalWatchApi: true,
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(s*)css$/,
        use: [productionBuild ? { loader: MiniCssExtractPlugin.loader } : 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  plugins: [cleanWebpackPlugin, htmlWebPackPlugin, copyPlugin, miniCssExtractPlugin],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()],
  },
};
