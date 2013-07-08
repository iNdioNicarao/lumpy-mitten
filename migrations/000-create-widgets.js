var db = require('../db');

exports.up = function(next){
  db.query('CREATE TABLE widgets (uuid uuid)', next);
};

exports.down = function(next){
  db.query('DROP TABLE widgets', next);
};
