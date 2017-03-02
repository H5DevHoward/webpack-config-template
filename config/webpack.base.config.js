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
                use: [
                    'babel-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            failOnWarning: true,
                            failOnError: true,
                        },
                    },
                ],
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                    'eslint-loader',
                ],
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
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.js',
        },
        extensions: ['.js', '.jsx'],
        modules: [
            'node_modules',
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: postcssConfig.plugins,
                vue: {
                    postcss: postcssConfig.plugins,
                    loaders: {
                        sass: 'style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax',
                        scss: 'style-loader!css-loader!postcss-loader!sass-loader',
                    },
                    cssModules: {
                        localIdentName: '[path][name]---[local]---[hash:base64:5]',
                        camelCase: true,
                    },
                },
                eslint: {
                    configFile: path.join(process.cwd(), '.eslintrc'),
                },
            },
        }),
    ],
};
