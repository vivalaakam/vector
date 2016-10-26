#!/usr/bin/env node
const fs = require('fs');

try {
  const babelrc = fs.readFileSync('./.babelrc');
  const config = JSON.parse(babelrc);
  require('babel-register')(config);

} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(err);
}

var Webpack_isomorphic_tools = require('webpack-isomorphic-tools');

var path = require('path');
var rootDir = path.resolve(__dirname, '.');

global.webpackIsomorphicTools = new Webpack_isomorphic_tools(require('./config/assets.config'))
  .server(rootDir, function () {
    require('./server')
  });
