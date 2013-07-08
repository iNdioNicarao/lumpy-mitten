var db = require('../db');

exports.up = function(next){
  db.query('CREATE TABLE widgets ()', next);
};

exports.down = function(next){
  db.query('DROP TABLE widgets', next);
};
