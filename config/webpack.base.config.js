const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const postcssConfig = require('./postcss.config');

const jsFiles = glob.sync('./dev/script/*.js');
const entry = {};

jsFiles.forEach((file, i) => {
    entry[path.basename(file, '.js')] = file;
});

module.exports = {
    entry,
    output: {
        path: './dist',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.s[a|c]ss$/,
                loader: 'style!css?sourceMap!postcss!sass',
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: 'file-loader?limit=1024&name=font/[name].[ext]',
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                loader: 'url-loader?mimetype=image/png',
            },
        ],
    },
    postcss: postcssConfig,
};
