var webpack = require("webpack");
var webpackKarmaConfig = require('./webpack.karma');
var isparta = require('isparta');

// Karma configuration

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: [
          'mocha',
          'chai'
        ],

        // list of files / patterns to load in the browser
        files: [
            // all files ending in "test"
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            'test/index.js'
            // each file acts as entry point for the webpack configuration
        ],

        // list of files to exclude
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '/src/**/*.js': ['eslint'],
            'test/*.js': ['webpack']
        },

        //ESLint
        eslint: {
            stopOnError: true,
            stopOnWarning: true,
            showWarnings: true
        },
        // webpack
        webpack: webpackKarmaConfig,
        webpackMiddleware: {
          // webpack-dev-middleware configuration
          noInfo: true
        },

        // coverage
        coverageReporter: {
            //default
            type: 'html',
            dir: 'dist/coverage/',

            // configure the reporter to use isparta for JavaScript coverage
            // Only on { "karma-coverage": "douglasduteil/karma-coverage#next" }
            instrumenters: { isparta : isparta},
            instrumenter: {
                '**/*.js': 'isparta'
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        // List plugins explicitly, since autoloading karma-webpack
        // won't work here
        plugins: [
            require("karma-webpack"),
            require("karma-eslint"),
            require("karma-mocha"),
            require("karma-chai"),
            require("karma-coverage"),
            require("karma-phantomjs-launcher"),
            require("karma-spec-reporter")
        ]
    });
};
