import express from 'express';
import webpack from 'webpack';
import render from './render';

const app = express();

var path = require('path');
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(express.static('static'));
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

if (process.env.NODE_ENV === 'development') {
  const config = require('./config/webpack.config.js');
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.get('/', function (req, res) {
  var request = require('request');
  request('https://player.vimeo.com/video/170509497/config', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const resp = JSON.parse(body);
      const video = resp.request.files.progressive.find(file => file.quality === '540p');
      res.send(render({ main: { videoUrl: video.url } }));
    }
  })


});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
