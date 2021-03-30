/* globals process */

var path = require('path');
var TerserPlugin = require('terser-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var environment = process.env.ENV || 'development';
var isDevelopmentEnv = (environment === 'development');

var dir = process.cwd();

module.exports = {
	entry: path.join(dir, '/src/index.ts'),
	output: {
		filename: 'bundle.js',
		path: path.join(dir, '/dist'),
		library: 'CustomDialogs',
		libraryTarget: 'umd'
	},
	optimization: {
		minimizer: isDevelopmentEnv ? [] : [
			new TerserPlugin({
				terserOptions: {
					ecma: 2015,
					safari10: true,
					output: {
						comments: false,
					},
				}
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'bundle.css',
		})
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
};
