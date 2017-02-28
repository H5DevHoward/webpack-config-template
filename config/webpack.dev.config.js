const config = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');

config.devtool = 'eval-source-map';

config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: true,
        },
    }),
];

config.devServer = {
    contentBase: path.resolve(__dirname, '../dev'),
    // publicPath: '/',
    port: 8080,
    historyApiFallback: true,
    stats: {
        colors: true,
        chunks: false,
        'errors-only': true,
    },
};

module.exports = config;
