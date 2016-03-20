/**
 * Created by mr470 on 20.03.2016.
 */

"use strict";

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var cssLoaders = [
    "style",
    "css?sourceMap&modules&localIdentName=[name]---[local]---[hash:base64:5]",
    "postcss",
    "sass?sourceMap"
];

module.exports = {
    resolve: {
        extensions: ['', '.js', '.scss'],
        modulesDirectories: ["node_modules", "src"]
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.scss/,
                loader: cssLoaders.join("!")
            }
        ],
        preLoaders: [
            // transpile all files except testing sources with babel as usual
            {
                test: /\.js$/,
                exclude: [
                    path.resolve('src/components/'),
                    path.resolve('node_modules/')
                ],
                loader: 'babel'
            },
            // transpile and instrument only testing sources with isparta
            {
                test: /\.js$/,
                include: path.resolve('src/'),
                loader: 'isparta'
            }
        ]
    },

    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
