# Opensource kit
<p align="center">
  <a href="https://github.com/mr47/opensource-kit">
    <img alt="Open source kit" src="https://raw.githubusercontent.com/mr47/opensource-kit/master/tmp/oskit.png" width="546">
  </a>
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
Whats inside:
 - [Webpack](https://webpack.github.io/) (bundler, with demo external lib)
 - [Babel](https://babeljs.io) ( stage 0, es2015 ) 
 - [Karma](https://karma-runner.github.io) (Runner for tests)
 - [Mocha](https://mochajs.org/) (tests framework)
 - [Chai](http://chaijs.com/)
 - [Isparta](https://github.com/douglasduteil/isparta) (coverage, es2015 source quality!)
 - Sass (scss)
 - [ESLint](https://github.com/eslint/eslint)
Additional:
 - [.editorconfig](http://editorconfig.org/)
 - [.babelrc](https://babeljs.io/docs/usage/babelrc/)
Demo:
 - [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html)
 - [Browser sync](https://www.browsersync.io/)

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
Some info i will publish here and in my [blog](https://mr47.in/2016/03/20/opensource-kit/)

##License
MIT
