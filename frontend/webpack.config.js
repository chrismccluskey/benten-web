const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');

const {
	paths,
	plugins,
} = require('./webpack/config');


plugins.push(
  // Builds index.html from template
  new HtmlWebpackPlugin({
    template: path.join(paths.source, 'index.html'),
    path: paths.build,
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  })
);

module.exports = {
	entry: path.join(paths.source, 'index.js'),
	mode: "development",
	output: {
		filename: 'bundle.js',
		path: paths.build,
	},
	devServer: {
		contentBase: paths.build,
		compress: true,
		port: 9000,
		watchContentBase: true,
		progress: true
	},
	module: {
		rules: [
			{
				test: /\.m?jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.css$/,
				loader: combineLoaders([
					{
						loader: 'style-loader'
					}, {
						loader: 'css-loader',
						query: {
							modules: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					}
				])
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins,
};