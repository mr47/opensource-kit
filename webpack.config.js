'use strict';

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var cssLoaders = [
    "style",
    "css?sourceMap&modules&localIdentName=[name]---[local]---[hash:base64:5]",
    "postcss",
    "sass?sourceMap"
];

module.exports = {

    output: {
        path: path.resolve(__dirname, "tmp"),
        filename: 'index.js',
        publicPath: '/'
    },

    cache: true,
    debug: false,
    devtool: false,
    entry: [
        './demo/app.js'
    ],

    stats: {
        colors: true,
        reasons: true
    },

    resolve: {
        extensions: ['', '.js', '.scss'],
        modulesDirectories: ["node_modules", "../src"]
    },
    module: {
        loaders: [
             {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            },
            {
                test: /\.scss/,
                loader: cssLoaders.join("!")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "_": "lodash",
            Promise: "bluebird"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('demo', 'index.tpl.html'),
            inject: 'body',
            filename: 'index.html'
        }),
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development
            host: 'localhost',
            port: 3000,
            // proxy the Webpack Dev Server endpoint
            // (which should be serving on http://localhost:3100/)
            // through BrowserSync
            proxy: 'http://localhost:8080/'
        },
        // plugin options
        {
            // prevent BrowserSync from reloading the page
            // and let Webpack Dev Server take care of this
            reload: false
        }),
        new webpack.NoErrorsPlugin()
    ]

};
