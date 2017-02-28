const path = require('path');
const webpack = require('webpack');
const postcssConfig = require('./postcss.config');

module.exports = {
    context: path.resolve(__dirname, '../dev'),
    entry: './script/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // options: {
                        //     modules: true,
                        //     importLoaders: 1,
                        // }
                    },
                ],
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // options: {
                        //     modules: true,
                        //     importLoaders: 1,
                        // }
                    },
                    {
                        loader: 'postcss-loader',
                        options: postcssConfig,
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                use: 'file-loader?limit=1024&name=font/[name].[ext]',
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: 'url-loader?mimetype=image/png',
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
};
