const path = require('path');
const webpack = require('webpack');
const postcssConfig = require('./postcss.config');
const NyanProgressPlugin = require('nyan-progress-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.noDeprecation = true;

const PATHS = {
    DEV: path.join(process.cwd(), 'dev'),
};

module.exports = {
    context: PATHS.DEV, // webpack 的主目录，entry 和 module.rules.loader 选项相对于此目录解析
    entry: {
        vendor: [
            'vue',
            'vuex',
            'element-ui',
            'vue-router',
            'whatwg-fetch',
        ],
        index: './index.js',
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: `[name]${process.env.NODE_ENV === 'development' ? '' : '[chunkhash:8]'}.js`,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['env'],
                        },
                    },
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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    'style-loader',
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
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
                use: [
                    {
                        loader: 'url-loader?mimetype=image/png',
                        query: {
                            limit: 10240, // 10KB 以下使用 base64
                            name: 'img/[name]-[hash:6].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.js',
            '@': PATHS.DEV,
            ASSET: './assets',
            COMPONENT: './components',
            ROUTE: './routes',
            STORE: './store',
            SERVICE: './services',
            UTIL: './utils',
            VIEW: './views',
        },
        extensions: ['.js', '.vue'],
        modules: [
            'node_modules',
        ],
    },
    plugins: [
        new NyanProgressPlugin(), // 进度条
        // 当多个 bundle 共享一些相同的依赖，CommonsChunkPlugin 有助于提取这些依赖到共享的 bundle 中，来避免重复打包
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => module.context && module.context.indexOf('node_modules') !== -1, // this assumes your vendor imports exist in the node_modules directory
        }),
        // CommonChunksPlugin will now extract all the common modules from vendor and main bundles
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest', // But since there are no more common modules between them we end up with just the runtime code included in the manifest file
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: postcssConfig.plugins,
                vue: {
                    postcss: postcssConfig.plugins,
                    loaders: {
                        scss: 'style-loader!css-loader!postcss-loader!sass-loader',
                        sass: 'style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax',
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(process.cwd(), 'dev', 'index.html'),
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
    ],
};
