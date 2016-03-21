[![npm](https://img.shields.io/npm/v/npm.svg)]() 
[![node](https://img.shields.io/badge/node-%3E%3D5.0.0-green.svg)]() 
[![David](https://img.shields.io/david/mr47/opensource-kit.svg)]()
[![David](https://img.shields.io/david/dev/mr47/opensource-kit.svg)]()
[![Twitter Follow](https://img.shields.io/twitter/follow/seekmode.svg?style=social)](https://twitter.com/seekmode)

<p align="center">
    <img alt="Open source kit" src="https://raw.githubusercontent.com/mr47/opensource-kit/master/tmp/oskit.png" width="546">
</p>

> Open source kit for people who writes nice code.


###Installation
```bash
	git clone https://github.com/mr47/opensource-kit
```
bad idea but still available :
```bash
	npm install opensource-kit
```
####Whats inside:

 - [Webpack](https://webpack.github.io/) (bundler, with demo external lib)
 - [Babel](https://babeljs.io) ( stage 0, es2015 ) 
 - [Karma](https://karma-runner.github.io) (Runner for tests)
 - [Mocha](https://mochajsorg/) (tests framework)
 - [Chai](http://chaijs.com/)
 - [Isparta](https://github.com/douglasduteil/isparta) (coverage, es2015 source quality!)
 - Sass (scss)
 - [ESLint](https://github.com/eslint/eslint)

####Additional:

 - [.editorconfig](http://editorconfig.org/)
 - [.babelrc](https://babeljs.io/docs/usage/babelrc/)

####Demo:

 - [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html)
 - [Browser sync](https://www.browsersync.io/)

Basic idea it to create a production ready environment with tests and with single line to build. No need to find and test components, they all works. They all tested.

You create a lib and just run `npm run build` thats all.
Its clean minified uglified code with covarage.


##Build
Complete build to `./dist/`
```bash
	npm run build
```
Babel build `./lib/`
```bash
	npm run build:babel
```
Webpack build
```bash
	npm run build:webpack
```

##Test
```bash
	npm test
```
##Run Demo
```bash
	npm run start
```

##Motivation
I writed few big/small/zero projects last months, and tested my env. For many reasons i choose some components one by another so for now its my stack for javascript code.

##TODO


##License
MIT
