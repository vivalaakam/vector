var express = require('express');
var app = express();
var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');
var port = process.env.PORT || 3000;
var compiler = webpack(config);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
