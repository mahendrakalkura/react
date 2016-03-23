How to install?
===============

```
$ mkdir react_1
$ cd react_1
$ git clone git@github.com:mahendrakalkura/react_1.git .
$ npm install
$ npm install --dev
$ bower install
```

How to run?
===========

```
$ cd react_1
$ browserify -t [ babelify --presets [ react ] ] index.js -o index.browserify.js
$ php -S 0.0.0.0:9999
```
