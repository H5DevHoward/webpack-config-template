const config = require('./webpack.dev.config');
const webpack = require('webpack');
const postcssConfig = require('./postcss.config');

config.module = {
    rules: [
        {
            test: /\.vue$/,
            use: 'vue-loader',
        },
    ],
};

config.resolve = {
    alias: {
        vue$: 'vue/dist/vue.js',
    },
    extensions: ['.js', '.jsx'],
    modules: [
        'node_modules',
    ],
};

config.plugins = [
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
        },
    }),
];

module.exports = config;
