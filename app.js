var express = require('express');
var db = require('./db');
var uuid = require('uuid');

var app = express();

app.get('/api/widgets', function(req, res) {
  db.query('SELECT uuid FROM widgets', function(err, result) {
    if(err) {
      res.status(500);
      res.send({error: err});
      return console.error('error running query', err);
    }
    var rows = [];
    result.rows.forEach(function (row) {
      rows.push(row.uuid);
    });
    res.send(rows);
  });
});

app.post('/api/widgets', function(req, res) {
  res.status(201);
  var widget = {uuid: uuid.v1()};
  db.query("INSERT INTO widgets (uuid) VALUES ($1)", [widget.uuid]);
  res.send(widget);
});

var port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
