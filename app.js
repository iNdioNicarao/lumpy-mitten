var express = require('express');

var app = express();

app.get('/api/widgets', function(req, res) {
  res.send([]);
});

app.post('/api/widgets', function(req, res) {
  res.status(201);
  res.send('');
});

var port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
