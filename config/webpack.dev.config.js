const config = require('./webpack.base.config');
const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    devtool: 'eval-source-map',
    devServer: {
        proxy: {
            '/api': 'http://localhost:8081',
        },
        contentBase: path.join(process.cwd(), 'dev'),
        historyApiFallback: true,
        stats: {
            colors: true,
            chunks: false,
            'errors-only': true,
        },
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
            },
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(process.cwd(), 'dev', 'index.html'),
        }),
    ],
});
