var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/',express.static('build/page'));
app.use('/lib', express.static('bower_components'));
app.use('/css', express.static('build/css'));
app.use('/js', express.static('build/js'));
app.use('/images', express.static('build/image'));


var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});