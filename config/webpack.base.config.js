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
                test: /\.s[a|c]ss$/,
                loader: 'style!css?sourceMap!postcss!sass',
            },
        ],
    },
    postcss: postcssConfig,
};
