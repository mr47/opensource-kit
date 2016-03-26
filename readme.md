[![David](https://img.shields.io/david/mr47/opensource-kit.svg)]()
[![David](https://img.shields.io/david/dev/mr47/opensource-kit.svg)]()
[![Travis](https://img.shields.io/travis/mr47/opensource-kit.svg)]()
[![Code Climate](https://codeclimate.com/github/mr47/opensource-kit/badges/gpa.svg)](https://codeclimate.com/github/mr47/opensource-kit)
[![Test Coverage](https://codeclimate.com/github/mr47/opensource-kit/badges/coverage.svg)](https://codeclimate.com/github/mr47/opensource-kit/coverage)
[![Twitter Follow](https://img.shields.io/twitter/follow/seekmode.svg?style=social)](https://twitter.com/seekmode)

<p align="center">
    <img alt="Open source kit" src="https://raw.githubusercontent.com/mr47/opensource-kit/master/tmp/oskit.png" width="546">
</p>

> Open source kit for people who writes a nice code.

Create simple, flexible libraries without worry about production ready covered code. Simple and easy to use. 

Do you wanna build you library with few lines of `npm ...` ?.

No need to find `amazing-new-boilerplate-with-black-jack` just use `Open source kit`. 

You create a lib and just run `npm run build` thats all. Its clean minified uglified code with coverage.

[Wanna help?](#contributing)

##Installation
```bash
$ git clone https://github.com/mr47/opensource-kit
```
bad idea but still available :
```bash
$ npm install opensource-kit
```
##Whats inside:

 - [Webpack](https://webpack.github.io/) (bundler, with demo external lib)
 - [Babel](https://babeljs.io) ( stage 0, es2015 ) 
 - [Karma](https://karma-runner.github.io) (Runner for tests)
 - [Mocha](https://mochajsorg/) (tests framework)
 - [Chai](http://chaijs.com/)
 - [Isparta](https://github.com/douglasduteil/isparta) (coverage, es2015 source quality!)
 - Sass (scss)
 - [ESLint](https://github.com/eslint/eslint)

###Additional:

 - [.editorconfig](http://editorconfig.org/)
 - [.babelrc](https://babeljs.io/docs/usage/babelrc/)

###Demo:

 - [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html)
 - [Browser sync](https://www.browsersync.io/)

##Publishing you package
To follow [semver](http://semver.org/) use follow commands (before update version in `package.json` it runs `npm run preversion`)

To make a patch:
```bash
$ npm version patch
```
To make a minor change:
```bash
$ npm version minor
```
To make a major change:
```bash
$ npm version minor
```

To publish package to npm:
```bash
$ npm publish
```

##Build
Complete build to `./dist/`
```bash
$ npm run build
```
Babel build `./lib/`
```bash
$ npm run build:babel
```
Webpack build
```bash
$ npm run build:webpack
```

##Test
It will run karma with config `karma.conf.js`
```bash
$ npm test
```
##Run Demo
```bash
$ npm run start
```

##Motivation
I writed few big/small/zero projects last months, and tested my env. For many reasons i choose some components one by another so for now its my stack for javascript code.

##TODO

See issues.

##Node and npm version tested
[![npm](https://img.shields.io/npm/v/npm.svg)]() 
[![node](https://img.shields.io/badge/node-%3E%3D5.0.0-green.svg)]() 

#CONTRIBUTING
Pull request are welcome, just fork repo.

## Installation

Install dependencies using `npm install`.

## Building

Build the source code using `npm run build`.

##License
MIT

